document.addEventListener("DOMContentLoaded", function() {
    const servicesMenu = document.querySelector(".header__table-menu");
    const dropdownMenu = servicesMenu.querySelector(".menu");
    const menuItems = dropdownMenu.querySelectorAll("li");

    servicesMenu.addEventListener("click", function(event) {
        event.preventDefault();

        dropdownMenu.style.display = "block";

        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    });

    document.addEventListener("click", function(event) {
        if (!servicesMenu.contains(event.target)) {
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = 0;
                    item.style.transform = 'translateY(-10px)';
                }, index * 100);
            });

            setTimeout(() => {
                dropdownMenu.style.display = "none";
            }, menuItems.length * 100);
        }
    });
});