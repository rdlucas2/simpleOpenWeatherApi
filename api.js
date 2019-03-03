var OpenWeatherApi = (function() {
    function OpenWeatherApi(openWeatherApiKey) {
        this.openWeatherApiKey = openWeatherApiKey;
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/';
        this.apiSuffix = '&appid=' + this.openWeatherApiKey;
    }

    OpenWeatherApi.prototype.CurrentByLatLong = function(lat, long) {
        //sorry but I'm from USA so forcing imperial here | TODO: Make units an option
        var url = this.baseUrl + 'weather?lat=' + lat + '&lon=' + long + '&units=imperial' + this.apiSuffix;
        return $.get(url);
    }

    OpenWeatherApi.prototype.ForecastByLatLong = function(lat, long) {
        var url = this.baseUrl + 'forecast?lat=' + lat + '&lon=' + long + '&units=imperial' + this.apiSuffix;
        return $.get(url);
    }

    return OpenWeatherApi;
})();
