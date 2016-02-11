<?php
session_start();
require('fpdf.php');
class PDF extends FPDF

//This program creates a PDF with a summary of the explorer tool results, using user-selected database, gender, measures, and percentiles
{//page header and footer
function Header()
	{
		//logo
		$this->Image('logo.png',0,0,50);
		$this->SetFont('Helvetica','B',18);
		$this->SetFillColor(200,207,245);
		$this->SetXY(50,0);
		$this->SetTextColor(255,255,255);
		$this->Cell(110,22,"Explorer Results Summary",0,0,'C',1); //page width is 210
		$this->SetFont('Helvetica','B',10);
		$this->Cell(50,22,'Page ' .$this->PageNo().' of {nb}',0,0,'R',1);
		$this->Ln(5);		
		}
//page footer
function Footer()
	{
	$this->SetY(-17);
	$this->SetFont('Helvetica','',9);
	//Page number
	$this->Cell(0,10,'Page ' .$this->PageNo().' of {nb}',0,0,'C',0,1);
			$this->setX(200);
			$this->SetFont('Helvetica','',9);
			date_default_timezone_set('America/New_York');
			$this->Cell(0,10, 'Created on '. date('n/j/Y \a\t g:i a'),0,1,'R',0);
			$current_url = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://{$_SERVER[HTTP_HOST]}{$_SERVER[REQUEST_URI]}";
			$this->setXY(200,285);			
			$this->Cell(0,10,'from: '.$current_url,0,1,'R',0);
}



}
//new page

$pdf=new PDF();
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->SetFont('Helvetica','',11);
$pdf->SetMargins(20,10,20);

{//input variables
$database=$_SESSION['database'];$database=strtoupper($database);
$gender=$_SESSION['gender'];
		if ($gender=='1'){
			$sex='male'; }
		elseif($gender=='2'){
			$sex='female';}
		elseif($gender=='3'){
			$sex='entire';}
			
$selectedMeasures=$_SESSION['measures'];//list of the input dimensions
$userInput=$_SESSION['userInput'];//percentiles from sliders
$userInputValue=$_SESSION['userInputValue']; //result of slider percentile
$setValues=$_SESSION['setValues']; //table values

//descriptions:
$dbhandle = new PDO('sqlite:../data/data.sqlite');
$query = "SELECT description FROM database_definitions";
$result = $dbhandle->query($query);
$dbDescription = $result->fetchAll(PDO::FETCH_ASSOC);

$measureImages=array(
'Stature'=>'stature.png',
'BMI'=>'noimage.png',
'Buttock-Knee Length'=>'butt_knee_len.png',
'Chest Circumference'=>'chest_circ.png',
'Eye Height, Sitting'=>'eye_ht_sit.png',
'Hip Breadth, Sitting'=>'hip_br_sit.png',
'Trochanterion Height'=>'troch_ht.png',
'Sitting Height'=>'sit_ht.png',
'Head Circumference'=>'head_circ.png',
'Acromion Radiale Length'=>'acr_radl_lnth.png',
'Radiale-Stylion Length'=>'radiale_stylion_lnth.png',
'Hand Length'=>'hand_len.png',
'Forearm-Hand Length'=>'forearm_hand_len.png',
'Sleeve Outseam Length'=>'sleeve_outseam_lnth.png',
'Biacromial Breadth'=>'bi_acro_br.png',
'Bideltoid Breadth'=>'bidelt_br.png',
'Waist Circumference, Omphalion'=>'waist_circ_mid_abd.png',
'Buttock Circumference'=>'butt_circ.png',
'Foot Length'=>'foot_len.png',
'Knee Height Sitting'=>'knee_ht_sitting.png',
'Acromial Height'=>'acro_ht.png');
//end input variables 
}


$pdf->ln(20);
{// Intro text:
if($database=='ANSUR')
{//ANSUR Intro
	$pdf->Write(6,'The Open Design Lab ');
		$pdf->SetFont('Helvetica','U',11);
		$pdf->SetTextColor(0,0,255);
		$pdf->Write(6,'Explorer tool', 'http://openlab.psu.edu/tools/explorer.php');
		$pdf->SetFont('Helvetica','',11);
		$pdf->SetTextColor(0,0,0);
	$pdf->Write(6,' provides data from the NHANES and ANSUR databases for user-selected anthropometric measurements. This document summarizes a set of percentile-values for each measurement selected by the user, as well as the exact percentage selected in the tool. Bell curves for each measurement are specific to the user-specified database and gender.
	
About the ANSUR Database:
'.$dbDescription[0]['description'].'

This document provides information for the '.$sex.' population of the '.$database.' database.
To further explore the OpenLab design tools, visit ');
		$pdf->SetFont('Helvetica','U',11);
		$pdf->SetTextColor(0,0,255);
		$pdf->Write(6,'openlab.psu.edu/design-tools','http://openlab.psu.edu/design-tools/');
		$pdf->SetFont('Helvetica','',11);
		$pdf->SetTextColor(0,0,0);
}

//NHANES INTRO:
if($database!=='ANSUR')
{//intro text for NHANES database
$pdf->Write(6,
		'The Open Design Lab ');
		$pdf->SetFont('Helvetica','U',11);
		$pdf->SetTextColor(0,0,255);
		$pdf->Write(6,'Explorer tool', 'http://openlab.psu.edu/tools/explorer.php');
		$pdf->SetFont('Helvetica','',11);
		$pdf->SetTextColor(0,0,0);
		$pdf->Write(6,' provides data from the NHANES and ANSUR databases for user-selected anthropometric measurements. This document summarizes a set of percentile-values for each measurement selected by the user, as well as the exact percentage selected in the tool. Bell curves for each measurement are specific to the user-specified database and gender.

About the NHANES database: 
'.$dbDescription[1]['description'].'

This document provides information for the '.$sex.' population of the '.$database.' database.
To further explore the OpenLab design toos, visit ');
		$pdf->SetFont('Helvetica','U',11);
		$pdf->SetTextColor(0,0,255);
		$pdf->Write(6,'openlab.psu.edu/design-tools','http://openlab.psu.edu/design-tools/');
		$pdf->SetFont('Helvetica','',11);
}}
$pdf->ln();
{//WriteMeasureInfo Blocks
$measureNo=0;

foreach  ($selectedMeasures as $measure)
{
	//page break for every third and after #2
	if ($measureNo==2 or ($measureNo>4 and ($measureNo-2)%3==0))
		 {$pdf->AddPage();
		 if(($pdf->pageNo())>1){
		 	$pdf->setY(25);$pdf->Write(6,'Continued summary of measurements:');$pdf->ln();}
		} 
//title bar
$pdf->ln();
$pdf->setX(0);
$pdf->SetFillColor(60,60,100);$pdf->SetTextColor(255,255,255);
		$pdf->SetFont('Helvetica','B',13);
$pdf->Cell(20,7,"",0,0,0,1);$pdf->Cell(220,7,$measure,0,0,1,1);


		$pdf->SetFont('Helvetica','',11);
		$pdf->ln(15);
		
		
//images

$canvasData=$_SESSION['canvasData'];

// Remove the headers (data:,) part.
$filteredData=substr($canvasData[$measureNo], strpos($canvasData[$measureNo], ",")+1);

// Need to decode before saving since the data we received is already base64 encoded
$unencodedData=base64_decode($filteredData);

// Save file to pdfchart.png
$image = fopen( './charts/pdfchart'.$measureNo.'.png', 'wb');
fwrite( $image, $unencodedData);
fclose( $image );
//imagepng($image,'./pdfchart.png',8);

$pdf->Cell(50,30,$pdf->Image('../images/anthro/'.$measureImages[$measure],25,$pdf->GetY(),20));
$pdf->Cell(50,30,$pdf->Image('./charts/pdfchart'.$measureNo.'.png',55,$pdf->GetY(),75));


{//Table of percentiles and values
$pdf->SetFillColor(130,130,230);
$units='BMI'; if($measure!='BMI'){$units='Value (mm)';} //set units in title bar
$pdf->Cell(15,6,'');$pdf->Cell(25,6,"Percentile",NULL,NULL,NULL,1);$pdf->Cell(23,6,$units,0,1,NULL,1);//title bar
		$pdf->SetTextColor(NULL);$pdf->SetFont('Helvetica','B',11);
//user-percentile (First row)
$pdf->Cell(115,5,""); $pdf->Cell(25,5,$userInput[$measureNo],0,0,"C");
			$pdf->Cell(23,5,round($userInputValue[$measureNo]),0,1,"C");//cuts number off at 5 characters			
			$pdf->Cell(15,6,'');$pdf->SetFont('Helvetica','',11); $pdf->SetFillColor(50,50,100); $pdf->Cell(100,.25,"");$pdf->Cell(48,.25,"",0,1,"",1);//line break
//rest of the table: set percentiles
for ($x=0;$x<9;$x++){
		$perc=array(1,5,10,25,50,75,90,95,99);
		$Values=explode(",",$setValues[$measureNo]);
		$pdf->Cell(15,6,'');$pdf->Cell(100,5,""); $pdf->Cell(25,5,$perc[$x],0,0,"C");$pdf->Cell(23,5,round($Values[$x]),0,1,"C");//rounded
		}
}	
$measureNo+=1;
}
//end WriteMeasureInfo
}


$pdf->Output('Anthropometric Measures','D');
	
?>