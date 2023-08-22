//Haz tú validación en javascript acá

 export function valida(input) {
    const tipoDeInput = input.dataset.tipo
    if (valida[tipoDeInput]){
        valida[tipoDeInput](input)
    }
    // console.log(input.parentElement)

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    } else{
        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }
}

const tipoDeErrores =[
    "valueMissing",
    "typeMismatch",
];

const mensajesError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar Vacio",
    },

    email: {
        valueMissing: "El campo correo no puede estar Vacio",
        typeMismatch: "Ingresa un correo Valido"
    },

    asunto: {
        valueMissing: "El campo asunto no puede estar Vacio",
    },

    textareaMensaje: {
        valueMissing: "El campo mensaje no puede estar Vacio",
    },
}



function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if(input.validity[error]) {
            // console.log(error)
            // console.log(input.validity[error])
            // console.log(mensajesError[tipoDeInput][error])
            mensaje = mensajesError[tipoDeInput][error]
        } 
    })

    return mensaje
}




