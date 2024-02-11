 const PI = 12.5;
 let rsdius;
 let circle;
 
 document.getElementById("mySubmit").onclick = fucntion(){
    radius=document.getElementById("mytext").ariaValueMax;
    radius = Number(radius);
    circle =  2*pi*radius;
    document.getElementById("my H3").textcontent = circle;
 }