document.addEventListener("DOMContentLoaded", function() {
    let percentageText = document.getElementById("loading-percentage");
    let barFill = document.getElementById("progress-bar-fill");
    let btnMulai = document.getElementById("btn-mulai");
    let loadingScreen = document.getElementById("loading-screen");
    let mainView = document.getElementById("main-view");
    
    let count = 0;
    
    // Jalankan simulasi loading progress bar dan persen
    let loadingInterval = setInterval(() => {
        count += 2; // Menentukan kecepatan penambahan loading bar
        if (count > 100) count = 100;
        
        percentageText.innerText = count + "%";
        barFill.style.width = count + "%";
        
        if (count >= 100) {
            clearInterval(loadingInterval);
            
            // Aktifkan tombol "MULAI MASUK" setelah loading 100%
            btnMulai.removeAttribute("disabled");
            btnMulai.classList.add("active");
        }
    }, 50); // Kecepatan interval per 50 milidetik

    // Event ketika tombol diklik untuk pindah halaman
    btnMulai.addEventListener("click", function() {
        loadingScreen.style.display = "none"; // Sembunyikan layar loading
        window.location.href = "view.html";   // Tampilkan halaman utama (view)
    });
});