
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
    // example: gerWords(['Florida', 'Dog', 'phone'], 5) => ['Florida', 'phone']

    function getWords() {
        
    }

       

     



            
