
//// ARRAY WORK ---------------------------------------------------------------------------------------------------

// UZDUOTYS /////////

// 1. Using .map() write a function that convert farenheit to celcius.---------------------------------------------
      // example: ([23, 140, 212, 41]) => [-5, 60, 100, 5]

     // 1.1 variantas
    
        // const farenheit = [23, 140, 212, 41]
        // function getCelcius() {
        // const celcius = farenheit.map(f => (f - 32) * 5 / 9)
        // console.log(celcius)
        // }
        // getCelcius()

    //1.2 variantas

        // const farenheit = [23, 140, 212, 41];
        // let celcius;
        //     function getCelcius() {
        //     celcius = farenheit.map(f => (f - 32) * 5 / 9)
        //     };
        //     getCelcius();
        //     console.log(celcius);

    // 1.3 variantas
    
          const farenheit = [23, 140, 212, 41];
       
            function getCelcius() {
            return farenheit.map(f => (f - 32) * 5 / 9)
            };
       
            console.log(getCelcius())

// 2. Using some() write a function that checks an array for 'falsey' value.---------------------------------------------------
  //example: chechForFalsey([11, NaN, [], {'Angels'}] => true)

  // 2.1 variantas  // ne tokia uzduotis.

        // const arrayMix = [11, NaN, [], {name: 'Angels'}]
        // function chechForFalsey() {
        //     console.log(arrayMix.some(item => item < 10))
        // }
        // chechForFalsey()

 // 2.2 variantas // teisingas sprendimas

        const arrayMix = [11, NaN, [], {name: 'Angels'}]
        function chechForFalsey() {
          return arrayMix.some(item => !item)   //randame ar nors vienas itemas masyve yra folsey item priesingas !item, NoN yra savaime falsey, ji randa, todet it is true, bent vienas yra falsey. gauname true. 
        }
        chechForFalsey()
        console.log(chechForFalsey())

// 3. Using reduce() write a function that will return the total number or characters in an array of strings.-------------------------------------------------------------------------------------------------------------------
     // example: getTotal() => 22;

    //3.1 variantas

    //  const arrayOfWords = ['Rabbit', 'Football', 'Cracking'];
    
    //  function getTotal() {
    //     return arrayOfWords.reduce((a,b) => a + b).length
    //  }

    //  console.log(getTotal())

     //3.2 variantas

     const arrayOfWords = ['Rabbit', 'Football', 'Cracking'];
    
     function getTotal() {
        return arrayOfWords.reduce((total, word) => total + word.length, 0)  //gale butinai dedamas nulis, reikia pazymeti nuo kurio indekso skaiciuosime
     }

     console.log(getTotal())

// 4. Using every() write a function that checks whether every number in an array is a square number. -------------------------------------------------------------------
     // example: checkSqyares([9, 16, 81]) => true
     
     const arrayOfNumbers = [ 9, 16, 81]
     function checkSqyares() {
        return arrayOfNumbers.every(number => Math.sqrt(number) % 1 === 0)
     }

     console.log(checkSqyares())

// 5. Using an array method, write a function that returns the string elements of an array that have a given length or larger.------------------------------------------------
    // example: getWords(['Florida', 'Dog', 'phone'], 5) => ['Florida', 'phone']

    /// 5.1 variantas ///

            const words = ['Florida', 'Dog', 'phone']
            const number = 5;
            function getWords() {
                return words.filter((word) => word.length >= number)
            }

            console.log(getWords())

    // 5.2 variantas su parametrais ///

            function findWords(array,  number) {
                return array.filter((word) => word.length > number)
            }

            console.log(findWords(['book', 'nose', 'Berlin'], 4))
            console.log(findWords(['coconut', 'fig', 'banana'], 3))
            console.log(findWords(['dron', 'dragon', 'girl'], 5))

// 6. Using an array method, write a function that converts an array of cm values as strings, into an array of numbers.
    // example: getValues(['23cm', '5.6cm', '1000cm']) => [23, 5.6, 1000]

        //6.1 ///

            const values = ['23cm', '5.6cm', '1000cm']

            function getValues() {
                return values.map((value) => parseFloat(value))
            }

            console.log(getValues())

        //6.2 //variantas su parametrais

            function valuesCm(array) {
                return array.map((value) => parseFloat(value))
            }

            console.log(valuesCm(['25dg', '478.2kkk', '24jjj']))

// 7. Using split and filter write a function that counts the number of vowels in a sentence.
        //example: getVowelCount () => 12

        //7.1////

            let string1 = 'In West Philadelphia, born and raised';

            function  getVowelCount() {
                const vowels = ['a', 'e', 'i', 'o', 'u']
                return string1.toLocaleLowerCase().split("").filter((letter) => vowels.includes(letter)).length
            }

            console.log(getVowelCount())

        //7.2 /// su parametru variantas.

            function  getVowel(string) {
                const vowels = ['a', 'e', 'i', 'o', 'u']
                return string.toLocaleLowerCase().split("").filter((letter) => vowels.includes(letter)).length
            }

            console.log(getVowel('In West Philadelphia, born and raised'))

        //7.3 // veverciant visko i mazasias, o sudedant ir didziasias i balsiu masyva.

            const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

            function  getVowel2(string) {
            return string.split("").filter((letter) => vowels.includes(letter)).length
            }

            console.log(getVowel2('In West Philadelphia, born and raised'))

// 8. Use 'split', 'map', 'join', write a function that capitalises the first letter of each word in a sentence.
    // example: capitalise('the queens gambit') => 'The Queens Gambit'  
    
      // 8.1 variantas //

            const sentence = 'the queens gambit';

            function capitalise() {
                return sentence.split(' ').map((word) => word.charAt(0).toLocaleUpperCase() + word.slice(1)).join(' ')
            }

            console.log(capitalise())

     // 8.2 variantas su parametru.//

        function capitalise2(sentence) {
            return sentence.split(' ').map((word) => word.charAt(0).toLocaleUpperCase() + word.slice(1)).join(' ')
        }

        console.log(capitalise2('the queens gambit'))

    // 8.3 // panaudotas naujas metodas substr() metodas istraukia dali stringo, reikia nurodyti nuo kurios pozicijos reikia istraukti dali stringo
    //What is substr () in JavaScript?
    //The substr() method extracts a part of a string. The substr() method begins at a specified position, and returns a specified number of characters. The substr() method does not change the original string. To extract characters from the end of the string, use a negative start position.

            
        function capitalise3(sentence) {
            return sentence.split(' ').map((word) => word.charAt(0).toLocaleUpperCase() + word.substr(1)).join(' ')
        }

        console.log(capitalise3('the queens gambit'))


        ///////////////////////////////////////////// substring()  pratimas///////////// tas pats kas substr()

       const plays = ['Hamilton', 'Wicked', 'Cats', 'Mona Liza', 'Mia']
       
        const newPlays = () => {
           return plays.map(play => play.substring(2) + play.substring(0, 2))
        }  

        console.log(newPlays())
            

            

     



            
