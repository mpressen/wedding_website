function toggleMenu() {
  var x = document.getElementById("myLinks");
  var line1 = document.getElementById("line1");
  var line2 = document.getElementById("line2");
  var line3 = document.getElementById("line3");
  if (x.style.display === "flex") {
    x.style.display = "none";
    line1.style.transform = "rotate(0)"
    line2.style.transform = "scaleY(1)"
    line3.style.transform = "rotate(0)"
  } else {
    x.style.display = "flex";
    line1.style.transform = "rotate(45deg)"
    line2.style.transform = "scaleY(0)"
    line3.style.transform = "rotate(-45deg)"
  }
}

window.addEventListener('load', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const hashval = this.getAttribute('href')
      document.querySelector(hashval).scrollIntoView({
        behavior: 'smooth'
      });
      history.pushState(null, null, hashval)
    });
  });
});

