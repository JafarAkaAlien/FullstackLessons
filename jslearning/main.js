// Valeh muelllim salam


let prime = 129 

let k = 2;
let bool = false;
while(k >= Math.sqrt(prime) ){
    if(prime%k ==0){
        bool=false;
        console.log("Regem sade deyil! boleni var, " + k)
        break;
    }
    k++;
}
if(bool){
    console.log(prime + " reqem sadedir Vusal stili")
}

/////////////////////////////////////////////////////

let input = prompt("Aldigin qiymetini daxil et");

if(input > 90){
    console.log("elaci");
    
}

else if(input > 70){
    console.log("zerbeci");
    
}

else if(input > 50){
    console.log("kafir");
    
}
else{
    console.log("kesildin");
    
}

////////////////////////////////////////



let temp = prompt("tempraturu daxil edin");

if(temp > 35){
    console.log("cox isti");
    
}

else if(temp > 20){
    console.log("isti");
    
}

else if(temp > 0){
    console.log("soyuq");
    
}
else{
    console.log("donur");
    
}