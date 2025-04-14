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

/* slider */
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    slides[currentIndex].classList.add("active");
  
    document.getElementById("nextBtn").addEventListener("click", () => {
      slides[currentIndex].classList.remove("active");
  
      if (currentIndex === slides.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex++; 
      }
  
      slides[currentIndex].classList.add("active");
    });
  
    document.getElementById("prevBtn").addEventListener("click", () => {
      slides[currentIndex].classList.remove("active");
      if (currentIndex === 0) {
        currentIndex = slides.length - 1;
      } else {
        currentIndex--;
      }
      slides[currentIndex].classList.add("active");
    });
  });
  