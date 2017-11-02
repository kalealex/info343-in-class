// @ts-check
"use strict";

const LOCATION_API = "https://freegeoip.net/json/";
//replace `{latitude}` and `{longitude}`
const WEATHER_API = "http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=c2072f8cb6d9c7971cff7c662c5940c6&lat={latitude}&lon={longitude}"
//replace {icon}
const ICON_URL = "http://openweathermap.org/img/w/{icon}.png"

const ERROR_ALERT = document.querySelector("#error-alert");

//TODO: fetch from Location API to get lat/lng
//and then fetch Weather API for that lat/lng.
//Render results to the page, or handle errors

// handle errors (API may not work for a number of reasons)
function handleError(err) {
    console.log(err);
    // show the error message in the hidden div
    ERROR_ALERT.textContent = err.message;
    ERROR_ALERT.classList.remove('d-none');
}

// handle responses
function handleResponse(response) {
    console.log("got response", response);
    // check that response is ok
    if (response.ok) {
        return response.json(); // turn response into json object
    } else {
        return response.text() // throw an error message
            .then((message) => {
                throw new Error(message);
            });
    }
}

// fetch weather information
function fetchWeather(data) {
    console.log(data);
    let latitude = data.latitude;
    let longitude = data.longitude;
    let url = WEATHER_API.replace("{latitude}", latitude)
        .replace("{longitude}", longitude);
    return fetch(url);
}

// render the weather
function renderWeather(data) {
    console.log(data);
    // update html elements
    document.querySelector("#temp")
        .textContent = data.main.temp;
    if (data.weather && data.weather[0]) {
        let conditions = data.weather[0];
        document.querySelector("#description")
            .textContent = conditions.description;
        let img = /** @type {HTMLImageElement} */ (
            document.querySelector("#weather-icon")
        );
        img.src = ICON_URL.replace("{icon}", conditions.icon);
        img.alt = conditions.description
    }
}

fetch(LOCATION_API) // get my location
    .then(handleResponse)
    .then(fetchWeather) // get the weather at my location
    .then(handleResponse)
    .then(renderWeather) // push the weather information to the html elements
    .catch(handleError);

console.log("next line after fetch executes immediately");