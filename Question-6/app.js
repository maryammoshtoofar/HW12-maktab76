const span = document.getElementById("xy");
document.addEventListener("mouseover", function (event) {
  console.log(`clientX =${event.clientX}`);
  console.log(`clientY =${event.clientY}`);
});

let goodBye = new Event("mouseover", { bubbles: true });
elemId.dispatchEvent(goodBye);

