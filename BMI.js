//console.log('please choose any option');
console.log('Enter 1 for BMI calculation');
console.log('Enter 2 for life calculation');
console.log('Enter 3 for tweet character checking');
console.log('Enter 4 for weight calculation');
console.log('Enter 5 to order pizza');
let option=parseInt(prompt('please choose any option from 1 to 5'));
console.log(`you entered  ${option}`);

switch(option)
{
case 1:
console.log('BMI calculation');

let weight=prompt('Enter your weight in kilograms');
weight=parseInt(weight);
let height=prompt('Enter your height in meters');
height=parseInt (height);
console.log('WEIGHT = ' +weight);
console.log('HEIGHT = ' +height);
console.log(`Your weight is ${weight} and your height is ${height} then your BMI is = ${weight / height ** 2} `);
break;

case 2:
    alert('REMAINING LIFE!!!!!')
    console.log('REMAINING LIFE!!!!!');
    
let age=Math.floor(Math.abs(parseInt(prompt('Please! Enter your age in years.'))));



// if we live until 90 years then the remaining years wiil be (90- current age)
remainingYears= 90 - age;
remainingWeeks= remainingYears * 52;

//as there are 52 weeks in a year

console.log(`Your age is ${age} years` ); 
console.log(`your age in weeks is ${age * 52} `);

if(isNaN(age) || age<=0 || age>90)
{
    console.log('Please! enter valid age');
    
}
else 
{
    console.log(`You have only ${remainingYears} years left!`);
    console.log(`You are left with only ${remainingWeeks} weeks!`);
}

break;
case 3:
    console.log('TWEET CHECKER EXERCISE');

let tweet=prompt('PLEASE! type your tweet here.');
if(tweet.length<=140)
{
    console.log(`That ${tweet.length} cahr tweet will work!`);
}
else{
    console.log(`your ${tweet.length} char tweet is ${tweet.length - 140} char too long`);
    
}
break;
case 4:
console.log("'WEIGHT  CALCULATIONS'");

let  height1=parseInt(prompt('Please! enter your height in inches.')) ;
let weight1= parseFloat(prompt('please enter your weight in pounds.'));
console.log(`your height in inches is= ${height1} ` );
console.log(`your weight in pounds is= ${weight1} ` );
let bmi=(weight1 * 703) / Math.pow(height1,2);
console.log(`your BMI is=  ${bmi}`);
let category;
switch(true)
{
    case (bmi < 16.0):
        category = "Severely Underweight";
        break;
    case (bmi >= 16.0 && bmi <= 18.4):
        category = "Underweight";
        break;
    case (bmi >= 18.5 && bmi <= 24.9):
        category = "Normal";
        break;
    case (bmi >= 25.0 && bmi <= 29.9):
        category = "Overweight";
        break;
    case (bmi >= 30.0 && bmi <= 34.9):
        category = "Moderately Obese";
        break;
    case (bmi >= 35.0 && bmi <= 39.9):
        category = "Severely Obese";
        break;
    default:
        category = "Morbidly Obese";
}

console.log(`Your BMI of ${bmi} makes you ${category}`);
break;
case 5:
    alert('THANKYOU! for choosing JS pizza deliveries.');
console.log('THANKYOU! for choosing JS pizza deliveries.');

let size=prompt('what size of pizza you want? (S / M / L)').toUpperCase();
let bill=0;

// pizza size
if(size==='S')
{
    console.log('Small pizza is of $15');
    bill=15;
}
else if(size==='M' )
{
    console.log('Medium pizza is of $20');
    bill=20;
}
else if(size==='L' )
    {
        console.log('large pizza is of $25');
        bill=25;
    }
else{
    console.log(`Please enter 'S' for small size , 'M' for medium size and 'L' for large size `);
    
}
    //pepperoni cost

    let pepperoni=prompt('Add pepperoni? (Y / N)').toUpperCase();
    if (pepperoni==='Y' && size=== 'M')
         {
        console.log('pepperoni cost= $3');
        bill+=3;
        }
        else if( pepperoni==='Y' && size=== 'L')
        {
            console.log('pepperoni cost= $3');
            bill+=3;
        }
        else if(pepperoni==='Y' && size=== 'S')
        {
            console.log('pepperoni cost= $2');
        bill+=2;
        }
        else if(pepperoni==='N')
            {
            bill+=0;
            }
        else{
            console.log(`Please enter 'y' for YES and 'N' for NO `);
        }

        // cheese cost
        let extraCheese=prompt('Add Extra cheese? (Y / N)').toUpperCase();
     if (extraCheese==='Y') 
        {
            console.log('Extra Cheese cost= $1');
             bill+=1
        }
       else if (extraCheese==='N') 
            {
               
                 bill+=0;
            }
        else{
            console.log(`Please enter 'y' for YES and 'N' for NO `);
        }
        
console.log(`Your total bill is $${bill} `);
break;
default:
    console.log('please enter correct option');
    break;
}

