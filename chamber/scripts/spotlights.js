const baseURL = "https://gregoriocojr.github.io/wdd230/chamber";
const linksURL = "https://gregoriocojr.github.io/wdd230/chamber/data/members.json";
const spotlights = document.querySelector(".spotlights");

const displaySpotlights = (members) => {
    members.forEach((member) => {
        let spotlightCard = document.createElement('section');
        let mName = document.createElement('h3');
        let logo = document.createElement('img');
        let mAd = document.createElement('p');
        // let mContact = document.createElement('p');
        // let mWebsite = document.createElement('a');

        logo.setAttribute('src', `${baseURL}/${member.logo}`);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '120');
        logo.setAttribute('height', 'auto')

        mName.textContent = member.name;
        mAd.textContent = member.ad;
        // mContact.textContent = member.contact;
        // mWebsite.textContent = `Visit Website`;
        // mWebsite.href = member.url;
        // mWebsite.target = '-blank';

        spotlightCard.appendChild(logo);
        spotlightCard.appendChild(mName);
        spotlightCard.appendChild(mAd);
        // spotlightCard.appendChild(mContact);
        // spotlightCard.appendChild(mWebsite);

        spotlights.appendChild(spotlightCard);
    });
}

async function getSpotlights() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displaySpotlights(data.members);
        // console.table(data.members);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getSpotlights();