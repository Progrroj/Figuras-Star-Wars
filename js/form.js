var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var contraseña = document.getElementById("contraseña");
var dni = document.getElementById("dni");
var calle = document.getElementById("calle");
var ciudad = document.getElementById("ciudad");
var cp = document.getElementById("cp");
var telefono = document.getElementById("telefono");
var mail = document.getElementById("mail");
var error = document.getElementById("error");

function enviarFormulario(){

    var mensajesError = [];

    if (nombre.value === null || nombre.value === ""){
        mensajesError.push ("<span>ALERT</span> olvidaste poner tu Nombre");
    }
    if (apellido.value === null || apellido.value === ""){
        mensajesError.push ("<span>ALERT</span> olvidaste poner tu Apellido");
    }
    if (contraseña.value === null || contraseña.value === ""){
        mensajesError.push ("<span>ALERT</span> olvidaste poner tu Contraseña");
    }
    if (dni.value === null || dni.value === ""){
        mensajesError.push ("<span>ALERT</span> olvidaste poner tu DNI");
    }
    if (calle.value === null || calle.value === ""){
        mensajesError.push ("<span>ALERT</span> olvidaste poner tu Calle");
    }
    if (ciudad.value === null || ciudad.value === ""){
        mensajesError.push ("<span>ALERT</span> olvidaste poner tu Ciudad");
    }
    if (cp.value === null || cp.value === ""){
        mensajesError.push ("<span>ALERT</span> olvidaste poner tu C.P.");
    }
    if (telefono.value === null || telefono.value === ""){
        mensajesError.push ("<span>ALERT</span> olvidaste poner tu Celular");
    }
    if (mail.value === null || mail.value === ""){
        mensajesError.push ("<span>ALERT</span> olvidaste poner tu Email");
    }

    error.innerHTML =  mensajesError.join("<br>");
    return false;
}

