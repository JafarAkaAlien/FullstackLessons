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

// let arr = [42, 312, 312, 33, 10,20,30,40,60,120,30,400,556,1231,13213213123]

// let min = arr[0];
// for(let i=0; i<arr.length; i++){
//     if(min>=arr[i]) {
//         min = arr[i]
//     }

// }
// console.log("en kicik eded " +min)


// let arr = []

// for (let i=0; i<20; i++){

//     arr.push(Math.floor(Math.random()*100))

// }

// let newarr = arr.map((x)=>x*x)

// console.log(arr)
// console.log(newarr)


// let prod = ["samsung", "nokia","toshiba"] 

// for(let i =0; i<3;){



//     let res = prompt("salam mehsul dahil et")

//      if(res=="stop"){
//         break
//     }
//     if(prod.indexOf(res)==-1){
//         prod.push(res)
//     }

// }
// console.log(prod);




// let arr = []

// for (let i = 0; i < 5; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 5; j++) {

//         let x = Math.random()
//         x >= 0.5 ? arr[i][j] = "bos" : arr[i][j] = "dolu"

//     }

// }

// console.log(arr);


// while (true) {
//     let sira = +prompt("Sira daxil edin: (1-5 arasi)")
//     let stol = +prompt("Oturacaginizi daxil edin: (1-5 arasi)")

//     if(sira>5 || stol>5 || sira<1 || stol<1){
//         alert("Normal oturacaq daxil edin, 1 ve 5 arasi")
//     }
//     else if (arr[sira-1][stol-1] == "dolu") {
//         alert("Bu oturacaq doludur.")
//     }
//     else{

//         arr[sira-1][stol-1]="dolu"
//         console.log(`Tebrikler aldiniz: sira: ${sira} stol: ${stol}`)

//         console.log(arr)

//         for(let i = 0; i<5; i++){
//             for(let j = 0; j<5; j++){
//                 console.log(`${i+1}.${j+1} = ${arr[i][j]}`)
//             }
//         }
//         break
//     }
// }

// let arr = []
// while(true){

//     let res = prompt("Reqem daxil edin,  dayanmaq ucun stop yazin")
//     if(res=="stop"){
//         break
//     }
//     if(isNaN(res)){
//         alert("Reqem daxil edn")

//     }
//     else{
//         let k = Number(res)
//         arr.push(k)
//     }
// }
// console.log(...arr)
// console.log(`en boyuk reqem: ${Math.max(...arr)} ve en kicik reqem: ${Math.min(...arr)}`)


// let qrup = ["Raiz","Vusale","Tutu","Jafar","Rafiq","Resul","Eziz","Ramazan","Rehman"]



// while(qrup.length>1){
//     let randomIndex = Math.floor(Math.random()*(qrup.length))
//     console.log(`Deleted name: ${qrup[randomIndex]}`)
//     qrup.splice(randomIndex,1);    
// }

// console.log("Sona qalan: " + qrup);


// let arr = [4,9,16,100]

// arr.every((x)=>x%Math.sqrt(x)==0) ? console.log( "Hamisinin kvadrat koku tam ededdir") : console.log("Bezilerinin kvadrat koku tam eded deyil")


// let ad = "Ramazan"

// let arrAd = ad.split("")
// let revAd = []
// for(let i = 0 ; i<arrAd.length; i++)
// {
//     revAd.push(arrAd[arrAd.length-i-1])
// }

// let yeniAd = revAd.join("");
// console.log(yeniAd)

// function boyukHerf(_name){
//     return _name[0].toUpperCase() + _name.slice(1,_name.length).toLowerCase
// }


// let ad = prompt("Adinizi daxil edin")

// ad = ad.trim().toUpperCase()


// let arr = ad.split(" ")
// let firstname = arr[0]
// let lastname = arr[arr.length-1]

// firstname = firstname[0] + firstname.slice(1,firstname.length).toLowerCase()
// lastname = lastname[0] + lastname.slice(1,lastname.length).toLowerCase()


// console.log(firstname + " " + lastname)


// let ad = prompt("Enter your username")

// let random = Math.floor(Math.random()*10000);

// ad = ad.toLowerCase().trim();

// console.log(ad+random);


console.log(prompt("Ënter your username").toLowerCase().trim() + Math.floor(Math.random()*10000))