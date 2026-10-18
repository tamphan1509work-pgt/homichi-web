import { href } from './url';
// Tương tác dùng chung: header, drawer, reveal, đếm số, cookie consent, form thu lead.

/* ---------------------------------------------------------- Header */
const header = document.querySelector<HTMLElement>('[data-header]');
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mega menu: đóng khi nhấn Esc hoặc khi click link bên trong
document.querySelectorAll<HTMLElement>('.nav__item.has-mega').forEach((item) => {
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      item.classList.add('is-closed');
      item.querySelector<HTMLElement>('.nav__link')?.focus();
    }
  });
  item.addEventListener('mouseleave', () => item.classList.remove('is-closed'));
  item.addEventListener('focusout', (e) => {
    if (!item.contains(e.relatedTarget as Node)) item.classList.remove('is-closed');
  });
});

/* ---------------------------------------------------------- Drawer (mobile) */
const burger = document.querySelector<HTMLButtonElement>('[data-burger]');
const drawer = document.querySelector<HTMLElement>('[data-drawer]');
const setDrawer = (open: boolean) => {
  if (!burger || !drawer) return;
  burger.setAttribute('aria-expanded', String(open));
  const utility = document.querySelector<HTMLElement>('.utility');
  const offset = Math.max(0, (utility?.getBoundingClientRect().bottom ?? 0));
  drawer.style.setProperty('--drawer-offset', `${offset}px`);
  drawer.hidden = !open;
  document.body.style.overflow = open ? 'hidden' : '';
};
burger?.addEventListener('click', () => setDrawer(burger.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', (e) => e.key === 'Escape' && setDrawer(false));
window.matchMedia('(min-width: 1180px)').addEventListener('change', (m) => m.matches && setDrawer(false));

/* ---------------------------------------------------------- Reveal on scroll */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll<HTMLElement>('.reveal, [data-reveal]');
if ('IntersectionObserver' in window && !reduce) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
    }),
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-in'));
}

// Line-art: tính độ dài nét để animate "vẽ"
document.querySelectorAll<SVGGeometryElement>('.draw path, .draw line, .draw circle, .draw rect, .draw ellipse, .draw polyline').forEach((el) => {
  try {
    const len = Math.ceil(el.getTotalLength());
    if (len > 0) el.style.setProperty('--len', String(len));
  } catch { /* ignore */ }
});
document.querySelectorAll<SVGElement>('svg.draw').forEach((svg) => {
  const host = svg.closest('.reveal, [data-reveal]');
  if (!host) svg.classList.add('is-in');
});

/* ---------------------------------------------------------- Count-up */
const fmt = (n: number, decimals: number) => n.toLocaleString('vi-VN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
const counters = document.querySelectorAll<HTMLElement>('[data-count]');
const runCount = (el: HTMLElement) => {
  const target = parseFloat(el.dataset.count || '0');
  const decimals = (el.dataset.count?.split('.')[1] || '').length;
  if (reduce) { el.textContent = fmt(target, decimals); return; }
  const dur = 1600; const t0 = performance.now();
  const tick = (t: number) => {
    const p = Math.min(1, (t - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 4);
    el.textContent = fmt(target * eased, decimals);
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
if ('IntersectionObserver' in window) {
  const cio = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { runCount(en.target as HTMLElement); cio.unobserve(en.target); }
  }), { threshold: 0.4 });
  counters.forEach((c) => cio.observe(c));
}

/* ---------------------------------------------------------- Cookie consent */
const KEY = 'homichi-consent';
const banner = document.querySelector<HTMLElement>('[data-cookie]');
const prefs = document.querySelector<HTMLFormElement>('[data-cookie-prefs]');
const readConsent = () => { try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch { return null; } };
const saveConsent = (v: { analytics: boolean; marketing: boolean }) => {
  try { localStorage.setItem(KEY, JSON.stringify({ ...v, at: Date.now() })); } catch { /* private mode */ }
  if (banner) banner.hidden = true;
  window.dispatchEvent(new CustomEvent('homichi:consent', { detail: v }));
};
if (banner && !readConsent()) banner.hidden = false;
document.querySelector('[data-cookie-accept]')?.addEventListener('click', () => {
  if (prefs && !prefs.hidden) {
    saveConsent({ analytics: (prefs.elements.namedItem('analytics') as HTMLInputElement).checked, marketing: (prefs.elements.namedItem('marketing') as HTMLInputElement).checked });
  } else saveConsent({ analytics: true, marketing: true });
});
document.querySelector('[data-cookie-reject]')?.addEventListener('click', () => saveConsent({ analytics: false, marketing: false }));
document.querySelector('[data-cookie-custom]')?.addEventListener('click', (e) => {
  if (!prefs) return;
  prefs.hidden = false;
  (e.currentTarget as HTMLElement).hidden = true;
  const accept = document.querySelector<HTMLElement>('[data-cookie-accept]');
  if (accept) accept.textContent = 'Lưu lựa chọn';
});
document.querySelectorAll('[data-cookie-open]').forEach((b) => b.addEventListener('click', () => { if (banner) banner.hidden = false; }));

/* ---------------------------------------------------------- Newsletter */
document.querySelectorAll<HTMLFormElement>('[data-newsletter]').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector<HTMLInputElement>('input[type=email]');
    const msg = form.querySelector<HTMLElement>('[role=status]');
    if (!input || !msg) return;
    if (!input.checkValidity()) { msg.textContent = 'Vui lòng nhập email hợp lệ.'; input.focus(); return; }
    msg.textContent = 'Cảm ơn bạn! Bản tin tiếp theo sẽ được gửi tới ' + input.value + '.';
    input.value = '';
  });
});

/* ---------------------------------------------------------- Lead forms */
const validateField = (field: HTMLElement) => {
  const controls = field.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('input, select, textarea');
  let ok = true;
  controls.forEach((c) => {
    if (!c.checkValidity()) ok = false;
    if (c instanceof HTMLInputElement && c.type === 'file' && Array.from(c.files || []).some((f) => f.size > 20 * 1024 * 1024)) ok = false;
  });
  // nhóm lựa chọn bắt buộc (data-required-group)
  if (field.hasAttribute('data-required-group')) ok = !!field.querySelector('input:checked');
  field.classList.toggle('is-invalid', !ok);
  return ok;
};

document.querySelectorAll<HTMLFormElement>('[data-form]').forEach((form) => {
  const steps = Array.from(form.querySelectorAll<HTMLElement>('[data-step]'));
  const progress = form.querySelectorAll<HTMLElement>('[data-progress] li');
  let current = 0;

  const showStep = (i: number) => {
    current = i;
    steps.forEach((s, idx) => { s.hidden = idx !== i; });
    progress.forEach((p, idx) => { p.classList.toggle('is-active', idx === i); p.classList.toggle('is-done', idx < i); });
    const top = form.getBoundingClientRect().top + window.scrollY - 120;
    if (window.scrollY > top) window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
  };
  const validateScope = (scope: HTMLElement) => {
    const fields = Array.from(scope.querySelectorAll<HTMLElement>('.field, [data-required-group]'));
    const results = fields.map(validateField);
    const firstBad = fields[results.indexOf(false)];
    firstBad?.querySelector<HTMLElement>('input, select, textarea')?.focus();
    return results.every(Boolean);
  };

  if (steps.length) showStep(0);
  form.querySelectorAll('[data-next]').forEach((b) => b.addEventListener('click', () => { if (validateScope(steps[current])) showStep(current + 1); }));
  form.querySelectorAll('[data-prev]').forEach((b) => b.addEventListener('click', () => showStep(current - 1)));

  form.addEventListener('input', (e) => {
    const field = (e.target as HTMLElement).closest<HTMLElement>('.field, [data-required-group]');
    if (field?.classList.contains('is-invalid')) validateField(field);
  });
  form.addEventListener('change', (e) => {
    const field = (e.target as HTMLElement).closest<HTMLElement>('.field, [data-required-group]');
    if (field?.classList.contains('is-invalid')) validateField(field);
  });

  // Dropzone tệp đính kèm
  form.querySelectorAll<HTMLElement>('[data-dropzone]').forEach((dz) => {
    const input = dz.querySelector<HTMLInputElement>('input[type=file]');
    const list = dz.parentElement?.querySelector<HTMLElement>('[data-filelist]');
    const render = () => {
      if (!input || !list) return;
      const files = Array.from(input.files || []);
      const tooBig = files.some((f) => f.size > 20 * 1024 * 1024);
      list.innerHTML = files.map((f) => `<li>${f.name} <span>· ${(f.size / 1024 / 1024).toFixed(1)} MB</span></li>`).join('');
      dz.closest('.field')?.classList.toggle('is-invalid', tooBig);
    };
    input?.addEventListener('change', render);
    ['dragenter', 'dragover'].forEach((ev) => dz.addEventListener(ev, (e) => { e.preventDefault(); dz.classList.add('is-drag'); }));
    ['dragleave', 'drop'].forEach((ev) => dz.addEventListener(ev, (e) => { e.preventDefault(); dz.classList.remove('is-drag'); }));
    dz.addEventListener('drop', (e) => {
      const dt = (e as DragEvent).dataTransfer;
      if (input && dt?.files.length) { input.files = dt.files; render(); }
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateScope(form)) {
      // nếu lỗi nằm ở bước khác, chuyển tới bước đó
      const badStep = steps.findIndex((s) => s.querySelector('.is-invalid'));
      if (badStep >= 0 && badStep !== current) showStep(badStep);
      return;
    }
    const submit = form.querySelector<HTMLButtonElement>('[type=submit]');
    if (submit) { submit.disabled = true; submit.dataset.label = submit.textContent || ''; submit.textContent = 'Đang gửi…'; }
    const type = form.dataset.form || 'contact';
    const honeypot = form.querySelector<HTMLInputElement>('input[name=website]');
    try {
      if (honeypot?.value) throw new Error('spam');
      // endpoint lấy từ site.formEndpoint (data-endpoint); trống = chế độ demo
      const endpoint = form.dataset.endpoint;
      if (endpoint) {
        const res = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
        if (!res.ok) throw new Error(String(res.status));
      }
      // tải file sau khi để lại thông tin (hồ sơ năng lực / catalogue)
      const download = form.dataset.download;
      if (download) {
        const a = document.createElement('a');
        a.href = download; a.download = ''; document.body.appendChild(a); a.click(); a.remove();
      }
      // chờ một nhịp để trình duyệt bắt đầu tải file trước khi chuyển trang
      window.setTimeout(() => { window.location.href = href(`/cam-on/?type=${encodeURIComponent(type)}`); }, download ? 800 : 0);
    } catch {
      const err = form.querySelector<HTMLElement>('[data-form-error]');
      if (err) err.hidden = false;
      if (submit) { submit.disabled = false; submit.textContent = submit.dataset.label || 'Gửi'; }
    }
  });
});

/* ---------------------------------------------------------- Prefill RFQ từ query (?model=&category=&service=) */
const params = new URLSearchParams(window.location.search);
document.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('[data-prefill]').forEach((el) => {
  const v = params.get(el.dataset.prefill || '');
  if (!v) return;
  if (el instanceof HTMLInputElement && (el.type === 'radio' || el.type === 'checkbox')) {
    if (el.value === v) el.checked = true;
  } else el.value = v;
});
