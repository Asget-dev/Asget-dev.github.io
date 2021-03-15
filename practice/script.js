/* eslint-disable */


function swap(){
    var tmp = document.getElementById("c").value;
    document.getElementById("c").value = document.getElementById("output").innerHTML;
    document.getElementById("output").innerHTML = tmp;
   
   let j = document.getElementById("output").innerHTML;
   let color=j.fontcolor("green");
   document.getElementById("output").innerHTML = color ;
}
window.onload=()=>{
    document.getElementById("go").onclick = swap;
}

