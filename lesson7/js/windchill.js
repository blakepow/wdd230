async function makeGetRequest() {

    let res = await axios.get('https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=610a147366e4ee7efdf2704a9e14c0f1');

    let data = res.data.list;

    document.getElementById('current').innerText = data[0].weather[0].main;

    const currentWeather = data[0].main;

    const highTemp = Math.ceil(currentWeather.temp_max);
    document.getElementById('high-temp').innerText = highTemp;

    document.getElementById('humidity').innerText = currentWeather.humidity;
    
    document.getElementById('wind-speed').innerText = Math.ceil(data[0].wind.speed);

    let getWindchill = function(temperature, windspeed) {
        if (temperature <= 50 && windspeed > 3) {
    
            document.getElementById('windchill').innerText =  Math.round((
                35.74 + 
                (0.6215 * temperature) - 
                (35.75 * Math.pow(windspeed, 0.16)) + 
                (0.4275 * temperature * Math.pow(windspeed, 0.16))
            ));

            
        }
        else {
            document.getElementById('windchill').innerText = '0';
        }
    }

    getWindchill(currentWeather.temp, data[0].wind.speed)

    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        
    data.map((day, index) => {
        if(index % 8 == 0){
            document.getElementById('forecast-info').innerHTML += (
                `
                <div>
                    <h3>${days[index/8]}</h3>
                    <p>${day.weather[0].main}</p>
                    <img src='https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png' />
                    <p>${Math.ceil(day.main.temp)}˚F</p>
                </div>
                `
            )
        }
    })

}

makeGetRequest();

