
var formulario = document.getElementsByName("formularioLogin")[0],
	elementos = formulario.elements;

function validarEspacios(e){
    var correo = document.getElementById("correo-iniciar-sesion").value;
    var contraseña = document.getElementById("contraseña-iniciar-sesion").value;
    var rol = document.getElementById("option-rol").value;

	expresion =  /\w/;
	expresionCorreo = /\w+@\w+\.+[a-z]/;

    if(correo === "" || contraseña === "" || rol === ""){
		alert("Completar los campos");		
		return false;
    }
    else if(!(expresionCorreo.test(correo))){
		alert("Correo no valido")
		return false;
    }
    else if(correo.length > 30 || correo.length < 6){
        alert("Correo debe tener: minimo 6 caracteres | maximo 30 caracteres");
		return false;
    }
    else if(!(expresion.test(contraseña))){
		alert("Contraseña no valida")
		return false;
    }
    else if(contraseña.length > 20 || contraseña.length < 5){
        alert("Contraseña debe tener: minimo 5 caracteres | maximo 30 caracteres");
		return false;
	}
	e.preventDefault();
}

var validarUsuario = function(rol, contraseña, correo){
	var rol = document.getElementById("option-rol").value;
	var contraseña = document.getElementById("contraseña-iniciar-sesion").value;
	var correo = document.getElementById("correo-iniciar-sesion").value;
		
	if(rol == "Administrador" && contraseña == "123456" && correo == "admin@gmail.com"){
		alert("Eligio admin")
		window.location.href = 'InterfazAdmin.html'
	}
	else if(rol == "Cliente" && contraseña == "987654" && correo == "cliente1@gmail.com"){
		alert("Eligio Cliente")
		window.location.href = 'InterfazCliente.html'
	} 
	else{
		alert("Acceso Denegado");
	}	
}


function iniciarSesion(e){
	validarEspacios(e);
	validarUsuario();	
	e.preventDefault();
}

formulario.addEventListener("submit", iniciarSesion);


