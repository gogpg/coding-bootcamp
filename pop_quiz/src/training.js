 
// //// 1 PRATIMAS /////// jei skaicius dalinasi is triju console.log fizz, jei is 5 buzz, jei is penkiolikos fizz buzz, jei niekur netinka, tego konsoleje paraso ta skaiciu.

// let x = 5;

// if (x % 15 == 0) {               //15 virsuje rasome todel, kad irasius apacioje pvz irasius x=15, mums parasys buzz, nes ir is 5 dalinasi sitas skaicius be liekanos. Todel didenis skaicius turi buti auksciausiai.
//     console.log('fizz buzz')
// } else if (x % 5 == 0 ) {
//     console.log('buzz')
// } else if ((x % 3 == 0 )) {
//     console.log('fizz')
// } else {
//     console.log('x')
// }

// //// 2 PRATIMAS // padaryti for cikla, kuris generuotu auksciau esanciam pratimui skaicius iki 100.

// for (let i = 1; i < 101; i++) {

//     if (i % 15 == 0) {              
//         console.log(i + 'fizz buzz')
//     } else if (i % 5 == 0 ) {
//         console.log(i +'buzz')
//     } else if ((i % 3 == 0 )) {
//         console.log(i + 'fizz')
//     } else {
//         console.log(i )
//     }
// }

// ////////// MASYVAI ////////////////////////////////////////////////

// let books = ['Sapiens', 'Moby Dick', 'Life of Pi', 'Sapiens', 'Dictionary', 'Sapiens']

// //console.log isvardinti visas knygas

// for (i = 0; i < books.length; i++) {
//     console.log(books[i])
// }

// ///paskaiciuoti kiek yra 'Sapiens' knygu.

// let count = 0;
// for (i = 0; i < books.length; i++) {
//     if (books[i] === 'Sapiens') {
//        count = count + 1 
//        console.log(count)
//     }
// }

// //////// OBJECTS ///////////////////////////////////////////////////////

// const user = {
//     name: 'Jonas',
//     lastName: 'Jonaitis',
//     pets: true,
//     age: 44
// }

// console.log(user)
// console.log(user.name)
// console.log('age: ' + user.age)

// //////// OBJECTS IN ARRAYS /////////////////////////////////////////////////////

// const mediaStars = [
//     {
//         username: 'Mo244',
//         followers: 34,
//         is_followed: false

//     },
//     {
//         username: 'Angela_boo',
//         followers: 133,
//         is_followed: true

//     },
//     {
//         username: 'SexyRick21',
//         followers: 234421,
//         is_followed: true

//     }
// ]

// console.log('Number of followers: ' + mediaStars[0].followers)  ///pasiekiamas pirmas masyvo objektas ir jame randamas key followers

// for (let i = 0; i < mediaStars.length; i++) {
//     let x = mediaStars[i].followers
//     console.log(x)
// }

// for (let i = 0; i < mediaStars.length; i++) {
//     if (mediaStars[i].is_followed === true) {
//         console.log(mediaStars[i].username +' Hi, long time no speak!')
//     }
// }

// //////// FUNCTIONS //////////////////////////////////////////////////////////////////////////

//  function sendText(name, time) {
//      console.log('Hi ' + name + ' do you want to hang out at ' + time + '?')
//  }

//  sendText('Jonas ', 10)
//  sendText('Brigita ', 5)
//  sendText('Emilija ', 4)
//  sendText('Martynas ', 3)

//  ////////

// // function setReminder(name, time) {
// //     console.log('Hi, ' + name + ' you have a meeting today at ' + time + '.')
// // }
// // setReminder('Jonas', 10)

// const setReminder = (name, time) => console.log('Hi, ' + name + ' you have a meeting today at ' + time + '.')
// setReminder('Petras', 8)
// setReminder('Ramune', 10)

// ////////////////////////////

// let name = 'Giedre';
// let number = 1;

// function showAlert() {
//     console.log(name + ' wake up! This is your alarm number ' + number + '!')
//     number = number + 1 ///kitas uzrasymo variantas number += 1
// }
// showAlert()  //kiekviena karta is naujo iskvietus funkcija skaiciuosis number, kuris yra globalus kintamasis, nereikia jo rasyti i funkcija, kaip parametro, ar iskvieciant funkcija.
// showAlert()
// showAlert()

// /////////// PRATIMAS ////////////////////////////

 const bob = document.querySelector('.face')

 let count = 0;

 function moveBob() {
    //console.log('hi')  // paziuriu ar veikia funkcija paklikinus ant paveiksliuko. ar veikia eventlistener.

    //bob.style.left = '100px'  //paspaudus ant paveiksliuko jis pasislenka nuo kaires i desine 100 px.

    count = count + 50;   //kitaip galima uzrasyti count += 50; kiekviena karta paspaudus ant paveikslelio, prie count prisideda po 50 
    bob.style.left = count + 'px'  // prie count prisideda 'px'
 }

bob.addEventListener('click', moveBob)  //prie bob kintamojo pridedu event listeneri click, kad paspaudus bob sureaguotu, salia funkcijos aktyvavimas, kokios reakcijos paspaudus norime.

// const moveBob = () => {        /// kitas funkcijos uzrasymo budas.
//     count += 50
//     bob.style.left = count + 'px'
// }

///////////// WHILE LOOPS //////////////////////////////////////////////////////////////////
//ciklas sukasi iki tol, kol veikia funkcijoje parasyta salyga

let i = 1;

while(i < 10) {                 //kol i maziau uz desimt, tol vykdys salyga. parasys console 9 kartus nurodyta uzrasa
    console.log(i + ' beers on the wall')  //jeigu parasysiu tik sita viena eilute, mano console uzlus, nes ciklas suskasi be gali, neis i visada yra mazesnis uz 10, jis yra nulis
    i++                         //todel turiu parasyti sita veiksma, kad kiekviena karta i prisipliusuotu, kol pasieks desimt ir ciklas sustos, nes kitaip i visada 1 ir ciklas sukasi be galo.
}
//sis ciklas yra pavojingas del galimu klaidu rasant koda ir begalinio jo sukimosi, geriau nenaudoti.

////////////// BUILT-IN OBJECTS /////////////////////////////////////////////////////////////////////////////

// Date
// Math
// String
// Array
// Object

//visi sie built-in objektai turi metodus ir properties.

// Length yra JS propertie, gali buti naudojamas su stringu arba masyvu  -----------------------------------------------------------

const balls = document.querySelectorAll('.balls')  // paimame visus div, kurie pazymeti .balls klase. parase zodi All renkantis elementus, mes gauname visus, kurie yra pazymeti sita klase
console.log(balls)  //prie info console rodys ilgi, kiek yra tokiu elementu
console.log(balls.length)/// taip galima irgi paziureti, tada duos tik skaiciu console, pirmas variantas informatyvesnis.

//array.length
//string.legth and so on

// .Concat() metodas galime sujungti stringus ir masyvus ---------------------------------------------------------------

const stringWord = 'Say cheese, '
const stringName = 'Elena.'

console.log(stringWord.concat(stringName))  //du stringai sujungiami i viena

//sujungiant du masyvus, concat metodas nekeicia originaliu masyvu, jis padaro visai nauja atskira masyva sujungdamas juos.

const array1 = [1, 2, 3, 4, 5]
const array2 = [6, 7, 8, 9, 10]
const array3 = [11, 12, 13, 14, 15]
const newArray = array1.concat(array2, array3)
console.log(array1)
console.log(array2)
console.log(array3)
console.log(newArray)

// .join() ---------------------------------------------------------------------------------------------------------------------------------------
//grazina nauja stringa, sujungdamas visus elementus masyve.

const textDisplay = document.querySelector('.text')  //issitraukiame html elementa pagal klase.

const emotions = ['Happy', 'Sad', 'Confident'];

// emotions.join()  //ekrane rezultatas tas pats, bet consolej paziurejus gauname jau nebe masyva, o sringa
// console.log(emotions.join(''))  ///irasius tuscia stringa gausime viena stringa is masyvo be kableliu, reiskia kableliai buvo pakeisti niekuo.
// console.log(emotions.join(' '))  //stringai is masyvo jungiasi per tuscia tarpa.
// console.log(emotions.join('-'))  //cia kableliai jau pakeiciami bruksneliais, stringai jungiasi per bruksnelius ir tt galima irasyti ka norim.
  
const newString = emotions.join(' ')   //reikia naujo kintamojo,, nes sis metodas grazina kazka naujo, kuri reikia kur nors ideti (i kintamaji), kitaip neveiks.
textDisplay.innerHTML = newString;    ///su inner html issitrauke i js html elementa jame galime irasyti ka reikia ir tai atsivaizduos html.

// .pop() --------------------------------------------------------------------------------------------------------------------------------
/// istrina paskutini elementa is masyvo ir ji grazina. Metodas keicia masyvo ilgi, pakeicia masyva.

const display = document.querySelector('.display');

// const movies = ['Terminator', 'Aliens', 'Argo'];

// movies.pop()  ///masyvas grazinamas be paskutinio elemento

const movies = [
    {

    },
    {
        
    },
    {
        
    }

]

display.innerHTML = movies;


































