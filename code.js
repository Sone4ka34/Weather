let first = document.querySelector(".First"); // первый инпут
let second = document.querySelector(".Second"); // второй инпут
let third = document.querySelector(".Third"); 
let fourth = document.querySelector(".Fourth"); 
let fifth = document.querySelector(".Fifth"); 
let button = document.querySelector("button");

const key = "b2b2c61e0ec96a5c72a4b8acaf9a78bf";

button.onclick = () => {
  let city = first.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
  )
    .then((response) => response.json())
    .then((json) => createWeather(json));
};

function createWeather(obj) {
  second.value = Math.round(obj.main.temp / 32);
  third.value = Math.round(obj.main.feels_like / 32);
  fourth.value = obj.main.humidity;
  fifth.value = obj.main.pressure;
  console.log(obj);
}

