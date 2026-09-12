// Мобильное меню
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const isOpen = nav.style.display === 'flex';
    nav.style.display = isOpen ? 'none' : 'flex';
    
    if (!isOpen) {
      nav.style.cssText = `
        display: flex;
        position: absolute;
        top: 72px;
        left: 0;
        right: 0;
        background: #fff;
        flex-direction: column;
        padding: 24px;
        gap: 16px;
        border-bottom: 1px solid #e2e8f0;
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
      `;
    }
  });
}
