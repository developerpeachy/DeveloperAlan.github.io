
// globals
var myMapOptions = ['Straße', 'Boden', 'Satellit', 'Hybride'];
var ALL_FILTER = "Alle";

var mObject = {};

mObject.selectedMapType = 'Straße';


var LANG_COLOR_LIST = ["Rot", "Blau", "Grün", "Gelb", "Orange", "Lila", "Braun", "Rosa", "Dunkelgrün", "Hellblau", "Dunkelpink", "Königsblau", "Blau Grün", "Hellgrün grün", "rosa lila", "Gold", "Brown 2", "Purpur", "Dunkelgrau", "Hellgrau", "Mokassin"];

var labelNames = ["Adresse", "Stadt",  "Staat / Provinz", "Postleitzahl", "Land", "Breite", "Länge",
    "Marker Titel", "URL (Website)", "(Webseite) Bild", "(Website) E-Mail", "Gruppe (Marker Farben)", "Pin-Aufkleber"
];


// values to match email, city, address, etc
var addressMatch = ["Adresse", "Adressen", "Straße", "Straßen"];
var negAddressMatch = ["Email", "E-Mail"];
var cityMatch = ["Stadt", "Städte", "Stadt", "Städte"];
var zipMatch = ["Reißverschluss", "Postleitzahl", "Postleitzahl", "Postleitzahl", "Postleitzahl", "Postleitzahl", "Post-"];

var stateMatch = ["Bundesland", "Region", "Provinz"];
var titleMatch = ["Titel", "Name", "Unternehmen", "Etikette"];
var urlMatch = ["url", "Webseite", "Link"];
var imageMatch = ["img", "Image", "Bild", "Foto"];
var emailMatch = ["Email", "E-Mail"];

var latMatch = ["Breite", "Jahre", "en", "emm_lat"];
var longMatch = ["Länge", "ln", "lng", "können", "lange" , "emm_lng"];
var countryMatch = ["Land"];

var groupMatch = ["Gruppe", "Kategorie", "Art"];

var clickMessageInner = "Klicken Sie hier, um die Paste Daten";

var dataPresentMessageInner = "Klicken Sie hier zum Kopieren / Einfügen Daten";

var makeMapText = "machen Karte";

var reMapText = "Re-Map";

var enableClusteringText = "ermöglichen clustering";
var clusterToolTipText = "Kombinieren dichten Markierungen zusammen, verbessert die Karte Leistung.";


var pinLabelToolTipText ="Zeigt Text der Pin auf der Karte";

var scrollWheelToolTipText = "Lassen Sie das Mausrad, um die Karte zu ändern.";

var mouseOverToolTipText = "Zeigen Sie den Titel (falls vorhanden), wenn die Maus über einen Stift.";

var mouseOverMarkerText = "(Mouse-over) Marker";

var advancedGroupToolTipText = "Ermöglicht Filterung auf bis zu 20 verschiedenen Markerfarben oder mehrere benutzerdefinierte Bilder Satz verwenden.";
var basicGroupToolTipText = "Ermöglicht Filterung auf bis zu 10 verschiedene Marker Farben.";

var moreOptionToolTipText = "Aktivieren eines linken Seite durch Richtungen und eine Umkreissuche";

var moreOptionText = "Anfahrt und der Nähe Filter";

var exportDataText = "Daten exportieren";

var exportDataToolTip = "Fügen Sie die Möglichkeit, die Daten auf der Karte angezeigt zu exportieren.";

var zoomAndCenterToolTip = "Stellt die Ausgangszoomstufe und in der Mitte zu den Werten der, wenn die Karte gespeichert wurde. Die Standardeinstellung ist, um zu verkleinern, so dass alle Punkte sichtbar sind.";

var zoomAndCenterText = "Individuelle Zoom und Zentrum";

var descriptionDirectionsToolTip = "Zeige Fahrtrichtung Box nach der Markierung Beschreibung auf der Adresse klicken.";
var descriptionDirectionsText = "Beschreibung Wegbeschreibung";

var showLabelsToolTipText = "Labels anzeigen in Marker Beschreibungen (die Probe anzeigen, wenn diese zu deaktivieren).";

var numberedPinsToolTipText = "Zeige nummerierten Stifte, wenn es weniger als 100. Nicht mit eigenen Bildern kompatibel.";

var lineHeaderText = "Linien einschließlich Header";

var foundText = "gefunden";

var numberedPinsText = "Zeige Nummerierte Pins";

var noResultsText = "Keine Ergebnisse";

var bulkGeoRemainText = "Die restlichen Elemente können durch Klicken auf die bulkgeo url nach dem Speichern der Karte geo-codiert werden.";

var geoSlownessText = "Google verlangsamt Geokodierung nach 250 Adressen, möchten Sie die ausgefüllten Adressen abzubilden?";

var locationAlert = "Standort-Optionen werden nicht gesetzt.";
var noDataAlert = "Die Daten sind nicht vorhanden.";

var geocodeingDataAlert = "Nicht alle Adressen abgebildet werden kann, wollen Sie die Adressen fehlerfrei abzubilden?";

var unMappableDataAlert = "Es werden keine Daten abzubilden; keine Daten mit Längen- und Breitenkoordinaten gefunden.";

var invalidEmailAlert = "Die E-Mail-Adresse ist nicht gültig.";

var headerMisMatchAlert = "Es ist ein Datenfehlanpassung zwischen Kopf- und Daten";

var imageUploadAlert = "Es gab ein Problem Ihre Bilder hochladen";

var stopGeoCodingAlert = "Stoppen Geo-Codierung durch zu viele Fehler, überprüfen Sie bitte die Adressen mit Fehler und versuchen Sie es erneut.";

var stopGeoCodingQuestion = "Gestoppt Geo-Codierung durch Langsamkeit, haben Sie die geo-codierten Adressen zugeordnet werden soll?";

var itemsInText = "Artikel im";

var thereWereText = "Dort gab es";

var errorText = "Fehler";

var displayTypeText = "Standardkartenanzeigetyp";

var mouseScrollText = "Maus-Scrollrad";

var invalidAliasText = "Ungültige alias.";

var showLabelsText = "Labels anzeigen";

var nameText = "Name";
var sizeText = "Größe";
var uploadStatusText = "Upload-Status";
var imageText = "Image";

var zoomInSearchText = "Vergrößern Suchfeld";

var zoomInSearchDetail = "Zoom in Elemente, die den Suchkriterien entsprechen, während noch andere Elemente zeigt. Andere Möglichkeit ist in und nur Anzeigeelemente den Suchbegriff um es zu vergrößern.";

var stopMappingText = "Halt";

var ofText = "von";

var headerWarningText = "Stellen Sie sicher, Header und Daten vorhanden sind.";

var addressText = "Adresse";
var lineNumberText = "Zeilennummer";

var errorMessageText = "Fehlermeldung";

var hideErrorsText = "ausblenden Fehler";

var showErrorsText = "Fehler anzeigen";

// time stuff
var hoursText = "Stunden";
var minutesText = "Protokoll";
var secondsText = "Sekunden";
var lessThanSecondText = "weniger als 1 Sekunde";

var estimatedTimeText = "Geschätzte verbleibende Zeit:";
var processingText = "Verarbeitung:";

var successfulText = "Erfolgreich";

var deleteText = "Löschen";

var noneText = "keiner";

var failUrlSaveText = "URL kann nicht zu retten";
var successUrlSaveText = "URL Gespeichert";

var finishedProcessingText = "Fertigbearbeitung"

var savedSuccessText = "Ihre Karte wurde erfolgreich gespeichert.";

var showGroupMarkersText = "Gruppe anzeigen Marker";

var hideGroupMarkersText = "Ausblenden Gruppe Marker";

var msSelectAll = "Alles auswählen";

var msNumSelected = "Ausgewählt";

var msNoneSelected = "Nichts ausgewählt";

/////////// js_include stuff
var emptyText = "Leer";

var mapUrlText = "Die Karte URL ist";

var geoCodeMore = "Automatisches Geo-Code bis zu 2200 weitere Objekte durch Anklicken";

var mapSaveProblemText = "Es gab ein Problem in der Karte zu speichern.";

var editText = "bearbeiten von Text";

var validUrlChars = "Gültige Zeichen sind Zahlen, Buchstaben (a-zA-Z), Unterstriche (_) und Bindestriche (-).";

var saveText = "sparen";

var cancelText = "Stornieren";

var changedColumnsText = "Nicht Spalten aus den Daten hinzufügen oder entfernen oder Spaltenüberschriften ändern.";

// editPageRoutine stuff:

var confirmMapDeleteText = "Sind Sie sicher, dass Sie die Karte zu löschen?";

var settingsSavedText = "Einstellungen gespeichert.";

var settingsNotSavedText = "Es gab ein Problem Spareinstellungen.";

var mapNotDeleted = "Die Karte konnte nicht gelöscht werden.";

// global

ALL_FILTER = "Alle";

// map control.js

var directionText = "Wegbeschreibung";

var directionErroText  = "Konnte Richtungen erhalten";

var getDirText = "Anweisungen bekommen";

var revDirText = "Umgekehrte Richtung";
var startText = "Anfang";
var endText = "Ende";

var hereText = "Hier";

var currentLocationText = "Aktueller Standort";

var removeMarkerText = "Entfernen Sie die Markierung?";

var removePinText = "entfernen Pin";

var badStartAddressText = "ungültige Startadresse";
var badEndAddressText ="invalid end address#";

var badRadiusText = "Ungültige Radius";

var emtpyLocationText = "Fehler: Blank Lage.";

var milesText = "Meilen";

var invalidLocationText = "Problem der Suche nach dem Standort";

var locationServicesAlert = "Stellen Sie sicher, standortbezogene Dienste sind in geeigneter Weise aktiviert.";

var nearbyText = "Hier in der Nähe";

var findNearbyText = "Finden in der Nähe";

var mapMadeText = "Karte gemacht mit EasyMapMaker.com";

var clearText = "Klar";

var hideDataText = "verstecken Daten";
var showDataText = "Zeigen Daten exportieren";


var travelText = "Reise";
var drivingText = "Fahren";
var walkingText = "Gehen";
var bicyclingText = "Radfahren";
var transitText = "Transit";

var radiusText = "Radius";
var showCircleText = "Show Kreises";

var siteLanguage = "de";