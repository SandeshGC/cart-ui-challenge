const heartIcon = document.querySelector(".heart__icon");
const inrBtn = document.querySelector(".inr__btn");
const dcrBtn = document.querySelector(".dcr__btn");

const totalCost = document.querySelector(".total__cost");
const selectAllItemsBtn = document.querySelector("#select-all-items");
const allSelectItemsBtn = document.querySelectorAll(".cart__item--select");
let result = true;
//even if one of the other checkboxes is not selected, then the 'select all' checkbox should not be selected

// for(e of allSelectItemsBtn){
//   result = e.checked;
//   //if all checked then 1, else 0
// }
// console.log(result);

//for selecting/unselecting all checkboxes
selectAllItemsBtn.addEventListener("click", () => {
  if (selectAllItemsBtn.checked) {
    //if 'select all' button is checked, all other checkboxes are checked
    console.log(selectAllItemsBtn.checked);
    for (e of allSelectItemsBtn) {
      e.checked = true;
    }
  } else {
    //if 'select all' button is unchecked, all other checkboxes are unchecked
    for (e of allSelectItemsBtn) {
      e.checked = false;
    }
  }
});
//increases/decreases quantities acc. to 'operation(+/-) and updates the cost of items respectively
function updateCost(item, operation) {
  let rate = 0;
  //which item is clicked
  if (item == "high-cut-bikini") {
    rate = 24;
  } else if (item == "cut-out-monokini") {
    rate = 25;
  } else if (item == "monokini") {
    rate = 24;
  } else {
    console.log("Invalid item!");
  }
  let qtyElSelector = `.inr__dcr--num--${item}`;
  const qtyEl = document.querySelector(qtyElSelector);
  //checking value
  if (qtyEl.value < 0) {
    console.log("value cannot be less than 0");
    qtyEl.value = 0;
  }
  if (operation == "+") {
    console.log("increasing");
    qtyEl.value++;
  } else if (operation == "-") {
    if (qtyEl.value > 0) {
      console.log("decreasing");
      qtyEl.value--;
    } else {
      console.log("attempt to set value less than zero");
      qtyEl.value = 0;
    }
  }

  let itemCostSelector = `.${item}--cost`;
  const itemCost = document.querySelector(itemCostSelector);
  itemCost.textContent = rate * qtyEl.value;
  totalCost.textContent =
    parseInt(document.querySelector(`.high-cut-bikini--cost`).textContent) +
    parseInt(document.querySelector(".cut-out-monokini--cost").textContent) +
    parseInt(document.querySelector(".monokini--cost").textContent);
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
