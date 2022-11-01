
// classes // naudojamos objektams sukurti

// class declaration

class Rectangle {       //sukuriant klase, priskiriamas jai vardas, rasosi is didziosios raides.
    constructor(height, width)  {    // konstruktorius nurodo, is ko susidarys ta klase, tarsi planas, pagal kuri susidarys ta klase.
        this.height = height;
        this.width = width;
    }
}

const newRectangle = new Rectangle(300, 100)  //irasome parametru duomenis, aukscio ir plocio, kaip virsuje nurodeme.
console.log(newRectangle)

//--

class Ghost {
    constructor(className, speed, color, startingPoint) {
        this.className = className;
        this.speed = speed;
        this.color = color;
        this.startingPoint = startingPoint;

    }
}

const blinky = new Ghost('blinky', 300, 'red', 4)  //sukuriame naujus veikejus(vaiduoklius), pagal savybes nudytas auksciau esancioje claseje.
const inky = new Ghost('inky', 250, 'blue', 10)
const pinky = new Ghost('pinky', 350, 'pink', 20)
const clyde = new Ghost('clyde', 450, 'orange', 15)

console.log(blinky.speed)  //susirandame informacija kokios reikia is kiekvieno vaiduoklio.
console.log(clyde.startingPoint)
console.log(pinky)

//--

