const birthDate = document.querySelector("#bdate");
const luckyNumber = document.querySelector("#luckyno");
const checkBtn = document.querySelector("#checkbtn");
const output = document.querySelector(".output");

checkBtn.addEventListener("click", checkBirthDateIsLucky);
console.log("Not storing any data");

function checkBirthDateIsLucky() {
  const dob = birthDate.value;
  const sum = calculateSum(dob);
  
  const luckyNo = luckyNumber.value;
  
  if((sum%luckyNo) == 0){
    output.innerHTML = "Your birthday is luckyy.Yayy!";
  }else{
    output.innerHTML = "Oops, Your birthday is not lucky"
  }
  
}

function calculateSum(date) {
  date = date.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < date.length; index++) {
    sum = sum + Number(date.charAt(index));
    
  }
  return sum;
}
