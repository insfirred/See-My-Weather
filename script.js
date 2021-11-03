let weather = {
    apikey: "04253670252522335e2a51fafef8c533",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey)
            .then((response) => response.json()).then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        console.log(name, icon, description, temp, humidity)

        document.querySelector(".heading").innerText = name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".weathericon").scr = "http://openweathermap.org/img/w/" + icon + ".png";
        document.querySelector(".infotext").innerHTML = description;
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
    },
    import: function() {
        this.fetchWeather(document.querySelector(".searchbar").value);
    }
}

document.querySelector(".searchicon").addEventListener('click', function() {
    weather.import();
})