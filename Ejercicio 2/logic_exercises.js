// Arturo Aragón Hidalgo

// Fibonacci
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let secFibonacci = [0, 1];
  for (let i = 2; i < n; i++) {
    secFibonacci.push(secFibonacci[i - 1] + secFibonacci[i - 2]);
  }
  return secFibonacci;
}

// Palíndromo
function es_palindromo(str) {
  // Reemplazamos cualquier caracter que no sea una letra mayuscula (A-Z)
  //                                            una letra minuscula (a-z)
  //                                            un numero (0-9)
  // Por un caracter vacio. De esta forma obtenemos un string concatenado limpio sin espacios, comas y puntos.
  // Y en minusculas.
  let strLimpio = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let strReverso = strLimpio.split("").reverse().join("");
  return strLimpio === strReverso;
}

// Números Primos
function numeros_primos(n) {
  if (n < 2) return [];

  let primos = [];
  for (let i = 2; i <= n; i++) {
    let esPrimo = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        esPrimo = false;
        break;
      }
    }
    if (esPrimo) primos.push(i);
  }
  return primos;
}

// Ordenamiento de Burbuja
function ordenamiento_burbuja(arr) {
  let n = arr.length;
  let intercambiado;
  do {
    intercambiado = false;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
        intercambiado = true;
      }
    }
    n--;
  } while (intercambiado);
  return arr;
}

// Búsqueda Binaria
function busqueda_binaria(arr, objetivo) {
  let izquierda = 0;
  let derecha = arr.length - 1;

  while (izquierda <= derecha) {
    let medio = Math.floor((izquierda + derecha) / 2);

    if (arr[medio] === objetivo) return medio;
    if (arr[medio] < objetivo) izquierda = medio + 1;
    else derecha = medio - 1;
  }

  return -1;
}

// EJEMPLOS DE USO:

// Fibonacci
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacci(15)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]

// Palíndromo
console.log(es_palindromo("Anita lava la tina")); // true
console.log(es_palindromo("No es un palíndromo")); // false

// Números Primos
console.log(numeros_primos(10)); // [2, 3, 5, 7]
console.log(numeros_primos(30)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
console.log(numeros_primos(1)); // []

// Ordenamiento de Burbuja
console.log(ordenamiento_burbuja([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(ordenamiento_burbuja([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]
console.log(ordenamiento_burbuja([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5] (ya está ordenado)

// Búsqueda Binaria
console.log(busqueda_binaria([1, 3, 5, 7, 9, 11], 7)); // 3
console.log(busqueda_binaria([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // 9
console.log(busqueda_binaria([2, 4, 6, 8, 10, 12, 14], 5)); // -1 (no encontrado)
console.log(busqueda_binaria([], 1)); // -1 (lista vacía)
