const linkHomeHeader = document.getElementById("toHomeHeader");
const linkHomeFooter = document.getElementById("toHomeFooter");

function toHome () {
    window.open("https://confraria-jagunco.github.io/home/");
};

linkHomeHeader.addEventListener("click", toHome);
linkHomeFooter.addEventListener("click", toHome);