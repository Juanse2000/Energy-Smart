function validarLogin(){
	var correo, contraseña;
	correo = document.getElementById("EmailL").value;
	contraseña = document.getElementById("ContraseñaL").value;

	expresionCorreo = /\w+@\w+\.+[a-z]/;
	
	if(correo == "" || contraseña == ""){
		alert("Completar los campos");
		return false;
	}
	else if(!(expresionCorreo.test(correo))){
		alert("El correo no es valido");
		return false;
	}

	else if((contraseña != "1234567" && correo != "admin@gmail.com")
		|| (contraseña != "1234567" || correo != "admin@gmail.com")) {
			alert("Acceso Denegado");
			window.location.href = "InterfazAdmin.html"
			return false;			
	}
	
}
function iniciarSesion(){
	var correo;
	correo = document.getElementById("EmailL").value;
	switch(correo){
		case "admin@gmail.com":
		window.location.href = "InterfazAdmin.html";
		break;
		case "cliente@gmail.com":
		window.location.href = "InterfazCliente.html";
		break;
	}
	return correo;
};