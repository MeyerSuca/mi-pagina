
window.addEventListener("scroll", function () {
    let navBar = document.getElementById("nav-bar");
    let positionScroll = navBar.getBoundingClientRect().top;
    if (positionScroll <= 0) {
        navBar.className = "barra-nav-active";
    } else {
        navBar.className = "barra-nav";
    }
    console.log(positionScroll);
})