// // q2 part 1

const fname = document.getElementById("fname");
fname.addEventListener("focusout", () => {
  const isEmpty = !fname.value;
  const validText = document.querySelector(".validText");
  const invalidText = document.querySelector(".invalidText");
  if (isEmpty) {
    fname.classList.add("invalid");
    invalidText.classList.remove("hide");
    validText.classList.add("hide");
  } else {
    fname.classList.remove("invalid");
    fname.classList.add("valid");
    validText.classList.remove("hide");
    invalidText.classList.add("hide");
  }
});

// q2 part 2
const email = document.getElementById("email");
const leftEmail = document.getElementById("leftEmail");
email.addEventListener("change", () => {
  leftEmail.innerHTML = email.value;
});

// q2 part 3
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
});
