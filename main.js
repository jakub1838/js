const liczba1 = document.querySelector("#liczba1").value
const liczba2 = document.querySelector("#liczba2").value
const liczba3 = document.querySelector("#liczba3").value
const liczba4 = document.querySelector("#liczba4").value
const przeliczBt = document.querySelector("#przelicz")

przeliczBt.addEventListener('click', () => {
    console.log(liczba1)
    var max = Math.min(+liczba1, +liczba2, +liczba3, +liczba4)
    var min = Math.max(+liczba1, +liczba2, +liczba3, +liczba4)
    console.log(min)
    console.log(max)
})
//Math.max(), .min()