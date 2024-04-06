const baseURL = "https://gregoriocojr.github.io/wdd230/chamber";
const linksURL = "https://gregoriocojr.github.io/wdd230/chamber/data/members.json";
const spotlights = document.querySelector(".spotlights");

let currentIndex = 0;

const displaySpotlights = (members) => {
    spotlights.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % members.length;
        let member = members[index];

        let spotlightCard = document.createElement('section');
        let logo = document.createElement('img');
        let mAd = document.createElement('p');
        let mWebsite = document.createElement('a');

        logo.setAttribute('src', `${baseURL}/${member.logo}`);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '120');
        logo.setAttribute('height', 'auto')

        mAd.textContent = member.ad;
        mWebsite.textContent = `Visit us here.`;
        mWebsite.href = member.url;
        mWebsite.target = '-blank';

        spotlightCard.appendChild(logo);
        spotlightCard.appendChild(mAd);
        spotlightCard.appendChild(mWebsite);

        spotlights.appendChild(spotlightCard);
    }
    currentIndex = (currentIndex + 3) % members.length;
}

async function getSpotlights() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();

        // addition
        const goldSilverMembers = data.members.filter(member =>
            member.membership === 'gold' || member.membership === 'silver'
        );

        displaySpotlights(data.members);
        // console.table(data.members);

        // further addition
        setInterval(() => {
            displaySpotlights(goldSilverMembers);
        }, 10000);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getSpotlights();