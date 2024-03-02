const currentYear = new Date().getFullYear();

document.getElementById('currentYear').textContent = currentYear;

const lastModifiedDate = new Date(document.lastModified);

const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
const formattedLastModifiedDate = lastModifiedDate.toLocaleDateString('en-US', options);

document.getElementById('lastModified').textContent += formattedLastModifiedDate;
