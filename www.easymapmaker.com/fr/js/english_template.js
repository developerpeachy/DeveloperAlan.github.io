
// globals
var myMapOptions = ['rue', 'Terrain', 'Satellite', 'Hybride'];
var ALL_FILTER = "Tout";

var mObject = {};

mObject.selectedMapType = 'rue';


var LANG_COLOR_LIST = ["rouge", "Bleu", "vert", "Jaune", "Orange", "Violet", "marron", "Rose", "Vert foncé", "Bleu pâle", "Rose foncé", "Bleu royal", "Bleu vert", "Vert citron", "rose violet", "Or", "Brown 2", "cramoisi", "Gris foncé", "Gris clair", "Mocassin"];

var labelNames = ["Adresse", "Ville",  "État / Province", "Zip / code postal", "Pays", "Latitude", "Longitude",
    "marker Titre", "URL (site web)", "(Site web) image", "(Site web) E-mail", "Groupe (couleurs de marqueurs)", "Pin Étiquette"
];


// values to match email, city, address, etc
var addressMatch = ["adresse", "adresses", "rue", "des rues"];
var negAddressMatch = ["email", "email"];
var cityMatch = ["ville", "villes", "ville", "les villes"];
var zipMatch = ["Zip *: français", "code postal", "code postal", "code postal", "code postal", "code postal", "postal"];

var stateMatch = ["Etat", "région", "Province"];
var titleMatch = ["Titre", "prénom", "compagnie", "étiquette"];
var urlMatch = ["URL", "site Internet", "lien"];
var imageMatch = ["img", "image", "image", "photo"];
var emailMatch = ["email", "email"];

var latMatch = ["latitude", "ans", "fr", "emm_lat"];
var longMatch = ["longitude", "ln", "GNL", "boîte", "longue" , "emm_lng"];
var countryMatch = ["Pays"];

var groupMatch = ["groupe", "Catégorie", "type"];

var clickMessageInner = "Cliquez ici pour coller des données";

var dataPresentMessageInner = "Cliquez ici pour copier des données / coller";

var makeMapText = "Créer une carte";

var reMapText = "Re-Map";

var enableClusteringText = "permettre le regroupement";
var clusterToolTipText = "Combinez marqueurs denses ensemble, améliore les performances de la carte.";


var pinLabelToolTipText ="Affiche texte ci-dessous la broche sur la carte";

var scrollWheelToolTipText = "Laisser la molette de la souris pour redimensionner la carte.";

var mouseOverToolTipText = "Afficher le titre (le cas échéant) lorsque la souris est sur une broche.";

var mouseOverMarkerText = "(Mouse-over) Marker";

var advancedGroupToolTipText = "Permet de filtrer sur un maximum de 20 couleurs de marqueurs différents, ou utiliser pour définir plusieurs images personnalisées.";
var basicGroupToolTipText = "Permet de filtrer sur un maximum de 10 couleurs de marqueurs différents.";

var moreOptionToolTipText = "Permettre à un panneau de gauche pour les directions et un rayon de recherche";

var moreOptionText = "Indications et filtre à proximité";

var exportDataText = "Exporter des données";

var exportDataToolTip = "Ajouter la possibilité d&#39;exporter les données affichées sur la carte.";

var zoomAndCenterToolTip = "Définit le niveau de zoom de départ et centre vers les valeurs de lorsque la carte a été acceptée. La valeur par défaut est pour rétrécir si tous les points sont visibles.";

var zoomAndCenterText = "Zoom personnalisé et Centre";

var descriptionDirectionsToolTip = "Afficher boîte de direction après avoir cliqué sur l&#39;adresse dans la description du marqueur.";
var descriptionDirectionsText = "description Indications";

var showLabelsToolTipText = "Afficher les étiquettes dans les descriptions des marqueurs (voir l&#39;échantillon lors de la désactivation de cette).";

var numberedPinsToolTipText = "Voir numérotée broches quand il y a moins de 100. Non compatible avec des images personnalisées.";

var lineHeaderText = "lignes, y compris les en-têtes";

var foundText = "A trouvé";

var numberedPinsText = "Voir numérotée Pins";

var noResultsText = "Aucun résultat";

var bulkGeoRemainText = "Les autres éléments peuvent être géo-codées en cliquant sur l&#39;URL de bulkgeo après avoir sauvé la carte.";

var geoSlownessText = "Google ralentit géocodage après 250 adresses, souhaitez-vous pour mapper les adresses terminé?";

var locationAlert = "Options d&#39;emplacement ne sont pas définies.";
var noDataAlert = "Données ne sont pas présents.";

var geocodeingDataAlert = "Pas toutes les adresses peuvent être mappés, voulez-vous la carte les adresses sans erreurs?";

var unMappableDataAlert = "Vous ne pouvez pas mapper les données; Aucune donnée trouvée avec les coordonnées de latitude et de longitude.";

var invalidEmailAlert = "L&#39;adresse e-mail est incorrect.";

var headerMisMatchAlert = "Il existe un décalage de données entre les en-têtes et des données";

var imageUploadAlert = "Il y avait un problème de télécharger vos images";

var stopGeoCodingAlert = "Arrêt de géocodage à cause de trop d&#39;erreurs, s&#39;il vous plaît vérifier les adresses avec des erreurs et essayez à nouveau.";

var stopGeoCodingQuestion = "Arrêté géocodage en raison de la lenteur, voulez-vous pour mapper les adresses géocodées?";

var itemsInText = "pièces";

var thereWereText = "Il y avait";

var errorText = "les erreurs";

var displayTypeText = "défaut Type d&#39;affichage de carte";

var mouseScrollText = "souris Molette de défilement";

var invalidAliasText = "alias non valide.";

var showLabelsText = "Afficher les étiquettes";

var nameText = "prénom";
var sizeText = "Taille";
var uploadStatusText = "Télécharger Status";
var imageText = "image";

var zoomInSearchText = "Zoom In Search Box";

var zoomInSearchDetail = "Zoomez sur les articles qui correspondent à la recherche tout en montrant d&#39;autres articles. Une autre option consiste à agrandir les éléments d&#39;affichage dans et seulement correspondant à la recherche.";

var stopMappingText = "Arrêtez";

var ofText = "de";

var headerWarningText = "Assurez-vous que les en-têtes et les données sont présentes.";

var addressText = "Adresse";
var lineNumberText = "Numéro de ligne";

var errorMessageText = "Message d&#39;erreur";

var hideErrorsText = "Masquer les erreurs";

var showErrorsText = "Afficher les erreurs";

// time stuff
var hoursText = "heures";
var minutesText = "minutes";
var secondsText = "secondes";
var lessThanSecondText = "moins de 1 seconde";

var estimatedTimeText = "Temps restant estimé:";
var processingText = "En traitement:";

var successfulText = "Réussi";

var deleteText = "Effacer";

var noneText = "aucun";

var failUrlSaveText = "Impossible d&#39;enregistrer url";
var successUrlSaveText = "Url Saved";

var finishedProcessingText = "traitement terminé"

var savedSuccessText = "Votre carte a été enregistré avec succès.";

var showGroupMarkersText = "Afficher le Groupe Marqueurs";

var hideGroupMarkersText = "Masquer Groupe Marqueurs";

var msSelectAll = "Sélectionner tout";

var msNumSelected = "Choisi";

var msNoneSelected = "Aucune sélection";

/////////// js_include stuff
var emptyText = "Vide";

var mapUrlText = "La carte est url";

var geoCodeMore = "Automatiquement Geo code jusqu&#39;à 2200 plus d&#39;articles en cliquant";

var mapSaveProblemText = "Il y avait un problème d&#39;économie de la carte.";

var editText = "Modifier le texte";

var validUrlChars = "Les caractères valides sont des nombres, des lettres (a-zA-Z), des traits de soulignement (_) et des tirets (-).";

var saveText = "sauvegarder";

var cancelText = "Annuler";

var changedColumnsText = "Ne pas ajouter ou supprimer des colonnes à partir des données ou modifier les en-têtes de colonnes.";

// editPageRoutine stuff:

var confirmMapDeleteText = "Êtes-vous sûr de vouloir supprimer la carte?";

var settingsSavedText = "Paramètres sauvegardés.";

var settingsNotSavedText = "Il y avait un problème l&#39;enregistrement des paramètres.";

var mapNotDeleted = "La carte ne peut pas être supprimé.";

// global

ALL_FILTER = "Tout";

// map control.js

var directionText = "Directions";

var directionErroText  = "Impossible d&#39;obtenir les directions";

var getDirText = "Obtenir des directions";

var revDirText = "Inverser";
var startText = "Début";
var endText = "Fin";

var hereText = "Ici";

var currentLocationText = "Localisation actuelle";

var removeMarkerText = "Retirez le marqueur?";

var removePinText = "Retirer Pin";

var badStartAddressText = "Adresse de début invalide";
var badEndAddressText ="invalid end address#";

var badRadiusText = "rayon incorrect";

var emtpyLocationText = "Erreur: l&#39;emplacement vide.";

var milesText = "miles";

var invalidLocationText = "Problème pour trouver l&#39;emplacement";

var locationServicesAlert = "Rendre les services de localisation vous que sont activés de manière appropriée.";

var nearbyText = "Juste à côté";

var findNearbyText = "Trouver à proximité";

var mapMadeText = "Carte à base de EasyMapMaker.com";

var clearText = "Clair";

var hideDataText = "Cacher données";
var showDataText = "Afficher Data Export";


var travelText = "Voyager";
var drivingText = "Au volant";
var walkingText = "En marchant";
var bicyclingText = "Aller à vélo";
var transitText = "Transit";

var radiusText = "Rayon";
var showCircleText = "spectacle cercle";

var siteLanguage = "fr";