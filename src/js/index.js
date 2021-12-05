/** Bootstrap JS */
import 'bootstrap';

/** jQuery */
import 'jquery';

/** PopperJS */
import '@popperjs/core';

/** Botstrap SCSS **/
import '../scss/style.scss';

// Contact Form Validation
// (function() {
//     'use strict';

//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation');

//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//         .forEach(function(form) {
//             form.addEventListener('submit', function(event) {
//                 if (!form.checkValidity()) {
//                     event.preventDefault();
//                     event.stopPropagation();
//                 }

//                 form.classList.add('was-validated');
//             }, false);
//         });
// })();

/** Footer */
document.body.onload = footer;

function footer() {
    // create a new div element
    const footerDiv = document.createElement("footer");

    // assign it a class
    footerDiv.classList.add("footer");

    // gets the current date
    const copyright = new Date().getFullYear();

    // gets the copyright symbol
    const favicon = document.createElement("i");
    favicon.classList.add("fas", "fa-copyright");

    const text = document.createTextNode(" 2020 " + "- " + copyright);

    // add the text node to the newly created div
    footerDiv.appendChild(favicon);
    footerDiv.appendChild(text);

    // add the newly created element and its content into the DOM
    const newDiv = document.getElementById("div");
    document.body.insertBefore(footerDiv, newDiv);
}

/** DarkMode */
const darkMode = document.getElementById("flexSwitchCheckChecked");
darkMode.addEventListener("click", darkModeToggle);

function darkModeToggle() {
    if (darkMode.checked) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}