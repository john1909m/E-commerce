let email=document.getElementById("email")
let password=document.getElementById("password")
let loginBtn=document.getElementById("loginBtn")
let allUsers=[]
let form=document.getElementById("login")
form.addEventListener('submit', function(event){
    event.preventDefault();
})
if(localStorage.getItem("users")!=null){
    allUsers=JSON.parse(localStorage.getItem("users"))
}
loginBtn.addEventListener("click",function(e){
    for (let i = 0; i < allUsers.length; i++) {
        if(allUsers[i].email==email.value){
            if(allUsers[i].password==password.value){
                localStorage.setItem("logedIn","loged_in")
                localStorage.setItem("userLog",JSON.stringify(email.value))
                navigate="Home.html"
                localStorage.setItem("navigate",navigate)
                e.preventDefault();  
                window.location.href="loading.html"
            }
            else{
                password.nextElementSibling.innerHTML="Wrong password"
            }
        }
        else{
            password.nextElementSibling.innerHTML="E-mail doesn't exist"
        }
    }
})