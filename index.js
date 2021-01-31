function blue() {
  document.getElementById("pink").style.display = "none"; 
  document.getElementById("red").style.display = "none";
  document.getElementById("blue").style.display = "block";
  document.getElementById("black").style.display = "none";
  document.getElementById("purple").style.display = "none";
  document.getElementsByTagName("BODY")[0].style.backgroundImage = "url('images/blue.svg')";
  document.getElementsByClassName("heading")[0].style.color = "#565681";
  document.getElementById('btn1').style.backgroundColor ="#565681";
  document.getElementById('btn2').style.backgroundColor ="#565681";
  document.getElementById('btn3').style.backgroundColor ="#565681";
  document.getElementsByTagName("BODY")[0].style.backgroundColor="#f8edeb";
  document.getElementById("white").style.backgroundColor="#f8edeb";
  document.getElementById("white").style.color="#f8edeb";
  document.getElementsByClassName("para")[0].style.color = "#242220";
  document.querySelector(".select-color").style.color="#565681";
  document.querySelector(".features").style.color="#565681";
}
function red() {
  document.getElementById("pink").style.display = "none"; 
  document.getElementById("red").style.display = "block";
  document.getElementById("blue").style.display = "none";
  document.getElementById("black").style.display = "none";
  document.getElementById("purple").style.display = "none";
  document.getElementsByTagName("BODY")[0].style.backgroundImage = "url('images/red.svg')";
  document.getElementsByClassName("heading")[0].style.color = "#CA3D22";
  document.getElementById('btn1').style.backgroundColor ="#CA3D22";
  document.getElementById('btn2').style.backgroundColor ="#CA3D22";
  document.getElementById('btn3').style.backgroundColor ="#CA3D22";
  document.getElementsByTagName("BODY")[0].style.backgroundColor="#b2ff9e";
  document.getElementById("white").style.backgroundColor="#b2ff9e";
  document.getElementById("white").style.color="#b2ff9e";
  document.getElementsByClassName("para")[0].style.color = "#242220";
  document.querySelector(".select-color").style.color="#CA3D22";
  document.querySelector(".features").style.color="#CA3D22";
}
function pink() {
  document.getElementById("pink").style.display = "block"; 
  document.getElementById("red").style.display = "none";
  document.getElementById("blue").style.display = "none";
  document.getElementById("black").style.display = "none";
  document.getElementById("purple").style.display = "none";
  document.getElementsByTagName("BODY")[0].style.backgroundImage = "url('images/pink.svg')";
  document.getElementsByClassName("heading")[0].style.color = "#F59CA9";
  document.getElementById('btn1').style.backgroundColor ="#F59CA9";
  document.getElementById('btn2').style.backgroundColor ="#F59CA9";
  document.getElementById('btn3').style.backgroundColor ="#F59CA9";
  document.getElementsByTagName("BODY")[0].style.backgroundColor="#6c757d";
  document.getElementById("white").style.backgroundColor="#6c757d";
  document.getElementById("white").style.color="#6c757d";
  document.getElementsByClassName("para")[0].style.color = "white";
  document.querySelector(".select-color").style.color="#F59CA9";
  document.querySelector(".features").style.color="#F59CA9";
}

function purple() {
  document.getElementById("pink").style.display = "none"; 
  document.getElementById("red").style.display = "none";
  document.getElementById("blue").style.display = "none";
  document.getElementById("black").style.display = "none";
  document.getElementById("purple").style.display = "block";
  document.getElementsByTagName("BODY")[0].style.backgroundImage = "url('images/purple.svg')";
  document.getElementsByClassName("heading")[0].style.color = "#8A5362";
  document.getElementById('btn1').style.backgroundColor ="#8A5362";
  document.getElementById('btn2').style.backgroundColor ="#8A5362";
  document.getElementById('btn3').style.backgroundColor ="#8A5362";
  document.getElementsByTagName("BODY")[0].style.backgroundColor="#f8ad9d";
  document.getElementById("white").style.backgroundColor="#f8ad9d";
  document.getElementById("white").style.color="#f8ad9d";
  document.querySelector(".select-color").style.color="#8A5362";
  document.querySelector(".features").style.color="#8A5362";
  document.getElementsByClassName("para")[0].style.color = "white";
}

function black() {
  document.getElementById("pink").style.display = "none"; 
  document.getElementById("red").style.display = "none";
  document.getElementById("blue").style.display = "none";
  document.getElementById("black").style.display = "block";
  document.getElementById("purple").style.display = "none";
  document.getElementsByTagName("BODY")[0].style.backgroundImage = "url('images/black.svg')";
  document.getElementsByClassName("heading")[0].style.color = "#23211F"; 
  document.getElementById('btn1').style.backgroundColor ="#23211F";
  document.getElementById('btn2').style.backgroundColor ="#23211F";
  document.getElementById('btn3').style.backgroundColor ="#23211F";
  document.getElementsByTagName("BODY")[0].style.backgroundColor="#468189";
  document.getElementById("white").style.backgroundColor="#468189";
  document.getElementById("white").style.color="#468189";
  document.getElementsByClassName("para")[0].style.color = "white";
  document.querySelector(".select-color").style.color="#232220";
  document.querySelector(".features").style.color="#232220";
}
function go(){
  tm=window.setInterval('displayclock()',500);
}
function displayclock(){
  var time= new Date()
  var hrs= time.getHours()
  var min=time.getMinutes()
  var sec=time.getSeconds()
  var en ="AM"
if(hrs>12){
  en='PM'
}
  if(hrs>12){
    hrs=hrs-12
  }
  if(hrs==0){
    hrs=12
  }
  if(hrs<10){
    hrs='0'+hrs;
  }
  if(min<10){
    min='0'+min;
  }
  if(sec<10){
    sec='0'+sec;
  }
  document.getElementById("clock").innerHTML=hrs+':'+min+':'+sec
  document.getElementById("clock").style.display = "block";
  document.getElementById("date").style.display = "none";
 
}

function displaydate(){
  
  var date=new Date()
  document.getElementById("date").innerHTML=date.toDateString()
  document.getElementById("clock").style.display = "none";
  document.getElementById("date").style.display = "block";
  clearInterval(tm)
}