document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name-input');
    const showBtn = document.getElementById('show-btn');
    const nameDisplay = document.getElementById('name-display');

    const cityWeather = {
        'ahemdabad': { name: 'Ahmedabad', weather: 30 },
        'vadodara': { name: 'Vadodara', weather: 34 },
        'mumbai': { name: 'Mumbai', weather: 28 }
    };

    showBtn.addEventListener('click', () => {
        const enteredCity = nameInput.value.trim().toLowerCase();

        if (enteredCity === '') {
            // nameDisplay.textContent = 'Please enter a city name';
            alert('Please enter a city name');
        } else if (cityWeather.hasOwnProperty(enteredCity)) {
            const city = cityWeather[enteredCity];
            nameDisplay.textContent = `Weather of ${city.name} is ${city.weather}`;
        } else {
            nameDisplay.textContent = 'Weather information not available for this city';
        }
    });
});
