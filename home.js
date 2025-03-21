const newbook = document.querySelector(".newbook");

const logout = document.querySelector(".logout");

const about = document.querySelector(".about");

newbook.addEventListener("click", () => {
  window.location = "newbook.html";
});

logout.addEventListener("click", () => {
  window.location = "index.html";
});

about.addEventListener("click", () => {
  window.location = "about.html";
});

document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box");

  const studentobj = JSON.parse(localStorage.getItem("student"));
  const fineamount = localStorage.getItem("fine");

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
  const no = books.length;

  for (let i = 0; i < no; i++) {
    const row = document.createElement("tr");
    row.setAttribute("data-id", i);

    const tdata = document.createElement("td");
    tdata.innerText = i+1;
    row.appendChild(tdata);

    const tdata2 = document.createElement("td");
    tdata2.innerText = books[i].bname;
    row.appendChild(tdata2);

    const tdata3 = document.createElement("td");
    tdata3.innerText = books[i].bauthor;
    row.appendChild(tdata3);

    const tdata4 = document.createElement("td");
    tdata4.innerText = books[i].issuedate;
    row.appendChild(tdata4);

    const tdata5 = document.createElement("td");
    tdata5.innerText = books[i].renewal;
    row.appendChild(tdata5);

    const tdata6 = document.createElement("td");
    tdata6.innerText = books[i].return;
    row.appendChild(tdata6);

    const tdata7 = document.createElement("td");

    const del = document.createElement("img");
    del.src = "icons8-delete-30.png";
    del.classList.add("icon-img");
    tdata7.appendChild(del);
    del.addEventListener("click", (e) => {
      const rowId = e.target.getAttribute("data-id");
      let data = JSON.parse(localStorage.getItem("books"));
      if (Array.isArray(data)) {
        data.splice(rowId, 1); // Remove item at index rowId (for arrays)
      } else {
        delete data[rowId]; // Remove key from object
      }
      localStorage.setItem("books", JSON.stringify(data));
      e.target.closest("tr").remove();
    });

    const edit = document.createElement("img");
    edit.setAttribute("data-id", i);
    edit.src = "icons8-edit-30.png";
    edit.style.marginLeft = "10px";
    edit.classList.add("icon-img");
    tdata7.appendChild(edit);
    edit.addEventListener("click", (e) => {
      let studentid = e.target.getAttribute("data-id");
      let booksdata = JSON.parse(localStorage.getItem("books"));

 
      tdata2.addEventListener("dblclick", function () {
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

      tdata3.addEventListener("dblclick", function () {
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

    row.appendChild(tdata7);
    table.appendChild(row);
  }
});
