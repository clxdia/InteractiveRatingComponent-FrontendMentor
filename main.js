const thankyou = document.querySelector(".selected");

const submit = document
  .getElementById("lol")
  .addEventListener("click", toggleSubmit);

function toggleSubmit() {
  thankyou.style["display"] = "block";
}

const buttons = document.querySelectorAll(".ratings-btn");

const rating = document.querySelector("#stars-number");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttons.forEach((f) => f.classList.remove("active"));
    e.target.classList.toggle("active");
    rating.innerHTML = btn.innerHTML;
  });
});
