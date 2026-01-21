let sidebar = document.querySelector(".side-bar")

let burgerButton = document.querySelector("#button")

let xButton = document.querySelector(".fa-x")

burgerButton.addEventListener("click", () => {
    sidebar.classList.toggle("position-hidden")

    // sidebar.style.background = "red" 
    console.log("salam");

})

xButton.addEventListener("click",()=>{
    sidebar.classList.add("position-hidden")

})