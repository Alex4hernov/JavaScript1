"use strict";

// Задание №3
var x = 15;
var y = 5;
var z;
if(x>=0 && y>=0)
    alert(z = x-y);
else if(x<0 && y<0)
    alert(z = x*y);
else
    alert(z = x+y);

// Задание №4
var a = 3;
switch(a){
    case(0):
        console.log(0);
    case(1):
        console.log(1);
    case(2):
        console.log(2);
    case(3):
        console.log(3);
    case(4):
        console.log(4);
    case(5):
        console.log(5);
    case(6):
        console.log(6);    
    case(7):
        console.log(7);    
    case(8):
        console.log(8);
    case(9):
        console.log(9);
    case(10):
        console.log(10);    
    case(11):
        console.log(11);
    case(12):
        console.log(12);
    case(13):
        console.log(13);
    case(14):
        console.log(14);
    default:
        console.log(15);
   break;
}

// Задание №5
function sum(arg1, arg2)
{
    return(arg1 + arg2);
}

function mul(arg1, arg2)
{
    return(arg1*arg2);
}

function sub(arg1, arg2)
{
    return(arg1-arg2);
}

function def(arg1, arg2)
{
    return(arg1/arg2);
}

// Задание №6
function mathOperation(arg1, arg2, operation)
{
    switch(operation){
        case(sum):
            return sum(arg1, arg2);
            break;
        case(mul):
            return mul(arg1, arg2);
            break;
        case(def):
            return def(arg1, arg2);
            break;
        case(sub):
            return sub(arg1, arg2);
            break;
    }
}
alert(mathOperation(2, 4, sub));


// Задание №8
function power(a, n)
{
    if(n > 1){
      a *= power(a, n-1);   
    }
    return a;
}
    alert(power(2, 8));




