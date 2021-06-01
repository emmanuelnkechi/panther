let btn = document.getElementById("btn-toggle");
let card = document.getElementById("card-list");
let hide = document.getElementById("hide");
let show = document.getElementById("show")
let title = document.getElementById("title");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let acrossOne = document.querySelector(".across-one")
let acrossTwo = document.querySelector(".across-two");
let acrossThree = document.querySelector(".across-three");
let acrossFour = document.querySelector(".across-four");
let acrossFive = document.querySelector(".across-five");
let infini = document.querySelector(".infini");
let last = document.querySelector(".last");
let makeDepo = document.querySelector(".make-depo-one");
let infiniTwo = document.querySelector(".infini-two");
let lastTwo = document.querySelector(".last-two");
let makeDepoTwo = document.querySelector(".make-depo-two");
let infiniThree = document.querySelector(".infini-three");
let lastThree = document.querySelector(".last-three");
let makeDepoThree = document.querySelector(".make-depo-three");
let infiniFour = document.querySelector(".infini-four");
let lastFour = document.querySelector(".last-four");
let makeDepoFour = document.querySelector(".make-depo-four");
let infiniFive = document.querySelector(".infini-five");
let lastFive = document.querySelector(".last-five");
let makeDepoFive = document.querySelector(".make-depo-five");
let toggleBtn = document.querySelector(".btn-active-wallet");
let modalPop = document.querySelector(".modal-popup");
let count = 0;

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

  four.addEventListener(
    "mouseover",
    function (event) {
      acrossFour.style.gridColumn = "10/12";
      makeDepoFour.style.display = "inline";
      infiniFour.style.display = "none";
      lastFour.style.display = "none";
    },
    false
  );

  four.addEventListener(
    "mouseout",
    function (event) {
      acrossFour.style.gridColumn = "10/11";
      makeDepoFour.style.display = "none";
      infiniFour.style.display = "inline";
      lastFour.style.display = "inline";
    },
    false
  );


  five.addEventListener(
    "mouseover",
    function (event) {
      acrossFive.style.gridColumn = "10/12";
      makeDepoFive.style.display = "inline";
      infiniFive.style.display = "none";
      lastFive.style.display = "none";
    },
    false
  );

  five.addEventListener(
    "mouseout",
    function (event) {
      acrossFive.style.gridColumn = "10/11";
      makeDepoFive.style.display = "none";
      infiniFive.style.display = "inline";
      lastFive.style.display = "inline";
    },
    false
  );

    

toggleBtn.addEventListener("click", toggleModal)
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