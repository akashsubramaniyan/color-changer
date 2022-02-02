const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let btn=document.getElementById("inner-text");
const  button=document.getElementById("button-btn");


button.addEventListener("click",function(){
    let hexColor="#";
    for(let i=0;i<6;i++){
       
        hexColor +=hex[getNumber()];
    
}
btn.textContent = hexColor;
document.body.style.backgroundColor = hexColor;

});


 function getNumber(){
     return Math.floor(Math.random()*hex.length);

}

