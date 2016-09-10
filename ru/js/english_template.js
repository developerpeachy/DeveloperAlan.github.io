
// globals
var myMapOptions = ['улица', 'земля', 'спутник', 'Гибридный'];
var ALL_FILTER = "Все";

var mObject = {};

mObject.selectedMapType = 'улица';


var LANG_COLOR_LIST = ["красный", "синий", "зеленый", "желтый", "оранжевый", "Пурпурный", "коричневый", "розовый", "Темно-зеленый", "Бледно-голубой", "Темно-розовый", "Королевский синий", "Цвет морской волны", "зеленый лайм", "Розовый фиолетовый", "Золото", "Коричневый 2", "малиновый", "Темно-серый", "Светло-серый", "мокасин"];

var labelNames = ["Адрес", "город",  "Штат / провинция", "Индекс (почтовый) Код", "Страна", "широта", "долгота",
    "Маркер Название", "Url (сайт)", "(Веб-сайт) Изображение", "(Веб-сайт) Электронная почта", "Группа (маркерные цвета)", "Pin Этикетка"
];


// values to match email, city, address, etc
var addressMatch = ["адрес", "адреса", "улица", "улицы"];
var negAddressMatch = ["Эл. адрес", "электронная почта"];
var cityMatch = ["город", "города", "город", "города"];
var zipMatch = ["застежка-молния", "почтовый индекс", "почтовый индекс", "почтовый индекс", "почтовый индекс", "Почтовый индекс", "почтовый"];

var stateMatch = ["государство", "область", "провинция"];
var titleMatch = ["заглавие", "имя", "Компания", "метка"];
var urlMatch = ["гиперссылка", "Веб-сайт", "ссылка"];
var imageMatch = ["IMG", "образ", "картина", "Фото"];
var emailMatch = ["Эл. адрес", "электронная почта"];

var latMatch = ["широта", "лет", "ан", "emm_lat"];
var longMatch = ["долгота", "Л.Н.", "СПГ", "может", "длинный" , "emm_lng"];
var countryMatch = ["страна"];

var groupMatch = ["группа", "категория", "тип"];

var clickMessageInner = "Нажмите здесь, чтобы вставить данные";

var dataPresentMessageInner = "Нажмите здесь, чтобы скопировать / вставить данные";

var makeMapText = "Сделать карту";

var reMapText = "Re-карте";

var enableClusteringText = "включить кластеризации";
var clusterToolTipText = "Объединить плотные маркеры вместе, повышает производительность карту.";


var pinLabelToolTipText ="Показывает текст под штифт на карте";

var scrollWheelToolTipText = "Разрешить колесо мыши, чтобы изменить размер карты.";

var mouseOverToolTipText = "Показывать название (если таковой существует), когда курсор мыши находится над штифтом.";

var mouseOverMarkerText = "(Курсора) Маркер";

var advancedGroupToolTipText = "Позволяет фильтрацию до 20 различных цветов маркеров, или использовать для установки нескольких пользовательских изображений.";
var basicGroupToolTipText = "Позволяет фильтрацию до 10 различных цветов маркеров.";

var moreOptionToolTipText = "Включение левую панель для направлений и поиска радиус";

var moreOptionText = "Направления и Соседние фильтр";

var exportDataText = "Экспорт данных";

var exportDataToolTip = "Добавить возможность экспорта данных, отображаемых на карте.";

var zoomAndCenterToolTip = "Устанавливает начальный уровень масштабирования и центр к значениям, когда карта была сохранена. Умолчанию, чтобы уменьшить масштаб, так что все точки видны.";

var zoomAndCenterText = "Свой масштаб и центр";

var descriptionDirectionsToolTip = "Показать направление окно после нажатия на адрес в описании маркера.";
var descriptionDirectionsText = "Описание проезда";

var showLabelsToolTipText = "Показать метки в описаниях маркер (посмотреть образец при отключении этого).";

var numberedPinsToolTipText = "Показать пронумерованы штырьки, когда есть меньше 100. Не совместим с пользовательскими изображениями.";

var lineHeaderText = "линии, включая заголовки";

var foundText = "Найденный";

var numberedPinsText = "Показать Номерные штыри";

var noResultsText = "Нет результатов";

var bulkGeoRemainText = "Остальные пункты можно геокодированы нажав bulkgeo URL после сохранения карты.";

var geoSlownessText = "Google замедляется гео-кодирование после 250 адресов, вы хотели бы карту заполненные адреса?";

var locationAlert = "Варианты Место не установлены.";
var noDataAlert = "Данные нет.";

var geocodeingDataAlert = "Не все адреса могут быть отображены, вы хотите, чтобы отобразить адреса без ошибок?";

var unMappableDataAlert = "не может отображать данные; нет данных нашли координаты широты и долготы.";

var invalidEmailAlert = "Адрес электронной почты не является действительным.";

var headerMisMatchAlert = "Существует несоответствие данных между заголовками и данными";

var imageUploadAlert = "Был проблема загрузку изображений";

var stopGeoCodingAlert = "Остановка гео-кодирования из-за слишком много ошибок, проверьте адреса с ошибками и повторите попытку.";

var stopGeoCodingQuestion = "Остановился гео-кодирования из-за медлительности, вы хотите, чтобы отобразить геокодированы адреса?";

var itemsInText = "товар";

var thereWereText = "Были";

var errorText = "ошибки";

var displayTypeText = "умолчанию тип отображения карты";

var mouseScrollText = "Мышь Колесико прокрутки";

var invalidAliasText = "Недопустимый псевдоним.";

var showLabelsText = "показать этикетки";

var nameText = "имя";
var sizeText = "Размер";
var uploadStatusText = "Статус загрузки";
var imageText = "Образ";

var zoomInSearchText = "Увеличить окно поиска";

var zoomInSearchDetail = "Нажмите на предметы, которые соответствуют поиска, продолжая показывать другие предметы. Другой вариант заключается в увеличивать и уменьшать масштаб только элементы отображения, соответствующие поисковому.";

var stopMappingText = "Стоп";

var ofText = "из";

var headerWarningText = "Убедитесь, что заголовки и данные присутствуют.";

var addressText = "Адрес";
var lineNumberText = "Номер строки";

var errorMessageText = "Сообщение об ошибке";

var hideErrorsText = "Скрыть ошибки";

var showErrorsText = "Показать ошибки";

// time stuff
var hoursText = "часов";
var minutesText = "минут";
var secondsText = "секунд";
var lessThanSecondText = "менее 1 секунды";

var estimatedTimeText = "Оставшееся время:";
var processingText = "Обработка:";

var successfulText = "успешный";

var deleteText = "Удалить";

var noneText = "никто";

var failUrlSaveText = "Невозможно сохранить URL";
var successUrlSaveText = "Url Сохраненные";

var finishedProcessingText = "Готовые обработка"

var savedSuccessText = "Ваша карта была успешно сохранена.";

var showGroupMarkersText = "Показать группу маркеров";

var hideGroupMarkersText = "Скрыть группу маркеров";

var msSelectAll = "Выбрать все";

var msNumSelected = "выбранный";

var msNoneSelected = "Не выбрано, ничего не выбрано";

/////////// js_include stuff
var emptyText = "пустой";

var mapUrlText = "Карту Ссылка";

var geoCodeMore = "Автоматически Гео-код до более 2200 элементов, нажав";

var mapSaveProblemText = "Был проблема сохранения карты.";

var editText = "редактировать текст";

var validUrlChars = "Допустимые символы цифры, буквы (A-Za-Z), подчеркивания (_) и тире (-).";

var saveText = "Сохранить";

var cancelText = "Отмена";

var changedColumnsText = "Не следует добавлять или удалять столбцы из данных или изменить заголовки столбцов.";

// editPageRoutine stuff:

var confirmMapDeleteText = "Вы уверены, что хотите удалить карту?";

var settingsSavedText = "Настройки сохранены.";

var settingsNotSavedText = "Был проблема сохранения настроек.";

var mapNotDeleted = "Карта не может быть удалена.";

// global

ALL_FILTER = "Все";

// map control.js

var directionText = "Направления";

var directionErroText  = "Не удалось получить направление";

var getDirText = "Получить направление";

var revDirText = "Получить обратные направления";
var startText = "Начало";
var endText = "Конец";

var hereText = "Вот";

var currentLocationText = "Текущее местоположение";

var removeMarkerText = "Удалить маркер?";

var removePinText = "Удалить Pin";

var badStartAddressText = "неверный адрес начала";
var badEndAddressText ="invalid end address#";

var badRadiusText = "Неправильный радиус";

var emtpyLocationText = "Ошибка: Пустые расположение.";

var milesText = "миль";

var invalidLocationText = "Проблема нахождения местоположения";

var locationServicesAlert = "Убедитесь, что средства средства включены соответственно.";

var nearbyText = "Рядом, поблизости";

var findNearbyText = "Найти поблизости";

var mapMadeText = "Карта сделана с EasyMapMaker.com";

var clearText = "Очистить";

var hideDataText = "скрыть данные";
var showDataText = "Показать Data Export";


var travelText = "Путешествовать";
var drivingText = "Вождение";
var walkingText = "Гулять пешком";
var bicyclingText = "езда на велосипеде";
var transitText = "транзит";

var radiusText = "Радиус";
var showCircleText = "показать круг";

var siteLanguage = "ru";