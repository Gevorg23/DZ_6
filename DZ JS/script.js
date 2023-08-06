
//Задание 1
//Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function cubePower(num) {
    return num ** 3;
  }
  
  const number1 = 2;
  const number2 = 3;
  
  const result1 = cubePower(number1);
  const result2 = cubePower(number2);
  
  console.log(`${number1} в кубе равно: ${result1}`);
  console.log(`${number2} в кубе равно: ${result2}`);

// Задание 2 Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
//Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
  
function calculateSalary() {
    const input = prompt("Введите вашу заработную плату:");
    const salary = parseFloat(input);

    if (isNaN(salary)) {
        console.log("Значение задано неверно. Пожалуйста, введите число.");
    } else {
        const taxedSalary = salary - salary * 0.13;
        console.log("Размер заработной платы за вычетом налогов равен " + taxedSalary);
    }
}

calculateSalary();



// Задание 3 Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел


function findMaxNumber(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }
  
  const number_1 = parseFloat(prompt("Введите первое число:"));
  const number_2 = parseFloat(prompt("Введите второе число:"));
  const number_3 = parseFloat(prompt("Введите третье число:"));
  
  const maxNumber = findMaxNumber(number1, number2, number3);
  
  console.log("Максимальное значение: " + maxNumber);

  // Задание 4

//   function sum(a, b) {
//     return a + b;
//   }
  
//   function difference(a, b) {
//     return a > b ? a - b : b - a;
//   }
  
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   function divide(a, b) {
//     return b !== 0 ? a / b : 0;
//   }
  
//   // Примеры использования функций:
//   console.log("Сумма: " + sum(2, 6)); // Выведет 8
//   console.log("Разность: " + difference(6, 2)); // Выведет 4
//   console.log("Умножение: " + multiply(2, 6)); // Выведет 12
//   console.log("Деление: " + divide(6, 2)); // Выведет 3
//   console.log("Деление на ноль: " + divide(6, 0)); // Выведет 0 
  