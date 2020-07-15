window.onload = function(){
    document.getElementById("guardar-cambios-perfilC").onclick=validarCambiosCliente;    
}
function validarCambiosCliente(){
    var nombreU = document.getElementById("nombre-usuario-cliente").value;
    var nombreC = document.getElementById("nombre-completo-cliente").value;
    var edad = document.getElementById("edad-cliente").value;
    var celular = document.getElementById("celular-cliente").value;
    var grupo = document.getElementById("grupo-cliente").value;
    var contraseña = document.getElementById("contraseña-cliente").value;

    expresion =  /\w/;
    telefono = /\d/;


    if(!(expresion.test(nombreU))){
		alert("Nombre de usuario no valido")
		return false;
    }
    else if(nombreU.length > 30 || nombreU.length < 6){
        alert("Nombre de usuario debe tener: minimo 6 caracteres | maximo 30 caracteres");
		return false;
    }
    else if(!(telefono.test(celular))){
		alert("Numero de celular no valido")
		return false;
    }
    else if(celular.length > 10 || celular.length < 10){
        alert("El campo Celular debe tener 10 caracteres");
		return false;
    }
    else if(!(telefono.test(edad))){
		alert("Edad no valida")
		return false;
    }
    else if(edad.length > 3 || edad.length < 1){
        alert("Edad no valida");
		return false;
    }
    else if(!(expresion.test(nombreC))){
		alert("Nombre completo no valido")
		return false;
    }
    else if(nombreC.length > 30 || nombreC.length < 6){
        alert("El nombre debe tener entre 6 y 30 caracteres");
		return false;
    }
    else if(!(expresion.test(grupo))){
		alert("Nombre de grupo no valido")
		return false;
    }
    else if(grupo.length > 20 || grupo.length < 2){
        alert("Grupo debe tener entre 6 y 20 caracteres");
		return false;
    }
    else if(contraseña.length > 30 || contraseña.length < 6){
        alert("La contraseña debe tener entre 6 y 30 caracteres");
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