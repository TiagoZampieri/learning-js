var number = Math.round(Math.random() * 15);


if (number%3 === 0 && number != 0){
	if(number%5 === 0){
		alert("fizzbuzz");
	}
	else{
		alert("fizz");
	} 
} else if (number%5 === 0 && number != 0) {
	alert("buzz");
} else {
	console.log(number);
}