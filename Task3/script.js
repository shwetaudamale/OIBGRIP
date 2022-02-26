let celsius = document.getElementById("celsius");
let fahreheit = document.getElementById("fahrenheit");

function celToFar (){
    let output = (parseFloat(celsius.value) *9/5) + 32;
    fahreheit.value = parseFloat(output.toFixed(2));
    
}

function farToCel(){
    let output = (parseFloat(fahreheit.value) -32) *5/9;
    celsius.value = parseFloat( output.toFixed(2));
    console.log(output);
}