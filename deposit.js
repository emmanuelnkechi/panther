let toggleBtn = document.querySelector(".btn-active-wallet");
let modalPop = document.querySelector(".modal-popup");

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

toggleBtn.addEventListener("click", toggleModal);
let toggleCount = 0;
function toggleModal(e) {
  toggleCount++;
  if (toggleCount % 2 === 0) {
    modalPop.style.display = "none";
  }
  if (toggleCount % 2 !== 0) {
    modalPop.style.display = "block";
  }
  // var isClickInside = toggleBtn.contains(e.target);
  // console.log(isClickInside);
  // if (!isClickInside) {
  //     modalPop.style.display = "none";
  // }
}
