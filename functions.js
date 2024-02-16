//200
function func200_1(){
    console.log('Katya');
}
func200_1();
function func200_2(){
    let sum200 = 0;
    for(let i = 0; i < 100; i++){
        sum200 += i;
    }
    console.log(sum200);
}
func200_2();

//201
function func201_1(num){
    console.log(num**3)
}
func201_1(2);

function func201_2 (num){
    if (num > 0){
        console.log('+++');
    }
    else{
        console.log('---');
    }
}
func201_2(5);

//202
function func202(num1, num2, num3){
    console.log(num1 + num2 + num3);
}
func202(1,2,3);

//203
function func203(num1, num2, num3){
    console.log(num1 + num2 + num3);
}
let param203_1 = 1;
let param203_2 = 2;
let param203_3 = 3;
func203(param203_1,param203_2,param203_3);

//205
function func205_1(num){
    return Math.pow(num,3);
}
let res205 = func205_1(3);

function func205_2(num){
    return Math.sqrt(num);
}
console.log(func205_2(3) + func205_2(4));

//206
function sqrt206(num) {
	return Math.sqrt(num);
}

function round206(num) {
	return num.toFixed(3);
}
let res206_1 = round206(sqrt206(2));
console.log(res206_1);

function sum206(num1, num2, num3) {
	return num1 + num2 + num3;
}
let res206_2 = round206(sum206(sqrt206(2),sqrt206(3),sqrt206(4)));
console.log(res206_2);

//209
function func209(num){
    let count209 = 0;
    while(true){
        num/=2;
        count209 += 1;
        if (num < 10){
            return count209;
        }
    }
}
console.log(func209(100));

//211
let arr211 = [4,4,2,8];
function func211(arr){
    for(let elem of arr){
        if (elem % 2 != 0){
            return false;
        }
    }
    return true;
}
console.log(func211(arr211));

function func211_2(num){
    let x = 0;
    while (num != 0){
        x = num % 10;
        num = Math.floor(num/10);
        if (x % 2 == 0){
            return false;
        }
    }
    return true;
}
console.log(func211_2(3337));

function func211_3(arr){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] == arr[i+1]){
            return true;
        }
    }
    return false;
}
console.log(func211_3(arr211));

//212
function func212(a, b) {
	return a == b;
}

//214
function func214_1() {
	return 3;
}
function func214_2() {
	return 5;
}
console.log( func214_1() + func214_2() );

function sum214(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
		
	}
    return res;
}

console.log(sum214([1, 2, 3, 4, 5]));

//Практика на функции в JavaScript
//1
let arr1 = [1,2,3,4,5];
function sum1(arr){
    let res = 0;
    for(let elem of arr){
        res += elem;
    }
    return res;
}
console.log(sum1(arr1));

//2
function divfound(num){
    let arr = [];
    for(let i = 0; i <= num; i++){
        if (num % i == 0){
            arr.push(i);
        }
    }
    return arr;
}
console.log(divfound(10));

//3
function arrsymbol(str){
    let arr = [];
    for(let i = 0; i < str.length; i++){
        arr.push(str.substr(i,1));
    }
    return arr;
}
console.log(arrsymbol('Java Script'));

//4
function reversestr(str){
    return str.split('').reverse().join('');
}
console.log(reversestr('java'));

//5
function upper(str){
    let str1 = str.split('');
    str1[0] = str1[0].toUpperCase();
    return str1.join('');
}
console.log(upper('java'));

//6
function upperword(str){
    let arr1 = str.split(' ');
    for(let i = 0; i  < arr1.length; i++){
        let arr2 = arr1[i].split('');
        arr2[0] = arr2[0].toUpperCase();
        arr1[i] = arr2.join('');
    }
    return arr1.join(' ');
}
console.log(upperword('hello world'));

//7
function func1(num){
    let arr = [];
    for(let i = 0; i < num; i++){
        arr.push(i+1);
    }
    return arr;
}
console.log(func1(6));

//8
function func2(num){
    let x = 0;
    let res = 0;
    while(num != 0){
        x = num % 10;
        res += x;
        num = Math.floor(num/10);
    }
    return res;
}
console.log(func2(325));

//9
function leapyear(year){
    if(year % 4 != 0){
        return false;
    } else if (year % 100 != 0){
        return true;
    } else if(year % 400 == 0){
        return true;
    } else{
        return false;
    }
}
console.log(leapyear(2024));

//10
function hours24(sec){
    return Math.floor(sec/86400);
}
console.log(hours24(172900));

//11
let arr11 = [1,2,3,4,5];
function randomElem(arr){
    let rand = Math.floor(Math.random()*arr.length);
    return arr[rand];
}
console.log(randomElem(arr11));

//12
function func3(num){
    for(let i = 2; i < num; i++){
        if (num % i == 0){
            return false;
        }
    }
    return true;
}
console.log(func3(7));