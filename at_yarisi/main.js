
let btn = document.querySelector("button")
let p = document.querySelector("p")
let arr = [...document.querySelectorAll(".at")]
let restart = document.querySelector(".restart")
let bet = document.querySelector(".bet")
let selectedAt = document.querySelector(".selected-at")
let budcePul = document.querySelector("h1")

console.log(arr)

function randomSpeed() {
    let random = Math.random() + 0.3

}

// btn.style.backgroundColor = "red"

let budce = 200
let winner = 200
let winnerId = 0
let currentId = 0
btn.addEventListener("click", () => {

    arr.forEach((x) => {

        console.log(x);
        x.style.transform = "translateX(86vw)"
        let speed = Math.random() * 5 + 1
        if (winner > speed) {
            winner = speed
            winnerId = currentId
        }
        x.style.transition = `${speed}s`
        currentId++
    })
    setTimeout(() => {
        p.innerText = `${winnerId + 1} olan at uddu`

    }, 2000)
    winnerId++
    if (selectedAt.value == winnerId && budce>=bet.value) {
        budce += bet.value * 2
        budcePul.innerText = `BUDCEN: ${budce}`
    }
    else if(budce>=bet.value) {
        budce -= bet.value
        budcePul.innerText = `BUDCEN: ${budce}`
    }
    else{
        alert("Budcene uygun hereket ele")
    }

})

restart.addEventListener("click", () => {
    arr.forEach((x) => {

        x.style.transform = "translateX(0vw)"
        x.style.transition = `${0}s`
        currentId++
    })
    winner = 200
    winnerId = 0
    currentId = 0
})



