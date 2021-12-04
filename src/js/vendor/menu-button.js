const menuBtn = document.getElementById('menu-toggle')
let menuOpen = false;
const navMenu = document.getElementById('nav-menu');
menuBtn.addEventListener('click', () => {
    if(!menuOpen)
    {
        menuBtn.classList.add('open');
        navMenu.classList.add('open-menu')
        menuOpen = true;
    }
    else
    {
        menuBtn.classList.remove('open');
        navMenu.classList.remove('open-menu')
        menuOpen = false;
    }
})