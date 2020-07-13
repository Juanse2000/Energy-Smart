window.onload = function(){
    document.getElementById("boton-eliminar").onclick=eliminarRRealizadas;
}
function eliminarRRealizadas(){
    var respuesta = confirm("¿Esta seguro que desea eliminar esta reserva?")
    if(respuesta == true){
        return true;
    }
    else{
        return false;
    }
}