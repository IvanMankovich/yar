const burger = document.getElementsByClassName('burger')[0],
      about = document.getElementsByClassName('about')[0];

let menuState = 'initial';

burger.addEventListener('click', handleBurgerClick);

window.addEventListener('mousemove', handleAboutPosition);

about.addEventListener('click', showPage);

function handleBurgerClick(e) {
    e.preventDefault();
    switch (true) {
        case (menuState === 'initial'):
            {menuState = 'show';
            let menu = document.getElementsByClassName('menu')[0];
            menu.className = 'menu__show';
            let menuLinks = document.getElementsByClassName('menuLinkContainer');
            while (menuLinks.length) {
                menuLinks[0].className = 'menuLinkContainer__show';
            }}
            break;

        case (menuState === 'hidden'):
            {menuState = 'show';
            let menu = document.getElementsByClassName('menu__hidden')[0];
            menu.className = 'menu__show';
            let menuLinks = document.getElementsByClassName('menuLinkContainer__hidden');
            while (menuLinks.length) {
                menuLinks[0].className = 'menuLinkContainer__show';
            }}
            break;

        case (menuState === 'show'):
            {menuState = 'hidden';
            let menu = document.getElementsByClassName('menu__show')[0];
            menu.className = 'menu__hidden';
            let menuLinks = document.getElementsByClassName('menuLinkContainer__show');
            while (menuLinks.length) {
                menuLinks[0].className = 'menuLinkContainer__hidden';
            }}
            break;
        default: 
            break;
    }
}

function handleAboutPosition(e) {
    e.preventDefault();
    about.style.top = `${e.clientY - 88}px`;
}

function showPage() {
    if (document.getElementsByClassName('aboutPage').length) {
        let aboutPage = document.getElementsByClassName('aboutPage')[0];
        about.style.zIndex = null;
        aboutPage.remove();
    } else {
        about.style.zIndex = 3;
        let div = document.createElement('DIV');
        div.className = 'aboutPage';
        let text = document.createElement('P');
        text.className = 'aboutPageText';
        text.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aperiam eveniet quia eaque sed, vel beatae sit laudantium consequatur doloremque neque, exercitationem ipsa atque! Illum quidem molestiae doloremque iste ab.'
        div.appendChild(text);
        document.body.appendChild(div);
    }
}