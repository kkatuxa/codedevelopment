//296
let arr296 = ['John', 'Smit', 'development', 
	'programmer', 2000];
let [name, surname, department, position, salary] = arr296;
console.log(name);

//297
function func297() {
	return ['John', 'Smit', 'development', 
		'programmer', 2000]; 
}

let [name1, surname1, department1, position1, salary1] = func297();
console.log(surname1);

//298
let arr298 = ['John', 'Smit', 'development', 
	'programmer', 2000]; 
let[,,department2,position2] = arr298;

console.log(department2);

//300
let arr300 = ['John', 'Smit', 'development', 
	'programmer', 2000]; 

let [name3, surname3, ...arr3] = arr300;
console.log(arr3);

//301
let arr301 = ['John', 'Smit', 'development']; 
let [name4, surname4, department4, position4 = 'trainee'] = arr301;
console.log(position4);

//302
function func302(date) {
    if (date == 'day'){
	    return (new Date).getDate();
    } else if (date == 'month'){
        return (new Date).getMonth();
    } else if (date == 'year'){
        return (new Date).getYear();
    }
}
let arr302 = [2024];
let [year = func302('year'), month = func302('month'), day = func302('day')] 
	= arr302; 
console.log(year);

//304
let options = {
	color: 'red',
	width:  400,
	height: 500,
};

let {color, width, height} = options;
console.log(color);

//305
let {color: c, width: w, height: h} = options;
console.log(w);

//306
let options306 = {
	width1:  400,
	height1: 500,
};
let {color1 = 'black', width1, height1} = options306;
console.log(color1);

//307
let options307 = {
	width2:  400,
	height2: 500,
};

let {color2:c2 = 'black', width2, height2} = options307;
console.log(c2);

//309
function func309([name5,surname5,department5, position5, salary5]){
	console.log(name5);
	console.log(surname5);
}
func309( ['John', 'Smit', 'development', 
	'programmer', 2000] ); 

//309.1
function func309_1([name6, surname6, department6, position6 = 'джуниор']) {
	console.log(name6);
	console.log(surname6);
	console.log(department6);
	console.log(position6);
}

func309_1( ['John', 'Smit', 'development'] 
	); 

//310.1
function func310_1({color3, wudth3, height3}){
	console.log(color3);
	console.log(height3);
}

func310_1({color3: 'red', width3: 400, 
height3: 500});

//310.2
function func310_2({width4, height4,color4 = 'black'}){
	console.log(height4);
	console.log(color4);
}
func310_2({ width4: 400, 
height4: 500});