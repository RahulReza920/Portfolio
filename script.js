// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

// window.onscroll = function() {
//     var top = window.scrollY;
//     if(top >=100) {
//         header.classList.add('navbarDark');
//     }
//     else {
//         header.classList.remove('navbarDark');
//     }
// }

header.classList.add('navbarDark');

document.addEventListener('DOMContentLoaded', function() {
    var heroTitle = "Hello, I'm Rahul";
    var currentText = "";
    var i = 0;
    var typingSpeed = 100; // Adjust the typing speed in milliseconds

    function type() {
        if (i < heroTitle.length) {
            currentText += heroTitle.charAt(i);
            document.querySelector('.hero_title').textContent = currentText;
            i++;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});



