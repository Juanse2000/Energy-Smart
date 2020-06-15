function validarformulario(){
	var nombre, contraseña, email;
	nombre = document.getElementById("nombreR").value;
	contraseña = document.getElementById("contraseñaR").value;
	email = document.getElementById("emailR").value;

	expresion = /\w/;
	expresionCorreo = /\w+@\w+\.+[a-z]/;

	if(nombre === "" || contraseña === "" || email === ""){
		alert("Completar los campos");		
		return false;
	}
	else if(!(expresion.test(nombre))){
		alert("Nombre no valido")
		return false;
	}
	else if(nombre.length>20 || nombre.length<6){
		alert("Nombre debe tener: minimo 6 caracteres | maximo 20 caracteres");
		return false;
	}
	else if(!(expresion.test(contraseña))){
		alert("Contraseña no valida");
		return false;
	}
	else if(contraseña.length>20 || contraseña.length<6){
		alert("Contraseña debe tener: minimo 6 caracteres | maximo 20 caracteres");
		return false;
	}
	else if(!(expresionCorreo.test(email))){
		alert("El correo no es valido");
		return false;
	}
}