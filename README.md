**Криптовалютный трекер** — это простое веб-приложение, которое отображает актуальные курсы топ-10 криптовалют. Данные берутся из публичного API [CoinGecko](https://www.coingecko.com/).

## Основные функции

- Отображение списка топ-10 криптовалют с их текущей ценой в USD.
- Показ изменения цены за последние 24 часа.
- Отображение логотипов криптовалют.
- Простой и понятный интерфейс.

## Технологии

- **HTML**: Структура страницы.
- **CSS**: Стилизация элементов.
- **JavaScript**: Работа с API, динамическое создание элементов.
- **CoinGecko API**: Получение данных о криптовалютах.

## Как запустить проект

1. **Склонируй репозиторий:**
   ```bash
   git clone https://github.com/DanilMochalov/TrackerG.git
   cd TrackerG
   ```

2. **Открой проект в браузере:**
   - Просто открой файл `index.html` в любом современном браузере (Chrome, Firefox, Edge и т.д.).

3. **Или запусти через Live Server (если используешь VS Code):**
   - Установи расширение [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
   - Нажми `Ctrl + Shift + P` (или `Cmd + Shift + P` на Mac), выбери `Live Server: Open with Live Server`.
   - Проект откроется в браузере по адресу `http://127.0.0.1:5500`.

## Структура проекта

```
/криптовалютный-трекер
  ├── index.html       # Основной HTML-файл
  ├── styles.css       # Стили для страницы
  ├── script.js        # JavaScript-код для работы с API и DOM
  └── README.md        # Описание проекта
```

## Как это работает

1. При загрузке страницы JavaScript отправляет запрос к API CoinGecko.
2. Полученные данные (топ-10 криптовалют) отображаются на странице в виде списка.
3. Для каждой криптовалюты отображается:
   - Логотип.
   - Название и символ.
   - Текущая цена в USD.
   - Изменение цены за последние 24 часа.

## Пример данных от API

Пример ответа от API CoinGecko:

```json
[
  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "current_price": 94178,
    "price_change_percentage_24h": -1.66728
  },
  {
    "id": "ethereum",
    "symbol": "eth",
    "name": "Ethereum",
    "image": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    "current_price": 2649.03,
    "price_change_percentage_24h": -0.5
  }
]
```

## Возможные улучшения

1. **Добавить поиск:** Поле для поиска криптовалют по названию или символу.
2. **Сортировка:** Возможность сортировки по цене, изменению за 24 часа и т.д.
3. **Пагинация:** Отображение большего количества криптовалют с пагинацией.
4. **Детальная информация:** При клике на криптовалюту открывать подробную информацию (график, рыночная капитализация и т.д.).
5. **Адаптивный дизайн:** Сделать страницу более удобной для мобильных устройств.

## Лицензия

Этот проект распространяется под лицензией MIT. Подробнее см. в файле [LICENSE](LICENSE).

