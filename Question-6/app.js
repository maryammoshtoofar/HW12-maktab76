const elem = document.getElementById("elemId");
// catch on document...
document.addEventListener("hello", function (event) {
  // (1)
  alert("Hello from " + event.target.tagName); // Hello from H1
});

// ...dispatch on elem!
let event = new Event("hello", { bubbles: true }); // (2)
elem.dispatchEvent(event);

// the handler on document will activate and display the message.
