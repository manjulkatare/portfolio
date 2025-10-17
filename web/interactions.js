function myFunction(x) {
  x.classList.toggle("change");
}

// KeyBoard clicked Position
let xPos;
let yPos;

let navOptions = document.getElementById("navOptions");
let menuSwitch = document.getElementById("menuSwitch");

// For type writer effect
let typeWriterText;
let typeWriterCount = 0;

// work experience
let workAtApple = document.getElementById("workAtApple");
let workAtGoogle = document.getElementById("workAtGoogle");
let workAtMicrosoft = document.getElementById("workAtMicrosoft");
let workAtEbay = document.getElementById("workAtEbay");
let workAtServiceNow = document.getElementById("workAtServiceNow");

menuSwitch.addEventListener('click',function(){
  if(!this.classList.contains('change')){
    navOptions.style.width = '0%';
  }
  else {
    navOptions.style.width = '100%';
  }
});

function clickedElement(element){
  typeWriterCount = 0;
  workTitle.innerHTML ="";
  for (let workSummary of document.querySelectorAll('.workSummary')) workSummary.style.cssText = "visibility: hidden;animation:none";
  var rec = document.getElementById(element).getBoundingClientRect();
  let setStyles = "visibility:visible; top:" + (rec.top - 30) +"px;left:" + rec.left +"px;animation: fadeIn 1s";

  if (element === "apple") {
    workAtApple.style.cssText = setStyles;
    typeWriterText = 'Work at Apple Inc.';
    typeWriter();
  }
  if (element === "google") {
    workAtGoogle.style.cssText = setStyles;
    typeWriterText = 'Work at Google';
    typeWriter();
  }
  if (element === "microsoft") {
    workAtMicrosoft.style.cssText = setStyles;
    typeWriterText = 'Work at Microsoft';
    typeWriter();
  }
  if (element === "ebay") {
    workAtEbay.style.cssText = setStyles;
    typeWriterText = 'Work at eBay';
    typeWriter();
  }
  if (element === "servicenow") {
    workAtServiceNow.style.cssText = setStyles;
    typeWriterText = 'Work at ServiceNow Inc.';
    typeWriter();
  }
}

function typeWriter() {
  if (typeWriterCount < typeWriterText.length) {
    typeWriterTextHolder.innerHTML += typeWriterText.charAt(typeWriterCount);
    typeWriterCount++;
    setTimeout(typeWriter, 50);
  }
}

function greetUser(){
  let greetText;
  let myDate = new Date();
  let myHour = myDate.getHours();
  if(myHour <=12 ){ greetText =  'MORNING' }
  if(myHour > 12 && myHour <= 18 ){ greetText = 'AFTERNOON' }
  if(myHour > 18 && myHour <= 24 ){ greetText = 'EVENING' }

  let timeHolder = document.getElementById('timeOfTheDay');
  timeHolder.innerText = greetText;
}

