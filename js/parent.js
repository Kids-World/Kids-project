'use strict';
console.log('Hello');


let ageForm=document.getElementById('ageForm');
ageForm.addEventListener('submit',submitter);

function submitter(event){
  event.preventDefault();
  let lowAge=document.getElementById('lowAge');
  let highAge=document.getElementById('highAge');
  let age=event.target.kidAge.value;
  console.log(age);
  lowAge.style.display='none';
  highAge.style.display='none';
  if (age <= 7 && age > 2) {
    lowAge.style.display='block';
  }else if (age <= 12 && age > 7) {
    highAge.style.display='block';
  }

}

