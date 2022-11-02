
// keys //
//klaviaturos klausymas - key from keyboard


// function control(e) {             //turiu funkcijoje nurodyti eventa, parametra, pagal kuri funkcija reaguos i klavisu paspaudima.
//     if (e.key === 'ArrowLeft') {  //jei parametro raktas, reiksme lygi paspaustai rodyklei i kaire klaviaturoje
//         console.log('pressed left')
//     } else if (e.key === 'ArrowRight') {
//         console.log('pressed right')
//     } else if (e.key === 'ArrowUp') {
//         console.log('pressed up')
//     } else if (e.key === 'ArrowDown') {
//         console.log('pressed down')
//     }
// }

// document.addEventListener('keydown', control)

// swich ///  ta pacia funkcija is auksciau parasysiu swich budu.

//spaudziant klaviaturos rodykles priversti apskritima judeti.

const circle = document.querySelector('.circle')

let xAxis = 0;
let yAxis = 0;

function control(e) {
    switch(e.key) {         //i swicha idedame kas kartojasi kiekviename ife, todel jo paskui nebereikia kas karta rasyti
        case 'ArrowLeft':
            xAxis -= 50;
            circle.style.left = xAxis + 'px'
            break;
        case 'ArrowRight':
            xAxis += 50;
            circle.style.left = xAxis + 'px'
            break;
        case 'ArrowUp':
            yAxis -= 50;
            circle.style.top = yAxis + 'px'
            break;
        case 'ArrowDown':
            yAxis += 50;
            circle.style.top = yAxis + 'px'
            break;
        default: 
            console.log('key not recognised')
    }
}

document.addEventListener('keydown', control)

// padaryti, kad paspaudus 1 klaviaturoje atsirastu sypsena, o paspaudus 21 atsirastu liudnas veidukas.

const mouth = document.querySelector('.smile')

function controlSmile(event){
    switch(event.key) {
        case '1':
            mouth.style.borderBottom = 'solid 3px #000'
            mouth.style.borderTop = 'transparent'
            break;
        case '2':
            mouth.style.borderTop = 'solid 3px #000' 
            mouth.style.borderBottom = 'transparent' 
            break;
        default:
            console.log('key not recognised')
    }
}

document.addEventListener('keydown', controlSmile)

// galima buvo susikurti atsikrus stilius laimingam veidui ir liudnam.Tada priskirti burnai atskira id mouth. Ta mouth issitraukti per querrySelector(#mouth). Tada rasyti mouth.classList.add('.happy-mouth) ir mouth.classList.remove('.sad-mouth) arba atvirksciai.


