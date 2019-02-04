<?php

namespace PHP\clases; // utilizando namespace

 require_once "interfaceE.php";
class CuentaBanco implements interfaceE
{
    //clase  objeto
    public $dinero1 = 0;
    public $dinero2 = 0;
    public $cuenta = 0;

    public function __construct($year,$porcentaje){

            $this->year = $year;
            $this->porcentaje = $porcentaje;
    }
    
    public function IngresarDinero(){

        // nueva forma 

            return  $this->cuenta  = $this->cuenta + $this->dinero1;
           
    }


    public function RetirarDinero(){

        
            
               $this->cuenta = $this->cuenta - $this->dinero2;
            
               return $this->dinero2;
        
    }

    public function GETCUENTA(){

        return $this->cuenta;
    }

    public function CalculodeIva(){

        
        return $this->cuenta * 0.15;

    }

    public function CalculodelVPN(){


        return $this->year + $this->porcentaje * 350;
    }

}












