window.onload = function(){
    document.getElementById("enviar-mensaje").onclick=enviarMensaje;    
}
function enviarMensaje(event){
    event.preventDefault();
    var nombre = document.getElementById("nombre-mensaje").value;
    var celular = document.getElementById("celular-mensaje").value;
    var correo = document.getElementById("correo-mensaje").value;
    var mensaje = document.getElementById("area-mensaje").value;

    expresion =  /\w/;
    telefono = /\d/;
    expresionCorreo = /\w+@\w+\.+[a-z]/;


    if(nombre === "" || celular === "" || correo === "" || mensaje === ""){
        alert("Completar los campos")
        return false;
    }
    else if(!(expresion.test(nombre))){
		alert("Nombre de usuario no valido")
		return false;
    }
    else if(nombre.length > 30 || nombre.length < 6){
        alert("Nombre de usuario debe tener: minimo 6 caracteres | maximo 30 caracteres");
		return false;
    }
    else if(!(telefono.test(celular))){
		alert("Numero de celular no valido")
		return false;
    }
    else if(celular.length > 10 || celular.length < 10){
        alert("El campo Celular debe tener 10 caracteres");
		return false;
    }
    else if(!(expresionCorreo.test(correo))){
		alert("El correo no es valido");
		return false;
	}
    else if(correo.length > 40  || correo.length < 8){
        alert("Correo Electronico debe tener entre 8 y 40 caracteres.");
		return false;
    }
    
    Swal.fire({
        title: "¡Mensaje Enviado!",
        icon: 'success',
        showConfirmButton: false,
        cancelButtonText: 'Cancelar',
    });
}