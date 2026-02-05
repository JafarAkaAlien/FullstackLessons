// let data = []

// fetch("assets/Film.JSON")
//     .then((res) => res.json())
//     .then((js_data) => {
//         js_data.forEach((x) => cardCreator(x.Title, x.Images[1], x.Genre, x.imdbRating))
//         data = js_data

//     }
//     )

// let cards = document.querySelector(".cards")

// function cardCreator(film_title, img_src, film_desc, film_imdb) {
//     let card = document.createElement("div")
//     let img = document.createElement("img")
//     let title = document.createElement("h2")
//     let desc = document.createElement("p")
//     let imdb = document.createElement("p")

//     card.classList.add("card")

//     img.setAttribute("src", img_src)
//     title.innerText = film_title
//     desc.innerText = film_desc

//     imdb.innerText = "imbd: " + film_imdb



//     card.append(img, title, desc, imdb)

//     cards.append(card)


// }


// let btn = document.querySelector("button")
// let selector = document.querySelector("select")
// let film_name = document.querySelector("input")


// btn.addEventListener("click", () => {

//     let selected_genre = selector.options[selector.selectedIndex].value

//     cards.textContent = ""
//     let newData = data.filter((x) => x.Genre.includes(selected_genre))
//     if (film_name.value != "") {
//         newData = data.filter((x) => {
//             let newTitle = x.Title.toUpperCase()
//             console.log(film_name.value.toUpperCase());

//             return newTitle.includes(film_name.value.toUpperCase())

//         })
//         console.log(film_name.value);

//     }
//     newData.forEach((x) => cardCreator(x.Title, x.Images[1], x.Genre, x.imdbRating))

// })



// // let sosqa = prompt("Salam bura yazi yaz!")


// // alert("Yazi yazmaq olmur")

class array {
    constructor(array) {
        this.values = array
    }

    
    pop() {
        this.values = undefined
}
}



let my_array = new array([1, 2, 3, 4])

my_array.pop()

console.log(array.values);

