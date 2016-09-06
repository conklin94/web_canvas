function calculatePrimes() {
  var startNum = document.getElementById("primes").Start.value;
  var endNum = document.getElementById("primes").End.value;
  var array = [];
  var primes = [];
  var size = 0;
  if (endNum > startNum && endNum < 10001) {
    for (var i = 2; i < endNum; i++) {
      if (array.includes(i)) {
        ;
      } else {
        primes.push(i);
        size += 1;
        for (var j = i; j < endNum; j += i) {
          array.push(j);
        }
      }
    }
    document.getElementById("pPrimes").innerHTML = "Primes: ";
    for (var i = 0; i < size; i++) {
      if (primes[i] >= startNum) {
        document.getElementById("pPrimes").innerHTML += primes[i];
        document.getElementById("pPrimes").innerHTML += " ";
      }
    }
  } else {
    document.getElementById("pPrimes").innerHTML = "Starting number must be less than ending number and ending number must be less than 10001"
  }
}

function fibonacci() {
  var endNum = document.getElementById("fibonacci").Upper.value;
  var number = 1;
  var number1 = 1;
  document.getElementById("pFibonacci").innerHTML = number;
  document.getElementById("pFibonacci").innerHTML += " ";
  while (number1 < endNum) {
    document.getElementById("pFibonacci").innerHTML += number1;
    document.getElementById("pFibonacci").innerHTML += " ";
    number1 = number + number1;
    number = number1 - number;
  }
}

function primeFactorization() {
  var number = document.getElementById("primeFactorization").Number.value;
  document.getElementById("pPrimeFactorization").innerHTML = number;
  document.getElementById("pPrimeFactorization").innerHTML += ": ";
  var startNum = 2
  var endNum = number
  var array = [];
  var primes = [];
  var size = 0;
  if (number > 10000) {
    document.getElementById("pPrimeFactorization").innerHTML = "Number too large"
  } else {
    for (var i = 2; i < endNum; i++) {
      if (array.includes(i)) {
        ;
      } else {
        primes.push(i);
        size += 1;
        for (var j = i; j < endNum; j += i) {
          array.push(j);
        }
      }
    }
    var index = 0;
    while (number > 1) {
      if (number % primes[index] == 0) {
        number /= primes[index];
        document.getElementById("pPrimeFactorization").innerHTML += primes[index];
        if (number != 1) {
          document.getElementById("pPrimeFactorization").innerHTML += " x ";
        } else {
          document.getElementById("pPrimeFactorization").innerHTML += "\n"
        }
      } else {
        index += 1;
      }
    }
  }
}