const menuButton = document.querySelector('#header_menu');
const closeMenuButton = document.querySelector('.close-detail-menu');
const detailMenu = document.querySelector('.detail-menu');
const mainContainer = document.querySelector('body');
const direction = document.querySelector('#direction')

direction.addEventListener('click', () => {
    if( document.location.href.split("/")[3] == "" ) {
        detailMenu.style.display = 'none';
        menuButton.style.display = 'block';
        mainContainer.style.overflow = 'visible';
        window.scrollTo({left: 0, top: 1301, behavior: "smooth"});
        // window.scrollTo(0, 1701)
        // window.scrollTo(0, 1608)
    } else {
        location.href="/#direction_wrap"
        detailMenu.style.display = 'none';
        menuButton.style.display = 'block';
        mainContainer.style.overflow = 'visible';
    }
})

menuButton.addEventListener('click', () => {
    detailMenu.style.display = 'block';
    menuButton.style.display = 'none';
    mainContainer.style.overflow = 'hidden';
})

closeMenuButton.addEventListener('click', () => {
    detailMenu.style.display = 'none';
    menuButton.style.display = 'block';
    mainContainer.style.overflow = 'visible';
})
