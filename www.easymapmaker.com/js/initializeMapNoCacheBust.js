// for IE-8
if (!window.console) console = {debug: function() {}};


var dataLines = [];
var mapDataLines = [];
var editMap = false;

var markerLabelLoaded = false;

function initialize() {

    initData(0);

 }

function initData(count) {


    if ( ( typeof editData === 'undefined' || typeof google === 'undefined') && count < 5 ) {

            setTimeout(function () {
                initData(count + 1);
            }, 400);

        return;
        }

    if(typeof editData !== 'undefined'&& typeof google !== 'undefined')
    {
        processEditData(editData);
    }
    else {
        if(typeof ajaxMapId !== 'undefined' && typeof google !== 'undefined'){
            getSomeData(ajaxMapId);

        }
        else {
            $('#map').html("The map could not be loaded.  Try refreshing your browser.");

        }

    }

}


function getSomeData(idStr) {

    var gotData = false;

    $.ajax({
        type: 'POST',
        url: '/util/getMap.php',
        data: ({ id: idStr }),
        cache: false,
        dataType: 'json',
        success:function(data, status, result){

            if(data.errorMessage) {
                alert(data.errorMessage);
            }

            processEditData(data);

            //$("#resultDiv").html(result);
            //console.debug("happy days: " + data.dataLines);


        },
        error:function(data, status, result){

            $('#map').html("The map could not be loaded");

        }
    });

    return gotData;

}


function processEditData(editData){

    var data =  editData;

    if(data.errorMessage) {
        alert(data.errorMessage);
    }

    mapObject = JSON.parse(data.config) ;


    mObject = mapObject;

    if ($("#mapWindowData").length > 0) {
        mapObject.displayDataOnPage = true;
    }

    userSettings = data.userSettings ;

    initProcessData(data.dataLines, dataLines);

    mapDataLines = dataLines;

    showMap();
}


function showMap() {

    var markerLabelValid = ( mapObject.pinLabel != null && mapObject.pinLabel >= 0 );
    var markerCircleValid = ( mapObject.CircleWithRadius != null && mapObject.CircleWithRadius == true  );

    var markerCircleLabel =  (markerLabelValid && markerCircleValid) ;


    if(markerCircleLabel && typeof MarkerWithLabelCircle == 'undefined')
    {
        loadMarkerLabel(showMap, "markerwithlabelCircle.js?cahcebust2");
        return;
    }
    else if(markerCircleValid && !markerCircleLabel && typeof MarkerWithCircle == 'undefined' ) {
        loadMarkerLabel(showMap, "MarkerWithCircle.js?cahcebust2");
        return;

    }
    else if(markerLabelValid && !markerCircleLabel && !markerCircleValid && typeof MarkerWithLabel == 'undefined') {
        loadMarkerLabel(showMap, "markerwithlabel.js?cahcebust2");
        return;

    }

    //console.debug("time to generate the map!");
//showMap();
    var  mapType =   myMapOptions.indexOf(mapObject.selectedMapType)      ;

    initMap('map', mapType);

}

function loadMarkerLabel(callBackFunc, scriptSource) {

    if(markerLabelLoaded == true)
    {
        setTimeout( callBackFunc , 100);

    }

    var script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src ="/js/" + scriptSource;
    // script2.src ="/js/markerwithlabel.js";
    document.body.appendChild(script2);

    markerLabelLoaded = true;

    setTimeout( callBackFunc , 500);

}


function initProcessData( str, dataLines) {

    safeLineProcessor(str, dataLines, mapObject.columnHeaderArray.length);
}

