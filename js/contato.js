import validaNome from "./valida_nome.js"
import validaEmail from "./valida_email.js"
import validaAssunto from "./valida_assunto.js"
import validaMensagem from "./valida_mensagem.js"

const formularios = document.querySelectorAll("[required]")

formularios.forEach((evento) => {

   evento.addEventListener('blur', () => validaFormulario(evento))
})

function validaFormulario(evento) {

   validaNome(evento)
}
   