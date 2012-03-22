var map;

$(document).ready(function(){
	
	//intialize the map
	var mapOptions = {
  	maxZoom: 9,
    minZoom:2,
    zoom: 0,
    center: new google.maps.LatLng(27, 30),
    mapTypeControl: false,
    streetViewControl: false,
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    draggable: false
	};
 	
 	var mapType = new google.maps.StyledMapType([{
	  featureType: "all",
	  elementType: "all",
	  stylers: [
	      { visibility: "off" },  // Hide everything
	      { lightness: 100 }  // Makes the land white
	  ]
	},{
	  featureType: "water",
	  elementType: "geometry",
	  stylers: [
	      { visibility: "on" },  // Show water, but no labels
	      { lightness: -9 },  // Must be < 0 to compensate for the "all" lightness
	      { saturation: -100 }
	  ]
	}]);
	
  map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
  map.mapTypes.set('styledMapType', mapType);
  map.setMapTypeId('styledMapType'); 
  
  resizeMap();
});

//bind to the resize event so we can correct the map size
$(window).bind("resize", resizeMap);

/**
 * Handles the resizing of the map object
 */
function resizeMap(){
	var w = $(window).width();
  var h = $(window).height();

  $("#map_canvas").css("width", w + "px");
  $("#map_canvas").css("height", h + "px"); 
}