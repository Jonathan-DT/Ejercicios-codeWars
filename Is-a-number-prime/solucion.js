
function isPrime(num) {
  
    if (num == 0 || num == 1 || num == 4 || num < 0) return false;
      for (let x = 2; x < num / 2; x++) {
        if (num % x == 0) return false;
      }
      // Si no se pudo dividir por ninguno de los de arriba, sí es primo
      return true;
  }