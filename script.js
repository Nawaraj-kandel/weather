async function getWeather() {
    const apiKey = '2a9999520ba0d3d8f021b67a6f2284da';
    const city = document.getElementById('city');
    const weatherInfo = document.getElementById('weatherInfo');

    const cityName = city.value;
    if (!cityName) {
        alert('Please enter a city name');
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found');
        } else {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;

            weatherInfo.innerHTML = `
                <h2>${cityName}</h2>
                <p>${description}</p>
                <p>Temperature: ${temperature} °C</p>
                <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
            `;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
