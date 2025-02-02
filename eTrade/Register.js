let firstName=document.getElementById("firstName")
let lastName=document.getElementById("lastName")
let email=document.getElementById("email")
let password=document.getElementById("password")
let repassword=document.getElementById("repassword")
let registerBtn=document.getElementById("registerBtn")
let allUsers=[]
let namePattern=/[A-Z][a-z]{2,}/
let emailPattern=/^[a-zA-Z0-9]{4,40}@(gmail|yahoo)\.com$/
let passPattern=/[A-Z][a-z]{2,}/
///^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{8,40}$/

let form=document.getElementById("register")
form.addEventListener('submit', function(event){
    event.preventDefault();
})

if(localStorage.getItem("users")!=null){
    allUsers=JSON.parse(localStorage.getItem("users"))
    // displayData()
}
function validation(){
    if(namePattern.test(user.firstName)==false || user.firstName==""){
        firstName.nextElementSibling.innerHTML="Please enter a valid name"
        return
    }
    else{
        firstName.nextElementSibling.innerHTML=""
    }
    if(namePattern.test(user.lastName)==false || user.lastName==""){
        lastName.nextElementSibling.innerHTML="Please enter a valid name"
        return
    }
    else{
        lastName.nextElementSibling.innerHTML=""

    }
    if(emailPattern.test(user.email)==false || user.email==""){
        email.nextElementSibling.innerHTML="Please enter a valid E-mail addresss"
        return
    }
    else{
        email.nextElementSibling.innerHTML=""

    }
    if(passPattern.test(user.password)==false || user.password==""){
        password.nextElementSibling.innerHTML="Please enter a valid Password"
        return
    }
    else{
        password.nextElementSibling.innerHTML=""

    }
    if(repassword.value =! user.password){
        repassword.nextElementSibling.innerHTML="Password doesn't match"
        return
    }
    else{
        repassword.nextElementSibling.innerHTML=""
        allUsers.push(user)
        localStorage.setItem("users",JSON.stringify(allUsers))
        clear()
    }
}


let user
registerBtn.addEventListener("click",function(e){
     user={
        firstName:firstName.value,
        lastName:lastName.value,
        email:email.value,
        password:password.value,
    }
    validation()
    navigate="Login.html"
    localStorage.setItem("navigate",navigate)
    e.preventDefault();  
    window.location.href="loading.html"
})

// function displayData(){
//     for(let i=0;i<allUsers.length;i++){
//         console.log(allUsers[i]);
//     }
// }

function clear(){
    firstName.value=``
    lastName.value=``
    email.value=``
    password.value=``
    repassword.value=``
}
