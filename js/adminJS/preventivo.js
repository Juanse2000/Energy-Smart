window.onload = function(){
    document.getElementById("añadir-preventivo").onclick=añadirEquipo;    
}
function añadirEquipo(event){
  event.preventDefault();
    var codigoPC = document.getElementById("codigo-equipo").value;
    var fechaIngreso = document.getElementById("fecha-preventivo").value;
    var tipo = document.getElementById("tipo-preventivo").value;

    expresion =  /\w/;

    if(codigoPC === "" || fechaIngreso === "" || tipo === "" ){
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
    Swal.fire({
      title: "¿Seguro que quiere añadir el equipo a mantenimiento preventivo?",
      icon: 'warning',
      confirmButtonText: 'Si, añadir',
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
          'Añadir',
          'Ha añadido el equipo a mantenimiento preventivo',
          'success'
      )
  }
  });  

}