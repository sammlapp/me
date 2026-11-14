// ---- email (assembled here so it isn't sitting in the HTML for scrapers) ----
document.querySelectorAll('a.email').forEach(a => {
  const addr = a.dataset.u + '@' + a.dataset.h;
  a.href = 'mailto:' + addr;
  a.textContent = addr;
});

// ---- tabs: smooth-scroll to a section, highlight the one in view ----
const sc = document.getElementById('scroller');
const tabs = [...document.querySelectorAll('.tab')];
const secs = tabs.map(t => document.querySelector(t.getAttribute('href')));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

function spy() {
  const mid = sc.getBoundingClientRect().top + 140;
  let cur = 0;
  secs.forEach((s, i) => { if (s.getBoundingClientRect().top <= mid) cur = i; });
  if (sc.scrollTop + sc.clientHeight >= sc.scrollHeight - 4) cur = secs.length - 1;
  tabs.forEach((t, i) => t.classList.toggle('on', i === cur));
}
sc.addEventListener('scroll', spy, { passive: true });
addEventListener('scroll', spy, { passive: true }); // narrow layout scrolls the window
tabs.forEach((t, i) => t.addEventListener('click', e => {
  e.preventDefault();
  secs[i].scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
}));
spy();

// ---- wheel / keys anywhere on the page scroll the content column ----
function scrollable() { return sc.scrollHeight > sc.clientHeight + 1; }
addEventListener('wheel', e => {
  if (sc.contains(e.target) || !scrollable()) return;
  const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? sc.clientHeight : 1;
  sc.scrollBy({ top: e.deltaY * unit, behavior: 'instant' });
}, { passive: true });

addEventListener('keydown', e => {
  if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey || !scrollable()) return;
  if (document.activeElement !== document.body) return; // don't hijack keys inside links/buttons
  const page = sc.clientHeight * .85;
  const moves = { PageDown: page, PageUp: -page, ArrowDown: 60, ArrowUp: -60, ' ': e.shiftKey ? -page : page };
  if (e.key in moves) { e.preventDefault(); sc.scrollBy({ top: moves[e.key], behavior: reduce ? 'auto' : 'smooth' }); }
  else if (e.key === 'Home') { e.preventDefault(); sc.scrollTo({ top: 0 }); }
  else if (e.key === 'End') { e.preventDefault(); sc.scrollTo({ top: sc.scrollHeight }); }
});

// ---- background photo cycle: two layers crossfade ----
// pos: where the subject sits in frame; dim: extra brightness multiplier for very bright photos
const PHOTOS = [
  { src: 'asset/img/bg/elepaio.jpg',                pos: '50% 50%', cap: 'Hawaiʻi ʻelepaio' },
  { src: 'asset/img/bg/chestnut-sided-warbler.jpg', pos: '55% 50%', cap: 'Chestnut-sided Warbler' },
  { src: 'asset/img/bg/scarlet-rumped-cacique.jpg', pos: '55% 50%', cap: 'Scarlet-rumped Cacique' },
  { src: 'asset/img/bg/anianiau.jpg',               pos: '35% 50%', cap: 'ʻAnianiau' },
  { src: 'asset/img/bg/streaked-flycatcher.jpg',    pos: '60% 50%', cap: 'Streaked Flycatcher' },
  { src: 'asset/img/bg/frog.jpg',                   pos: '60% 50%', cap: '' },
  { src: 'asset/img/bg/glass-frog.jpg',             pos: '50% 50%', cap: '', dim: .8 },
  { src: 'asset/img/bg/sierra-lake.jpg',            pos: '50% 50%', cap: '', dim: .7 },
];
const INTERVAL = 9000;
const layers = [...document.querySelectorAll('.bg .layer')];
const dotsEl = document.getElementById('dots');
const capEl = document.getElementById('cap');
let idx = 0, front = 0, timer;

PHOTOS.forEach((p, i) => {
  const d = document.createElement('button');
  d.className = 'dot';
  d.setAttribute('aria-label', 'Show photo ' + (i + 1) + (p.cap ? ': ' + p.cap : ''));
  d.onclick = () => { go(i); restart(); };
  dotsEl.appendChild(d);
});

const preload = i => { new Image().src = PHOTOS[(i + PHOTOS.length) % PHOTOS.length].src; };

function go(i) {
  idx = (i + PHOTOS.length) % PHOTOS.length;
  const p = PHOTOS[idx], next = layers[front ^ 1], prev = layers[front];
  next.style.backgroundImage = `url("${p.src}")`;
  next.style.backgroundPosition = p.pos;
  next.style.filter = p.dim ? `brightness(${p.dim})` : '';
  next.classList.remove('drift'); void next.offsetWidth; // restart the slow drift
  next.classList.add('on', 'drift');
  prev.classList.remove('on');
  front ^= 1;
  [...dotsEl.children].forEach((d, k) => { d.classList.toggle('on', k === idx); d.toggleAttribute('aria-current', k === idx); });
  capEl.textContent = p.cap ? 'Photo: ' + p.cap : '';
  preload(idx + 1);
}
function restart() {
  clearInterval(timer);
  if (!reduce && !document.hidden) timer = setInterval(() => go(idx + 1), INTERVAL);
}
document.addEventListener('visibilitychange', restart);

go(0);
restart();
sc.focus({ preventScroll: true }); // so arrow / space keys scroll the content straight away
