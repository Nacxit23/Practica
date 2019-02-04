

((c) =>{


/*En el don cada etiqueta html es un elemento por lo cual se puede acceder a dicha etiqueta */


 const seleccionadoElemento = document.getElementById("ejemplo") // seleccion de un solo elemento
 const seleccionadoElemento2 = document.querySelector("Elemento2")// funciona de la misma forma que el getElementbyId();
 const seleccionadoElementoAll = document.querySelectorAll("ul li") // como se muestra se puede seleccionar varios elementos del dom 
 const seleccionadoEespecifico = document.getElementById("Elemento2")
 const seleccionandoElementoporNombre = document.querySelectorAll('li') // nodelist pero no es un array

 const nodelist = Array.from(document.querySelectorAll('li')) // devuelve un nodo como array

    // se muestra el elemento seleccionado a travez del dom, tomar en cuenta que cada elemento tambien se concidera un nodo pero este 
    // mismo no forma parte del lenguaje de javascrip

    // ATRIBUTOS

    //const seleccionadoAtributo = document.getElementById('class', 'Elemento2') // Primera forma de adquirir atributos

    


     const selesctAtrbuto = document.getElementById('form') // seleccionando el id del elemento

     selesctAtrbuto.setAttribute('class','elemento4') // se busca los atributos del mismo
     selesctAtrbuto.classList.add('asdadasd','asdadadad') // se agrega los nuevos atributos
    

    //*************************************************** AGREGANDO ELEMENTO DENTRO DEL DOM ******************************************************** */


    const elementoh1 = document.createElement('h1') // AGREGA UN ELEMENTO DIV
    elementoh1.textContent = "Elemento creado para el DOM" // AGREGA TEXTO AL ELEMENTO ANTERIORMENTE CREADO
    elementoh1.classList.add('divmayor') // agregndo una clase
    document.body.appendChild(elementoh1) // agrega elemento en el view del dom
    
    
    // creando un nuevo elemento para el dom, este mismo se puede editar y inyectarle styles o css directamente desde el dom 
   // aunque sea ingresado directamente desde el Javascript

    const elementoSpan = document.createElement('span')
    elementoSpan.textContent = 'Probando otro elemento'
    elementoSpan.classList.add('divprueba')
    document.body.appendChild(elementoSpan)



    
   
   
   
   
    c('Se muestra los elementos seleccionados')
 //c(elementoDiv)// mostrando el elemento agregado 
 c(seleccionadoElemento)
 c(seleccionadoElemento2)
 c(seleccionadoElementoAll)
 //c(seleccionadoEespecifico.querySelectorAll('li:last-child')) // se selecciona los elemento hijas del elemento mostrado
 c(seleccionandoElementoporNombre) // aca se muestra el nombre del elemento seleccionado pero se miestrara como nodolist no como htmlelement

nodelist.map( nl => {


    for (let nl of nodelist) { // recorriendo el nodelist ya que se concidera un array de elementos

        if (nl.textContent.trim().toUpperCase() === 'OBJETO') { // COMPROBANDO EL OBJETO

            nl.remove()
        }
        
    }

       



})



 

})(console.log);