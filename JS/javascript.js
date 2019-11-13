/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

//function changeColor() {
//    document.getElementById("knop").classList.remove("knop");
//    console.log("is gefocust");
//    document.getElementById("knop").classList.add("knopActive");
//}
//
//function resetColor() {
//    console.log("niet gefocust");
//    document.getElementById("knop").classList.add("knop");
//}


//wil maar niet werken
//var knop;
//var knop2 = false;
//knop = document.getElementById('download');
//
//function downloading() {
//    if (knop2 === false) {
//     document.getElementById('download').src = 'afbeeldingen/loading.gif';
//        knop2 = true;
//        setTimeout(function () {
//            this.open20();
//        }, 4000);
//        console.log("het werkt")
//    } else if (knop2 === true) {
//        document.getElementById('download').src = 'afbeeldingen/done.png';
//        console.log(done);
//        document.getElementById("download").src = done;
//        knop2 = false;
//    }
//}
//var knop = document.getElementById('download');
// function downloading () {
//     console.log("werkt");
// }
//knop.addEventListener('click', downloading, false);

window.onload = function () {

    var button = document.getElementById('download');

    function downloading() {
        setTimeout(function () {
            button.src = 'afbeeldingen/done.png';
        }, 4000);
        button.src = 'afbeeldingen/loading.gif';
    }

    button.addEventListener('click', downloading);

}
