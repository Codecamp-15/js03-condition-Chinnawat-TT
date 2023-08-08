// จงแปลงโค้ดเป็นแบบ if-else

// ```js
// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;
//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;
//   default:
//     alert("We hope that this page looks ok!");
// }
// ```

let browser = prompt("what's you like browser")

if (browser =="Chrome"&&"Firefox"&&"Safari"&&"Opera"){

    alert("Okay we support these browsers too");
}
else if (browser =="Edge"){
    alert("You've got the Edge!");
}
else {
    alert("We hope that this page looks ok!");

}

// ----- Completed -----