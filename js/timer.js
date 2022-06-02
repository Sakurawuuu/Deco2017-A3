// Access to elements
const switchBtns = document.querySelectorAll(".switch");
const switchCircles = document.querySelectorAll(".switch .circle");

const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

// Countdown time
let time;
// Element index
let index;

// Hold the button
let btn;
let circle;

// Global timer
let showTime;
let pause;
let reStart;

// Listen for the reset button click event
reset.onclick = () => {
  // Reset page text
  hour.innerHTML = '00';
  minute.innerHTML = '00';
  second.innerHTML = '00';
  
  // Close button method
  closeSwitch();

  // Reset the parameters
  circle = null;
  time = null;
  btn = null;

  // Add disabled Styles
  start.classList.add('disabled');
  reset.classList.add('disabled');
}

// Button Button click event
start.onclick = () => {
  // Set a time
  time = btn.setAttribute("data-time", time);
  time = btn.getAttribute("data-time") - 0;
  
  // Open timing method
  openSwitch();
}

// The Stop button listens for events
stop.onclick = () => {
  closeSwitch();
}

// Turn off all timers
const closeTimer = () => {
  showTime && clearInterval(showTime);
  pause && clearTimeout(pause);
  reStart && clearTimeout(reStart);
}

// Start countdown
const startTimer = () => {
  // Clear all timers
  closeTimer();

  showTime = setInterval(() => {
    // Calculate the hours
    const h = Math.floor(time / 60 / 60) % 60;
    // Calculate the minutes
    const m = Math.floor(time / 60) % 60;
    // Calculation of seconds
    const s = time % 60;

    // Replace the text in the page
    hour.innerHTML = h < 10 ? '0' + h : h;
    minute.innerHTML = m < 10 ? '0' + m : m;
    second.innerHTML = s < 10 ? '0' + s : s;
    
    // Total time reduction
    time--;
  }, 1000);

  // 20 minute pause timer
  pause = setTimeout(()=>{
    // 5 minutes Restart timer
    reStart = setTimeout(() => {
      // Restart the countdown
      startTimer();
      // Clear restart timer
      clearTimeout(reStart);
    }, 5 * 60);

    // Clear display time and pause timer
    clearInterval(showTime);
    clearTimeout(pause);
  }, 20 * 60);
}

// Start countdown
const openSwitch = () => {
  // Disable the button
  start.classList.add('disabled');
  // Reset button to disable
  reset.classList.remove('disabled');
  // Stop button to disable
  stop.classList.remove('disabled');

  // Change the button background color
  btn.style.background = "rgb(197,196,230)";
  // Move the circle
  circle.style.transform = "translateX(100%)";
  // Setting button State
  btn.setAttribute("data-status", 0);
  // Start countdown
  startTimer();
}

const closeSwitch = () => {
  if(!btn || !circle) {
    return;
  }

  // Clear Start button clear disable
  start.classList.remove('disabled');
  // Reset button clears disable
  reset.classList.remove('disabled');
  // Stop button add disable
  stop.classList.add('disabled');

  // Off timer
  closeTimer();
  
  // Set the background color
  btn.style.background = "rgb(158,136,183)";
  // Set circular displacement
  circle.style.transform = "translateX(0)";
  // Set the state of
  btn.setAttribute("data-status", 1);
  // Set a time
  btn.setAttribute("data-time", time);
}

for (let i = 0; i < switchBtns.length; i++) {
  // Listen for switch click events
  switchBtns[i].onclick = () => {
    if (i !== index) closeSwitch();

    // The assignment
    btn = switchBtns[i];
    circle = switchCircles[i];
    index = i;

    // Get button state
    const status = btn.getAttribute("data-status") - 0;

    if (status) {
      // Get countdown time
      time = btn.getAttribute("data-time") - 0;
      openSwitch();
    } else {
      closeSwitch();
    }
  };
}
