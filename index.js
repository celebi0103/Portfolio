// Code pour animer la navbar lorsque l'on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >50) {
    document.querySelector("nav").style.backgroundColor = "#222";
  } else {
    document.querySelector("nav").style.backgroundColor = "#333";
  }
}

// Code pour animer la navigation vers les différentes sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
