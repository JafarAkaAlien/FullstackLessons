// elementleri goturmek:
let body = document.body
let h = document.querySelector("h1")
let mood = document.querySelector(".fa-solid")
let local = localStorage.getItem("theme")


mood.addEventListener("click", () => {
    if (mood.classList.contains("fa-moon")) {
        Dark()
        localStorage.setItem("theme", "Dark")
    }
    else {
        Light()
        localStorage.setItem("theme", "Light")
    }
})



body.classList.add("light-mode")

if (local == "Dark") {
    Dark() 
}
else { 
    Light() 
}


function Dark() {
    body.classList.replace("dark-mode", "light-mode")
    mood.classList.replace("fa-moon", "fa-sun")

}
function Light() {
    body.classList.replace("light-mode", "dark-mode")
    mood.classList.replace("fa-sun", "fa-moon")
}

