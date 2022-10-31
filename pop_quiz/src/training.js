
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

// ////////// MASYVAI ///////////////////////////////////////////////////////////////////////////////////////

// let books = ['Sapiens', 'Moby Dick', 'Life of Pi', 'Sapiens', 'Dictionary', 'Sapiens']

// //console.log isvardinti visas knygas

// for (let i = 0; i < books.length; i++) {
//     console.log(books[i])
// }

// ///paskaiciuoti kiek yra 'Sapiens' knygu.-----------------------------------------------------------

// let count = 0;
// for (i = 0; i < books.length; i++) {
//     if (books[i] === 'Sapiens') {
//        count = count + 1 
//        console.log(count)
//     }
// }

// //////// OBJECTS /////////////////////////////////////////////////////////////////////////////////////////////////////////

// const user = {
//     name: 'Jonas',
//     lastName: 'Jonaitis',
//     pets: true,
//     age: 44
// }

// console.log(user)
// console.log(user.name)
// console.log('age: ' + user.age)

// //////// OBJECTS IN ARRAYS //////////////////////////////////////////////////////////////////////////////////////////////////////

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

while (i < 10) {                 //kol i maziau uz desimt, tol vykdys salyga. parasys console 9 kartus nurodyta uzrasa
    console.log(i + ' beers on the wall')  //jeigu parasysiu tik sita viena eilute, mano console uzlus, nes ciklas suskasi be gali, neis i visada yra mazesnis uz 10, jis yra nulis
    i++                         //todel turiu parasyti sita veiksma, kad kiekviena karta i prisipliusuotu, kol pasieks desimt ir ciklas sustos, nes kitaip i visada 1 ir ciklas sukasi be galo.
}
//sis ciklas yra pavojingas del galimu klaidu rasant koda ir begalinio jo sukimosi, geriau nenaudoti.

////////////// BUILT-IN OBJECTS /////////////////////////////////////////////////////////////////////////////////////////////////////

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

// .concat() metodas galime sujungti stringus ir masyvus ---------------------------------------------------------------

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
/// istrina paskutini elementa is masyvo ir ji grazina. Metodas keicia masyvo ilgi, pakeicia masyva, jis nesukuria naujo masyvo.

        //const display = document.querySelector('.display');

        //const movies = ['Terminator', 'Aliens', 'Argo'];

        // movies.pop()  ///masyvas grazinamas be paskutinio elemento

        // const movies = [
        //     {
        //         name: 'Argo',
        //         length: '136'
        //     },
        //     {
        //         name: 'Terminator',
        //         length: '200'
        //     },
        //     {
        //         name: 'Aliens',
        //         length: '205'
        //     }

        // ]

        //  console.log(movies)

        //  movies.pop()   //is masyvo isimamas paskutinis elementas (paskutinis objektas), masyvas pakeiciamas (jo ilgis)

        //  console.log(movies)

        // display.innerHTML = movies;

// .shift() metodas -------------------------------------------------------------------------------------------------------------------
//pasalina pirma masyvo elementa, pakeicia masyvo ilgi. Naujo masyvo nesukuria.

        // const display = document.querySelector('.display');
        // const movies2 = ['It', 'Run', 'Pasadena']
        // movies2.shift()

        // display.innerHTML = movies2;

// .unshift() metodas -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// prideda viena ar kelis elementus i masyvo pradzia ir grazina pakeista originalu masyva. pakeicia jo ilgi.

        // const display = document.querySelector('.display');

        // const plays = ['Hamilton']
        // plays.unshift('Wicked', 'Cats')  ///pridedame naujus elementus i masyvo pradzia
        // display.innerHTML = plays;

// .push() metodas -----------------------------------------------------------------------------------------------------------------------
/// prideda viena ar daugiau elementu i masyvo gala. Pakeicia originalu masyva, jo ilgi.

        // const display = document.querySelector('.display');

        // const plays = ['Hamilton']
        // plays.push('Wicked', 'Cats')  ///pridedame naujus elementus i masyvo gala.
        // display.innerHTML = plays;

// .slice() metodas -----------------------------------------------------------------------------------------------------------------
//metodas nekeicia originalaus masyvo, jis grazina nauja masyva, todel reikia ji ideti i nauja kintamaji, kad veiktu. Isima is seno masyvo nurodytus elementus pagal indeksus nurodytus prazios ir pabaigos ir grazina nauja masyva su tais isimtais elementais.
        // const display = document.querySelector('.display');

        // const plays = ['Hamilton', 'Wicked', 'Cats', 'Mona Liza', 'Mia']
        // //const newPlays = plays.slice(1, 4) //pazymiu pradzia nuo kurios reikia isimti elementus ir gala iki kur.
        // const newPlays = plays.slice(2)  //pazymiu tik pradzia nuo kurios reikia isismti elementus, jei nepazymiu galo, tada isims visus nuo tos prazios. visus elementus esancius gale.

        // display.innerHTML = newPlays;

// .splice() metodas --------------------------------------------------------------------------------------------------------------------------
// pakeicia originalu masyva istrinant senus elementus ir pridedant naujus elementus i ju vieta.

        const display = document.querySelector('.display');

        const plays = ['Hamilton', 'Wicked', 'Cats', 'Mona Liza', 'Mia']
        //plays.splice(1, 1)  ///parasau indeksa elemento, kuri noriu istrinti is originalaus masyvo. Pradzia ir gala, jei noriu istrinti tik viena, tada parasau ta indeksa du kartus. Jei kelis, tada pvz, 1, 3 pradzia vienas, galas trys.
        //plays.splice(1) //istrins is masyvo visus elementus nuo 1 indekso, liks tiks Hamilton
        //plays.splice(1, 3) //istrins elementus nuo pirmo iki 3 indekso, liks hamilton 0 indekso elementas ir Mia ketvirto indekso elementas.
        //plays.splice(1,1, 'Mulan') //istrinu pirmo indekso elementa Wicked, vietoj jo irasau nauja reiksme "Mulan"
        //plays.splice(1, 3, 'Bla', 'La', '2') //istrinu elementus nuo 1 iki 3 indekso, vietoj ju irasau naujas reiksmes.

        plays.splice(1, 0, 'Hook') //sitame variante as nieko neistrinu, nurodau, nuo kurio elemento nieko neistrynusi,(antras skaicius nurodo kiek noriu istrinti elementu, ju kieki, jei 0 tada kiekio nera, reiskia as istrinti nieko nenoriu) noriu ideti nauja elementa 'Hook'
        //// taisykle: let splicedArray = array.splice(start, deleteCount, replacement)
        display.innerHTML = plays;

// .forEach() metodas, ciklas------------------------------------------------------------------------------------------------------------------------------
///aktyvuoja nurodyta funkcija viena karta kiekveinam elementui masyve.

        // const circles = document.querySelectorAll('.circles');   //istraukiu visus elementus, kuriu klase yra .circles
        // console.log(circles)  //matome tris apskritimus, node list masyve consolej. 
        // circles.forEach(item => item.style.backgroundColor = 'green')

        const names = ['Emilija', 'Vaidotas', 'Giedre', 'Jokubas', 'Zita']

        names.forEach(item => console.log(item))

        const numbers = [1, 2, 3, 4]

        numbers.forEach(number => {
            console.log(number + 1)
        })

// .some() metodas.-------------------------------------------------------------------------------------------------------------------------------------------
//ieskome ar nors vienas elementas masyve atitinka parasyta salyga. atsakymai true arba false.

        const scores = [23, 56, 76, 59]
        console.log(scores.some(item => item > 50))  //suranda masyve ar yra skaicius nors vienas, kuris yra didesnis nei 50, atsakymas true, arba false. siuo atveju true, nes masyve yra keli skaiciai didesni uz 50.

        const countries = ['Lithuania', 'Latvia', 'Poland', 'South America']
        console.log(countries.some(country => country === 'Poland'))  //randame ar masyve yra salis Poland, atsakymas true, nes yra.

        //--

        const hearts = Array.from(document.querySelectorAll('.heart'))  //padarome masyva is sirdeliu node listo, Array.from() metodo pagalba.
        console.log(hearts)  //gaunu nodes list sirdeliu consolej. Masyvas.
        const isHeartBroken = hearts.some(heart => heart.hasChildNodes())  //patikriname ar tame masyve yra heart divas turintis savyje kita diva (dot), tikriname su hasChildNode() irankiu, kuris iesko Node masyve.
        console.log(isHeartBroken)  //atsakymas true, nes viename is sirdeliu divu yra kitas child elementas - dot divas.

// .map metodas-ciklas ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// sukuria nauja masyva, tuo skiriasi nuo forEach metodo. Kiekvienam masyvo elementui pritaiko nurodyta funkcija ar veiksma ir sukuria nauja masyva.

        const ages = [21, 45, 56, 32, 45, 2]
        const newAges = ages.map(age => age + 3)  //sukuriame nauja masyva, kuriame prie visu seniau esanciu masyvo skaiciu pridedama po 3
        console.log(newAges)

        //--

        const housmates = [
            {
              name: 'Ahmed',
              age: 24
            },
            {
              name: 'Ellen',
              age: 45
            },
            {
              name: 'Jon',
              age: 24 
            }
        ]

        const housmatesAfterDecade = housmates.map(object => object.age + 10)
        console.log(housmatesAfterDecade)

        //--

/// .filter() metodas ---------------------------------------------------------------------------------------------------------------------------
//metodas sukuria nauja masyva, nekeicia senojo, reikia deti i nauja kintamaji.

        // const shows = ['Lupin', 'Cobra Kai', '24', 'Mr.Robot']
        // const showsWithMoreThenFiveLetters = shows.filter((word) => word.length > 5) //imam masyva, filtruoja, imam atskira itema masyve, tikrinam jo ilgi, jei salyga atitinka, naujame masyve, naujoje konstantoje visi tie zodziai ir atsiranda.
        // console.log(showsWithMoreThenFiveLetters)
        // const pinkDisplay = document.querySelector('.pink')
        // pinkDisplay.innerHTML = showsWithMoreThenFiveLetters

        //--

        // const shows = [
        //         {
        //                 name: 'Lupin',
        //                 series: 1,
        //                 episodes: 5
        //         },
        //         {
        //                 name: 'Cobra Kai',
        //                 series: 3,
        //                 episodes: 20
        //         },
        //         {
        //                 name: '24',
        //                 series: 5,
        //                 episodes: 50
        //         },
        //         {
        //                 name: 'Mr.Robot',
        //                 series: 3,
        //                 episodes: 24
        //         }
        // ]

        // const pinkDisplay = document.querySelector('.pink')

        // const filteredShows = shows.filter((show) => show.episodes <= 20)

        // console.log(filteredShows)

        // //pinkDisplay.innerHTML = stringify(filteredShows);  //nezinau, kaip normaliai iskelti i html

// .reduce() metodas -----------------------------------------------------------------------------------------------------------------------------------------------
//sudeda masyve esancius skaicius.

        const days = [23, 57, 1]

        /////days.reduce((accumulator, currentValue) => accumulator + currentValue)   // cia reduce funkcijos sintakse

        const total = days.reduce((a, b) => a + b)
        console.log(total)

// .every() metodas --------------------------------------------------------------------------------------------------------------------------------------------------------------------
// nustato ar kiekvienas itemas masyve atitinka numatyta salyga funkcijoje. Grazina booliena, true arba false.

      const values = [1, 5, 7, 15] 
      const values1 = values.every((value) => value > 10)
      console.log(values1)   //grazina false, nes ne visi yra daugiau uz 10.

        //--

      const animals = ['cat', 'dog', 'rat', 'mouse']
      const isThreeLetterAnimals = animals.every((animal) => animal.length === 3)
      console.log(isThreeLetterAnimals) // gausime false, nes ne visu zodziu ilgis masyve yra lygus 3;

// .split metodas ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// padalina stringa i numatyta eile stringu. ir juos patalpina i masyva. grazina masyva.

        const sentence = 'I will have what she is having'

        const words = sentence.split(' ')  //padalina stringa per tarpus, kur yra tarpas, ten stringas yra kertamas.
        console.log(words)  //gauname masyva su atskirais zodziais
        console.log(words[0])  //dabar galiu rasti ataskirus zodzius masyve, pagal indeksa.

        const letters = sentence.split('') //viska issplitino raidemis, tarpai, taip pat pateko i masyva
        console.log(letters)
        console.log(letters[3]) //galiu rasti viena atskira raide masyva, pagal indeksa.

        //--

        const anotherSentence = 'Common baby light my fire'; //istraukti trecia stringo zodi (uzduotis)
        const anotherSentenceWords = anotherSentence.split(' ')[2]
        console.log(anotherSentenceWords)

// DATE ---------------------------------------------------------------------------------------------------------------------------------

  const displayForDate = document.querySelector('.date-place')

        const today = new Date()  //rodo visa sios dienos datos informacija

        const dayOfMonth = today.getDate() //gauname kokia siandien diena, istraukiame is today constantos tik menesio diena kokia dabar yra
        const dayOfWeek = today.getDay() //gauname skaiciu, kokia yra savates diena dabar
        const year = today.getFullYear() //gauname tik metus
        const hours = today.getHours() 
        const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()

        const isoString = today.toISOString()  //supaprastintas iso datos formatas
        console.log(isoString)
        
        console.log(today)
        console.log(dayOfMonth)
        console.log(dayOfWeek)
        console.log(year)
        console.log(hours)
        console.log(time)

  //// count down to next Christmas-----------

        const christmas = new Date('2022-12-24T11:13:08.010Z')  //nustatau kaledu laika, iki kada bus skaiciuojama, nusikopijavau iso sios dienos formata ir pakeiciau i 12 men 24 d.

        const milisecondToChristmas = christmas - today; // is christmas kintamojo atimu today kintamaji, gainame skirtuma milisekundemis

        const minutesToChristmas = milisecondToChristmas / 60000; // gauname minutes iki kaledu;
        console.log(minutesToChristmas)

  displayForDate.innerHTML = Math.round(minutesToChristmas); // jei be Math.round rasome, tai gaunasi labai ilgas skaicius, nes daug skaiciu po kablelio, todel suapvalinam iki sveiko skaiciaus.

  // TIMERS //---------------------------------------------------------------------------------------------------------------------------------

      // setTimeout() ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      // setTimeout(function, milliseconds)  // sintakse

        const bubble = document.querySelector('.bubble')

        const timeForTimeout = 3000;  // noresiu, kad tekstas atsirastu po 3 sekundziu, kadangi i setTimeout rasosi milisekundes, tai 3 sekundes bus 3000 milisekundziu.

        function showBubble() {         
         bubble.innerHTML = 'All good!'
      }

       setTimeout(showBubble, timeForTimeout)  //nurodytas uzrasas pasirodo po 3 sekundziu.

//       function deleteText() {
//         bubble.innerHTML = ''   //po 10 sekundziu bubble viduje bus tuscias stringas, nebus nieko.
//       }

//       setTimeout(deleteText, 10000)

      setTimeout(() => {bubble.innerHTML = ''}, 10000)  //uzrasiau uzraso istrynimo funkcija i viena eilute.

      setTimeout(() => {bubble.style.display = 'none'}, 15000)   //po 15 sekundziu dingsta visas html elementas.

///// SET INTERVAL //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     // setInterval(function, milliseconds)   // sintakse

//      const bubble2 = document.querySelector('.bubble2');
//      const text = 'Alert!';
//      const actionTime = 2000;

//      function ShowAlert() {
//         const textDisplay = document.createElement('div')   //sukuriu nauja div elementa
//         textDisplay.innerHTML = text;                      //div elementui prsikiriu texta
//         bubble2.appendChild(textDisplay); //div elementa su textu idedu i jau css sukurto bubble2 elemento vidu
        
//      }

//      setInterval(ShowAlert, actionTime)    //nustatau intervala, kad kas 2 sekundes aktyvuotu funcija. atsiranda vis naujas divas kas dvi sekundes bubble2 elemente.


// uzduotis: kas penkias sekundes turi atsirasti mano vardas ekrane.----------------------------------------------------------

        const bubble2 = document.querySelector('.bubble2');
        let countName = 0;
        function showMyName() {
                const myName = document.createElement('span')  //sukuriu nauja elementa span
                myName.textContent = ' Giedre'                 //jam priskiriu teksta
                bubble2.appendChild(myName)                    //nauja elementa priskiriu jau esanciam elementui
                countName = countName + 1
                if (countName === 5) {
                        clearInterval(printMyName)
                }
               

                
        }

        const printMyName = setInterval(showMyName, 2000)          //nustatau intervala, kad kvietu funkcija kas 5 sekundes
        
        //--CLEAR INTERVAL /////------
        //clearInterval()

        //-- uzduotis: rutuliukas ekrane turi pajudeti i desine 10 kartu ir sustoti.

// const figure = document.querySelector('.cc')
// const intervalId = setInterval(moveFigure, 1000)
// count = 0;
// function moveFigure() {
//         if (count === 400) {
//                 clearInterval(intervalId)
//         } else{
//                 count = count + 40
//                 figure.style.left = count + 'px'
//         }
       
// }

const figure = document.querySelector('.cc')

let leftMove = 0;
function moveFigure() {
  leftMove = leftMove + 40     
  figure.style.left = leftMove + 'px'
    if (leftMove === 400) {
        clearInterval(intervalId)
    }
}

const intervalId = setInterval(moveFigure, 1000)
 















      










       




        

        
        
















 




































