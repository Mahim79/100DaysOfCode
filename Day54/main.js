// Selection 
const inp = document.querySelector(".add-inp")
const addBtn = document.querySelector(".add-btn")
const ul = document.querySelector(".list")
const li = document.querySelectorAll(".item")
const allDlt =document.querySelector(".all-delete")


function addTask (){
    const inpValue = inp.value.trim()

    if(inpValue !== ""){
        const newli = document.createElement('li')
        newli.className = "item"
        newli.innerHTML = ` <input type="checkbox">
                        ${inpValue}
                        <button onclick="DeleteLi(this)" class="delete-btn"><i class="fa-solid fa-trash"></i></button>`
        
        ul.appendChild(newli)
    
        inp.value=" "
    }else{
        alert("Please Write Your Task Name")
    }
    
}

function DeleteLi(btn){
    const li = btn.parentNode

    li.remove()
    
}

function DeleteAll(){
    
    const Checkeditems = document.querySelectorAll('input[type="checkbox"]:checked')
    
    
    Checkeditems.forEach((el)=>{
        const li = el.parentNode

        li.parentNode.removeChild(li)
        
    })
}
