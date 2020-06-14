(function(){
	var formulario = document.getElementsByName('registro')[0],
	elementos = formulario.elements;
	boton = document.getElementById('registrarme');

	var validarTodo = function(e){
		if(registro.nombresC.value == 0 && registro.contraseñaC.value == 0 && registro.correos.value == 0){
			alert("Debe completar los campos");
			e.preventDefault();
		}				
    };
    
	var validar = function(e) {
		validarTodo(e);
	};

	formulario.addEventListener("submit", validar);
	

}())