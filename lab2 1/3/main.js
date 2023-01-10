const slajd = document.querySelector('.slajd')
const obrazki = document.querySelectorAll('.slajd img')
const poprzBtn = document.querySelector('#poprzBtn')
const nastBtn = document.querySelector('#nastBtn')


const jeden = document.querySelector('#jeden')
const dwa = document.querySelector('#dwa')
const trzy = document.querySelector('#trzy')
const cztery = document.querySelector('#cztery')
const piec = document.querySelector('#piec')

let numer = 1
const rozmiar = obrazki[0].clientWidth;

slajd.style.transform = 'translateX(' + (-rozmiar * numer) + 'px)'

const autoSlides = setInterval(() => {
  //console.log('next')
  nast()
}, 15000)

const przenies = (x) => {
  slajd.style.transition = "transform 0.4s ease-in-out"
  numer = x;
  slajd.style.transform = 'translateX(' + (-rozmiar * numer) + 'px)'
}

const nast = () => {
  slajd.style.transition = "transform 0.4s ease-in-out"
  numer++;
  slajd.style.transform = 'translateX(' + (-rozmiar * numer) + 'px)'
}

nastBtn.addEventListener('click', () => {
  nast()
});

poprzBtn.addEventListener('click', () => {
  slajd.style.transition = "transform 0.4s ease-in-out"
  numer--;
  slajd.style.transform = 'translateX(' + (-rozmiar * numer) + 'px)'
});

slajd.addEventListener('transitionend', () => {
  if (obrazki[numer].id === 'ostatni'){
    console.log(numer)
    slajd.style.transition = "none"
    numer = obrazki.length - 2
    //console.log(numer)
    slajd.style.transform = 'translateX(' + (-rozmiar * numer) + 'px)'
  }
})

slajd.addEventListener('transitionend', () => {
  if (obrazki[numer].id === 'pierwszy'){
    console.log(numer)
    slajd.style.transition = "none"
    numer = obrazki.length - numer
    //console.log(numer)
    slajd.style.transform = 'translateX(' + (-rozmiar * numer) + 'px)'
  }
})

jeden.addEventListener('click', () => {
  przenies(1)
})
dwa.addEventListener('click', () => {
  przenies(2)
})
trzy.addEventListener('click', () =>{
  przenies(3)
})
cztery.addEventListener('click', () => {
  przenies(4)
})
piec.addEventListener('click', () => {
  przenies(5)
})
