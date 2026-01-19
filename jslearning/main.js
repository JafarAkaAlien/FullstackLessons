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


// console.log(prompt("Ënter your username").toLowerCase().trim() + Math.floor(Math.random()*10000))


// let soz = prompt("Ad daxil et")

// soz = soz.trim();

// let arr = []
// for(let i = 0; i<soz.length; i ++){

//     if(soz[i]!=" "){
//         arr.push(soz[i])
//     }
//     if(i==soz.length-1){
//         break
//     }
//     if(soz[i]!=" " && soz[i+1]==" "){
//         arr.push(" ")
//     }

// }

// let yeniAd = arr.join("")

// console.log(yeniAd)


// let random = Math.round(Math.random() * 50)
// // alert(random)
// let can = 7;
// alert("Caniniz: "+can)
// let arr = []
// while (can>0) {


//     let texmin = +prompt("Reqemi texmin edin")
//     arr.push(texmin)
//     can--
//     if(Number.isNaN(texmin)){
//         can++
//         alert("Reqem daxil edin zehmet olmasa")
//     }
//     else if (texmin > random) {
//         if (texmin > (random + 10)){ alert("Texminin Reqemden dehset cox boyukdur, qalan can: "+can)}

//         else {alert("Texminin reqemden boyukdu, qalan can: "+can)}
//     }
//     else if (texmin < random) {
//         if (texmin < (random -10)){ alert("Texminin Reqemden dehset cox Kicikdir, qalan can: "+can)}

//         else {alert("Texminin reqemden kicikdir, qalan can: "+can)}
//     }
//     else {
//         alert("Reqemi tapdiniz")
//         break
//     }

//     if(can==0){
//         alert("Oyun bitti meglub oldunuz")
//         break
//     }
//     alert(`Texmin etdininiz reqemler: ${arr}` )
    


// }

// let randomReqem = Math.floor(Math.random() * 50)
// while (true) {
//     let sorgu = +prompt("reqem daxil edin")
//     let ferq = sorgu - randomReqem
//     if (ferq > 10) {
//         alert("cox asagi dus")
//     }
//     else if (ferq < -10) {
//         alert("cox yuxari qalx")
//     }
//     else if (sorgu > randomReqem) {
//         alert("asagi dus");
//     }
//     else if (sorgu < randomReqem) {
//         alert("yuxari qalx");
//     }
//     else if (sorgu == randomReqem) {
//         alert("duz tapdiz");
//         break;
//     }

//     else {
//         alert("duzgun reqem daxil edin")
//     }
// }



// let seviyye = prompt("Çətinlik səviyyəsini seç: \n1. Asan (10 cəhd) \n2. Orta (5 cəhd) \n3. Çətin (3 cəhd)");

// let canHaqqi;
// if (seviyye === "1") {
//     canHaqqi = 10;
// } else if (seviyye === "3") {
//     canHaqqi = 3;
// } else {
//     canHaqqi = 5; 
// }

// const baslangicCani = canHaqqi;
// let randomEded = Math.floor(Math.random() * 1000) + 1;
// let texminler = []; 
// let tapildi = false;

// while (canHaqqi > 0) {
//     let daxilEdilen = prompt(`Can: ${canHaqqi}. 1-1000 arası təxmini: \n(Əvvəlki yazdığın: ${texminler.join(", ")})`);

//     if (daxilEdilen === null) break;

//     let texmin = Number(daxilEdilen);
//     texminler.push(texmin); 

//     if (texmin === randomEded) {
  
//         let bal = canHaqqi * 200; 
//         alert(`TƏBRİKLƏR! 🎉 \n${randomEded} rəqəmini tapdınız. \nQazandığın Bal: ${bal} `);
//         tapildi = true;
//         break;
//     }

//     canHaqqi--;
//     let ferq = Math.abs(randomEded - texmin);

//     if (canHaqqi > 0) {
//         let mesaj = "";
//         if (ferq > 300) {
//             mesaj = texmin < randomEded ? "Çox çox yuxarı yaz qaqa " : "Çox çox aşağı 👇";
//         } else if (ferq > 50) {
//             mesaj = texmin < randomEded ? "Yuxarı! ⬆️" : "Aşağı! ⬇️";
//         } else {
//             mesaj = texmin < randomEded ? "Çox yaxınsan, bir az yuxarı" : "Çox yaxınsan, bir az aşağı ";
//         }
//         alert(mesaj);
//     }
// }

// if (!tapildi) {
//     alert(`Məğlub oldun yazx 💀 \nDüzgün rəqəm: ${randomEded} \nYazduğun Rəqəmlər: ${texminler.join("-")}`);
// }




// let a = 0;
// let b = 1;

// let res = prompt("Necenci Fibonacci ededi tapaq?: ")


// function fibo (input,a,b){
//     if(input>1){
//         input--
//         return fibo(input, b,a+b )
//     }
//     return a+b
// }

// console.log(fibo(res,a,b))

// function qiymetlendir(ad="Rafiq",girisBal=41,imtahanBal=50){
//     let answer = ""
//     if(ad == ""){
//         return "Ad yaz!"
//     }
//     if(isNaN(girisBal) || isNaN(imtahanBal) || girisBal=="" || imtahanBal==""){
//         return "IMTAHAN VE YA GIRIS BALI REQEM OLMALIDIR!"
//     }
//     if(girisBal>50 || imtahanBal>50){
//         return "Qaqaa 50+ nece almisan mene de de!!!"
//     }

//     if(girisBal+imtahanBal>90){
//         answer = "A Elaci"
//     }
//     else if(girisBal+imtahanBal>80){
//         answer = "B Zerbeci"
//     }
//     else if(girisBal+imtahanBal>70){
//         answer = "C Zerbeci"
//     }
//     else if(girisBal+imtahanBal>60){
//         answer = "D Adi"
//     }
//     else if(girisBal+imtahanBal>50){
//         answer = "E Adi"
//     }
//     else{
//         return `${ad}, sen Kesildin tebrikler`
//     }
//     return `${ad} adli şexsin aldigi qiymet: ${answer}`
// }

// // let ad,giris,imtahan = prompt("Adiniz") , prompt("Giris baliniz"), prompt("Imtahan baliniz")
// // Birbasa icine yazdim qaqa. 
// console.log(qiymetlendir())
// console.log(qiymetlendir(prompt("Adiniz") , +prompt("Giris baliniz"), +prompt("Imtahan baliniz")))


class Calculator{
    a=5
    b=5
    c
    Calculator(a,b,c){
        this.a = Number(a)
        this.b = Number(b)
        this.c = Number(c)
    }


    salam(){
        console.log("Salam")
    }

    topla(){
        
        if(isNaN(this.c)){
            return this.a+this.b
        }
        return this.a+this.b+this.c
    }
    vur(){
        
        if(isNaN(this.c)){
            return this.a*this.b
        }
        return this.a*this.b*this.c
    }
    bol(){
        
        if(isNaN(this.c)){
            return this.a/this.b
        }
        return this.a/this.b/this.c
    }
    quvveteYukselt(){
        
        if(isNaN(this.c)){
            return this.a**this.b
        }
        return this.a**this.b**this.c
    }
    
    

}

// calculator.topla(4,3,3)

// let res = prompt("Bosluq olmadan Emeliyyati daxil edin, Meselen: 5+4+3 /// 4*4+3 (Quvvete yukseltmek ucun ^ )")


// let arr = res.split("")

// let calculator =new Calculator(arr[0],arr[2],arr[4])
// let answer;

// function notPriority(emeliyyat, a,b,c){
//     let answer = 0
//     calculator = new Calculator(a,b,c)
//     // if(isNaN(c)){
//     //     calculator = new Calculator(a,b)
//     // }
//     if(emeliyyat=="+")
//     {
//         answer=calculator.topla()
//     }
//     if(emeliyyat=="*"){
//         answer=calculator.vur()
//     }
//     if(emeliyyat=="/"){
//         answer=calculator.bol()
//     }
//     if(emeliyyat=="^"){
//         answer=calculator.quvveteYukselt()
//     }
//     return answer
// }


// if(arr[1] == arr[3]){
//     answer = notPriority(arr[1],arr[0],arr[2],arr[4])
// }
// else{
//     if((arr[3]=="*" || arr[3]=="/" || arr[3]=="^")&& (arr[1]=="+" || arr[1]=="-")){
//         calculator = new Calculator(arr[2],arr[4])
//         if(arr[3]=="*"){
//             arr[2]=calculator.vur()
//         }
//         else if(arr[3]=="/"){
//             arr[2]=calculator.bol()
//         }
//         else{
//             arr[2]=calculator.quvveteYukselt()
//         }
        
//     }
// }


// console.log(answer)
// function calcFuel(dist, fuelpr, price){

//     let serfiyyat = fuelpr*dist/100
//     price = price*serfiyyat

//     console.log(`Yanacaq serfiyyati: ${serfiyyat}, Xercler: ${price}`)
// }


// let distance = +prompt("Mesafeni qeyd edin")
// let fuelPerkm = +prompt("100km ya serf olunan yanacagi daxil edin")
// let qiymet = +prompt("qiymeti daxil edin")

// calcFuel(distance,fuelPerkm,qiymet)

// class ProductData{
//     constructor(id,ad,qiymet, melumat, ulduz){
//         this.id = id
//         this.ad = ad
//         this.qiymet = qiymet
//         this.melumat = melumat
//         this.ulduz = ulduz
//     }
// }


// let a = []

// a.push(new ProductData(1,"Sukan", 568, "Oyun sukani oyunlar ucun",4))
// a.push(new ProductData(2,"Hava nemlendirici", 40, "hava nemlendiricisi evler ucun",5))
// a.push(new ProductData(3,"PaltaryuyanMasin", 719, "Paltar yuyur",4.3))
// a.push(new ProductData(4,"Printer", 141, "Portativ xioami printer",4.5))
// a.push(new ProductData(5,"Rooter", 30, "Simsiz wifi guclendiricisi",4))
// a.push(new ProductData(6,"MesafeOlcen", 36, "Mesafe olcen aparat xioami",5))
// a.push(new ProductData(7,"Atlama ipi", 50, "Agilli atlama ipi",5))



// console.log(a)


class Student{
    constructor(id,ad,soyad,age,city,bal)
    {
        this.id = id
        this.ad = ad
        this.soyad = soyad
        this.age = age
        this.city = city
        this.bal = bal
        
    }
}

let students = []

students.push(new Student(1,"Jafar","Tarverdiyev",25,"Baki",100))
students.push(new Student(2,"MirEziz", "Ekberov",30,"Celilabad", 78))
students.push(new Student(3, "Nurcahan", "Efendizade", 19,"Salyan", 95))
students.push(new Student(4,"Tutu", "Mehbaliyeva",22,"Lacin", 95))
students.push(new Student(5, "Rafiq", "Seferov",25,"Agdam", 90))
students.push(new Student(6, "Vusale", "Salmanova",23, "Sirvan", 95))
students.push(new Student(7, "Ramazan", "Huseynzade", 22, "Bilesuvar", undefined))
students.push(new Student(8,"Resul", "Ehmedov",22, "Samaxi", 100))
students.push(new Student(9,"Rais", "Fetullayev",18, "Sirvan", 100))
students.push(new Student(10,"Rehman", "Memmedov", 28, "Baki", 85))


let seher = prompt("Seher adi daxil edin: ")
let minimumYas = +prompt("Minimal yasi daxil edin: ")
let bal = +prompt("Minimal bali daxil edin: ")

let balaGore = students.filter((x)=> x.city==seher && x.bal>=bal &&
 x.yas>=minimumYas)

console.log(balaGore)

if(balaGore.length>1){

}


else if (Number.isInteger(balaGore.id)){
    console.log(balaGore.ad+ " " + balaGore.soyad + " ortalama: " + balaGore.bal)
}
else{
    console.log("Sertlere uygun telebe yoxdur") 
}


