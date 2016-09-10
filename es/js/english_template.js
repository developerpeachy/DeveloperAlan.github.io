
// globals
var myMapOptions = ['Calle', 'terreno', 'Satélite', 'Híbrido'];
var ALL_FILTER = "Todas";

var mObject = {};

mObject.selectedMapType = 'Calle';


var LANG_COLOR_LIST = ["rojo", "Azul", "Verde", "Amarillo", "naranja", "Morado", "marrón", "Rosado", "Verde oscuro", "Azul pálido", "Rosa oscuro", "Azul real", "Azul verde", "Verde lima", "Rosado morado", "Oro", "2 de brown", "carmesí", "Gris oscuro", "Gris claro", "mocasín"];

var labelNames = ["Dirección", "Ciudad",  "Estado / Provincia", "Código Postal (Postal) Código", "País", "Latitud", "Longitud",
    "marcador Título", "URL (sitio web)", "(Sitio web) Image", "(Sitio web) E-mail", "Grupo (colores de marcador)", "pin Etiqueta"
];


// values to match email, city, address, etc
var addressMatch = ["dirección", "direcciones", "calle", "calles"];
var negAddressMatch = ["correo electrónico", "e-mail"];
var cityMatch = ["ciudad", "ciudades", "ciudad", "pueblos"];
var zipMatch = ["cremallera", "código postal", "código postal", "código postal", "código postal", "código postal", "postal"];

var stateMatch = ["estado", "región", "provincia"];
var titleMatch = ["título", "nombre", "empresa", "etiqueta"];
var urlMatch = ["url", "sitio web", "enlazar"];
var imageMatch = ["img", "imagen", "imagen", "foto"];
var emailMatch = ["correo electrónico", "e-mail"];

var latMatch = ["latitud", "años", "en", "emm_lat"];
var longMatch = ["longitud", "En", "lng", "lata", "largo" , "emm_lng"];
var countryMatch = ["país"];

var groupMatch = ["grupo", "categoría", "tipo"];

var clickMessageInner = "Haga clic aquí para pegar datos";

var dataPresentMessageInner = "Haga clic aquí para copiar datos / pegar";

var makeMapText = "Hacer Mapa";

var reMapText = "Re-Mapa";

var enableClusteringText = "permitir a la agrupación";
var clusterToolTipText = "Combinar trazos densos en conjunto, mejora el rendimiento del mapa.";


var pinLabelToolTipText ="Muestra de texto debajo del pin en el mapa";

var scrollWheelToolTipText = "Deje que la rueda del ratón para cambiar el tamaño del mapa.";

var mouseOverToolTipText = "Mostrar el título (si existe) cuando el ratón está sobre un alfiler.";

var mouseOverMarkerText = "(Mouse) Marcador";

var advancedGroupToolTipText = "Permite el filtrado de hasta 20 colores diferentes marcadores, o utilizar para configurar múltiples imágenes personalizadas.";
var basicGroupToolTipText = "Permite el filtrado de hasta 10 colores diferentes marcadores.";

var moreOptionToolTipText = "Habilitar un panel de la izquierda para direcciones y un radio de búsqueda";

var moreOptionText = "Direcciones y filtro Cerca";

var exportDataText = "Exportar datos";

var exportDataToolTip = "Añadir la capacidad de exportar los datos que se muestran en el mapa.";

var zoomAndCenterToolTip = "Establece el nivel de zoom de partida y el centro de los valores de cuando el mapa se salvó. El valor por defecto es para disminuir el zoom para que todos los puntos son visibles.";

var zoomAndCenterText = "Zoom personalizado y Centro";

var descriptionDirectionsToolTip = "Mostrar cuadro de dirección después de hacer clic en la dirección en la descripción marcador.";
var descriptionDirectionsText = "descripción llegar";

var showLabelsToolTipText = "Mostrar etiquetas en las descripciones de marcadores (ver la muestra de la hora de desactivar esto).";

var numberedPinsToolTipText = "Mostrar numerada patas cuando hay menos de 100. No es compatible con imágenes personalizadas.";

var lineHeaderText = "líneas, incluyendo las cabeceras";

var foundText = "Encontró";

var numberedPinsText = "Mostrar numerada prendedores";

var noResultsText = "No hay resultados";

var bulkGeoRemainText = "Los elementos restantes se pueden geocodificados haciendo clic en el URL bulkgeo después de guardar el mapa.";

var geoSlownessText = "Google se ralentiza geo-codificación después de 250 direcciones, le gustaría asignar las direcciones terminadas?";

var locationAlert = "no se establecen las opciones de ubicación.";
var noDataAlert = "Los datos no está presente.";

var geocodeingDataAlert = "No todas las direcciones se pueden asignar, es lo que desea asignar las direcciones sin errores?";

var unMappableDataAlert = "No se puede asignar los datos; No se encontraron datos con las coordenadas de latitud y longitud.";

var invalidEmailAlert = "La dirección de correo electrónico no es válida.";

var headerMisMatchAlert = "Hay una falta de coincidencia de datos entre los datos y encabezados";

var imageUploadAlert = "Hubo un problema al subir tus imágenes";

var stopGeoCodingAlert = "Dejar de geo-codificación debido a demasiados errores, por favor verifique las direcciones con los errores e inténtelo de nuevo.";

var stopGeoCodingQuestion = "Dejado de geo-codificación, debido a la lentitud, ¿quiere asignar las direcciones geocodificados?";

var itemsInText = "artículos en";

var thereWereText = "Había";

var errorText = "errores";

var displayTypeText = "por defecto el tipo de visualización del mapa";

var mouseScrollText = "Rueda de desplazamiento del ratón";

var invalidAliasText = "alias no válidos.";

var showLabelsText = "Mostrar etiquetas";

var nameText = "Nombre";
var sizeText = "tamaño";
var uploadStatusText = "Estado de la subida";
var imageText = "Imagen";

var zoomInSearchText = "Acercar campo de búsqueda";

var zoomInSearchDetail = "Zoom en elementos que coinciden con la búsqueda mientras que todavía muestra otros artículos. Otra opción es la de acercar y sólo los elementos en pantalla que concuerden con la búsqueda.";

var stopMappingText = "Detener";

var ofText = "de";

var headerWarningText = "Asegúrese de que los encabezados y los datos están presentes.";

var addressText = "Dirección";
var lineNumberText = "Número de línea";

var errorMessageText = "Mensaje de error";

var hideErrorsText = "Ocultar errores";

var showErrorsText = "Mostrar errores";

// time stuff
var hoursText = "horas";
var minutesText = "minutos";
var secondsText = "segundos";
var lessThanSecondText = "menos de 1 segundo";

var estimatedTimeText = "Tiempo restante estimado:";
var processingText = "Tratamiento:";

var successfulText = "Exitoso";

var deleteText = "Borrar";

var noneText = "ninguna";

var failUrlSaveText = "No se puede guardar url";
var successUrlSaveText = "url guardadas";

var finishedProcessingText = "Ha finalizado el procesamiento"

var savedSuccessText = "Su mapa se ha guardado correctamente.";

var showGroupMarkersText = "Mostrar grupo Marcadores";

var hideGroupMarkersText = "Ocultar grupo Marcadores";

var msSelectAll = "Seleccionar todo";

var msNumSelected = "Seleccionado";

var msNoneSelected = "Ninguna seleccionada";

/////////// js_include stuff
var emptyText = "Vacío";

var mapUrlText = "El mapa es url";

var geoCodeMore = "Automáticamente Geo-código hasta 2200 artículos más haciendo clic";

var mapSaveProblemText = "Hubo un problema al guardar el mapa.";

var editText = "editar texto";

var validUrlChars = "Los caracteres válidos son números, letras (a-zA-Z), guiones bajos (_) y guiones (-).";

var saveText = "Salvar";

var cancelText = "Cancelar";

var changedColumnsText = "No añadir o eliminar columnas de los datos o cambiar los encabezados de columna.";

// editPageRoutine stuff:

var confirmMapDeleteText = "¿Está seguro de que quiere borrar el mapa?";

var settingsSavedText = "Ajustes guardados.";

var settingsNotSavedText = "Hubo un problema al guardar la configuración.";

var mapNotDeleted = "El mapa no se ha podido eliminar.";

// global

ALL_FILTER = "Todas";

// map control.js

var directionText = "Direcciones";

var directionErroText  = "No se pudo obtener direcciones";

var getDirText = "Obtener indicaciones";

var revDirText = "Obtener direcciones de ida";
var startText = "comienzo";
var endText = "Final";

var hereText = "aquí";

var currentLocationText = "Ubicación actual";

var removeMarkerText = "Quitar el marcador?";

var removePinText = "remover Pin";

var badStartAddressText = "dirección de inicio no válido";
var badEndAddressText ="invalid end address#";

var badRadiusText = "radio no válido";

var emtpyLocationText = "Error: la ubicación en blanco.";

var milesText = "millas";

var invalidLocationText = "Problemas para encontrar la ubicación";

var locationServicesAlert = "Hacer que los servicios de localización estén activados adecuadamente.";

var nearbyText = "Cerca";

var findNearbyText = "Encuentra cercanos";

var mapMadeText = "Mapa hecho con EasyMapMaker.com";

var clearText = "Claro";

var hideDataText = "Ocultar datos";
var showDataText = "Los datos muestran Exportación";


var travelText = "Viajar";
var drivingText = "Conducción";
var walkingText = "Caminando";
var bicyclingText = "montar en bicicleta";
var transitText = "Tránsito";

var radiusText = "Radio";
var showCircleText = "espectáculo círculo";

var siteLanguage = "es";