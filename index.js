  const btnOpen = document.getElementById('btnOpen');
    const btnClose = document.getElementById('btnClose');
    const menu = document.getElementById('menu');

    btnOpen.addEventListener('click', () => {
      menu.classList.remove('menu-hidden');
      menu.classList.add('menu-visible');
    });

    btnClose.addEventListener('click', () => {
      menu.classList.remove('menu-visible');
      menu.classList.add('menu-hidden');
    });