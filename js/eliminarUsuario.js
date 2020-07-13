
window.onload = function(){
    document.getElementById("boton-eliminar-usuario").onclick=eliminarUsuario;
}

function eliminarUsuario(){
    var respuesta = confirm("¿Esta seguro que desea eliminar este usuario?")
    if(respuesta == true){
        return true;
    }
    else{
        return false;
    }
}
