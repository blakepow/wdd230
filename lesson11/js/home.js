async function makeGetRequest(townArray) {

    let res = await axios.get('https://byui-cit230.github.io/weather/data/towndata.json');

    let data = res.data.towns;

    townArray.map(town => {
        const {townId, townName} = town;
        const townData = data[townId];
        document.getElementById(townName).innerHTML += (
            `<article>
                <h2>${townData.name}</h2>
                <p>Founded in ${townData.motto}</p>
                <p>Founded in ${townData.yearFounded}</p>
                <p>Current Population: ${townData.currentPopulation}</p>
                <p>Average Rainfall: ${townData.averageRainfall}</p>
            </article>`
        ) 
    })

}

makeGetRequest(
    [
        {
            townId: 6, 
            townName: 'preston'
        }, 
        {
            townId: 0, 
            townName: 'soda-springs'
        }, 
        {
            townId: 2, 
            townName: 'fish-haven'
        }
    ]
    );

