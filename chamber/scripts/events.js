const baseURL = "https://gregoriocojr.github.io/wdd230";
const linksURL = "https://gregoriocojr.github.io/wdd230/chamber/data/events.json";
const events = document.querySelector(".events");

const displayEvents = (events) => {
    events.forEach((event) => {
        let eCard = document.createElement('section');
        let eTitle = document.createElement('h3');
        let eImg = document.createElement('img');
        let eSched = document.createElement('p');
        let eVenue = document.createElement('p');
        let eFee = document.createElement('p');
        let eDesc = document.createElement('p');

        eImg.setAttribute('src', `${baseURL}/${event.image}`);
        eImg.setAttribute('alt', `Logo of ${event.image}`);
        eImg.setAttribute('loading', 'lazy');
        eImg.setAttribute('width', '400');
        eImg.setAttribute('height', 'auto')

        eTitle.textContent = event.title;
        eSched.textContent = event.sched;
        eVenue.textContent = event.venue;
        eFee = textContent = event.fee;
        eDesc = textContent = event.desc;

        eCard.appendChild(eTitle);
        eCard.appendChild(eImg);
        eCard.appendChild(eSched);
        eCard.appendChild(eVenue);
        eCard.appendChild(eFee);
        eCard.appendChild(eDesc);

        events.appendChild(eCard);
    });
}

async function getEvents() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        // displayEvents(data.members);
        console.table(data.members);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getEvents();