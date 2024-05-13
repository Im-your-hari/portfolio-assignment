window.addEventListener('scroll', function() {
    const ring = document.getElementById('ring');
    const scrolled = window.scrollY;
    ring.style.transform = `translate(-50%, -50%) rotate(${scrolled * 0.5}deg)`;
  });
  