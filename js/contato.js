import validaNome from "./valida_nome.js"
import validaEmail from "./valida_email.js"
import validaAssunto from "./valida_assunto.js"
import validaMensagem from "./valida_mensagem.js"
import { mensagens, tiposDeErro } from "./mensagens.js"

const formularios = document.querySelectorAll("[required]")

//ENVIANDO FORMULÁRIO 
const formulario = document.querySelector("[data-formulario]")

formulario.addEventListener("submit", (e) => {
   e.preventDefault()

   const listaDados = {
      "nome": e.target.elements["nome"].value,
      "email": e.target.elements["email"].value,
      "assunto": e.target.elements["assunto"].value,
      "mensagem": e.target.elements["mensagem"].value,
   }

   localStorage.setItem("contato", JSON.stringify(listaDados))

   alert('Obrigado pelo contato !')
})

formularios.forEach((evento) => {

   evento.addEventListener('blur', () => verificaFormulario(evento))

   //impedindo popup html quando valid == false
   evento.addEventListener('invalid', evento => evento.preventDefault())
})

function verificaFormulario(evento) {

   let mensagem = ""

   if (evento.name == "nome" && evento.value != "") {
      validaNome(evento)
   }

   if (evento.name == "email" && evento.value != "") {
      validaEmail(evento)
   }

   if (evento.name == "assunto" && evento.value != "") {
      validaAssunto(evento)
   }

   if (evento.name == "mensagem" && evento.value != "") {
      validaMensagem(evento)
   }

   //ATRIBUINDO MENSAGEM DE ERRO PARA LET MENSAGEM COMFORME CADA CAMPO E ESTADO RESPECTIVAMENTE

   tiposDeErro.forEach(erro => {
      if (evento.validity[erro]) {
         mensagem = mensagens[evento.name][erro]
      }
   })

   // ESCREVENDO AS MENSAGENS DE ERRO DO CONSOLE PARA O HTML

   const mensagemErro = evento.parentNode.querySelector('.mensagem-erro')

   const validadorDeInput = evento.checkValidity()

   if(!validadorDeInput) {
      mensagemErro.textContent = mensagem
      //essa variável mensagem está sendo atribuída em tiposDeErro.forEach() logo acima
   } else {
      mensagemErro.textContent = ""
   }

}
   