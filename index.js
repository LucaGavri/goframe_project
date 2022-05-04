const header = document.querySelector(".header");


function scrollHeader() {
    window.addEventListener("scroll", function() {
        if(window.scrollY > 1) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    });
};
scrollHeader();