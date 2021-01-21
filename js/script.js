// validar campos
function validar(){
    var nombre, apellidos, correo, usuario, Contraseña, telefono, expresion;
    ;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    Contraseña = document.getElementById("Contraseña").value;
    telefono = document.getElementById("telefono").value;
//    variable para determinar los caracteres especiales en correp

    expresion = /\w+@\w+\.+[a-z]/;
  

//  datos almacenados en consola
    console.log(nombre);
    console.log(apellidos);
    console.log(correo);
    console.log(usuario);
    console.log(Contraseña)
    console.log(telefono);
// para el maximo de caracteres

if (nombre.length>30){
    alert("el campo nombre no puede exceder de 30 caracteres")
    return false;
}

else if (apellidos.length>80){
    alert("el campo apellidos no puede exceder de 80 caracteres")
    return false;
}
else if (correo.length>100){
    alert("el campo correo no puede exceder de 100 caracteres")
    return false;
}
// para verificar el correo
else if (!expresion.test(correo)){
    alert("el correo no es válido")
    return false;
}


else if (usuario.length>20){
    alert("el campo usuario no puede exceder de 20 caracteres")
    return false;
}

else if (telefono.length>15){
    alert("el campo teléfono no puede exceder de 15 caracteres")
    return false;
    
}

    alert("Bienvenido, gracias por tu registro:\n \n " + "Nombre:  "+ nombre + "\n" + "Apellidos:  "+ apellidos + "\n" + "Usuario:  " + usuario + "\n" + "Contraseña:  "  + Contraseña);
   
    return true;
    
    // // isnan es
// // isnan es para campo telefono quitar la opcion de tener letras
// else if (isNaN(telefono)){
//     alert("El teléfono ingresado no es un número")
//     return false;}

}


// validacion de formulario
window.onload = function () {
       document.formularioContacto.nombre.focus();
    //    elimiada porque me reinicia el formulario al no validarlo 
    // document.formularioContacto.addEventListener('submit', validarFormulario);
    } 
     function validarFormulario(evObject) {
    evObject.preventDefault();
    var todoCorrecto = true;
    var formulario = document.formularioContacto;
    
for (var i=0; i<formulario.length; i++) { if(formulario[i].type =='text') { if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)){
    alert (formulario[i].name+ ' no puede estar vacío o contener sólo espacios en blanco');
    todoCorrecto=false;
  }
 }
  }
    if (todoCorrecto ==true) {formulario.submit();
  
			
    }

    } 

// para quitar del campo telefono la opcion de letras
function solonumeros (e){

    key=e.keyCode || e.which;
    teclado= String.fromCharCode(key);
    numeros="0123456789";
    especiales= "8-37-38-46"  //array
    teclado_especial=false;


    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial; 
        }
    }

    if(numeros.indexOf(teclado)===-1 && !teclado_especial){
        return false;

    }



}


 