
((c)=>{




    const event = document.getElementById('EjemploEvent')

    event.addEventListener('click', eventoclick) // agregando evento nuevo en el dom donde te pide dos parametros el "El nombre del evento"
                            // y el metodo del evento

    function eventoclick() { // funcion del evento 
        
        alert('Evento click') // notificacion del evento se mostrara en el DOM 
    }

    
 const event2 = document.getElementById('EjemploEvent2')
    event2.addEventListener('click', ()=>{

        alert('Second click Event')

    })


    // tercera forma de realizar un evento click
    const even3 = document.querySelector('button').addEventListener('click', ()=>{ alert('Thre click event')})

    // cuarta forma de realizar un evento click

    /*
     const oteniendoText = document.getElementById('text').textContent

    function text() {
        alert(oteniendoText)
    }
     
     const event4 = document.querySelector('EjemploEvent4').addEventListener('click' ,text)*/


     // creando un nuevo elemento

    const provandomenu = document.getElementById('Elemento2')
    const CreandoMenus = e => {

     const creandomenu = document.createElement('div')
     creandomenu.id = 'menu'
     const menux = document.getElementById('menu')
     creandomenu.textContent = 'Probando menu creado'
     
     // dando estilo al menu que se mostrara como practica
     
     creandomenu.style.background = '#40DB66'
     creandomenu.style.border = '2px, solid red'
     creandomenu.style.position = 'fixed'
     creandomenu.style.left = `${e.pageX}px`
     creandomenu.style.top = `${e.pageY}px`



     if (menux) {
         
            document.body.removeChild(menux)
     }

     document.body.appendChild(creandomenu)

    }

    provandomenu.addEventListener('contextmenu', e =>{

        CreandoMenus(e)
        e.defaultPrevented
    })

    addEventListener('DOMContentLoaded', () => { // permite cargar los eventos despues del DOM  evitando asi siertos errores del dom

        const sutmit = document.getElementById('form')

        sutmit.addEventListener('submit', () => {


            c('Has enviado formulario')
        })

    
    })
   



    //segunda forma de realizar un evento click 






})(console.log);