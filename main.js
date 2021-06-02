const btn = document.getElementById("btn-toggle");
const card = document.getElementById("card-list");
const hide = document.getElementById("hide");
const show = document.getElementById("show")
const title = document.getElementById("title");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const acrossOne = document.querySelector(".across-one")
const acrossTwo = document.querySelector(".across-two");
const acrossThree = document.querySelector(".across-three");
const infini = document.querySelector(".infini");
const last = document.querySelector(".last");
const makeDepo = document.querySelector(".make-depo-one");
const infiniTwo = document.querySelector(".infini-two");
const lastTwo = document.querySelector(".last-two");
const makeDepoTwo = document.querySelector(".make-depo-two");
const infiniThree = document.querySelector(".infini-three");
const lastThree = document.querySelector(".last-three");
const makeDepoThree = document.querySelector(".make-depo-three");
const toggleBtn = document.querySelector(".btn-active-wallet");
const modalPop = document.querySelector(".modal-popup");


let count = 0;

function openNav() {
    document.getElementById("mySidebar").style.width = "15rem";
    document.getElementById("mySidebar").style.padding = "2rem";
  document.getElementById("main").style.marginLeft = "0rem";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("mySidebar").style.padding = "0";
  document.getElementById("main").style.marginLeft = "0px";
}


btn.addEventListener("click", toggle)

function toggle() {
    count++
   if (count % 2 === 0) {
       card.style.display = "grid";
       hide.style.display = "block";
       show.style.display = "none"
       title.style.textAlign = "start";
   } else {
       card.style.display = "none";
        hide.style.display = "none";
       show.style.display = "block";
       title.style.textAlign = "center"
    }
}

one.addEventListener("mouseover", function (event) {
    acrossOne.style.gridColumn = "10/12";
    makeDepo.style.display ="inline"
    infini.style.display = "none"
    last.style.display = "none";
}
  , false)

  one.addEventListener(
    "mouseout",
    function (event) {
      acrossOne.style.gridColumn = "10/11";
      makeDepo.style.display = "none";
      infini.style.display = "inline";
      last.style.display = "inline";
    },
    false
  );

  two.addEventListener(
    "mouseover",
    function (event) {
      acrossTwo.style.gridColumn = "10/12";
      makeDepoTwo.style.display = "inline";
      infiniTwo.style.display = "none";
      lastTwo.style.display = "none";
    },
    false
  );

  two.addEventListener(
    "mouseout",
    function (event) {
      acrossTwo.style.gridColumn = "10/11";
      makeDepoTwo.style.display = "none";
      infiniTwo.style.display = "inline";
      lastTwo.style.display = "inline";
    },
    false
  );

  three.addEventListener(
    "mouseover",
    function (event) {
      acrossThree.style.gridColumn = "10/12";
      makeDepoThree.style.display = "inline";
      infiniThree.style.display = "none";
      lastThree.style.display = "none";
    },
    false
  );

  three.addEventListener(
    "mouseout",
    function (event) {
      acrossThree.style.gridColumn = "10/11";
      makeDepoThree.style.display = "none";
      infiniThree.style.display = "inline";
      lastThree.style.display = "inline";
    },
    false
  );
    

toggleBtn.addEventListener("click", toggleModal)
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