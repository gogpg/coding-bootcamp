document.addEventListener('DOMContentLoaded', () => {     //sitaip reiktu rasyti, jei html script dedame virsuje, kad veiktu script perskaicius (pasikrovus) visa html kas parasyta. Visa js koda dedame i sita funkcija.

/// ADD EVENT LISTENER ///////

// .addEventListener event target method/// method attaches an event handler to an element. 
// target.addEventListener(event, function)  // sintakse

const hexagon = document.querySelector('.hexagon')

function alertMe () {         //paspaudus ant daugiakampio consolej pasirodo stringas , zodis 'clicked'. funkcija, kuria idesiu i event listeneri.
  console.log('clicked')
}

// hexagon taikinys i kuri orientuotas eventListeneris, 'click' vienas is daugelio veiksmu, kuriuos galima nustyti, kad ivykdzius aktyvuotusi salia irasyta funkcija.

hexagon.addEventListener('mouseover', alertMe)  //uzvedus pele ant targeto funkcija aktyvuojasi.

})


