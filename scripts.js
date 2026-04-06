// jotform covering the hassle for a backend
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("leadForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    window.location.href = "https://form.jotform.com/260295403951053";
  });
});

// images container / left and right click
let currentIndex = 0;
const images = document.querySelectorAll('.image-container img');
const totalImages = images.length;

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

// Initialize - show first image
showImage(0);

// Add click listeners to buttons
document.querySelector('.prev-btn').addEventListener('click', prevImage);
document.querySelector('.next-btn').addEventListener('click', nextImage);