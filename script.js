// Mobile menu
const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.contains('open');
    
    if (isOpen) {
      nav.classList.remove('open');
      nav.removeAttribute('style');
    } else {
      nav.classList.add('open');
      nav.style.cssText = `
        display: flex;
        position: absolute;
        top: 72px;
        left: 0;
        right: 0;
        background: #fff;
        flex-direction: column;
        padding: 28px 24px;
        gap: 18px;
        border-bottom: 1px solid #e2e8f0;
        box-shadow: 0 16px 40px rgba(0,0,0,0.08);
      `;
    }
  });
}

// Close mobile menu on link click
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (nav) {
      nav.classList.remove('open');
      nav.removeAttribute('style');
    }
  });
});
