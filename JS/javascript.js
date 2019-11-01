//var isFoccused = document.getElementById("zoekbalk").addEventListener("focus");
//
//if (isFoccused) {
//    console.log("is gefocust");
//    document.getElementById("knop").classList.add("knopActive");
//}



function changeColor(){
    document.getElementById("knop").classList.remove("knop");
    console.log("is gefocust");
    document.getElementById("knop").classList.add("knopActive");
}

function resetColor(){
  console.log("niet gefocust");
    document.getElementById("knop").classList.add("knop");
}

