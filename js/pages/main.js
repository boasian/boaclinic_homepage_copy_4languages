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
const popupHideTodayCheckbox = document.querySelector(".popup-hide-today-checkbox");
const popupCloseText = document.querySelector(".popup-close-text");

const POPUP_HIDE_KEY = "boaEventPopupHideUntil";

function closePopup() {
    if (popupHideTodayCheckbox && popupHideTodayCheckbox.checked) {
        localStorage.setItem(POPUP_HIDE_KEY, new Date().toDateString());
    }
    popupContainer.style.display = "none";
}

if (localStorage.getItem(POPUP_HIDE_KEY) === new Date().toDateString()) {
    popupContainer.style.display = "none";
}

popupContainer.addEventListener("click", closePopup);

closeButton.addEventListener("click", closePopup);

if (popupCloseText) {
    popupCloseText.addEventListener("click", closePopup);
}

window.onkeydown = (e) => {
    if (e.keyCode === 27) {
        closePopup();
    }
};

popupWrap.addEventListener("click", (e) => {
    e.stopPropagation();
});
