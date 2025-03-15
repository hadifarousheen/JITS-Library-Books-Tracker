const home = document.querySelector(".home");
const logout = document.querySelector(".logout");
const newbook = document.querySelector(".newbook");

home.addEventListener("click", () => {
  window.location = "./home.html";
});
logout.addEventListener("click", () => {
  window.location = "./index.html";
});
newbook.addEventListener("click", () => {
  window.location = "./newbook.html";
});
