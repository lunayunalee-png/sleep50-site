// Grab elements
const files = document.querySelectorAll(".file:not(.locked)[data-target]");
const modal = document.getElementById("modal");
const storyContent = document.getElementById("story-content");
const closeBtn = document.querySelector(".close-btn");

// Open modal with story content
files.forEach((file) => {
  file.addEventListener("click", () => {
    const targetId = file.getAttribute("data-target");
    const source = document.getElementById(targetId);

    if (source) {
      storyContent.textContent = source.textContent.trim();
      modal.classList.remove("hidden");
    }
  });
});

// Close modal
function closeModal() {
  modal.classList.add("hidden");
  storyContent.textContent = "";
}

closeBtn.addEventListener("click", closeModal);

// Close modal with ESC
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Close if clicking dark background, not the window itself
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
