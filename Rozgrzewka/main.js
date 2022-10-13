
const przeliczBt = document.querySelector('#przelicz')

przeliczBt.addEventListener('click', () => {
    var liczba1 = Number(document.querySelector('#liczba1').value)
    var liczba2 = Number(document.querySelector('#liczba2').value)
    var liczba3 = Number(document.querySelector('#liczba3').value)
    var liczba4 = Number(document.querySelector('#liczba4').value)

    var min = Math.min(liczba1, liczba2, liczba3, liczba4)
    var max = Math.max(liczba1, liczba2, liczba3, liczba4)
    console.log(min)
    console.log(max)
    console.log(add) 
})
//Math.max(), .min()