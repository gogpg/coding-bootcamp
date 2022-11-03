
// CREATE ELEMENT /////---------------------------------------------------------------------------------------------------

// .createElement()  sukuria html elementus pagal tag name.

const body = document.querySelector('body')

const square = document.createElement('div') //kuriant nauja html elementa reikia ji patalpinti i kintamaji.
// square.style.width = '100px';   // jei nera css aprasyto stiliaus, tai galima ir cia sukurti elementui stiliu.
// square.style.height = '100px';
// square.style.backgroundColor = 'gold'

body.appendChild(square)  //tada ta kintamaji mes idedame html elementa, kuriame norime matyti atsvaizduota elementa.

// sukurti img ------

const picture = document.createElement('img')
body.appendChild(picture)


// SET ATRIBUTE ///////----------------------------------------------------------------------------------------------------
// .setAttribute()  metodas 

picture.setAttribute('src','src/images/paul-bulai-VeJYoO_1Ggs-unsplash.jpg' )  //img/picture elementui priskiriame reiksme
picture.setAttribute('data-id', 4)  //priskiriame dar kita reiksme tam tagui

// GET ATTRIBUTE //---------------------------------------------------------------------------------------------------------
// .getAttribute() ---

const picturePath = picture.getAttribute('src')
const pictureId = picture.getAttribute('data-id')
console.log(picturePath)   //randame reiksme,kuri buvo priskirta tam tagui.
console.log(pictureId)






