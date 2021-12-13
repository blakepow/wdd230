async function makeGetRequest({townId, townName}) {

    let res = await axios.get('https://byui-cit230.github.io/weather/data/towndata.json');

    let eventsData = res.data.towns[townId].events;

    const displayEvents = eventsData.map((event) => {
        return  `<p>${event}</p>`
    })

    document.getElementById(`${townName}-events`).innerHTML += (
        `
        <div>
            ${displayEvents}
        </div>
        `
    )
}

if (document.getElementById('preston-events')) {
    makeGetRequest({townId: 6, townName: 'preston'})
} else if (document.getElementById('soda-springs-events')) {
    makeGetRequest({townId: 0, townName: 'soda-springs'})
} else if (document.getElementById('fish-haven-events')) {
    makeGetRequest({townId: 2, townName: 'fish-haven'})
}


