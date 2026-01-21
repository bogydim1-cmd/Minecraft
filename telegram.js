const tg = window.Telegram.WebApp;

// Сообщаем Telegram, что приложение готово
tg.ready();

// Расширяем на весь экран
tg.expand();

// Можно получить данные пользователя
const user = tg.initDataUnsafe?.user;

if (user) {
  console.log("Игрок:", user.username);
}
