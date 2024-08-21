
window.sr = ScrollReveal({ reset: true });

sr.reveal(`#tec,#gup,#dp`, {duration: 2000});

sr.reveal(`.bv`, {duration: 2000});

sr.reveal(`footer`, {duration:4000});

sr.reveal(`.bv > *`, {duration: 5000});


const backToTopButton = document.querySelector('.back-to-top');

const backToTop = () => {
  if (window.scrollY >= 100) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
};

window.addEventListener('scroll', backToTop);

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
