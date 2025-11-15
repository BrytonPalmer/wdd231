const eventsContainer = document.querySelector('#current-events .cards-container');

const events = [
  {
    title: "Winter Village Grand Opening",
    date: "Nov 14, 2025",
    time: "5:00 PM – 8:00 PM",
    location: "11098 S Grandville Ave, South Jordan",
    description: "Skate under dazzling lights, meet holiday characters, and enjoy free samples from local vendors.",
    
  },
  {
    title: "VIP Mix & Mingle Business Networking",
    date: "Nov 12, 2025",
    time: "6:00 PM – 9:00 PM",
    location: "The Break Pub, Daybreak",
    description: "Connect with local entrepreneurs and chamber members over drinks and live music.",
    
  },
  {
    title: "Obedience/Rally Dog Training Event",
    date: "Nov 7–9, 2025",
    time: "All Day",
    location: "USU Bastian Agricultural Center",
    description: "Watch skilled dogs compete in obedience and rally trials hosted by local trainers.",
    
  }
];

events.forEach(event => {
  const card = document.createElement('section');
  card.classList.add('event-card');
  card.innerHTML = `
    <h3>${event.title}</h3>
    <p><strong>Date:</strong> ${event.date}</p>
    <p><strong>Time:</strong> ${event.time}</p>
    <p><strong>Location:</strong> ${event.location}</p>
    <p>${event.description}</p>
    
  `;
  eventsContainer.appendChild(card);
});
