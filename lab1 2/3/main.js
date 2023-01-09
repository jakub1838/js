
//const przeliczBt = document.querySelector('#przelicz')
let sum = document.querySelector('#sum')
let avg = document.querySelector('#avg')
let min = document.querySelector('#min')
let max = document.querySelector('#max')
let liczba1 = document.querySelector('#liczba1')
let liczba2 = document.querySelector('#liczba2')
let liczba3 = document.querySelector('#liczba3')
let liczba4 = document.querySelector('#liczba4')

const math = () => {
    const a = Number(liczba1.value)
    const b = Number(liczba2.value)
    const c = Number(liczba3.value)
    const d = Number(liczba4.value)
    const suma = a + b + c + d
    const srednia = suma / 4
    const minimalna = Math.min(a, b, c, d)
    const maksymalna = Math.max(a, b, c, d)
    sum.innerHTML = suma
    avg.innerHTML = srednia
    min.innerHTML = minimalna
    max.innerHTML = maksymalna
}
liczba1.addEventListener('change', math)
liczba2.addEventListener('change', math)
liczba3.addEventListener('change', math)
liczba4.addEventListener('change', math)
