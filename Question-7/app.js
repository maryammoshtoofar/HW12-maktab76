const span = document.getElementById("show_position");
const event_function = (event) => {
  span.innerHTML = `Position X= ${event.clientX} Position Y= ${event.clientX} `;
};
