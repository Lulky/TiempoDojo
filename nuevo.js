
function clicky(elementoA) {
     var ciudad = elementoA.innerText;
     alert("Loading weather report..." + ciudad)
    }
 // Esto si el onclick está en el elemento Li
// function clicky(elementoLi) {
//     var a = elementoLi.querySelector("a");
//     var ciudad = a.innerText;
//     alert("Loading weather report..." + ciudad)


function aceptar() {
    var cookie = document.querySelector(".cookie");
    cookie.remove();
}

function cambiaTemperatura(elementoSelect) {
    var f0c = elementoSelect.value;
    console.log(f0c);
    for(var i=1; i<=8; i++){
        var temperatura = document.querySelector("#temperatura"+i);
        console.log(temperatura)
        var temperaturaValue = temperatura.innerText;
        console.log(temperaturaValue)
        temperaturaValue = parseInt(temperaturaValue);
        console.log(temperaturaValue);
        var newTemp = 0;
        if(f0c === "C"){
            console.log("F->C");
            // F->C
            newTemp = Math.round((temperaturaValue - 32) * 5 / 9);
        } else{
            console.log("C->F");
            // C->F
            newTemp = Math.round(temperaturaValue * 9 / 5 + 32);
        }
        temperatura.innerText = newTemp + "°";
    }
}
