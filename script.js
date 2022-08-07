const heartIcon = document.querySelector(".heart__icon");
const inrBtn = document.querySelector(".inr__btn");
const dcrBtn = document.querySelector(".dcr__btn");
const qtyEl = document.querySelector(".inr__dcr--num");
const itemCost = document.querySelector(".cost");
const totalCost = document.querySelector(".total__cost");

//increasing selected qty
function inrQty() {
  console.log("increasing");
  qtyEl.value++;
}
//decreasing qty
function dcrQty() {
  console.log("decreasing");
  if (qtyEl.value < 0) {
    console.log("less than zero");
    qtyEl.value = 0;
  }
}
function checkQty() {
  console.log("onchange");
  if (qtyEl.value < 0) {
    console.log("fail");
    qtyEl.value = 0;
  }
}
//heart button at the top-rigt of page
heartIcon.addEventListener("click", () => {
  heartIcon.classList.toggle("liked");
  //addes 'liked' if not liked and removes 'liked' if liked already
  //after assigning class, color of the button is changed acc. to class
  if (heartIcon.classList.contains("liked")) {
    //if it is liked then it is solid
    heartIcon.innerHTML = '<i class="fa-solid fa-heart fa-xl"></i>';
  } else {
    //if it is not liked then it is regular
    heartIcon.innerHTML = '<i class="fa-regular fa-heart fa-xl"></i>';
  }
});
