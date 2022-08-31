'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  console.log('hi');
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

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

  const formInputs = {
    melon_type: document.querySelector('#melon-type-field').value,
    qty: document.querySelector('#qty-field').value,
  };


  fetch('/order-melons.json', {
    method: 'POST',
    body: JSON.stringify(formInputs),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson['code'] === 'ERROR') {
        //make red
        document.querySelector('#order-status').classList.add('order-error');
        document.querySelector('#order-status').innerHTML = responseJson['msg']
      } else {
        document.querySelector('#order-status').classList.remove('order-error');
        document.querySelector('#order-status').innerHTML = responseJson['msg'];
      }
    })

}
document.querySelector('#order-form').addEventListener('submit', orderMelons);

function getDogImage(evt) {

  console.log("You pressed get a dog image");
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((responseJson) => {
      document.querySelector('#dog-pic').setAttribute('src', responseJson['message']);
    })
}

document.querySelector('#get-dog-image').addEventListener('click', getDogImage);
