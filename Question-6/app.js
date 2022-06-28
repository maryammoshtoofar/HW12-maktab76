const elem = document.getElementById("elemId");
let goodBye = new Event("click", { bubbles: true });
elem.dispatchEvent(goodBye);

document.addEventListener("goodBye", function (event) {
  console.log("hi");
  console.log(`clientX =${event.clientX}`);
  console.log(`clientY =${event.clientY}`);
});
