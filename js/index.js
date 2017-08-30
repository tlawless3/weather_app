$( document ).ready(function() {
   if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    getWeather(position.coords.latitude, position.coords.longitude);
  });
} else {
  getWeather(40, -88);
};
  $("#FButton").on("click", swapToF);
  $("#CButton").on("click", swapToC);
});

var weather = {};
var farenheitTemp = 0;
var celsiusTemp = 0;

function getWeather(lati, long){
  $.getJSON("https://cors-everywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat="+ lati + "&lon=" + long +"&appid=789e720399d443f232ee37ec9ff67650&units=metric", function (result){
  $("#description").text(result.weather[0].description);
  $("#digits").text(Math.floor(result.main.temp));
  $("#city").text(result.name);
  weather = result;
  farenheitTemp = Math.floor(result.main.temp * 1.8 + 32);
  celsiusTemp = (result.main.temp);
  });
};

function swapToF(){
  $("#digits").html(farenheitTemp);
  $("#deg").html("&deg F");
};

function swapToC(){
  $("#digits").html(Math.floor(celsiusTemp));
  $("#deg").html("&deg C");
};