//Selection 
const btns = document.querySelectorAll(".btn")
const images = document.querySelectorAll(".portfolio__img")

//Function

function filteredImage(e){

    // Active class remove and add
    document.querySelector(".portfolio__btns .active").classList.remove("active")
    const btn = e.target
    btn.classList.add("active")
    console.log(images);

    images.forEach((image)=>{
       let imageDN = image.getAttribute("data-name")
       let btnDN = btn.getAttribute("data-name")

       if(imageDN == btnDN || btnDN == "all"){
        image.style.display="block"
   }else{
        image.style.display="none"
   }
       
    })
    
}


// Event Listener

btns.forEach((btn)=>{
    btn.addEventListener("click",filteredImage)
})