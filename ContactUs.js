let login=document.getElementById("login")
let account=document.getElementById("account")
let accountTitle=document.getElementById("accountTitle")
let logout=document.getElementById("logout")
let homePage=document.getElementById("homePage")
let productsPage=document.getElementById("productsPage")
let aboutPage=document.getElementById("aboutPage")
let contactUsPage=document.getElementById("contactUsPage")
let comment=document.getElementById("comment")
let phoneNumber=document.getElementById("phoneNumber")
let form=document.getElementById("contactForm")
let darkBtn=document.getElementById("darkBtn")
let lightBtn=document.getElementById("lightBtn")
let allUsers=[]
let homePageMenu=document.getElementById("homePage-menu")
let productsPageMenu=document.getElementById("productsPage-menu")
let aboutPageMenu=document.getElementById("aboutPage-menu")
let contactUsPageMenu=document.getElementById("contactUsPage-menu")
let contactBtn=document.getElementById("contactBtn")
let usersComments=[]

if(localStorage.getItem("darkMode")=="darked"){
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="title">ContactUs</title>
    <!-- <link rel="stylesheet" href="Home.css"> -->
    <link rel="stylesheet" href="dark_Home.css"> 
    <link rel="stylesheet" href="dark_contactUs.css">
    <!-- <link rel="stylesheet" href="ContactUs.css"> -->
    <link rel="stylesheet" href="responsive_ContactUs.css">
    <link rel="stylesheet" href="responsive_Home.css">
    `
    logo.setAttribute("src","assets/LogoDark.png")
}
else{
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="title">ContactUs</title>
    <link rel="stylesheet" href="Home.css">
    <!-- <link rel="stylesheet" href="dark_Home.css"> -->
    <!-- <link rel="stylesheet" href="dark_contactUs.css"> -->
    <link rel="stylesheet" href="ContactUs.css">
    <link rel="stylesheet" href="responsive_ContactUs.css">
    <link rel="stylesheet" href="responsive_Home.css">
    `
    logo.setAttribute("src","assets/Logo.png")

}

darkBtn.addEventListener("click",()=>{
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="title">ContactUs</title>
    <!-- <link rel="stylesheet" href="Home.css"> -->
    <link rel="stylesheet" href="dark_Home.css"> 
    <link rel="stylesheet" href="dark_contactUs.css">
    <!-- <link rel="stylesheet" href="ContactUs.css"> -->
    <link rel="stylesheet" href="responsive_ContactUs.css">
    <link rel="stylesheet" href="responsive_Home.css">
    `
    logo.setAttribute("src","assets/LogoDark.png")
    localStorage.setItem("darkMode","darked")

})
lightBtn.addEventListener("click",()=>{
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="title">ContactUs</title>
    <link rel="stylesheet" href="Home.css">
    <!-- <link rel="stylesheet" href="dark_Home.css"> -->
    <!-- <link rel="stylesheet" href="dark_contactUs.css"> -->
    <link rel="stylesheet" href="ContactUs.css">
    <link rel="stylesheet" href="responsive_ContactUs.css">
    <link rel="stylesheet" href="responsive_Home.css">
    `
    localStorage.setItem("darkMode","light")
    logo.setAttribute("src","assets/Logo.png")


})
form.addEventListener('submit', function(event){
    event.preventDefault();
})


let userComment
contactBtn.addEventListener("click",()=>{
    userComment={
        comment:comment.value,
        phoneNumber:phoneNumber.value
    }
    usersComments.push(userComment)
    localStorage.setItem("userComments",JSON.stringify(usersComments))
})



if(document.getElementById("title").innerHTML=="ContactUs"){
    contactUsPage.classList.add("link-active")
    
}

productsPage.addEventListener("click",function(e){
    navigate="Products.html"
    localStorage.setItem("navigate",navigate)
    e.preventDefault();   
    window.location.href="loading.html"

})
aboutPage.addEventListener("click",function(e){
    navigate="About.html"
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

productsPageMenu.addEventListener("click",function(e){
    navigate="Products.html"
    localStorage.setItem("navigate",navigate)
    e.preventDefault();   
    window.location.href="loading.html"

})
aboutPageMenu.addEventListener("click",function(e){
    navigate="About.html"
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