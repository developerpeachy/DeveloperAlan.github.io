
// globals
var myMapOptions = ['通り', '地面', '衛星', 'ハイブリッド'];
var ALL_FILTER = "すべて";

var mObject = {};

mObject.selectedMapType = '通り';


var LANG_COLOR_LIST = ["赤", "青", "緑", "黄", "オレンジ", "パープル", "褐色", "ピンク", "濃い緑色", "淡いブルー", "ダークピンク", "ロイヤルブルー", "ブルーグリーン", "ライムグリーン", "ピンクパープル", "ゴールド", "ブラウン2", "真紅", "暗灰色", "ライトグレー", "モカシン"];

var labelNames = ["住所", "シティ",  "州/郡", "郵便番号（郵便番号）コード", "国", "緯度", "経度",
    "マーカーのタイトル", "URL（ウェブサイト）", "（ウェブサイト）イメージ", "（ウェブサイト）Eメール", "グループ（マーカー色）", "ピンラベル"
];


// values to match email, city, address, etc
var addressMatch = ["住所", "アドレス", "通り", "街"];
var negAddressMatch = ["Eメール", "電子メール"];
var cityMatch = ["シティ", "都市", "タウン", "町"];
var zipMatch = ["ジップ", "郵便番号", "郵便番号", "郵便番号", "郵便番号", "郵便番号", "郵便"];

var stateMatch = ["状態", "領域", "州"];
var titleMatch = ["タイトル", "名", "会社", "ラベル"];
var urlMatch = ["URL", "ウェブサイト", "リンク"];
var imageMatch = ["IMG", "画像", "画像", "写真"];
var emailMatch = ["Eメール", "電子メール"];

var latMatch = ["緯度", "年", "エン", "emm_lat"];
var longMatch = ["経度", "LN", "LNG", "缶", "長いです" , "emm_lng"];
var countryMatch = ["国"];

var groupMatch = ["グループ", "カテゴリ", "タイプ"];

var clickMessageInner = "データを貼り付けるには、ここをクリックして";

var dataPresentMessageInner = "/ペーストのデータをコピーするには、ここをクリックしてください";

var makeMapText = "地図を作ります";

var reMapText = "再地図";

var enableClusteringText = "クラスタリングを有効";
var clusterToolTipText = "一緒に密なマーカーを組み合わせて、マップのパフォーマンスが向上します。";


var pinLabelToolTipText ="地図上のピンの下にあるテキストを表示します";

var scrollWheelToolTipText = "マウスホイールは、マップのサイズを変更できるようにします。";

var mouseOverToolTipText = "マウスがピンの上にあるときに（存在する場合）のタイトルを表示します。";

var mouseOverMarkerText = "（マウスオーバー）マーカー";

var advancedGroupToolTipText = "20異なるマーカー色までにフィルタリングできます、または複数のカスタムイメージを設定するために使用します。";
var basicGroupToolTipText = "10異なるマーカー色までにフィルタリングできます。";

var moreOptionToolTipText = "方向について左側のパネルおよび半径検索を有効にします";

var moreOptionText = "方向と近所のフィルタ";

var exportDataText = "データのエクスポート";

var exportDataToolTip = "地図上に表示されるデータをエクスポートする機能を追加します。";

var zoomAndCenterToolTip = "開始ズームレベルとセンターは、マップが保存されたときの値に設定します。デフォルトでは、そのようにすべての点が表示されているズームアウトすることです。";

var zoomAndCenterText = "カスタムズームとセンター";

var descriptionDirectionsToolTip = "マーカーの記述のアドレスをクリックした後、方向ボックスを表示します。";
var descriptionDirectionsText = "説明の道順";

var showLabelsToolTipText = "マーカーの説明のラベルを表示する（これを無効にする場合、サンプルを表示）。";

var numberedPinsToolTipText = "カスタムイメージには対応していません100未満がある場合、表示は、ピン番号が付け。";

var lineHeaderText = "ヘッダーを含む行";

var foundText = "見つかりました";

var numberedPinsText = "ショー番号付きピン";

var noResultsText = "結果がありません";

var bulkGeoRemainText = "残りの項目は、マップを保存した後bulkgeoのURLをクリックすることで、ジオコーディングすることができます。";

var geoSlownessText = "Googleは250のアドレスの後にジオコーディングが遅くなり、あなたが完了したアドレスをマップしたいと思いますか？";

var locationAlert = "場所オプションが設定されていません。";
var noDataAlert = "データが存在しません。";

var geocodeingDataAlert = "すべてのアドレスをマッピングできるわけではありません、あなたはエラーなしでアドレスをマップしたいですか？";

var unMappableDataAlert = "データをマッピングすることはできません。緯度と経度の座標にデータが見つかりません。";

var invalidEmailAlert = "メールアドレスが有効ではありません。";

var headerMisMatchAlert = "ヘッダとデータの間のデータの不一致があります";

var imageUploadAlert = "あなたのイメージをアップロードする問題が発生しました";

var stopGeoCodingAlert = "ジオコーディングエラーが多すぎるに起因するの停止、エラーが発生したアドレスを確認し、再度お試しください。";

var stopGeoCodingQuestion = "遅さに起因するジオコーディング停止し、あなたは、ジオコーディングされたアドレスをマップしたいですか？";

var itemsInText = "内の項目";

var thereWereText = "あった";

var errorText = "エラー";

var displayTypeText = "デフォルトのマップの表示タイプ";

var mouseScrollText = "マウスのスクロールホイール";

var invalidAliasText = "無効な別名。";

var showLabelsText = "ショーのラベル";

var nameText = "名";
var sizeText = "サイズ";
var uploadStatusText = "アップロードステータス";
var imageText = "画像";

var zoomInSearchText = "検索ボックスにズーム";

var zoomInSearchDetail = "まだ他の項目を表示しながら、検索条件に一致する項目に拡大します。その他のオプションは、検索条件に一致でのみ表示項目をズームすることです。";

var stopMappingText = "やめる";

var ofText = "の";

var headerWarningText = "ヘッダとデータが存在していることを確認してください。";

var addressText = "住所";
var lineNumberText = "行番号";

var errorMessageText = "エラーメッセージ";

var hideErrorsText = "エラーを非表示にします";

var showErrorsText = "表示エラー";

// time stuff
var hoursText = "営業時間";
var minutesText = "分";
var secondsText = "秒";
var lessThanSecondText = "1秒未満";

var estimatedTimeText = "推定残り時間：";
var processingText = "処理：";

var successfulText = "成功しました";

var deleteText = "削除";

var noneText = "なし";

var failUrlSaveText = "URLを保存することができません。";
var successUrlSaveText = "URL保存";

var finishedProcessingText = "完成した処理"

var savedSuccessText = "あなたのマップが正常に保存されました。";

var showGroupMarkersText = "ショー・グループマーカー";

var hideGroupMarkersText = "グループマーカーを隠します";

var msSelectAll = "すべて選択";

var msNumSelected = "選択しました";

var msNoneSelected = "どれも選択されていません";

/////////// js_include stuff
var emptyText = "空の";

var mapUrlText = "マップのURLです";

var geoCodeMore = "クリックして2200以上の項目に自動的にジオコードアップ";

var mapSaveProblemText = "マップの保存に問題が発生しました。";

var editText = "エディットテキスト";

var validUrlChars = "有効な文字は、数字、英字（-ZA-Z）、アンダースコア（_）とハイフン（ - ）を使用できます。";

var saveText = "セーブ";

var cancelText = "キャンセル";

var changedColumnsText = "追加またはデータから列を削除するか、列ヘッダーを変更しないでください。";

// editPageRoutine stuff:

var confirmMapDeleteText = "あなたがマップを削除してもよろしいですか？";

var settingsSavedText = "設定が保存されました。";

var settingsNotSavedText = "設定の保存中に問題が発生しました。";

var mapNotDeleted = "マップは削除できませんでした。";

// global

ALL_FILTER = "すべて";

// map control.js

var directionText = "行き方";

var directionErroText  = "方向を取得できませんでした";

var getDirText = "行き方を調べます";

var revDirText = "リバース行き方を調べます";
var startText = "開始";
var endText = "終わり";

var hereText = "ここに";

var currentLocationText = "現在位置";

var removeMarkerText = "マーカーを削除しますか？";

var removePinText = "ピンを削除します";

var badStartAddressText = "無効な開始アドレス";
var badEndAddressText ="invalid end address#";

var badRadiusText = "無効な半径";

var emtpyLocationText = "エラー：空白の場所。";

var milesText = "マイル";

var invalidLocationText = "問題の場所を見つけます";

var locationServicesAlert = "ロケーションサービスが適切に有効になっていることを確認します。";

var nearbyText = "近所の";

var findNearbyText = "近所の検索";

var mapMadeText = "EasyMapMaker.comで作られた地図";

var clearText = "明確な";

var hideDataText = "データを非表示にします";
var showDataText = "表示データのエクスポート";


var travelText = "旅行";
var drivingText = "運転";
var walkingText = "ウォーキング";
var bicyclingText = "自転車";
var transitText = "トランジット";

var radiusText = "半径";
var showCircleText = "ショーサークル";

var siteLanguage = "ja";