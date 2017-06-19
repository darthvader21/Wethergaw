if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        loadWeather(position.coords.latitude+','+position.coords.longitude);
    });
} else{
    loadWeather("London,UK","");
}

$(document).ready(function(){
    setInterval(getWeather,10000);
});

function loadWeather(location, woeid){
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'C',
        success: function(weather){
            city = weather.city;
            temp = weather.temp + '&deg;';
            wcode = '<img class="weathericon" src="img/weathericons/'+weather.code+'.svg">';
            wind = '<img src="img/win.svg">' + weather.wind.speed + weather.units.speed ;
            humidity = '<img src="img/humi.png">' +  weather.humidity +' %';
            $(".location").text(city);
            $(".temperature").html(temp);
            $(".weathericon").html(wcode);
            $(".windspeed").html(wind);
            $(".humidity").html(humidity);
        },
        error: function(error){
            $(".error").html('<p>'+error+'</p>');
        }
        
    });
}
