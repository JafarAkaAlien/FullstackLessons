// // Valeh muelllim salam


// let prime = 129 

// let k = 2;
// let bool = false;
// while(k >= Math.sqrt(prime) ){
//     if(prime%k ==0){
//         bool=false;
//         console.log("Regem sade deyil! boleni var, " + k)
//         break;
//     }
//     k++;
// }
// if(bool){
//     console.log(prime + " reqem sadedir Vusal stili")
// }

// /////////////////////////////////////////////////////

// let input = prompt("Aldigin qiymetini daxil et");

// if(input > 90){
//     console.log("elaci");
    
// }

// else if(input > 70){
//     console.log("zerbeci");
    
// }

// else if(input > 50){
//     console.log("kafir");
    
// }
// else{
//     console.log("kesildin");
    
// }

// ////////////////////////////////////////



// let temp = prompt("tempraturu daxil edin");

// if(temp > 35){
//     console.log("cox isti");
    
// }

// else if(temp > 20){
//     console.log("isti");
    
// }

// else if(temp > 0){
//     console.log("soyuq");
    
// }
// else{
//     console.log("donur");
    
// }


// for (let i = 3; i<50; i+=3){
//     if(i%5!=0){
//         console.log(`${i} 3 e bolunur`);
        
//     }
// }

// for( let i = 3; i<100 ; i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz "+i);
//     }
//     else if(i%3==0){
//         console.log("Fizz "+i);
//     }
//     else if(i%5==0){
//         console.log("Buzz " +i)
//     }
// }


// function reversed (input){

//     let k = []
//     for(let i = 1; i<=input.length; i++){
//         k.push(input[input.length-i])
//         // console.log(input[input.length-i])
//     }

//     k = k.join("")
//     return k;
// }

// let input  = prompt("Yoxlamaq istediyin reqemi daxil et")

// let polintry = reversed(input);
// // console.log(reversed(input))
// if(polintry==input) console.log(input+ " Polindromdur");

// else console.log(input+ " Polindrom deyil");


/// kod for adding and deleting

// let answers = [];

// while(true){

    

//     let res = prompt("Adinizi daxil edin! (stop yazmaq kodu dayandiracaq)")

//     if(res=="stop"){
//         break
//     }

//     if(answers.indexOf(res)==-1){
//         answers.push(res)
//     }
//     else{
//         alert("Your name was already in array so we are deleting it! Add it again")
//         answers.splice(answers.indexOf(res),1)
//     }

//     console.log(answers)

    
    
// }


/////////////////////

let arr = [10,20,30,40,60,120,30,400,556,1231,13213213123]

console.log(arr.map((x)=>x*0.7))
