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
