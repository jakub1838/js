labconst main = document.querySelector('main')
const timeoutRef = setTimeout(
    () => {
        main.innerHTML="From setTimeout"
    },
    2000
)
let licznik = 0
const intervalRef = setInterval(
    () => {
        main.innerHTML="From setInterval" + licznik++
    },
    4000
);

//kasujemy timeoutRef

clearInterval(timeoutRef)

//kasujemy setInterval

clearTimeout(intervalRef)

//window.requestAnimationframe