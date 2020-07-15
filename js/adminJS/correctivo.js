window.onload = function(){
    document.getElementById("añadir-cor").onclick=añadirEquipoC;    
}
function añadirEquipoC(){
    var codigoPC = document.getElementById("codigo-equipo-cor").value;
    var fechaIngreso = document.getElementById("fecha-cor").value;
    var tipo = document.getElementById("tipo-cor").value;
    var observaciones = document.getElementById("observaciones").value;

    expresion =  /\w/;

    if(codigoPC === "" || fechaIngreso === "" || tipo === "" || observaciones === "" ){
		alert("Completar los campos");		
		return false;
    }
    else if(!(expresion.test(codigoPC))){
		alert("Nombre de procesador no valido");
		return false;
    }
    else if(codigoPC.length > 20 || codigoPC.length < 4){
        alert("CodigoPC debe tener: minimo 4 caracteres | maximo 20 caracteres");
		return false;
    } 
    else if(!(expresion.test(tipo))){
		alert("Nombre de procesador no valido");
		return false;
    }
    else if(tipo.length > 20 || tipo.length < 4){
        alert("CodigoPC debe tener: minimo 4 caracteres | maximo 20 caracteres");
		return false;
    } 
    var respuestaPC = confirm("¿Desea guardar los cambios?")
    if(respuestaPC == true){
        return true;
    }
    else{
        return false;
    }   

}