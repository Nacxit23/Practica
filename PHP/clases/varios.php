<?php

namespace PHP\clases; // utilizando namespace

    // palicando resolucion de anbito

 class varios
 {
    //llamando la primera clase
    public function prueba(){

        echo 'tengo hambre'; 
    } 


    
              //     Usando directorio            
    
        

    public function direcciones(){

        echo getcwd() . "<br>";
        chdir('imagen.php');     // actualizando una direccion nueva


        return getcwd() . "<br>";
   }

 }

  // Probando resolucion de ambito // devuelve la frase


 class Metodo_estatico{

     static function calculo($n,$n2){ // aplicando clase estatica

        $metodoc = $n + $n2;

        echo " <br> Resultado: $metodoc";

     }
 }

 varios::prueba();
 Metodo_estatico::calculo(10,12); // mostrando la clase estatica


// utilizando directorio en PHP