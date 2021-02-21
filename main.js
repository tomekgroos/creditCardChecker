

const validateCard = (arr) => {
  let arrCopy = arr.slice();
  arrCopy.reverse();
  let evenSum = 0;
  let oddSum = 0;
  let checkSum = 0;

  for (i = 1; i < arrCopy.length; i += 2) {
    let double = arrCopy[i] * 2;

    if (double > 9) {
      double -= 9;
    } else {
      double;
    }
    evenSum += double;
  }

  for (i = 0; i < arrCopy.length; i += 2) {
    let odd = arrCopy[i];

    oddSum += odd;
  }

  checkSum = evenSum + oddSum;

  const isValid = checkSum % 10 == 0 ? "card is valid" : "card is not valid";

  return isValid;
  
};

/* validateCard(valid1);
validateCard(invalid1); 

let cardCounter = 0; */

/* batch.forEach((card) => {
  cardCounter++; 

 console.log(`Validation for the ${cardCounter} card: ${validateCard(card)}`)
});  */

// jump to the next number

const jumpNext = (box, nextBox) => {
  let boxLength = box.value.length;
  let maxLength = box.getAttribute("maxlength");
  if (boxLength == maxLength) {
    document.getElementById(nextBox).focus();
  }
};

// jump to previous number after erase

const backSpace = (field, prevField) => {
  window.addEventListener("keydown", (e) => {
    if (e.keyCode === 8) {
      let fieldLength = field.value.length;
      let fieldMaxLength = field.getAttribute("maxlength");
      if (fieldLength < fieldMaxLength) {
        document.getElementById(prevField).focus();
      }
    }
  });
};

// move numbers into array

let newArray = [];

// validations



const getValue = (event) => {
  const allNumbers = document.querySelectorAll("input");

  

  const allNumbersArray = Array.from(allNumbers);
  event.preventDefault();

  allNumbersArray
    .map((el) => {
      if(el.value.length < 1){
        console.log("field cannot be empty!");
        return;
      }else{
        return el.value;
      }
     
    })
    .map((el) => Number(el))
    .map((el) => newArray.push(el));

    console.log(newArray);
    console.log(validateCard(newArray));
    
    // clear fields
    allNumbers.forEach(el =>{
      el.value = "";
    })

};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("getNumbers").addEventListener("click", getValue);
  
});




