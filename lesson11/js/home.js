async function makeGetRequest() {

    let res = await axios.get('https://byui-cit230.github.io/weather/data/towndata.json');

    let data = res.data.towns;

    const fishHaven = data[2];
    document.getElementById('fish-haven').innerHTML += (
        `<article>
            <h2>${fishHaven.name}</h2>
            <p>Founded in ${fishHaven.motto}</p>
            <p>Founded in ${fishHaven.yearFounded}</p>
            <p>Current Population: ${fishHaven.currentPopulation}</p>
            <p>Average Rainfall: ${fishHaven.averageRainfall}</p>
        </article>`
    )

    const preston = data[6];
    document.getElementById('preston').innerHTML += (
        `<article>
            <h2>${preston.name}</h2>
            <p>Founded in ${preston.motto}</p>
            <p>Founded in ${preston.yearFounded}</p>
            <p>Current Population: ${preston.currentPopulation}</p>
            <p>Average Rainfall: ${preston.averageRainfall}</p>
        </article>`
    )
    
    const sodaSprings = data[0];
    document.getElementById('soda-springs').innerHTML += (
        `<article>
            <h2>${sodaSprings.name}</h2>
            <p>Founded in ${sodaSprings.motto}</p>
            <p>Founded in ${sodaSprings.yearFounded}</p>
            <p>Current Population: ${sodaSprings.currentPopulation}</p>
            <p>Average Rainfall: ${sodaSprings.averageRainfall}</p>
        </article>`
    )
    
}



makeGetRequest();