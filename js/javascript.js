var menuList = document.getElementById("dropdown");
var menuKnop = document.getElementById("navbutton");
var deRest = document.querySelector("main")


function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
  
    document.getElementById("menubg").classList.toggle("changebg");
  }