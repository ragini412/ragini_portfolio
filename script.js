function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

var icon= document.getElementById("desc-icon");
icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src="./images/sun.png";
  }else{
    icon.src="./images/moon.png";
  }
}

var icon= document.getElementById("ham-icon");
icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src="./images/sun.png";
  }else{
    icon.src="./images/moon.png";
  }
}