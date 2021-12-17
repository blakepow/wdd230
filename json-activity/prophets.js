const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

const getProphets = async () => {
    const prophets = await fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            // console.table(jsonObject);  // temporary checking for valid response and data parsing
            return jsonObject
        });
    
    prophets.prophets.map(prophet => {
        const {name, lastname, birthdate, birthplace, imageurl} = prophet;
        document.getElementById('main').innerHTML += (
            `
            <div>
                <h2>${name} ${lastname}</h2>
                <p>Date of Birth: ${birthdate}</p>
                <p>Place of Birth: ${birthplace}</p>
                <img src=${imageurl} alt=${name} />
            </div>
            `
        )
    })
}

getProphets();

