
let companies = [];

async function loadCompanies() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Network response was not ok');

    companies = await response.json();
    displayCompanyCards(); // use global companies
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

function displayCompanyCards() {
  const container = document.getElementById('company-cards');
  container.innerHTML = ''; // Clear previous content

  const isListView = container.classList.contains('list-view');

  if (isListView) {
    const list = document.createElement('ul');
    list.classList.add('company-list');

    companies.forEach(company => {
      const item = document.createElement('li');
      item.classList.add('company-list-item');
      item.innerHTML = `
        <strong>${company.name}</strong><br>
        ${company.address}<br>
        ${company.phone}<br>
        <a href="${company.website}" target="_blank" rel="noopener">${company.website}</a><br>
        ${getMembershipLevel(company.membershipLevel)}<br>
        ${company.description}
      `;
      list.appendChild(item);
    });

    container.appendChild(list);
  } else {
    companies.forEach(company => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h2>${company.name}</h2>
        <p><strong>Address:</strong> ${company.address}</p>
        <p><strong>Phone:</strong> ${company.phone}</p>
        <p><strong>Website:</strong> <a href="${company.website}" target="_blank" rel="noopener">${company.website}</a></p>
        <p><strong>Membership:</strong> ${getMembershipLevel(company.membershipLevel)}</p>
        <p>${company.description}</p>
      `;
      container.appendChild(card);
    });
  }
}

function getMembershipLevel(level) {
  switch (level) {
    case 1: return 'Member';
    case 2: return 'Silver';
    case 3: return 'Gold';
    default: return 'Unknown';
  }
}

// Wait for DOM to load before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
  loadCompanies();

  const gridBtn = document.getElementById('gridView');
  const listBtn = document.getElementById('listView');
  const container = document.getElementById('company-cards');

  gridBtn.addEventListener('click', () => {
    container.classList.add('grid-view');
    container.classList.remove('list-view');
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
    displayCompanyCards(); // re-render in grid format
  });

  listBtn.addEventListener('click', () => {
    container.classList.add('list-view');
    container.classList.remove('grid-view');
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
    displayCompanyCards(); // re-render in list format
  });
});
