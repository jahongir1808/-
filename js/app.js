const btn = document.getElementById("navbar_btn");

var a = 0;

function openMenu() {
  if (a == 1) {
    document.getElementById("navbarMenu").style.display = "inline";
    return (a = 0);
  } else {
    document.getElementById("navbarMenu").style.display = "none";
    return (a = 1);
  }
}

btn.addEventListener("click", openMenu);
