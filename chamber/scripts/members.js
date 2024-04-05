const baseURL = "https://gregoriocojr.github.io/wdd230/chamber";
const linksURL = "https://gregoriocojr.github.io/wdd230/chamber/data/members.json";
const directory = document.querySelector(".directory");

const displayMembers = (members) => {
    members.forEach((member) => {
        let memberCard = document.createElement('section');
        let mName = document.createElement('h3');
        let logo = document.createElement('img');
        let mAdd = document.createElement('p');
        let mContact = document.createElement('p');
        let mWebsite = document.createElement('a');

        logo.setAttribute('src', `${baseURL}/${member.logo}`);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '120');
        logo.setAttribute('height', 'auto')

        mName.textContent = member.name;
        mAdd.textContent = member.address;
        mContact.textContent = member.contact;
        mWebsite.textContent = `Visit Website`;
        mWebsite.href = member.url;
        mWebsite.target = '-blank';

        memberCard.appendChild(logo);
        memberCard.appendChild(mName);
        memberCard.appendChild(mAdd);
        memberCard.appendChild(mContact);
        memberCard.appendChild(mWebsite);

        directory.appendChild(memberCard);
    });
}

async function getMembers() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayMembers(data.members);
        // console.table(data.members);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getMembers();


const toggleMenu = document.querySelector('.toggle-menu');

directory.classList.add('grid');

toggleMenu.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        const isGrid = event.target.id === 'grid';
        directory.classList.toggle('grid', isGrid);
        directory.classList.toggle('list', !isGrid);
    }
});