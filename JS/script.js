
const formulario = document.querySelector("#frmDatos");
console.log(formulario)


formulario.addEventListener("submit", validaFormulario)

function validaFormulario(e){
e.preventDefault();
  //console.log('validando')
  const nombre1 = document.querySelector("#nombre").value;
  //const mensaje1 = document.querySelector("#mensaje").value;
  //const correo1 = document.getElementById("#correo")
  console.log(nombre1)
  //console.log(correo1)

  const respuesta = document.getElementById("resumenNombre")
 // const respuesta2 = document.getElementById("resumenMensaje")
  respuesta.textContent =`Nombre: ${nombre1}`
  //respuesta2.textContent = `Mensaje: ${mensaje1}`
  //console.log(nombre1)


}
function guardarDatos(){
  let email1 = document.getElementById('email').value
  let mensaje1 = document.getElementById('mensaje').value
  console.log(email1)
  console.log(mensaje1)

  const respuestaEmail =document.getElementById("resumenCorreo")
  respuestaEmail.textContent = `Email: ${email1}`

  const respuestaMensaje = document.getElementById("resumenMensaje")
  respuestaMensaje.textContent = `Mensaje: ${mensaje1}`
  
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })

    

  })()



 

 