/**
 * Orange Rabbit English - Main JavaScript
 * 負責全站通用互動：導覽列、行動端選單、FAQ 手風琴、預約表單處理
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initNavbarScroll();
  initFaqAccordion();
  initContactFormAutoFill();
});

/* ---------------------------------------------------------
   1. 行動版漢堡選單 (Mobile Navigation Menu)
--------------------------------------------------------- */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      if (menuIconOpen) menuIconOpen.classList.add('hidden');
      if (menuIconClose) menuIconClose.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
      if (menuIconOpen) menuIconOpen.classList.remove('hidden');
      if (menuIconClose) menuIconClose.classList.add('hidden');
    }
  });

  // 點擊選單內部連結時自動關閉選單
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      if (menuIconOpen) menuIconOpen.classList.remove('hidden');
      if (menuIconClose) menuIconClose.classList.add('hidden');
    });
  });
}

/* ---------------------------------------------------------
   2. 導覽列捲動陰影加深效果
--------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.getElementById('main-navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('shadow-md', 'border-slate-200/80');
      navbar.classList.remove('border-transparent');
    } else {
      navbar.classList.remove('shadow-md', 'border-slate-200/80');
      navbar.classList.add('border-transparent');
    }
  });
}

/* ---------------------------------------------------------
   3. FAQ 手風琴 (Accordion)
--------------------------------------------------------- */
function initFaqAccordion() {
  const accordionButtons = document.querySelectorAll('.faq-accordion-btn');

  accordionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      const isOpen = content.classList.contains('open');

      // 關閉同一區塊的其他已打開項目（單一展開效果）
      const parentContainer = btn.closest('.faq-container') || document;
      parentContainer.querySelectorAll('.accordion-content').forEach(otherContent => {
        if (otherContent !== content) {
          otherContent.classList.remove('open');
          otherContent.style.maxHeight = null;
          const otherIcon = otherContent.previousElementSibling?.querySelector('.faq-icon');
          if (otherIcon) {
            otherIcon.classList.remove('rotate-180');
          }
        }
      });

      // 切換當前項目
      if (!isOpen) {
        content.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
        if (icon) icon.classList.add('rotate-180');
      } else {
        content.classList.remove('open');
        content.style.maxHeight = null;
        if (icon) icon.classList.remove('rotate-180');
      }
    });
  });
}

/* ---------------------------------------------------------
   4. 預約表單自動代入測驗結果 (Auto-fill from URL params)
--------------------------------------------------------- */
function initContactFormAutoFill() {
  const urlParams = new URLSearchParams(window.location.search);
  const quizLevel = urlParams.get('level');
  const quizTarget = urlParams.get('target');
  const teacherParam = urlParams.get('teacher');

  const levelSelect = document.getElementById('current-level-select');
  const goalInput = document.getElementById('learning-goal-input');
  const teacherSelect = document.getElementById('preferred-teacher-select');

  if (quizLevel && levelSelect) {
    levelSelect.value = quizLevel;
    levelSelect.classList.add('ring-2', 'ring-orange-500', 'bg-orange-50');
  }

  if (quizTarget && goalInput) {
    goalInput.value = `【測驗結果建議】${quizTarget}`;
    goalInput.classList.add('ring-2', 'ring-orange-500', 'bg-orange-50');
  }

  if (teacherParam && teacherSelect) {
    teacherSelect.value = teacherParam;
    teacherSelect.classList.add('ring-2', 'ring-orange-500', 'bg-orange-50');
  }
}

