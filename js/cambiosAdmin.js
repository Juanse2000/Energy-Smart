window.onload = function(){
    document.getElementById("guardar-cambios-perfilA").onclick=validarCel;    
}
function validarCel(event){
  event.preventDefault();
    var celular = document.getElementById("celular-admin").value;
    var nuevoNombre = document.getElementById("nombre-nuevo-admin").value;
    var contraseña = document.getElementById("nuevo-contraseña").value;

    expresion =  /\w/;
    telefono = /\d/;

    if(celular === "" || nuevoNombre === ""){
		alert("Completar los campos");		
		return false;
    }
    else if(!(expresion.test(nuevoNombre))){
		alert("Nombre no valido")
		return false;
    }
    else if(nuevoNombre.length > 30 || nuevoNombre.length < 6){
        alert("Nombre debe tener: minimo 6 caracteres | maximo 30 caracteres");
		return false;
    }
    else if(!(telefono.test(celular))){
		alert("Numero de celular no valido")
		return false;
    }
    else if(celular.length > 10 || celular.length < 10){
        alert("El campo TELEFONO es de 10 caracteres");
		return false;
    }
    else if(!(expresion.test(contraseña))){
      alert("Contraseña no valida")
      return false;
      }
      else if(contraseña.length > 25 || contraseña.length < 6){
          alert("La contraseña debe tener entre 6 y 25 caracteres");
      return false;
      }
    Swal.fire({
      title: "¿Seguro que quiere guardar los cambios?",
      icon: 'warning',
      confirmButtonText: 'Si, guardar',
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
          'Guardado',
          'La nueva informacion ha sido guardada',
          'success'
      )
  }
  });
    
}