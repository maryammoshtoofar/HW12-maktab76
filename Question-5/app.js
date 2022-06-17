const parent = document.getElementById("buttons");
const res = document.getElementById("result");
parent.addEventListener("click", (e) => {
  if (e.target.className === "buttonClass")
    result.innerHTML = e.target.className;
  else {
    result.innerHTML = "";
    alert("Click");
  }
});
