let h1 = document.querySelector("h1")
// let downloadBox = document.querySelector(".download-bar")
let btn = document.querySelector("button")


let timer = 0

let random = Math.floor(Math.random() * 3) + 2


setTimeout(() => {
    let k = setInterval(() => {
        timer++
    }, 1);
    btn.innerText="click now!"
    btn.addEventListener("click", () => {
        timer = 10000-timer*10
        clearInterval(k)
        h1.innerText = "Your score: "+timer
    }
    );


}, random * 1000)



