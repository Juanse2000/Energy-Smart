window.onload = function(){
    document.getElementById("boton-descargarU").onclick=eliminarRRealizadas;
}
/*  */
function eliminarRRealizadas(){

    Swal.fire({
    title: "¡Ha descargardo el archivo exitosamente!",
    icon: 'success',
    confirmButtonText: 'Si, eliminar',
    showConfirmButton: false,
});
}