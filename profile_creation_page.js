function btnColor(btn) {
    var property = document.getElementById(btn);
    property.className = 'toggled' == property.className ? '' : 'toggled';
}

function changeColor(button) {
    var property = document.getElementById(button);
    property.style.backgroundColor = "red";

}
