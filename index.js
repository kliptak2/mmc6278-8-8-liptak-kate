// Your code here
var form = document.querySelector("#weather-app form");
var weatherEl = document.getElementById("weather");
var data = document.getElementById("weather-search");
var btn = document.querySelector("button")
var apiKey = "1c882668d9c2c1fecdb66c8653ee2c47"
var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${apiKey}&q=${userQuery}"
var queryString = "?units=imperial&appid={apiKey}" + userQuery
var fetchUrl = weatherUrl + queryString
var h2 = document.createElement("h2")

btn.onclick = function (e){
    e.preventDefault();
    var userQuery = data.value
    if (!userQuery) return
    fetch(weatherUrl)
    .then(function(res){
        if (res.status !== 200){
            throw new Error("Location not found")
        }
        return res.json()
    })
    .then(renderWeather)
    .catch(function(err){
        weatherEl.innerHTML = err.message
    })
}

function renderWeather(){

}