// carga de los elementos de dom 
window.addEventListener("load",()=> {
    let horaHtml=document.getElementById("hora")
    let minutoHtml=document.getElementById("minuto")
    let segundoHtml=document.getElementById("segundo")


const mostrarHora = () => { 
    let fecha =new Date()
    let hora =fecha.getHours()
    let minuto = fecha.getMinutes()
    let segundo =fecha.getSeconds()

    horaHtml.textContent=String(hora).padStart(2,"0")
    minutoHtml.textContent=String(minuto).padStart(2,"0")
    segundoHtml.textContent=String(segundo).padStart(2,"0")
    setTimeout(mostrarHora,1000)

}
mostrarHora()


})