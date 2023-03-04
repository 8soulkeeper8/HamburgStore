let scrollInterval;

document.getElementById('scroll-to-bottom').addEventListener('click', function(event) {
  event.preventDefault();
  scrollToBottom();
});

function scrollToBottom() {
  const scrollStep = window.innerHeight / 50;
  let lastScrollY = window.scrollY;
  let scrolling = false;

  scrollInterval = setInterval(() => {
    const scrollY = window.scrollY + window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollY < scrollHeight) {
      if (!scrolling) {
        window.scrollBy(0, scrollStep);
        lastScrollY = window.scrollY;
      }
    } else {
      clearInterval(scrollInterval);
      scrolling = false;
    }
  }, 10);

  window.addEventListener('wheel', function(event) {
    clearInterval(scrollInterval);
    scrolling = true;
    setTimeout(() => scrolling = false, 100);
  });
}
