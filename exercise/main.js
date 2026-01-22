let btn = document.createElement("button")

btn.innerText="Click et"

let btn_div = document.createElement("div")

btn_div.classList.add("btn-div")

let slm_div = document.createElement("div")

slm_div.classList.add("slm-div")

slm_div.innerHTML="<h1>Salam</h1>"

btn_div.append(btn)

document.querySelector("body").append(btn_div,slm_div)

slm_div.style.display="none"

btn_div.addEventListener("click", ()=>{
    slm_div.style.display="flex"
})