


// count how many spaces are there in the sentence




function calcSpacesInSentence(){
const sentence = "Hello world"

const spaceCount = (sentence.split(" ").length - 1);

console.log(spaceCount)
}

calcSpacesInSentence()


// make switch case for week days
function getTodayDate(){
const date = new Date().getDay()
let day;

switch (date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log(`Today is ${day}`)
}


getTodayDate()




// make a function that finds name list that starts with first letter and sorts it by first letter

const names = [
      "Mantas",
      "Paulius",
      "Simas",
      "Andrius",

]


function sortByName(){
names.map(name => {
 const getFirstChars = name.charAt()
console.log(getFirstChars)
})
}

sortByName()




// names.map(name => {
//  const getFirstChars = name.charAt()

// })

// Surasti is tvarkarascio duomenys kaip kitm tvarkarastis
// Ir respond the data

