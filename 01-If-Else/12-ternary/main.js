// - จงเขียนโค้ดเพื่อรับคะแนนมาคำนวณเกรดในรูปแบบ Ternary Operator
// - ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A
// - ถ้าคะแนน อยู่ระหว่าง 70 - 79 ได้ B
// - ถ้าคะแนน อยู่ระหว่าง 60 - 69 ได้ C
// - ถ้าคะแนน อยู่ระหว่าง 50 - 59 ได้ D
// - ถ้าคะแนน น้อยกว่า 50 ได้ F

let num = prompt("point");

let result =
  num >= 80
    ? "A !"
    : num >= 70 && 80
    ? "B"
    : num >= 60 && 70
    ? "C"
    : num >= 50 && 60
    ? "D"
    : "F" ;
    alert(result);

// ----- Completed -----