var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
function orange(){
    document.getElementById('cordImg').src="images/orangecord.png"; 
}
function black(){
    document.getElementById('cordImg').src="images/extension.png"; 
}
function initMap() {
    var salt = {lat: 40.758480, lng: -111.888140};
    // unessary code but i cant get rid of it, the map wont work if i do
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 10, center: salt});
    var marker = new google.maps.Marker({position: salt, map: map}); //again, unessary
    var locations = [ //list of markers
        ["Hong Kong, China", 22.381827, 114.187001, 20],
		["Mumbi, India", 19.067462, 72.878823, 19],
		["Johannesburg, South Africa", -26.197198, 28.042179, 18],
		["Cario, Egypt", 30.052346, 31.246804, 17],
		["Mexico City, Mexico", 19.398235, -99.200254, 16],
		["Rio de Janeiro, State of Rio De Janeiro, Brazil", -22.951083, -43.184108,15],
		["Moscow, Russia", 55.711599, 37.561046, 14],
		["Berlin, Germany", 52.514380, 13.389212, 13],
		["Madrid, Spain", 40.427786, -3.695923,12],
        ["London, United Kingdom", 51.531886, -0.123342, 11],
        ["Montreal, Quebec, Canda", 45.517057, -73,563540,10],
		["Los Angeles, California, USA", 34.033903, -118.235712, 9],
		["Columbus, Ohio, USA", 39.958394, -82.996286,8],
		["Dallas, Texas, USA", 32.776213, -96.807541,7],
        ["Sydney, Australia", -33.867786, 151.205666, 6],
		["Salt Lake City, Utah, USA", 40.758480, -111.888140, 5],
		["Tokyo, Japan", 35.330550, 139.149120, 4],
		["Paris, France", 48.862056, 2.347134, 3],
		["Vancouver, British Columbia, Canada", 49.273606, -123.098171, 2],
		["New York City, New York, USA", 40.752864, -73.977133, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), { //how the map looks
        zoom: 2.2, //zoom level
        center: new google.maps.LatLng(10, 0), //centred postion
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}
