const newForm = document.querySelector(".form");
const input = document.querySelectorAll(".input");
const btn = document.querySelector(".form .btn");
const label = document.querySelectorAll(".label");
const yearSpan = document.querySelector('#year-span');
const monthSpan = document.querySelector('#month-span');
const daySpan = document.querySelector('#day-span');


//TARGETTING THE FORM 
newForm.addEventListener("submit", (e) => {
  e.preventDefault();
// the values in the inputs: day, month and year.
  let day = newForm.querySelector("#day").value;
  let month = newForm.querySelector("#month").value;
  let year = newForm.querySelector("#year").value;
  let arr = [day,month,year]
  let str =  arr.join("-");

  
//     if(day === "" || month ==="" || year === ""){
//         return;
//         // input.forEach(input =>{
//         //     if(input===""){
//         //         input.classList.add("input-error");
//         //     } else{
//         //         input.classList.remove("input-error");
//         //     }
//         // })
//        }
        
//   })
 


//THE DATING PART OF IT.

//THE CURRENT DATE, MONTH AND YEAR
let present = new Date();

//CURRENT DATE
    let dr = present.getDate();

    //FUNCTION TO RETURN THE VALUE WHEN THE DATE IS LESS THAN OR GREATER THAN THE CURRENT DATE
 let dre = function madDay(){
    if(dr > day){
     return  dr - day;
    }else{
       return day - dr;
    }
}
// CURRENT YEAR
let yy = present.getFullYear();

//CODE TO SUBTRACT THE CURRENT YEAR FROM THE YEAR INPUT VALUE
let coolYear = yy - year;


let reduction = coolYear-1;
//CURRENT MONTH
let mm = present.getMonth();
// CODE TO  RETURN THE VALUE WHEN THE MONTH INPUTED IS GREATER OR LESS THAN THE CURRENT MONTH
let mma = function madMonth() {
  if((mm+1) > month){
      return  (mm+1) - month ;

     } else{
      return (12-month) + Number(mm+1);
     }
}


// code to put all the final values into arrays(not really nececarry)
let arr2 = [coolYear,mma(),dre()];

//code to put all of then in strings
let str2 = arr2.join("-");
console.log(str2);


//CODE TO CHANGE THE TEXT OF THE DASHES TO THE FINAL VALUES OF THE DIFFERENT INPUTS
yearSpan.innerText = coolYear;

monthSpan.innerText = mma();

daySpan.innerText = dre();

})

btn.addEventListener('click', (e)=>{
      
    if(day === "" || month ==="" || year === ""){
        return;
        // input.forEach(input =>{
        //     if(input===""){
        //         input.classList.add("input-error");
        //     } else{
        //         input.classList.remove("input-error");
        //     }
        // })
       }
        
  })
 
