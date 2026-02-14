const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");

const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");

const eventContainer = document.getElementById("eventContainer");
const demoContent = document.getElementById("demoContent");

const sampleEvent = [
  {
    title: "Web dev",
    date: "4-6-2026",
    category: "Workshop",
    description: "usd ius sijjnsf j snen s"
  },
  {
    title: "Web dev2",
    date: "4-6-2026",
    category: "Conference",
    description: "bds iudsfnjn s sijjnsf j snen s"
  }
];


// create event card
function createEventCard(data) {
  const card = document.createElement("div");
  card.classList.add("event-card");

  card.innerHTML = `
    <button class="delete-btn">X</button>
    <h3>${data.title}</h3>
    <div>${data.date || "No date"}</div>
    <span>${data.category}</span>
    <p>${data.description}</p>
  `;

  return card;
}


// add event to UI
function addEvent(data) {
  const emptyState = document.querySelector(".empty-state");

  if (emptyState) emptyState.remove();

  eventContainer.appendChild(createEventCard(data));
}


// form submit
eventForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newEvent = {
    title: eventTitle.value,
    date: new Date().toLocaleDateString(),
    category: eventCategory.value,
    description: eventDescription.value
  };

  addEvent(newEvent);
  eventForm.reset();
});


// clear all events
if (clearAllBtn) {
  clearAllBtn.addEventListener("click", () => {
    eventContainer.innerHTML =
      <div class="empty-state">No events yet. Add your first event!</div>;
  });
}


// add sample events
if (addSampleBtn) {
  addSampleBtn.addEventListener("click", () => {
    sampleEvent.forEach(addEvent);
  });
}


// delete event
eventContainer.addEventListener("click", (event) => {
  const card = event.target.closest(".event-card");

  if (event.target.classList.contains("delete-btn")) {
    card.remove();
  }

  if (!eventContainer.querySelector(".event-card")) {
    eventContainer.innerHTML =
      <div class="empty-state">No events yet. Add your first event!</div>;
  }
}); 