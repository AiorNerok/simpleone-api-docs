/// <reference types="node" />

/**
 * SimpleOne Server-Side API Definitions
 * Версия платформы: 1.31.0+
 * 
 * Для включения IntelliSense добавьте в начало JS файла:
 * /// <reference path="./simpleone-server.d.ts" />
 */

/**
 * SimpleRecord - серверный класс для работы с записями БД
 * @example const task = new SimpleRecord('task');
 */
declare class SimpleRecord {
    constructor(tableName: string);
    
    // === Методы работы с запросами ===
    
    /**
     * Добавляет условие выборки
     * @param field - Поле
     * @param operator - Оператор (=, !=, >, <, like, startswith, endswith, IN, NOT IN, ISEMPTY, ISNOTEMPTY)
     * @param value - Значение
     * @example task.addQuery('active', true); task.addQuery('subject', 'like', 'email');
     */
    addQuery(field: string, operator?: string, value?: any): SimpleRecord;
    
    /**
     * Добавляет условие ИЛИ
     * @param property - Поле
     * @param operator - Оператор
     * @param value - Значение
     */
    addOrCondition(property: string, operator?: string, value?: any): SimpleRecord;
    
    /** Добавляет закодированное условие */
    addEncodedQuery(condition: string): void;
    
    /** Возвращает текущее условие запроса */
    getConditionQuery(): string;
    
    /** Применяет запрос для получения выборки */
    query(): void;
    
    /** Возвращает следующую запись */
    next(): boolean;
    
    /** Сортировка по возрастанию */
    orderBy(column: string): void;
    
    /** Сортировка по убыванию */
    orderByDesc(column: string): void;
    
    /** Ограничивает количество записей */
    setLimit(maxNumRecords: number): void;
    
    /** Выбирает только указанные атрибуты */
    selectAttributes(attributes: string | string[]): SimpleRecord;
    
    /** Количество элементов в выборке */
    getRowCount(): number;
    
    // === Методы получения данных ===
    
    /**
     * Загружает запись по ID
     * @param propertyOrValue - ID записи или имя свойства
     * @param value - Значение (если первый параметр - имя свойства)
     */
    get(propertyOrValue: string, value?: string): SimpleRecord;
    
    /** Возвращает значение атрибута */
    getValue(property: string): any;
    
    /** Отображаемое значение */
    getDisplayValue(property?: string): string;
    
    /** Все атрибуты записи */
    getAttributes(): Record<string, any>;
    
    /** Заголовок поля */
    getLabel(property: string): string;
    
    /** Заголовок REM-атрибута */
    getTitle(attribute: string): string;
    
    /** Заголовок таблицы */
    getClassDisplayValue(): string;
    
    /** Системное имя таблицы */
    getTableName(): string;
    
    /** ID расширенной модели */
    getReModelId(): string;
    
    /** Сообщения об ошибках */
    getErrors(): string[];
    
    // === Методы создания, обновления и удаления ===
    
    /** Заполняет поля значениями по умолчанию */
    initialize(): void;
    
    /** Создаёт новую запись, возвращает ID */
    insert(): string;
    
    /** Обновляет текущую запись, возвращает ID */
    update(): string;
    
    /** Обновляет все записи выборки */
    updateMultiple(): boolean;
    
    /**
     * Удаляет запись
     * @param id - ID записи (опционально, если не указан - удаляет текущую)
     */
    deleteRecord(id?: string): boolean;
    
    /** Удаляет записи из выборки */
    deleteMultiple(): boolean;
    
    /** Устанавливает значение поля */
    setValue(property: string, value: any): void;
    
    /** Значение для всех записей выборки */
    setMultipleValue(property: string, value: any): void;
    
    /** Устанавливает ID расширенной модели */
    setReModelId(reModelId: string): void;
    
    // === Методы проверки прав доступа ===
    
    /** Право создания записей */
    canCreate(): boolean;
    
    /** Право просмотра записей */
    canRead(): boolean;
    
    /** Право редактирования */
    canUpdate(): boolean;
    
    /** Право удаления записей */
    canDelete(): boolean;
    
    /** Наличие вложений */
    hasAttachment(): boolean;
    
    /** Контроль версий таблицы */
    isTableVcsEnabled(): boolean;
    
    /** Соответствие условию */
    matchesCondition(condition: string): boolean;
    
    // === Методы работы с Journal Input ===
    
    /**
     * Объект поля Journal Input
     * @example const work_notes = current.getJournalInput('work_notes');
     */
    getJournalInput(name: string): JournalInput;
    
    // === Специальные методы ===
    
    /**
     * Прерывает операцию
     * @param flag - Флаг прерывания
     * @param message - Сообщение об ошибке
     */
    setAbortAction(flag: boolean, message?: string): void;
    
    /**
     * Обновление без бизнес-логики
     * @param enable - Включить тихий режим (по умолчанию true)
     */
    silentMode(enable?: boolean): void;
    
    // === Динамические свойства для полей ===
    
    /** Доступ к полям через свойства */
    [key: string]: any;
}

/**
 * JournalInput - объект для работы с комментариями
 */
declare interface JournalInput {
    /**
     * Установить комментарий
     * @param message - Текст комментария
     * @param author - ID автора (опционально)
     */
    setComment(message: string, author?: string): JournalInput;
    
    /** Установить текст сообщения */
    setMessage(message: string): JournalInput;
    
    /** Установить автора */
    setAuthor(author?: string): JournalInput;
}

/**
 * SimpleReference - объект ссылочного поля
 */
declare interface SimpleReference {
    getValue(): string;
    getLabel(property: string): string;
    setValue(value: any): void;
    getAttributes(): Record<string, any>;
    hasAttachment(): boolean;
    getDisplayValue(): string;
}

/**
 * SimpleAttachment - работа с вложениями
 * @example const attach = new SimpleAttachment();
 */
declare class SimpleAttachment {
    constructor();
    
    /**
     * Декодирование Base64 → ASCII
     * @param data - Base64 строка
     * @param strict - Строгий режим (по умолчанию true)
     */
    base64Decode(data: string, strict?: boolean): string;
    
    /**
     * Кодирование ASCII → Base64
     * @param data - ASCII строка
     */
    base64Encode(data: string): string;
    
    /**
     * Копирование вложений между записями
     * @returns true если успешно
     */
    copy(sourceTableName: string, sourceID: string, targetTableName: string, targetID: string): boolean;
    
    /** Удаление вложения */
    deleteAttachment(attachmentID: string): void;
    
    /** URL вложения в S3 */
    getAttachmentUrlById(attachmentId: string): string;
    
    /** Текстовое содержимое вложения */
    getContent(attachmentId: SimpleRecord): string | Record<string, any> | null;
    
    /** Чтение вложения как Base64 (до 10 Мб) */
    readBase64(attachmentId: string): string;
    
    /** Переименование вложения */
    rename(attachmentId: string, fileName: string): void;
    
    /**
     * Создание вложения из строки
     * @returns ID вложения или null
     */
    write(documentId: string, fileName: string, content: string, mimeContentType: string): string | null;
    
    /**
     * Создание вложения из Base64
     * @returns ID вложения или null
     */
    writeBase64(documentId: string, fileName: string, base64: string, mimeContentType: string): string | null;
}

/**
 * SimpleAttachmentService - сбор вложений с удаленного экземпляра при миграции
 */
declare class SimpleAttachmentService {
    constructor();

    /** Создать вложение по URL */
    createAttachmentByUrl(url: string, recordDocId: string, fileName: string): string;

    /** Установить URL удалённого экземпляра */
    setUrl(url: string): void;

    /** Установить логин пользователя */
    setUsername(username: string): void;

    /** Установить пароль пользователя */
    setPassword(password: string): void;

    /** Получить вложение с удалённого экземпляра */
    getAttachmentSN(sourceDocId: string, targetDocId: string): string;
}

/**
 * SimpleSystem - системная информация (глобальный объект ss)
 * @example ss.info('Сообщение');
 */
declare namespace ss {
    // === Методы отображения сообщений ===
    
    /** Показать информационное сообщение */
    function addInfoMessage(message: string, params?: Record<string, any>): void;
    
    /** Показать сообщение об ошибке */
    function addErrorMessage(message: string, params?: Record<string, any>): void;
    
    /** Показать сообщение об успехе */
    function addSuccessMessage(message: string, params?: Record<string, any>): void;
    
    // === Методы логирования ===
    
    /** Информационное сообщение в sys_log */
    function info(message: any): void;
    
    /** Отладочное сообщение */
    function debug(message: any): void;
    
    /** Предупреждение */
    function warning(message: any): void;
    
    /** Сообщение об ошибке */
    function error(message: any): void;
    
    // === Методы работы с событиями ===
    
    /**
     * Поставить событие в очередь
     * @param name - Имя события
     * @param current - Текущая запись
     * @param param_1..5 - Параметры (до 5 штук)
     */
    function eventQueue(name: string, current: SimpleRecord, param_1?: string, param_2?: string, param_3?: string, param_4?: string, param_5?: string): void;
    
    /**
     * Поставить событие в очередь по расписанию
     * @param name - Имя события
     * @param current - Текущая запись
     * @param process_started_at - Время запуска
     * @param param_1..5 - Параметры
     */
    function eventQueueScheduled(name: string, current: SimpleRecord, process_started_at: SimpleDateTime, param_1?: string, param_2?: string, param_3?: string, param_4?: string, param_5?: string): void;
    
    // === Методы генерации токенов и URL ===
    
    /** Токен для сброса пароля */
    function generateResetToken(): string;
    
    /** URL для выполнения скрипта */
    function generateUrlAction(userId: string, script: string, expire: string): string;
    
    // === Методы получения системной информации ===
    
    /** ID приложения */
    function getApplicationId(): string;
    
    /**
     * Получить системное свойство
     * @param name - Имя свойства
     */
    function getProperty(name: string): string | null;
    
    /**
     * Установить системное свойство
     * @param name - Имя свойства
     * @param value - Значение
     * @param description - Описание (опционально)
     */
    function setProperty(name: string, value: string, description?: string): void;
    
    /** Информация о сессии */
    function getSession(): SimpleSession;
    
    /** Объект текущего пользователя */
    function getUser(): SimpleRecord;
    
    /** ID текущего пользователя */
    function getUserID(): string;
    
    // === Методы работы с Document ID ===
    
    /** Document ID по ID таблицы и записи (возвращает UUID) */
    function getDocIdByIds(tableId: string, recordId: string): string;
    
    /** ID таблицы по Document ID */
    function getTableIdByDocId(docId: string): string;
    
    /** ID записи по Document ID */
    function getRecordIdByDocId(docId: string): string;
    
    // === Методы проверки ролей и импорта ===
    
    /**
     * Проверка роли (включая admin)
     * @param role - Имя роли
     */
    function hasRole(role: string): boolean;
    
    /**
     * Импорт внешнего скрипта
     * @param name - Имя скрипта
     */
    function importIncludeScript(name: string): boolean;
    
    // === Методы навигации и ресурсов ===
    
    /** Перенаправление на URL */
    function setRedirect(url?: string): void;
    
    /** Ссылка на логотип */
    function getLogoURL(): string;
    
    /** Логотип в Base64 */
    function getLogoBase64(): string;
}

/**
 * SimpleDateTime - работа с датой и временем
 * @example const dt = new SimpleDateTime();
 */
declare class SimpleDateTime {
    constructor();
    
    /** Добавить дни */
    addDays(days: number): void;
    
    /** Добавить часы */
    addHours(hours: number): void;
    
    /** Добавить минуты */
    addMinutes(minutes: number): void;
    
    /** Добавить секунды */
    addSeconds(seconds: number): void;
    
    /** Получить значение */
    getValue(): string;
    
    /** Получить отображаемое значение */
    getDisplayValue(): string;
    
    /** Получить год */
    getYear(): number;
    
    /** Получить месяц (0-11) */
    getMonth(): number;
    
    /** Получить день */
    getDay(): number;
    
    /** Получить час */
    getHour(): number;
    
    /** Получить минуту */
    getMinute(): number;
    
    /** Получить секунду */
    getSecond(): number;
}

/**
 * SimpleSession - информация о сессии
 */
declare interface SimpleSession {
    getClientIP(): string;
    getSessionID(): string;
    getUserID(): string;
    getUserName(): string;
}

/**
 * SimpleWebService - создание REST-запросов (глобальный объект sws)
 * @example const request = sws.restRequestV1('Telegram', 'Send Message');
 */
declare namespace sws {
    /**
     * Создание объекта REST-запроса
     * @param requestName - Имя предопределённого запроса (опционально)
     * @param methodName - Имя метода (опционально)
     */
    function restRequestV1(requestName?: string, methodName?: string): SimpleRestRequest;
}

/**
 * SimpleRestRequest - создание и выполнение HTTP/HTTPS запросов
 */
declare class SimpleRestRequest {
    constructor();
    
    /** Установить URL запроса */
    setRequestUrl(requestUrl: string): void;
    
    /** Установить HTTP-метод (GET, POST, PUT, DELETE, PATCH...) */
    setRequestMethod(methodName: string): void;
    
    /** Установить таймаут в секундах */
    setRequestTimeout(timeout: number): void;
    
    /** Установить тело запроса (для PUT/POST) */
    setRequestBody(body: string): void;
    
    /** Установить HTTP-заголовок */
    setRequestHeader(name: string, value: string): void;
    
    /** Базовая авторизация */
    setBasicAuth(userName: string, userPassword: string): void;
    
    /** Параметр URL */
    setQueryParameter(name: string, value: string): void;
    
    /** Переменная запроса */
    setStringParameter(name: string, value: string): void;
    
    /** Файл для POST (base64) */
    addFileContent(content: string, paramName: string, fileName: string): void;
    
    /** Включить HTTP/2 */
    useHttp2(value?: boolean): void;
    
    /** Получить URL запроса с параметрами */
    getRequestUrl(): string;
    
    /** Получить тело запроса */
    getRequestBody(): string;
    
    /** Получить все заголовки */
    getRequestHeaders(): Record<string, string>;
    
    /** Получить метод запроса */
    getRequestMethod(): string;
    
    /** Отправить запрос */
    execute(): SimpleRestResponse;
}

/**
 * SimpleRestResponse - ответ REST-запроса
 */
declare class SimpleRestResponse {
    /** Тело ответа */
    getBody(): string;
    
    /** Заголовки ответа */
    getAllHeaders(): Record<string, string[]>;
    
    /** Содержимое в Base64 (для бинарных файлов) */
    getContentBase64(): string | null;
    
    /** HTTP-код состояния (200, 404...) */
    getStatusCode(): string;
    
    /** Флаг наличия ошибок */
    haveError(): boolean;
}

/**
 * SimpleWorkflow - управление рабочими процессами
 * @example const wf = new SimpleWorkflow('workflowId');
 */
declare class SimpleWorkflow {
    constructor(workflowId?: string);
    
    /**
     * Отмена всех активных контекстов
     * @param current - Текущая запись
     */
    cancel(current: SimpleRecord): void;
    
    /** Копирование рабочего процесса */
    copy(): SimpleRecord;
    
    /** Удаление рабочего процесса */
    delete(): boolean;
    
    /**
     * Проверка активных контекстов
     * @param current - Текущая запись
     */
    hasActiveContexts(current: SimpleRecord): boolean;
    
    /**
     * Перезапуск рабочего процесса
     * @param executingActivity - Выполняемое действие
     * @param current - Текущая запись
     */
    revival(executingActivity: SimpleRecord, current: SimpleRecord): SimpleRecord;
    
    /**
     * Запуск рабочего процесса
     * @param current - Текущая запись
     */
    start(current: SimpleRecord): SimpleRecord;
    
    /**
     * Запуск подпроцесса
     * @param executingActivity - Выполняемое действие
     * @param current - Текущая запись
     * @param workflowId - ID рабочего процесса
     */
    startSubflow(executingActivity: SimpleRecord, current: SimpleRecord, workflowId: string): SimpleRecord;
}

/**
 * SimpleSearch - полнотекстовый поиск
 */
declare class SimpleSearch {
    constructor();
    
    /** Переиндексация всех таблиц системы */
    recreateAllIndices(): void;
    
    /** Переиндексация указанной таблицы */
    recreateIndicesByTableName(tableName: string): void;
    
    /** Переиндексация конкретной колонки */
    recreateIndicesByColumnId(columnId: string): void;
    
    /**
     * Поисковый запрос по таблицам
     * @param text - Поисковый текст
     * @param tableIDs - Массив ID таблиц
     */
    search(text: string, tableIDs: string[]): SimpleRecord[];
}

/**
 * SimpleMail - работа с почтовым сервером
 */
declare class SimpleMail {
    constructor();
    
    /**
     * Проверка соединения с почтовым сервером
     * @param current - Запись sys_email_account
     */
    checkConnection(current: SimpleRecord): boolean;
}

/**
 * SimpleCache - управление системным кэшем
 */
declare class SimpleCache {
    constructor();
    
    /** Сброс кэша URL */
    resetCacheSystemUrl(): boolean;
}

/**
 * SimpleEngine - управление механизмами
 */
declare class SimpleEngine {
    constructor(engineName: string);
    
    /** Список всех механизмов (статический) */
    static getAllEngines(): string[];
    
    /** Опция механизма */
    getEngineOption(optionName: string): SimpleEngine;
    
    /** Значение опции для таблицы */
    getOptionValueForTable(optionName: string, tableName: string): string;
    
    /** Включён ли механизм для таблицы */
    isEngineEnable(tableName: string): boolean;
}

/**
 * SimpleTable - информация о таблицах
 */
declare class SimpleTable {
    constructor(tableName: string);
    
    /** Родительские таблицы всех уровней */
    getParentTables(): Array<{ sys_id: string; name: string }>;
    
    /** Дочерние таблицы всех уровней */
    getChildTables(): Array<{ sys_id: string; name: string }>;
}

/**
 * SimpleTemplate - работа с шаблонами
 */
declare class SimpleTemplate {
    constructor(templateName?: string);
    
    /** Применить шаблон к записи */
    applyTo(record: SimpleRecord): void;
    
    /** Применить значение из поля Template */
    applyToByTemplateField(record: SimpleRecord, template: string | string[]): void;
    
    /** Создать шаблон из SimpleRecord */
    createBySimpleRecord(record: SimpleRecord, templateName: string, templateTableName?: string): string;
    
    /** Создать шаблон из данных */
    createByTemplateData(templateData: Record<string, any>, tableName: string, templateName: string, templateTableName?: string): string;
    
    /** Создать шаблон из поля Template */
    createByTemplateField(template: Record<string, any>, tableName: string, templateName: string, templateTableName?: string): string;
    
    /** Получить шаблон по имени */
    get(templateName: string): void;
}

/**
 * SimpleVcs - система контроля версий
 */
declare class SimpleVcs {
    constructor();
    
    /** Применение импортированного пакета */
    applyRetrievedPack(retrievedPackId: string): boolean;
    
    /** Создание снимка версий таблицы */
    createTableSnapshot(tableName: string): number;
    
    /** Экспорт записей VCS в SOP-файл */
    exportLocalPackVcsRecords(sysVcsLocalPackId: string): Record<string, any>;
    
    /** Импорт записей VCS */
    importRetrievedPack(retrievedPackId: string): boolean;
    
    /** Проверка ссылок локального пакета */
    isLocalPackHasReferences(localPackId: string): boolean;
    
    /** Проверка ссылок импортированного пакета */
    isRetrievedPackHasReferences(retrievedPackId: string): boolean;
    
    /** Загрузка данных из вложения */
    loadDataFromAttachment(sysVcsRetrievedPackId: string): boolean;
    
    /** Объединение локальных пакетов */
    mergeLocalPacks(rowIds: string[], name: string, description?: string): string;
    
    /** Перемещение записей в пакет по умолчанию */
    moveVcsRecordsToDefault(versionIds: string[]): boolean;
    
    /** Предварительный просмотр пакета */
    preview(sysVcsRetrievedPackId: string): boolean;
    
    /** Откат локального пакета */
    rollback(packId: string): void;
    
    /** Предпросмотр отката */
    rollBackPreview(packId: string): void;
}

/**
 * SimpleImage - работа с изображениями из таблицы sys_image
 */
declare class SimpleImage {
    constructor();

    /** Получить сообщения об ошибках */
    getErrors(): string[];

    /** Получить URL изображения по ID */
    getImageUrlById(imageId: string): string;

    /** Получить изображение в base64 */
    readImageBase64(imageId: string): string;

    /** Создать запись изображения из base64 */
    writeImageBase64(fileName: string, base64: string, contentType: string, imageColumnId: string): string;
}

/**
 * SimpleTemplatePrinter - печать в сообщениях почты
 */
declare class SimpleTemplatePrinter {
    /** Получить строки сообщения */
    getPrint(): string;

    /** Получить количество пробелов */
    getSpace(): number;

    /** Вставить строку текста */
    print(string: string): void;

    /** Вставить пробелы */
    space(spaces?: number): void;
}

/**
 * SimpleTime - работа со временем
 */
declare class SimpleTime {
    constructor(time?: number);

    /** Получить время в формате */
    getByFormat(format?: string): string;

    /** Получить время в формате 'Ч:м:с' */
    getDisplayValue(): string;

    /** Получить часы (локальное время) */
    getHourLocalTime(): string;

    /** Получить часы (UTC) */
    getHourUTC(): string;

    /** Получить значение времени (UTC) */
    getValue(): string;

    /** Установить время */
    setValue(time?: string): void;
}

/**
 * SimpleDuration - хранит продолжительность в виде даты и времени
 */
declare class SimpleDuration {
    constructor(duration?: number | string);

    /** Добавить значение другого SimpleDuration */
    add(duration: SimpleDuration): SimpleDuration;

    /** Получить значение в заданном формате */
    getByFormat(format?: string): string;

    /** Получить количество целых дней */
    getDayPart(): number;

    /** Получить отображаемое значение */
    getDisplayValue(): string;

    /** Получить значение в секундах */
    getDurationSeconds(): number;

    /** Получить значение в формате 'д ч:м:с' */
    getDurationValue(): string;

    /** Получить округлённое количество дней */
    getRoundedDayPart(): number;

    /** Получить значение во внутреннем формате */
    getValue(): string;

    /** Установить значение в формате 'д ч:м:с' */
    setDisplayValue(duration: string): void;

    /** Установить значение в формате 'ГГГГ-ММ-ДД ч:м:с' */
    setValue(dateTime: string | SimpleDateTime): void;

    /** Вычесть значение другого SimpleDuration */
    subtract(duration: SimpleDuration): SimpleDuration;
}

/**
 * SimpleImport - импорт данных из внешних источников
 */
declare class SimpleImport {
    constructor();

    /** Получить сообщение об ошибке */
    getErrorMessage(): string;

    /** Импортировать записи из вложения */
    import(record: SimpleRecord, testMode?: boolean): boolean;

    /** Запустить запланированный импорт с преобразованием */
    importTransform(record: SimpleRecord): void;

    /** Проверить подключение к LDAP */
    testLdapConnection(record: SimpleRecord): any;

    /** Проверить все подключения LDAP */
    testLdapConnections(record: SimpleRecord): any;

    /** Трансформировать данные в целевую таблицу */
    transform(record: SimpleRecord): boolean;
}

/**
 * SimpleDelegation - работа с записями делегирования
 */
declare class SimpleDelegation {
    constructor();

    /** Получить массив заместителей */
    getDelegatesOfType(type: 'access' | 'approvals' | 'tasks' | 'notifications', delegatorId: string, from?: SimpleDateTime, to?: SimpleDateTime): SimpleRecord[];

    /** Получить сотрудников, делегировавших полномочия */
    getDelegatorsOfType(type: string, delegateId: string, from?: SimpleDateTime, to?: SimpleDateTime): SimpleRecord[];

    /** Проверить наличие записей делегирования */
    hasDelegationOfType(type: string, delegatorIds: string[], delegateId: string, from?: SimpleDateTime, to?: SimpleDateTime): boolean;
}

/**
 * SimpleSchedule - работа с календарями
 */
declare class SimpleSchedule {
    constructor(id?: string, timezoneTitle?: string);

    /** Определить разницу во времени по календарю */
    duration(startDateTime: SimpleDateTime, endDateTime: SimpleDateTime): SimpleDuration;

    /** Получить название календаря */
    getName(): string;

    /** Проверить наличие datetime в календаре */
    isInSchedule(datetime: SimpleDateTime): boolean;

    /** Проверить действительность календаря */
    isValid(): boolean;

    /** Проверить рабочее время */
    isWorkingTime(datetime: SimpleDateTime): boolean;

    /** Инициализировать календарь по ID */
    load(sysId: string, timezoneTitle?: string): void;

    /** Установить часовой пояс */
    setTimeZone(timezoneTitle: string): void;

    /** Получить время до следующего элемента расписания */
    whenNext(datetime: SimpleDateTime, timezoneTitle: string): SimpleDuration;

    /** Рассчитать время истечения срока */
    whenWillExpire(startDateTime: SimpleDateTime, finalWorkingSeconds: number): SimpleDateTime;
}

/**
 * SimpleMessage - локализация сообщений
 */
declare class SimpleMessage {
    constructor();

    /** Перевести сообщение на текущий язык */
    getMessage(message: string, category?: string, params?: Record<string, any>, language?: string): string;
}

/**
 * SimpleEmailOutbound - работа с электронной почтой в скриптах уведомлений
 */
declare class SimpleEmailOutbound {
    /** Добавить адрес в поле «Кому» */
    addAddress(address: string, displayName?: string): void;

    /** Добавить адрес в поле «Скрытая копия» */
    addAddressBcc(address: string, displayName?: string): void;

    /** Добавить адрес в поле «Копия» */
    addAddressCc(address: string, displayName?: string): void;

    /** Получить адреса получателей */
    getAddresses(): string[];

    /** Получить адреса скрытой копии */
    getAddressesBcc(): string[];

    /** Получить адреса копии */
    getAddressesCc(): string[];

    /** Получить текст письма */
    getBody(): string;

    /** Получить адрес отправителя */
    getFrom(): string;

    /** Получить адрес для ответа */
    getReplyTo(): string;

    /** Получить тему письма */
    getSubject(): string;

    /** Установить текст письма */
    setBody(bodyText: string): void;

    /** Изменить адрес отправителя */
    setFrom(address: string): void;

    /** Установить адрес для ответа */
    setReplyTo(address: string): void;

    /** Установить тему письма */
    setSubject(subject: string): void;
}

/**
 * SimpleEmailTemplate - создание почтовых уведомлений
 */
declare class SimpleEmailTemplate {
    constructor(title?: string);

    /** Установить заголовок уведомления */
    setTitle(title: string): void;

    /** Установить заголовок содержимого */
    setBodyHeader(bodyHeader: string): void;

    /** Установить содержимое уведомления */
    setBodyText(bodyText: string): void;

    /** Установить комментарий */
    setComment(comment: string): void;

    /** Получить заголовок уведомления */
    getTitle(): string;

    /** Получить заголовок содержимого */
    getBodyHeader(): string;

    /** Получить текст письма */
    getBodyText(): string;

    /** Получить текст комментариев */
    getComment(): string;

    /** Получить массив кнопок */
    getButtons(): any[];

    /** Добавить кнопку */
    addButton(text: string, url: string, color?: string, buttonArray?: any[]): any[];

    /** Удалить последнюю кнопку */
    removeButton(): void;

    /** Удалить все кнопки */
    removeAllButtons(): void;

    /** Установить свойство */
    setProperty(propertyName: string, input: string | number, propertyTitle: string): void;

    /** Сформировать HTML-шаблон */
    formEmailTemplate(): string;
}

/**
 * SimpleLogArchive - работа с архивами журналов
 */
declare class SimpleLogArchive {
    constructor();

    /** Удалить временные таблицы после распаковки */
    removeUnpacked(sysLogArchiveId: string): void;

    /** Архивировать устаревшие журналы */
    runPacking(): void;

    /** Распаковать архив журнала */
    runUnpacking(sysLogArchiveId: string): void;
}

/**
 * SimpleRecordDeletionLog - журнал удаления записей
 */
declare class SimpleRecordDeletionLog {
    constructor();

    /** Восстановить удалённую запись */
    restore(recordDeletionLogId: string): boolean;
}

/**
 * SimpleRecordSecure - работа с записями с учётом ACL
 */
declare class SimpleRecordSecure extends SimpleRecord {
    constructor(tableName: string);

    /** Получить ошибки операций */
    getErrors(): string[];
}

/**
 * SimpleUser Server-Side - информация о пользователе
 */
declare namespace su {
    /** Получить настройку пользователя */
    function getPreference(name: string): string;

    /** Установить настройку пользователя */
    function setPreference(name: string, value: string): void;

    /** Получить все настройки пользователя */
    function getUserPreferences(): SimpleRecord;
}

/**
 * SimpleUserCriteria - пользовательские критерии
 */
declare class SimpleUserCriteria {
    constructor();

    /** Проверить соответствие пользователя критериям */
    userAcceptanceByCriteria(user: string, criteria: string | string[], excludeDelegation?: boolean): boolean;
}

/**
 * SimpleWysiwyg - конвертация HTML и WYSIWYG-JSON
 */
declare class SimpleWysiwyg {
    constructor();

    /** Конвертировать HTML в WYSIWYG-JSON */
    convertFromHtml(html: string): string;

    /** Конвертировать WYSIWYG в HTML */
    convertToHtml(wysiwyg: string): string;
}

/**
 * SimpleExternalRabbitMQ - отправка сообщений в RabbitMQ
 */
declare class SimpleExternalRabbitMQ {
    constructor(queueName: string);

    /** Получить ошибки */
    getErrors(): string[];

    /** Отправить сообщение */
    publishMessage(routingKey: string, payloads: string, options?: Record<string, any>): SimpleExternalRabbitMQ;

    /** Отправить массив сообщений */
    publishMultipleMessages(routingKey: string, payloads: string[], options?: Record<string, any>): SimpleExternalRabbitMQ;

    /** Тест подключения к потребителю (статический) */
    static testConsumerConnection(id?: string, options?: Record<string, any>): string;

    /** Тест подключения к поставщику (статический) */
    static testProducerConnection(id?: string, options?: Record<string, any>): string;
}

/**
 * ExportVariables - глобальные функции для работы с серверными скриптами
 */
declare function alert(message: string): void;
declare function echo(messages: string): void;
declare function json(value: any): void;
declare function print(message: any): number;
declare function print_r(value: any): void;
declare function sleep(seconds: number): void;
declare function var_dump(value: any): void;

/** Глобальные переменные */
declare const current: SimpleRecord;
declare const previous: SimpleRecord;
declare const CURRENT_ID: string;
