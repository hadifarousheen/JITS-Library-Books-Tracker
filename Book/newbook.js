const form = document.querySelector(".form");
const bname = document.querySelector(".bname");
const bauthor = document.querySelector(".bauthor");
const home = document.querySelector(".home");
const logout = document.querySelector(".logout");
const about = document.querySelector(".about");

home.addEventListener("click", () => {
  window.location = "../Home/home.html";
});

logout.addEventListener("click", () => {
  window.location = "../index.html";
});

about.addEventListener("click", () => {
  window.location = "../About/about.html";
});

if (!localStorage.getItem("books")) {
  localStorage.setItem("books", JSON.stringify([]));
}
const bookobj = JSON.parse(localStorage.getItem("books"));
let count = bookobj.length;

bname.addEventListener("input", (e) => {
  if (!bookobj[count]) bookobj[count] = {};
  bookobj[count].bname = e.target.value;
  localStorage.setItem("books", JSON.stringify(bookobj));
});

bauthor.addEventListener("input", (e) => {
  if (!bookobj[count]) bookobj[count] = {};
  bookobj[count].bauthor = e.target.value;
  localStorage.setItem("books", JSON.stringify(bookobj));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const bookobj = JSON.parse(localStorage.getItem("books"));
  bookobj[count].serialno = count + 1;
  bookobj[count].issuedate = `${new Date().getDate()}/${
    new Date().getMonth() + 1
  }/${new Date().getFullYear()}`;
  const currentDate = new Date();
  const futureDate = new Date(currentDate.setDate(currentDate.getDate() + 15));
  const formattedDate = `${futureDate.getDate()}/${
    futureDate.getMonth() + 1
  }/${futureDate.getFullYear()}`;
  bookobj[count].renewal = formattedDate;
  const currentDate2 = new Date();
  const futureDate2 = new Date(
    currentDate2.setDate(currentDate2.getDate() + 30)
  );
  const formattedDate2 = `${futureDate2.getDate()}/${
    futureDate2.getMonth() + 1
  }/${futureDate2.getFullYear()}`;
  bookobj[count].return = formattedDate2;
  localStorage.setItem("books", JSON.stringify(bookobj));
  count++;
  window.location = "../Home/home.html";
});
