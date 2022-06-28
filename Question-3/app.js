const myDiv = document.querySelector(".cta_container");
const myBtn = document.querySelector(".cta_button");
myDiv.addEventListener("click", (e) => {
  console.log(myDiv.nodeName);
});

myBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(myBtn.nodeName);
});
