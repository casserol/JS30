function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop the function from running all together
    audio.currentTime  = 0; //rewind audio to the start so it plays right after hitting the corresponding key
    audio.play();
    key.classList.add('playing');
  };

  function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip if it's not a transition
    this.classList.remove('playing'); // 'this' refers to 'key'
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // removes transition from keys

  window.addEventListener('keydown', playSound);
