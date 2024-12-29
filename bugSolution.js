function foo(a,b){
if(typeof a === 'number' && typeof b === 'number'){
return a+b;
}else{
return "Error:Operands must be numbers";
}
}
console.log(foo(2,3)); //outputs 5
console.log(foo(2,"3")); //outputs Error:Operands must be numbers
console.log(foo("2",3)); //outputs Error:Operands must be numbers
console.log(foo("2","3")); //outputs Error:Operands must be numbers