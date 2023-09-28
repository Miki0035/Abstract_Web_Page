let searchBtn = document.getElementById("btn-search");
let menuBtn = document.querySelector("#btn-menu");
let hiddenSearchBar = document.getElementById("header-hidden-search-bar");

// This will bring the hidden search bar to display
searchBtn.onclick = () => {
    let searchBarStyle = window.getComputedStyle(hiddenSearchBar).display;
    if (searchBarStyle == "none") {
        hiddenSearchBar.style.display = "flex";
    } else {
        hiddenSearchBar.style.display = "none";
    }
}

//close the hidden search bar
let closeSearchBar = document.getElementById("btn-search-close");
closeSearchBar.onclick = () => {
    hiddenSearchBar.style.display = "none";
}

//will open the hidden submit and sigin and change to x icon
menuBtn.onclick = () => {
    let hiddenAnchor = document.querySelector(".hidden-anchor");
    if (menuBtn.classList.contains("bx-menu")) {
        menuBtn.classList.replace("bx-menu","bx-x");
        hiddenAnchor.style.display = "flex";
    } else {
        menuBtn.classList.replace("bx-x", "bx-menu");
        hiddenAnchor.style.display = "none";
    }
}