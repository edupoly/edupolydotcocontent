document.getElementById("b2").addEventListener("click",function(event){
    console.log(event)
})
document.getElementById("b3").onclick = function(event){
    console.log(event)
}
$("#b4").click(function(event){
    console.log(event)

})
rxjs.fromEvent(document.getElementById("b5"),"click").subscribe((event)=>{
    console.log(event)
})