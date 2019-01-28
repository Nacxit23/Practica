;
((c) =>{

    c('Uso del this implicito')

     c('caso 1\n')


    let producto ={

        productonombre: 'hp',
        categoria: 'tecnologia',
        
        
        Calcular: function (precioneto, impuesto){

            let por = precioneto * impuesto
            let preciobruto = precioneto + por
            // el this hace referencia al objeto que tiene el metodo
            c(`El precio bruto del producto ${this.productonombre} es: ${preciobruto}`)

        }
    }
    producto.Calcular(1200,0.15)
    c('caso 2\n')


    let producto2 = function (marca) {

        marca.SaberMarca = function () {
           
            c(`La marca es: ${this.nombre}`)// en este caso el this hace referencia al atrbuto del metodo asignado 
        }
        
    }


    let hp ={
        nombre: 'hp'
    }
    let acer ={
        nombre: 'hacer'
    }

    producto2(hp)
    producto2(acer)
    hp.SaberMarca()
    acer.SaberMarca()

    c('caso 3\n')

    let producto3 = function(pc, impresora){

        return{

            marca1: pc,

            SAberMarca: function () {

                c(`La marca es: ${this.marca1}`)

            },

            impresora: {
            marca1: impresora,
            SaberImpresora: function () {
                c(`la marca de la impresora es: ${this.marca1}`)
            }
         }
      }
    }

    let productoss = producto3('HP','Lacer')

    productoss.SAberMarca()
    productoss.impresora.SaberImpresora()

    c('Asignacion explicita \n')

    let electronico = function (f1, f2, f3) {
        
        c(`${this.nombre}`)
    }

    let marca = {
        nombre: 'hp'
    }

    let empresas = ['impresora','pc','escaner']

    electronico.call(marca,  empresas[0], empresas[1], empresas[2])
    electronico.apply(marca, empresas)
    let productoEle = electronico.bind(marca, empresas[0], empresas[1], empresas[2])
    productoEle()
    
    c(`asignacion con new`)

    let electronico2 = function (nombre, categoria) {
        
        this.nombre = nombre,
        this.categoria = categoria
    }

    let impresora = new electronico2('acer','impresora')

    // aplicando prototypes

    computadora_cara = Object.create(electronico2)
    computadora_cara.nombre = 'MAC'

    c(impresora, computadora_cara)



})(console.log)