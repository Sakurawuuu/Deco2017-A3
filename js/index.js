// Set image Path
const musicArr = ['./audio/01.mp3', './audio/02.mp3', './audio/03.mp3'];
// Access to elements
const playerSwitch = document.querySelector('.player-switch');
const playerSwitchImg = document.querySelector('.player-switch img');
const playerL = document.querySelector('.player-l');
const playerR = document.querySelector('.player-r');
const audio = document.getElementById('audio');

// Set up the index
let index = 0;
let flag = true;

// Audio playback
const play = () => {
  audio.play();
  // Replace the picture
  playerSwitchImg.src = './img/home/pause.png'
}


playerSwitch.onclick = () => {
  if (flag) {
    // Audio playback
    play();
  } else {
    // Music to suspend
    audio.pause();
    playerSwitchImg.src = './img/home/start.png'
  }
  flag = !flag;
}

// Play the last song
playerL.onclick = () => {
  index++;
  // Replace the picture
  if (index >= musicArr.length) {
    index = 0;
    audio.src = musicArr[index] 
  } else {
    audio.src = musicArr[index] 
  }
  play();
}

// Play the next song
playerR.onclick = () => {
  index--;
  if (index <= 0) {
    index = musicArr.length - 1;
    audio.src = musicArr[index]; 
  } else {
    audio.src = musicArr[index] 
  }
  play();
}