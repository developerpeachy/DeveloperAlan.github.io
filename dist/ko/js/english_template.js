
// globals
var myMapOptions = ['거리', '바닥', '위성', '잡종'];
var ALL_FILTER = "모든";

var mObject = {};

mObject.selectedMapType = '거리';


var LANG_COLOR_LIST = ["빨간", "푸른", "녹색", "황색", "주황색", "자", "갈색", "담홍색", "짙은 녹색", "창백한 푸른", "다크 핑크", "로얄 블루", "블루 그린", "라임 그린", "퍼플 핑크", "금", "브라운 (2)", "진홍", "짙은 회색", "라이트 그레이", "모카신"];

var labelNames = ["주소", "시티",  "시 /도", "우편 (우편) 코드", "국가", "위도", "경도",
    "마커 제목", "URL (웹 사이트)", "(웹 사이트) 이미지", "(웹 사이트) E 메일", "그룹 (마커 색)", "핀 라벨"
];


// values to match email, city, address, etc
var addressMatch = ["주소", "구애", "거리", "시가"];
var negAddressMatch = ["이메일", "이메일"];
var cityMatch = ["시티", "도시", "도시", "도시"];
var zipMatch = ["지퍼", "우편 번호", "우편 번호", "우편 번호", "우편 번호", "우편 번호", "우편 엽서"];

var stateMatch = ["상태", "부위", "지방"];
var titleMatch = ["표제", "이름", "회사", "상표"];
var urlMatch = ["URL", "웹 사이트", "링크"];
var imageMatch = ["IMG", "영상", "그림", "사진"];
var emailMatch = ["이메일", "이메일"];

var latMatch = ["위도", "년", "엉", "emm_lat"];
var longMatch = ["경도", "LN", "LNG", "수", "긴" , "emm_lng"];
var countryMatch = ["국가"];

var groupMatch = ["그룹", "범주", "유형"];

var clickMessageInner = "데이터를 붙여 여기를 클릭하십시오";

var dataPresentMessageInner = "/ 붙여 넣기 데이터를 복사하려면 여기를 클릭하십시오";

var makeMapText = "지도를 확인";

var reMapText = "다시지도";

var enableClusteringText = "클러스터링을 사용하도록 설정";
var clusterToolTipText = "함께 고밀도 마커를 결합,지도 성능을 향상시킵니다.";


var pinLabelToolTipText ="지도에 핀 아래에 텍스트를 표시합니다";

var scrollWheelToolTipText = "마우스 휠지도의 크기를 조정 할 수 있습니다.";

var mouseOverToolTipText = "마우스 핀 넘으면 (있는 경우)의 표제를 나타낸다.";

var mouseOverMarkerText = "(마우스 오버) 마커";

var advancedGroupToolTipText = "수 있도록 20 개의 마커 색상까지에 대한 필터링, 또는 다수의 사용자 정의 이미지를 설정하는 데 사용합니다.";
var basicGroupToolTipText = "10 개 마커 색상까지에 필터링 할 수 있습니다.";

var moreOptionToolTipText = "방향에 대한 왼쪽 패널과 반경 검색을 활성화";

var moreOptionText = "길 부근 필터";

var exportDataText = "데이터 내보내기";

var exportDataToolTip = "지도에 표시되는 데이터를 내보낼 수있는 기능을 추가합니다.";

var zoomAndCenterToolTip = "지도가 저장 될 때의 값으로 시작 줌 레벨과 중심을 설정합니다. 기본값은 그래서 모든 점을 볼 수 있습니다 축소하는 것입니다.";

var zoomAndCenterText = "사용자 지정 확대 및 센터";

var descriptionDirectionsToolTip = "마커 설명에 주소를 클릭 한 후 방향 상자를 표시합니다.";
var descriptionDirectionsText = "설명 오시는 길";

var showLabelsToolTipText = "마커 설명에 표시 라벨 (이 비활성화 할 때 샘플을 볼 수).";

var numberedPinsToolTipText = "사용자 정의 이미지와 호환이 100 미만되지 않습니다 표시 번호 핀.";

var lineHeaderText = "헤더를 포함한 라인";

var foundText = "녹이다";

var numberedPinsText = "표시 번호가 핀";

var noResultsText = "결과 없음";

var bulkGeoRemainText = "나머지 항목은 맵을 저장 한 후 bulkgeo URL을 클릭하여 지리적으로 구분 될 수있다.";

var geoSlownessText = "구글은 당신이 완성 된 주소를 매핑하고 싶습니다, 250 주소 후 지오 코딩 속도가 느려집니다?";

var locationAlert = "위치 옵션이 설정되어 있지 않습니다.";
var noDataAlert = "데이터가 존재하지 않습니다.";

var geocodeingDataAlert = "모든 주소가 매핑 될 수있는 것은 아닙니다, 당신은 오류없이 주소를 매핑 할 수 있습니까?";

var unMappableDataAlert = "데이터를 매핑 할 수 없습니다; 위도와 경도 좌표로 발견 된 데이터가 없습니다.";

var invalidEmailAlert = "이메일 주소가 유효하지 않습니다.";

var headerMisMatchAlert = "헤더와 데이터 사이의 데이터 불일치가";

var imageUploadAlert = "이미지를 업로드하는 동안 문제가 발생했습니다";

var stopGeoCodingAlert = "중지 지오 코딩 너무 많은 오류로 인해 오류가있는 주소를 확인하고 다시 시도하십시오.";

var stopGeoCodingQuestion = "중지 지오 코딩 속도 저하로 인해, 당신은 지오 코딩 된 주소를 매핑 할합니까?";

var itemsInText = "항목";

var thereWereText = "있었다";

var errorText = "오류";

var displayTypeText = "기본지도 표시 유형";

var mouseScrollText = "마우스 스크롤 휠";

var invalidAliasText = "잘못된 별명.";

var showLabelsText = "쇼 라벨";

var nameText = "이름";
var sizeText = "크기";
var uploadStatusText = "업로드 상태";
var imageText = "영상";

var zoomInSearchText = "검색 창에 확대";

var zoomInSearchDetail = "또 다른 항목을 표시하는 동안 검색 한 내용과 일치하는 항목으로 확대합니다. 다른 옵션은 검색과 일치에 만 표시 항목을 확대하는 것입니다.";

var stopMappingText = "중지";

var ofText = "의";

var headerWarningText = "확인 헤더와 데이터가 존재합니다.";

var addressText = "주소";
var lineNumberText = "줄 번호";

var errorMessageText = "에러 메시지";

var hideErrorsText = "숨기기 오류";

var showErrorsText = "표시 오류";

// time stuff
var hoursText = "시간";
var minutesText = "의사록";
var secondsText = "초";
var lessThanSecondText = "1 초 미만";

var estimatedTimeText = "남은 시간 기준 :";
var processingText = "처리 :";

var successfulText = "성공한";

var deleteText = "지우다";

var noneText = "없음";

var failUrlSaveText = "URL을 저장할 수 없습니다";
var successUrlSaveText = "URL 저장";

var finishedProcessingText = "완료 처리"

var savedSuccessText = "지도가 성공적으로 저장되었습니다.";

var showGroupMarkersText = "쇼 그룹 마커";

var hideGroupMarkersText = "그룹 마커 숨기기";

var msSelectAll = "모두 선택";

var msNumSelected = "선택된";

var msNoneSelected = "아무도 선택하지";

/////////// js_include stuff
var emptyText = "빈";

var mapUrlText = "지도의 URL은";

var geoCodeMore = "클릭하여 2200 더 많은 항목에 자동으로 지역 코드까지";

var mapSaveProblemText = "지도를 저장하는 중에 문제가 발생했습니다.";

var editText = "텍스트를 편집";

var validUrlChars = "유효한 문자는 숫자, 문자 (-ZA-Z), 밑줄 (_) 및 대시입니다 (-).";

var saveText = "구하다";

var cancelText = "취소";

var changedColumnsText = "추가하거나 데이터로부터 열을 제거하거나 열 머리글을 변경하지 마십시오.";

// editPageRoutine stuff:

var confirmMapDeleteText = "당신은지도를 삭제 하시겠습니까?";

var settingsSavedText = "설정이 저장되었습니다.";

var settingsNotSavedText = "설정을 저장하는 중에 문제가 발생했습니다.";

var mapNotDeleted = "지도는 삭제할 수 없습니다.";

// global

ALL_FILTER = "모든";

// map control.js

var directionText = "지도";

var directionErroText  = "방향을 가져올 수 없습니다";

var getDirText = "길 찾기";

var revDirText = "역 길 찾기";
var startText = "스타트";
var endText = "종료";

var hereText = "이리";

var currentLocationText = "현재 위치";

var removeMarkerText = "마커를 삭제 하시겠습니까?";

var removePinText = "핀을 제거";

var badStartAddressText = "잘못된 시작 주소";
var badEndAddressText ="invalid end address#";

var badRadiusText = "잘못된 반경";

var emtpyLocationText = "오류 : 빈 위치.";

var milesText = "마일";

var invalidLocationText = "문제의 위치를​​ 찾아";

var locationServicesAlert = "확인 위치 서비스를 적절하게 사용할 수 있습니다.";

var nearbyText = "가까이에";

var findNearbyText = "인근 찾기";

var mapMadeText = "지도 EasyMapMaker.com로 만든";

var clearText = "맑은";

var hideDataText = "숨기기 데이터";
var showDataText = "보기 데이터 내보내기";


var travelText = "여행";
var drivingText = "운전";
var walkingText = "보행";
var bicyclingText = "자전거 타는 것";
var transitText = "운송";

var radiusText = "반지름";
var showCircleText = "쇼 원";

var siteLanguage = "ko";