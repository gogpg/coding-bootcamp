
/// .sort()  //nesukuria naujo masyvo, tik pakeicia vietas, surusiuoja jau esancius elementus, pakeicia ju buvimo vieta.

const planets = ['Mars', 'Jupiter', 'Uranus', 'Earth', 'Moon']
console.log(planets.sort())  //pagal default rusiuoja pagal alfabeta.

const ages = [10, 99, 100, 35, 44]
console.log(ages)
// console.log(ages.sort())  //sitaip isrusiuoja neteisingai
//  console.log(ages.sort((a,b)=> a-b))  //sitaip isrusiuoja numerius teisingai

const newNumbers = [...ages].sort((a,b)=> a-b) //jeigu noriu naujo arejaus su surusiuotais elementais, reikia naudoti nauja kintamaji ir spred operatoriu.
console.log(newNumbers)
console.log(ages)






