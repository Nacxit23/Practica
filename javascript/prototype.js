
;

((c)=>{

        c("POO prototype aninado clausula")
        //ejemplo de ingregar y registrar en una cuenta

    function cuenta(titular) {

        let _titular = titular
        let _cantidad 
        let _cuenta = 0

        function ingresar(_cantidad) {

            if (_cantidad > 0) {

                _cuenta = _cantidad
            } else {

              return  c(`No es posible ingresar esa cantidad`)
            }
        }



        function retirar(_cantidad) {

            if (_cantidad <= _cuenta) {

                _cuenta = _cuenta - _cantidad

            } else {
               return c(`No es posible ingresar esa cantidad`)
            }
        }

        function ver() {
            
            return _cuenta
        }

        return {

            ingregar: ingresar,
            retirar: retirar,
            ver: ver
        }
    }

    let banco = cuenta('Nacxit')
    banco.ingregar(200)
    c(`Cantidad: ${banco.ver()}`)
    banco.retirar(100)
    c(`Cantidad: ${banco.ver()}`)


    c('POO prototype con contructor')

})(console.log)

((c) =>{

    function cuenta(titular) {

        this._titular = titular
        this._cantidad 
        this. _cuenta = 0
        this. _mensaje = ''
    
    
        this.ingresar = (_cantidad) =>{
            
            this._cuenta =  _cuenta + _cantidad
            this._mensaje = 'no puede ingresar esa cantidad'


            (_cantidad > 0) ? this._cuenta : _mensaje
        }

        this.ingregar = (_cantidad) =>{

            this._cuenta = _cuenta - _cantidad

            this._mensaje = 'no puede ingresar esa cantidad'


            (_cantidad <= _cuenta) ? this._cuenta : this._mensaje
        }

        this.ver = () =>{ return cuenta}
    }

    let banco = new cuenta('Nacxit')

    banco.ingregar(200)
    c(`Cantidad: ${banco.ver()}`)
    banco.retirar(100)
    c(`Cantidad: ${banco.ver()}`)

})(console.log);

c('Objeto prototype')

((c) =>{

    function cuenta(titular) {

        this._titular = titular
        this._cantidad 
        this. _cuenta = 0
        this. _mensaje = ''
    }

    cuenta.prototype ={


        ingresar: function (_cantidad) {

            if (_cantidad > 0) {

                _cuenta = _cantidad
            } else {

              return  c(`No es posible ingresar esa cantidad`)
            }
        },

        retirar: function (_cantidad) {

            if (_cantidad <= _cuenta) {

                _cuenta = _cuenta - _cantidad

            } else {
               return c(`No es posible ingresar esa cantidad`)
            }
        },

        ver: function () {
            
            return _cuenta
        }


    }

    let banco = new cuenta('Nacxit')

    banco.ingregar(200)
    c(`Cantidad: ${banco.ver()}`)
    banco.retirar(100)
    c(`Cantidad: ${banco.ver()}`)


})(Console.log);

((c)=>{
        c('Herencia prototype')
   



})(console.log)