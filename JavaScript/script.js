const header = document.querySelector('#header');
const logo = document.querySelector('#logo');
const mobileNav = document.querySelector('#nav-links-mobile');

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
    mobileNav.classList.add('nav-links-mobile-scrolled');
    logo.src = 'Images/Scroll-Logo.png'; // Change to the new logo when scrolled
  } else {
    header.classList.remove('scrolled');
    mobileNav.classList.remove('nav-links-mobile-scrolled');
    logo.src = 'Images/logo.png'; // Revert to the original logo when at the top
  }
});


 // PDF Modal Logic
const modal = document.getElementById('pdfModal');
const pdfFrame = document.getElementById('pdfFrame');
const modalClose = document.getElementById('modalClose');
const modalOverlay = document.getElementById('modalOverlay');

function openModal(pdfPath) {
  pdfFrame.src = pdfPath;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  pdfFrame.src = '';
  document.body.style.overflow = '';
}

// Desktop — button click
document.querySelectorAll('.pdf-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    openModal(btn.getAttribute('data-pdf'));
  });
});

// Mobile — poore card pe click
function isTouchDevice() {
  return window.matchMedia('(hover: none)').matches;
}

document.querySelectorAll('.catalogue-item').forEach(item => {
  item.addEventListener('click', () => {
    if (isTouchDevice()) {
      const pdfPath = item.querySelector('.pdf-btn').getAttribute('data-pdf');
      openModal(pdfPath);
    }
  });
});

// Close karne ke tarike
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});