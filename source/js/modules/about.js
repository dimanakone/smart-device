const about = document.querySelector('.about');

if (about) {
  const paragraphs = about.querySelectorAll('p');
  const aboutButton = document.querySelector('.about__button');

  paragraphs.forEach((element, index) => {
    if (index > 1) {
      element.classList.add('about__text-hidden');
    }
  });

  aboutButton.addEventListener('click', () => {
    paragraphs.forEach((element, index) => {
      if (index > 1) {
        element.classList.toggle('about__text-hidden--active');
      }
    });

    if (aboutButton.innerText.toLowerCase() === 'подробнее') {
      aboutButton.innerText = 'Свернуть';
    } else {
      aboutButton.innerText = 'Подробнее';
    }
  });
}
