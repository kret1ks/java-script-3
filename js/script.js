// Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.

let result = 5+5 + '5'
console.log(result);


//Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. Результат виведіть в консоль.

let email = "bekerskijnazar9@gmail.com"
let checkGmail = email.includes("@")
let totalLenght = email.length;

console.log(checkGmail);
console.log(totalLenght);


//Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.

let a = "My"
let b = "name"
let c = "is"

let fullName = a +" "+ b +" "+ c;
fullName += " Viktor"
console.log(fullName);

// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»

let userName = "Назар";
let payment = 300;

alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);

