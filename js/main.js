window.onload = () => document.getElementById("loading-secreen").remove();

let menuBtn = document.querySelector(".menu-btn i");


menuBtn.onclick = function () {
    document.querySelector(".links ul").classList.toggle("active");
}

document.addEventListener("click", function (event) {
    if (event.target !== menuBtn) {
        document.querySelector(".links ul").classList.remove("active");
    }
})

// About Section 
let skillProg = document.querySelectorAll(".skill-item .prog .prog-line");
let skillProgValue = document.querySelectorAll(".skill-item .prog .prog-line .prog-value")
for (let i = 0; i < skillProgValue.length; i++) {
    skillProgValue[i].innerHTML = skillProg[i].style.width;
    console.log(skillProg[i].style.width);
}
// About Section 
