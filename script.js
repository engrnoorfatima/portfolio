const header = document.querySelector("header");
window.addEventListener("scroll", function() {
     // Get the scroll position
  let scrollPos = window.pageYOffset;
  
  if ( scrollPos > 100 ) {
    header.style.backgroundColor = "rgb(51, 47, 47)";
  } else {
    header.style.backgroundColor = "black";
  }


    header.classList.toggle("sticky", window.scrollY > 0);
});
