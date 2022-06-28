const elem = document.getElementById("elemId");
// ...dispatch on elem!
let event = new Event("goodbye", { bubbles: true }); // (2)
elem.dispatchEvent(event);
