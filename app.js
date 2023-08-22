import { valida } from "./validacion.js";

const input = document.querySelectorAll("input")

input.forEach((input) => {
    input.addEventListener("blur", (input) =>{
        valida(input.target)
    })
})

const textarea = document.querySelectorAll("textarea")

textarea.forEach((textarea) => {
    textarea.addEventListener("blur", (textarea) =>{
        valida(textarea.target)
    })
})
