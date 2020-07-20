window.onload = function(){
    document.getElementById("registrarse-iniciar").onclick=registrarme;    
}

function validarEspacios(e){
	var nombre = document.getElementById("nombre-iniciar-sesion").value;
    var correo = document.getElementById("correo-iniciar-sesion").value;
    var contraseña = document.getElementById("contraseña-iniciar-sesion").value;
    var rol = document.getElementById("option-rol").value;

	expresion =  /\w/;
	expresionCorreo = /\w+@\w+\.+[a-z]/;

    if(nombre === "" || correo === "" || contraseña === "" || rol === ""){
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
	else if(!(expresion.test(nombre))){
		alert("Nombre no valida")
		return false;
    }
    else if(nombre.length > 20 || nombre.length < 5){
        alert("Nombre debe tener: minimo 5 caracteres | maximo 30 caracteres");
		return false;
	}
	window.location.href='sesion.html'
	e.preventDefault();
}

function registrarme(e){
	validarEspacios(e);	
	e.preventDefault();
}
