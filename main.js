openNav = () => {
    const nav = document.getElementById('hiddenNavBar');
    nav.style.width = '60%';
    nav.style.padding = '1.25rem';
}
closeNav = () => {
    const nav = document.getElementById('hiddenNavBar');
    nav.style.width = '0px';
    nav.style.padding = '0';
}