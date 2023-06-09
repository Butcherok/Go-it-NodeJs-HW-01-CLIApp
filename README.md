# Go-it-NodeJs-HW-01-CLIApp | Основи Node.js

## Посилання на скріншоти результатів виконання команд

- Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table) [GetList](https://ibb.co/gJWv4XL)

- Отримуємо контакт по id [GetById](https://ibb.co/GkQQZ2r)

- Додаємо контакт [Add](https://ibb.co/zrPhXtk)
    
- Видаляємо контакт [Remove](https://ibb.co/mbmYwTP)

# Технічне завдання домашньої роботи 

## Крок 1

- Ініціалізується `npm` в проекті
- В корені проекту створи файл `index.js`
- Постав пакет [nodemon](https://www.npmjs.com/package/nodemon) як залежність розробки (devDependencies)
- В файлі `package.json` додай "скрипти" для запуску `index.js`
  - Скрипт `start` який запускає `index.js` за допомогою `node`
  - Скрипт `dev` який запускає `index.js` за допомогою `nodemon`

## Крок 2

У корені проекту створи папку `db`. Для зберігання контактів завантаж і використовуй файл `contacts.json`, поклавши його в папку `db`.

У корені проекту створи файл `contacts.js`.

- Зроби імпорт модулів `fs` і path для роботи з файловою системою
- Створи змінну `contactsPath` і запиши в неї шлях до файлу [contacts.json](https://downgit.github.io/#/home?url=https:%2F%2Fgithub.com%2Fgoitacademy%2Fnodejs-homework%2Fblob%2Fmaster%2Fhomework-01%2Fcontacts.json). Для складання шляху використовуй методи модуля `path`.
- Додай функції для роботи з колекцією контактів. У функціях використовуй модуль `fs` та його методи `readFile()` і `writeFile()`
- Зроби експорт створених функцій через `module.exports`

```javascript
/*
 * Розкоментуйте і запиши значення
 * const contactsPath = ;
 */

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}
```

## Крок 3

Зроби імпорт модуля `contacts.js` в файлі `index.js` та перевір працездатність функції для роботи з контактами.

## Крок 4

В файлі `index.js` імпортується пакет yargs для зручного парса аргументів командного рядка. Використовуй готову функцію `invokeAction()` яка отримує тип виконуваної дії і необхідні аргументи. Функція викликає відповідний метод з файлу `contacts.js` передаючи йому необхідні аргументи.

```javascript
// index.js
const argv = require("yargs").argv;

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
```

Так само, ви можете використовувати модуль [commander](https://www.npmjs.com/package/commander) для парсинга аргументів командного рядка. Це більш популярна альтернатива модуля `yargs`

```javascript
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
```

## Крок 5

Запусти команди в терміналі і зроби окремий скріншот результату виконання кожної команди.

```console
# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js -a list

# Отримуємо контакт по id
node index.js -action get -id 5
 
# Додаємо контакт
node index.js -a add -name Kolino -email kolino@email.com -phone 044-322-22-22

# Видаляємо контакт
node index.js -action remove -id 13
```

## Крок 6 - Здача домашнього завдання.

Скріншоти виконання команд, можна залити на будь-який безкоштовний хмарний сервіс зберігання картинок (Приклад: [monosnap](https://monosnap.com/), [imgbb.com](https://imgbb.com/)) і відповідні посилання необхідно додати в файл `README.md`. Створіть цей файл в корені проекту.

### Критерії прийому

- Створено репозиторій з домашнім завданням — `CLI додаток`
- Код відповідає технічному завданню проекту
- При виконанні коду не виникає необроблених помилок
- Назва змінних, властивостей і методів починається з малої літери і записуються в нотації `CamelCase`. Використовуються англійські іменники
- Назва функції або методу містить дієслово
- У коді немає закоментованих ділянок коду
- Проект коректно працює з актуальною `LTS-версією Node`
