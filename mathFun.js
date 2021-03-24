
/**
 * 
 * Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. 
 * It should also log a string like: "The area for a circle with radius 2 is 12.566370614359172."
 * Bonus: Round the result so there are only two digits after the decimal.
 * 
 */



//global variables so I can use them in another function
let area;
let roundArea;

function areaOfCircle(radius){
    area= Math.PI * radius**2;               //Exponents: Math.pow(r,2) = r**2
    roundArea= area.toFixed(2);             //round to 2 decimal places
    console.log("The area of a circle is " + roundArea + ".");
};

//test cases
areaOfCircle(2.78);
areaOfCircle(5);
areaOfCircle(100);
areaOfCircle(3/4);


/**
 * 
 * Write a function that will take one argument (a number) and perform the following operations, 
 * using the functions you wrote earlier1:
 * 
 * 1. Take half of the number and store the result.
 * 2. Square the result of #1 and store that result.
 * 3. Calculate the area of a circle with the result of #2 as the radius.
 * 4. Calculate what percentage that area is of the squared result (#3).
 * 
 * 
 */


let num;
function half(x){
    num = x/2;
    console.log(num);
};
half(4);


let r;
function squared(num){
    r= Math.pow(num, 2);
    console.log(r);
};
squared(num);


areaOfCircle(r);
//console.log(roundArea);


function percent(a,b){
    let percentage = (a/b * 100).toFixed(1); //round percent to 1 decimal place
    console.log(percentage + '%');
};
percent(r,roundArea);
percent(roundArea,r);







