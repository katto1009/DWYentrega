//Validar formulario
$(function() {
    $("#mi_formulario").validate( {
        rules:
        {
            rut:
            {
                required: true,                
            },
            nombre:
            {
                required:true,
                minlength:2,
                maxlength:30
            },
            email:
            {
                required:true,
                email:true,
                minlength:6,
                maxlength:100
            },
            password:
            {
                required:true,
                minlength:6,
                maxlength:15
            },
            password_confirm:
            {
                required:true,
                equalTo:"#password",
            },
            comentarios:
            {
                required:true,
                maxlength:100
            },
            acepto_terminos:
            {
                required:true,
            }
        },
        messages:
        {
            rut:
            {
                required:"Debes ingresar tu rut."
            },
            nombre:
            {
                required:"Debe ingresar tu nombre y apellido.",
                minlength:"Debes ingresar al menos 2 caracteres.",
                maxlength:"Puedes ingresar un máximo de 30 caracteres."
            },
            email:
            {
                required:"Debes ingresar tu correo electrónico",
                email:"El formato ingresado no corresponde a una dirección de correo.",
                minlength:"Deber ingresar un correo válido",
                maxlength:"Tu correo excede el largo máximo permitido",
            },
            password:
            {
                required:"Debes ingresar una contraseña.",
                minlength:"Tu contraseña debe contener entre 6 y 15 caracteres.",
                maxlength:"Tu contraseña debe contener entre 6 y 15 caracteres."
            },
            password_confirm:
            {
                required:"Debes ingresar nuevamente tu contraseña",
                equalTo:"La contraseña ingresada no es igual a la anterior."
            },
            comentarios:
            {
                required:"Debes ingresar un comentario.",
                maxlength:"Puedes ingresar un máximo de 100 caracteres."
            },
            acepto_terminos:
            {
                required:"Debes aceptar los términos del contrato",
            }
        }
    });
});
//Limitar Caracteres
function limitarCaracteresComentarios (e,contenido, maximoCarateres) {
    // obtenemos la tecla pulsada
    var unicode=e.keyCode? e.keyCode : e.charCode;

    // Permitimos las siguientes teclas:
    // 8 backspace
    // 46 suprimir
    // 13 enter
    // 9 tabulador
    // 37 izquierda
    // 39 derecha
    // 38 subir
    // 40 bajar
    if(unicode==8 || unicode==46 || unicode==13 || unicode==9 || unicode==37 || unicode==39 || unicode==38 || unicode==40)
    {
        return true;
    }    

    // Si ha superado el limite de caracteres devolvemos false
    if(contenido.length >= maximoCarateres)
    {
        return false;
    }
    else
    {
        return true;
    }
}
//Actualizar Caracteres
function actualizarCantidadCaracteres(maximoCarateres) {
    var elemento = document.getElementById("comentarios");
    var informacion = document.getElementById("info");

    if(elemento.value.length >= maximoCarateres)
    {
        informacion.innerHTML = "Máximo " + maximoCarateres + " caracteres";
    }
    else
    {
        informacion.innerHTML = "Puedes escribir " + (maximoCarateres - elemento.value.length) + " caracteres adicionales.";
    }
}
//Consumir API mindicador.cl
$(document).ready(function() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open ('GET','https://mindicador.cl/api',true);
    xmlhttp.send();

    var uf = 0;
    var dolar = 0;
    var euro = 0;

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 )
        {
            var data = JSON.parse(this.responseText);
            uf = data.uf.valor;
            dolar = data.dolar.valor;
            euro = data.euro.valor;
        }
        document.getElementById("valorUF").innerHTML = "Valor actual UF: " + new Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(uf);
        document.getElementById("valorDolar").innerHTML = "Valor actual Dólar: " + new Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(dolar);
        document.getElementById("valorEuro").innerHTML = "Valor actual Euro: " + new Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(euro);
    }   

});
//Regex a formulario
$(document).on('keypress', '#num1', function (event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$(document).on('keypress', '#rut', function (event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$(document).on('keypress', '#nombre', function (event) {
    var regex = new RegExp("^[a-zA-Z ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$(document).on('keypress', '#apellidos', function (event) {
    var regex = new RegExp("^[a-zA-Z ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$(document).on('keypress', '#Fono', function (event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Convertir CLP a USD con API
function convertir() {
    var valorA = parseInt(document.getElementById("num1").value);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open ('GET','https://mindicador.cl/api',true);
    xmlhttp.send();
    var dolar = 0;
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 )
        {
            var data = JSON.parse(this.responseText);
            dolar = data.dolar.valor;
        }
        document.getElementById("resultado").innerHTML = "USD: $" + (valorA / parseInt(new Intl.NumberFormat('es-CL',{maximumFractionDigits:2}).format(dolar))).toFixed(2);
    } 
}