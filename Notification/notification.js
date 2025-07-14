function showNotification() {
  const datastored = JSON.parse(localStorage.getItem("books"));
  const todaysdate = new Date().toLocaleDateString();

  datastored.map((item) => {
    if (item.return == todaysdate || item.renewal == todaysdate) {
      new Notification("Library Reminder", {
        body: "Do Visit Library to do Renewal or Return of the Book.",
        icon: "https://via.placeholder.com/128",
      });
    }
  });
}

setInterval(showNotification, 24 * 60 * 60 * 1000);
