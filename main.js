 const allNumbers = document.querySelectorAll("input");
const showInfo = document.getElementById("showInfo");
let newArray = [];

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

  const isValid = checkSum % 10 == 0 ? true: false;
  console.log(isValid);

  if (isValid === true) {
    showInfo.classList.contains('invalid') ? showInfo.classList.remove("invalid") : false
    showInfo.classList.add("valid");
    showInfo.innerHTML = "Your card is valid";
  } else {
    showInfo.classList.add("invalid");
    showInfo.innerHTML = "Your card is not valid";
    
  }

  newArray = [];



  
};


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



// validations



const getValue = (event) => {
 event.preventDefault();
 
  const allNumbersArray = Array.from(allNumbers);
 let error = false; 

  allNumbersArray
    .map((el) => {
      
      if(el.value.length < 1){
        error = true;
        showInfo.classList.add("invalid")
         console.log("You must fulfill all fields!");
        return showInfo.innerHTML = "You must fulfill all fields!";
        
        console.log(error);
        
      }
      else if(isNaN(el.value)){
        error = true;
        showInfo.classList.add("invalid")
         console.log("Each field must be a number!");
        return showInfo.innerHTML = "Each field must be a number!";
      
       console.log(error);
        
      }
      else{
        return el.value;
        
      }
     
    })
    .map((el) => Number(el))
    .map((el) => newArray.push(el))
    
  if (error){
    newArray = [];
    error = false;
  } else {
    validateCard(newArray);
  }
  


    //4596 5480 0916 8709
    console.log(newArray);
    
    
    // clear form
    document.forms[0].reset();
    
  
};


document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("getNumbers").addEventListener("click", getValue);

  
});




