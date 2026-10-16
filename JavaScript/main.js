
document.addEventListener("DOMContentLoaded", function () {
    console.log("Kureiji Gandy carregado!");

    // Seleciona os links do menu
    const linksMenu = document.querySelectorAll(".navbar-nav .nav-link");

    // Destaca o link da página atual
    linksMenu.forEach(function (link) {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
});
