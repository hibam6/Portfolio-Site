function menuToggle() {

  var navObject = document.getElementById('navbarLinks');
  var hamburger = document.getElementById('hamburger');

  if (navObject.style.display === "flex") {
    navObject.style.display = "none";
    hamburger.style.display = "flex";
  } else {
    navObject.style.display = "flex";
    hamburger.style.display = "none"; 
  }
}
