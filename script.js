let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");





function updateButtons() {
    backBtn.style.opacity = scrollContainer.scrollLeft > 0 ? "1" : "0.5";
    nextBtn.style.opacity = scrollContainer.scrollLeft < (scrollContainer.scrollWidth - scrollContainer.clientWidth) ? "1" : "0.5";
}

nextBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 900, behavior: "smooth" });
});

backBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -900, behavior: "smooth" });
});

scrollContainer.addEventListener("scroll", updateButtons);
updateButtons(); 








