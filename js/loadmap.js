console.log("hello world");
var map;
var button = document.getElementById("search");
button.onclick = search;



function search() {
  console.log("hello world");


  // parse location data
  let lat = document.getElementById("Latitude").value;
  let long = document.getElementById("Longitude").value;
  let lat_dir = document.getElementById("lat_direction").value;
  let long_dir = document.getElementById("long_direction").value;

  let invalidParams = [];
  if (lat == "" || lat > 90 || lat < -90 || lat.match(/[a-z]/i)) {
    invalidParams.push("Latitude");
  }
  if (long == "" || long > 180 || long < -180 || long.match(/[a-z]/i)) {
    invalidParams.push("Longitude");
  }
  if (invalidParams.length != 0) {
    // tell user that parameters were invalid
    console.log(invalidParams)
    return;
  }
  lat = parseInt(lat)
  long = parseInt(long)
  if (lat_dir == "South") {
    lat *= -1;
  }
  if (long_dir == "West") {
    long *= -1
  }
  // display location on map
  moveToLocation(lat, long);
  placeMarker(lat, long);
}

function moveToLocation(lat, lng) {
  var center = new google.maps.LatLng(lat, lng);
  // using global variable:
  map.panTo(center);
}