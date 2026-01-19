let btn = document.querySelector("button")



function hiding(element) {

    if (element.style.visibility == 'hidden') {
        element.style.visibility = "visible"
        console.log("Qaqa burdayam isleyir eslinde");
    }
    else {
        element.style.visibility = "hidden"
        console.log("Qaqa ancaq hidden isleyir");
    }
}

let jobs = ["fehle","hekim", "dev", "kesfiyatci", "Agent", "Parkovshik", "satici", "administrator", "ofisiant", "sahmatist", "kameraman", "belboy", "vale", "reseption", "berber", "svarsjik", "sair", "yazici", "ressam", "yarimciq papaqci", "kamil bir palanci", "influencer", "blogger", "viner", "instaqramda hesab acib satan", "gamer", "dilenci", "stilist", "derzi", "ayaqqabici", "coban"]
let mainText = document.querySelector("h1")

function random255(){
    return Math.floor(Math.random()*255)
}

function randomColor(){
    return "#"+Math.floor(Math.random()*255) + Math.floor(Math.random()*255)+Math.floor(Math.random()*255)
}
mainText.style.transition  = "1s" 
 
btn.addEventListener("click", ()=>{
    let input  = document.querySelector("#ad")
    let ad = input.value;
    let num = Math.floor(Math.random()*jobs.length)
    mainText.innerText = ad + " "+ jobs[num]
    mainText.style.color = randomColor()
})