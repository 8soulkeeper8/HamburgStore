const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'translateY(-5px)';
  });
  
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'none';
  });
});