export {mensagens, tiposDeErro}

const tiposDeErro = [
    'valueMissing', //campo vazio
    'typeMismatch', //tipo não conbina
    'patternMismatch', // patter/regex não bate
    'tooShort', //tamanho limite não atingido
    'tooLong', //tamanho máximo excedido
    'customError' // erros personalizados JS
]

const mensagens = {
   nome: {
       valueMissing: "O campo de nome não pode estar vazio.",
       patternMismatch: "Deve conter no máximo 50 caracteres."
   },
   email: {
       valueMissing: "O campo de e-mail não pode estar vazio.",
       typeMismatch: "Por favor, preencha um email válido.",
       tooShort: "Por favor, preencha um e-mail válido."
   },
   assunto: {
       valueMissing: "O campo Assunto não pode estar vazio.",
       tooLong: "O campo Assunto não pode ter mais que 50 caractéres"
   },
   mensagem: {
       valueMissing: 'O campo Mensagem não pode estar vazio.',
       tooLong: "Máximo 300 caracteres"
   }
}