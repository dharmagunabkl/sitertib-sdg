const daftarPegawai = [
  "Syam Wuryani", "Septian Darma Putra Siagian", "Dardi", "Imi Fitriah",
  "Joko Juniarto", "Kartika Ari Pratama", "Wahyu Ari Wibowo", "Dwi Sukma Oktaviani",
  "Robin Hood", "Triyoni Rakhmawati", "Leni Marlina", "Mimi Wijayanti", "Darwanti",
  "Marvikatin", "Sunardi", "Yosi Yomarta", "Nova Rustanti", "Nanik Kurnianingsih",
  "Halbet Julianto", "Nasirwan", "Ricky Casanopa", "Elsa Refika Pertiwi",
  "Mohamad Ridwan Soleh Ruslan Syafi'i", "Erlita Aryani", "Dwickey Nurfitriani Mardhotillah",
  "Dwi Septi Aryani", "Diah Saraswati", "Geinte Bella Lagenda", "Tri Artarina",
  "Rita Effriani", "Sri Martini", "Elvis Srirahmi", "Dilin", "Gusti Abdi Rahman",
  "Nyayu Yulia", "Eko Agusfian", "Sasdiarman", "Yuristen Hadi", "Surya Raymond",
  "Suyanto", "Jang Doralok", "Wahyu Sukamto", "Gumanto", "Edi Riskando", "Martini",
  "Lilik Nur Rokhmah", "Restu Dwi Kurniaty", "Elli Nurhayati", "Muhammad Muhlisin",
  "Arianda Nugra Gamas", "Nami Purwanti", "Radial Fajri", "Rahmat Kevin Praditia",
  "Annisa Ayu Lestari", "Nada Nur Sella", "Sherly Yuniarsi", "Susilo", "Afri Wiranda",
  "Elysabet Rigensi", "Sarif Rendi Susanto", "Subhan", "Lenkis Mahayati", "Halidi Hermanto",
  "Irna Rosalina", "Rista Andela", "Yulistia Pradini Astari", "Nginda Annisa Aiyun",
  "Dede Rahman", "Yudi Novian", "Azuan Zoni", "Supono", "Miskum", "Febri Prawiro",
  "Andi Saputra", "Odiarman Hasibuan", "Andi Susandri", "Iqbal Ramadhan",
  "Ilham Hidayat", "Jesi Duanty"
];

function login() {
  const nama = document.getElementById("inputNama").value.trim();
  const pass = document.getElementById("inputPassword").value;
  const error = document.getElementById("error");

  if (daftarPegawai.includes(nama) && pass === "Salemba@28") {
    localStorage.setItem("namaPegawai", nama);
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "❌ Nama atau Password salah.";
  }
}
