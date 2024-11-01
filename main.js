/*
 * #1
 *
 * Розробити функцію, яка використовує метод reduce масиву для обчислення суми усіх елементів масиву чисел.
 Функція повинна приймати масив чисел та повертати їх суму.
*/

function sumArray(numbers) {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

// Використання функції
const exampleArray = [1, 2, 3, 4, 5];
const sum = sumArray(exampleArray);
console.log('Сума елементів масиву:', sum); // Виведення суми

// У цій функції reduce починає з початкового значення 0 (другий аргумент) 
// і поступово додає кожен елемент масиву до акумулятора. 
// Результат буде сумою всіх елементів.


/*
 * #2
 *
 * Розробити функцію, яка використовує метод map масиву для створення нового масиву, в якому кожен елемент буде вдвічі більшим за елементи вхідного масиву чисел.
*/

function doubleArrayElements(numbers) {
  return numbers.map(element => element * 2);
}

// Використання функції
const exampleArray1 = [1, 2, 3, 4, 5];
const doubledArray = doubleArrayElements(exampleArray1);
console.log('Подвоєні елементи масиву:', doubledArray); // Виведення подвоєних елементів

// У цій функції map створює новий масив, 
// застосовуючи передану функцію до кожного елемента вхідного масиву, подвоюючи його значення.



/*
 * #3
 *
 * Розробити клас `SkillsManager`, що відповідає за управління списком навичок. Клас повинен включати:
 * 1. Конструктор:
 * - Ініціалізує порожній масив `skills`, який буде використовуватися для зберігання навичок.
 * 2. Метод `addSkill(skill)`:
 * - Приймає один аргумент `skill` (рядок).
 * - Перевіряє, чи аргумент є рядком і має мінімум два символи.
 * - Якщо умови виконані, додає `skill` до масиву `skills` і повертає додану навичку.
 * - Якщо умови не виконані (навичка не є рядком або має менше двох символів), повертає `null`.
 * 3. Метод `getAllSkills()`:
 *   - Повертає поточний масив усіх навичок, збережених у класі.
 *
 * Загальні вимоги:
 * - Клас має бути модульним і здатним до використання в інших частинах програми, тому він повинен бути експортований.
 * - Клас має забезпечувати легке управління навичками, включаючи додавання нових навичок та отримання списку всіх наявних навичок.
 * - Код має бути написаний з урахуванням принципів чистого коду, забезпечуючи читабельність та легкість підтримки.
*/

class SkillsManager {
  constructor() {
    this.skills = []; // Ініціалізує порожній масив для навичок
  }

  addSkill(skill) {
    // Перевірка, чи аргумент є рядком і має мінімум два символи
    if (typeof skill === 'string' && skill.length >= 2) {
      this.skills.push(skill); // Додає навичку до масиву
      return skill; // Повертає додану навичку
    }
    return null; // Повертає null, якщо умови не виконані
  }

  getAllSkills() {
    return this.skills; // Повертає масив усіх навичок
  }
}

// Використання класу
const skillsManager = new SkillsManager();

console.log(skillsManager.addSkill('JavaScript')); // 'JavaScript'
console.log(skillsManager.addSkill('CSS')); // 'CSS'
console.log(skillsManager.getAllSkills()); // ['JavaScript', 'CSS']

// Конструктор: Ініціалізує порожній масив skills.
// Метод addSkill(skill): Перевіряє, чи skill є рядком з мінімум двома символами, і додає його до масиву. 
// Якщо умови не виконані, повертає null.
// Метод getAllSkills(): Повертає масив усіх навичок.
// Цей клас може бути легко експортований для використання в інших частинах програми.




/*
 * #4
 * Задача: Калькулятор дат.
 * Завдання: Створити модуль на JavaScript, який імплементує функцію-конструктор DateCalculator для створення об'єктів, здатних керувати датами. Калькулятор дат має надавати такі можливості:
 * Додавання днів: Метод addDays приймає кількість днів як аргумент і додає цю кількість до поточної дати об'єкта.
 * Віднімання днів: Метод subtractDays приймає кількість днів як аргумент і віднімає цю кількість від поточної дати об'єкта.
 * Отримання результату: Метод getResult повертає поточну дату об'єкта у форматі "YYYY-MM-DD".
 *
 * Критерії перевірки:
 * В модулі має бути визначена функція-конструктор DateCalculator, яка ініціалізує об'єкт з початковою датою.
 * Мають бути реалізовані та доступні методи addDays, subtractDays, та getResult для екземплярів DateCalculator.
 * Об'єкти DateCalculator мають створюватися за допомогою ключового слова new і використання функції-конструктора.
 */

function DateCalculator(initialDate) {
  // Перетворюємо рядок дати на об'єкт Date
  this.currentDate = new Date(initialDate);

  this.addDays = function(days) {
    this.currentDate.setDate(this.currentDate.getDate() + days);
  };

  this.subtractDays = function(days) {
    this.currentDate.setDate(this.currentDate.getDate() - days);
  };

  this.getResult = function() {
    // Форматуємо дату у "YYYY-MM-DD"
    const year = this.currentDate.getFullYear();
    const month = String(this.currentDate.getMonth() + 1).padStart(2, '0'); // Місяці з 0
    const day = String(this.currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
}

// Демонстрація використання
const dateCalculator = new DateCalculator('2023-01-01');
dateCalculator.addDays(5);
console.log(dateCalculator.getResult()); // Виводить "2023-01-06"

dateCalculator.subtractDays(3);
console.log(dateCalculator.getResult()); // Виводить "2023-01-03"

// Експорт модуля
export { doubleArrayElements, sumArray, SkillsManager, DateCalculator };

// Конструктор DateCalculator: Ініціалізує об'єкт з початковою датою, перетворюючи рядок дати на об'єкт Date.
// Метод addDays(days): Додає задану кількість днів до поточної дати.
// Метод subtractDays(days): Віднімає задану кількість днів від поточної дати.
// Метод getResult(): Повертає поточну дату у форматі "YYYY-MM-DD".
// Цей модуль забезпечує зручне управління датами, а також може бути легко експортований для використання в інших частинах програми.



