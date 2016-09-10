
// globals
var myMapOptions = ['katu', 'maa', 'Satelliitti', 'Hybridi'];
var ALL_FILTER = "Kaikki";

var mObject = {};

mObject.selectedMapType = 'katu';


var LANG_COLOR_LIST = ["Punainen", "Sininen", "Vihreä", "Keltainen", "Oranssi", "Violetti", "Ruskea", "Vaaleanpunainen", "Tummanvihreä", "Vaaleansininen", "tumma pinkki", "Royal Blue", "Sinivihreä", "Limenvihreä", "purppura", "Kulta", "Brown 2", "karmiininpunainen", "Tumman harmaa", "Vaalean harmaa", "mokkasiini"];

var labelNames = ["Osoite", "Kaupunki",  "State / Province", "Zip (Postal) Koodi", "maa", "leveysaste", "pituusaste",
    "Marker Otsikko", "Url (verkkosivusto)", "(Verkkosivusto) Image", "(Verkkosivusto) E-mail", "Group (merkki väriä)", "pin Label"
];


// values to match email, city, address, etc
var addressMatch = ["osoite", "osoitteet", "katu", "kadut"];
var negAddressMatch = ["email", "sähköposti"];
var cityMatch = ["kaupunki", "kaupungit", "kaupunki", "kaupunkeja"];
var zipMatch = ["postinumero", "postinumero", "postinumero", "postinumero", "postinumero", "postinumero", "posti-"];

var stateMatch = ["osavaltio", "alue", "maakunta"];
var titleMatch = ["otsikko", "nimi", "yritys", "etiketti"];
var urlMatch = ["url", "verkkosivusto", "linkki"];
var imageMatch = ["img", "kuva", "kuva", "kuva"];
var emailMatch = ["email", "sähköposti"];

var latMatch = ["leveysaste", "vuotta", "en", "emm_lat"];
var longMatch = ["pituusaste", "ln", "lng", "voida", "pitkä" , "emm_lng"];
var countryMatch = ["maa"];

var groupMatch = ["ryhmä", "luokka", "tyyppi"];

var clickMessageInner = "Täältä liittää tiedot";

var dataPresentMessageInner = "Täältä kopioi / liitä data";

var makeMapText = "Tee Kartta";

var reMapText = "Re-Kartta";

var enableClusteringText = "mahdollistavat klustereiden";
var clusterToolTipText = "Yhdistä tiheä markkereita yhdessä, parantaa kartalla suorituskykyä.";


var pinLabelToolTipText ="Näyttää tekstin alla tappi kartalla";

var scrollWheelToolTipText = "Salli hiiren rullaa kokoa kartalla.";

var mouseOverToolTipText = "Näytä otsikko (jos sellainen on), kun hiiri on tappi.";

var mouseOverMarkerText = "(Hiiri-over) Marker";

var advancedGroupToolTipText = "Mahdollistaa suodatus jopa 20 eri merkki väriä, tai käytä asettaa useita mukautettuja kuvia.";
var basicGroupToolTipText = "Mahdollistaa suodatus jopa 10 eri merkki väriä.";

var moreOptionToolTipText = "Ota vasen paneeli suuntiin ja säde haku";

var moreOptionText = "Ajo ja Läheiset suodatin";

var exportDataText = "Vie tiedot";

var exportDataToolTip = "Lisää kyky viedä tiedot näkyvät kartalla.";

var zoomAndCenterToolTip = "Asettaa alkaa zoomauksen ja keskus arvoihin kun kartan tallennettiin. Oletuksena on loitontaa niin kaikki ovat näkyvissä.";

var zoomAndCenterText = "Custom Zoom ja keskus";

var descriptionDirectionsToolTip = "Näytä suunta laatikko jälkeen klikkaamalla osoitteen merkki kuvauksessa.";
var descriptionDirectionsText = "Kuvaus Directions";

var showLabelsToolTipText = "Näytä tarroja merkki kuvaukset (katso näyte, kun invaliditeettiin tätä).";

var numberedPinsToolTipText = "Näytä numeroidut nastat kun on vähemmän kuin 100. Ei yhteensopiva mukautettuja kuvia.";

var lineHeaderText = "linjat mukaan lukien otsikot";

var foundText = "Löydetty";

var numberedPinsText = "Näytä Numeroidut Pins";

var noResultsText = "Ei tuloksia";

var bulkGeoRemainText = "Loput kohteita voidaan geo-koodattu klikkaamalla bulkgeo url tallennuksen jälkeen kartan.";

var geoSlownessText = "Google hidastaa geo-koodaus jälkeen 250 osoitteet, haluaisit kartoittaa valmis osoitteet?";

var locationAlert = "Sijainti ei ole määritettynä.";
var noDataAlert = "Tiedot eivät ole läsnä.";

var geocodeingDataAlert = "Kaikkia osoitteet voidaan kartoittaa, haluat kartoittaa osoitteet virheittä?";

var unMappableDataAlert = "Ei voi karttaa data; Tietoja ei löytynyt leveys- ja pituuskoordinaatit.";

var invalidEmailAlert = "Sähköpostiosoite ei kelpaa.";

var headerMisMatchAlert = "On tietojen epäsuhta otsikot ja data";

var imageUploadAlert = "Ongelma kuvien lataamista";

var stopGeoCodingAlert = "Pysäyttäminen geo-koodaus takia liikaa virheitä, tarkista osoitteet virheet ja yritä uudelleen.";

var stopGeoCodingQuestion = "Pysäytetty geo-koodaus takia hitaus, haluat kartoittaa geo-koodattu osoitteita?";

var itemsInText = "kohteita";

var thereWereText = "Siellä oli";

var errorText = "virheitä";

var displayTypeText = "oletus kartta näytön tyyppi";

var mouseScrollText = "hiiri Selauspyörä";

var invalidAliasText = "Virheellinen alias.";

var showLabelsText = "osoittavat merkinnät";

var nameText = "Nimi";
var sizeText = "Koko";
var uploadStatusText = "latauksen tila";
var imageText = "Kuva";

var zoomInSearchText = "Zoom In Search Box";

var zoomInSearchDetail = "Zoomata kohteita, jotka vastaavat hakua näytetään edelleen muita kohteita. Toinen vaihtoehto on lähentää ja vain näyttää alkiot hakukriteerit.";

var stopMappingText = "Stop";

var ofText = "of";

var headerWarningText = "Varmista otsikot ja tiedot ovat läsnä.";

var addressText = "Osoite";
var lineNumberText = "rivinumero";

var errorMessageText = "Virheviesti";

var hideErrorsText = "Piilota virheet";

var showErrorsText = "Näytä virheet";

// time stuff
var hoursText = "tuntia";
var minutesText = "minuuttia";
var secondsText = "sekuntia";
var lessThanSecondText = "alle 1 sekunti";

var estimatedTimeText = "Arvioitu jäljellä oleva aika:";
var processingText = "käsittely:";

var successfulText = "onnistunut";

var deleteText = "Poistaa";

var noneText = "ei mitään";

var failUrlSaveText = "Ei voitu tallentaa url";
var successUrlSaveText = "url Tallennetut";

var finishedProcessingText = "käsitelty"

var savedSuccessText = "Karttasi tallentaminen onnistui.";

var showGroupMarkersText = "Näytä ryhmämerkkejä";

var hideGroupMarkersText = "Piilota ryhmämerkkejä";

var msSelectAll = "Valitse kaikki";

var msNumSelected = "Valitut";

var msNoneSelected = "Ei valittu";

/////////// js_include stuff
var emptyText = "Tyhjä";

var mapUrlText = "Kartta url on";

var geoCodeMore = "Automaattisesti Geo-koodin jopa 2200 lisää kohteita napsauttamalla";

var mapSaveProblemText = "Ongelma säästö kartan.";

var editText = "muokata tekstiä";

var validUrlChars = "Kelvolliset merkit ovat numeroita, kirjaimia (AZ az), alaviivoja (_) ja viivoja (-).";

var saveText = "Tallentaa";

var cancelText = "Peruuttaa";

var changedColumnsText = "Älä lisää tai poista sarakkeita tietoja tai muuttaa sarakeotsikoita.";

// editPageRoutine stuff:

var confirmMapDeleteText = "Oletko varma, että haluat poistaa kartan?";

var settingsSavedText = "Asetukset tallennettu.";

var settingsNotSavedText = "Ongelma säästö asetuksia.";

var mapNotDeleted = "Karttaa ei voitu poistaa.";

// global

ALL_FILTER = "Kaikki";

// map control.js

var directionText = "Ohjeet";

var directionErroText  = "Ei voitu saada reittiohjeita";

var getDirText = "Hanki reittiohjeet";

var revDirText = "Hae päinvastaiset reittiohjeet";
var startText = "alku";
var endText = "pää";

var hereText = "Tässä";

var currentLocationText = "Tämänhetkinen olinpaikka";

var removeMarkerText = "Poista merkki?";

var removePinText = "Poista Pin";

var badStartAddressText = "virheellinen aloitusosoite";
var badEndAddressText ="invalid end address#";

var badRadiusText = "Virheellinen säde";

var emtpyLocationText = "Virhe: Tyhjä paikka.";

var milesText = "mailia";

var invalidLocationText = "Ongelma löytää paikka";

var locationServicesAlert = "Varmista paikannuspalvelut ovat käytössä asianmukaisesti.";

var nearbyText = "Lähistöllä";

var findNearbyText = "Etsi Lähistöllä";

var mapMadeText = "Kartta tehty EasyMapMaker.com";

var clearText = "Kirkas";

var hideDataText = "Piilota tiedot";
var showDataText = "Show Vie tiedot";


var travelText = "Matkustaa";
var drivingText = "Ajo";
var walkingText = "Kävely";
var bicyclingText = "Polkupyörä";
var transitText = "kauttakulku";

var radiusText = "Säde";
var showCircleText = "näytä ympyrä";

var siteLanguage = "fi";