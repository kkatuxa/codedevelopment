//279.1
let arr279_1 = [4,9,16,25];
let newarr279_1 = arr279_1.map(function(elem, index, arr){
    return Math.sqrt(elem);
})
console.log(newarr279_1);

//279.2
let arr279_2 = ['gfegas','ergarg','wergerwgaw'];
let newarr279_2 = arr279_2.map(function(elem,index,arr){
    return elem + '!';
})
console.log(newarr279_2);

//279.3
let arr279_3 = ['hello','jsrefkh','febihrgvb'];
let newarr279_3 = arr279_3.map(function(elem, index, arr){
    let newelem = [];
    for(let i = 0; i < elem.length; i++){
        newelem.unshift(elem[i]);
    }
    return newelem.join('');
})
console.log(newarr279_3);

//279.4
let arr279_4 = ['123', '456', '789'];
let newarr279_4 = arr279_4.map(function(elem, index, arr){
    let newarr = [];
    let newelem;
    let arr1;
    for(let i = 0; i < 3; i++){
        newelem = elem[i].split('');
        newarr[i] = [];
        for(let j = 0; j < 3; j++){
            newarr[i][j] = newelem[j];
        }
        
    }
    return newarr;
})
console.log(newarr279_4);

//279.5
let arr279_5 = [1,2,3,4,5];
let newarr279_5 = arr279_5.map(function(elem, index){
    return elem * index;
})
console.log(newarr279_5);

//280
let arr280 = [1,2,3,4,5];
let res280 = 0;
arr280.forEach(function(elem,index,arr){
    res280 += elem**2;
})
console.log(res280);

//281.1
let arr281_1 = [1,2,3,4,5,-10,15];
let newarr281_1 = arr281_1.filter(function (elem,index,arr){
    if (elem > 0){
        return true;
    } else{
        return false;
    }
})
console.log(newarr281_1);

//281.2
let arr281_2 = [1,2,-5,6,-10,-8];
let newarr281_2 = arr281_2.filter(function(elem,index,arr){
    if (elem < 0){
        return true;
    }
    else {
        return false;
    }
})
console.log(newarr281_2);

//281.3
let arr281_3 = [1,2,4,16,17,58];
let newarr281_3 = arr281_3.filter(function(elem,index,arr){
    if (elem > 0 && elem < 10){
        return true;
    }
    else {
        return false;
    }
})
console.log(newarr281_3);

//281.4
let arr281_4 = ['beafjbsf','orgoeuibr','fjf'];
let newarr281_4 = arr281_4.filter(function(elem, index){
    let arr = elem.split('');
    if (arr.length > 5){
        return true;
    } else{
        return false;
    }
})
console.log(newarr281_4);

//281.5
let arr281_5 = [1,2,3,4,5,6,7,8,9];
let newarr281_5 = arr281_5.filter(function(elem, index){
    if (elem * index < 30){
        return true;
    }
    else {
        return false;
    }
})
console.log(newarr281_5);

//281.6
let arr281_6 = [1, 2, [3, 4], 5, [6, 7]];
let newarr281_6 = arr281_6.filter(function(elem,index){
    if (typeof elem == 'object'){
        return false;
    }
    else {
        return true;
    }
})
console.log(newarr281_6);

//282.1
let arr282_1 = [1,2,4,5,-10];
let newarr282_1 = arr282_1.every(function(elem){
    if (elem > 0){
        return true;
    }
    else{
        return false;
    }
})
console.log(newarr282_1);

//282.2
let arr282_2 = [1,2,3,5];
let newarr282_2 = arr282_2.every(function(elem,index){
    if (elem * index < 30){
        return true;
    }
    else{
        return false;
    }
})
console.log(newarr282_2);

//283.1
let arr283_1 = [0,0,-10,-50];
let newarr283_1 = arr283_1.some(elem => elem > 0);
console.log(newarr283_1);

//283.2
let arr283_2 = [1,2,3,4];
let newarr283_2 = arr283_2.some((elem, index) => elem * index > 30);
console.log(newarr283_2);

//286
let arr286 = [1, 2, 3, 4, 5];
function func286(num1, num2, num3, 
	num4, num5) { 
	return num1 + num2 + num3 + num4 
		+ num5; 
}
console.log(func286(...arr286));

//288
let arr288 = [1, 2, 3, 4, 5];
console.log(Math.min(...arr288));

//293
function func293(...nums){
    let sum = 0;
    let count = 0;
    for(let num of nums){
        sum += num;
        count++;
    }
    return sum / count;
}
console.log(func293(1,2,3));