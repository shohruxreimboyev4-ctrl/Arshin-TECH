// 1-masala: Sonlar orasidagi max va min
function findMaxMin(n, arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return { max, min };
}
console.log(findMaxMin(5, [3, 7, 1, 9, 4]));
alert("1-masala: Max va Min => " + JSON.stringify(findMaxMin(5, [3, 7, 1, 9, 4])));

// 2-masala: Tub sonni tekshirish
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(17));
alert("2-masala: 17 tubmi? => " + isPrime(17));

// 3-masala: Sonlarni teskari chiqarish
function reverseNumbers(n) {
  let result = "";
  for (let i = n; i >= 1; i--) {
    result += i + " ";
  }
  return result;
}
console.log(reverseNumbers(5));
alert("3-masala: 5 dan 1 gacha => " + reverseNumbers(5));

// 4-masala: Sonning raqamlari yig‘indisi
function digitSum(n) {
  let sum = 0;
  let str = String(n);
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return sum;
}
console.log(digitSum(1234));
alert("4-masala: 1234 raqamlari yig‘indisi => " + digitSum(1234));

// 5-masala: Sonni teskari yozish
function reverseNumber(n) {
  let str = String(n);
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return Number(reversed);
}
console.log(reverseNumber(12345));
alert("5-masala: 12345 teskari => " + reverseNumber(12345));

// 6-masala: Fibonachchi sonlari
function fibonacci(n) {
  let a = 0, b = 1;
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(a);
    let temp = a + b;
    a = b;
    b = temp;
  }
  return result;
}
console.log(fibonacci(7));
alert("6-masala: 7 ta Fibonachchi sonlari => " + fibonacci(7).join(", "));

// 7-masala: Bo‘luvchilar soni
function divisorCount(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }
  return count;
}
console.log(divisorCount(12));
alert("7-masala: 12 ning bo‘luvchilar soni => " + divisorCount(12));
