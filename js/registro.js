function validarformulario(){
	var nombre, contraseña, email;
	nombre = document.getElementById("nombreR").value;
	contraseña = document.getElementById("contraseñaR").value;
	email = document.getElementById("emailR").value;

	if(nombre === "" || contraseña === "" || email === ""){
		alert("Completar los campos");		
		return false;
	}
	else if(nombre.length>5){
		alert("Nombre demasiado largo");
		return false;
	}
}