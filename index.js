const fs = require("fs");

let names = fs.readFileSync("./names.txt", "utf-8");
let nameArray = names.split("\n")

nameArray = shuffle(nameArray);

distribute(10, nameArray);
distribute(5, nameArray);
distribute(3, nameArray);



function distribute(num, array) {
	let i,j,temparray,chunk = num;
	let final = [];
	for (i=0,j=array.length; i<j; i+=chunk) {
	    temparray = array.slice(i,i+chunk);
	    final.push(temparray);
	}
	console.log('groups of ' + num);
	console.log(final);
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

