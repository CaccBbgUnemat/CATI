// function Mudarestado(el) {
//     var display = document.getElementById(el).style.display;
//     if(display == "none")
//         document.getElementById(el).style.display = 'block';
//     else
//         document.getElementById(el).style.display = 'none';
// }
function Mudarestado(elemento){
    visibility = document.getElementById(elemento).style.visibility;
    if(visibility == "hidden") {
        document.getElementById(elemento).style.visibility = 'visible';
        document.getElementById(elemento).style.height = '100vh';
        document.getElementById(elemento).style.paddingTop = '100px';

    }
    else {
        document.getElementById(elemento).style.visibility = 'hidden';
        document.getElementById(elemento).style.height = '0vh';
        document.getElementById(elemento).style.paddingTop = '0px';
    }
}