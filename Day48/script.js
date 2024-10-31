
// Selection 
let price = document.querySelector(".price")
let quantity = document.querySelector(".quantity")
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let regular =document.querySelector(".regular")
let cart =document.querySelector(".cart")
let addCart = document.querySelector(".addtocart")

let cover = document.querySelector(".main-img")
let single = document.querySelectorAll(".single")


// Initial Value
let counter = 1
let perProduct = 125.00
let totalPrice = perProduct
let regularPrice = 250.00
let totalRegular = regularPrice


// Functions
const quantityUpdate = (value)=>{
    counter += value
    quantity.innerHTML=counter

    if(counter >=5){
        plus.setAttribute("disabled",true)
        plus.style="opacity:0.5;cursor:not-allowed";
    }else{
        plus.removeAttribute("disabled",false)
        plus.style="opacity:1;cursor:pointer";
    }

    if(counter <= 0){
        minus.setAttribute("disabled",true)
        minus.style="opacity:0.5;cursor:not-allowed";
    }else{
        minus.removeAttribute("disabled",false)
        minus.style="opacity:1;cursor:pointer";
    }
}

const increment = ()=>{
    totalPrice += perProduct
    price.innerHTML=(`$${totalPrice}`)


    totalRegular += regularPrice
    regular.innerHTML=(`$${totalRegular}`)
}

const decrement = ()=>{

    totalPrice -= perProduct
    price.innerHTML=(`$${totalPrice}`)

    totalRegular -= regularPrice
    regular.innerHTML=(`$${totalRegular}`)
}

const addedCart =()=>{
    
}

// Add Event Listener

plus.addEventListener("click",() => {
    quantityUpdate(1)
    increment()
})
minus.addEventListener("click",()=>{
    quantityUpdate(-1)
    decrement()
})

addCart.addEventListener("click",()=>{
    addCart.innerHTML=`
    <i class="fa-solid fa-cart-shopping"></i>
    <p class="cart">Added to cart</p>
    `
    addCart.style="background:gray"
})




for(el of single){
    el.addEventListener("mouseenter",function(){
        this.style="opacity:0.5;"

        cover.removeAttribute("src")
        cover.setAttribute("src",this.src)
        

    })
    el.addEventListener("mouseout",function(){
        this.style="opacity:1"
    }) 

    
}