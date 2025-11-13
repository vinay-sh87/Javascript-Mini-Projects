const apiKey = '81968dc74a1fb3775038e8ed371cc82e';
const fetchBtn = document.getElementById('fetchBtn');
const temperature = document.querySelector('.temp');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const rainEl = document.querySelector('.rain');
const clouds = document.querySelector('.clouds');
const pressure = document.querySelector('.pressure');
const locate = document.querySelector('.location');


const fetchWeather = async ()=>{
    const city = document.getElementById('cityName').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    locate.innerHTML = `<span class="city-span">${data.name},</span> ${data.sys.country}`;
    temperature.innerHTML = `${(data.main.temp - 273.15).toFixed(2)} <span>&deg;C</span>`;
    description.innerHTML = data.weather[0].description;
    humidity.innerHTML = `${data.main.humidity} <span>%</span>`
    wind.innerHTML = `${data.wind.speed} <span>m/s</span>`;
    clouds.innerHTML = `${data.clouds.all} <span>% clouds</span>`;
    pressure.innerHTML = `${data.main.pressure} <span>hPa</span>`;
    
    const image = document.getElementById('image');
    const icon = data.weather[0].icon;
    image.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

}

fetchBtn.addEventListener('click', fetchWeather);