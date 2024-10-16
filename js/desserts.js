"use strict";

let container = [
  {
    image: "images/image-waffle-desktop.jpg",
    productName: "Waffle",
    desc: "Waffle with Berries",
    price: 6.5,
    count: 0,
  },
  {
    image: "images/image-creme-brulee-desktop.jpg",
    productName: "Crème Brûlée",
    desc: "Vanilla Bean Crème Brûlée",
    price: 7.0,
    count: 0,
  },
  {
    image: "images/image-macaron-desktop.jpg",
    productName: "Macaron",
    desc: "Macaron Mix of Five",
    price: 8.0,
    count: 0,
  },
  {
    image: "images/image-tiramisu-desktop.jpg",
    productName: "Tiramisu",
    desc: "Classic Tiramisu",
    price: 5.5,
    count: 0,
  },
  {
    image: "images/image-baklava-desktop.jpg",
    productName: "Baklava",
    desc: "Pistachio Baklava",
    price: 4.0,
    count: 0,
  },
  {
    image: "images/image-meringue-desktop.jpg",
    productName: "Pie",
    desc: "Lemon Meringue Pie",
    price: 5.0,
    count: 0,
  },
  {
    image: "images/image-cake-desktop.jpg",
    productName: "Cake",
    desc: "Red Velvet Cake",
    price: 4.5,
    count: 0,
  },
  {
    image: "images/image-brownie-desktop.jpg",
    productName: "Brownie",
    desc: "Salted Caramel Brownie",
    price: 4.5,
    count: 0,
  },
  {
    image: "images/image-panna-cotta-desktop.jpg",
    productName: "Panna Cotta",
    desc: "Vanilla Panna Cotta",
    price: 6.5,
    count: 0,
  },
];

let userName = document.getElementById("user-name");

let numCart = document.getElementById("numPro");
let numBox = document.querySelectorAll(".products .add .content span");
let confirmBtn = document.getElementById("confirmBtn");
let lightBoxContainer = document.getElementById("light-container");
let lightBox = document.getElementById("light-box");

let plus = document.querySelectorAll(".products .box .plus");
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    add(i);
  });
}

let minus = document.querySelectorAll(".products .box .minus");
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    if (container[i].count > 0) {
      remove(i);
    }
  });
}

let totalItems = 0;
let totalPrice = 0;

userName.textContent = JSON.parse(localStorage.getItem("userName"));

if (totalItems == 0) {
    document.getElementById("empty-cart").classList.replace("hidden", "flex");
    document.getElementById("full-cart").classList.replace("block", "hidden");
}

function add(box) {
  container[box].count++;
  totalItems++;
  totalPrice += container[box].price;
  display();
  displayCart();
}

function remove(box) {
  container[box].count--;
  totalItems--;
  totalPrice -= container[box].price;
  display();
  displayCart();
}

function display() {
  for (let i = 0; i < container.length; i++) {
    numBox[i].innerHTML = container[i].count;
  }
  numCart.innerHTML = totalItems;
  document.getElementById("totalPrice").innerHTML = "$" + totalPrice;
}



function deleteOrder(index) 
{
    totalPrice -= container[index].count * container[index].price; 
  container[index].count = 0;
  displayCart();
  numBox[index] = 0;
  display();
}




function displayCart() {
  document.getElementById("full-cart").classList.replace("hidden", "block");
  let temp = ``;
  for (let i = 0; i < container.length; i++) {
    if (container[i].count > 0) {
      temp += ` <div class="box  border-b-2 border-[#f2f2f2] py-3 flex justify-between items-center">

            <div class="flex gap-[0.5rem]">
             <div class="w-[50px]">
            <img class="w-full" src="${container[i].image}"/>
            </div>
                            <div>
                                <h3 class="pb-2 font-semibold">${
                                  container[i].desc
                                }</h3>
                                <span class="text-[#ac5544] font-semibold me-6">${
                                  container[i].count
                                }x</span>
                                <span class="me-2 text-[#938d8f]">@ $${
                                  container[i].price
                                }</span>
                                <span class="text-[#70615c]">$${
                                  container[i].price * container[i].count
                                }</span>

                            </div>
            
            </div>

            <button onclick={deleteOrder(${i})} id="deleteOrder-btn">
            
            <i class="fa-regular fa-trash-can cursor-pointer"></i>
            </button>
                            
                            </div>`;
    }
  }

  document.getElementById("cart-items").innerHTML = temp;
}

function displayLightBox() {
  let temp = ``;
  for (let i = 0; i < container.length; i++) {
    if (container[i].count > 0) {
      temp += ` <div class="flex justify-between items-center">
            <div class="flex space-x-4 pb-3">
                <img class="w-14" src="${container[i].image}" alt="">
                <div class="flex flex-col justify-between">
                    <p>${container[i].desc}</p>
                    <p class="flex space-x-5"><span class="text-[#ac5544] font-bold">${
                      container[i].count
                    }x</span><span
                            class="text-[#938d8f]">@ $${
                              container[i].price
                            }</span></p>
                </div>

            </div>
            <p class="text-[#70615c]">$${
              container[i].price * container[i].count
            }</p>


        </div>`;
    }
  }

  document.getElementById("final-orders").innerHTML = temp;
  document.getElementById("final-total-price").innerHTML = "$" + totalPrice;
}
let ex = document.querySelectorAll("#x-icon");

confirmBtn.addEventListener("click", function () {
  document
    .getElementById("light-container")
    .classList.replace("hidden", "block");
  displayLightBox();
});

function closeLightBox() {
  lightBoxContainer.classList.replace("block", "hidden");
}

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    closeLightBox();
  }
});

lightBoxContainer.addEventListener("click", function () {
  closeLightBox();
});
lightBox.addEventListener("click", function (e) {
  e.stopPropagation();
});
