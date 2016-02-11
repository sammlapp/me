/*************************************************************************************
* STANGING SOUND WAVE VISUALIZATION
* 
* Why does a sound wave have displacement nodes at the same locations as pressure antinodes? (and vice versa)
*
* This visualization demonstrates how the actual air particles move in a standing wave
* 
*#######CONTROLS##########
* R             Restart
* SPACEBSAR     Play/Pause
* 
* NOTE: pressing SPACEBAR will *RESTART* the animation if you have not clicked in the pane
* 
* this visualization may be helpful when studying "Standing Waves in Tubes"
* (https://www.khanacademy.org/test-prep/mcat/physical-processes/sound/v/standing-waves-in-tubes-part-1)
* 
* by Sam Lapp
***********************************************************************************/
var xVelocity=0; //used for animating particles
var x=10, y = 15; //used for animation dot coordinates
var time=0; //increases by 1 each iteration of draw
var play=true; //false will pause dots
var timeOn=true; //false will pause entire animation

var fill1=10, fill2=50, fill3=150; //color of particles

var t1x=10, t1y=600; //x, y position of left triangle
var t2x=-20, t2y=240; //x, y position of bullet point triangle
var text1x=width, text2y=height+20, text3y=height+20; //start text off to right and bottom
var text4x=width, text5y=height+20, text6y=height+20; //start text off to right

var c1x=90, c1y=height+20; //ellipse possitions starts off bottom
var c2x=-20;//bullet point is off to left

var tsize=1; //used at end for text size

noStroke();

var initialize=function(){//for restart, to reset variables
    time=0;
    timeOn=true;
    //Initialize shape locations (off screen)
    t1x=10; t1y=600;
    t2x=-20; t2y=240;
    text1x=width; text2y=height+20; text3y=height+20;
    text4x=width; text5y=height+20; text6y=height+20;
    c1x=90; c1y=height+20; 
    c2x=-20;
    fill(255,255,255);
    rect(0,0,500,500);
};
    
var draw = function() {
    //draw new background for lower half--to prevent paused dots from disappearing
    fill(255,255,255);
    rect(0,220,1000,1000);
    
    if(play){//run the dots animation
    
    //draw new background, full screen
    fill(255,255,255);
    rect(0,0,1000,1000);
    
     //position axis
    fill(0, 0, 0);
    rect(5,15,380,5);
    triangle(385,10,385,25,400,17.5);
    text("Position", 19,13);
    
    //**Particle Animation**
    for (var i=0; i<35; i++){
    
    fill1=10; fill2=50; fill3=150;
    
    //highlight velocity nodes
    if (i!==0 && i!==8 && i!== 16 && time>250 && time<1100){
        fill1=100; fill2=150; fill3=250;//lighter color for all except nodes
    }
    
    xVelocity=40*sin(time)*sin(i*180/8);
        fill(fill1,fill2,fill3);
        //draw a column of dots (small ellipses)
        for (var j=1; j<10; j++){
            ellipse(x+xVelocity,y,10,10);
            y+=20;
        }
        y=30;
        x+=20;
        }
    x=10;
    } //end of moving dots animation
    
    
    //**blue marker triangles**
    if (t1y>200 && time> 200){//move triangles up from bottom
        t1y-=8;
    }
    if (t2x<10 &&time> 300){//move bullet in from left
        t2x+=1;
    }
    
    
    fill(41, 174, 179);
    triangle(t1x,t1y,t1x-10,t1y+20,t1x+10,t1y+20); //left triangle
    triangle(t1x+160,t1y,t1x-10+160,t1y+20,t1x+10+160,t1y+20); //middle triangle
    triangle(t1x+320,t1y,t1x-10+320,t1y+20,t1x+10+320,t1y+20); //right triangle
    triangle(t2x,t2y,t2x,t2y+20,t2x+20,t2y+10);//bullet point triangle
    
    if (text1x > 40 && time>300){ //text comes from right
            text1x-=10;}
    if (text2y > 280 && time>400){ //text comes from bottom
            text2y-=10;}
    if (text3y > 300 && time>500){ //text comes from bottom
            text3y-=10;}
    textSize(15);
    text("Velocity Nodes Are Pressure anti-nodes:",text1x,257);
    text("      Particles do not move (velocity=0)",40,text2y);
    text("      Pressure varies from max to min over time",40,text3y);
    
    //pause animation for a cycle, when sine curve is first drawn
    if (time>270)
        {play=false;}
    if (time>670)
        {play=true;}
        
    //DRAW A SINE WAVE PRESSURE CURVE THAT CHANGES OVER TIME 
    //(on top of particles)
    if((time>570 && time<1100) || time>2400 && time<2800){
    
    for (var xDot=0; xDot<500; xDot++){
        fill(50, 161, 78);
        if (time>670){
        ellipse(xDot,90*cos(xDot+190)+105+180*cos(time/2-225)*cos(time/2-225)*cos(xDot),18,5); //phew, not sure that was the moste efficient way but it works
        }
        else {ellipse(xDot,90*cos(xDot+190)+105,18,5);}
        fill(255, 255, 255);
    }
    rotate(56);
    if(time<670 ||(time>2000 && time<2800)){
    text("PRESSURE",72,-2);
    } 
    rotate(-56);
    }
    
    //**Red marker circles**
    fill(138, 15, 50);
    if (c1y>210 && time>1200){ //markers enter
        c1y-=6;
    }
    if (c2x<20 && time>1300){ //bullet point
        c2x+=1;
    }
    ellipse(c1x,c1y,15,15);//90,210,15,15);
    ellipse(c1x+160,c1y,15,15);
    ellipse(c2x,330,15,15);
 
if (text4x > 40 && time > 1300){
            text4x-=10;
    }
if (text5y>360 &&time>1400){
    text5y-=10;
}
if (text6y>380 &&time>1500){
    text6y-=10;
}
    text("Pressure Nodes Are Velocity anti-nodes:",text4x,336);
    text("      Pressure (dot-density) does not change",40,text5y);
    text("      Velocity ranges from max (to the right) to min (left)",40,text6y);
if (time>1300 && time < 1900 ){
    fill(138, 15, 50);
    for(var i = 0; i <= (time-1300)*5 && i<=190; i++){
        ellipse(c1x,c1y-i,15,15);
        ellipse(c1x+160,c1y-i,15,15);
    }

}
    
    //DRAW VELOCITY CURVE
    if(time>2000 && time<2800){
    
    for (var xDot=0; xDot<500; xDot++){
        fill(161, 35, 161);
        ellipse(xDot,-90*cos(xDot+100)+105-180*cos(time/2)*cos(time/2)*sin(xDot),18,5);}
    rotate(-56); 
    fill(255, 255, 255);
    text("VELOCITY",-65,206);
    rotate(56);
    }
    
    //DRAW A VELOCITY VECTOR
    if (time>1500 && time<2200){
        fill(138, 15, 50);
        rect(90,208,40*cos(time),5);
        triangle(90+40*cos(time)+15*cos(time)/abs(cos(time)),210,90+40*cos(time),202,90+40*cos(time),218);
        
        rect(250,208,40*cos(time+180),5);
        triangle(250+40*cos(time+180)+15*cos(time+180)/abs(cos(time+180)),210,250+40*cos(time+180),202,250+40*cos(time+180),218);
    
    textSize(12);
    text("Velocity Vector", 45, 235);
    }
    
    if(time>2800){
        textSize(12);
        fill(189, 148, 209);
        text("press R to restart",120,235);
    }
    
    if (timeOn!==false){
    time++;
    }//only runs if timeON==true 
};  

var keyPressed=function(){
    if (keyCode===32){//SPACEBAR for play/pause
       if (timeOn){timeOn=false;} 
       else {timeOn=true;}
    }
    if (keyCode===82){//R restarts
        initialize();
    }
};
