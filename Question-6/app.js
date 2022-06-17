const span = document.getElementById("xy");
document.addEventListener("mouseover", function (event) {
  span.innerHTML = `clientX= ${event.clientX} clientY= ${event.clientX} `;
});

let goodBye = new Event("mouseover", { bubbles: true });
elemId.dispatchEvent(goodBye);
