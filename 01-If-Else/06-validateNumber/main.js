// จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลขเข้ามา 2 ค่า
// - ให้โชว์ข้อความผลบวกของตัวเลขทั้ง 2
// - หากมี input อันนึงไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”

let num1 = prompt("number1 is here")
let num2 = prompt("number2 is here")
let sum ;
if (num1 === null || num1.trim() === '' || isNaN(num1)|| num2 === null || num2.trim() === '' || isNaN(num2)) {
    alert('Invalid Number');
    
} 
else {
    sum = +num1 + +num2
    alert(sum);

}
  
// ----- Completed -----
