const items = document.querySelectorAll(".items");
console.log(items);

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("lined");
  });
});
