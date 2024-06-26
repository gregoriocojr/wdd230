const baseURL = "https://gregoriocojr.github.io/wdd230/";
const linksURL = "https://gregoriocojr.github.io/wdd230/data/links.json";
const weeklyActivitiesDiv = document.getElementById("weeklyActivities");

const displayLinks = (weeks) => {
    weeks.forEach((weekData) => {
        let weekText = document.createElement('p');
        weekText.classList.add('week-heading');
        let activities = weekData.links.map(link => `<a href="${link.url}" target="_blank">${link.title}</a>`).join('<span class="separator"> | </span>');
        weekText.innerHTML = `<span class="week-name">${weekData.week}:</span> ${activities}`;
        weeklyActivitiesDiv.appendChild(weekText);
    });
}

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getLinks();
