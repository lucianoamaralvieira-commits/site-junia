/* ============================================================
   JÚNIA DOURADO ADVOCACIA — JavaScript (vanilla, sem dependências)
   Funções: flag .js · header on-scroll · menu mobile · reveal on-scroll
   ============================================================ */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  /* ---------- Header: sombra ao rolar ---------- */
  var header = document.getElementById('site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Menu mobile (drawer) ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var drawer = document.getElementById('nav-drawer');

  if (toggle && drawer) {
    var closeBtn = drawer.querySelector('.nav-drawer__close');
    var overlay = drawer.querySelector('.nav-drawer__overlay');
    var focusables = drawer.querySelectorAll('a, button');
    var lastFocused = null;

    var openDrawer = function () {
      lastFocused = document.activeElement;
      drawer.hidden = false;
      drawer.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      if (focusables.length) focusables[0].focus();
      document.addEventListener('keydown', onKeydown);
    };

    var closeDrawer = function () {
      drawer.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeydown);
      window.setTimeout(function () { drawer.hidden = true; }, 200);
      if (lastFocused) lastFocused.focus();
    };

    var onKeydown = function (e) {
      if (e.key === 'Escape') { closeDrawer(); return; }
      if (e.key === 'Tab' && focusables.length) {
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };

    toggle.addEventListener('click', function () {
      drawer.classList.contains('is-open') ? closeDrawer() : openDrawer();
    });
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (overlay) overlay.addEventListener('click', closeDrawer);
    drawer.querySelectorAll('.nav-drawer__list a').forEach(function (link) {
      link.addEventListener('click', closeDrawer);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Hero: vídeo de fundo (respeita "reduzir movimento") ---------- */
  var heroVideo = document.querySelector('.hero__bg video');
  if (heroVideo && !reduced) {
    var p = heroVideo.play();
    if (p && typeof p.catch === 'function') { p.catch(function () {}); }
  }
  var revealEls = document.querySelectorAll('.reveal');

  if (!reduced && 'IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- FAQ: fecha os demais ao abrir um (opcional, suave) ---------- */
  var faqGroups = document.querySelectorAll('[data-faq-exclusive]');
  faqGroups.forEach(function (group) {
    var items = group.querySelectorAll('details');
    items.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (item.open) {
          items.forEach(function (other) { if (other !== item) other.open = false; });
        }
      });
    });
  });
})();
