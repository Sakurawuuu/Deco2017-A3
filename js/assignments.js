// 获取元素
const mainContent = document.querySelector(".main-content");

// pc 端拖拽
const drag = () => {
  const items = document.querySelectorAll(".item");

  let current;

  for (let i = 0; i < items.length; i++) {
    // 拖拽释放事件
    items[i].ondrop = (e) => {
      items[i].classList.remove("p-shadow");
      items[current] && items[current].classList.remove("p-shadow");

      if (current === i) return;

      // 前面元素移动到后方且两个元素相邻 则交换元素
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
    // 拖拽开始事件
    items[i].ondragstart = (e) => {
      current = i;
      // 组织事件冒泡
      e.stopPropagation();
    };
    // 拖拽停止事件
    items[i].ondragover = (e) => {
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("p-shadow");
      }

      items[i].classList.add("p-shadow");
      // 组织默认事件
      e.preventDefault();
    };
  }
};

// drag();

new Sortable(mainContent, {
  animation: 150,
  ghostClass: 'p-shadow'
});