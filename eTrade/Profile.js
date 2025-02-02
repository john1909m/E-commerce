let login=document.getElementById("login")
let register=document.getElementById("register")
let account=document.getElementById("account")
let accountTitle=document.getElementById("accountTitle")
let logout=document.getElementById("logout")
let homePage=document.getElementById("homePage")
let productsPage=document.getElementById("productsPage")
let aboutPage=document.getElementById("aboutPage")
let contactUsPage=document.getElementById("contactUsPage")
let logo=document.getElementById("logo")
let darkBtn=document.getElementById("darkBtn")
let lightBtn=document.getElementById("lightBtn")
let allUsers=[]
let profileFirstName=document.getElementById("profile-first-name")
let profileLastName=document.getElementById("profile-last-name")
let profileEmail=document.getElementById("profile-email")
let profilePass=document.getElementById("profile-pass")
let profilerePass=document.getElementById("profile-repass")
let editInfoBtn=document.getElementById("edit-info-btn")
let saveInfoBtn=document.getElementById("save-info-btn")
let homePageMenu=document.getElementById("homePage-menu")
let productsPageMenu=document.getElementById("productsPage-menu")
let aboutPageMenu=document.getElementById("aboutPage-menu")
let contactUsPageMenu=document.getElementById("contactUsPage-menu")


if(localStorage.getItem("darkMode")=="darked"){
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
    <!-- <link rel="stylesheet" href="Home.css"> -->
    <link rel="stylesheet" href="dark_Home.css">
    <!-- <link rel="stylesheet" href="Profile.css"> -->
    <link rel="stylesheet" href="dark-profile.css">
    <link rel="stylesheet" href="responsive_Home.css">`
    logo.setAttribute("src","assets/LogoDark.png")
}
else{
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
    <link rel="stylesheet" href="Home.css">
    <!-- <link rel="stylesheet" href="dark_Home.css"> -->
    <link rel="stylesheet" href="Profile.css">
    <!-- <link rel="stylesheet" href="dark-profile.css"> -->
    <link rel="stylesheet" href="responsive_Home.css">`
    logo.setAttribute("src","assets/Logo.png")

}
darkBtn.addEventListener("click",()=>{
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
    <!-- <link rel="stylesheet" href="Home.css"> -->
    <link rel="stylesheet" href="dark_Home.css">
    <!-- <link rel="stylesheet" href="Profile.css"> -->
    <link rel="stylesheet" href="dark-profile.css">
    <link rel="stylesheet" href="responsive_Home.css">`
    logo.setAttribute("src","assets/LogoDark.png")
    localStorage.setItem("darkMode","darked")
})
lightBtn.addEventListener("click",()=>{
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
    <link rel="stylesheet" href="Home.css">
    <!-- <link rel="stylesheet" href="dark_Home.css"> -->
    <link rel="stylesheet" href="Profile.css">
    <!-- <link rel="stylesheet" href="dark-profile.css"> -->
    <link rel="stylesheet" href="responsive_Home.css">`
    localStorage.setItem("darkMode","light")
    logo.setAttribute("src","assets/Logo.png")

})

productsPage.addEventListener("click",function(e){
    navigate="Products.html"
    localStorage.setItem("navigate",navigate)
    e.preventDefault();   
    window.location.href="loading.html"

})
homePage.addEventListener("click",function(e){
    navigate="Home.html"
    localStorage.setItem("navigate",navigate)
    e.preventDefault();  
    window.location.href="loading.html"
})
contactUsPage.addEventListener("click",function(e){
    navigate="ContactUs.html"
    localStorage.setItem("navigate",navigate)
    e.preventDefault();  
    window.location.href="loading.html"
})




productsPageMenu.addEventListener("click",function(e){
    navigate="Products.html"
    localStorage.setItem("navigate",navigate)
    e.preventDefault();   
    window.location.href="loading.html"

})
homePageMenu.addEventListener("click",function(e){
    navigate="Home.html"
    localStorage.setItem("navigate",navigate)
    e.preventDefault();  
    window.location.href="loading.html"
})
contactUsPageMenu.addEventListener("click",function(e){
    navigate="ContactUs.html"
    localStorage.setItem("navigate",navigate)
    e.preventDefault();  
    window.location.href="loading.html"
})


let currentUser

if(localStorage.getItem("users")!=null){
    allUsers=JSON.parse(localStorage.getItem("users"))
}
if(localStorage.getItem("logedIn")=="loged_in"){
    register.classList.add("accountTrue")
    login.classList.add("accountTrue")
    account.classList.add("accountFalse")
    logout.classList.add("accountFalse")
    for(let i=0;i<allUsers.length;i++){
        if(JSON.parse(localStorage.getItem("userLog"))==allUsers[i].email){
            accountTitle.innerHTML=`Hello, ${allUsers[i].firstName}`
            currentUser=i
            updateData()
        }
    }
    

}
else{
    register.classList.remove("accountTrue")
    login.classList.remove("accountTrue")
    account.classList.remove("accountFalse")
    logout.classList.remove("accountFalse")

}
editInfoBtn.addEventListener("click",function(){
    editInfoBtn.classList.add("display")
    saveInfoBtn.classList.remove("display")
    
})
saveInfoBtn.addEventListener("click",function(){
    allUsers[currentUser].firstName=profileFirstName.value
    allUsers[currentUser].lastName=profileLastName.value
    allUsers[currentUser].email=profileEmail.value
    allUsers[currentUser].password=profilePass.value
    localStorage.setItem("users",JSON.stringify(allUsers))
    editInfoBtn.classList.remove("display")
    saveInfoBtn.classList.add("display")
    updateData()
    location.reload()
})
function updateData(){
    profileFirstName.value=allUsers[currentUser].firstName
    profileLastName.value=allUsers[currentUser].lastName
    profileEmail.value=allUsers[currentUser].email
    profilePass.value=allUsers[currentUser].password
    document.getElementById("profile-name").innerHTML=`${allUsers[currentUser].firstName} ${allUsers[currentUser].lastName}`
    document.getElementById("profile-email-const").innerHTML=`E-mail: ${allUsers[currentUser].email}`
}
logout.addEventListener("click",()=>{
    register.classList.remove("accountTrue")
    login.classList.remove("accountTrue")
    account.classList.remove("accountFalse")
    logout.classList.remove("accountFalse")
    accountTitle.innerHTML=``
    localStorage.removeItem("logedIn")
    location.reload()

})



// for(let i=0;i<allUsers.length;i++){
//     if(JSON.parse(localStorage.getItem("userLog"))==allUsers[i].email){
//         accountTitle.innerHTML=`Hello, ${allUsers[i].firstName}`
//     }
// }

// console.log(allUsers);








register.addEventListener("click",function(e){
    navigate="Register.html"
    localStorage.setItem("navigate",navigate)
    e.preventDefault();  
    window.location.href="loading.html"
})
login.addEventListener("click",function(e){
    navigate="Login.html"
    localStorage.setItem("navigate",navigate)
    e.preventDefault();  
    window.location.href="loading.html"
})
logo.addEventListener("click",function(e){
    navigate="Home.html"
    localStorage.setItem("navigate",navigate)
    e.preventDefault();  
    window.location.href="loading.html"
})