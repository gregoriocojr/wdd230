const currentTempElement = document.getElementById('today-temp');
const currentIconElement = document.getElementById('weather-icon');
const currentDescElement = document.getElementById('weather-desc');
const forecastContainer = document.querySelector('.forecast');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=14.4297&lon=120.9366&units=imperial&appid=1268a4bd7e5398389954d519508cc81a';

function displayResults(data) {
    const current = data.list[0];
    currentTempElement.innerHTML = `<span id="todayW">Today</span>: ${current.main.temp}\u00B0F`;
    const iconsrc = `https://openweathermap.org/img/w/${current.weather[0].icon}.png`;
    currentIconElement.setAttribute('src', iconsrc);
    currentIconElement.setAttribute('alt', current.weather[0].description);
    currentDescElement.textContent = `(${current.weather[0].description})`;

    // Display three-day forecast
    for (let i = 1; i <= 3; i++) {
        const forecast = data.list[i * 8];
        const forecastTemp = forecast.main.temp;
        const forecastIcon = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
        const forecastDesc = forecast.weather[0].description;
        const forecastTime = new Date(forecast.dt * 1000);
        const forecastDay = forecastTime.toLocaleString('en-US', { weekday: 'short' });
        const forecastDate = forecastTime.toLocaleString('en-US', { month: 'short', day: 'numeric' });

        const forecastItem = document.getElementById(`day${i}`);
        forecastItem.innerHTML = `
                <p>${forecastDay}, ${forecastDate}</p>
                <img src="${forecastIcon}" alt="${forecastDesc}">
                <p>${forecastTemp}&deg;F</p>
            `;
    }
}

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();