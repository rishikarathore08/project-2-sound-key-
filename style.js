// Key-to-sound mapping
const sounds = {
  'A': 'clap.wav',
  'S': 'hihat.wav',
  'D': 'kick.wav',
  'F': 'openhat.wav',
  'G': 'boom.wav',
  'H': 'ride.wav',
  'J': 'snare.wav'
};

// Play sound and animate key
function playSound(key) {
  const upperKey = key.toUpperCase();
  const soundFile = sounds[upperKey];

  if (!soundFile) return;

  const audio = new Audio(`sounds/${soundFile}`);
  audio.play();

  const keyDiv = [...document.querySelectorAll('.key')].find(div => div.textContent === upperKey);
  if (keyDiv) {
    keyDiv.classList.add('active');
    setTimeout(() => keyDiv.classList.remove('active'), 150);
  }
}

// Listen for keydown
document.addEventListener('keydown', (e) => {
  playSound(e.key);
});
