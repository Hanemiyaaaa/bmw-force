document.addEventListener("DOMContentLoaded", function () {
    const logoOverlay = document.querySelector(".logo-overlay");
    const logoImage = document.querySelector(".logo-overlay__image");
    const headerLogo = document.querySelector(".header__table-logo");
    const footerLogo = document.querySelector(".footer-logo");

    function showLogoAnimation() {
        logoOverlay.style.display = "flex";
        logoOverlay.style.opacity = "1";
        logoImage.style.transition = "none";
        logoImage.style.transform = "translateX(-100%)";
        logoImage.style.opacity = "0";

        setTimeout(() => {
            logoImage.style.transition = "transform 1.5s ease-out, opacity 1.5s";
            logoImage.style.transform = "translateX(0)";
            logoImage.style.opacity = "1";
        }, 50);

        setTimeout(() => {
            logoOverlay.style.opacity = "0";
            setTimeout(() => {
                logoOverlay.style.display = "none";
            }, 1000);
        }, 3000);
    }


    if (!sessionStorage.getItem("logoAnimationShown")) {
        showLogoAnimation();
        sessionStorage.setItem("logoAnimationShown", "true"); 
    } else {
        logoOverlay.style.display = "none";
    }

    headerLogo.addEventListener("click", function (event) {
        event.preventDefault();
        showLogoAnimation();
    });

    footerLogo.addEventListener("click", function (event) {
        event.preventDefault();
        showLogoAnimation();
        window.scrollTo(0, 0);
    });
});
