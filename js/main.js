"use strict";

// Задание №1
var objNumber = {};
function NumToObj(){
    var arrNumber = inputNumber.split('');
    while(arrNumber.length < 3){
            arrNumber.unshift(0);
        }
    if (arrNumber.length > 3){
        return null;
    }
    else {
        objNumber['сотни'] = +arrNumber[0];
        objNumber['десятки'] = +arrNumber[1];
        objNumber['единицы'] = +arrNumber[2];
        return objNumber;
    }
}
var inputNumber = prompt('Ведите число от 0 до 999');
if (NumToObj(inputNumber) == null){
console.log('Введено неверное кол-во символов');   
}
else {
    console.log(objNumber);
}


// Задание №2
var products = [{
    id: 1,
    title: 'item 1',
    price: 10,
    },{
    id: 2,
    title: 'item 2',
    price: 20,
    },{
    id: 3,
    title: 'item 3',
    price: 30,
    },
];
var cart = {
    products: [],
    sum: 0,
    setProducts(products){
        this.products = products;
        this.countTotalPrice();
    },
    countTotalPrice(){
        var sum = 0;
        for(var i = 0; i < this.products.length; i++) {
            sum += this.products[i].price;
        }
        this.sum = sum;
    }
};
console.log(cart);
cart.setProducts(products);
