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
let homePageMenu=document.getElementById("homePage-menu")
let productsPageMenu=document.getElementById("productsPage-menu")
let aboutPageMenu=document.getElementById("aboutPage-menu")
let contactUsPageMenu=document.getElementById("contactUsPage-menu")


if(localStorage.getItem("darkMode")=="darked"){
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="title">About</title>
    <!-- <link rel="stylesheet" href="About.css"> -->
    <!-- <link rel="stylesheet" href="Home.css"> -->
     <link rel="stylesheet" href="dark_Home.css"> 
    <link rel="stylesheet" href="dark_About.css"> 
    <link rel="stylesheet" href="responsive_About.css">
    <link rel="stylesheet" href="responsive_Home.css">`
    logo.setAttribute("src","assets/LogoDark.png")
}
else{
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="title">About</title>
    <link rel="stylesheet" href="About.css">
    <link rel="stylesheet" href="Home.css">
    <!-- <link rel="stylesheet" href="dark_Home.css"> -->
    <!-- <link rel="stylesheet" href="dark_About.css"> -->
    <link rel="stylesheet" href="responsive_About.css">
    <link rel="stylesheet" href="responsive_Home.css">`
    logo.setAttribute("src","assets/Logo.png")

}
darkBtn.addEventListener("click",()=>{
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="title">About</title>
    <!-- <link rel="stylesheet" href="About.css"> -->
    <!-- <link rel="stylesheet" href="Home.css"> -->
    <link rel="stylesheet" href="dark_Home.css"> 
    <link rel="stylesheet" href="dark_About.css"> 
    <link rel="stylesheet" href="responsive_About.css">
    <link rel="stylesheet" href="responsive_Home.css">`
    logo.setAttribute("src","assets/LogoDark.png")
    localStorage.setItem("darkMode","darked")
})
lightBtn.addEventListener("click",()=>{
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="title">About</title>
    <link rel="stylesheet" href="About.css">
    <link rel="stylesheet" href="Home.css">
    <!-- <link rel="stylesheet" href="dark_Home.css"> -->
    <!-- <link rel="stylesheet" href="dark_About.css"> -->
    <link rel="stylesheet" href="responsive_About.css">
    <link rel="stylesheet" href="responsive_Home.css">`
    localStorage.setItem("darkMode","light")
    logo.setAttribute("src","assets/Logo.png")

})
if(document.getElementById("title").innerHTML=="About"){
    aboutPage.classList.add("link-active")
    
}

productsPage.addEventListener("click",function(e){
    navigate="Products.html"
    localStorage.setItem("navigate",navigate)
    e.preventDefault();   
    window.location.href="loading.html"

})
homePage.addEventListener("click",function(e){
    navigate="https://e-trades.netlify.app/"
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
    navigate="https://e-trades.netlify.app/"
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
        }
    }
}
else{
    register.classList.remove("accountTrue")
    login.classList.remove("accountTrue")
    account.classList.remove("accountFalse")
    logout.classList.remove("accountFalse")

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
document.getElementById("logout-menu").addEventListener("click",()=>{
    register.classList.remove("accountTrue")
    login.classList.remove("accountTrue")
    account.classList.remove("accountFalse")
    logout.classList.remove("accountFalse")
    accountTitle.innerHTML=``
    localStorage.removeItem("logedIn")
    location.reload()

})
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
    navigate="https://e-trades.netlify.app/"
    localStorage.setItem("navigate",navigate)
    e.preventDefault();  
    window.location.href="loading.html"
})
account.addEventListener("click",function(e){
    navigate="Profile.html"
    localStorage.setItem("navigate",navigate)
    e.preventDefault();  
    window.location.href="loading.html"
})