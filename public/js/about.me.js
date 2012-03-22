var map;

$(document).ready(function(){
	
	//shrink our header
	$('header').animate({top: '-19em'}, 1500);
	
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
  setTimeout(animateLocations, 2500);
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

//define our locations
var currentIndex = 0;
var locationData = [
  {
		loc: new google.maps.LatLng(40.7774,  -73.4683),
		zoom: 8,
		title: "Birthplace - Plainview, NY",
		date: "December 1984",
		body: "Born to two wonderful parents, Jan and Peter."
	},{
		loc: new google.maps.LatLng(43.850251, -74.007511),
		zoom: 8,
		title: "Camp BACO - Minerva, NY",
		date: "June 1994",
		body: "Off to summer camp for the first time"
	},{
		loc: new google.maps.LatLng(42.894076, -78.880463),
		zoom: 8,
		title: "SUNY Buffalo - Buffalo, NY",
		date: "August 2002",
		body: "Began studies as a Computer Science major."
	},{
		loc: new google.maps.LatLng(42.894076, -78.880463),
		zoom: 8,
		title: "SUNY Buffalo - Buffalo, NY",
		date: "February 2005",
		body: "Changed majors to Electrical Engineering."
	},{
		loc: new google.maps.LatLng(-33.872660, 151.206937),
		zoom: 8,
		title: "University of Technology - Syndey, AUS",
		date: "June 2005",
		body: "Studied abroad at UTS."
	},{
		loc: new google.maps.LatLng(42.894076, -78.880463),
		zoom: 8,
		title: "Founded Gangstar Paintball, LLC",
		date: "August 2006",
		body: "Started career as an entrepreneur"
	}
];

/**
 * Starts our beautiful animations
 */
var overlay;
function animateLocations(){
	
	var data = locationData[currentIndex];
	map.panTo(data.loc);
	map.setZoom(data.zoom);
	
	//remove our current overlay if it exists
	if (overlay)
	{
		overlay.setMap(null);
	}
	
	overlay = new CustomMarker(data.loc, map);
  var iw = new google.maps.InfoWindow({content: data.body, pixelOffset: new google.maps.Size(5,0)});
  iw.open(map, overlay);	
	
	currentIndex++;
  setTimeout(animateLocations, 5000);
}

/**
 * Define our custom marker for the timeline
 */
	function CustomMarker(latlng, map) {
    this.latlng_ = latlng;

    // Once the LatLng and text are set, add the overlay to the map.  This will
    // trigger a call to panes_changed which should in turn call draw.
    this.setMap(map);
  }

  CustomMarker.prototype = new google.maps.OverlayView();

  CustomMarker.prototype.draw = function() {
    var me = this;

    // Check if the div has been created.
    var div = this.div_;
    if (!div) {
      // Create a overlay text DIV
      div = this.div_ = $('div');
      
      // Create the DIV representing our CustomMarker
      div.style.border = "none";
      div.style.position = "absolute";
      div.style.paddingLeft = "0px";
      div.style.cursor = 'pointer';

      // Then add the overlay to the DOM
      var panes = this.getPanes();
      panes.overlayImage.appendChild(div);
    }

    // Position the overlay 
    var point = this.getProjection().fromLatLngToDivPixel(this.latlng_);
    if (point) {
      div.style.left = point.x + 'px';
      div.style.top = point.y + 'px';
    }
  };

  CustomMarker.prototype.remove = function() {
    // Check if the overlay was on the map and needs to be removed.
    if (this.div_) {
      this.div_.parentNode.removeChild(this.div_);
      this.div_ = null;
    }
  };

  CustomMarker.prototype.getPosition = function() {
   return this.latlng_;
  };
