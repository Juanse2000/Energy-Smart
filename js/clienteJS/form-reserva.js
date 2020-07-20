
var formulario = document.getElementsByName("formularioLogin")[0],
	elementos = formulario.elements;

function validarEspacios(e){
    var codigoCliente = document.getElementById("identificacion-cliente").value;
    var codigoEquipo = document.getElementById("option-equipo").value;
    var dia = document.getElementById("fecha-registro-reserva").value;
    var hora = document.getElementById("option-hora").value;

	cliente =  /\d/;
	expresionCorreo = /\w+@\w+\.+[a-z]/;

    if(codigoCliente === "" || codigoEquipo === "" || dia === "" || hora === ""){
		alert("Completar los campos");		
		return false;
    }
    else if(!(cliente.test(codigoCliente))){
		alert("Codigo incorrecto")
		return false;
    }
	e.preventDefault();
}

var validarUsuario = function(e){
	var codigoCliente = document.getElementById("identificacion-cliente").value;
    var codigoEquipo = document.getElementById("option-equipo").value;
    var dia = document.getElementById("fecha-registro-reserva").value;
    var hora = document.getElementById("option-hora").value;
		
	if(codigoCliente == "1000588779" &&  dia == "2020-07-22"){
        if(codigoEquipo == "1" || codigoEquipo == "3" || codigoEquipo == "4"){
            if(hora == "10:00" || hora == "11:00" || hora == "15:00" || hora == "17:00"){
                Swal.fire({
                    title: "¿Seguro que quiere Reservar?",
                    icon: 'warning',
                    confirmButtonText: 'Si, Reservar',
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
                        'Reserva Hecha',
                        '¡Ha hecho una nueva reservacion en Energy eSports Center!',
                        'success'
                    )
                }
                });
            }
            else {
                Swal.fire({
                    title: "No Puede Reservar",
                    text: "Este horario ya esta ocupado",
                    icon: 'error',
                    showConfirmButton: false,
                });	
            }
        }
        else if(codigoEquipo == "2" || codigoEquipo == "4" || codigoEquipo == "5"){
            if(hora == "13:00" || hora == "14:00" || hora == "18:00"){
                Swal.fire({
                    title: "¿Seguro que quiere Reservar?",
                    icon: 'warning',
                    confirmButtonText: 'Si, Reservar',
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
                        'Reserva Hecha',
                        '¡Ha hecho una nueva reservacion en Energy eSports Center!',
                        'success'
                    )
                }
                });
            }
            else {
                Swal.fire({
                    title: "No Puede Reservar",
                    text: "Este horario ya esta ocupado",
                    icon: 'error',
                    showConfirmButton: false,
                });	
            }
        }		
	}
	else if(codigoCliente == "1000588779" &&  dia == "2020-07-23"){
        if(codigoEquipo == "2" || codigoEquipo == "4" || codigoEquipo == "5"){
            if(hora == "10:00" || hora == "11:00" || hora == "15:00" || hora == "17:00"){
                Swal.fire({
                    title: "¿Seguro que quiere Reservar?",
                    icon: 'warning',
                    confirmButtonText: 'Si, Reservar',
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
                        'Reserva Hecha',
                        '¡Ha hecho una nueva reservacion en Energy eSports Center!',
                        'success'
                    )
                }
                });
            }
            else {
                Swal.fire({
                    title: "No Puede Reservar",
                    text: "Este horario ya esta ocupado",
                    icon: 'error',
                    showConfirmButton: false,
                });	
            }
        }
        else if(codigoEquipo == "1" || codigoEquipo == "3" || codigoEquipo == "6"){
            if(hora == "13:00" || hora == "14:00" || hora == "18:00"){
                Swal.fire({
                    title: "¿Seguro que quiere Reservar?",
                    icon: 'warning',
                    confirmButtonText: 'Si, Reservar',
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
                        'Reserva Hecha',
                        '¡Ha hecho una nueva reservacion en Energy eSports Center!',
                        'success'
                    )
                }
                });
            }
            else {
                Swal.fire({
                    title: "No Puede Reservar",
                    text: "Este horario ya esta ocupado",
                    icon: 'error',
                    showConfirmButton: false,
                });	
            }
        }		
    }
    else if(codigoCliente != "1000588779"){
        Swal.fire({
            title: "No Puede Reservar",
            text: "Este codigo de usuario no existe",
            icon: 'error',
            showConfirmButton: false,
        });	
    }
    else{
		Swal.fire({
            title: "No Puede Reservar",
            text: "No se puede hacer una reservacion en esta Fecha, Hora y con este Equipo porque ya esta reservado",
            icon: 'error',
            showConfirmButton: false,
        });	
    }
    e.preventDefault();
}


function registro(e){
	validarEspacios(e);
	validarUsuario(e);	
	e.preventDefault();
}
formulario.addEventListener("submit", registro);
