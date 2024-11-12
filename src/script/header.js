const menuIcon = document.getElementById('menu-icon');
const menuList = document.getElementById('menu-list');

menuIcon.addEventListener('click', () => {
    menuList.style.display = menuList.style.display === 'flex' ? 'none' : 'flex';
});
