 
 // Selection
 let quantity = document.querySelector(".quantity")
 let upbtn = document.querySelector(".up")
 let downbtn = document.querySelector(".down")


 let initValue = 1;

 // Function 

 let updown = function(value){
    initValue += value;
    quantity.innerText = initValue;

    if( initValue >= 10){
        upbtn.setAttribute("disabled",true)
    }else{
        upbtn.removeAttribute("disabled",false)
    }


    if(initValue <= 0 ){
        downbtn.setAttribute("disabled",true)
    }else{
        downbtn.removeAttribute("disabled",false)
    }

    
 }


 // Add Event Listener

 upbtn.addEventListener("click",()=>{
    updown(1)
 })
 downbtn.addEventListener("click",()=>{
    updown(-1)
 })