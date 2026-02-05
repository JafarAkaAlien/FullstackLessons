let cont = document.querySelector(".container")
let input = document.querySelector("input")
let btn = document.querySelector("button")


fetch("data.json")
.then((res)=>
    res.json()
)
.then((data)=>{
    // console.log(data[0].text);
    // data.push({text:"necesen"})
    // console.log(data[1].text);
    
})