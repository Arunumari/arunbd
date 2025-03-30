// document.addEventListener('DOMContentLoaded', () => {
//     let audio = document.getElementById('background-music');

//     if (audio) {
//         // Restore previous music state if playing
//         if (sessionStorage.getItem('musicPlayed') === "true") {
//             audio.currentTime = sessionStorage.getItem('musicTime') || 0;
//             audio.play();
//         } else {
//             // Autoplay attempt with user interaction fallback
//             audio.play().catch(() => {
//                 console.warn('Autoplay blocked! Click anywhere to play.');
//                 document.addEventListener('click', () => {
//                     audio.play();
//                     sessionStorage.setItem('musicPlayed', "true");
//                 }, { once: true });
//             });
//         }
//     }

//     // Save music state before leaving the page
//     window.addEventListener('beforeunload', () => {
//         if (!audio.paused) {
//             sessionStorage.setItem('musicPlayed', "true");
//             sessionStorage.setItem('musicTime', audio.currentTime);
//         }
//     });
// });
