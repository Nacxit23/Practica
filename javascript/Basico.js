;
((c)=>{

c('Utilizando operadores ');

    
           
        let resultado
        let operadores = function (opciones, numero1, numero2) {
            
           if (opciones <= 5) {


            switch (opciones) {

                case 0:
                       resultado = numero1 + numero2;

                        return c(`${resultado}`)
    
                    break;
                case 1:
                       resultado = numero1 - numero2;
    
                    break
                case 2:
                        resultado = numero1 * numero2;
                        return c(`${resultado}`)

                    break;
                
                case 3: 
                        resultado = numero2 / numero2;
                        c(`${resultado}`)

                    break;
    
                case 4:
                        if (numero1 != numero2) {
                            
                            if (numero1 > numero2) {
                            
                               return c(`${numero1} es mayor a ${numero2}`)
                            }
                        }else{
                              return c('Los dos numero son iguales')
                        }
                       
                break;
    
                case 5:
                        if (numero1 % 2 == 0) {
                          return  c(`${numero1} es par`)
                        } else {
                          return  c(`${numero1} no es par`)
                        }
                break; 
            }
        } else {

           c('La opcion que usted ingreso no se encuentra disponible')
           
        }

    }

    operadores(0,5,5)



    c('Usando condicionales ')

   
        let dowhile = function(){

            let a = 1

            do {

                 c(` contador: ${a++}`)
                
            } while (a <= 10 );
        }

        dowhile()

        let forej = function () {

            let array = [

                'frito',
                'fritanga',
                'sopa',
                'montongo',             
            ];

            for (let index = 0; index < array.length; index++) {
                
                c(`Su alimento son: ${array}`)
                
            }
        }

        forej()


    c('Usando funciones de clausula')

     let convertidor = (() =>{
         
     
                let _dinero = 100


            if (_dinero !=0) {

                let _resultado
                   
                function dolares() {
                    
                  return  _resultado= _dinero* 0.031
               }

               function euro() {

                return _resultado= _dinero * 0.027
               
              }

              function colones() {
                return _resultado= _dinero * 19.64
              }

              function dineroactual() {
                return `Su dinero ingresado es de: ${_dinero}`

              }

               } else {
                 c('No puede ser 0')   
               }
           
            
            return {

                dolares: dolares,
                euro: euro,
                colones: colones,
                dineroactual: dineroactual
            }
        })();
        c(convertidor.dineroactual())
        c(`Dolares: ${convertidor.dolares()}`)
        c(`Colones: ${convertidor.colones()}`)
        c(`euro: ${convertidor.euro()}`)     

        
})(console.log);