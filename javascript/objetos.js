((log, d) => {
  log("Objeto sencillo");

  const carro = {
    marca: "Toyota",
    color: "verde",
    categoria: "cedan",
    tipo: "automatico",

    recorrido(concideracion) {
      return concideracion >= 150000
        ? "Es un carro viejo"
        : "No es un carro viejo";
    }
  };

  const { marca, color, categoria, tipo } = carro;
  log("Atributo del carro \n", marca, color, categoria, tipo);

  carro.recorrido(3424252);

  log("Usando protetipo ==============================================");

  let carro2 = new Object();

  carro2["marca"] = "Toyota";
  carro2.color = "verde";
  carro2["categoria"] = "cedan";
  carro2.tipo = "automatico";
  carro2.recorrido = concideracion => {
    if (concideracion >= 150000) {
      log("Es un carro viejo");
    } else {
      log("No es un carro viejo");
    }
  };

  log(carro2.marca, carro2.color, carro2.categoria, carro2.tipo);
  carro2.recorrido(3424252);

  log("Usando cpntructor ==============================================");

  const carro3 = function(marca, color, categoria, tipo) {
    this.marca = marca;
    this.color = color;
    this.categoria = categoria;
    this.tipo = tipo;

    this.recorrido = concideracion => {
      if (concideracion >= 150000) {
        log("Es un carro viejo");
      } else {
        log("No es un carro viejo");
      }
    };
  };

  const carro3l = new carro3("Toyota", "Verde", "cedan", "automatico");

  log(carro3l.marca, carro3l.color, carro3l.categoria, carro3l.tipo);
  carro3l.recorrido(2131);
})(console.log, document);
