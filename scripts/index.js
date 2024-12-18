document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.banner');
    const header = document.querySelector('.header');
    const active = document.querySelector('.active');
    const activeListItems = document.querySelectorAll('.active-list-item');
    window.addEventListener('scroll', () =>{
        setHeader(banner, header);
        fade(active, activeListItems);
    });
});

function setHeader(banner, header){
    let scroll = window.scrollY;
    let bannerEnd = banner.offsetHeight - 80;

    (scroll >= bannerEnd) ? header.classList.add('header-full') : header.classList.remove('header-full')
}

function fade(active, activeListItems){
    let windowHeight = window.innerHeight;
    let scroll = window.scrollY + windowHeight / 2;
    let activeListStart = active.offsetTop;

    if (scroll >= activeListStart){
        document.querySelector('.active-list').style.display = "block"
        activeListItems.forEach(element => {
            element.style.transition = `opacity 500ms`;
            if (scroll >= element.offsetTop) {
                setTimeout(() => {
                    element.style.opacity = 1;
                }, 10)
            } else {
                element.style.opacity = 0;
            }
        })
    }
}

