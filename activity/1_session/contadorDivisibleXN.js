console.log("Numeros del 1 al 100 divisibles entre 7");

const contadorDivisible = (n) => {
  setTimeout(() => {
    for (let i = 0; i <= 100; i++) {
      i % n === 0 ? console.log(i) : null;
    }
  }, 10);
}

contadorDivisible(7);