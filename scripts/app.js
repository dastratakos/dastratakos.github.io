const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
  .fromTo(hero, 1.2, { width: "95%" }, { width: "80%", ease: Power2.easeInOut })
  .fromTo(
    slider,
    1.2,
    { x: "100%" },
    { x: "0%", ease: Power2.easeInOut },
    "=-1.2"
  );

AOS.init();

var hamburger = document.querySelector(".hamburger");
var sidebar = document.getElementById("sidebar");
var main = document.getElementById("main");
var landing_text = document.getElementById("landing-text");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  sidebar.classList.toggle("is-active");
  main.classList.toggle("is-active");
  landing_text.classList.toggle("is-active");
});

// https://www.w3schools.com/howto/howto_html_include.asp
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    console.log("hi file");
    if (file) {
      console.log("file =", file);
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
includeHTML();

/* Project modals */
const buttons = document.getElementsByClassName("read-more-button");
console.log(`buttons: ${buttons}`)

for (var i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  const dataTarget = button.getAttribute("data-target");
  const modal = document.querySelector(dataTarget);
  const closeButton = modal.querySelector(".close-button");

  button.addEventListener("click", () => {
    modal.classList.toggle("show-modal");
  });
  closeButton.addEventListener("click", () => {
    modal.classList.toggle("show-modal");
  });
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.toggle("show-modal");
    }
  });
};
