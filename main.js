let api = [
  {
    city: "Dushanbe",
    state: "TJ",
    term: 29,
    humidity: 42,
    wind: 4,
  },
  {
    city: "Kulob",
    state: "TJ",
    term: 32,
    humidity: 44,
    wind: 6,
  },
  {
    city: "Hisor",
    state: "TJ",
    term: 39,
    humidity: 28,
    wind: 3,
  },
  {
    city: "Khujand",
    state: "TJ",
    term: 19,
    humidity: 52,
    wind: 7,
  },
  {
    city: "Khorug",
    state: "TJ",
    term: 22,
    humidity: 49,
    wind: 5,
  },
  {
    city: "Norak",
    state: "TJ",
    term: 21,
    humidity: 38,
    wind: 12,
  },
  {
    city: "Panjakent",
    state: "TJ",
    term: 31,
    humidity: 44,
    wind: 2,
  },
  {
    city: "Vose",
    state: "TJ",
    term: 30,
    humidity: 40,
    wind: 5,
  },
  {
    city: "Rogun",
    state: "TJ",
    term: 28,
    humidity: 58,
    wind: 22,
  },
  {
    city: "Sugd",
    state: "TJ",
    term: 31,
    humidity: 22,
    wind: 6,
  },
  {
    city: "Vahdat",
    state: "TJ",
    term: 32,
    humidity: 32,
    wind: 9,
  },
  {
    city: "Moscaw",
    state: "Rus",
    term: 12,
    humidity: 52,
    wind: 23,
  },
  {
    city: "Sankt-Peterburg",
    state: "Rus",
    term: 23,
    humidity: 14,
    wind: 8,
  },
  {
    city: "New-York",
    state: "USA",
    term: 24,
    humidity: 8,
    wind: 2,
  },
  {
    city: "Bangladesh",
    state: "BRZ",
    term: 24,
    humidity: 18,
    wind: 4,
  },
];

let place = document.querySelector(".place");
let term = document.querySelector("#term");
let week = document.querySelector(".week");
let date = document.querySelector(".date");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let form = document.querySelector(".form");
let inpSearch = document.querySelector(".inpSearch")

form.onsubmit = (event) => {
  event.preventDefault();
  let wheather = api.find((elem) => elem.city == inpSearch.value);
  place.innerHTML = `<i class="fa-solid fa-location-dot" style="margin-right: 10px"></i> ${wheather.city},${wheather.state}`;
  term.innerHTML = `${wheather.term}°c`;
  
  humidity.innerHTML = `${wheather.humidity}%`
  wind.innerHTML = `${wheather.wind}km/h`
};

let dateJs = new Date();
  let weekJs = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthJs = [
    "Jan",
    "Fab",
    "March",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  week.innerHTML = weekJs[dateJs.getDay()];
  date.innerHTML = `${dateJs.getDate()} ${
    monthJs[dateJs.getMonth()]
  } ${dateJs.getFullYear()}`;