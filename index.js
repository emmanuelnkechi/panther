const overview = document.getElementById("overview");
const saving = document.getElementById("savings");

overview.addEventListener("click", overviews);
function overviews(e) {
    e.preventDefault();
  location.href = "overview.html";
 
}

saving.addEventListener("click", savings);
function savings(e) {
    e.preventDefault();
  location.href = "index.html";
}
var current = location.pathname;
if (current.endsWith("index.html")) {
    saving.classList.add("active");
}
if (current.endsWith("overview.html")) {
  overview.classList.add("active");
}
console.log(current)
