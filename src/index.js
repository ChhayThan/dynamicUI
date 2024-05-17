import "./style.css";

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
