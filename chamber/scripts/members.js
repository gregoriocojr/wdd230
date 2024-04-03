const baseURL = "https://gregoriocojr.github.io/wdd230/chamber";
const linksURL = "https://gregoriocojr.github.io/wdd230/chamber/data/members.json";
const directory = document.querySelector(".directory");

const displayMembers = (members) => {
    members.forEach((member) => {
        let memberCard = document.createElement('section');
        let mName = document.createElement('h2');
        let logo = document.createElement('img');
        let mAdd = document.createElement('p');
        let mContact = document.createElement('p');
        let mWebsite = document.createElement('a');

        mName.textContent = member.name;
        logo.src = `${baseURL}/${member.logo}`;
        mAdd.textContent = member.address;
        mContact.textContent = member.contact;
        mWebsite.textContent = member.url;
        mWebsite.href = member.url;

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
