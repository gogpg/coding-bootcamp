// https://restcountries.com/ , punkapi.com      //used resources
/// using fetch()

//to GET - GET REQUEST

// fetch('')          //sintakse
//     .then((response) => response.json())
//     .then((data) => console.log(data))

// fetch('https://restcountries.com/v2/all')   //naudojamas perkelti json failui(ikeliame nuoroda i Fetch skliaustelius) tinkle ir atspauzdinti console.log
//     .then((response) => response.json())
//     .then((data) => console.log(data))

// fetch('https://api.punkapi.com/v2/beers')
//     .then((response) => response.json())
//     .then((data) => console.log(data))

// fetch('https://my-burger-api.herokuapp.com/burgers')
//     .then((response) => response.json())
//     .then((data) => console.log(data))

//uzduotis: atvaizduoti random pavadinimus burgeriu displejuje is API masyvo, paspaudus mygtuka----------------------------------------------

const display = document.querySelector('.circle')
const button = document.querySelector('.buttonFirst')

function getData() {
    fetch('https://my-burger-api.herokuapp.com/burgers')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
           const randomIndex = Math.floor(Math.random() * data.length)  //random suapvalintas i mazesne puse indeksas(skaicius)
           const randomName = data[randomIndex].name                     //pagal ta random indeksa randame random name
           display.innerHTML = randomName
        })
}

button.addEventListener('click', getData)

/// POST REQUEST /////////////////////////////////////////////
// post data to an API, prideti nauju objektu i Api

//sintakse

// const data = {username: 'example'}

// fetch('', {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json',
//     },
//     body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//     console.log('Success:', data)
// })
// .catch((error) => {
//     console.log('Error:', error)
// })

// POST REQUEST prideti nauja objekta i burgeriu masyva.////////////////--------------------------------------------------------------------

const data = {        //sukuriu nauja burgerio objekta, kuri desiu i API, objekto struktura tokia pati, kokia jau yra esamu ten objektu.
    id: 28,
    name: 'BBQ Burger', 
    restaurant: 'Burger Kiosk',
    web: 'https://www.burgerkiosk.lt/', 
    description: 'A delicious burger made of 100% patty (130 grams), locally produced BBQ jam, red Cheddar cheese, crispy bacon',
    ingredients: ['beef', 'BBQ jam', 'red Cheddar cheese', 'crispy bacon', 'onion', 'lettuce'],
    addresses: [{addressId: 0, number: '7', line1: 'Aukstaiciu g.', line2: 'Vilnius', postcode: 'LT-11341', country: 'Lithuania'}]
}

fetch('https://my-burger-api.herokuapp.com/burgers', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(data),
})
.then((response) => response.json())
.then((data) => {
    console.log('Success:', data)
    
})
.catch((error) => {
    console.log('Error:', error)
})

/// PUT request
/// Allows to edit object ///////////////////////////////////////////////////////////------------








