<?php

namespace PHP\clases; // utilizando namespace

require_once "CuentaBanco.php";
// aplicando herencia , la clase hija accede a la clase padre heredando asi su metodos
class bancohijo extends CuentaBanco 
{

   // sobre carg del metodo
    public function RetirarDinero(){

        $impuesto = $this->dinero2 * 0.15;
            
        $this->cuenta = $this->cuenta - $this->dinero2 + $impuesto;
     
        return $this->dinero2;
 
}


}
