let now = new Date();
let dateTime = document.querySelector("#dateTime");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let date = (dateTime.innerHTML = `${day} ${hours}:${minutes} `);

let apiKey = "oedd429506fc7daf6f93a04b3atc1af8";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Paris&key=oedd429506fc7daf6f93a04b3atc1af8&units=metric";

function city(response) {
  console.log(response);
}

axios.get(apiUrl).then(city);
