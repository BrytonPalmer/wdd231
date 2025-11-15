async function loadSpotlightMembers() {
    const spotlightContainer = document.querySelector('#spotlight');

    try {
        const response = await fetch('data/members.json');
        const data = await response.json();

        // filter for gold and silver members
        const qualified = data.members.filter(member =>
            member.membership === 'Gold' || member.membership === 'Silver'
        );

        //shuffle and select 3 random members
        const spotlight = qualified
            .sort(() => 0.5 - Math.random())
            .slice(0,3);

        //Render spotlight cards
        spotlight.forEach(member => {
            const card = document.createElement('section');
            card.classList.add('spotlight-card');
            card.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.membership} Member </p>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            spotlightContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading spotlight members:', error);
        spotlightContainer.innerHTML = `<p>Unable to load spotlight members at this time.</p>`;    
    }
}
loadSpotlightMembers();