function validarRecu(){
    var correo, contraseña1, contraseña2;
    correo = document.getElementById("EmailR").value;
    contraseña1 = document.getElementById("ContraseñaR").value;
    contraseña2 = document.getElementById("ContraseñaR2").value;

    expresion = /\w/;
    expresionCorreo = /\w+@\w+\.+[a-z]/;

    if(correo == "" || contraseña1 == "" || contraseña2 == ""){
        alert("Completar los campos");
        return false;
    }

    else if(!(expresionCorreo.test(correo))){
		alert("El correo no es valido");
		return false;
    }
    else if(!(expresion.test(contraseña1) || expresion.test(contraseña2))){
        alert("Contraseña no valida");
        return false;
    }
    else if((contraseña1.length>20 || contraseña1.length<6) || (contraseña2.length>20 || contraseña2.length<6)){
		alert("Contraseña debe tener: minimo 6 caracteres | maximo 20 caracteres");
		return false;
	}
    else if(contraseña2 != contraseña1){
        alert("Las contraseñas no coinciden");
        return false;
    }
}