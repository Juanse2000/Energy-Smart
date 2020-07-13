window.onload = function(){
    document.getElementById("guardar-cambios-perfilA").onclick=validarCel;    
}
function validarCel(){
    var celular = document.getElementById("celular-admin").value;
    var nuevoNombre = document.getElementById("nombre-nuevo-admin").value;

    expresion =  /\w/;
    telefono = /\d/;

    if(celular === "" || nuevoNombre === ""){
		alert("Completar los campos");		
		return false;
    }
    else if(!(expresion.test(nuevoNombre))){
		alert("Nombre no valido")
		return false;
    }
    else if(nuevoNombre.length > 30 || nuevoNombre.length < 6){
        alert("Nombre debe tener: minimo 6 caracteres | maximo 30 caracteres");
		return false;
    }
    else if(!(telefono.test(celular))){
		alert("Numero de celular no valido")
		return false;
    }
    else if(celular.length > 10 || celular.length < 10){
        alert("El campo TELEFONO es de 10 caracteres");
		return false;
    }
    
    var respuesta = confirm("¿Desea guardar los cambios?")
    if(respuesta == true){
        return true;
    }
    else{
        return false;
    }
}