/* Abre e fecha o menu quando clicar no icone: hamburger e X */
const nav = document.querySelector('#header nav')
const toogle = document.querySelectorAll('nav .toggle')

for (const element of toogle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Quando clicar em um item do menu, esconder o menu  */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Mudar o header da página quando der o scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    /* Scroll é maior que a altura do header */
    header.classList.add('scroll')
  } else {
    /* Scroll menor que a altura do header */
    header.classList.remove('scroll')
  }
}

/* TESTIMONIALS CAROUSEL SLIDER SWIPER */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWwrapperSize: true
    }
  }
})

/* SCROLLREVEAL: MOSTRA OS ELEMENTOS QUANDO DER SCROLL NA PÁGINA */
const scrollReveal = ScrollReveal({
  origin: 'top',
  diatance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  footer .brad, footer .social`,
  { interval: 100 }
)

/* BUTTON BACK TO TOP */
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 900) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* active menu according to page section */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
