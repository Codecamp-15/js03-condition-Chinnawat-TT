let browser = prompt("what's you like browser")

// switch (browser) {
//     case "Edge":
//       alert("You've got the Edge!");
//       break;
//     case "Chrome":
//     case "Firefox":
//     case "Safari":
//     case "Opera":
//       alert("Okay we support these browsers too");
//       break;
//     default:
//       alert("We hope that this page looks ok!");
//   }

if (browser === null || browser.trim() === '' || isNaN(browser)) {
    alert('We hope that this page looks ok!');
}
else if (browser ='Edge'){
    alert("You've got the Edge!");
}
else if (browser ='Chrome','Firefox','Safari','Opera'){
    alert("Okay we support these browsers too");

}