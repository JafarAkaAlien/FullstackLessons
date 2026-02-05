let cards = document.querySelector(".cards")

fetch(`https://dummyjson.com/carts`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        // data(10) 

        let api_carts = data.carts
        console.log(api_carts);
        api_carts.forEach(element => {

            element.products.forEach((item)=>{
                cards.innerHTML += `<div class="card" style="width: 18rem;">
  <img src=${item.thumbnail} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">Total: ${item.total}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
    `
            })

        });

    })


    // const x = 5
    // x = 10

let array = [1,2,3]
array.findLast    