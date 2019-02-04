<?php
        
        use PHP\clases\CuentaBanco;
        use PHP\clases\bancohijo;
        use PHP\clases\varios;

        include_once('./clases/CuentaBanco.php');
        include_once('./clases/bancohijo.php');
        include_once('./clases/varios.php');

      
        // utilizando los use
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<style>
        
        .mensaje{
            position: absolute;
            background-color: rgb(64, 219, 209);
            opacity:0.6;
            width: 500px;
            height: 230px;
            top: 300px;
            left: 650px;
            padding-left: 10px;
            border: 3px solid #AD40DB;
            box-shadow: 10px 10px 5px grey;

            
            
        }

        .text {
            color: #AD40DB;
            text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        }
        img{

            align-content: center;
            position: absolute;
            left: 190px;
            width: 130px;
            height: 100px;

        }
        .mostrar{
            background-color: rgb(64, 219, 209);
            opacity:0.6;
            width: 500px;
            height: 530px;
            top: 20px;
            padding-left: 10px;
            border: 3px solid #AD40DB;
            box-shadow: 10px 10px 5px grey;

        }

        .varios{
            position: absolute;
            background-color: rgb(64, 219, 209);
            opacity:0.6;
            width: 500px;
            height: 530px;
            left: 700px;
            padding-left: 10px;
            border: 3px solid #AD40DB;
            box-shadow: 10px 10px 5px grey;
        }



</style>

<div class="mensaje">

    <h1 class="text">Para ver los resultado es necesario ver la consola</h1>

    <img class= "img" src="./img/php-00441489844a0103eae71ba2fe15244c.png" alt="">

</div>

        <div class = "Mostrar">

        <?php

            echo '<h1> Cuenta Bancaria clase padre</h1>';
       
            $Bcuenta = new CuentaBanco(1,0.15);
            $Bcuenta->dinero1 = 300;
            echo "<h1>Ingreso: ".$Bcuenta->IngresarDinero()."</h1>";
            echo "Cuenta:Actual ". $Bcuenta->GETCUENTA()."</h1> <br>";
            $Bcuenta->dinero2 = 200;
            echo "Retiro: ". $Bcuenta->RetirarDinero()."</h1> <br>";
            echo "Cuenta Actual: ". $Bcuenta->GETCUENTA()."</h1> <br>";
            echo "Impuesto: ". $Bcuenta->CalculodeIva()."</h1> <br>";
            echo "Interes: ". $Bcuenta->CalculodelVPN()."</h1> <br>";




            echo '<h1> Cuenta Bancaria clase hija</h1>';
        
            // como se nota el hijo herada todas las clases del padre 
            $Bcuenta1 = new bancohijo(1,0.15);
            $Bcuenta->dinero1 = 300;
            echo "<h1>Ingreso: ".$Bcuenta->IngresarDinero()."</h1>";
            echo "Cuenta:Actual ". $Bcuenta->GETCUENTA()."</h1> <br>";
            $Bcuenta1->dinero2 = 100;
            echo "Retiro: ". $Bcuenta1->RetirarDinero()."</h1> <br>";
            echo "Cuenta Actual: ". $Bcuenta1->GETCUENTA()."</h1> <br>";
        ?>

        </div>

        
</body>
</html>