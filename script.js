const menu = document.getElementById("menu");
const bar = document.getElementById("bar");

function closeMenu() {
  menu.style.top = "-100vh";
}

function openMenu() {
  console.log("open");
  menu.style.top = "0";
}
