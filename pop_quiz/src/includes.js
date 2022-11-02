
// .includes()  // grazina true arba false, naudojamas masyvuose ------------------------------------------------------

const books = ['Alf', 'Life of Pi', 'Power of Now']

console.log(books.includes('Alf')) //true arba false, siuo atveju true

const isInBooks = books.includes('Life of Pi')
console.log(isInBooks)

// .contains()  //skiriasi nuo includes(), jis nera naudojamas masyvuose ----------------------------------------------------

// pvz ar body html elemente yra child divas, galima naudoti .contains()

const body = document.querySelector('body')
const circle = document.querySelector('.circle')

const isInBody = body.contains(circle)
console.log(isInBody)

