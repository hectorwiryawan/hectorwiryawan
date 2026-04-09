//Navbar
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

//Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//Form
const form = document.getElementById("contact-form");
const alertBox = document.getElementById("alert");
const closeAlert = document.getElementById("close-alert");
const alertTitle = document.getElementById("alert-title");
const alertMessage = document.getElementById("alert-message");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xpqoejaj", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      alertTitle.textContent = "Pesan Berhasil Dikirim!";
      alertTitle.className = "text-xl font-bold text-teal-500 mb-2";
      alertMessage.textContent = "Terima kasih sudah menghubungi saya 🙌";
      form.reset();
    } else {
      alertTitle.textContent = "Terjadi Kesalahan";
      alertTitle.className = "text-xl font-bold text-red-500 mb-2";
      alertMessage.textContent = "Gagal mengirim pesan. Silakan coba lagi.";
    }
  } catch (error) {
    alertTitle.textContent = "Terjadi Kesalahan";
    alertTitle.className = "text-xl font-bold text-red-500 mb-2";
    alertMessage.textContent = "Tidak dapat terhubung. Periksa koneksi Anda.";
  }

  alertBox.classList.remove("hidden");
});

closeAlert.addEventListener("click", function () {
  alertBox.classList.add("hidden");
});
