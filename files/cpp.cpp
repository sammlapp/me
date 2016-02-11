#include <iostream>

using namespace std;

/**
* @file Lab9.cpp
* This file is the main body of Lab9 for CMPSC 201.
* This program calculates price after tax and discount, given list price
* The program will continue to run until the user enters 0 for listPrice
*
* INPUT:
* listPrice, taxRate, discount (yes or no)
* OUTPUT:
* totalPrice (price after tax), discountPrice (price after discount)
*
* @author Sam Lapp (sol5484@psu.edu)
* @date 11/16/2014
* SECTION 005
*
* @brief CMPSC 201 Lab9
*/

//Function Prototypes
void getPrice(double, double, double, double, char);

//main
int main()
{
//Data Dictionary
double listPrice=1, taxRate, totalPrice, discountPrice;
char discount;

	
//Program header
cout<<"CMPSC 201 Lab 9\n";
cout<<"This program calculates a total price and a discount price.\n";

//While loop for program body -- runs until listPrice is 0
while(listPrice!=0)
{
cout<<"Enter the list price: ";
cin>>listPrice;
cout<<"\nEnter the tax rate: ";
cin>>taxRate;
cout<<"\nDiscount? <Y/N> ";
cin>>discount;
getPrice(listPrice,taxRate,totalPrice,discountPrice,discount);
cout<<"The total price is: "<<totalPrice<<endl;
if(discount=='Y')
{
	cout<<"The discounted price is: "<<discountPrice<<endl;
}
cout<<endl;
}//end of while loop

return 0;
}

//Function Definitions

/*
this function calculates the total price and discount price
*@param	originalPrice	the price before tax or discount
*@param	taxRate				user-defined tax rate, as a decimal
*@param	totalPrice			the price after tax, without discount	
*@param	discountPrice	the price after discount (only if discount is Y)
*@param	discount			either Y for discount or N for no discount

*@return		this function has no return value
						the function changes the values of totalPrice and discountPrice
*/
void getPrice(double originalPrice, double taxRate, double &totalPrice, double &discountPrice, char discount)
{

	double discountRate=.05; //sets a 5% discount
	
	totalPrice=originalPrice*taxRate;
	if(discount=='Y')
	{
		discountPrice=totalPrice*(1-discountRate);
	}
	return;
}