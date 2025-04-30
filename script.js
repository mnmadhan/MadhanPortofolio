// Smooth scrolling for in-page links
document.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', e => {
      if (a.hash && document.querySelector(a.hash)) {
        e.preventDefault();
        document.querySelector(a.hash)
          .scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Project search filter
  const searchInput = document.getElementById('search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase();
      document.querySelectorAll('#project-list li').forEach(item => {
        item.style.display = item.dataset.title.toLowerCase().includes(filter)
          ? '' : 'none';
      });
    });
  }
  
  // Contact form handler placeholder
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      // Later integrate Node.js/PHP: send via AJAX/fetch
      document.getElementById('response').textContent =
        'Thank you, your message has been recorded!';
      form.reset();
    });
  }
  