<?php

    // palicando resolucion de anbito

 class Resolucion
 {
    //llamando la primera clase
    public function prueba(){

        echo 'tengo hambre'; 
    }    
 }
 Resolucion::prueba(); // Probando resolucion de ambito // devuelve la frase


 class Metodo_estatico{

     static function calculo($n,$n2){ // aplicando clase estatica

        $metodoc = $n + $n2;

        echo " <br> Resultado: $metodoc";

     }
 }

 Metodo_estatico::calculo(10,12); // mostrando la clase estatica