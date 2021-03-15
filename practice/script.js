/* eslint-disable */


function swap(){
    var tmp = document.getElementById("c").value;
    document.getElementById("c").value = document.getElementById("output").innerHTML;
    let x=document.getElementById("output").innerHTML;
    x = tmp;
    let color=x.fontcolor("green");
    document.getElementById("output").innerHTML = color ;
}
window.onload=()=>{
    document.getElementById("go").onclick = swap;
}