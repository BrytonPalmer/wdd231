async function loadCompanies() {
  try {
    const response = await fetch('data/companies.json');
    if (!response.ok) throw new Error('Network response was not ok');
    
    const companies = await response.json();
    displayCompanyCards(companies);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

function displayCompanyCards(companies) {
  const container = document.getElementById('company-cards');
  container.innerHTML = ''; // Clear if needed

  companies.forEach(company => {
    const card = document.createElement('div');
    card.classList.add('company-card');

    card.innerHTML = `
      <img src="images/${company.image}" alt="${company.name} logo">
      <h2>${company.name}</h2>
      <p><strong>Address:</strong> ${company.address}</p>
      <p><strong>Phone:</strong> ${company.phone}</p>
      <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
      <p><strong>Membership:</strong> ${getMembershipLevel(company.membershipLevel)}</p>
      <p>${company.description}</p>
    `;

    container.appendChild(card);
  });
}

function getMembershipLevel(level) {
  switch (level) {
    case 1: return 'Member';
    case 2: return 'Silver';
    case 3: return 'Gold';
    default: return 'Unknown';
  }
}

loadCompanies();
