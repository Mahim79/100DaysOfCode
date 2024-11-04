// Selection 
let days = document.querySelector(".days")
let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")

// Function

function countdown(){
    let endDate = new Date("31 Dec 2025 12:00:00")
    let currentDate = new Date()
    let totalTime = endDate - currentDate

    let secondsHas = Math.floor(totalTime / 1000)
    let minuteshas = Math.floor(secondsHas / 60);
    let hoursHas = Math.floor(minuteshas / 60);
    let daysHas = Math.floor(hoursHas / 24)

    let remainHours = daysHas % 24
    let remainMinutes = minuteshas % 60
    let remainSeconds = secondsHas % 60    

    days.innerHTML = daysHas;
    hours.innerHTML = remainHours;
    minutes.innerHTML = remainMinutes;
    seconds.innerHTML = remainSeconds
    
}
countdown()
setInterval(countdown,1000)

console.log(new Date() - 1970);
