const content = document.getElementsByTagName("body")[0];
console.log(content);
const darkMode = document.getElementById("dark-change");
console.log(darkMode);

const darkText = document.getElementById("dark");
const lightText = document.getElementById("light");

darkMode.addEventListener("click", function () {
  darkMode.classList.toggle("active");
  content.classList.toggle("night");
  darkText.classList.toggle("show");
  lightText.classList.toggle("hide");
});
