
//// MATH ///////////////////////////////////////////////////

//------- MATH>RANDOM ---------------------------------------------------------------------------------

// Math.random()  // paduoda bet kokius skaicius, kurie yra tarp 0 ir maziau nei 1, vieno niekada nepasiekia.

//Math.random() * 20  //paduoda bet kokius skaicius iki 20, 20 nepasiekia. 0 to < 20
//Math.ceil()  //siapvalina skaiciu i aukstesne puse.
// Math.floor() // suapvalina skaicius i zemesni sveika skaiciu.

const Tetrominoes = ['LTetromino', 'ZTetromino', 'ITetromino']

const randomNumber = Math.random() * Tetrominoes.length    //norime, kad duotu random skaicius is masyvo, padauginus is ilgio. ilgis yra 3, tai bus paduodami skaiciai iki 3. triju niekada nepasieks.

const randomFloorNumber = Math.floor(randomNumber)  // ima skaicius random, kuriuos nurodem pagal masyvo ilgi ir juos suapvalina i zemesne puse iki sveiko skaiciaus 2. 

console.log(randomFloorNumber)  //random indeksas pagal masyvo ilgi

console.log(Tetrominoes[randomFloorNumber])  //randame random stringa masyve, kuri randa pagal pries tai sukodinta random indeksa.

///-------------------------------------------------------------------------------------------------------------------------
// rasti random gerimus is masyvo 

const drinksMenu = ['Vodka Tonic', 'White Wine', 'Beer', 'Mocktail'];

const randInteger = Math.random() * drinksMenu.length;
const roundFloorInteger = Math.floor(randInteger)
const randomDrink = drinksMenu[roundFloorInteger]
console.log(randomDrink)

// tas pats kas auksciau, bet uzrasyta vienoje eiluteje.
console.log(drinksMenu[Math.floor(Math.random() * drinksMenu.length)])









