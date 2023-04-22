import validaNome from "./valida_nome.js"
import validaEmail from "./valida_email.js"
import validaAssunto from "./valida_assunto.js"
import validaMensagem from "./valida_mensagem.js"
import { mensagens, tiposDeErro } from "./mensagens.js"

const formularios = document.querySelectorAll("[required]")

formularios.forEach((evento) => {

   evento.addEventListener('blur', () => verificaFormulario(evento))

   //impedindo popup html quando valid == false
   evento.addEventListener('invalid', evento => evento.preventDefault())
})

function verificaFormulario(evento) {

   let mensagem = ""

   if (evento.name == "nome" && evento.value != "") {
      validaNome(evento)
      console.log(mensagens)
   }

   if (evento.name == "email" && evento.value != "") {
      validaEmail(evento)
      console.log(mensagem)
   }

   if (evento.name == "assunto" && evento.value != "") {
      validaAssunto(evento)
   }

   if (evento.name == "mensagem" && evento.value != "") {
      validaMensagem(evento)
   }

   tiposDeErro.forEach(erro => {
      if (evento.validity[erro]) {
         mensagem = mensagens[evento.name][erro]
         console.log(mensagem)
      }
   })
}
   