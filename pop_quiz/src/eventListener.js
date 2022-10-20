document.addEventListener('DOMContentLoaded', () => {     //sitaip reiktu rasyti, jei html script dedame virsuje, kad veiktu script perskaicius (pasikrovus) visa html kas parasyta. Visa js koda dedame i sita funkcija.

/// ADD EVENT LISTENER ///////////////////////////////////////////////////////////////////////////////////////

// .addEventListener event target method/// method attaches an event handler to an element. 
// target.addEventListener(event, function)  // sintakse

const hexagon = document.querySelector('.hexagon')

function alertMe () {         //paspaudus ant daugiakampio consolej pasirodo stringas , zodis 'clicked'. funkcija, kuria idesiu i event listeneri.
  console.log('clicked')
}

// hexagon taikinys i kuri orientuotas eventListeneris, 'click' vienas is daugelio veiksmu, kuriuos galima nustyti, kad ivykdzius aktyvuotusi salia irasyta funkcija.

hexagon.addEventListener('mouseover', alertMe)  //uzvedus pele ant targeto funkcija aktyvuojasi.

//------------------------------------------------------------------------------------------------------------//

const hexagonPlace = document.querySelector('.hexagonPlace')

function greeting() {
    console.log('Hello')
}

//hexagonPlace.addEventListener('click', greeting)

hexagonPlace.addEventListener('click', () => {   //galima funkcija iskart rasyti salia eiluteje
    console.log('Hello')
})

/////////////// REMOVE EVENT LISTENER //////////////////////////////////////////////////////////////////////////////////////////////

const circle = document.querySelector('.circle')
let count = 0;
function toggleColor() {            
    circle.classList.toggle('red-circle')    // pritaikau toggle( metoda). The toggle() method toggles between hide() and show() for the selected elements. This method checks the selected elements for visibility. show() is run if an element is hidden. hide() is run if an element is visible - This creates a toggle effect. Pritaikau visam circle classlistui .red-circle, jis dingsta, dingsta kartu ir raudonas apskritimas ekrane atsiranda zalias, nes toks buvo pagal defolta sukurtas..
    count++  //skaiciuojame paspaudimus
    if (count > 10) {
        circle.removeEventListener('click', toggleColor)  ///nustatau, kad kai paspaudimau skaicius perkops 10, event listeneris bus nuimtas.
    }
}

circle.addEventListener('click', toggleColor)

//------------------------------------------------------------------------------------------------------------------------

const triangle = document.querySelector('.triangle')
let counter = 0;
function moveRight() {
    count = count + 50;   //kitaip galima uzrasyti count += 50; kiekviena karta paspaudus ant paveikslelio, prie count prisideda po 50 
    triangle.style.left = count + 'px'  // prie count prisideda 'px'
    counter++
    if (counter > 5) {         //pasiekus paspaudimu daugiau nei 5 event listeneris nusiima, nebeveikia.
       triangle.removeEventListener('click', moveRight) 
    }
}
triangle.addEventListener('click', moveRight)






















})


