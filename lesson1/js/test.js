let lastMod = () => {
    let lastMod = `Last Modified on ${document.lastModified}`;
    document.getElementById("last-mod").innerHTML = lastMod;
    
    // wut
    document.getElementById("copyright").innerHTML += ` ${new Date().getFullYear}`;
}