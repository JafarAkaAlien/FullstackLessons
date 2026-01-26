let rootAsset = "asset/"
let question = "_question.jpg"
let answer = "_answer.jpg"
let animals = ["cat", "dog", "lion"]


let answer_img_one = document.querySelector(".one")
let answer_img_two = document.querySelector(".two")
let answer_img_three = document.querySelector(".three")
let question_img = document.querySelector(".main")


function regen() {

    let animal_rest = animals
    let i = 0
    answer_img_one.removeAttribute("src")
    answer_img_two.removeAttribute("src")
    answer_img_three.removeAttribute("src")
    question_img.setAttribute("class","main")

    while (i < 3) {

        let random = Math.floor(Math.random() * animal_rest.length)
        let current = rootAsset + animal_rest[random] + answer
        let Custom_class = animal_rest[random]
        animal_rest.splice(random, 1)
        if (!answer_img_one.hasAttribute("src")) {
            answer_img_one.setAttribute("src", current)
            let firstClass = Custom_class
            answer_img_one.addEventListener("click", () => {

                if (question_img.classList.contains(firstClass)) {
                    alert("Tebrikler");
                    regen()
                }
            })

        }
        else if (!answer_img_two.hasAttribute("src")) {
            answer_img_two.setAttribute("src", current)
            answer_img_two.classList.add(Custom_class)
            let firstClass = Custom_class
            answer_img_two.addEventListener("click", () => {

                if (question_img.classList.contains(firstClass)) {
                    alert("Tebrikler");
                    regen()

                }
            })

        }
        else {
            answer_img_three.setAttribute("src", current)
            answer_img_three.classList.add(Custom_class)

            let firstClass = Custom_class

            answer_img_three.addEventListener("click", () => {

                if (question_img.classList.contains(firstClass)) {
                    alert("Tebrikler");
                    regen()
                }
            })
        }


        i++

    }



    animals = ["cat", "dog", "lion"]

    let random = Math.floor(Math.random() * animals.length)

    let newquestion = rootAsset + animals[random] + question

    question_img.setAttribute("src", newquestion)
    question_img.classList.add(animals[random])


}

regen()
