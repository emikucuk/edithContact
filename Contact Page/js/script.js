let project = document.getElementById("projectType");
project.onchange = function () {
  project.style.color = "#333333";
};

// Bütçe tipinde selection kullanmak isterseniz yorum satırındnan çıkarmanız yeterlidir...
// let budget = document.getElementById("budgetType");
// budget.onchange = function () {
//   budget.style.color = "#333333";
// };

// Hover Animation on Nav Links

let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((element) => {
  element.addEventListener("mouseover", (item) => {
    item.target.classList.add("active-nav-link", "text-white");
  });
  element.addEventListener("mouseleave", (item) => {
    item.target.classList.remove("active-nav-link", "text-white");
  });
});
