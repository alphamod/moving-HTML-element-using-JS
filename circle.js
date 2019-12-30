function up() {
    document.getElementById("circle").setAttribute("style", "top:10px");
}

function left() {
    document.getElementById("circle").setAttribute("style", "right:180px");
}
function down() {
    document.getElementById("circle").setAttribute("style", "top:110px");
}
function right() {
    document.getElementById("circle").setAttribute("style", "left:180px");
}

document.onkeydown=function(e){
    switch (e.keyCode){
        case 37:
            left();
            break;
        case 38:
            up();
            break;
        case 39:
            right();
            break;
        case 40:
            down();
            break;
    }
}