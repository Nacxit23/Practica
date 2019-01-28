const l = () => {
  console.log("bye");
};

(l => {
  l("Utilizando operadores ");

  let resultado;

  const operadores = (opciones, numero1, numero2) => {
    let msj;

    if (opciones > 5) {
      l("La opcion que usted ingreso no se encuentra disponible");
      return;
    }

    switch (opciones) {
      case 0:
        resultado = numero1 + numero2;
        break;
      case 1:
        resultado = numero1 - numero2;
        break;
      case 2:
        resultado = numero1 * numero2;
        break;
      case 3:
        resultado = numero2 / numero2;
        break;
      case 4:
        if (numero1 === numero2) {
          l("Los dos numero son iguales");
          return;
        }

        msj =
          numero1 > numero2
            ? `${numero1} es mayor a ${numero2}`
            : `${numero2} es mayor a ${numero1}`;
        l(msj);
        return;
        break;
      case 5:
        msj =
          numero1 % 2 === 0
            ? l(`${numero1} es par`)
            : l(`${numero1} no es par`);
        return;
        break;
    }
    l(`resultado = ${resultado}`);
  };

  operadores(0, 5, 5);
  l("Usando condicionales ");

  const dowhile = max => {
    let a = 1;
    do {
      l(` contador: ${a++}`);
    } while (a <= max);
  };
  dowhile(10);

  const forej = array => {
    for (let index = 0; index < array.length; index++) {
      l(`Su alimento son: ${array}`);
    }
  };

  forej(["frito", "fritanga", "sopa", "montongo"]);

  l("Usando funciones de clausula");

  const convertidor = cantidad => {
    let _dinero = cantidad;

    console.log("this", this);
    if (_dinero === 0) {
      l("No puede ser 0");
      return;
    }

    const dolares = () => {
      return _dinero * 0.031;
      h;
    };

    const euro = () => {
      return _dinero * 0.027;
    };

    const colones = () => {
      return _dinero * 19.64;
    };

    const dineroactual = () => {
      return `Su dinero ingresado es de: ${_dinero}`;
    };

    return {
      dolares: dolares,
      euro: euro,
      colones: colones,
      dineroactual: dineroactual
    };
  };

  const convert1 = convertidor(10);
  const convert2 = convertidor(20);

  l(`Dolares 1: ${convert1.dolares()}`);
  l(`Colones: ${convert1.colones()}`);
  l(`euro: ${convert1.euro()}`);

  convert2.dineroactual(20);
  l(`Dolares: ${convert2.dolares()}`);
  l(`Colones: ${convert2.colones()}`);
  l(`euro: ${convert2.euro()}`);
})(console.log);
