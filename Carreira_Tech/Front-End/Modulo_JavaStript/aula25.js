function setBackgroundColor(color){
    document.body.style.backgroundColor = color
}
document.getElementById("redButton").addEventListener("click",function(){setBackgroundColor("red")})
document.getElementById("greenButton").addEventListener("click",function(){setBackgroundColor(setBackgroundColor("green"))})
document.getElementById("blueButton").addEventListener("click",function(){setBackgroundColor(setBackgroundColor("blue"))})
document.getElementById("restaurar").addEventListener("click",function(){setBackgroundColor(setBackgroundColor("white"))})

document.getElementById("inputBox").addEventListener("keypress", function(event){
    alert("A tecla pressionada é: "+ event.key)
})