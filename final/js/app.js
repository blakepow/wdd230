const mainNavbar = document.getElementById('main-navbar');
const dropdownToggler = document.getElementById('dropdown-opener');

const navToggle = () => {
    mainNavbar.classList.toggle('open')
}

const date = new Date();
document.getElementById("current-date").innerHTML = date.toLocaleString('default', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'});

if(document.getElementById('main-page') || document.getElementById('directory')){
    const businessRequest = async (loopLimit) => {
        const res =  await axios.get('../data/data.json');
        const data = res.data.businesses;
    
        data.map((business, index) => {
            if(index < loopLimit) {
                document.getElementById('ads-container').innerHTML +=  (
                    `
                        <div class='ads'>
                            <img src=${business.logo} alt='logo'/>
                            <h3><a target='_blank' rel='noopener' href=https://${business.website}>${business.name}</a></h3>
                            <p>${business.description}</p>
                        </div>
                    `
                )
            }
        })
    }
    
    document.getElementById('main-page') ? businessRequest(3) : businessRequest(7);
}

if (document.getElementById('join-page')) {
    const tierDesc = document.getElementById('tier-info');
    const backdrop = document.getElementById('backdrop');
    backdrop.addEventListener('click', () => {
        tierDesc.classList.remove('active')
        backdrop.classList.remove('active')
        // console.log('meow');
    })


    const displayDesc = tierInfo => {
        tierDesc.classList.add('active')
        backdrop.classList.add('active')
        tierDesc.innerHTML = tierInfo;
    }


    const nonProfit = document.getElementById('non-profit-desc');
    const nonProfitDesc = (
        `
        <h3>Perks</h3>
        <ul>
        <li>Advertising for your business</li>
        </ul>
        `
    )

    const bronze = document.getElementById('bronze-desc');
    const bronzeDesc = (
        `
        <h3>Perks</h3>
        <ul>
        <li>Advertising for your business</li>
        <li>Semi Annual Chamber of Commerce conference invite</li>
        </ul>
        `
    )

    const silver = document.getElementById('silver-desc');
    const silverDesc = (
        `
        <h3>Perks</h3>
        <ul>
        <li>Advertising for your business</li>
        <li>Semi Annual Chamber of Commerce conference invite</li>
        <li>Optimal marketing on Chamber of Commerce page</li>
        </ul>
        `
        )
        
        const gold = document.getElementById('gold-desc');
        const goldDesc = (
        `
            <h3>Perks</h3>
            <ul>
                <li>Advertising for your business</li>
                <li>Semi Annual Chamber of Commerce conference invite</li>
                <li>Optimal marketing on Chamber of Commerce page</li>
                <li>Annual Gala and event invites</li>
                <li>Continuous mention in our monthly newsletter</li>
            </ul>
        `
    )

    nonProfit.addEventListener('click', () => {
        displayDesc(nonProfitDesc)
    })
    bronze.addEventListener('click', () => {
        displayDesc(bronzeDesc)
    })
    silver.addEventListener('click', () => {
        displayDesc(silverDesc)
    })
    gold.addEventListener('click', () => {
        displayDesc(goldDesc)
    })
}