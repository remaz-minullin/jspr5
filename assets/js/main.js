function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

document.addEventListener('DOMContentLoaded', function () {
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains("show")) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
});

function myFunctionTwo() {
    document.getElementById("myDropdownTwo").classList.toggle("show");
}

document.addEventListener('DOMContentLoaded', function () {
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains("show")) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
});

/* accordion */
var acc = document.getElementsByClassName("accordion");
var i;

document.addEventListener('DOMContentLoaded', function(){
    for(i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
    
            var panel = this.nextElementSibling;
            if(panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
})