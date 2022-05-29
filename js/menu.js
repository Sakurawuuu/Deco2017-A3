(() => {
  const menu = document.getElementById("menu");
  const menuList = document.getElementById("menu-list");

  // Check whether to enable or disable
  let flag = true;
  menu.onclick = () => {
    if (flag) {
      // Display elements
      menuList.style.display = "block";
    } else {
      // Hidden elements
      menuList.style.display = "none";
    }
    flag = !flag;
  };
})();
