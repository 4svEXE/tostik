const token = "5393734533:AAHuVoDZHXyLa5LZ4dqGgHCOQxOnduIVzAI";
const chatId = "-100241230702755555";
// const chatId = "-1002412307027";

export const updateStatistic = async (message: string): Promise<void> => {
  const fullMessage = encodeURIComponent(
    "Дія: " +
      message +
      "\n" +
      `Пристрій: ${navigator.platform} \nБраузер: ${navigator.userAgent}`
  );
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullMessage}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Помилка: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Помилка при відправці повідомлення:", error);
  }
};

const startTime = Date.now();
let scrollHistory = ""; // Змінна для накопичення історії прокрутки

window.onload = () => {
  const loadTime =
    window.performance.timing.domContentLoadedEventEnd -
    window.performance.timing.navigationStart;

  updateStatistic(`Відкрито сайт\nСторінка завантажилася за ${loadTime} мс`);

  document.addEventListener("click", (event: MouseEvent) => {
    const element = event.target as HTMLElement; // Явне приведення типу
    updateStatistic(
      `Клік на елемент: ${element.tagName} з класом: ${
        element.className
      } \nДеталі: ${element?.innerHTML.slice(0, 50) || ''}...`
    );
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      updateStatistic("вкладка прихована або зроблено скріншот");
      const endTime = Date.now();
      const timeSpent = Math.round((endTime - startTime) / 1000);
      updateStatistic(`Користувач був на сторінці ${timeSpent} секунд`);
    }
  });

  window.addEventListener("scroll", () => {
    const scrollPosition = Math.round(
      (window.scrollY / document.body.scrollHeight) * 100
    );
    if (scrollPosition % 10 === 0) {
      scrollHistory += `Прокручено на ${scrollPosition}%\n`; // Додаємо в історію
    }
  });

  // Відправляємо історію прокрутки при вивантаженні сторінки
  window.addEventListener("beforeunload", () => {
    const endTime = Date.now();
    const timeSpent = Math.round((endTime - startTime) / 1000);
    scrollHistory += `Час перебування на сторінці: ${timeSpent} секунд\n`;

    updateStatistic(`Історія прокрутки:\n${scrollHistory}`);
  });
};
