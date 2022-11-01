// keys //
//klaviaturos klausymas - key from keyboard
const circle = document.querySelector('.circle')

function control(e) {             //turiu funkcijoje nurodyti eventa, parametra, pagal kuri funkcija reaguos i klavisu paspaudima.
    if (e.key === 'ArrowLeft') {  //jei parametro raktas, reiksme lygi paspaustai rodyklei i kaire klaviaturoje
        console.log('pressed left')
    } else if (e.key === 'ArrowRight') {
        console.log('pressed right')
    } else if (e.key === 'ArrowUp') {
        console.log('pressed up')
    } else if (e.key === 'ArrowDown') {
        console.log('pressed down')
    }
}

document.addEventListener('keydown', control)


