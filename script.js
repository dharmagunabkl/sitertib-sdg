const daftarPegawai = [
  "Syam Wuryani", "Septian Darma Putra Siagian", "Dardi", "Imi Fitriah", "Joko Juniarto"
];

function login() {
  const inputNama = document.getElementById("inputNama").value.trim();
  const inputPassword = document.getElementById("inputPassword").value.trim();
  const error = document.getElementById("error");

  if (daftarPegawai.includes(inputNama) && inputPassword === "Salemba@28") {
    localStorage.setItem("namaPegawai", inputNama);
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "❌ Nama atau password salah. Coba lagi.";
  }
}
