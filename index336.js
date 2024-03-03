//311
let date = new Date();
console.log(date.getDate());
console.log(date.getMonth()+1);
console.log(date.getFullYear());

function addZero(num){
    if (num >= 0 && num <=9){
        return '0' + num;
    } else {
        return num;
    }
}
//312
console.log(addZero(date.getHours())+':'+addZero(date.getMinutes())+':'+addZero(date.getSeconds()));
console.log(addZero(date.getDate())+'.'+addZero(date.getMonth() + 1)+'.'+date.getFullYear()+'.');

//313
let str313 = '2025-12-31';
console.log(str313.split('-').reverse().join('.'));

//314
let day314 = date.getDay();
console.log(day314);

if (day314 == 0 || day314 == 6){
    console.log('+++');
} else{
    console.log('---');
}

console.log(Math.abs(day314 - 6));

//315
let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 
		'июн', 
	'июл', 'авг', 'сен', 'окт', 'ноя', 
		'дек' 
];
let day315 = date.getMonth();
console.log(months[day315]);

//316
let datebd = new Date(2024,1,21);
console.log(datebd.getDay());

//317
let date1 = new Date(2025,0,1);
console.log(date1.getTime());

//318
let date_1 = new Date(1988,2,1);
let date_2 = new Date(2000,0,10);
let num318 = date_2 - date_1;
console.log((num318/1000)/60/60/24);

//319
let date319_1 = new Date(2000,8,1);
let date319_2 = new Date(2010,1,15);
let res319 = date319_2 - date319_1;
console.log(res319);
console.log((((res319/1000)/60)/60)/24);
console.log(((((res319/1000)/60)/60)/24)/30);
console.log((((((res319/1000)/60)/60)/24)/30)/12);

//321
function func321(month, year){
    let date = new Date(year, month, 0)
    return date.getDate();
}
console.log(func321(5,2025));

//322
function isLeap(year){
    let date = new Date(year, 2, 0);
    if (date.getDate() == 29){
        return true;
    } else{
        return false;
    }
}
console.log(isLeap(2024));

//323
function checkDate(year,month,day){
    let date = new Date(year, month, day);
    if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day){
        return true;
    } else{
        return false;
    }
}
console.log(checkDate(2025, 0, 31));
console.log(checkDate(2025, 0, 33));

//324
let now = new Date();
let date324 = new Date (now.getFullYear(),11,31).getDay();
console.log(date324);

//325
let date325 = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
console.log(date325.getDay());

//326
let date326 = new Date(now.getFullYear() + 1, now.getMonth(), 31);
console.log(date326.getDay());

let date326_1 = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
console.log(date326_1.getDay());

//327
let date327_1 = new Date(now.getFullYear(), 0, 1);
let date327_2 = new Date(now.getFullYear(), 8, 10);
console.log(((((date327_2 - date327_1)/1000)/60)/60)/24);

//328
let date328_1 = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
let date328_2 = new Date(now.getFullYear(), now.getMonth(), 
now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
console.log((((date328_2 - date328_1)/1000)/60)/60);

//329
let date329_1 = new Date(now.getFullYear(), now.getMonth(), 
now.getDate());
let date329_2 = new Date(now.getFullYear(), now.getMonth(), 
now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
console.log((((date329_2 - date329_1)/1000)/60)/60);

//330
let date330_1 = new Date(now.getFullYear(), now.getMonth(), 
now.getDate() + 1);
let date330_2 = new Date(now.getFullYear(), now.getMonth(), 
now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
console.log((((date330_1 - date330_2)/1000)/60)/60);

//332 Практика
let date332_1 = new Date(now.getFullYear(), now.getMonth(), 
now.getDate());
let date332_2 = new Date(now.getFullYear(), now.getMonth(), 
now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
console.log((date332_2 - date332_1) / 1000);
let date332_3 = new Date(now.getFullYear(), now.getMonth(), 
now.getDate() + 1);
console.log((date332_3 - date332_2)/1000);
let date332_4 = new Date(now.getFullYear(),11,31);
console.log(((((date332_4 - date332_1)/1000)/60)/60)/24);
let date332_5 = new Date(now.getFullYear(), now.getMonth() - 3, 
now.getDate())
console.log(date332_5.getFullYear());
let date332_6 = new Date(now.getFullYear(), now.getMonth() + 1, 
0);
console.log(date332_6.getDay());
// function isLeap(year){
//     let date = new Date(year, 2, 0);
//     if (date.getDate() == 29){
//         return true;
//     } else{
//         return false;
//     }
// }
function lastLeap(year){
    return year - 4;
}
console.log(lastLeap(2024));
function nextLeap(year){
    return year + 4;
}
console.log(nextLeap(2020));