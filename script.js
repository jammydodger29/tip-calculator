const button = document.querySelector("#tip");
const output = document.querySelector(".output");
const cost = document.querySelector("#money");

tip.addEventListener("click",function(){
    let tips = (cost.value*0.15).toFixed(2);
    let temp = `You should tip £${tips} on a £${cost.value} meal`;
    output.innerHTML = temp;
})