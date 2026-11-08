
let themeButton = document.getElementById("theme-button");
let languageButton = document.getElementById("language-button");
let themeStyle = document.getElementById("theme-style");

let theme = localStorage.getItem("theme");


if (theme == "dark") {
    themeStyle.href = "home-dark.css";
    themeButton.innerHTML = '<img src="images/moon.png" alt="Theme">';
} else {
    themeButton.innerHTML = '<img src="images/sun.png" alt="Theme">';
}


themeButton.addEventListener("click", function() {

    if (themeStyle.href.includes("home-dark.css")) {
        themeStyle.href = "style.css";
        themeButton.innerHTML = '<img src="images/sun.png" alt="Theme">';
        localStorage.setItem("theme", "light");
    }

    else {
        themeStyle.href = "home-dark.css";
        themeButton.innerHTML = '<img src="images/moon.png" alt="Theme">';
        localStorage.setItem("theme", "dark");
    }

});


languageButton.addEventListener("click", function() {

    if (languageButton.textContent == "RU") {
        window.location.href = "home-ru.html";
    }

    else {
        window.location.href = "main.html";
    }

});