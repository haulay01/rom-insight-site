// Search filter for books
document.getElementById("searchBar").addEventListener("keyup", function() {
  let filter = this.value.toLowerCase();
  let books = document.querySelectorAll(".book-card");

  books.forEach(book => {
    let text = book.innerText.toLowerCase();
    book.style.display = text.includes(filter) ? "" : "none";
  });
});