const linkEvents = "https://gregoriocojr.github.io/wdd230/chamber/data/events.json";
const eventsContainer = document.querySelector(".events");

const displayEvents = (eventList) => {
    eventList.forEach((event) => {
        let eCard = document.createElement('section');
        let eTitle = document.createElement('h3');
        let eImg = document.createElement('img');
        let eSched = document.createElement('p');
        let eVenue = document.createElement('p');
        let eFee = document.createElement('p');
        let eDesc = document.createElement('p');

        eImg.src = `https://gregoriocojr.github.io/wdd230/${event.image}`;
        eImg.alt = `Logo of ${event.image}`;
        eImg.loading = 'lazy';
        eImg.width = '400';
        eImg.height = 'auto';

        eTitle.textContent = event.title;
        eSched.textContent = event.sched;
        eVenue.textContent = event.venue;
        eFee.textContent = event.fee;
        eDesc.textContent = event.desc;

        eCard.appendChild(eTitle);
        eCard.appendChild(eImg);
        eCard.appendChild(eSched);
        eCard.appendChild(eVenue);
        eCard.appendChild(eFee);
        eCard.appendChild(eDesc);

        eventsContainer.appendChild(eCard);
    });
}

async function getEvents() {
    try {
        const response = await fetch(linkEvents);
        const data = await response.json();
        displayEvents(data.members);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getEvents();
