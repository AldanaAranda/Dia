let error = document.querySelector(".error");
let contenedor = document.querySelector("#main");
let solcito = "SOLEADO";
let nubecita = "NUBLADO";
let lluvecita = "LLOVIENDO";


function Ingreso() {
    let ingreso = document.querySelector("#respuesta").value.toString();

    if (ingreso.toUpperCase() == solcito) {
        soleado();
    } else if (ingreso.toUpperCase() == nubecita) {
        nublado();
    } else if (ingreso.toUpperCase() == lluvecita) {
        lluvioso();
    } else {
        error.style.display = "block"
        error.innerHTML = "Por favor ingrese una de las opciones que estan dentro del parentesis";
    }
}

function soleado() {
    let sol = [
       "!El dia de hoy está" ,
       document.querySelector("#respuesta").value,
        "img/sol.png"
    ];
    
    contenedor.innerHTML =
    "<div id= 'caja'>" +
    "<img src=" + sol[2] + ">" +
    "<h3>" + sol[0] + "</h3>" +
    "<h3>" + sol[1] + "!" + "</h3>" +
    "<br>" +
    "</div>";
}


function nublado() {
    let nube = [
        "!El dia de hoy está" ,
        document.querySelector("#respuesta").value,
         "img/nublado.png"
     ];

    contenedor.innerHTML = 
    "<div id= 'caja'>" +
    "<img src=" + nube[2] + ">" +
    "<h3>" + nube[0] + "</h3>" +
    "<h3>" + nube[1] + "!" + "</h3>" +
    "<br>" +
    "</div>";
}


 function lluvioso() {
     let lluvia = [
       "!El día de hoy está",
       document.querySelector("#respuesta").value,
       "img/lluvioso.png"
     ];
     
    contenedor.innerHTML =
      "<div id='caja'>" +
      "<img src=" + lluvia[2] + ">" +
      "<h3>" + lluvia[0] + "</h3>" +
      "<h3>" + lluvia[1] + "!" + "</h3>" +
      "<br>" +
      "</div>";
  }
  
