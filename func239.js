//224
function func224(){
    return 'Hello World';
}
console.log(func224());
console.log(func224);
func224 = 123;
console.log(func224);

//225
function funcl225(){
    return 3;
}
let funcl225_2 = funcl225;
console.log(funcl225());
console.log(funcl225_2());

//226
let func226_1 = function(){
    return 1;
};
console.log(func226_1());

let func226_2 = function (){
    return 2;
}
console.log(func226_2());

console.log(func226_1() + func226_2());

//230
let func1 = function() {
    console.log('!');
};
let func2 = function() {
	console.log('!');
};
function func3() {
	console.log('!');
}

//237
let arr237 = [
    function () {return 1},
    function () {return 2},
    function () {return 3},
];
console.log(arr237[2]());
console.log(arr237[0]()+arr237[1]()+arr237[2]());
for(let i = 0; i < arr237.length; i++){
    console.log(arr237[i]());
}

//238
let obj238 = {
    func1: function () {return 1},
    func2: function () {return 2},
    func3: function () {return 3},
};
console.log(obj238.func1() + obj238.func2() + obj238.func3());

for(let key in obj238){
    console.log(obj238[key]());
}

//239
let obj239 = {
    sum: function(arr){
        let res = 0;
        for(let i = 0; i < arr.length; i++){
            res += arr[i];
        }
        return res;
    },
    sumsqrt: function(arr){
        let res = 0;
        for (let i = 0; i < arr.length; i++){
            res += arr[i]*arr[i];
        }
        return res;
    },
    sumcube: function(arr){
        let res = 0;
        for (let i = 0; i < arr.length; i++){
            res += arr[i]*arr[i]*arr[i];
        }
        return res;
    }
}
arr239 = [1,2,3];
console.log(obj239.sumsqrt(arr239));