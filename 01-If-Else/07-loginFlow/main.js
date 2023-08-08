// - จงเขียนโค้ดเพื่อรับ input เข้ามา 2 ค่า คือ username และ password
// - หาก username หรือ password เป็นค่าว่างให้ โชว์ข้อความ “username is required” หรือ “password is required”
// - หาก username = “admin” และ password = “1234” หรือ username = “john” และ password = “qwerty” ให้โชว์ข้อความ “Hello” ตามด้วยชื่อ username
// - หาก username และ password ไม่ตรงตามเงื่อนไขที่กล่าวมาให้ โชว์ข้อความ “invalid username or password”

let user =prompt("username")

if(user=="admin"){                                      // admin login
        let password =prompt("password")                
        if(password=="1234")
        alert("Hello " + user)
        else{
        alert("password is required")        
        }
}
else if (user=="john"){                                 //john login
        let password =prompt("password")
        if(password=="qwerty")
        alert("Hello " + user)
        else{
        alert("password is required")        
        }
}
else if(user==""){                                      // empty username
        alert("username is required")
}
else{
        alert("invalid username or password")           
}

// ----- Completed -----