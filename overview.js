const btn = document.getElementById("btn-toggle");
const card = document.getElementById("card-list");
const hide = document.getElementById("hide");
const show = document.getElementById("show");
const title = document.getElementById("title");
const toggleBtn = document.querySelector(".btn-active-wallet");
const modalPop = document.querySelector(".modal-popup");

let count = 0;

function openNav() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("mySidebar").style.padding = "2rem";
  document.getElementById("main").style.marginLeft = "0rem";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("mySidebar").style.overflowX = "hidden";
  document.getElementById("mySidebar").style.padding = "0";
  document.getElementById("main").style.marginLeft = "0px";
}

btn.addEventListener("click", toggle);

function toggle() {
  count++;
  if (count % 2 === 0) {
    card.style.display = "grid";
    hide.style.display = "block";
    show.style.display = "none";
    title.style.textAlign = "start";
  } else {
    card.style.display = "none";
    hide.style.display = "none";
    show.style.display = "block";
    title.style.textAlign = "center";
  }
}

toggleBtn.addEventListener("click", toggleModal);
let toggleCount = 0;
function toggleModal() {
  toggleCount++;
  if (toggleCount % 2 === 0) {
    modalPop.style.display = "none";
  }
  if (toggleCount % 2 !== 0) {
    modalPop.style.display = "block";
  }
}
