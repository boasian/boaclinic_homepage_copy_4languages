const header = document.querySelector("#header");
window.addEventListener("scroll", displayHeader);

function displayHeader() {
    if (window.scrollY > 50) {
        header.style.background = "#ffffff";
    } else if (window.scrollY < 50) {
        header.style.background = "transparent";
    }
}
const scrollButton = document.querySelector(".scroll");
scrollButton.addEventListener("click", () => {
    const bannerHeight = document.querySelector(".main-banner").clientHeight;
    const headerHeight = document.querySelector("#header").clientHeight;
    window.scroll({
        top: bannerHeight - headerHeight,
        behavior: "smooth",
    });
})

// 지도 연동
var map = new naver.maps.Map("map", {
    center: new naver.maps.LatLng(37.4986640, 127.0287237),
    zoom: 15,
});

var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.4986640, 127.0287237),
    map: map,
});

const popupContainer = document.querySelector(".popup-container");
const popupWrap = document.querySelector(".popup-wrap");
const closeButton = document.querySelector(".close-button");

popupContainer.addEventListener("click", () => {
    popupContainer.style.display = "none";
});

closeButton.addEventListener("click", () => {
    popupContainer.style.display = "none";
});

window.onkeydown = (e) => {
    if (e.keyCode === 27) {
        popupContainer.style.display = "none";
    }
};

popupWrap.addEventListener("click", (e) => {
    e.stopPropagation();
});
