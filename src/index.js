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

generateSlide(images);

function generateSlide(imagesArray) {
  const imageList = document.querySelector("div.image_track");
  for (let i = 0; i < imagesArray.length; i++) {
    const img = document.createElement("img");
    img.dataset.imgId = i;
    img.src = imagesArray[i];
    img.alt = `${i} picture`;
    imageList.appendChild(img);
  }

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btnContainer");

  for (let j = 0; j < imagesArray.length; j++) {
    const radioBtn = document.createElement("button");
    radioBtn.classList.add("radioBtn");
    radioBtn.setAttribute("id", `forImg${j}`);
    btnContainer.appendChild(radioBtn);
  }

  imageList.appendChild(btnContainer);

  const currentActiveImg = document.querySelector(
    'div.image_track img[data-img-id="0"]'
  );
  currentActiveImg.classList.add("currentActiveImg");
  const currentActiveRadio = document.getElementById("forImg0");
  currentActiveRadio.classList.add("active");
}

function nextSlide() {
  const allImages = document.querySelectorAll("div.image_track img");
  if (allImages.length === 0) {
    return;
  }

  for (let index = 0; index < allImages.length; index++) {
    const image = allImages[index];
    console.log(image);
    const currentRadioBtn = document.getElementById(`forImg${index}`);

    // check if the current active image is the last, if so then we have to loop back to the first
    if (
      image.classList.contains("currentActiveImg") &&
      index === allImages.length - 1
    ) {
      image.classList.remove("currentActiveImg");
      currentRadioBtn.classList.remove("active");

      let nextIndex = 0;
      const nextImage = document.querySelector(
        `img[data-img-id="${nextIndex}"]`
      );
      const nextRadioBtn = document.getElementById(`forImg${nextIndex}`);

      if (nextImage) {
        nextImage.classList.add("currentActiveImg");
      }
      if (nextRadioBtn) {
        nextRadioBtn.classList.add("active");
      }

      console.log(nextImage);
      return; // Exit the loop once the last slide is processed
    }

    if (image.classList.contains("currentActiveImg")) {
      image.classList.remove("currentActiveImg");
      currentRadioBtn.classList.remove("active");

      let nextIndex = index + 1;
      const nextImage = document.querySelector(
        `img[data-img-id="${nextIndex}"]`
      );
      const nextRadioBtn = document.getElementById(`forImg${nextIndex}`);

      if (nextImage) {
        nextImage.classList.add("currentActiveImg");
      }
      if (nextRadioBtn) {
        nextRadioBtn.classList.add("active");
      }

      console.log(nextImage);
      return; // Exit the loop once the next slide is set
    }
  }
}

function prevSlide() {
  const allImages = document.querySelectorAll("div.image_track img");
  if (allImages.length === 0) {
    return;
  }

  for (let index = allImages.length - 1; index >= 0; index--) {
    const image = allImages[index];
    console.log(image);
    const currentRadioBtn = document.getElementById(`forImg${index}`);

    // check if the current active image is the first, if so then we have to loop back to the last
    if (image.classList.contains("currentActiveImg") && index === 0) {
      image.classList.remove("currentActiveImg");
      currentRadioBtn.classList.remove("active");

      let prevIndex = allImages.length - 1;
      const nextImage = document.querySelector(
        `img[data-img-id="${prevIndex}"]`
      );
      const nextRadioBtn = document.getElementById(`forImg${prevIndex}`);

      if (nextImage) {
        nextImage.classList.add("currentActiveImg");
      }
      if (nextRadioBtn) {
        nextRadioBtn.classList.add("active");
      }

      console.log(nextImage);
      return; // Exit the loop once the first slide is processed
    }

    if (image.classList.contains("currentActiveImg")) {
      image.classList.remove("currentActiveImg");
      currentRadioBtn.classList.remove("active");

      let prevIndex = index - 1;
      const nextImage = document.querySelector(
        `img[data-img-id="${prevIndex}"]`
      );
      const nextRadioBtn = document.getElementById(`forImg${prevIndex}`);

      if (nextImage) {
        nextImage.classList.add("currentActiveImg");
      }
      if (nextRadioBtn) {
        nextRadioBtn.classList.add("active");
      }

      console.log(nextImage);
      return; // Exit the loop once the next slide is set
    }
  }
}

const nextBtn = document.querySelector("section#image-carousel button.next");
nextBtn.addEventListener("click", () => {
  nextSlide();
});

const prevBtn = document.querySelector("section#image-carousel button.prev");
prevBtn.addEventListener("click", () => {
  prevSlide();
});
