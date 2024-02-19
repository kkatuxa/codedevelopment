//240
test240 (
    function() {return 1;},
    function() {return 2;},
    function() {return 3;}
);
function test240(func240_1, func240_2, func240_3){
    console.log(func240_1() + func240_2() + func240_3());
}

//241
function test241(func241_1,func241_2,func241_3){
    return func241_1()+func241_2()+func241_3();
}
function func241_1(){
    return 1;
}
function func241_2(){
    return 2;
}
function func241_3(){
    return 3;
}
console.log(test241(func241_1,func241_2,func241_3));

let func241_11 = function(){
    return 1;
}
let func241_22 = function(){
    return 2;
}
let func241_33 = function(){
    return 3;
}

//242
function test242(func) {
    console.log(func());
}
test242(
    function(num){
        return num * num * num;
    }
)
test242(
    function func1(num){
        return num * num * num;
    }
)
test242(
    func1 = function (num){
        return num * num * num;
    }
)

function test242_1 (func1, func2){
    return func1()+func2();
}
console.log(
    test242_1(
    function (){
        return 1;
    },
    function (){
        return 2;
    }
)
)

//243
function test243(num, func1, func2) {
	return func1(num) + func2(num);
}
console.log(test243(3,function(num){
    return num * num;
}, 
function(num){
    return num * num * num;
}
));

//244
function test244(arr, func){
    for(let i = 0; i < arr.length; i++){
        arr[i] = func(arr[i]);
    }

    return arr;
}

let res = test244 ([1,2,3,4,5], function (num){
    return num * num * num;
})
console.log(res);

//245
function func245(num1, num2){
    function square(num){
        return num * num;
    }
    function cube(num){
        return num * num * num;
    }
    return square(num1) + cube(num2);
}
console.log(func245(2,3));

//250
function func1_250(){
    return function (){
        return 1;
    }
}
function func2_250(){
    return function (){
        return 2;
    }
}
console.log(func1_250()()+func2_250()());

//251
function func251(){
    return function (){
        return function (){
            return function (){
                return function(){
                    return '!';
                }
            }
        }
    }
}
console.log (func251()()()()());

//252
function func252(num1){
    return function(num2){
        return function(num3){
            return num1 + num2 + num3;
        }
    }
}
console.log(func252(2)(3)(4));

let arr252 = [];
function func252_1(num1){
    return function(num2){
        return function(num3){
            return function(num4){
                return function(){
                    return arr252 = [num1,num2,num3,num4];
                }
            }
        }
    }
}
console.log(func252_1(2)(3)(4)(5)());

//253
function each253(arr, callback){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        res.push(callback(arr[i]));
    }
    return res;
}
let result253 = each253([1,2,3,4,5], function(num){
    return num * 2;
});
console.log(result253);

function each253_1(str, callback){
    let arr = str.split('');
    arr = callback(arr).join('');
    return arr;
}
let result253_1 = each253_1('hello',function(arr){
    return arr.reverse();
});
console.log(result253_1);