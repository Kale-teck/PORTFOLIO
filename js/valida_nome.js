export default function validaNome(evento) {
   const nome = evento.value
   const pai = document.getElementById('formulario')

   if (nome.length === 0) {
      const paragrafo = document.createElement("p")
      const textnode = document.createTextNode("Simão")
      //paragrafo.appendChild(textnode)  
      pai.appendChild(paragrafo)
      
   }
}
