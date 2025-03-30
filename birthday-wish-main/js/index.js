(function() {
    function $(id) {
      return document.getElementById(id);
    }
  
    var card = $('card'),
        openB = $('open'),
        closeB = $('close'),
        timer = null;
    console.log('wat', card);
    openB.addEventListener('click', function () {
      card.setAttribute('class', 'open-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
      }, 1000);
    });
  
    closeB.addEventListener('click', function () {
      card.setAttribute('class', 'close-half');
      if (timer) clearTimerout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', '');
        timer = null;
      }, 1000);
    });
  
  }());
  function navigateToNewPage1() {
    window.open('ak.html', '_blank'); // Opens in a new tab
}
window.addEventListener('load', () => {
  const audio = document.querySelector('.song');
  
  // Attempt to play audio
  if (audio) {
      audio.play().catch(error => {
          console.warn('Autoplay failed:', error);
      });
  }

  // Ensure animations start
  animationTimeline();
});

  