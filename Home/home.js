const newbook = document.querySelector(".newbook");
const logout = document.querySelector(".logout");
const about = document.querySelector(".about");

newbook.addEventListener("click", () => {
  window.location = "../Book/newbook.html";
});

logout.addEventListener("click", () => {
  window.location = "../index.html";
});

about.addEventListener("click", () => {
  window.location = "../About/about.html";
});

document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box");

  const studentobj = JSON.parse(localStorage.getItem("student"));

  const sname = document.createElement("li");
  sname.innerText = `Student Name : ${studentobj.sname}`;
  box.appendChild(sname);

  const shtno = document.createElement("li");
  shtno.innerText = `HallTicket Number : ${studentobj.htno}`;
  box.appendChild(shtno);

  const course = document.createElement("li");
  course.innerText = `Course : ${studentobj.course}`;
  box.appendChild(course);

  const year = document.createElement("li");
  year.innerText = `Year : ${studentobj.year}`;
  box.appendChild(year);

  const branch = document.createElement("li");
  year.innerText = `Branch : ${studentobj.branch}`;
  box.appendChild(branch);

  const semester = document.createElement("li");
  semester.innerText = `Semester : ${studentobj.semester}`;
  box.appendChild(semester);

  const table = document.querySelector(".table");
  const books = JSON.parse(localStorage.getItem("books"));
  const NumberofBooks = books.length;

  for (let i = 0; i < NumberofBooks; i++) {
    const row = document.createElement("tr");
    row.setAttribute("data-id", i);

    const SerialNo = document.createElement("td");
    SerialNo.innerText = i + 1;
    row.appendChild(SerialNo);

    const BookName = document.createElement("td");
    BookName.innerText = books[i].bname;
    row.appendChild(BookName);

    const BookAuthor = document.createElement("td");
    BookAuthor.innerText = books[i].bauthor;
    row.appendChild(BookAuthor);

    const IssueDate = document.createElement("td");
    IssueDate.innerText = books[i].issuedate;
    row.appendChild(IssueDate);

    const RenewalDate = document.createElement("td");
    RenewalDate.innerText = books[i].renewal;
    row.appendChild(RenewalDate);

    const ReturnDate = document.createElement("td");
    ReturnDate.innerText = books[i].return;
    row.appendChild(ReturnDate);

    const IconBlock = document.createElement("td");

    const del = document.createElement("img");
    del.src = "../Images/delete-icon.png";
    del.classList.add("icon-img");
    IconBlock.appendChild(del);

    del.addEventListener("click", (e) => {
      const rowId = e.target.getAttribute("data-id");
      let data = JSON.parse(localStorage.getItem("books"));
      if (Array.isArray(data)) {
        data.splice(rowId, 1);
      } else {
        delete data[rowId];
      }
      localStorage.setItem("books", JSON.stringify(data));
      e.target.closest("tr").remove();
    });

    const edit = document.createElement("img");
    edit.setAttribute("data-id", i);
    edit.src = "../Images/edit-icon.png";
    edit.style.marginLeft = "10px";
    edit.classList.add("icon-img");
    IconBlock.appendChild(edit);

    edit.addEventListener("click", (e) => {
      let studentid = e.target.getAttribute("data-id");
      let booksdata = JSON.parse(localStorage.getItem("books"));
      BookName.addEventListener("dblclick", function () {
        const input = document.createElement("input");
        input.type = "text";
        input.value = this.innerText;
        this.replaceWith(input);
        input.addEventListener("blur", function () {
          const td = document.createElement("td");
          td.innerText = input.value;
          input.replaceWith(td);
          booksdata[studentid].bname = input.value;
          localStorage.setItem("books", JSON.stringify(booksdata));
        });
        input.focus();
      });
      BookAuthor.addEventListener("dblclick", function () {
        const input = document.createElement("input");
        input.type = "text";
        input.value = this.innerText;
        this.replaceWith(input);
        input.addEventListener("blur", function () {
          const td = document.createElement("td");
          td.innerText = input.value;
          input.replaceWith(td);
          booksdata[studentid].bauthor = input.value;
          localStorage.setItem("books", JSON.stringify(booksdata));
        });
        input.focus();
      });
      input.focus();
    });
    row.appendChild(IconBlock);
    table.appendChild(row);
  }
});
