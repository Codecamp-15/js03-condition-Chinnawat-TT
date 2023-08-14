// - เขียนโปรแกรมสำหรับรับตัวเลขจากผู้ใช้งาน 3 ตัวเลข
// - แสดงผลลัพธ์เป็นตัวเลขที่เรียงกันจากมากไปน้อย  
//   เช่นรับค่าเป็น -1 ,4, 0 ให้แสดงผลเป็น 4, 0, -1



//v.0 แสดงเฉพาะตัวเลขมากสุด
//v.1 แสดงตัวเลขเรียง


let x =Number(prompt('enter number 1'));
let y =+prompt('enter number 2');
let z =prompt('enter number 3')*1;

//case1 : x มากสุด
//case2 : x มากสุด
//case3 : x มากสุด
//dry principle : dont repeat youself

//v.0 แสดงเฉพาะตัวเลขมากสุด
// let max  ;
// if (x > y && x > z) {
    
//     max = x ;
    
// }
// else if (y > x && y > z) {
    
//     max = y ;
    
// }
// else if (z > x && z > y) {
    
//     max = z; 
    
// }
// console.log(max);


//case1 : x มากสุด
//case2 : x มากสุด
//case3 : x มากสุด
//dry principle : dont repeat youself

//v.1 แสดงเฉพาะตัวเลขมากไปน้อย
let max ;
let mid ;
let min ;

if (x >= y && x >= z) {
    
    max = x ;
    if(y>=z){
        mid =y;
        min =z;
    } else {
        mid =z;
        min =y;
    }
    
}
else if (y >= x && y >= z) {
    
    max = y ;
    if(x>=z) {
        mid =x;
        min =z;
    }else {
        mid =z;
        min =x;
    }
    
}
else if (z >= x && z >= y) {
    
    max = z; 
    if(x>=y){
        mid =x;
        min =y;

    }else {
        mid =y;
        min =x;
    }
    
}
console.log(`${max} : ${mid} : ${min}`  );

// ----- Completed -----