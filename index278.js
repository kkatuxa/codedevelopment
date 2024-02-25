//254
function cube(num) {
	return num ** 3;
}
function each254(arr,callback){
    for(let i = 0; i < arr.length; i++){
        arr[i] = callback(arr[i]);
    }
    return arr;
}
let result254 = each254([1,2,3,4,5], cube);
console.log(result254);

//256
function filter256(arr, callback) {
	let res = [];

	for (let elem of arr) {
		if ( callback(elem) === true ) {
			res.push(elem);
		}
	}
	
	return res;
}
let result256 = filter256([1, 2, 3,-10, 4, 5], 
	elem => elem > 0
);
console.log(result256);

//261
function test261(){
    let num = 1;
    return function (){
        console.log(num);
        num++;
    }
}
let func261_1 = test261();
func261_1();
func261_1();
func261_1();

function test261_2(){
    let num = 10;
    return function(){
        if (num < 0){
            console.log('end');
        }else{
            console.log(num);
            num--;
        }
    }
}
let func261_2 = test261_2();
func261_2();
func261_2();
func261_2();
func261_2();
func261_2();
func261_2();
func261_2();
func261_2();
func261_2();
func261_2();
func261_2();
func261_2();
func261_2();
//269
(function() {
	return function (){
        return function (){
            console.log('!');
        }
    }
})()()();

(function(num1) {
	return function(num2){
        console.log(num1 + num2);
    }
})(1)(2);

(function(num1) {
    return function(num2){
        return function(num3){
            console.log(num1+num2+num3);
        }
    }
})(1)(2)(3);

//272
let res272 = function(){
    let num = 1;
    return function (){
        if (num < 5){
            console.log(num);
            num++
        } else {
            console.log(num);
            num = 0;
            num++;
        }
    }
}();
res272();
res272();
res272();
res272();
res272();
res272();
res272();

//274
let arr274 = [1, 2, 3, 4, 5, 6, 7];
function func274(arr){
    console.log(arr.shift());
    if (arr.length > 0){
        func274(arr);
    }
}

func274(arr274);

//275
let arr275 = [1,2,3,4,5];
function func275(arr){
    let sum = Math.pow(arr.shift(), 2);
    if (arr.length > 0){
        sum += func275(arr);
    }
    return sum;
}
console.log(func275(arr275));

//276
console.log('-------------------------')
let obj276 = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
function func276 (obj){
    for (let elem in obj){
        if (typeof obj[elem] == 'object'){
            func276(obj[elem]);
        }
        else {
            console.log(obj[elem]);
        }
    }
}
func276(obj276);

let arr276 = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
let arr1 = [];
function func276_1 (arr){
    for (let elem of arr){
        if (typeof elem == 'object'){
            func276_1(elem);
        }
        else {
            arr1.push(elem);
        }
    }
    return arr1;
}
console.log(func276_1(arr276));

//277
let obj277 = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
function func277(obj){
    let sum = 0;

    for(let elem in obj){
        if (typeof obj[elem] == 'object'){
            sum += func277(obj[elem]);
        }
        else {
            sum += obj[elem];
        }
    }
    return sum;
}
console.log(func277(obj277));

let arr277 = ['a', ['b', 'c', 'd'], ['e', 'f', 
['g', ['j', 'k']]]];
function func277_1(arr){
    let str = '';

    for(let elem of arr){
        if(typeof elem == 'object'){
            str += func277_1 (elem);
        }
        else {
            str += elem;
        }
    }
    return str;
}
console.log(func277_1(arr277));

//278
let arr278 = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
function func278(arr){
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] == 'object'){
            arr[i] = func278(arr[i]);
        }
        else {
            arr[i] = arr[i]*arr[i];
        }
    }
    return arr;
}
console.log(func278(arr278));