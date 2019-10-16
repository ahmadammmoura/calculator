
function dis(val) 
{ 
    document.getElementById("InputF").value+=val 
} 
  

function solve() 
{ 
    let x = document.getElementById("InputF").value 
    let y = eval(x) 
    document.getElementById("InputF").value = y 
} 
  

function clr() 
{ 
    document.getElementById("InputF").value = "" 
}


  