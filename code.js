let first = document.querySelector(".First"); // первый инпут
let second = document.querySelector(".Second"); // второй инпут
let third = document.querySelector(".Third"); 
let fourth = document.querySelector(".Fourth"); 
let fifth = document.querySelector(".Fifth"); 
let button = document.querySelector("button");
let label = document.querySelectorAll(".LabelAll");

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

let slider = document.querySelector('.slider');

var flag = true;
slider.onclick = function() {
  if (flag == true) {
    document.body.style.backgroundColor = "#000000";
    button.style.backgroundColor = "white";
    button.style.color = "black";
    label[0].style.color = "white";
    label[1].style.color = "white";
    label[2].style.color = "white";
    label[3].style.color = "white";
    flag = false;
}
else {
  document.body.style.backgroundColor = "#ffffff"
  button.style.backgroundColor = "black";
  button.style.color = "white";
  label[0].style.color = "black";
  label[1].style.color = "black";
  label[2].style.color = "black";
  label[3].style.color = "black";
  flag = true;
}
  
};
