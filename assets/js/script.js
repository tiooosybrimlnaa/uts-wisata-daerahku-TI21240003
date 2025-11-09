
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.8s ease-in-out";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

const stars = document.querySelectorAll('#starRating span');
const ratingInput = document.getElementById('rating');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const value = star.getAttribute('data-value');
    ratingInput.value = value;


    stars.forEach(s => s.classList.remove('active'));

    for (let i = 0; i < value; i++) {
      stars[i].classList.add('active');
    }
  });


  star.addEventListener('mouseover', () => {
    const hoverValue = star.getAttribute('data-value');
    stars.forEach((s, i) => {
      s.classList.toggle('hover', i < hoverValue);
    });
  });

  star.addEventListener('mouseout', () => {
    stars.forEach(s => s.classList.remove('hover'));
  });
});

const form = document.getElementById("formKontak");
const hasilDiv = document.getElementById("hasil");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();
  const rating = parseInt(document.getElementById("rating").value);

  if (!nama || !email || !pesan) {
    alert("⚠️ Harap isi semua kolom terlebih dahulu!");
    return;
  }

  if (rating === 0) {
    alert("⚠️ Silakan beri rating terlebih dahulu!");
    return;
  }

  const bintangHTML = "★".repeat(rating) + "☆".repeat(5 - rating);

  hasilDiv.innerHTML = `
    <div class="hasil-box fade-in">
      <h3>📨 Terima kasih, ${nama}!</h3>
      <p>Kami telah menerima pesanmu:</p>
      <blockquote>"${pesan}"</blockquote>
      <p>Rating yang kamu berikan:</p>
      <div class="star-display">${bintangHTML}</div>
      <p>Kami akan menghubungi kamu di <em>${email}</em> secepatnya</p>
    </div>
  `;

  form.reset();
  stars.forEach(s => s.classList.remove('active'));
  ratingInput.value = 0;
});
