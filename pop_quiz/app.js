
//  POP ////////.pop() function removes last element from Array and returns array without the last element. It changes the length of the array. It will not create new array, just change it.

const display = document.querySelector('.display')

/*const movies = [
    {
        name: 'Argo',
        length: '136'
    },
    {
        name: 'Aliens',
        length: '201'
    },
    {
        name: 'Fear',
        length: '124'
    }
]

console.log(movies)
movies.pop()
console.log(movies)
//movies.pop()  // is movies masyvo isimu paskutini elementa, todel apacioje irasius movies i displeju, lieka tik du elementai be paskutinio
display.innerHTML = movies  ///atsiranda masyvo tekstas viduje displejaus ir matomas*/


//////// SHIFT .shift() removes the first element from the array, this method changes the length of an array.


/*const movies = [ 'Argo', 'Terminator', 'Matrix']
console.log(movies)
movies.shift()
display.innerHTML = movies
console.log(movies)*/


// UNSHIFT .unshift() method adds one or more elements to the begining of an array. this will thange the length of an array.


/*const plays = ['Hamilton']
plays.unshift('Wicked', 'Cats') //pridedame dar du elementus i originalu masyva, elementai pridedami priekyje.
display.innerHTML = plays*/


/// PUSH .push() method. add one or more elements to the end of an array.


const plays = ['Hamilton']   
plays.push('Wicked', 'Cats')   //pridedame dar du elementus i originalu masyva, elementai pridedami gale.
display.innerHTML = plays








