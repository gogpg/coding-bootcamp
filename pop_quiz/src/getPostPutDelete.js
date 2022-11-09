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
// sintakse

// fetch('', {
//     method: 'PUT',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify(data),
// })
// .then((response) => response.json())
// .then((data) => {
//     console.log('Success:', data)
    
// })
// .catch((error) => {
//     console.log('Error:', error)
// })

// uzduotis redaguoti API objekta----------------------------------------------------------------------
// https://my-burger-api.herokuapp.com/burgers/3  gale pridejus reikiamo objekto id gausiu tik viena objekta, kurio man reikia pagal id

const data1 = {
    "id": 3,
    "name": "The Good Burger",
    "restaurant": "Good Burger",
    "web": "https://en.wikipedia.org/wiki/Good_Burger",
    "description": "Welcome to Good Burger, home of the Good Burger, can I take your order?",
    "ingredients": [
      "bun",
      "tomato",
      "Ed's secret sauce",
      "lettuce",
      "onions",
      "cheese"
    ],
    "addresses": [
      {
        "addressId": 0,
        "number": "123",   //pakeiciau numeri is 000 i 123
        "line1": "Good Burger",
        "line2": "437 Glendora Ave.",
        "postcode": "CA",
        "country": "United States"
      }
    ]
  }
  
function editData() {

    fetch('https://my-burger-api.herokuapp.com/burgers/3', {     ///adresa rasau su id objekto, kuri editinu.
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data1),
    })
    .then((response) => response.json())
    .then((data1) => {
        console.log('Success:', data1)
        
    })
    .catch((error) => {
        console.log('Error:', error)
    })
}
editData()







