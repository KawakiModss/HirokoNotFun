// script.js
(function() {
  let duration = 5000; // 5 detik
  let loadingScreen = document.getElementById('loading-screen');
  let video = document.getElementById('loading-video');

  // Timer 5 detik, langsung pindah
  setTimeout(function() {
    if (loadingScreen) {
      loadingScreen.style.animation = 'fadeOut 0.5s ease forwards';
      setTimeout(function() {
        window.location.href = 'halaman.html';
      }, 500);
    } else {
      window.location.href = 'halaman.html';
    }
  }, duration);

  // Fallback kalau video error (tetap pindah setelah 5 detik)
  if (video) {
    video.addEventListener('error', function() {
      console.log('Video error, tetap lanjut setelah 5 detik');
    });
  }
})();