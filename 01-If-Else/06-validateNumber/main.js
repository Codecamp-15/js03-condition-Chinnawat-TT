let num1 = prompt("number1 is here")
let num2 = prompt("number2 is here")

if (num1 === null || num1.trim() === '' || isNaN(num1)) {
    alert('Invalid Number');
} 
else{
    a= +num1 + +num2 ;
    alert(a)

}
