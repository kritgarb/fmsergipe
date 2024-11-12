// Pega o ícone e o menu
const menuIcon = document.getElementById('menu-icon');
const menuList = document.getElementById('menu-list');

// Adiciona um evento de clique ao ícone
menuIcon.addEventListener('click', () => {
    // Alterna a visibilidade do menu
    menuList.style.display = menuList.style.display === 'flex' ? 'none' : 'flex';
});
