let error = document.querySelector(".error");
let contenedor = document.querySelector("#main");
let solcito = "SOLEADO";
let nubecita = "NUBLADO";
let lluvecita = "LLOVIENDO";
const input = document.querySelector("#respuesta");
const boton = document.querySelector("#boton");

input.addEventListener('keypress', function(e) {
  // verificar si la tecla presionada es la tecla Enter
  const key = e.which || e.keyCode;
  if (key === 13) {
    // cancelar el comportamiento predeterminado del formulario
    e.preventDefault();
    // hacer clic en el botón submit
    boton.click();
  }
});


function Ingreso() {
    let ingreso = document.querySelector("#respuesta").value;

    if (typeof ingreso === "string" && ingreso.trim().toUpperCase() === solcito) {
        soleado();
    } else if (typeof ingreso === "string" && ingreso.trim().toUpperCase() === nubecita) {
        nublado();
    } else if (typeof ingreso === "string" && ingreso.trim().toUpperCase() === lluvecita) {
        lluvioso();
    } else {
        error.style.display = "block";
        error.innerHTML = "Por favor ingrese una de las opciones que están dentro del paréntesis";
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
  
