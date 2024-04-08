const baseEvents = "https://gregoriocojr.github.io/wdd230";
const linkEvents = "https://gregoriocojr.github.io/wdd230/chamber/data/events.json";
const eventsContainer = document.querySelector(".events");

let currentEventIndex = 0;

const displayEvent = (event) => {
    eventsContainer.innerHTML = ''; // Clear previous event
    let ePic = document.createElement('section')
    let eCard = document.createElement('section');
    let eTitle = document.createElement('h3');
    let eImg = document.createElement('img');
    let eSched = document.createElement('p');
    let eVenue = document.createElement('p');
    let eFee = document.createElement('p');
    let eDesc = document.createElement('p');

    eImg.setAttribute('src', `${baseEvents}/${event.image}`);
    eImg.setAttribute('alt', 'Image of the Event');
    eImg.setAttribute('loading', 'lazy');
    eImg.setAttribute('width', '400');
    eImg.setAttribute('height', 'auto');

    eTitle.textContent = event.title;
    eSched.innerHTML = `<span id="label">Schedule</span>: ${event.sched}`;       
    eVenue.innerHTML = `<span id="label">Venue</span>: ${event.venue}`;   
    eFee.innerHTML = `<span id="label">Fee</span>: ${event.fee}`;   
    eDesc.innerHTML = `<span id="label">Description</span>: ${event.desc}`;   

    ePic.appendChild(eImg);
    eCard.appendChild(eTitle);
    eCard.appendChild(eSched);
    eCard.appendChild(eVenue);
    eCard.appendChild(eFee);
    eCard.appendChild(eDesc);

    eventsContainer.appendChild(ePic);
    eventsContainer.appendChild(eCard);
}

async function getEvents() {
    try {
        const response = await fetch(linkEvents);
        const data = await response.json();
        const events = data.events;

        events.sort(() => Math.random() - 0.5);

        displayEvent(events[currentEventIndex]);

        setInterval(() => {
            currentEventIndex = (currentEventIndex + 1) % events.length;
            displayEvent(events[currentEventIndex]);
        }, 30000);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getEvents();
