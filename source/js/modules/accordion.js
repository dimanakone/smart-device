const menuItems = document.querySelectorAll('.accordion');

if (menuItems) {
  menuItems.forEach((item) => {
    item.classList.remove('accordion--open');

    item.addEventListener('click', () => {
      if (item.classList.contains('accordion--open')) {
        item.classList.remove('accordion--open');
      } else {
        document.querySelectorAll('.accordion').forEach((accordionItem) => accordionItem.classList.remove('accordion--open'));
        item.classList.add('accordion--open');
      }
    });
  });
}
