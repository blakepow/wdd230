const highTemp = Number(document.getElementById('high-temp').innerText);
const windSpeed = Number(document.getElementById('wind-speed').innerText);

const windChill = Math.ceil(35.74 + .6215 * highTemp - 35.75 * (windSpeed ** .16) + .4275 * highTemp * (windSpeed ** .16));

document.getElementById('windchill').innerText = windChill;