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
let url=window.location.search
let getId=url.split("id=")
let idNumber=getId[getId.length-1]
let oneProduct
let onePhone
let combine=[]
let previewImg=document.querySelector(".single-product-img img")
let controls=[]
getData()

async function getData(){
    let myHttpSingleProduct=await fetch(`https://dummyjson.com/products/${idNumber}`)
    let productObject=await myHttpSingleProduct.json()
    oneProduct=productObject

    let myHttpSinglePhone=await fetch(`https://dummyjson.com/products/category/smartphones${idNumber}`)
    let phoneObject=await myHttpSinglePhone.json()
    onePhone=phoneObject

    let myHttpSingleLaptop=await fetch(`https://dummyjson.com/products/category/laptops${idNumber}`)
    let laptopObject=await myHttpSingleLaptop.json()
    onelaptop=laptopObject 

    // console.log(onelaptop);
    
    // console.log(onePhone);
    
    // console.log(oneProduct);
    
    displayData()
    console.log(oneProduct);
    console.log(oneProduct.images.length);
    controls=oneProduct.images
    console.log(controls);
    



}

let index=0
function displayData(){
    console.log(oneProduct.thumbnail);
    
    let x=` <div class="single-product-images">
        <div class="single-product-img">
            <img id="preview" src="${oneProduct.thumbnail}" alt="">
        </div>
        <div class="single-product-sub-images">
        
            <div class="single-product-sub-img">
                <img src="${oneProduct.images[index]}" onclick="slider(${index})" alt="">
            </div>
            <div class="single-product-sub-img">
                <img src="${oneProduct.images[index += 1]}" onclick="slider(${index})" alt="">
            </div>
            <div class="single-product-sub-img">
                <img src="${oneProduct.images[index += 2]}" onclick="slider(${index})" alt="">
            </div>
            <div class="single-product-sub-img">
                <img src="${oneProduct.images[index += 3]}" onclick="slider(${index})" alt="">
            </div>
        </div>
    </div>
    <div class="single-product-body">
        <div class="single-product-title">
            <h1>${oneProduct.title}</h1>
        </div>
        <div class="single-product-des">
            <ul>
                <li><strong>Brand:</strong> ${oneProduct.brand}</li>
                <li><strong>Descirption:</strong> ${oneProduct.description}</li>
                <li><strong>Category:</strong> ${oneProduct.category}</li>
                <li><strong>Availablity:</strong> ${oneProduct.availabilityStatus}</li>
                <li><strong>Warranty:</strong> ${oneProduct.warrantyInformation}</li>
            </ul>
        </div>
        <div class="single-product-price">
            <h4>${oneProduct.price}$</h4>
        </div>
        <button class="primaryBtn single-product-btn" id="single-product-btn">Add to cart</button>
    </div>`
    document.getElementById("single-product-container").innerHTML=x


     


}

function slider(myIndex){
    // console.log(controls[myIndex]);
    document.getElementById("preview").setAttribute("src",controls[myIndex])
    // document.querySelectorAll(".single-product-sub-img")[myIndex].style.border="none"
}

if(localStorage.getItem("darkMode")=="darked"){
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Single Product</title>
    <!-- <link rel="stylesheet" href="singleProduct.css"> -->
    <!-- <link rel="stylesheet" href="Home.css"> -->
    <link rel="stylesheet" href="dark_Home.css">
    <link rel="stylesheet" href="dark_singleProduct.css">
    <link rel="stylesheet" href="responsive_Home.css">
    <link rel="stylesheet" href="responsive_singleProduct.css">`
    logo.setAttribute("src","assets/LogoDark.png")
}
else{
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Single Product</title>
    <link rel="stylesheet" href="singleProduct.css">
    <link rel="stylesheet" href="Home.css">
    <!-- <link rel="stylesheet" href="dark_Home.css"> -->
    <!-- <link rel="stylesheet" href="dark_singleProduct.css"> -->
    <link rel="stylesheet" href="responsive_Home.css">
    <link rel="stylesheet" href="responsive_singleProduct.css">`
    logo.setAttribute("src","assets/Logo.png")

}
darkBtn.addEventListener("click",()=>{
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Single Product</title>
    <!-- <link rel="stylesheet" href="singleProduct.css"> -->
    <!-- <link rel="stylesheet" href="Home.css"> -->
    <link rel="stylesheet" href="dark_Home.css">
    <link rel="stylesheet" href="dark_singleProduct.css">
    <link rel="stylesheet" href="responsive_Home.css">
    <link rel="stylesheet" href="responsive_singleProduct.css">`
    logo.setAttribute("src","assets/LogoDark.png")
    localStorage.setItem("darkMode","darked")
})
lightBtn.addEventListener("click",()=>{
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Single Product</title>
    <link rel="stylesheet" href="singleProduct.css">
    <link rel="stylesheet" href="Home.css">
    <!-- <link rel="stylesheet" href="dark_Home.css"> -->
    <!-- <link rel="stylesheet" href="dark_singleProduct.css"> -->
    <link rel="stylesheet" href="responsive_Home.css">
    <link rel="stylesheet" href="responsive_singleProduct.css">`
    localStorage.setItem("darkMode","light")
    logo.setAttribute("src","assets/Logo.png")

})
// console.log(controls);
// console.log(previewImg);


// function showSlide(slideIndex){
//     previewImg.setAttribute("src",controls[slideIndex].getAttribute("src"))

// }
// for(let i=0;i<controls.length;i++){
//     controls[i].addEventListener("click",function(){
//         showSlide(i)
//         console.log(i);
        
//     })
// }
// console.log(oneProduct);

// for(let i=0;i<oneProduct.images.length;i++){
//     oneProduct.images[i].addEventListener("click",function(){
//         console.log(i);
        
//     })
// }
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
aboutPage.addEventListener("click",function(e){
    navigate="About.html"
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
document.getElementById("logout-menu").addEventListener("click",()=>{
    register.classList.remove("accountTrue")
    login.classList.remove("accountTrue")
    account.classList.remove("accountFalse")
    logout.classList.remove("accountFalse")
    accountTitle.innerHTML=``
    localStorage.removeItem("logedIn")
    location.reload()

})
