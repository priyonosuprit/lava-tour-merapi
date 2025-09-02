// Popup
const popup = document.getElementById('popupForm');
const closePopup = document.getElementById('closePopup');
const btns = document.querySelectorAll('.btn-book');
const paketInput = document.getElementById('form-paket');
const hargaInput = document.getElementById('form-harga');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.paket-card');
        paketInput.value = card.dataset.paket;
        hargaInput.value = card.dataset.harga;
        popup.style.display = 'flex';
    });
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Hitung Jeep otomatis
const jumlahOrangInput = document.getElementById('jumlahOrang');
const jumlahJeepInput = document.getElementById('jumlahJeep');

jumlahOrangInput.addEventListener('input', () => {
    const orang = parseInt(jumlahOrangInput.value) || 0;
    const jeep = Math.ceil(orang / 4);
    jumlahJeepInput.value = jeep;
});

// Booking via WhatsApp
document.querySelector('.booking-form').addEventListener('submit', function(e){
    e.preventDefault();

    const nama = this.nama.value;
    const hp = this.hp.value;
    const paket = this.paket.value;
    const harga = this.harga.value;
    const jumlahOrang = this.jumlahOrang.value;
    const jumlahJeep = this.jumlahJeep.value;
    const catatan = this.catatan.value || '-';
    const metode = this.metode.value;

    const pesan = `*Booking LavaTour*\n\n` +
                  `*Paket*           : ${paket}\n` +
                  `*Harga*           : ${harga}\n` +
                  `*Nama*  : ${nama}\n` +
                  `*HP*              : ${hp}\n` +
                  `*Jumlah Orang*    : ${jumlahOrang}\n` +
                  `*Jumlah Jeep*     : ${jumlahJeep} (maksimal 4 orang per jeep)\n` +
                  `*Metode*          : ${metode}\n` +
                  `*Catatan*         : ${catatan}`;

    const waLink = `https://wa.me/6281327525324?text=${encodeURIComponent(pesan)}`;
    window.open(waLink, '_blank');
    popup.style.display = 'none';
});