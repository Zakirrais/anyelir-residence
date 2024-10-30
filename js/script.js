let currentSlide = 0;
const slideInterval = 5000;
let interval;

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
  resetInterval();
}

function startSlideShow() {
  interval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, slideInterval);
}

function resetInterval() {
  clearInterval(interval);
  startSlideShow();
}

const blokGambar = {
  1: [
    "img/Blok_A/Blok-A1.jpg",
    "img/Blok_A/Blok-A2.jpg",
    "img/Blok_A/Blok-a.png",
  ],
  2: [
    "img/Blok_B/Blok_B1.jpg",
    "img/Blok_B/Blok_B2.jpg",
    "img/Blok_B/Blok-b.png",
  ],
  3: [
    "img/Blok_C/Blok_C1.jpg",
    "img/Blok_C/Blok_C2.jpg",
    "img/Blok_C/Blok-c.png",
  ],
  4: [
    "img/Blok_D/Blok_D1.jpg",
    "img/Blok_D/Blok_D2.jpg",
    "img/Blok_D/Blok-d.png",
  ],
};

const images = [
  "img/view_anyelirresidence2.jpg",
  "img/view_anyelirresidence3.jpg",
  "img/view_anyelirresidence4.jpg",
  "img/view_anyelirresidence5.jpg",
  "img/fasilitas1.jpg",
  "img/fasilitas2.jpg",
  "img/fasilitas3.jpg",
  "img/fasilitas4.jpg",
];

let currentImages = [];
let currentIndex = 0;

function showBlok(blok) {
  currentImages = blokGambar[blok]; // Mengatur gambar untuk blok yang dipilih
  currentIndex = 0; // Reset index ke 0
  openModal(currentImages[currentIndex]); // Buka modal dengan gambar pertama
}

function showImage(index) {
  currentImages = images; // Set gambar untuk tampilan besar
  currentIndex = index; // Atur index ke gambar yang dipilih
  openModal(currentImages[currentIndex]); // Buka modal dengan gambar yang dipilih
}

function openModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const captionText = document.getElementById("captionText");

  modal.style.display = "block"; // Tampilkan modal
  modalImage.src = src; // Set sumber gambar untuk modal
  captionText.innerHTML = src; // Set teks keterangan
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none"; // Sembunyikan modal
}

function changeImage(direction) {
  currentIndex += direction; // Tambahkan atau kurangi index sesuai arah

  if (currentIndex < 0) {
    currentIndex = currentImages.length - 1; // Jika di bawah 0, ke gambar terakhir
  } else if (currentIndex >= currentImages.length) {
    currentIndex = 0; // Jika melebihi panjang array, ke gambar pertama
  }

  openModal(currentImages[currentIndex]); // Buka modal dengan gambar baru
}

function closeModalOnOutsideClick(event) {
  if (!event.target.closest(".modal-content-wrapper")) {
    closeModal(); // Jika klik di luar modal, tutup modal
  }
}

function sendToWhatsApp() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  var url =
    "https://wa.me/62081995145284?text=" +
    "Name: " +
    encodeURIComponent(name) +
    "%0a" +
    "Email: " +
    encodeURIComponent(email) +
    "%0a" +
    "Phone: " +
    encodeURIComponent(phone) +
    "%0a" +
    "Message: " +
    encodeURIComponent(message);

  window.open(url, "_blank").focus();
}
