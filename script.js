function fibonacci(num) {
// your code here
	let a=0;
	let b=1;
	let c;
	if(num==0){
		return a;
	}
	if(num==1){
		return b;
	}
	for(let i=3; i<num; i++){
		c=a+b;
		a=b;
		b=c;
	}
	return b;
}

module.exports = fibonacci;
