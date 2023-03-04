// выбираем все якори с классом "smooth-scroll"
const smoothScrollLinks = document.querySelectorAll('a.smooth-scroll');

// перебираем все якори и добавляем обработчик события "click"
smoothScrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    // отменяем стандартное поведение ссылки
    e.preventDefault();

    // получаем id секции, к которой нужно прокрутить
    const sectionId = link.getAttribute('href');

    // выбираем секцию
    const section = document.querySelector(sectionId);

    // вычисляем позицию секции на странице
    const sectionTop = section.offsetTop;

    // плавно прокручиваем страницу до секции
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth"
    });
  });
});