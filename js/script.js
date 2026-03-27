// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//advice saran
document.addEventListener("DOMContentLoaded", () => {
  const adviceForm = document.getElementById("adviceForm");
  const adviceName = document.getElementById("adviceName");
  const adviceInput = document.getElementById("adviceInput");
  const adviceList = document.getElementById("adviceList");

  // Fungsi untuk memuat saran dari LocalStorage
  const loadAdvice = () => {
    const savedAdvice = JSON.parse(localStorage.getItem("adviceList")) || [];
    savedAdvice.forEach(({ name, text }) => {
      addAdviceToList(name, text);
    });
  };

  // Fungsi untuk menambahkan saran ke daftar
  const addAdviceToList = (name, text) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${name}:</strong> ${text}`;
    adviceList.appendChild(listItem);
  };

  // Event listener untuk menangani pengiriman saran
  adviceForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = adviceName.value.trim();
    const text = adviceInput.value.trim();

    if (name && text) {
      // Tambahkan saran ke daftar
      addAdviceToList(name, text);

      // Simpan saran ke LocalStorage
      const savedAdvice = JSON.parse(localStorage.getItem("adviceList")) || [];
      savedAdvice.push({ name, text });
      localStorage.setItem("adviceList", JSON.stringify(savedAdvice));

      // Kosongkan input setelah dikirim
      adviceName.value = "";
      adviceInput.value = "";
    } else {
      alert("Harap isi nama dan saran Anda!");
    }
  });

  // Muat saran saat halaman dimuat
  loadAdvice();
});
