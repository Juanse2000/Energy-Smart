window.onload = function(){
    document.getElementById("añadir-nuevo-pc").onclick=añadirEquipo;    
}
function añadirEquipo(event){
  event.preventDefault();
    var procesador = document.getElementById("nuevo-procesador").value;
    var ram = document.getElementById("nuevo-ram").value;
    var tarjeta = document.getElementById("nuevo-tarjeta-grafica").value;
    var almacenamiento = document.getElementById("nuevo-almacenamiento").value;
    var pantalla = document.getElementById("nuevo-pantalla").value;
    var board = document.getElementById("nuevo-board").value;
    var fuente = document.getElementById("nuevo-fuente").value;
    var chasis = document.getElementById("nuevo-chasis").value;

    expresion =  /\w/;

    if(procesador === "" || ram === "" || tarjeta === "" || almacenamiento === "" || pantalla === "" || board === "" || fuente === "" || chasis === "" ){
		alert("Completar los campos");		
		return false;
    }
    else if(!(expresion.test(procesador))){
		alert("Nombre de procesador no valido");
		return false;
    }
    else if(procesador.length > 20 || procesador.length < 4){
        alert("Nombre de procesador debe tener: minimo 4 caracteres | maximo 20 caracteres");
		return false;
    } 
    else if(!(expresion.test(ram))){
		alert("Nombre de ram no valido");
		return false;
    }
    else if(ram.length > 20 || ram.length < 4){
        alert("Nombre de ram debe tener: minimo 4 caracteres | maximo 20 caracteres");
		return false;
    }
    else if(!(expresion.test(tarjeta))){
		alert("Nombre tarjeta grafica no valido");
		return false;
    }
    else if(tarjeta.length > 20 || tarjeta.length < 4){
        alert("Nombre de tarjeta grafica debe tener: minimo 4 caracteres | maximo 20 caracteres");
		return false;
    }
    else if(!(expresion.test(almacenamiento))){
		alert("Nombre de almacenamiento no valido");
		return false;
    }
    else if(almacenamiento.length > 20 || almacenamiento.length < 4){
        alert("Nombre de almacenamiento debe tener: minimo 4 caracteres | maximo 20 caracteres");
		return false;
    }
    else if(!(expresion.test(pantalla))){
		alert("Nombre de pantalla no valido");
		return false;
    }
    else if(pantalla.length > 20 || pantalla.length < 4){
        alert("Nombre de pantalla debe tener: minimo 4 caracteres | maximo 20 caracteres");
		return false;
    }
    else if(!(expresion.test(board))){
		alert("Nombre board no valido");
		return false;
    }
    else if(board.length > 20 || board.length < 4){
        alert("Nombre board debe tener: minimo 4 caracteres | maximo 20 caracteres");
		return false;
    }
    else if(!(expresion.test(fuente))){
		alert("Nombre fuente no valido");
		return false;
    }
    else if(fuente.length > 20 || fuente.length < 4){
        alert("Nombre fuente debe tener: minimo 4 caracteres | maximo 20 caracteres");
		return false;
    }
    else if(!(expresion.test(chasis))){
		alert("Nombre chasis no valido");
		return false;
    }
    else if(chasis.length > 20 || chasis.length < 4){
        alert("Nombre chasis debe tener: minimo 4 caracteres | maximo 20 caracteres");
		return false;
    }
    Swal.fire({
      title: "¿Seguro que quiere modificar las partes del equipo?",
      icon: 'warning',
      confirmButtonText: 'Si, modificar',
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
          'Modificación',
          'Se han modificado las partes del equipo',
          'success'
      )
  }
  });  
}