const span = document.getElementById("position");
const showXY = (e) => {
  span.innerHTML = `X= ${e.clientX} Y= ${e.clientX} `;
};

const div = document.getElementById("container");
div.addEventListener("mousemove", showXY);
