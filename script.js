
function clock(){
    // const a = document.getElementById("clock");
    const h=document.getElementById("hours");
   const m= document.getElementById("min");
    const s= document.getElementById("sec");
var seconds;
    var days=new Date();
    var  min;
    var hours;
    var amPm = " ";
   
    seconds = 0;
    min=0;
    hours=0;

    
hours=days.getHours();

if (hours >= 12) {
    amPm="PM"
  } else {
    amPm="PM"
  }




   min= days.getMinutes(); 
   seconds= days.getSeconds(); ;
  //  a.innerHTML= hours + amPm + min +seconds;
  h.innerHTML=hours;
  m.innerHTML=min;
  s.innerHTML=seconds;


 
}
 
// a.setInterval(clearScreen, 1100);











  


function clearScreen() {
  document.body.innerHTML = ''; // Clear the screen by setting the body's innerHTML to an empty string

}


   



setInterval(clock, 1000);
// setInterval(clearScreen, 1100);





