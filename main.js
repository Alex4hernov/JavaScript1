"use strict";

// Задание №1
var i = 2;
var j = 2;
while(i < 100){
    i++;
    j = 2;
    while(j <= i){ 
        if(i % j == 0) break;
        else {j++    
        }
           console.log(i);
    }
} // Вывод данных не совсем корректный. Во унтреннем массиве была мысль перебирать числа пока делитель не будет найден и прекращать перебор когда он будет найден, но что-то пошло не так

// Задание №2
var i = 0;
do{
    if(i == 0){
        console.log(0 + ' -  ноль');
    }
    else if(i % 2 == 0){
        console.log(i + ' - четное число');
    }
    else {
        console.log(i + ' - нечетное число');
    }
    i++;
} while(i <= 10);


// Задание №3
for(var i = 0; i <= 9; console.log(i++ + ' ')){
    
};


// Задание №4
var arr = [];
var k = 0;
        while (k < 20){
            k++;
            arr.push('x');
            var str = arr.join(' ');
            console.log(str);
        }
