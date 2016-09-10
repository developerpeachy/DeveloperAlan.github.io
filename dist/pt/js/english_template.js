
// globals
var myMapOptions = ['Rua', 'chão', 'Satélite', 'Híbrido'];
var ALL_FILTER = "Todos";

var mObject = {};

mObject.selectedMapType = 'Rua';


var LANG_COLOR_LIST = ["Vermelho", "Azul", "Verde", "Amarelo", "laranja", "Roxo", "Castanho", "Rosa", "Verde escuro", "Azul pálido", "Rosa escuro", "azul Real", "Azul verde", "Verde limão", "rosa roxo", "Ouro", "Brown 2", "Carmesim", "Cinza escuro", "Cinza claro", "mocassim"];

var labelNames = ["Endereço", "Cidade",  "Estado / Província", "CEP / Código Postal", "País", "Latitude", "Longitude",
    "marcador Título", "Url (website)", "(Website) Imagem", "(Website) E-mail", "Grupo (cores do marcador)", "Etiqueta Pin"
];


// values to match email, city, address, etc
var addressMatch = ["endereço", "endereços", "rua", "ruas"];
var negAddressMatch = ["o email", "correio eletrônico"];
var cityMatch = ["cidade", "cidades", "Cidade", "cidades"];
var zipMatch = ["fecho eclair", "CEP", "código postal", "CEP", "código postal", "Código postal", "postal"];

var stateMatch = ["Estado", "região", "província"];
var titleMatch = ["título", "nome", "companhia", "rótulo"];
var urlMatch = ["url", "site", "ligação"];
var imageMatch = ["img", "imagem", "fotografia", "foto"];
var emailMatch = ["o email", "correio eletrônico"];

var latMatch = ["latitude", "anos", "en", "emm_lat"];
var longMatch = ["longitude", "ln", "lng", "lata", "grandes" , "emm_lng"];
var countryMatch = ["país"];

var groupMatch = ["grupo", "categoria", "digitar"];

var clickMessageInner = "Clique aqui para colar dados";

var dataPresentMessageInner = "Clique aqui para copiar dados / colar";

var makeMapText = "Faça Mapa";

var reMapText = "Re-Map";

var enableClusteringText = "ativar o cluster";
var clusterToolTipText = "Combine marcadores densas junto, melhora o desempenho do mapa.";


var pinLabelToolTipText ="Mostra texto abaixo do alfinete no mapa";

var scrollWheelToolTipText = "Permitir que a roda do mouse para redimensionar o mapa.";

var mouseOverToolTipText = "Mostrar o título (se existir) quando o mouse está sobre um alfinete.";

var mouseOverMarkerText = "(Mouse-over) Marcador";

var advancedGroupToolTipText = "Permite a filtragem em até 20 cores de marcador diferentes, ou usar para definir várias imagens personalizadas.";
var basicGroupToolTipText = "Permite a filtragem em até 10 cores de marcador diferentes.";

var moreOptionToolTipText = "Permitir que um painel da esquerda para obter instruções e um raio de pesquisa";

var moreOptionText = "Direções e filtro Próximo";

var exportDataText = "Exportar dados";

var exportDataToolTip = "Adicionar a capacidade de exportar os dados exibidos no mapa.";

var zoomAndCenterToolTip = "Define o nível de zoom de partida e centro para os valores de quando o mapa foi salvo. O padrão é para diminuir o zoom para que todos os pontos são visíveis.";

var zoomAndCenterText = "Zoom personalizado e Centro";

var descriptionDirectionsToolTip = "Mostrar caixa de direção após clicar no endereço na descrição do marcador.";
var descriptionDirectionsText = "Inscrição Como chegar";

var showLabelsToolTipText = "Mostrar rótulos nas descrições do marcador (ver a amostra ao desabilitar esta).";

var numberedPinsToolTipText = "Mostrar numeradas pinos quando houver menos de 100. Não é compatível com imagens personalizadas.";

var lineHeaderText = "linhas, incluindo cabeçalhos";

var foundText = "encontrado";

var numberedPinsText = "Mostrar numerada Pinos";

var noResultsText = "Sem resultados";

var bulkGeoRemainText = "Os demais itens podem ser geo-codificados, clicando no url bulkgeo depois de salvar o mapa.";

var geoSlownessText = "Google desacelera geo-codificação depois de 250 endereços, que gostaria de mapear os endereços concluídos?";

var locationAlert = "opções de localização não estão definidos.";
var noDataAlert = "Dados não está presente.";

var geocodeingDataAlert = "Nem todos os endereços podem ser mapeados, você quer mapear os endereços sem erros?";

var unMappableDataAlert = "Não é possível mapear os dados; Não foram encontrados dados com latitude e longitude.";

var invalidEmailAlert = "O endereço de e-mail não é válido.";

var headerMisMatchAlert = "Há uma incompatibilidade de dados entre os cabeçalhos e dados";

var imageUploadAlert = "Houve um problema ao carregar suas imagens";

var stopGeoCodingAlert = "Parando-geo codificação devido a muitos erros, verifique os endereços com os erros e tente outra vez.";

var stopGeoCodingQuestion = "Parou-geo codificação devido à lentidão, quer mapear os endereços codificados por geo?";

var itemsInText = "artigos em";

var thereWereText = "Havia";

var errorText = "erros";

var displayTypeText = "Tipo de exibição de mapa padrão";

var mouseScrollText = "rato Roda de navegação";

var invalidAliasText = "apelido inválido.";

var showLabelsText = "Mostrar rótulos";

var nameText = "Nome";
var sizeText = "Tamanho";
var uploadStatusText = "Estado do carregamento";
var imageText = "Imagem";

var zoomInSearchText = "Zoom In Search Box";

var zoomInSearchDetail = "Zoom em itens que correspondem a busca enquanto ainda mostrando outros itens. Outra opção é para fazer zoom e apenas exibir itens que correspondem à pesquisa.";

var stopMappingText = "Pare";

var ofText = "do";

var headerWarningText = "Certifique-se de cabeçalhos e os dados estão presentes.";

var addressText = "Endereço";
var lineNumberText = "Número de linha";

var errorMessageText = "Mensagem de erro";

var hideErrorsText = "Ocultar erros";

var showErrorsText = "Mostrar Erros";

// time stuff
var hoursText = "horas";
var minutesText = "minutos";
var secondsText = "segundos";
var lessThanSecondText = "menos de 1 segundo";

var estimatedTimeText = "tempo restante estimado:";
var processingText = "Em processamento:";

var successfulText = "Bem sucedido";

var deleteText = "Excluir";

var noneText = "Nenhum";

var failUrlSaveText = "Não foi possível salvar url";
var successUrlSaveText = "Url Saved";

var finishedProcessingText = "processamento terminou"

var savedSuccessText = "Seu mapa foi salva com sucesso.";

var showGroupMarkersText = "Mostrar Grupo Markers";

var hideGroupMarkersText = "Esconder Grupo Markers";

var msSelectAll = "Selecionar tudo";

var msNumSelected = "Selecionado";

var msNoneSelected = "Nenhum selecionado";

/////////// js_include stuff
var emptyText = "Vazio";

var mapUrlText = "O mapa url é";

var geoCodeMore = "Automaticamente Geo-code-se a mais de 2200 itens clicando";

var mapSaveProblemText = "Houve um problema ao guardar o mapa.";

var editText = "editar texto";

var validUrlChars = "Os caracteres válidos são números, letras (a-zA-Z), sublinhados (_) e traços (-).";

var saveText = "Salvar";

var cancelText = "Cancelar";

var changedColumnsText = "Não adicionar ou remover colunas de dados ou alterar cabeçalhos de coluna.";

// editPageRoutine stuff:

var confirmMapDeleteText = "Tem certeza de que quer apagar do mapa?";

var settingsSavedText = "Configurações salvas.";

var settingsNotSavedText = "Houve um problema em salvar configurações.";

var mapNotDeleted = "O mapa não pode ser excluído.";

// global

ALL_FILTER = "Todos";

// map control.js

var directionText = "Instruções";

var directionErroText  = "Não foi possível obter direcções";

var getDirText = "Obter direções";

var revDirText = "Como chegar reversa";
var startText = "Começar";
var endText = "Fim";

var hereText = "Aqui";

var currentLocationText = "Localização atual";

var removeMarkerText = "Remover o marcador?";

var removePinText = "Remover Pin";

var badStartAddressText = "endereço de início inválida";
var badEndAddressText ="invalid end address#";

var badRadiusText = "raio inválido";

var emtpyLocationText = "Erro: localização em branco.";

var milesText = "milhas";

var invalidLocationText = "Problemas para encontrar a localização";

var locationServicesAlert = "Certifique-se de serviços de localização são ativadas de forma adequada.";

var nearbyText = "nas proximidades";

var findNearbyText = "Procurar nas proximidades";

var mapMadeText = "Mapa feito com EasyMapMaker.com";

var clearText = "Claro";

var hideDataText = "Ocultar dados";
var showDataText = "Os dados mostram Export";


var travelText = "Viagem";
var drivingText = "Dirigindo";
var walkingText = "caminhada";
var bicyclingText = "Ciclismo";
var transitText = "Trânsito";

var radiusText = "Raio";
var showCircleText = "show de círculo";

var siteLanguage = "pt";