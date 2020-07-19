
window.onload = function(){
    document.getElementById("boton-eliminar-usuario").onclick=eliminarUsuario;
}

function eliminarUsuario(){
    Swal.fire({
        title: "¿Seguro que quiere eliminar este usuario?",
        icon: 'warning',
        confirmButtonText: 'Si, eliminar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
    
        /* Opcions cerrar alerta */
        allowOutsideClick: true,
        allowEscapeKey: true
    }).then((result) => {
        if (result.value) {
            Swal.fire(
            'Eliminar',
            'Ha eliminado este usuario',
            'success'
        )
    }
    }); 
}
