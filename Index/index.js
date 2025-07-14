const submit = document.querySelector(".register-submit");
let firstregistered;
if (!localStorage.getItem("student")) {
  let student = {};
  firstregistered = false;
  localStorage.setItem("student", JSON.stringify(student));
}

const sname = document.querySelector(".name");
const htno = document.querySelector(".hallticketregister");
const course = document.querySelector(".course");
const branch = document.querySelector(".branch");
const year = document.querySelector(".year");
const semester = document.querySelector(".semester");
const email = document.querySelector(".email");
const rpasswords = document.querySelector(".rpassword");
const login = document.querySelector(".loginsubmit");

const registersubmit = document.querySelector(".register-submit");
const form = document.querySelector(".form");

function handleSubmit(e) {
  e.preventDefault();
  const studentobj = JSON.parse(localStorage.getItem("student"));

  if (studentobj.sname == null) {
    studentobj.sname = e.target.name.value;
    localStorage.setItem("student", JSON.stringify(studentobj));
    firstregistered = true;
  } else {
    firstregistered = false;
  }

  if (studentobj.htno == null) {
    studentobj.htno = e.target.htr.value;
    localStorage.setItem("student", JSON.stringify(studentobj));
  }

  if (studentobj.course == null) {
    studentobj.course = e.target.course.value;
    localStorage.setItem("student", JSON.stringify(studentobj));
  }

  if (studentobj.branch == null) {
    studentobj.branch = e.target.branch.value;
    localStorage.setItem("student", JSON.stringify(studentobj));
  }

  if (studentobj.year == null) {
    studentobj.year = e.target.year.value;
    localStorage.setItem("student", JSON.stringify(studentobj));
  }

  if (studentobj.semester == null) {
    studentobj.semester = e.target.semester.value;
    localStorage.setItem("student", JSON.stringify(studentobj));
  }

  if (studentobj.email == null) {
    studentobj.email = e.target.email.value;
    localStorage.setItem("student", JSON.stringify(studentobj));
  }

  if (studentobj.rpassword == null) {
    studentobj.rpassword = e.target.password.value;
    localStorage.setItem("student", JSON.stringify(studentobj));
  }

  if (studentobj.sname && firstregistered == false) {
    const message = document.createElement("h3");
    message.innerText =
      "You have already registered on this device.Try to Login instead..";
    message.style.color = "brown";
    const container = document.querySelector(".container");
    container.appendChild(message);
  } else {
    window.location = "../index.html";
  }
}
