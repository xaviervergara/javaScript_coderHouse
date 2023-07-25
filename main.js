class Notebook {
  constructor(info) {
    this.precio = info.precio;
    this.marca = info.marca;
    this.modelo = info.modelo;
    this.procesador = info.procesador;
    this.memoria = info.memoria;
    this.graficos = info.graficos;
    this.almacenamiento = info.almacenamiento;
    this.pantalla = info.pantalla;
    this.cantidad = info.cantidad;
  }

  vender() {
    if (this.cantidad == 0) {
      alert('Nos quedamos sin stock, disculpe las molestias!');
    } else {
      this.cantidad -= 1;
    }
    return this.cantidad;
  }
}

const amdApuA9 = new Notebook({
  precio: 132539,
  marca: 'CX',
  modelo: 'CX28000W',
  procesador: 'AMD A9-9400',
  memoria: '4 GB',
  graficos: 'Radeon R5 series',
  almacenamiento: 'SSD 64 GB',
  pantalla: '14", HD (1366 x 768)',
  cantidad: 18,
});

const asusI3 = new Notebook({
  precio: 341389,
  marca: 'Asus',
  modelo: 'X515EA-EJ1626W',
  procesador: 'Intel Core i3-1115G4',
  memoria: '4 GB DDR4',
  graficos: 'Intel UHD Graphics',
  almacenamiento: 'SSD 256 GB',
  pantalla: '15,6", FHD (1920 x 1080), 16',
  cantidad: 22,
});

let compra = function () {
  let name = prompt('Bienvenid@ a nuestra tienda! ingresá tu nombre.');
  let choice = prompt(
    `Hola ${name}, en este momento contamos con dos notebooks: AsusI3 y AmdApu9.\n
     Por favor, ingrese asus, o amd para ver sus caracteristicas`
  );
  if (choice == 'asus') {
    let caracteristicas = '';
    for (key in asusI3) {
      caracteristicas = caracteristicas + `${key}: ` + asusI3[key] + '\n';
    }
    let cuotas = prompt(
      `${caracteristicas} \nEsta unidad se puede financiar en 3 cuotas con un interes del 11,56% o en 6 cuotas con un interes del 72,75%. Ingresá 3 o 6 respectivamente para conocer el monto de las cuotas.`
    );
    if (cuotas === '3') {
      let interes = (asusI3.precio * 11.56) / 100;
      let total = Math.round(asusI3.precio + interes);
      let mes = Math.round((asusI3.precio + interes) / 3);
      alert(`Total: $${total}.\nPagás $${mes} por mes.`);
    } else if (cuotas === '6') {
      let interes = (asusI3.precio * 72.75) / 100;
      let total = Math.round(asusI3.precio + interes);
      let mes = Math.round((asusI3.precio + interes) / 6);
      alert(`Total: $${total}.\nPagás $${mes} por mes.`);
    } else {
      alert('Numero de cuotas no valido!');
    }
  } else if (choice == 'amd') {
    let caracteristicas = '';
    for (key in amdApuA9) {
      caracteristicas = caracteristicas + `${key}: ` + amdApuA9[key] + '\n';
    }
    let cuotas = prompt(
      `${caracteristicas} \nEsta unidad se puede financiar en 12 cuotas con un interes del 52.54% o en 18 cuotas con un interes del 87.16%. Ingresá 12 o 18 respectivamente para conocer el monto de las cuotas.`
    );
    if (cuotas === '12') {
      let interes = (amdApuA9.precio * 52.54) / 100;
      let total = Math.round(amdApuA9.precio + interes);
      let mes = Math.round((amdApuA9.precio + interes) / 12);
      alert(`Total: $${total}.\nPagás $${mes} por mes.`);
    } else if (cuotas === '18') {
      let interes = (amdApuA9.precio * 87.16) / 100;
      let total = Math.round(amdApuA9.precio + interes);
      let mes = Math.round((amdApuA9.precio + interes) / 18);
      alert(`Total: $${total}.\nPagás $${mes} por mes.`);
    } else {
      alert('Numero de cuotas no valido!');
    }
  } else alert('Esa pc no la conozco!');
};

compra();
