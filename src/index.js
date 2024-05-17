import "./style.css";
import CliffSidePic from "../images/CliffSide.jpeg";
import EmptySubway from "../images/EmptySubway.jpeg";
import NatureView from "../images/NatureView.avif";
import TallBuilding from "../images/TallBuilding.jpg";

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

images.forEach((image) => {
  const imageList = document.querySelector("ul.image_list");
  const li = document.createElement("li");
  li.classList.add("slide");
  const img = document.createElement("img");
  img.src = image;
  img.alt = `${image} picture`;
  li.appendChild(img);
  imageList.appendChild(li);
});
