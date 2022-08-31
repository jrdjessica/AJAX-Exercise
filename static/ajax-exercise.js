'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {

  fetch('/fortune')
    .then((response) => response.text())
    .then((serverData) => {
      document.querySelector('#fortune-text').innerText = serverData;
    });
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  // TODO: request weather with that URL and show the forecast in #weather-info
  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;
  let zipcode_user = zipcode;
  const queryString = new URLSearchParams({ zipcode: zipcode }).toString();
  let url_weather = `${url}?${queryString}`;

  fetch(url_weather)
    .then((response) => response.json())
    .then((serverData) => {
      document.querySelector('#weather-info').innerHTML = serverData['forecast'];
    });

}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // fetch(url, {
  //   method: 'POST',
  //   body: JSON.stringify(zipcode),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })
  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
