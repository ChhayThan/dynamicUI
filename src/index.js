import "./style.css";
import CliffSidePic from "../images/CliffSide.jpeg";
import EmptySubway from "../images/EmptySubway.jpeg";
import NatureView from "../images/NatureView.avif";
import TallBuilding from "../images/TallBuilding.jpg";

import { generateSlide, nextSlide, prevSlide, toSlide } from "./slideFunction";

const images = [CliffSidePic, EmptySubway, NatureView, TallBuilding];

const dropDownBtn = document.querySelector("button.btn.dropDown");
dropDownBtn.addEventListener("click", () => {
  const dropDownOptions = document.querySelector("div.dropDownOptions");

  if (dropDownOptions.classList.contains("active")) {
    dropDownOptions.classList.remove("active");
    dropDownBtn.innerText = "DropDown👇";
  } else {
    dropDownOptions.classList.add("active");
    dropDownBtn.innerText = "BackUp👆";
  }
});

generateSlide(images);

const nextBtn = document.querySelector("section#image-carousel button.next");
nextBtn.addEventListener("click", () => {
  nextSlide();
});

const prevBtn = document.querySelector("section#image-carousel button.prev");
prevBtn.addEventListener("click", () => {
  prevSlide();
});

const radioBtns = document.querySelectorAll("button.radioBtn");
radioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener("click", () => {
    const slideIndex = radioBtn.id.slice(-1);
    toSlide(slideIndex);
  });
});

setInterval(nextSlide, 5000);
