// Простое мобильное меню
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    if (nav.style.display === 'flex') {
      nav.style.position = 'absolute';
      nav.style.top = '64px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.background = 'var(--color-bg)';
      nav.style.flexDirection = 'column';
      nav.style.padding = '20px';
      nav.style.gap = '16px';
      nav.style.borderBottom = '1px solid var(--color-border)';
    }
  });
}

// Плавная прокрутка уже есть через CSS scroll-behavior
console.log('Portfolio loaded');
