let num =prompt("Please Number is here ?")

if (num === null || num.trim() === '' || isNaN(num)) {
    alert('Invalid Number');
} else if (+num > 0) {
    alert('Positive Number');
} else if (+num == 0) {
    alert('Zero');
} else if (+num < 0) {
    alert('Negative Number');
}


// if(num === null || num.trim() === '' || isNaN(num)) {
//      alert ("Invalid Number")
//     } guard 