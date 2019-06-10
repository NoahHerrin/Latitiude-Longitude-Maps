var map;
console.log("hello")
var button = document.getElementById("searchbutton");
button.onclick= loadmap;
var clicked = false;
function loadmap(){
  if (clicked) {
    console.log("oof")
    return;
  }
  var form = document.forms["LatLongSearch"]
  let lat = form["Latitude"].value
  let lat_dir = form["lat_direction"].value
  console.log("Latitude: " + lat + " " + lat_dir)
  let long = form["Longitude"].value
  let long_dir = form["long_direction"].value
  console.log("Longitude: " + long + " " + long_dir)
  initMap(lat, long)
  clicked = true;
}
