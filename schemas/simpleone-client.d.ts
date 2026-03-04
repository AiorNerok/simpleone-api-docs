/// <reference types="node" />

/**
 * SimpleOne Client-Side API Definitions
 * Версия платформы: 1.31.0+
 * 
 * Для включения IntelliSense добавьте в начало JS файла:
 * /// <reference path="./simpleone-client.d.ts" />
 */

declare namespace s_i18n {
    /**
     * Возвращает одну переведённую строку
     * @param msgKey - Ключ сообщения
     * @param config - Конфигурация { language, category, params }
     * @param callback - Функция обратного вызова
     * @example await s_i18n.getMessage('Description', { params: {serviceName: 'Почта'}, language: 'ru' }, (response) => console.log(response));
     */
    function getMessage(msgKey: string, config?: { language?: string; category?: string; params?: Record<string, any> }, callback?: (response: string) => void): Promise<string>;
    
    /**
     * Возвращает массив переведённых строк
     * @param msgKeys - Массив ключей сообщений
     * @param config - Конфигурация
     * @param callback - Функция обратного вызова
     */
    function getMessages(msgKeys: string[], config?: { language?: string; category?: string; params?: Record<string, any> }, callback?: (response: string[]) => void): Promise<string[]>;
}

/**
 * SimpleAjax - позволяет клиентскому скрипту выполнять серверный код
 * @example const sAjax = new SimpleAjax('DurationCalculator');
 */
declare class SimpleAjax {
    constructor(externalScriptName?: string);
    
    /**
     * Передаёт имя и значение параметра серверной функции
     * @param paramName - Имя параметра (должен начинаться с sysparm_)
     * @param paramValue - Значение параметра
     */
    addParam(paramName: string, paramValue: string): void;
    
    /**
     * Отправляет запрос на сервер для выполнения метода
     * @param callback - Функция обратного вызова
     */
    getXML(callback: (response: any) => void): void;
    
    /**
     * Запускает скрипт на заданной таблице с учётом ACL
     * @param scriptValue - Код скрипта
     * @param tableName - Имя таблицы
     * @param callback - Функция обратного вызова
     */
    runScript(scriptValue: string, tableName?: string | null, callback?: (response: any) => void): Promise<void>;
    
    /**
     * Запускает скрипт от имени администратора (без ACL)
     * @param scriptValue - Код скрипта
     * @param tableName - Имя таблицы
     * @param callback - Функция обратного вызова
     */
    runAdminScript(scriptValue: string, tableName?: string | null, callback?: (response: any) => void): Promise<void>;
}

/**
 * SimpleEventBus - работа с потоком событий (событийная шина)
 * @example SimpleEventBus.on('myEvent', (data) => { alert(data); });
 */
declare namespace SimpleEventBus {
    interface Subscription {
        unsubscribe(): void;
    }
    
    /**
     * Подписка на событие
     * @param eventType - Тип события
     * @param callback - Функция обработчик
     * @returns Объект с методом unsubscribe()
     */
    function on(eventType: string, callback: (data: any) => void): Subscription;
    
    /**
     * Инициация события
     * @param eventType - Тип события
     * @param data - Данные события
     */
    function emit(eventType: string, data?: any): void;
    
    /**
     * Удаление события
     * @param eventType - Тип события
     */
    function deleteEvent(eventType: string): void;
    
    /**
     * Сброс всех событий и подписок
     */
    function reset(): void;
}

/**
 * SimpleForm - класс для работы с формами записей на стороне клиента
 * Глобальный объект: s_form
 * @example await s_form.setValue('state', '7');
 */
declare class SimpleForm {
    constructor(table: string, sys_id?: string);
    
    // === Методы для работы с сообщениями ===
    
    /** Сообщение об ошибке */
    addErrorMessage(message: string): void;
    
    /** Информационное сообщение */
    addInfoMessage(message: string, durationMilliseconds?: number): void;
    
    /** Сообщение об успехе */
    addSuccessMessage(message: string, durationMilliseconds?: number): void;
    
    /** Предупреждение */
    addWarningMessage(message: string, durationMilliseconds?: number): void;
    
    /** Закрыть все сообщения */
    clearMessages(): void;
    
    /** Скрыть сообщения поля */
    hideFieldMsg(fieldName: string): void;
    
    /** Показать сообщение под полем */
    showFieldMsg(fieldName: string, message: string, type: 'error' | 'info' | 'warning'): void;
    
    // === Методы для работы с полями ===
    
    /** Получить значение поля */
    getValue(fieldName: string): string;
    
    /** Получить отображаемое значение */
    getDisplayValue(fieldName: string): string;
    
    /** Установить значение поля (асинхронно) */
    setValue(fieldName: string, databaseValue: any): Promise<void>;
    
    /** Очистить поле */
    clearValue(fieldName: string): boolean;
    
    /** Удалить все опции Choice */
    clearOptions(fieldName: string): void;
    
    /** Добавить опцию (асинхронно) */
    addOption(fieldName: string, choiceValue: string): Promise<void>;
    
    /** Удалить опцию */
    removeOption(fieldName: string, choiceValue: string): void;
    
    /** Получить заголовок поля */
    getLabelOf(fieldName: string): string;
    
    /** Установить заголовок поля */
    setLabelOf(fieldName: string, value: string): void;
    
    /** Проверить видимость поля */
    isVisible(fieldName: string): boolean;
    
    /** Установить видимость поля */
    setVisible(fieldName: string, display: boolean): void;
    
    /** Проверить доступность поля */
    isReadonly(fieldName: string): boolean;
    
    /** Установить доступность поля (только чтение) */
    setReadOnly(fieldName: string, readOnly: boolean): boolean;
    
    /** Проверить обязательность поля */
    isMandatory(fieldName: string): boolean;
    
    /** Установить обязательность поля */
    setMandatory(fieldName: string, mandatory: boolean): boolean;
    
    /** Проверить изменение поля */
    isFieldChanged(fieldName: string): boolean;
    
    // === Методы для REM-атрибутов ===
    
    /** Получить значение REM-атрибута */
    getREMValue(fieldName: string): string;
    
    /** Получить отображаемое значение REM */
    getREMDisplayValue(fieldName: string): string;
    
    /** Получить заголовок REM-атрибута */
    getREMLabelOf(fieldName: string): string;
    
    /** Установить заголовок REM-атрибута */
    setREMLabelOf(fieldName: string, value: string): string;
    
    /** Установить значение REM-атрибута (асинхронно) */
    setREMValue(fieldName: string, databaseValue: any): Promise<void>;
    
    /** Установить видимость REM-атрибута */
    setREMVisible(fieldName: string, display: boolean): void;
    
    /** Установить доступность REM-атрибута */
    setREMReadOnly(fieldName: string, readOnly: boolean): boolean;
    
    /** Установить обязательность REM-атрибута */
    setREMMandatory(fieldName: string, mandatory: boolean): boolean;
    
    // === Методы для секций ===
    
    /** Получить массив секций */
    getSections(): HTMLElement[];
    
    /** Получить названия секций */
    getSectionNames(): string[];
    
    /** Проверить видимость секции */
    isSectionVisible(sectionName: string): boolean;
    
    /** Установить видимость секции */
    setSectionDisplay(sectionName: string, display: boolean): void;
    
    // === Методы для связанных списков ===
    
    /** Скрыть все связанные списки */
    hideRelatedLists(): void;
    
    /** Показать все связанные списки */
    showRelatedLists(): void;
    
    /** Скрыть связанный список */
    hideRelatedList(relListTitle: string): void;
    
    /** Показать связанный список */
    showRelatedList(listTitle: string): void;
    
    // === Методы получения информации ===
    
    /** ID формы */
    readonly formId: string;
    
    /** Получить имя таблицы */
    getTableName(): string;
    
    /** Получить ID записи */
    getUniqueValue(): string | null;
    
    /** Проверить, новая ли запись */
    isNewRecord(): boolean;
    
    /** Проверить, изменена ли запись */
    isChanged(): boolean;
    
    /** Получить изменённые поля */
    getChanges(): Array<{ fieldName: string; oldValue: any; newValue: any }>;
    
    /** Получить все поля формы */
    getAllFields(isAll?: boolean): Record<string, any>;
    
    /** Проверить валидность формы */
    isValid(): boolean;
    
    /** Обновить UI-действия */
    refreshUiActions(): void;
    
    // === Методы сохранения и навигации ===
    
    /** Сохранить запись (асинхронно) */
    save(): Promise<string>;
    
    /** Передать форму */
    submit(): void;
    
    /** Назад */
    goBack(): void;
}

/** Глобальный объект формы */
declare const s_form: SimpleForm;

/**
 * SimpleGo - URL-переходы в системе SimpleOne
 * @example s_go.open('/record/task?sys_id=ID');
 */
declare namespace s_go {
    /**
     * Переход по URL
     * @param url - URL перехода
     * @param target - Цель (например, '_blank')
     * @param callback - Функция обратного вызова
     */
    function open(url: string, target?: string, callback?: (newWindow: Window) => void): void;
    
    /**
     * Открытие списка таблицы
     * @param table - Имя таблицы
     * @param query - Условие фильтрации
     */
    function openList(table: string, query?: string): void;
    
    /**
     * Открытие формы записи
     * @param table - Имя таблицы
     * @param sys_id - ID записи
     */
    function openRecord(table: string, sys_id: string): void;
    
    /** Перезагрузка страницы */
    function reloadWindow(): void;
    
    /** Получение текущего URL */
    function getURL(): string;
    
    /** Возврат на предыдущую страницу */
    function back(): void;
}

/**
 * SimpleList - управление списками
 * @example const selectedRows = s_list.getCheckedRow(table);
 */
declare namespace s_list {
    /** Сообщение об ошибке */
    function addErrorMessage(message: string): void;
    
    /** Инфо-сообщение */
    function addInfoMessage(message: string, duration?: number): void;
    
    /** Сообщение об успехе */
    function addSuccessMessage(message: string, duration?: number): void;
    
    /** Предупреждение */
    function addWarningMessage(message: string, duration?: number): void;
    
    /** Удалить записи */
    function deleteRows(tableName: string, sysIds: string[]): Promise<void>;
    
    /** Экспорт в очередь */
    function fetchExportTable(format: 'json' | 'xlsx' | 'excel'): void;
    
    /** Получить отмеченные строки */
    function getCheckedRow(tableName: string): string[];
    
    /** Получить условие фильтрации */
    function getQuery(): string;
    
    /** Получить названия таблиц */
    function getTablesName(): string[];
    
    /** Обновить список */
    function refresh(tableName: string): void;
    
    /** Изменить фильтр */
    function recondition(condition: string): void;
    
    /** Быстрый импорт */
    function runQuickImport(): void;
}

/**
 * SimpleMenu - работа с меню (Избранное и Навигатор)
 */
declare namespace SimpleMenu {
    /** Обновить избранное */
    function updateFavoritesList(): void;
    
    /** Обновить навигатор */
    function updateMenuList(): void;
}

/**
 * SimpleModal - модальные окна
 * @example s_modal.setTitle('Заголовок'); s_modal.setShow(true);
 */
declare namespace s_modal {
    /** Рендер шаблона портала */
    function renderPageTemplate(portal: string, page: string): void;
    
    /** Рендер шаблона (обратный порядок) */
    function renderPagePathTemplate(page: string, portal: string): void;
    
    /** Рендер HTML-шаблона */
    function renderTemplate(template: string, style: string): void;
    
    /** Показать/скрыть */
    function setShow(isShow: boolean): void;
    
    /** Установить заголовок */
    function setTitle(title: string): void;
    
    /** Установить ширину (px) */
    function setWidth(width: number): void;
    
    /** Индикатор загрузки */
    function setIsLoading(isLoading: boolean): void;
}

/**
 * SimplePreference - настройки пользовательского интерфейса
 */
declare namespace s_pref {
    /** Обновить меню настроек */
    function refresh(): Promise<void>;
}

/**
 * SimpleRecord Client-Side - работа с БД в клиентских скриптах
 * @example const record = new SimpleRecord('task');
 */
declare class SimpleRecord {
    constructor(tableName: string);
    
    /** Добавить условие выборки */
    addQuery(field: string, operator?: string, value?: any): void;
    
    /** Удалить запись */
    deleteRecord(responseFunction: (success: boolean) => void): void;
    
    /** Получить запись по ID */
    get(recordId: string, callback: (record: SimpleRecord) => void): void;
    
    /** Получить массив записей */
    getRows(): string[];
    
    /** Получить имя таблицы */
    getTableName(): string;
    
    /** Есть ли ещё записи */
    hasNext(): boolean;
    
    /** Вставить запись */
    insert(responseFunction: (sysId: string) => void): void;
    
    /** Следующая запись */
    next(): boolean;
    
    /** Сортировка по возрастанию */
    orderBy(column: string): void;
    
    /** Выполнить запрос */
    query(responseFunction: () => void, ...additionalParams: any[]): void;
    
    /** Лимит записей */
    setLimit(maxQuery: number): void;
    
    /** Установить значение поля */
    setValue(fieldName: string, value: string): void;
    
    /** Динамические свойства для полей */
    [key: string]: any;
}

/**
 * SimpleStorage - хранилище ключ-значение (JavaScript Map)
 */
declare namespace SimpleStorage {
    /** Получить значение */
    function getItem(key: string): string | null;
    
    /** Проверить наличие */
    function hasItem(key: any): boolean;
    
    /** Установить значение */
    function setItem(key: string, value: any): void;
    
    /** Получить все пары [ключ, значение] */
    function getEntries(): Array<[string, any]>;
    
    /** Получить все ключи */
    function getKeys(): string[];
    
    /** Получить количество записей */
    function getSize(): number;
    
    /** Очистить хранилище */
    function reset(): void;
}

/**
 * SimpleSystem - системные префиксы таблиц и колонок
 */
declare namespace ss {
    /** Получить префикс таблицы текущего приложения */
    function getTablePrefix(): Promise<string>;
    
    /** Получить префикс колонки для таблицы */
    function getColumnPrefix(tableName?: string): Promise<string>;
}

/**
 * SimpleUser - информация о текущем пользователе
 * @example const fullName = s_user.getFullName();
 */
declare namespace s_user {
    /** Access token (⚠️ Устаревшее с 1.29.0) */
    const accessToken: string | undefined;
    
    /** Имя пользователя */
    const firstName: string;
    
    /** Фамилия пользователя */
    const lastName: string;
    
    /** ID пользователя */
    const userID: string;
    
    /** Логин пользователя */
    const userName: string;
    
    /** Полный объект пользователя */
    const user: {
        sys_id: string;
        first_name: string;
        last_name: string;
        username: string;
        essence: string;
        timezone: string;
        language: string;
        photo_path: string | null;
        elevate_access: number;
        version: string;
        dictionary: Record<string, any>;
        impersonate_access: string | null;
    };
    
    /** Получить полное имя */
    function getFullName(): string;
    
    /** Получить настройку пользователя (асинхронно) */
    function getPreference(name: string | string[]): Promise<any>;
    
    /** Установить настройку (асинхронно) */
    function setPreference(name: string, value: string): Promise<any>;
}

/** Глобальные переменные */
declare const CURRENT_ID: string;
declare const currentFieldLabel: any;
declare const currentUiAction: any;
