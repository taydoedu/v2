// Ẩn hiện 
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active1");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
// Tab
var buttons = document.getElementsByClassName('tablinks');
var contents = document.getElementsByClassName('tabcontent');
function showContent(id) {
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    var content = document.getElementById(id);
    content.style.display = 'block';

    // Add code to set the first button as active by default
    buttons[0].classList.add("active");
}
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var id = this.textContent;
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
        this.classList.add("active");
        showContent(id);
    });
}