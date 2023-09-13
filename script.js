const newForm = document.querySelector(".form");
const input = document.querySelectorAll(".input");
const btn = document.querySelector(".form .btn");
const label = document.querySelectorAll(".label");
const yearSpan = document.querySelector("#year-span");
const monthSpan = document.querySelector("#month-span");
const daySpan = document.querySelector("#day-span");
const para = document.querySelectorAll(".error-message");
const newPara = document.querySelectorAll(".new-error");
const softDay = document.querySelector(".dd");
const lad = document.querySelector(".lad");
const guy = document.querySelector(".guy");
const softMonth = document.querySelector(".mt");
const lam = document.querySelector(".lam");
const girl = document.querySelector(".girl");
const lay = document.querySelector(".lay");
const softYear = document.querySelector(".yyy");
const grill = document.querySelector(".grill")
console.log(lay);
console.log(softYear);
console.log(grill);


//TARGETTING THE FORM
newForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // the values in the inputs: day, month and year.
  let day = parseInt(newForm.querySelector("#day").value);
  let month = parseInt(newForm.querySelector("#month").value);
  let year = parseInt(newForm.querySelector("#year").value);
//ERRORS

//EMPTY INPUTS
  let hasEmptyInput = false;

  input.forEach((input, index) => {
    if (input.value === "") {
      hasEmptyInput = true;
      input.classList.add("input-error");
      label[index].classList.add("label2");
      para[index].classList.add("error-message2");
    } else {
      input.classList.remove("input-error");
      label[index].classList.remove("label2");
      para[index].classList.remove("error-message2");
    }
  });



  if (hasEmptyInput) {
    return;
  }

  
 //THE DATING PART OF IT.

  //THE CURRENT DATE, MONTH AND YEAR
  let present = new Date();

  //CURRENT DATE
  let dr = present.getDate();
  let mm = present.getMonth();
  let yy = present.getFullYear();







  
  //FUNCTION TO RETURN THE VALUE WHEN THE DATE IS LESS THAN OR GREATER THAN THE CURRENT DATE
  // let dre = function madDay() {
  //   if ((dr > day) || {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  let dre = function madDay() {
    if (dr > day) {
      return dr - day;
    } else {
      return day - dr;
    }
  };

 
  // CURRENT YEAR
  

  let hasHighDay = false;
  let hasHighMonth = false;
  let hasHighYear = false;

  if (( day < 1 || day > 31)|| (month < 1 || month > 12) || year > yy) {
    hasHighDay = true;
    hasHighMonth = true;
    hasHighYear = true;
    if (day > 31) {
      softDay.classList.add("input-error");
      lad.classList.add("label2");
      guy.classList.add("new-error2");
    }
    if(day<1){
      softDay.classList.add("input-error");
      lad.classList.add("label2");
      guy.classList.add("new-error2");
    }
    

    if (month > 12) {
      softMonth.classList.add("input-error");
      lam.classList.add("label2");
      girl.classList.add("new-error2");
    }
    if(month< 1){
      softMonth.classList.add("input-error");
      lam.classList.add("label2");
      girl.classList.add("new-error2");
    }
    if(year > yy){
      softYear.classList.add("input-error");
      lay.classList.add("label2");
      grill.classList.add("new-error2");
    }

  } else {
    softDay.classList.remove("input-error");
    lad.classList.remove("label2");
    guy.classList.remove("new-error2");
    softMonth.classList.remove("input-error");
    lam.classList.remove("label2");
    girl.classList.remove("new-error2");
    softYear.classList.remove("input-error");
    lay.classList.remove("label2");
    grill.classList.remove("new-error2");
  }


  if (hasHighDay || hasHighMonth || hasHighYear) {
    return;
  }

  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    // It's a leap year, so February (month 2) can have 29 days.
    if (month === 2 && day > 29) {
      softDay.classList.add("input-error");
      lad.classList.add("label2");
      guy.classList.add("new-error2");
      return;
    }
  }else {
    // It's not a leap year, so February (month 2) can have at most 28 days.
    if (month === 2 && day > 28) {
      softDay.classList.add("input-error");
      lad.classList.add("label2");
      guy.classList.add("new-error2");
      return;
    }
  }

let highOtherMonths = false;
if( ([4, 6, 9, 11].includes(month) && day > 30)){
  highOtherMonths = true;
  softDay.classList.add("input-error");
    lad.classList.add("label2");
    guy.classList.add("new-error2");
  }else{
    softDay.classList.remove("input-error");
    lad.classList.remove("label2");
    guy.classList.remove("new-error2");
  }
  if(highOtherMonths){
    return;
  }

  

  
  //CODE TO SUBTRACT THE CURRENT YEAR FROM THE YEAR INPUT VALUE
  let coolYear = yy - year;

  let reduction = coolYear - 1;
  //CURRENT MONTH
 
  // CODE TO  RETURN THE VALUE WHEN THE MONTH INPUTED IS GREATER OR LESS THAN THE CURRENT MONTH
  let mma = function madMonth() {
    if (mm + 1 < month) {
      coolYear = coolYear - 1;
    }

    if (mm + 1 == month) {
      document.getElementById("month-div").style.display = "none";
    } else {
      document.getElementById("month-div").style.display = "block";
    }

    if (mm + 1 > month) {
      return mm + 1 - month;
    } else {
      return 12 - month + (mm + 1);
    }
  };

  // code to put all the final values into arrays(not really nececarry)
  let arr2 = [coolYear, mma(), dre()];

  //code to put all of then in strings
  let str2 = arr2.join("-");
  console.log(str2);

  //CODE TO CHANGE THE TEXT OF THE DASHES TO THE FINAL VALUES OF THE DIFFERENT INPUTS
  yearSpan.innerText = coolYear;

  monthSpan.innerText = mma();

  daySpan.innerText = dre();
});
