const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
}

const cttButton = document.querySelector('.ctnBut');
const strButton = document.querySelector('.strBut');

cttButton.onclick = function() {
window.open("https://wa.me/916297350047", "_blank");
}

strButton.onclick = function() {
window.open("https://wa.me/c/916297350047", "_blank");
}
