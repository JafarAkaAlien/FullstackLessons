let enemy_car_pic = ["assets/enemy_car.jpg","assets/enemy_car2","assets/enemy_car3","assets/enemy_car4", "assets/enemy_car5"]
class EnemyCar {
    constructor() {
        let enemy_car = document.createElement("div")
        enemy_car.classList.add("enemy-car")
        let random = Math.floor(Math.random()*enemy_car_pic.length)
        enemy_car.style.backgroundImage = `url(${enemy_car_pic[random]})`
        let xpos = randompos[Math.floor(Math.random() * 4)]
        enemy_car.style.top = `0px`
        enemy_car.style.left = `${xpos}px`
        this.car = enemy_car
    }

    movement(move_speed) {
        let ycord = -50
        let isGameGoing = true

        let k = setInterval(() => {
            ycord += move_speed
            this.car.style.transform = `translateY(${ycord}px)`
            // console.log("salam");
            // Collide yoxlayir burani baglayiram hele ki
            if (this.isCollide(player_car) && isGameGoing) {
                isGameGoing = false
                GameOver()
            }

            if (ycord > 1000) {
                clearInterval(k)
                this.car.remove()
            }
        }, 10)
    }
    isCollide(player_car) {
        let player_rect = player_car.getBoundingClientRect()
        let enemy_rect = this.car.getBoundingClientRect()
        let margin_top = 25
        let margin_left = 15
        return !(((player_rect.top + player_rect.height) < (enemy_rect.top + margin_top)) ||
            ((player_rect.top + margin_top) > (enemy_rect.top + enemy_rect.height)) ||
            ((player_rect.left + player_rect.width) < enemy_rect.left + margin_left) ||
            ((player_rect.left + margin_left) > (enemy_rect.left + enemy_rect.width))

        )
    }
}


if (localStorage.getItem("leaderboard") === null) {
    let dummy_data = [{ name: 'Nameless', score: '500' }]
    dummy_data = JSON.stringify(dummy_data)
    localStorage.setItem("leaderboard", dummy_data)
}


let player_car = document.querySelector(".car")
let randompos = [525, 640, 765, 880]
let score_board = document.querySelector(".score-board")
let your_score_h1 = score_board.querySelector("h1")
let input = score_board.querySelector("input")
let score = 0
let play_button = score_board.querySelector("button")

let car_pos = player_car.getBoundingClientRect()
let viewPortX = car_pos.left
let viewPortY = car_pos.top
let keymap = {}

document.addEventListener("keydown", (x) => {
    keymap[x.key] = true

})
document.addEventListener("keyup", (x) => {
    keymap[x.key] = false
})

let game_area = document.querySelector(".game-area")
game_area_rect = game_area.getBoundingClientRect()
let collide_with_area = [false, false, false, false]

function checkForSurrondings(player_rect) {

    if (game_area_rect.top > (player_rect.top)) {
        // yuxari
        collide_with_area[0] = true
    }
    if (game_area_rect.right < (player_rect.right)) {
        // console.log("deydi");
        collide_with_area[1] = true
    }
    if (game_area_rect.left > (player_rect.left)) {
        // console.log("deydi");
        collide_with_area[2] = true
    }
    if (game_area_rect.bottom < player_rect.bottom) {
        // console.log("Deydi");
        collide_with_area[3] = true
    }
}

let player_move_speed = 2.4;
let gameplayLoop;
let mainLoop;
let score_calc
setInterval(() => {
    checkForSurrondings(player_car.getBoundingClientRect())
    // console.log(collide_with_area);

    if (keymap["a"] && !collide_with_area[2]) {
        viewPortX -= player_move_speed
    }
    if (keymap["d"] && !collide_with_area[1]) {
        viewPortX += player_move_speed
    }
    if (keymap["w"] && !collide_with_area[0]) {
        viewPortY -= player_move_speed - 1
    }
    if (keymap["s"] && !collide_with_area[3]) {
        viewPortY += player_move_speed + 1
    }
    player_car.style.transform = `translate(${viewPortX}px,${viewPortY}px)`
    collide_with_area = [false, false, false, false]

}, 10)


// Main interval for game speeding up

function gameStart() {
    score = 0
    let spawn_speed = 2500
    let move_speed = 2
    let road_speed = 500
    let score_increment = 1
    game_area.style.animation = `road ${road_speed}s infinite linear`

    gameplayLoop = setInterval(() => {
        let enemyCar = new EnemyCar()
        let cars = []
        cars.push(enemyCar)
        document.body.appendChild(enemyCar.car)

        let ycord = -100
        enemyCar.car.style.top = `${ycord}px`

        enemyCar.movement(move_speed)

    }, spawn_speed)

    score_calc = setInterval(() => {
        score += 1
        your_score_h1.innerText = `Your Score: ${score}`
    }, 100)


    mainLoop = setInterval(() => {
        // spawnCars(spawn_speed)

        if (spawn_speed > 900) {
            move_speed += 0.3
            road_speed -= 50
            spawn_speed -= 200
            game_area.style.animation = `road ${road_speed}s infinite linear`
        }
        console.log(spawn_speed);
        console.log(move_speed);
        console.log(road_speed);
        console.log(score_increment);



        console.log('in big interval');
        if (score_increment < 1000) {
            score_increment *= 2
        }

        clearInterval(gameplayLoop)
        clearInterval(score_calc)

        gameplayLoop = setInterval(() => {
            let enemyCar = new EnemyCar()
            let cars = []
            cars.push(enemyCar)
            document.body.appendChild(enemyCar.car)

            let ycord = -100
            enemyCar.car.style.top = `${ycord}px`
            enemyCar.movement(move_speed)

        }, spawn_speed)

        score_calc = setInterval(() => {
            score += score_increment
            console.log(score_increment);

            your_score_h1.innerText = `Your Score: ${score}`
        }, 100)

    }, 7500)


}
let gamestarted = false

play_button.addEventListener("click", () => {
    if (!gamestarted) {
        gamestarted = true
        gameStart()
        play_button.style.visibility = "hidden"
    }

})

let firstTime = true

function GameOver() {

    if (!firstTime) {
        alert("Game is over, Your score is: " + score)
    }
    firstTime = false

    clearInterval(gameplayLoop)
    clearInterval(mainLoop)
    clearInterval(score_calc)
    let cars = document.querySelectorAll(".enemy-car")
    cars.forEach(x => x.remove())
    // console.log();
    collide_with_area = [false, false, false, false]
    player_name = input.value

    if (player_name == "") {
        player_name = "Nameless Warrior"
    }

    gamestarted = false
    localStr(player_name, score)

    play_button.style.visibility = "visible"
}


GameOver()



async function localStr(player_name, new_score) {

    try {
        let localData = localStorage.getItem("leaderboard")
        console.log(localData);
        data = await JSON.parse(localData)
        console.log(data);
        let played_before = false
        data.forEach((x) => {
            if (x.name == player_name) {
                played_before = true
                if (x.score < new_score) {
                    x.score = new_score
                }
            }

        })
        if (!played_before) {
            let new_player = { name: player_name, score: new_score }

            data.push(new_player)
        }
        // data.splice(2, 1)
        updateBoard(data)
        data = JSON.stringify(data)
        localStorage.setItem("leaderboard", data)

    }
    catch (err) {
        console.log("Cant do it patron");
        console.error(err)

    }

}





function updateBoard(new_data) {

    new_data.sort((a, b) => b.score - a.score)
    console.log(new_data);

    let scoreBoard = document.querySelector(".scores")
    scoreBoard.innerHTML = ""
    for (i = 0; i < 9 && i < data.length; i++) {
        console.log("salam semaye");

        scoreBoard.innerHTML += `<p>${i + 1}. ${new_data[i].name}: ${new_data[i].score}</p>`
    }



}