document.querySelector('.footer__navigation').classList.remove('accordion--open');
document.querySelector('.footer__contacts').classList.remove('accordion--open');

const menuItems = document.querySelectorAll('.accordion');
menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('accordion--open')) {
      item.classList.remove('accordion--open');
    } else {
      document.querySelectorAll('.accordion').forEach((accordionItem) => accordionItem.classList.remove('accordion--open'));
      item.classList.add('accordion--open');
    }
  });
});
