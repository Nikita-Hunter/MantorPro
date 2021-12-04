const menuBtn = document.getElementById('menu-toggle')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen)
    {
        menuBtn.classList.add('open');
        menuOpen = true;
    }
    else
    {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
})