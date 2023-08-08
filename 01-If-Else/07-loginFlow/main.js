let user =prompt("username")


if(user=="admin"){
        let password =prompt("password")
        if(password=="1234")
        alert("Hello " + user)
}
else if (user=="john"){
        let password =prompt("password")
        if(password=="qwerty")
        alert("Hello " + user)
}
else{
        alert("invalid username or password")
}