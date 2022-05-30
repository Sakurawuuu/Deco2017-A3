const modalBg = document.getElementById('modal-bg');
// Open the popover button
const openModals = document.querySelectorAll('.open-modal');
// Close the popover button
const closeModals = document.querySelectorAll('.close-modal');

const modal = document.getElementById('modal');

for(let i = 0; i < openModals.length; i++) {
  openModals[i].onclick = () => {
    // Display elements
    modal.style.display = 'block';
    modalBg.style.display = 'block';
    modal.style.opacity = '1';
  }
}
for(let i = 0; i < closeModals.length; i++) {
  closeModals[i].onclick = () => {
    // Hidden elements
    modal.style.opacity = '0';
    modalBg.style.display = 'none';
    modal.style.display = 'none';
  }
}
