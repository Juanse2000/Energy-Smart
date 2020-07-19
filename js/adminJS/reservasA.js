window.onload = function(){
    document.getElementById("boton-eliminar").onclick=eliminarRRealizadas;
}
/*  */
function eliminarRRealizadas(){

    Swal.fire({
    title: "¿Seguro que quiere eliminar esta reserva?",
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
        'La Reserva ha sido eliminada',
        'success'
    )
}
});
}