let login=document.getElementById("login")
let account=document.getElementById("account")
let accountTitle=document.getElementById("accountTitle")
let logout=document.getElementById("logout")
let homePage=document.getElementById("homePage")
let productsPage=document.getElementById("productsPage")
let aboutPage=document.getElementById("aboutPage")
let contactUsPage=document.getElementById("contactUsPage")
let allUsers=[]
let logo=document.getElementById("logo")
let darkBtn=document.getElementById("darkBtn")
let lightBtn=document.getElementById("lightBtn")
let homePageMenu=document.getElementById("homePage-menu")
let productsPageMenu=document.getElementById("productsPage-menu")
let aboutPageMenu=document.getElementById("aboutPage-menu")
let contactUsPageMenu=document.getElementById("contactUsPage-menu")
let allProducts=[]
let allPhones=[]
let allWatches=[]
let allLaptops=[]
let allClothes=[]
let allShoes=[]
let allFurniture=[]
let allAccessories=[]
let allBeauty=[]
let allSports=[]
let allGrocery=[]

let url=window.location.search
let getCat=url.split("cat=")
let cat=getCat[getCat.length-1]

if(localStorage.getItem("darkMode")=="darked"){
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="title">Products</title>
    <!-- <link rel="stylesheet" href="Products.css"> -->
    <link rel="stylesheet" href="dark_Home.css">
    <link rel="stylesheet" href="dark_Products.css">
    <link rel="stylesheet" href="reponsive_Products.css">
    <!-- <link rel="stylesheet" href="Home.css"> -->
    <link rel="stylesheet" href="responsive_Home.css">
    <link rel="icon" href="assets/icon_tab.ico" type="image/x-icon">`
    logo.setAttribute("src","assets/LogoDark.png")
}
else{
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="title">Products</title>
    
    <!-- <link rel="stylesheet" href="dark_Home.css"> -->
    <!-- <link rel="stylesheet" href="dark_Products.css"> -->
    <link rel="stylesheet" href="Products.css">
    <link rel="stylesheet" href="reponsive_Products.css">
    <link rel="stylesheet" href="Home.css">
    <link rel="stylesheet" href="responsive_Home.css">
    <link rel="icon" href="assets/icon_tab.ico" type="image/x-icon">`
    logo.setAttribute("src","assets/Logo.png")
}
darkBtn.addEventListener("click",()=>{
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="title">Products</title>
    <!-- <link rel="stylesheet" href="Products.css"> -->
    <link rel="stylesheet" href="dark_Home.css">
    <link rel="stylesheet" href="dark_Products.css">
    <link rel="stylesheet" href="reponsive_Products.css">
    <!-- <link rel="stylesheet" href="Home.css"> -->
    <link rel="stylesheet" href="responsive_Home.css">
    <link rel="icon" href="assets/icon_tab.ico" type="image/x-icon">`
    logo.setAttribute("src","assets/LogoDark.png")
    localStorage.setItem("darkMode","darked")
    
})
lightBtn.addEventListener("click",()=>{
    document.getElementById("headd").innerHTML=`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="title">Products</title>
    
    <!-- <link rel="stylesheet" href="dark_Home.css"> -->
    <!-- <link rel="stylesheet" href="dark_Products.css"> -->
    <link rel="stylesheet" href="Products.css">
    <link rel="stylesheet" href="reponsive_Products.css">
    <link rel="stylesheet" href="Home.css">
    <link rel="stylesheet" href="responsive_Home.css">
    <link rel="icon" href="assets/icon_tab.ico" type="image/x-icon">`
    localStorage.setItem("darkMode","light")
    logo.setAttribute("src","assets/Logo.png")

})

getData()
async function getData(){
    let myHttpAllData=await fetch(`https://dummyjson.com/products`)
    let productsObject=await myHttpAllData.json()
    allProducts=productsObject.products
    // console.log(allProducts);
    
    let myHttpPhoneData=await fetch(`https://dummyjson.com/products/category/smartphones`)
    let phonesObject=await myHttpPhoneData.json()
    allPhones=phonesObject.products
    // console.log(allPhones);
    
    let myHttpLaptopData=await fetch(`https://dummyjson.com/products/category/laptops`)
    let laptopsObject=await myHttpLaptopData.json()
    allLaptops=laptopsObject.products
    console.log(allLaptops);
    

    let myHttpWatchesData=await fetch(`https://dummyjson.com/products/category/mens-watches`)
    let watchesObject=await myHttpWatchesData.json()
    allWatches=watchesObject.products

    let myHttpClothesData=await fetch(`https://dummyjson.com/products/category/mens-shirts`)
    let clothesObject=await myHttpClothesData.json()
    allClothes=clothesObject.products

    let myHttpShoesData=await fetch(`https://dummyjson.com/products/category/mens-shoes`)
    let shoesObject=await myHttpShoesData.json()
    allShoes=shoesObject.products
    
    let myHttpFurnitureData=await fetch(`https://dummyjson.com/products/category/furniture`)
    let furnitureObject=await myHttpFurnitureData.json()
    allFurniture=furnitureObject.products

    let myHttpAccessoriesData=await fetch(`https://dummyjson.com/products/category/mobile-accessories`)
    let accessoriesObject=await myHttpAccessoriesData.json()
    allAccessories=accessoriesObject.products

    let myHttpBeautyData=await fetch(`https://dummyjson.com/products/category/beauty`)
    let beautyObject=await myHttpBeautyData.json()
    allBeauty=beautyObject.products

    let myHttpSportsData=await fetch(`https://dummyjson.com/products/category/sports-accessories`)
    let sportsObject=await myHttpSportsData.json()
    allSports=sportsObject.products

    let myHttpGroceryData=await fetch(`https://dummyjson.com/products/category/groceries`)
    let groceryObject=await myHttpGroceryData.json()
    allGrocery=groceryObject.products
    

    // displayAllData()
    if(cat=="smartphones"){
        displayPhonesData()
    }
    else if(cat=="laptops"){
        displayLaptopsData()
    console.log(allLaptops);

    }
    else if(cat=="mens-watches"){
        displayWatchesData()
        console.log(allWatches);

    }
    else if(cat=="mens-shirts"){
        displayClothesData()
    }
    else if(cat=="mens-shoes"){
        displayShoesData()
    }
    else if(cat=="furniture"){
        displayFurnitureData()
    }
    else if(cat=="mobile-accessories"){
        displayAccessoriesData()
    }
    else if(cat=="beauty"){
        displayBeautyData()
    }
    else if(cat=="sports-accessories"){
        displaySportsData()
    }
    else if(cat=="groceries"){
        displayGroceryData()
    }
    else{
        displayAllData()
    }
}



function displayAllData(){
    let x=``

    for (let i = 0; i < allProducts.length; i++) {
        x+=`<div class="product-page-card">
                <div class="product-page-card-img">
                   <a href="https://john1909m.github.io/E-commerce/singleProduct.html?id=${allProducts[i].id}"> <img src="${allProducts[i].thumbnail}" alt=""></a>
                </div>
                <div class="product-page-card-title">
                    <h3>${allProducts[i].title}</h3>
                </div>
                <div class="product-page-card-body">
                    <div class="product-page-add-to-cart">
                        <div class="product-page-add-to-cart-img">
                            <img src="assets/cart.png" alt="">
                        </div>
                        <div class="product-page-add-to-cart-txt">
                            <p>Add to cart</p>
                        </div>
                    </div>
                    <div class="product-page-card-price">
                        <p>${allProducts[i].price}$</p>
                    </div>
                </div>
            </div>`
    }
    document.getElementById("all-products-cards").innerHTML=x
}

function displayPhonesData(){
    let x=``

    for (let i = 0; i < allPhones.length; i++) {
        x+=`<div class="product-page-card">
                <div class="product-page-card-img">
                   <a href="https://john1909m.github.io/E-commerce/singleProduct.html?id=${allPhones[i].id}"> <img src="${allPhones[i].thumbnail}" alt=""></a>
                </div>
                <div class="product-page-card-title">
                    <h3>${allPhones[i].title}</h3>
                </div>
                <div class="product-page-card-body">
                    <div class="product-page-add-to-cart">
                        <div class="product-page-add-to-cart-img">
                            <img src="assets/cart.png" alt="">
                        </div>
                        <div class="product-page-add-to-cart-txt">
                            <p>Add to cart</p>
                        </div>
                    </div>
                    <div class="product-page-card-price">
                        <p>${allPhones[i].price}$</p>
                    </div>
                </div>
            </div>`
    }
    document.getElementById("all-products-cards").innerHTML=x
}

function displayLaptopsData(){
    let x=``

    for (let i = 0; i < allLaptops.length; i++) {
        x+=`<div class="product-page-card">
                <div class="product-page-card-img">
                   <a href="https://john1909m.github.io/E-commerce/singleProduct.html?id=${allLaptops[i].id}"> <img src="${allLaptops[i].thumbnail}" alt=""></a>
                </div>
                <div class="product-page-card-title">
                    <h3>${allLaptops[i].title}</h3>
                </div>
                <div class="product-page-card-body">
                    <div class="product-page-add-to-cart">
                        <div class="product-page-add-to-cart-img">
                            <img src="assets/cart.png" alt="">
                        </div>
                        <div class="product-page-add-to-cart-txt">
                            <p>Add to cart</p>
                        </div>
                    </div>
                    <div class="product-page-card-price">
                        <p>${allLaptops[i].price}$</p>
                    </div>
                </div>
            </div>`
    }
    document.getElementById("all-products-cards").innerHTML=x
}
function displayWatchesData(){
    let x=``

    for (let i = 0; i < allWatches.length; i++) {
        x+=`<div class="product-page-card">
                <div class="product-page-card-img">
                   <a href="https://john1909m.github.io/E-commerce/singleProduct.html?id=${allWatches[i].id}"> <img src="${allWatches[i].thumbnail}" alt=""></a>
                </div>
                <div class="product-page-card-title">
                    <h3>${allWatches[i].title}</h3>
                </div>
                <div class="product-page-card-body">
                    <div class="product-page-add-to-cart">
                        <div class="product-page-add-to-cart-img">
                            <img src="assets/cart.png" alt="">
                        </div>
                        <div class="product-page-add-to-cart-txt">
                            <p>Add to cart</p>
                        </div>
                    </div>
                    <div class="product-page-card-price">
                        <p>${allWatches[i].price}$</p>
                    </div>
                </div>
            </div>`
    }
    document.getElementById("all-products-cards").innerHTML=x
}
function displayClothesData(){
    let x=``

    for (let i = 0; i < allClothes.length; i++) {
        x+=`<div class="product-page-card">
                <div class="product-page-card-img">
                   <a href="https://john1909m.github.io/E-commerce/singleProduct.html?id=${allClothes[i].id}"> <img src="${allClothes[i].thumbnail}" alt=""></a>
                </div>
                <div class="product-page-card-title">
                    <h3>${allClothes[i].title}</h3>
                </div>
                <div class="product-page-card-body">
                    <div class="product-page-add-to-cart">
                        <div class="product-page-add-to-cart-img">
                            <img src="assets/cart.png" alt="">
                        </div>
                        <div class="product-page-add-to-cart-txt">
                            <p>Add to cart</p>
                        </div>
                    </div>
                    <div class="product-page-card-price">
                        <p>${allClothes[i].price}$</p>
                    </div>
                </div>
            </div>`
    }
    document.getElementById("all-products-cards").innerHTML=x
}
function displayShoesData(){
    let x=``

    for (let i = 0; i < allShoes.length; i++) {
        x+=`<div class="product-page-card">
                <div class="product-page-card-img">
                   <a href="https://john1909m.github.io/E-commerce/singleProduct.html?id=${allShoes[i].id}"> <img src="${allShoes[i].thumbnail}" alt=""></a>
                </div>
                <div class="product-page-card-title">
                    <h3>${allShoes[i].title}</h3>
                </div>
                <div class="product-page-card-body">
                    <div class="product-page-add-to-cart">
                        <div class="product-page-add-to-cart-img">
                            <img src="assets/cart.png" alt="">
                        </div>
                        <div class="product-page-add-to-cart-txt">
                            <p>Add to cart</p>
                        </div>
                    </div>
                    <div class="product-page-card-price">
                        <p>${allShoes[i].price}$</p>
                    </div>
                </div>
            </div>`
    }
    document.getElementById("all-products-cards").innerHTML=x
}
function displayFurnitureData(){
    let x=``

    for (let i = 0; i < allFurniture.length; i++) {
        x+=`<div class="product-page-card">
                <div class="product-page-card-img">
                   <a href="https://john1909m.github.io/E-commerce/singleProduct.html?id=${allFurniture[i].id}"> <img src="${allFurniture[i].thumbnail}" alt=""></a>
                </div>
                <div class="product-page-card-title">
                    <h3>${allFurniture[i].title}</h3>
                </div>
                <div class="product-page-card-body">
                    <div class="product-page-add-to-cart">
                        <div class="product-page-add-to-cart-img">
                            <img src="assets/cart.png" alt="">
                        </div>
                        <div class="product-page-add-to-cart-txt">
                            <p>Add to cart</p>
                        </div>
                    </div>
                    <div class="product-page-card-price">
                        <p>${allFurniture[i].price}$</p>
                    </div>
                </div>
            </div>`
    }
    document.getElementById("all-products-cards").innerHTML=x
}
function displayAccessoriesData(){
    let x=``

    for (let i = 0; i < allAccessories.length; i++) {
        x+=`<div class="product-page-card">
                <div class="product-page-card-img">
                   <a href="https://john1909m.github.io/E-commerce/singleProduct.html?id=${allAccessories[i].id}"> <img src="${allAccessories[i].thumbnail}" alt=""></a>
                </div>
                <div class="product-page-card-title">
                    <h3>${allAccessories[i].title}</h3>
                </div>
                <div class="product-page-card-body">
                    <div class="product-page-add-to-cart">
                        <div class="product-page-add-to-cart-img">
                            <img src="assets/cart.png" alt="">
                        </div>
                        <div class="product-page-add-to-cart-txt">
                            <p>Add to cart</p>
                        </div>
                    </div>
                    <div class="product-page-card-price">
                        <p>${allAccessories[i].price}$</p>
                    </div>
                </div>
            </div>`
    }
    document.getElementById("all-products-cards").innerHTML=x
}
function displayBeautyData(){
    let x=``

    for (let i = 0; i < allBeauty.length; i++) {
        x+=`<div class="product-page-card">
                <div class="product-page-card-img">
                   <a href="https://john1909m.github.io/E-commerce/singleProduct.html?id=${allBeauty[i].id}"> <img src="${allBeauty[i].thumbnail}" alt=""></a>
                </div>
                <div class="product-page-card-title">
                    <h3>${allBeauty[i].title}</h3>
                </div>
                <div class="product-page-card-body">
                    <div class="product-page-add-to-cart">
                        <div class="product-page-add-to-cart-img">
                            <img src="assets/cart.png" alt="">
                        </div>
                        <div class="product-page-add-to-cart-txt">
                            <p>Add to cart</p>
                        </div>
                    </div>
                    <div class="product-page-card-price">
                        <p>${allBeauty[i].price}$</p>
                    </div>
                </div>
            </div>`
    }
    document.getElementById("all-products-cards").innerHTML=x
}
function displaySportsData(){
    let x=``

    for (let i = 0; i < allSports.length; i++) {
        x+=`<div class="product-page-card">
                <div class="product-page-card-img">
                   <a href="https://john1909m.github.io/E-commerce/singleProduct.html?id=${allSports[i].id}"> <img src="${allSports[i].thumbnail}" alt=""></a>
                </div>
                <div class="product-page-card-title">
                    <h3>${allSports[i].title}</h3>
                </div>
                <div class="product-page-card-body">
                    <div class="product-page-add-to-cart">
                        <div class="product-page-add-to-cart-img">
                            <img src="assets/cart.png" alt="">
                        </div>
                        <div class="product-page-add-to-cart-txt">
                            <p>Add to cart</p>
                        </div>
                    </div>
                    <div class="product-page-card-price">
                        <p>${allSports[i].price}$</p>
                    </div>
                </div>
            </div>`
    }
    document.getElementById("all-products-cards").innerHTML=x
}
function displayGroceryData(){
    let x=``

    for (let i = 0; i < allGrocery.length; i++) {
        x+=`<div class="product-page-card">
                <div class="product-page-card-img">
                   <a href="https://john1909m.github.io/E-commerce/singleProduct.html?id=${allGrocery[i].id}"> <img src="${allGrocery[i].thumbnail}" alt=""></a>
                </div>
                <div class="product-page-card-title">
                    <h3>${allGrocery[i].title}</h3>
                </div>
                <div class="product-page-card-body">
                    <div class="product-page-add-to-cart">
                        <div class="product-page-add-to-cart-img">
                            <img src="assets/cart.png" alt="">
                        </div>
                        <div class="product-page-add-to-cart-txt">
                            <p>Add to cart</p>
                        </div>
                    </div>
                    <div class="product-page-card-price">
                        <p>${allGrocery[i].price}$</p>
                    </div>
                </div>
            </div>`
    }
    document.getElementById("all-products-cards").innerHTML=x
}









if(document.getElementById("title").innerHTML=="Products"){
    productsPage.classList.add("link-active")
    
}
homePage.addEventListener("click",function(e){
    navigate="https://john1909m.github.io/E-commerce/"
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
homePageMenu.addEventListener("click",function(e){
    navigate="https://john1909m.github.io/E-commerce/"
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
    navigate="https://john1909m.github.io/E-commerce/"
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
document.getElementById("all-filter").addEventListener("click",function(){
    displayAllData()
})
document.getElementById("phones-filter").addEventListener("click",function(){
    displayPhonesData()
})
document.getElementById("laptops-filter").addEventListener("click",function(){
    displayLaptopsData()
})
document.getElementById("watches-filter").addEventListener("click",function(){
    displayWatchesData()
})
document.getElementById("clothes-filter").addEventListener("click",function(){
    displayClothesData()
})
document.getElementById("shoes-filter").addEventListener("click",function(){
    displayShoesData()
})
document.getElementById("furniture-filter").addEventListener("click",function(){
    displayFurnitureData()
})
document.getElementById("accessories-filter").addEventListener("click",function(){
    displayAccessoriesData()
})
document.getElementById("beauty-filter").addEventListener("click",function(){
    displayBeautyData()
})
document.getElementById("sports-filter").addEventListener("click",function(){
    displaySportsData()
})
document.getElementById("grocery-filter").addEventListener("click",function(){
    displayGroceryData()
})

document.getElementById("all-filter-menu").addEventListener("click",function(){
    displayAllData()
})
document.getElementById("phones-filter-menu").addEventListener("click",function(){
    displayPhonesData()
})
document.getElementById("laptops-filter-menu").addEventListener("click",function(){
    displayLaptopsData()
})
document.getElementById("watches-filter-menu").addEventListener("click",function(){
    displayWatchesData()
})
document.getElementById("clothes-filter-menu").addEventListener("click",function(){
    displayClothesData()
})
document.getElementById("shoes-filter-menu").addEventListener("click",function(){
    displayShoesData()
})
document.getElementById("furniture-filter-menu").addEventListener("click",function(){
    displayFurnitureData()
})
document.getElementById("accessories-filter-menu").addEventListener("click",function(){
    displayAccessoriesData()
})
document.getElementById("beauty-filter-menu").addEventListener("click",function(){
    displayBeautyData()
})
document.getElementById("sports-filter-menu").addEventListener("click",function(){
    displaySportsData()
})
document.getElementById("grocery-filter-menu").addEventListener("click",function(){
    displayGroceryData()
})