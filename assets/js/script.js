const form = document.getElementById("formKontak");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();
    const rating = document.getElementById("rating").value.trim();

    if (!nama || !email || !pesan || !rating) {
        alert("⚠️ Harap isi semua kolom!");
        return;
    }

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!polaEmail.test(email)) {
        alert("⚠️ Format email tidak valid!");
        return;
    }

    if (rating < 1 || rating > 5) {
        alert("⚠️ Rating harus antara 1–5!");
        document.getElementById("rating").value = "";
        return;
    }

    alert(`✅ Terima kasih atas ulasan Anda, ${nama}!`);
    form.reset();
});

const ratingInput = document.getElementById("rating");
ratingInput.addEventListener("input", function() {
    if (ratingInput.value > 5) ratingInput.value = 5;
    if (ratingInput.value < 1) ratingInput.value = 1;
});
