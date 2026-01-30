function toggleService(element) {
  const content = element.querySelector('.service-content');
  const isOpen = content.style.display === 'block';

  document.querySelectorAll('.service-content').forEach(item => {
    item.style.display = 'none';
  });

  content.style.display = isOpen ? 'none' : 'block';
}
