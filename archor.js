document.getElementById('scroll-to-bottom').addEventListener('click', function(event) {
    event.preventDefault(); // отменяем стандартное поведение ссылки
    scrollToBottom();
  });
  
  function scrollToBottom() {
    const scrollStep = window.innerHeight / 50;
    let lastScrollY = window.scrollY;
  
    const scrollInterval = setInterval(() => {
      const scrollY = window.scrollY + window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      if (scrollY < scrollHeight) {
        window.scrollBy(0, scrollStep);
        lastScrollY = window.scrollY;
      } else {
        clearInterval(scrollInterval);
      }
    }, 10);
  }