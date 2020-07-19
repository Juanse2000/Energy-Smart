window.onload = function(){
    document.getElementById("boton-graficasR").onclick=descargarReservas;
}
function descargarReservas(){
    Swal.fire({
        title: "Descarga Realizada",
        icon: 'success',
        showConfirmButton: false,
    });
}