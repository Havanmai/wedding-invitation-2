// mở thiệp + nhạc

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
});

const openBtn = document.getElementById("openBtn");
const openCard = document.getElementById("openCard");
const music = document.getElementById("music");

openBtn.addEventListener("click", (e) => {
  e.preventDefault();

  music.play();

  setTimeout(() => {
    openCard.style.display = "none";

    autoScroll();
  }, 400);
});

function autoScroll() {
  let speed = 1; // px mỗi frame

  function scrollStep() {
    window.scrollBy(0, speed);

    if (window.scrollY + window.innerHeight < document.body.scrollHeight) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
}
// countdown

document.addEventListener("DOMContentLoaded", () => {
  const wedding = new Date("Mar 29 2026 10:00:00").getTime();

  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  setInterval(() => {
    const now = new Date().getTime();
    const gap = wedding - now;

    const d = Math.floor(gap / (1000 * 60 * 60 * 24));
    const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((gap % (1000 * 60)) / 1000);

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
  }, 1000);
});

const modalAlbum = document.getElementById("albumModal");
const mainImage = document.getElementById("mainImage");

const thumbs = document.querySelectorAll("#albumModal button img");
const thumbButtons = document.querySelectorAll("#albumModal button");

let indexAlbum = 0;

// mở modal khi click ảnh album
document.querySelectorAll(".grid img").forEach((img, i) => {
  img.addEventListener("click", () => {
    indexAlbum = i;
    mainImage.src = img.src;
    modalAlbum.showModal();
  });
});
albumModal.addEventListener("close", () => {
  document.body.classList.remove("overflow-hidden");
});

function openAlbum() {
  document.body.style.overflow = "hidden";
  albumModal.showModal();
}

// click thumbnail
thumbButtons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");

    if (img) {
      indexAlbum = i;
      mainImage.src = img.src;
    }
  });
});

// next
document.querySelector('[aria-label="Next image"]').onclick = () => {
  indexAlbum++;
  if (indexAlbum >= thumbs.length) indexAlbum = 0;

  mainImage.src = thumbs[indexAlbum].src;
};

// prev
document.querySelector('[aria-label="Previous image"]').onclick = () => {
  indexAlbum--;
  if (indexAlbum < 0) indexAlbum = thumbs.length - 1;

  mainImage.src = thumbs[indexAlbum].src;
};

const closeAlbum = document.querySelector("#albumModal .btn");

closeAlbum.addEventListener("click", () => {
  albumModal.close();
});

// gallery slider

let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
  slides.forEach((s) => s.classList.remove("active"));
  slides[index].classList.add("active");
}

function next() {
  index++;
  if (index >= slides.length) index = 0;
  showSlide();
}

function prev() {
  index--;
  if (index < 0) index = slides.length - 1;
  showSlide();
}

// scroll animation

const fades = document.querySelectorAll(".fade");

function reveal() {
  fades.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);

// RSVP

function send() {
  alert("Cảm ơn bạn đã xác nhận tham dự!");
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  const albumImages = [
    "./assets/images/image-wedding/HERO5805_11zon.webp",
    "./assets/images/image-wedding/HERO6660_11zon.webp",
    "./assets/images/image-wedding/HERO7084_11zon.webp",
    "./assets/images/image-wedding/HERO7159_11zon.webp",
    "./assets/images/image-wedding/HERO7275_11zon.webp",
    "./assets/images/image-wedding/HERO7601_11zon.webp",
    "./assets/images/image-wedding/HERO7122_11zon.webp",
    "./assets/images/image-wedding/HERO7754_11zon.webp",
    "./assets/images/image-wedding/HERO5971_11zon.webp",
    "./assets/images/image-wedding/HERO6686_11zon.webp",
    "./assets/images/image-wedding/HERO7281_11zon.webp",
    "./assets/images/image-wedding/HERO5856_11zon.webp",
    "./assets/images/image-wedding/HERO6145_11zon.webp",
  ];

  albumImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
});
