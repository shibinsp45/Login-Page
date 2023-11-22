const loginclick = () =>{
    const uname = username.value
    const passwe = password.value
    if(!uname || !passwe){
        info.innerHTML = " Please do fill the form..! "
    }
    else{
        info.innerHTML = "Login Successfully :)!"
        localStorage.setItem("username",uname)
        window.location = "dashboard.html"
    }
}