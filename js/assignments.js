// get the element
const mainContent = document.querySelector(".main-content");

// drag and drop on pc
const drag = () => {
  const items = document.querySelectorAll(".item");

  let current;

  for (let i = 0; i < items.length; i++) {
    // drag release event
    items[i].ondrop = (e) => {
      items[i].classList.remove("p-shadow");
      items[current] && items[current].classList.remove("p-shadow");

      if (current === i) return;

      // The front element is moved to the back and the two elements are adjacent, then the elements are swapped
      if (current < i && current === i - 1) {
        const temp = items[i].innerHTML;
        items[i].innerHTML = items[current].innerHTML;
        items[current].innerHTML = temp;
        return;
      }

      // const temp = items[current].cloneNode(true);
      // mainContent.removeChild(items[current]);
      // mainContent.insertBefore(temp, items[i]);
      mainContent.insertBefore(items[current], items[i]);
      drag();
    };
    // drag start event
    items[i].ondragstart = (e) => {
      current = i;
      // organize event bubbling
      e.stopPropagation();
    };
    // drag stop event
    items[i].ondragover = (e) => {
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("p-shadow");
      }

      items[i].classList.add("p-shadow");
      // organize default events
      e.preventDefault();
    };
  }
};

// drag();

new Sortable(mainContent, {
  animation: 150,
  ghostClass: 'p-shadow'
});
