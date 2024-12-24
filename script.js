const apiKey = '40d88982530b0260eaaf17f5c16416b0'; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById('city').value;

    if (city === '') {
        alert('Please enter a city!');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found!');
            return;
        }

        const weather = data.weather[0];
        const main = data.main;
        const wind = data.wind;

        document.getElementById('city-name').textContent = data.name + ', ' + data.sys.country;
        document.getElementById('temperature').textContent = `Temperature: ${main.temp}°C`;
        document.getElementById('description').textContent = `Weather: ${weather.description}`;
        document.getElementById('humidity').textContent = `Humidity: ${main.humidity}%`;
        document.getElementById('wind').textContent = `Wind: ${wind.speed} m/s`;
    } catch (error) {
        alert('Error fetching data. Please try again.');
    }
}
