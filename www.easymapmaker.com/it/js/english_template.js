
// globals
var myMapOptions = ['strada', 'terra', 'Satellitare', 'Ibrido'];
var ALL_FILTER = "Tutti";

var mObject = {};

mObject.selectedMapType = 'strada';


var LANG_COLOR_LIST = ["Rosso", "Blu", "Verde", "Giallo", "arancia", "Viola", "colore marrone", "Rosa", "Verde scuro", "Blu pallido", "Rosa scuro", "Blu reale", "Blu verde", "Verde lime", "rosa viola", "Oro", "Brown 2", "Cremisi", "Grigio scuro", "Grigio chiaro", "mocassino"];

var labelNames = ["Indirizzo", "città",  "Stato / Provincia", "Zip / Codice postale", "Nazione", "Latitudine", "Longitudine",
    "Marker Titolo", "URL (sito web)", "(Sito web) Immagine", "(Sito web) E-mail", "Gruppo (colori marcatore)", "Pin Etichetta"
];


// values to match email, city, address, etc
var addressMatch = ["Indirizzo", "indirizzi", "Via", "strade"];
var negAddressMatch = ["e-mail", "e-mail"];
var cityMatch = ["città", "città", "cittadina", "città"];
var zipMatch = ["cerniera lampo", "C.A.P", "codice postale", "C.A.P", "codice postale", "codice postale", "postale"];

var stateMatch = ["stato", "regione", "Provincia"];
var titleMatch = ["titolo", "Nome", "società", "etichetta"];
var urlMatch = ["URL", "sito web", "collegamento"];
var imageMatch = ["img", "Immagine", "immagine", "foto"];
var emailMatch = ["e-mail", "e-mail"];

var latMatch = ["latitudine", "anni", "it", "emm_lat"];
var longMatch = ["longitudine", "ln", "lng", "lattina", "lungo" , "emm_lng"];
var countryMatch = ["nazione"];

var groupMatch = ["gruppo", "categoria", "Digitare"];

var clickMessageInner = "Clicca qui per incollare i dati";

var dataPresentMessageInner = "Clicca qui per copiare i dati / incollare";

var makeMapText = "Fai la mappa";

var reMapText = "Re-Map";

var enableClusteringText = "abilitare il clustering";
var clusterToolTipText = "Combinare marcatori dense insieme, migliora le prestazioni mappa.";


var pinLabelToolTipText ="Mostra testo sotto il perno sulla mappa";

var scrollWheelToolTipText = "Lasciare che la rotella del mouse per ridimensionare la mappa.";

var mouseOverToolTipText = "Mostra il titolo (se ne esiste uno) quando il mouse si trova sopra un perno.";

var mouseOverMarkerText = "(Passaggio del mouse) Marker";

var advancedGroupToolTipText = "Permette il filtraggio su un massimo di 20 colori diversi marcatori, o utilizzare per impostare più immagini personalizzate.";
var basicGroupToolTipText = "Permette il filtraggio su un massimo di 10 colori diversi marcatori.";

var moreOptionToolTipText = "Attivare un pannello di sinistra per le direzioni e un raggio di ricerca";

var moreOptionText = "Indicazioni e filtro nelle vicinanze";

var exportDataText = "Esporta dati";

var exportDataToolTip = "Aggiungere la possibilità di esportare i dati visualizzati sulla mappa.";

var zoomAndCenterToolTip = "Imposta il livello di zoom iniziale e centrale ai valori quando la mappa è stato salvato. L&#39;impostazione predefinita è per diminuire in modo che tutti i punti siano visibili.";

var zoomAndCenterText = "Zoom personalizzato e Centro";

var descriptionDirectionsToolTip = "Mostra cabina di regia dopo aver fatto clic sull&#39;indirizzo nella descrizione del marcatore.";
var descriptionDirectionsText = "Itinerari";

var showLabelsToolTipText = "Mostra etichette nelle descrizioni dei marker (vedere l&#39;esempio in cui la disattivazione di questa).";

var numberedPinsToolTipText = "Mostra numerata perni quando ci sono meno di 100. Non compatibile con immagini personalizzate.";

var lineHeaderText = "linee, tra cui intestazioni";

var foundText = "Trovato";

var numberedPinsText = "Mostra numerato Pins";

var noResultsText = "Nessun risultato";

var bulkGeoRemainText = "Gli elementi rimanenti possono essere geo-codificati cliccando l&#39;URL bulkgeo dopo aver salvato la mappa.";

var geoSlownessText = "Google rallenta geo-codifica dopo 250 indirizzi, vuoi per mappare gli indirizzi completi?";

var locationAlert = "le opzioni di localizzazione non sono impostate.";
var noDataAlert = "Dati non è presente.";

var geocodeingDataAlert = "Non tutti gli indirizzi possono essere mappati, vuoi mappare gli indirizzi senza errori?";

var unMappableDataAlert = "Non è possibile mappare i dati; Nessun dato trovato con le coordinate di latitudine e longitudine.";

var invalidEmailAlert = "L&#39;indirizzo email non è valido.";

var headerMisMatchAlert = "C&#39;è una mancata corrispondenza dei dati tra le intestazioni ei dati";

var imageUploadAlert = "C&#39;è stato un problema di caricare le immagini";

var stopGeoCodingAlert = "Arresto geo-codifica a causa di troppi errori, verificare gli indirizzi con gli errori e riprovare.";

var stopGeoCodingQuestion = "Arrestato geo-codifica a causa di lentezza, vuoi mappare gli indirizzi geo-codificati?";

var itemsInText = "articoli in";

var thereWereText = "C&#39;erano";

var errorText = "errori";

var displayTypeText = "di default il tipo di visualizzazione della mappa";

var mouseScrollText = "Rotella di scorrimento del mouse";

var invalidAliasText = "alias non valido.";

var showLabelsText = "Mostra etichette";

var nameText = "Nome";
var sizeText = "Dimensione";
var uploadStatusText = "Carica di stato";
var imageText = "Immagine";

var zoomInSearchText = "Zoom In Search Box";

var zoomInSearchDetail = "Zoom in oggetti che corrispondono alla ricerca, pur mostrando altri oggetti. Altra opzione è quella di ingrandire e solo gli elementi di visualizzazione che corrispondono alla ricerca.";

var stopMappingText = "Stop";

var ofText = "di";

var headerWarningText = "Assicurarsi che le intestazioni ei dati sono presenti.";

var addressText = "Indirizzo";
var lineNumberText = "Numero di riga";

var errorMessageText = "Messaggio di errore";

var hideErrorsText = "Nascondi errori";

var showErrorsText = "Mostra errori";

// time stuff
var hoursText = "ore";
var minutesText = "minuti";
var secondsText = "secondi";
var lessThanSecondText = "meno di 1 secondo";

var estimatedTimeText = "Tempo rimanente stimato:";
var processingText = "Lavorazione:";

var successfulText = "Riuscito";

var deleteText = "cancellare";

var noneText = "nessuna";

var failUrlSaveText = "Impossibile salvare URL";
var successUrlSaveText = "uRL salvati";

var finishedProcessingText = "finito il trattamento"

var savedSuccessText = "La mappa è stata salvata con successo.";

var showGroupMarkersText = "Mostra marker";

var hideGroupMarkersText = "Hide marker";

var msSelectAll = "Seleziona tutto";

var msNumSelected = "Selezionato";

var msNoneSelected = "Nessuno selezionato";

/////////// js_include stuff
var emptyText = "Vuoto";

var mapUrlText = "La mappa url è";

var geoCodeMore = "Automaticamente Geo-codice fino a 2200 più elementi cliccando";

var mapSaveProblemText = "C&#39;è stato un problema durante il salvataggio della mappa.";

var editText = "modificare il testo";

var validUrlChars = "I caratteri validi sono numeri, lettere (a-zA-Z), di sottolineatura (_) e trattini (-).";

var saveText = "Salvare";

var cancelText = "Annulla";

var changedColumnsText = "Non aggiungere o rimuovere colonne di dati o modificare le intestazioni delle colonne.";

// editPageRoutine stuff:

var confirmMapDeleteText = "Sei sicuro di voler cancellare la mappa?";

var settingsSavedText = "Impostazioni salvate.";

var settingsNotSavedText = "C&#39;è stato un problema durante il salvataggio delle impostazioni.";

var mapNotDeleted = "La mappa non è stato possibile eliminare.";

// global

ALL_FILTER = "Tutti";

// map control.js

var directionText = "Indicazioni";

var directionErroText  = "Impossibile ottenere indicazioni stradali";

var getDirText = "Ottenere direzioni";

var revDirText = "Ottieni direzioni invertite";
var startText = "Inizio";
var endText = "Fine";

var hereText = "Qui";

var currentLocationText = "Posizione attuale";

var removeMarkerText = "Rimuovere il marcatore?";

var removePinText = "rimuovere Pin";

var badStartAddressText = "indirizzo di partenza non valida";
var badEndAddressText ="invalid end address#";

var badRadiusText = "raggio non valido";

var emtpyLocationText = "Errore: posizione vuota.";

var milesText = "miglia";

var invalidLocationText = "Problema trovare la posizione";

var locationServicesAlert = "Assicurarsi che i servizi di localizzazione sono abilitati in modo appropriato.";

var nearbyText = "Vicino";

var findNearbyText = "Trova nelle vicinanze";

var mapMadeText = "Mappa realizzato con EasyMapMaker.com";

var clearText = "Chiaro";

var hideDataText = "nascondere i dati";
var showDataText = "Visualizza Esporta dati";


var travelText = "Viaggio";
var drivingText = "Guida";
var walkingText = "A passeggio";
var bicyclingText = "Andare in bicicletta";
var transitText = "Transito";

var radiusText = "Raggio";
var showCircleText = "spettacolo cerchio";

var siteLanguage = "it";