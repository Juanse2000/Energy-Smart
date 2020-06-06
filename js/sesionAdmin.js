
(function(){
	var formulario = document.getElementsByName('formulario')[0],
	elementos = formulario.elements;
	boton = document.getElementById('botones');

	var validarTodo = function(e){
		if(formulario.nombres.value == 0 && formulario.contraseña.value == 0){
			alert("Debe completar los campos");
			e.preventDefault();
		}				
	};
	var validarUsuario = function(e) {
		if((formulario.contraseña.value != "123456" && formulario.nombres.value != "admin@gmail.com")
			|| (formulario.contraseña.value != "123456" || formulario.nombres.value != "admin@gmail.com")){
			alert("Acceso Denegado");
			e.preventDefault();
		}
	};
	var validar = function(e) {
		validarTodo(e);
		validarUsuario(e);		
	};

	formulario.addEventListener("submit", validar);
	

}())