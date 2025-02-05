let nextBtn=document.getElementById("next")
let prevBtn=document.getElementById("previous")
let slides=document.querySelector(".cat-cards")
let backToTop=document.getElementById("backToTop")
let register=document.getElementById("register")
let login=document.getElementById("login")
let account=document.getElementById("account")
let logo=document.getElementById("logo")
let accountTitle=document.getElementById("accountTitle")
let logout=document.getElementById("logout")
let productsBtn=document.querySelector(".blogBtn")
let homePage=document.getElementById("homePage")
let productsPage=document.getElementById("productsPage")
let aboutPage=document.getElementById("aboutPage")
let contactUsPage=document.getElementById("contactUsPage")
let homePageMenu=document.getElementById("homePage-menu")
let productsPageMenu=document.getElementById("productsPage-menu")
let aboutPageMenu=document.getElementById("aboutPage-menu")
let contactUsPageMenu=document.getElementById("contactUsPage-menu")
let darkBtn=document.getElementById("darkBtn")
let lightBtn=document.getElementById("lightBtn")
let productSlider1=document.getElementById("product-slider-1")
let productSlider2=document.getElementById("product-slider-2")
let productSlider3=document.getElementById("product-slider-3")
let nextProductBtn1=document.getElementById("next-product-1")
let prevProductBtn1=document.getElementById("previous-product-1")
let nextProductBtn2=document.getElementById("next-product-2")
let prevProductBtn2=document.getElementById("previous-product-2")
let nextProductBtn3=document.getElementById("next-product-3")
let prevProductBtn3=document.getElementById("previous-product-3")
let currentIndex=0
let navigate
let allUsers=[]
let phoneData=[]
let laptopData=[]
let shoesData=[]
let watchData=[]
let clothesData=[]
let furnitureData=[]
let accessorieseData=[]
let beautyData=[]
let sportsData=[]
let groceryData=[]

if(localStorage.getItem("darkMode")=="darked"){
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="title">Home</title>
    <!-- <link rel="stylesheet" href="Home.css"> -->
    <link rel="stylesheet" href="dark_Home.css">
    <link rel="stylesheet" href="responsive_Home.css">`
    logo.setAttribute("src","assets/LogoDark.png")
}
else{
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="title">Home</title>
    <link rel="stylesheet" href="Home.css">
    <!-- <link rel="stylesheet" href="dark_Home.css"> -->
    <link rel="stylesheet" href="responsive_Home.css">`
    logo.setAttribute("src","assets/Logo.png")
}
darkBtn.addEventListener("click",()=>{
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="title">Home</title>
    <!-- <link rel="stylesheet" href="Home.css"> -->
    <link rel="stylesheet" href="dark_Home.css">
    <link rel="stylesheet" href="responsive_Home.css">`
    logo.setAttribute("src","assets/LogoDark.png")
    localStorage.setItem("darkMode","darked")
    
})
lightBtn.addEventListener("click",()=>{
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="title">Home</title>
    <link rel="stylesheet" href="Home.css">
    <!-- <link rel="stylesheet" href="dark_Home.css"> -->
    <link rel="stylesheet" href="responsive_Home.css">`
    localStorage.setItem("darkMode","light")
    logo.setAttribute("src","assets/Logo.png")

})

getData()
getDataLaptops()
// getDataShoes()
async function getData(){
    let myHttpPhones=await fetch(`https://dummyjson.com/products/category/smartphones`)
    phoneData=await myHttpPhones.json()
    displayPhones()
    console.log(phoneData.products[0].category);

    let myHttpWatches=await fetch(`https://dummyjson.com/products/category/mens-watches`)
    watchData=await myHttpWatches.json()

    let myHttpClothes=await fetch(`https://dummyjson.com/products/category/mens-shirts`)
    clothesData=await myHttpClothes.json()

    let myHttpShoes=await fetch(`https://dummyjson.com/products/category/mens-shoes`)
    shoesData=await myHttpShoes.json()

    let myHttpFurniture=await fetch(`https://dummyjson.com/products/category/furniture`)
    furnitureData=await myHttpFurniture.json()

    let myHttpAccessories=await fetch(`https://dummyjson.com/products/category/mobile-accessories`)
    accessorieseData=await myHttpAccessories.json()

    let myHttpBeauty=await fetch(`https://dummyjson.com/products/category/beauty`)
    beautyData=await myHttpBeauty.json()

    let myHttpSports=await fetch(`https://dummyjson.com/products/category/sports-accessories`)
    sportsData=await myHttpSports.json()

    let myHttpGrocery=await fetch(`https://dummyjson.com/products/category/groceries`)
    groceryData=await myHttpGrocery.json()

    displayPhones()
}
async function getDataLaptops(){
    let myHttplaptop=await fetch(`https://dummyjson.com/products/category/laptops`)
    let getlaptopData=await myHttplaptop.json()
    laptopData=getlaptopData.products
    displaylaptops()
}
function displayPhones(){
    let x=``

    for(let i=0;i<5;i++){
        x+=`<div class="product-card">

        <div class="product-card-img">
           <a href="https://e-trades.netlify.app/singleProduct.html?id=${phoneData.products[i].id}"> <img src="${phoneData.products[i].thumbnail}" alt=""></a>
        </div>
        <div class="product-card-title">
            <h3>${phoneData.products[i].title}</h3>
        </div>
        <div class="product-card-body">
            <div class="add-to-cart">
                <div class="add-to-cart-img">
                    <img src="assets/cart.png" alt="">
                </div>
                <div class="add-to-cart-txt">
                    <p>Add to cart</p>
                </div>
            </div>
            <div class="product-card-price">
                <p>${phoneData.products[i].price}$</p>
            </div>
        </div>
        </div>`
    }
    productSlider1.innerHTML=x
}
function displaylaptops(){
    let x=``
    console.log(laptopData);

    for(let i=0;i<laptopData.length;i++){
        x+=`<div class="product-card">

        <div class="product-card-img">
            <a href="https://e-trades.netlify.app/singleProduct.html?id=${laptopData[i].id}"><img src="${laptopData[i].thumbnail}" alt=""></a>
        </div>
        <div class="product-card-title">
            <h3>${laptopData[i].title}</h3>
        </div>
        <div class="product-card-body">
            <div class="add-to-cart">
                <div class="add-to-cart-img">
                    <img src="assets/cart.png" alt="">
                </div>
                <div class="add-to-cart-txt">
                    <p>Add to cart</p>
                </div>
            </div>
            <div class="product-card-price">
                <p>${laptopData[i].price}</p>
            </div>
        </div>
        </div>`
    }
    productSlider2.innerHTML=x
}
function displayShoes(){
    let x=``
    console.log(shoesData.products);
    for(let i=0;i<shoesData.length;i++){
        x+=`<div class="product-card">

        <div class="product-card-img">
            <img src="${shoesData.products[i].thumbnail}" alt="">
        </div>
        <div class="product-card-title">
            <h3>${shoesData.products[i].title}</h3>
        </div>
        <div class="product-card-body">
            <div class="add-to-cart">
                <div class="add-to-cart-img">
                    <img src="assets/cart.png" alt="">
                </div>
                <div class="add-to-cart-txt">
                    <p>Add to cart</p>
                </div>
            </div>
            <div class="product-card-price">
                <p>${shoesData.products[i].price}</p>
            </div>
        </div>
        </div>`
    }
    productSlider2.innerHTML=x
}


document.getElementById("phones-category").addEventListener("click",function(){
    window.location.href=`https://e-trades.netlify.app/Products.html?cat=${phoneData.products[0].category}`
})
document.getElementById("laptops-category").addEventListener("click",function(){
    window.location.href=`https://e-trades.netlify.app/Products.html?cat=${laptopData[0].category}`
})
document.getElementById("watches-category").addEventListener("click",function(){
    window.location.href=`https://e-trades.netlify.app/Products.html?cat=${watchData.products[0].category}`
})
document.getElementById("clothes-category").addEventListener("click",function(){
    window.location.href=`https://e-trades.netlify.app/Products.html?cat=${clothesData.products[0].category}`
})
document.getElementById("shoes-category").addEventListener("click",function(){
    window.location.href=`https://e-trades.netlify.app/Products.html?cat=${shoesData.products[0].category}`
})
document.getElementById("furniture-category").addEventListener("click",function(){
    window.location.href=`https://e-trades.netlify.app/Products.html?cat=${furnitureData.products[0].category}`
})
document.getElementById("accessories-category").addEventListener("click",function(){
    window.location.href=`https://e-trades.netlify.app/Products.html?cat=${accessorieseData.products[0].category}`
})
document.getElementById("beauty-category").addEventListener("click",function(){
    window.location.href=`https://e-trades.netlify.app/Products.html?cat=${beautyData.products[0].category}`
})
document.getElementById("sports-category").addEventListener("click",function(){
    window.location.href=`https://e-trades.netlify.app/Products.html?cat=${sportsData.products[0].category}`
})
document.getElementById("grocery-category").addEventListener("click",function(){
    window.location.href=`https://e-trades.netlify.app/Products.html?cat=${groceryData.products[0].category}`
})

if(document.getElementById("title").innerHTML=="Home"){
    homePage.classList.add("link-active")
    
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
aboutPageMenu.addEventListener("click",function(e){
    navigate="About.html"
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
    document.getElementById("logout-menu").classList.add("accountFalse")

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
    document.getElementById("logout-menu").classList.add("accountTrue")

}

logout.addEventListener("click",()=>{
    register.classList.remove("accountTrue")
    login.classList.remove("accountTrue")
    account.classList.remove("accountFalse")
    logout.classList.remove("accountFalse")
    document.getElementById("logout-menu").classList.add("accountTrue")
    accountTitle.innerHTML=``
    localStorage.removeItem("logedIn")
    location.reload()

})
document.getElementById("logout-menu").addEventListener("click",()=>{
    register.classList.remove("accountTrue")
    login.classList.remove("accountTrue")
    account.classList.remove("accountFalse")
    logout.classList.remove("accountFalse")
    document.getElementById("logout-menu").classList.add("accountTrue")
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
function nextSlide(){
    if(currentIndex<=-60){
        currentIndex=0
        slides.style.transform=`translateX(${currentIndex}%)`

    }
    else{
        currentIndex=currentIndex-20;
        slides.style.transform=`translateX(${currentIndex}%)`
    }
}
function prevSlide(){
    if(currentIndex>=0){
        currentIndex=0
        slides.style.transform=`translateX(${currentIndex}%)`

    }
    else{
    currentIndex=currentIndex+20;
    slides.style.transform=`translateX(${currentIndex}%)`

    }}


nextBtn.addEventListener("click",()=>{
    
    nextSlide()
})
prevBtn.addEventListener("click",()=>{
    prevSlide()
})


function nextSlideProduct_1(){
    if(currentIndex<=-80){
        currentIndex=0
        productSlider1.style.transform=`translateX(${currentIndex}%)`
    }
    else{
        currentIndex=currentIndex-30;
        productSlider1.style.transform=`translateX(${currentIndex}%)`
    }
}
function prevSlideProduct_1(){
    if(currentIndex>=0){
        currentIndex=0
        productSlider1.style.transform=`translateX(${currentIndex}%)`
    }
    else{
    currentIndex=currentIndex+30;
    productSlider1.style.transform=`translateX(${currentIndex}%)`
    }}
nextProductBtn1.addEventListener("click",()=>{
    nextSlideProduct_1()

})
prevProductBtn1.addEventListener("click",()=>{
    prevSlideProduct_1()
})



function nextSlideProduct_2(){
    if(currentIndex<=-80){
        currentIndex=0
        productSlider2.style.transform=`translateX(${currentIndex}%)`
    }
    else{
        currentIndex=currentIndex-30;
        productSlider2.style.transform=`translateX(${currentIndex}%)`
    }
}
function prevSlideProduct_2(){
    if(currentIndex>=0){
        currentIndex=0
        productSlider2.style.transform=`translateX(${currentIndex}%)`
    }
    else{
    currentIndex=currentIndex+30;
    productSlider2.style.transform=`translateX(${currentIndex}%)`
    }}
nextProductBtn2.addEventListener("click",()=>{
    nextSlideProduct_2()
})
prevProductBtn2.addEventListener("click",()=>{
    prevSlideProduct_2()
})



function nextSlideProduct_3(){
    if(currentIndex<=-80){
        currentIndex=0
        productSlider3.style.transform=`translateX(${currentIndex}%)`
    }
    else{
        currentIndex=currentIndex-30;
        productSlider3.style.transform=`translateX(${currentIndex}%)`
    }
}
function prevSlideProduct_3(){
    if(currentIndex>=0){
        currentIndex=0
        productSlider3.style.transform=`translateX(${currentIndex}%)`
    }
    else{
    currentIndex=currentIndex+30;
    productSlider3.style.transform=`translateX(${currentIndex}%)`
    }}
// nextProductBtn3.addEventListener("click",()=>{
//     nextSlideProduct_3()
// })
// prevProductBtn3.addEventListener("click",()=>{
//     prevSlideProduct_3()
// })





window.addEventListener("scroll",()=>{
    if(window.scrollY>200){
        backToTop.classList.add("show")
        backToTop.classList.remove("hide")
    }
    else{
        backToTop.classList.remove("show")
        backToTop.classList.add("hide")
    }
})

backToTop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

productsBtn.addEventListener("click",function(e){
    navigate="Products.html"
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
account.addEventListener("click",function(e){
    navigate="Profile.html"
    localStorage.setItem("navigate",navigate)
    e.preventDefault();  
    window.location.href="loading.html"
})