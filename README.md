# SimpleOne API Documentation для VS Code


<div align="center">
  <img src="./images/vova.png" width="350" height="350" alt="Спонсор проекта">
  <br>
  <span><b>🌟🌟🌟Спонсор проекта Вова🌟🌟🌟</b></span>
  <br/>
</div>

Полное справочное руководство по API платформы SimpleOne для разработчиков.

## 📖 О расширении

Это расширение предоставляет исчерпывающую документацию по **клиентскому** и **серверному** API платформы SimpleOne версии 1.31.0+.

Сделано по приколу

### Возможности

* ✅ **Сниппеты кода** для всех классов API (150+ сниппетов)
* ✅ **IntelliSense** с подробным описанием методов и параметров
* ✅ **TypeScript определения** (.d.ts файлы) для автодополнения
* ✅ **Примеры использования** для каждого класса
* ✅ **Быстрый доступ** к документации через Command Palette
* ✅ **Поддержка JavaScript**
* ✅ **Автоматическая установка** типов в проект
* ✅ **Полное покрытие API** — все 50 классов платформы
* ✅ **Simple-теги для HTML** — 43 тега с подсказками и сниппетами

## 📚 Классы API

### Клиентское API (15 классов)

| Класс | Глобальный объект | Назначение |
|-------|------------------|------------|
| **s_i18n** | `s_i18n` | Переводы и локализация |
| **SimpleAjax** | — | Вызов серверного кода |
| **SimpleEventBus** | `SimpleEventBus` | Шина событий |
| **SimpleForm** | `s_form` | Управление формами |
| **SimpleGo** | `s_go` | URL-переходы |
| **SimpleList** | `s_list` | Управление списками |
| **SimpleMenu** | `SimpleMenu` | Меню (Избранное/Навигатор) |
| **SimpleModal** | `s_modal` | Модальные окна |
| **SimplePreference** | `s_pref` | Настройки пользователя |
| **SimpleRecord** | — | Работа с БД (клиент) |
| **SimpleStorage** | `SimpleStorage` | Хранилище ключ-значение |
| **SimpleSystem** | `ss` | Системные префиксы |
| **SimpleUser** | `s_user` | Информация о пользователе |
| **SimpleWidget** | `s_widget` | Настройка виджетов |
| **SimpleWidgets** | `s_widgets` | Взаимодействие с виджетами |

### Серверное API (35 классов)

| Класс | Назначение |
|-------|------------|
| **ExportVariables** | Глобальные функции для серверных скриптов (alert, echo, print, sleep...) |
| **SimpleAttachment** | Работа с вложениями (файлы) |
| **SimpleAttachmentService** | Сбор вложений с удалённого экземпляра |
| **SimpleCache** | Сброс системного кэша |
| **SimpleDateTime** | Работа с датой и временем |
| **SimpleDelegation** | Делегирование полномочий |
| **SimpleDuration** | Продолжительность времени |
| **SimpleEmailOutbound** | Исходящая электронная почта |
| **SimpleEmailTemplate** | Шаблоны почтовых уведомлений |
| **SimpleEngine** | Механизмы платформы |
| **SimpleExternalRabbitMQ** | Отправка сообщений в RabbitMQ |
| **SimpleImage** | Работа с изображениями |
| **SimpleImport** | Импорт данных (CSV, JSON, XML, LDAP) |
| **SimpleLogArchive** | Архивирование журналов |
| **SimpleMail** | Тестирование почтового сервера |
| **SimpleMessage** | Локализация сообщений |
| **SimpleRecordDeletionLog** | Журнал удаления записей |
| **SimpleRecord** | Работа с записями БД |
| **SimpleRecordSecure** | Работа с записями с учётом ACL |
| **SimpleRestRequest** | Настройка REST-запроса |
| **SimpleRestResponse** | Обработка REST-ответа |
| **SimpleSchedule** | Календари и рабочее время |
| **SimpleSearch** | Полнотекстовый поиск |
| **SimpleSession** | Информация о сеансе |
| **SimpleSystem** (ss) | Системная информация, логирование |
| **SimpleTable** | Информация о таблицах |
| **SimpleTemplate** | Шаблоны данных |
| **SimpleTemplatePrinter** | Печать в почтовых сообщениях |
| **SimpleTime** | Работа со временем |
| **SimpleUser** (su) | Настройки пользователя |
| **SimpleUserCriteria** | Пользовательские критерии |
| **SimpleVcs** | Контроль версий |
| **SimpleWebService** (sws) | REST-запросы |
| **SimpleWorkflow** | Рабочие процессы |
| **SimpleWysiwyg** | Конвертация HTML ↔ WYSIWYG-JSON |

## 🔧 Настройки

Добавьте в `settings.json` :

```json
{
  "simpleoneApiDocs.enableClientApiSnippets": true,
  "simpleoneApiDocs.enableServerApiSnippets": true,
  "simpleoneApiDocs.enableHtmlTags": true,
  "javascript.validate.enable": true,
  "javascript.suggest.completeFunctionCalls": true,
  "javascript.suggest.showMethodCompletions": true,
  "typescript.suggest.completeFunctionCalls": true,
  "editor.quickSuggestions": {
    "strings": true
  },
  "html.customData": [
    "./.vscode-simpleone/schemas/simpleone-html.html-data.json"
  ]
}
```

## 📖 Команды

| Команда | Описание |
|---------|----------|
| **SimpleOne: Открыть документацию клиентского API** | Открывает официальную документацию по клиентскому API |
| **SimpleOne: Открыть документацию серверного API** | Открывает официальную документацию по серверному API |
| **SimpleOne: Установить типы в проект** | Копирует файлы типов и создаёт jsconfig.json |
| **SimpleOne: Добавить директивы типов** | Добавляет `/// <reference>` в текущий файл |

## 🔗 Полезные ссылки

* [Официальная документация SimpleOne](https://docs.simpleone.ru/)
* [Developer API Documentation](https://docs.simpleone.ru/ru/platform/developer-help/developer-api/)
* [Клиентское API](https://docs.simpleone.ru/ru/platform/developer-help/developer-api/client-side-api/)
* [Серверное API](https://docs.simpleone.ru/ru/platform/developer-help/developer-api/server-side-api/)
* [Simple-теги (Widget API)](https://docs.simpleone.ru/ru/platform/developer-help/developer-api/widget-api/simpletags/)

## 🏷️ Simple-теги для HTML

Расширение предоставляет IntelliSense подсказки для **Simple-тегов**, используемых в виджетах SimpleOne.

### Общие Simple-теги (31 тег)

| Тег | Описание |
|-----|----------|
| `<activityFeed>` | Лента активности на формах |
| `<attachment>` | Виджет вложений |
| `<button>` | Кнопка с различными стилями |
| `<checkbox>` | Поле-флажок |
| `<codemirror>` | Текстовое поле для кода |
| `<conditions>` | Конструктор условий |
| `<date>` | Поле ввода даты |
| `<datetime>` | Поле ввода даты и времени |
| `<daysofweek>` | Выбор дня недели |
| `<duration>` | Отображение продолжительности |
| `<durationinput>` | Ввод продолжительности |
| `<Form>` | Форма записей |
| `<hint>` | Всплывающая подсказка |
| `<htmlEditor>` | HTML-редактор |
| `<LabelTag>` | Текстовая метка |
| `<list>` | Ссылочное поле |
| `<modal>` | Модальное окно |
| `<multiselect>` | Множественный выбор |
| `<recordPopup>` | Всплывающее окно записи |
| `<reference>` | Поле ссылки на таблицу |
| `<rem>` | Атрибуты расширенной записи |
| `<remform>` | Форма с атрибутами REM |
| `<report>` | Виджет отчёта |
| `<sectionMessage>` | Сообщение в секции |
| `<select>` | Выпадающий список |
| `<string>` | Текстовое поле |
| `<textarea>` | Многострочное текстовое поле |
| `<toggle>` | Переключатель |
| `<tooltip>` | Подсказка по клику |
| `<wysiwygEditor>` | WYSIWYG-редактор |
| `<recordList>` | Списочное представление |
| `<IndicatePresence>` | Индикация присутствия |

### Портальные Simple-теги (12 тегов)

| Тег | Описание |
|-----|----------|
| `<authFull>` | Пользовательская авторизация |
| `<authHeader>` | Имя и аватар пользователя |
| `<breadcrumbs>` | Навигационная цепочка |
| `<card>` | Карточка информации |
| `<category>` | Категории портала |
| `<categoryFlat>` | Категории объектов |
| `<dropdownMenu>` | Выпадающее меню |
| `<listItems>` | Список записей |
| `<previewList>` | Настраиваемый список |
| `<results>` | Результаты поиска |
| `<search>` | Поиск |
| `<sideMenu>` | Боковое меню |

### Пример использования Simple-тегов

```html
<!-- Форма с полями -->
<Form tableName="incident" sysid="12345" uiActions="true"></Form>

<!-- Текстовые поля -->
<string model="data.firstname" label="Имя" placeholder="Введите имя"></string>
<textarea model="data.description" label="Описание"></textarea>

<!-- Выпадающий список -->
<select model="data.priority" label="Приоритет" options='[{"database_value":"1","display_value":"Высокий"}]'></select>

<!-- Кнопка -->
<button buttonType="primary" event-click="saveRecord">Сохранить</button>

<!-- Чекбокс -->
<checkbox model="data.active" label="Активно"></checkbox>

<!-- Дата -->
<date model="data.dueDate" label="Срок" isMandatory="true"></date>
```

### Автодополнение в HTML

Просто начните вводить `<` и название тега:

```html
<but → <button buttonType="primary" event-click="">
    <stri → <string model="data." label="">
        </string>
        <sele → <select model="data." options='[]'></select>
```

При вводе атрибутов появляются подсказки с описанием и допустимыми значениями.

### Сниппеты для Simple-тегов

Для быстрой вставки тегов используйте **сниппеты** (начните вводить префикс и нажмите Tab):

| Сниппет | Префикс | Описание |
|---------|---------|----------|
| **Кнопка** | `s-button` | Кнопка с обработчиком нажатия |
| **Кнопка с иконкой** | `s-button-icon` | Кнопка с SVG-иконкой |
| **Текстовое поле** | `s-string` | Поле ввода текста |
| **Обязательное поле** | `s-string-m` | Обязательное текстовое поле |
| **Многострочное поле** | `s-textarea` | Поле для многострочного текста |
| **Флажок** | `s-checkbox` | Чекбокс |
| **Выпадающий список** | `s-select` | Select с опциями |
| **Переключатели** | `s-select-radio` | Radio buttons |
| **Дата** | `s-date` | Поле даты |
| **Дата и время** | `s-datetime` | Поле даты и времени |
| **Форма** | `s-form` | Форма записей |
| **Форма создания** | `s-form-create` | Форма создания записи |
| **Ссылочное поле** | `s-reference` | Reference поле |
| **Список** | `s-list` | List поле |
| **Множественный выбор** | `s-multiselect` | Multiselect |
| **Модальное окно** | `s-modal` | Модальное окно |
| **Список записей** | `s-recordlist` | Список записей таблицы |
| **Вложения** | `s-attachment` | Виджет вложений |
| **Лента активности** | `s-activityfeed` | Лента активности |
| **Поле для кода** | `s-codemirror` | CodeMirror редактор |
| **Конструктор условий** | `s-conditions` | Conditions builder |
| **Ввод продолжительности** | `s-durationinput` | Duration input |
| **HTML-редактор** | `s-htmleditor` | HTML редактор |
| **Текстовая метка** | `s-labeltag` | Label |
| **WYSIWYG-редактор** | `s-wysiwygeditor` | WYSIWYG редактор |
| **Переключатель** | `s-toggle` | Toggle |
| **Подсказка** | `s-hint` | Hint при наведении |
| **Подсказка по клику** | `s-tooltip` | Tooltip |
| **Сообщение** | `s-sectionmessage` | Сообщение в секции |
| **Сообщение об ошибке** | `s-sectionmessage-error` | Error message |
| **Сообщение об успехе** | `s-sectionmessage-success` | Success message |
| **Предупреждение** | `s-sectionmessage-warning` | Warning message |
| **Отчёт** | `s-report` | Виджет отчёта |
| **REM атрибуты** | `s-rem` | REM атрибуты |
| **REM форма** | `s-remform` | REM форма |
| **Индикация присутствия** | `s-indicatepresence` | Indicate Presence |
| **Поиск** | `s-search` | Поиск |
| **Результаты поиска** | `s-results` | Результаты |
| **Навигация** | `s-breadcrumbs` | Breadcrumbs |
| **Боковое меню** | `s-sidemenu` | Side menu |
| **Выпадающее меню** | `s-dropdownmenu` | Dropdown menu |
| **Авторизация** | `s-authfull` | Страница авторизации |
| **Шапка профиля** | `s-authheader` | Auth header |
| **Карточка** | `s-card` | Карточка |
| **Категории** | `s-category` | Категории портала |
| **Категории (плоский)** | `s-categoryflat` | Категории flat |
| **Список элементов** | `s-listitems` | List items |
| **Предпросмотр списка** | `s-previewlist` | Preview list |
| **Дни недели** | `s-daysofweek` | Days of week |
| **Продолжительность** | `s-duration` | Duration |
| **Всплывающее окно** | `s-recordpopup` | Record popup |
| **Полный шаблон формы** | `s-form-full` | Полный шаблон формы |
| **Поле с подсказкой** | `s-string-hint` | Text field с help/hint |
| **Числовое поле** | `s-string-number` | Числовое поле |
| **Поле пароля** | `s-string-password` | Password field |
| **Дата с диапазоном** | `s-date-range` | Date range |
| **Reference с условием** | `s-reference-condition` | Reference с condition |
| **Select с событием** | `s-select-change` | Select с event-change |
| **Вторичная кнопка** | `s-button-secondary` | Secondary button |
| **Кнопка удаления** | `s-button-destructive` | Destructive button |
| **Кнопка согласования** | `s-button-approve` | Approve button |

#### Пример использования сниппета

1. Введите `s-button` в HTML-файле
2. Нажмите **Tab**
3. Получите:

```html
<button buttonType="primary" event-click="handleClick">Текст кнопки</button>
```

---

# Полная инструкция

## 🚀 Быстрый старт

### Шаг 1: Установка расширения

```bash
code --install-extension simpleone-api-docs-1.2.0.vsix
```

Или через VS Code:

1. Откройте VS Code
2. **Extensions** (Ctrl+Shift+X / Cmd+Shift+X)
3. Нажмите `...` → **Install from VSIX...**
4. Выберите файл `simpleone-api-docs-1.2.0.vsix`

---

### Шаг 2: Установка типов в проект

#### Автоматически (из VS Code) — РЕКОМЕНДУЕТСЯ

1. Откройте проект в VS Code
2. Нажмите **Cmd+Shift+P** (Mac) или **Ctrl+Shift+P** (Windows)
3. Введите: **SimpleOne: Установить типы в проект**
4. Нажмите Enter

Команда автоматически:

* Скопирует файлы типов в `.vscode-simpleone/types/`
* Создаст `jsconfig.json` с правильными настройками
* Предложит перезапустить TypeScript Server

---

### Шаг 3: Добавьте директиву в файл

**В начало каждого JavaScript файла добавьте одну из директив:**

#### Для серверного API (Business Rules, Script Includes)

```javascript
//@ts-check
/// <reference types="s1-server" />

// Ваш код
const task = new SimpleRecord('task');
task.get('163663310116371174');
ss.info('Задача: ' + task.number);
```

#### Для клиентского API (Client Scripts, UI Policies)

```javascript
//@ts-check
/// <reference types="s1-client" />

// Ваш код
await s_form.setValue('state', '7');
s_form.addInfoMessage('Сохранено', 3000);
```

> ⚠️ **Важно:** Используйте только **одну** директиву в файле! Не подключайте оба API одновременно.

---

## 📋 Доступные команды

| Команда | Описание |
|---------|----------|
| **SimpleOne: Установить типы в проект** | Копирует файлы типов и создаёт jsconfig.json |
| **SimpleOne: Добавить директивы типов** | Добавляет `/// <reference>` в текущий файл |
| **SimpleOne: Открыть документацию клиентского API** | Открывает браузер с документацией |
| **SimpleOne: Открыть документацию серверного API** | Открывает браузер с документацией |

---

## 💡 Примеры кода

### Серверное API

#### Пример 1: Создание записи

```javascript
//@ts-check
/// <reference types="s1-server" />

const incident = new SimpleRecord('incident');
incident.initialize();
incident.short_description = 'Проблема с компьютером';
incident.description = 'Пользователь не может включить ПК';
incident.caller_id = ss.getUserID();
incident.priority = '3';

const sysId = incident.insert();
ss.info('Инцидент создан: ' + sysId);
```

#### Пример 2: Запрос с фильтрацией

```javascript
//@ts-check
/// <reference types="s1-server" />

const tasks = new SimpleRecord('task');
tasks.addQuery('active', true);
tasks.addQuery('priority', '>=', '3');
tasks.addQuery('state', '!=', 'closed');
tasks.orderByDesc('sys_created_at');
tasks.setLimit(10);
tasks.query();

while (tasks.next()) {
    ss.info(tasks.number + ': ' + tasks.subject);
}
```

#### Пример 3: REST запрос

```javascript
//@ts-check
/// <reference types="s1-server" />

const request = sws.restRequestV1();
request.setRequestUrl('https://api.example.com/data');
request.setRequestMethod('GET');
request.setRequestHeader('Accept', 'application/json');

const response = request.execute();
if (response.getStatusCode() === '200') {
    const data = JSON.parse(response.getBody());
    ss.info('Данные:', data);
}
```

---

### Клиентское API

#### Пример 1: Работа с формой

```javascript
//@ts-check
/// <reference types="s1-client" />

// Установка значения поля
await s_form.setValue('state', '7');

// Получение значения
const state = s_form.getValue('state');

// Проверка, новая ли запись
if (s_form.isNewRecord()) {
    s_form.addInfoMessage('Создание новой записи', 3000);
}

// Сохранение
const sysId = await s_form.save();
s_form.addSuccessMessage('Запись сохранена: ' + sysId, 5000);
```

#### Пример 2: Работа с SimpleRecord

```javascript
//@ts-check
/// <reference types="s1-client" />

const user = new SimpleRecord('user');
user.addQuery('active', true);
user.addQuery('department', 'like', 'IT');
user.setLimit(5);

user.query(() => {
    while (user.next()) {
        ss.info('Пользователь: ' + user.getDisplayValue('user_name'));
    }
});
```

#### Пример 3: События

```javascript
//@ts-check
/// <reference types="s1-client" />

// Подписка на событие
SimpleEventBus.on('form.saved', (data) => {
    s_form.addSuccessMessage('Данные сохранены', 3000);
});

// Отправка события
SimpleEventBus.emit('data.updated', {
    tableName: s_form.getTableName(),
    sysId: s_form.getUniqueValue()
});
```

---

## 🔧 IntelliSense

### Автодополнение

Просто начните вводить:

```javascript
// Серверное API
ss. // Покажет: info, error, warning, debug...
new SimpleRec // Покажет: SimpleRecord

// Клиентское API
s_form. // Покажет: setValue, getValue, addInfoMessage...
s_go. // Покажет: open, openRecord, openList...
```

### Подсказки по параметрам

При вводе функции:

```javascript
task.addQuery('field', 'operator', value);
//        ↑ подсказка: field - Поле
//               ↑ подсказка: operator - Оператор
//                      ↑ подсказка: value - Значение
```

### Переход к определению

Нажмите **F12** на методе или классе:

```javascript
const task = new SimpleRecord('task');
//           ^ F12 → перейдёт к определению SimpleRecord
```

---

## ⚠️ Устранение проблем

### IntelliSense не работает

1. **Перезапустите TypeScript Server:**
   * **Cmd+Shift+P** (Mac) или **Ctrl+Shift+P** (Windows)
   * Введите: **TypeScript: Restart TS Server**

2. **Проверьте jsconfig.json:**

```bash
   cat jsconfig.json
   ```

   Должен содержать:

```json
   {
     "compilerOptions": {
       "typeRoots": ["./.vscode-simpleone/types"]
     }
   }
   ```

1. **Проверьте файлы типов:**

```bash
   ls -la .vscode-simpleone/types/
   ```

   Должны быть:

* `simpleone-client.d.ts`

* `simpleone-server.d.ts`

* `s1-client.d.ts`

* `s1-server.d.ts`

1. **Проверьте директиву в файле:**

```javascript
   //@ts-check
   /// <reference types="s1-server" />  // или s1-client
```

### Ошибка: Cannot find name 'SimpleRecord'

1. Убедитесь, что `jsconfig.json` существует в корне проекта
2. Проверьте, что типы установлены в `.vscode-simpleone/types/`
3. Перезапустите TypeScript Server

### Предупреждение: Отсутствуют директивы типов

Расширение автоматически обнаруживает использование SimpleOne API и предлагает добавить директиву.

**Решение:**

* **Cmd+Shift+P** → **SimpleOne: Добавить директивы типов**
* Выберите нужное API (серверное или клиентское)

---

## 📁 Структура проекта

```
my-project/
├── .vscode-simpleone/
│   └── types/
│       ├── simpleone-client.d.ts    # Определения клиентского API
│       ├── simpleone-server.d.ts    # Определения серверного API
│       ├── s1-client.d.ts           # Директива клиентского API
│       └── s1-server.d.ts           # Директива серверного API
├── jsconfig.json                    # Настройка TypeScript
├── src/
│   ├── server-scripts/
│   │   ├── business-rule.js         // @ts-check + /// <reference types="s1-server" />
│   │   └── script-include.js        // @ts-check + /// <reference types="s1-server" />
│   └── client-scripts/
│       ├── client-script.js         // @ts-check + /// <reference types="s1-client" />
│       └── ui-policy.js             // @ts-check + /// <reference types="s1-client" />
└── package.json
```

## 📄 Лицензия

MIT

---

**Версия расширения:** 1.2.0
**Версия документации:** SimpleOne 1.31.0
**Последнее обновление:** Март 2026

### Что нового в версии 1.2.0

**Simple-теги для HTML (Widget API):**

* ✅ Добавлено **60+ сниппетов** для быстрой вставки Simple-тегов
* ✅ Сниппеты для всех основных тегов: button, string, select, date, Form, textarea...
* ✅ Специализированные сниппеты: s-button-icon, s-string-hint, s-reference-condition...
* ✅ Сниппеты для кнопок: s-button-secondary, s-button-destructive, s-button-approve
* ✅ Сниппеты для сообщений: s-sectionmessage-error/success/warning
* ✅ Полный шаблон формы: s-form-full с кнопками сохранения/отмены
* ✅ Поддержка в HTML и XML файлах

**Обновления атрибутов:**

* ✅ Дополнено описание всех атрибутов для 43 Simple-тегов
* ✅ Добавлены глобальные атрибуты: class, style, model, event-click, isVisible...
* ✅ Указаны типы данных и значения по умолчанию для всех атрибутов

**Всего в расширении:**

* **15 классов** клиентского API
* **35 классов** серверного API
* **43 Simple-тега** для HTML
* **150+ сниппетов** для быстрой разработки (90+ API + 60+ HTML)
