//Selection
let container=document.querySelector(".container")
let colorBox = document.querySelector(".colorBox")
let code =document.querySelector(".code")
let copyBtn = document.querySelector(".copyCode")
let GenerateBtn = document.querySelector(".generateColor")

// Functions

let randomCode = () => {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    let color = `rgb(${r},${g},${b})`
    
    code.innerHTML= color ;
    colorBox.style = `background : ${color}`;
}

let copyCode = ()=>{
    let input = document.createElement("input")
    input.value = code.innerText;
    container.appendChild(input)

    input.select()
    document.execCommand("copy")

    input.remove()

    alert("RGB color code is copied")
}

// Add Event Listener
GenerateBtn.addEventListener("click",randomCode)
copyBtn.addEventListener("click",copyCode)