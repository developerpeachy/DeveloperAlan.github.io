
// globals
var myMapOptions = ['Ulica', 'ziemia', 'Satelita', 'Hybrydowy'];
var ALL_FILTER = "Wszystko";

var mObject = {};

mObject.selectedMapType = 'Ulica';


var LANG_COLOR_LIST = ["Czerwony", "niebieski", "Zielony", "Żółty", "Pomarańczowy", "Fioletowy", "Brązowy", "Różowy", "Ciemnozielony", "Jasnoniebieskie", "Ciemno różowy", "Królewski niebieski", "Niebieski zielony", "Limonkowy", "różowy fioletowy", "Złoto", "Brown 2", "Karmazynowy", "Ciemny szary", "Jasny szary", "mokasyn"];

var labelNames = ["Adres", "Miasto",  "Stan / Prowincja", "Kod pocztowy (pocztowy) Kod", "Kraj", "Szerokość", "Długość geograficzna",
    "marker Tytuł", "Url (strona internetowa)", "(Strona internetowa) Obrazek", "(Strona internetowa) E-mail", "Grupa (kolory marker)", "pin Label"
];


// values to match email, city, address, etc
var addressMatch = ["adres", "adresy", "ulica", "ulice"];
var negAddressMatch = ["e-mail", "e-mail"];
var cityMatch = ["miasto", "miasta", "miasto", "miast"];
var zipMatch = ["zamek błyskawiczny", "kod pocztowy", "kod pocztowy", "kod pocztowy", "Kod pocztowy", "kod pocztowy", "pocztowy"];

var stateMatch = ["stan", "region", "województwo"];
var titleMatch = ["tytuł", "Nazwa", "firma", "etykieta"];
var urlMatch = ["url", "stronie internetowej", "połączyć"];
var imageMatch = ["img", "obraz", "obraz", "zdjęcie"];
var emailMatch = ["e-mail", "e-mail"];

var latMatch = ["szerokość", "lat", "pl", "emm_lat"];
var longMatch = ["długość geograficzna", "ln", "LNG", "puszka", "długi" , "emm_lng"];
var countryMatch = ["kraj"];

var groupMatch = ["grupa", "Kategoria", "rodzaj"];

var clickMessageInner = "Kliknij tutaj, aby przenieść dane";

var dataPresentMessageInner = "Kliknij tutaj, aby skopiować dane / wklejania";

var makeMapText = "Bądź Mapa";

var reMapText = "Re-Map";

var enableClusteringText = "umożliwiają grupowanie";
var clusterToolTipText = "Połącz gęste markery razem, poprawia wydajność mapy.";


var pinLabelToolTipText ="Wyświetla tekst poniżej sworznia na mapie";

var scrollWheelToolTipText = "Pozostawić kółka myszki, aby zmienić rozmiar mapy.";

var mouseOverToolTipText = "Pokaż tytuł (jeśli taki istnieje), gdy wskaźnik myszy znajduje się nad sworzniem.";

var mouseOverMarkerText = "(Myszą) Marker";

var advancedGroupToolTipText = "Umożliwia filtrowanie do 20 różnych kolorów markerów, lub użyć do ustawiania wielu niestandardowych obrazów.";
var basicGroupToolTipText = "Umożliwia filtrowanie do 10 różnych kolorów markerów.";

var moreOptionToolTipText = "Włączanie lewy panel o kierunkach i szukanie promienia";

var moreOptionText = "Kierunki i filtr pobliżu";

var exportDataText = "Eksport danych";

var exportDataToolTip = "Dodaj możliwość eksportowania danych wyświetlanych na mapie.";

var zoomAndCenterToolTip = "Ustawia początkowy poziom powiększenia i centrum wartościom gdy mapa została zapisana. Domyślnie jest to, aby pomniejszyć więc wszystkie punkty są widoczne.";

var zoomAndCenterText = "Niestandardowe Powiększenie i Centrum";

var descriptionDirectionsToolTip = "Wyświetl okno kierunek po kliknięciu na adres strony w opisie znacznika.";
var descriptionDirectionsText = "Opis Kierunki";

var showLabelsToolTipText = "Pokaż etykiety w opisach Marker (zobaczyć próbkę po wyłączeniu tego).";

var numberedPinsToolTipText = "Pokaż ponumerowane piny, gdy jest mniej niż 100. Nie kompatybilne z własnych zdjęć.";

var lineHeaderText = "Linie tym nagłówkami";

var foundText = "Uznany";

var numberedPinsText = "Pokaż numerowana Pins";

var noResultsText = "Brak wyników";

var bulkGeoRemainText = "Pozostałe elementy mogą być geo-oznaczonych przez kliknięcie na link bulkgeo po zapisaniu mapę.";

var geoSlownessText = "Google spowalnia geokodowanie po 250 adresów, chcesz odwzorować adresy zakończone?";

var locationAlert = "Opcje lokalizacji nie są ustawione.";
var noDataAlert = "Dane nie jest obecny.";

var geocodeingDataAlert = "Nie wszystkie adresy mogą być odwzorowane, chcesz odwzorować adresy bez błędów?";

var unMappableDataAlert = "Nie można odwzorować dane; znaleziono ze współrzędnymi szerokości i długości geograficznej żadnych danych.";

var invalidEmailAlert = "Adres e-mail nie jest poprawny.";

var headerMisMatchAlert = "Istnieje niezgodność danych pomiędzy nagłówkami i danych";

var imageUploadAlert = "Wystąpił problem podczas przesyłania obrazów";

var stopGeoCodingAlert = "Zatrzymanie geokodowanie powodu zbyt wielu błędów, proszę sprawdzić adresy z błędami i spróbować ponownie.";

var stopGeoCodingQuestion = "Zatrzymany geokodowanie powodu powolności, chcesz mapować adresy geo kodowane?";

var itemsInText = "egzemplarze";

var thereWereText = "Byli";

var errorText = "błędy";

var displayTypeText = "Domyślny typ wyświetlania mapy";

var mouseScrollText = "Mysz scrollwheel";

var invalidAliasText = "Nieprawidłowy alias.";

var showLabelsText = "Pokaż etykiety";

var nameText = "Nazwa";
var sizeText = "Rozmiar";
var uploadStatusText = "Stan przesyłania";
var imageText = "Obraz";

var zoomInSearchText = "Zoom In Search Box";

var zoomInSearchDetail = "Powiększanie elementów pasujących do poszukiwania jednocześnie pokazując inne przedmioty. Inną opcją jest powiększanie i tylko wyświetlane pozycje pasujące do wyszukiwania.";

var stopMappingText = "Zatrzymać";

var ofText = "z";

var headerWarningText = "Upewnij się, że nagłówki i dane są obecne.";

var addressText = "Adres";
var lineNumberText = "Numer kolejki";

var errorMessageText = "Komunikat o błędzie";

var hideErrorsText = "Schowaj Błędy";

var showErrorsText = "Pokaż błędy";

// time stuff
var hoursText = "godzin";
var minutesText = "minuty";
var secondsText = "towary drugiej jakości";
var lessThanSecondText = "mniej niż 1 sekunda";

var estimatedTimeText = "Szacowany pozostały czas:";
var processingText = "Przetwarzanie:";

var successfulText = "Udany";

var deleteText = "Kasować";

var noneText = "Żaden";

var failUrlSaveText = "Nie można zapisać url";
var successUrlSaveText = "Url Zapisany";

var finishedProcessingText = "Zakończono przetwarzanie"

var savedSuccessText = "Twoja mapa została pomyślnie zapisana.";

var showGroupMarkersText = "Pokaż grupy Markery";

var hideGroupMarkersText = "Ukryj Grupa Markery";

var msSelectAll = "Zaznacz wszystko";

var msNumSelected = "Wybrany";

var msNoneSelected = "Nie wybrano";

/////////// js_include stuff
var emptyText = "Pusty";

var mapUrlText = "Mapa url jest";

var geoCodeMore = "Automatycznie Geo-code do 2200 więcej przedmiotów, klikając";

var mapSaveProblemText = "Podczas zapisywania mapę problemem.";

var editText = "Edycja tekstu";

var validUrlChars = "Poprawne znaki to cyfry, litery (a-zA-Z), podkreślenia (_) i myślniki (-).";

var saveText = "Zapisać";

var cancelText = "Anuluj";

var changedColumnsText = "Nie dodawać lub usuwać kolumny z danymi lub zmienić nagłówki kolumn.";

// editPageRoutine stuff:

var confirmMapDeleteText = "Czy na pewno chcesz usunąć mapę?";

var settingsSavedText = "Ustawienia zapisane.";

var settingsNotSavedText = "Podczas zapisywania ustawień problemem.";

var mapNotDeleted = "Mapa nie może zostać usunięty.";

// global

ALL_FILTER = "Wszystko";

// map control.js

var directionText = "Wskazówki";

var directionErroText  = "Nie udało się uzyskać wskazówki";

var getDirText = "Uzyskaj wskazówki dotyczące dojazdu";

var revDirText = "Wskazówki powrotu";
var startText = "Początek";
var endText = "Koniec";

var hereText = "Tutaj";

var currentLocationText = "Obecna lokalizacja";

var removeMarkerText = "Usuń znacznik?";

var removePinText = "Usuń Pin";

var badStartAddressText = "nieprawidłowy adres początkowy";
var badEndAddressText ="invalid end address#";

var badRadiusText = "Nieprawidłowy promień";

var emtpyLocationText = "Błąd: Puste miejsce.";

var milesText = "mile";

var invalidLocationText = "Problem ze znalezieniem lokalizacji";

var locationServicesAlert = "Upewnij się, że usługi lokalizacyjne są włączone odpowiednio.";

var nearbyText = "Blisko";

var findNearbyText = "Znajdź w pobliżu";

var mapMadeText = "Mapa wykonana z EasyMapMaker.com";

var clearText = "Jasny";

var hideDataText = "Ukryj dane";
var showDataText = "Zobacz Eksport danych";


var travelText = "Podróżować";
var drivingText = "Napędowy";
var walkingText = "Pieszy";
var bicyclingText = "Rower";
var transitText = "Tranzyt";

var radiusText = "Promień";
var showCircleText = "pokaż krąg";

var siteLanguage = "pl";