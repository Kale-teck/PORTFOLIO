import validaNome from "./valida_nome.js"
import validaEmail from "./valida_email.js"
import validaAssunto from "./valida_assunto.js"
import validaMensagem from "./valida_mensagem.js"

const formularios = document.querySelectorAll("[required]")

formularios.forEach((evento) => {

   evento.addEventListener('blur', () => verificaFormulario(evento))

   //impedindo popup html quando valid == false
   evento.addEventListener('invalid', evento => evento.preventDefault())
})

function verificaFormulario(evento) {

   if (evento.name == "nome" && evento.value != "") {
      validaNome(evento)
   }

   if (evento.name == "email") {
      validaEmail(evento)
   }

   if (evento.name == "assunto") {
      validaAssunto(evento)
   }

   console.log(evento.validity)
}
   