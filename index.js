feather.replace();

const modal = document.getElementById('todoModal');
const openModalBtn = document.getElementById("Create-Todo"); // Sesuaikan dengan tombol "Add" Anda
const cancelBtn = document.getElementById('cancelBtn');
const closeXBtn = document.getElementById('closeXBtn');

// Fungsi untuk membuka modal
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Fungsi untuk menutup modal (Tombol Batal)
cancelBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fungsi untuk menutup modal (Ikon X)
closeXBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Tutup modal jika pengguna mengklik area luar kotak modal (overlay)
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

