$(document).ready(function(){	
	//intialize the map
	var mapOptions = {
  	maxZoom: 9,
    minZoom:2,
    zoom: 2,
    center: new google.maps.LatLng(27, 30),
    mapTypeControl: false,
    streetViewControl: false
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

$(window).bind("resize", resizeMap);

function resizeMap(){
	var w = $(window).width();
  var h = $(window).height();

  $("#map_canvas").css("width", w + "px");
  $("#map_canvas").css("height", h + "px"); 
}
