;

((c,d)=>{
    c('Objeto sencillo')

    let carro = {

        marca: 'Toyota',
        color: 'verde',
        categoria:  'cedan',
        tipo:   'automatico',

        recorrido (concideracion){

            if (concideracion >= 150000) {
                c('Es un carro viejo')
            } else {
                c('No es un carro viejo')
            }
        }
    }

    c( 'Atributo del carro \n',

        carro.marca,
        carro.color,
        carro.categoria,
        carro.tipo
    )
    carro.recorrido(3424252)


    c('Usando protetipo ==============================================')

    let carro2 = new Object()

    carro2.marca= 'Toyota',
    carro2.color= 'verde',
    carro2.categoria=  'cedan',
    carro2.tipo=   'automatico',


    carro2.recorrido = (concideracion) => {

        if (concideracion >= 150000) {
            c('Es un carro viejo')
        } else {
            c('No es un carro viejo')
        }
    }
    c(
    carro2.marca,
    carro2.color,
    carro2.categoria,
    carro2.tipo,
    )
    carro2.recorrido(3424252)

    c('Usando cpntructor ==============================================')

    function carro3(marca,color,categoria,tipo) {
        
        this.marca = marca,
        this.color = color,
        this.categoria = categoria,
        this.tipo = tipo

        this.recorrido = (concideracion) => {

            if (concideracion >= 150000) {
                c('Es un carro viejo')
            } else {
                c('No es un carro viejo')
            }
        }

    }

    let carro3l = new carro3( 'Toyota', 'Verde','cedan','automatico')


    c(
        carro3l.marca,
        carro3l.color,
        carro3l.categoria,
        carro3l.tipo
    )
    carro3l.recorrido(2131)



})(console.log,document)