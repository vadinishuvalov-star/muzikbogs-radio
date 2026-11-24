/* МЮЗИКБОГС — particle text (сборка / разлёт / возврат) */
(function () {
  'use strict';

  const container = document.getElementById('particle-text');
  const canvas = document.getElementById('particle-canvas');
  if (!container || !canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const TEXT = 'МЮЗИКБОГС';
  const TAU = Math.PI * 2;
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let reduced = motionQuery.matches;

  let particles = [];
  let width = 0, height = 0, dpr = 1;
  let raf = 0, last = 0, visible = true;
  let gathering = false, gatherStart = 0, bursting = false;
  let buildFrame = 0;
  const pointer = { active: false, x: 0, y: 0, sx: 0, sy: 0 };

  let COLORS = [];
  let buckets = [];
  function palette() {
    const light = document.documentElement.dataset.theme === 'light';
    const cyan = light ? [0, 127, 166] : [92, 234, 255];
    const pink = light ? [201, 24, 130] : [255, 46, 166];
    const out = [];
    for (let i = 0; i < 24; i++) {
      const t = i / 23;
      const from = t < 0.5 ? cyan : pink;
      const to = t < 0.5 ? pink : cyan;
      const k = t < 0.5 ? t * 2 : (t - 0.5) * 2;
      const c = from.map((v, j) => Math.round(v + (to[j] - v) * k));
      out.push(`rgb(${c[0]},${c[1]},${c[2]})`);
    }
    return out;
  }
  function refreshPalette() {
    COLORS = palette();
    buckets = COLORS.map(() => []);
  }
  refreshPalette();

  function build() {
    const rect = container.getBoundingClientRect();
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);

    const off = document.createElement('canvas');
    off.width = width; off.height = height;
    const o = off.getContext('2d', { willReadFrequently: true });
    if (!o) return;

    let size = Math.min(150, Math.max(52, width / 7.15));
    const font = s => `900 ${s}px "Arial Narrow", Arial, sans-serif`;
    o.font = font(size);
    let metrics = o.measureText(TEXT);
    const maxW = width * 0.94;
    if (metrics.width > maxW) {
      size = Math.max(26, size * (maxW / metrics.width));
      o.font = font(size);
      metrics = o.measureText(TEXT);
    }
    o.clearRect(0, 0, width, height);
    o.fillStyle = '#fff';
    o.textAlign = 'center';
    o.textBaseline = 'middle';
    o.fillText(TEXT, width / 2, height / 2 + size * 0.02);

    const data = o.getImageData(0, 0, width, height).data;
    const step = width < 640 ? 3 : 4;
    const targets = [];
    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        if (data[(y * width + x) * 4 + 3] > 60) targets.push({ x, y });
      }
    }
    const limit = width < 640 ? 1900 : 4000;
    const stride = Math.max(1, Math.ceil(targets.length / limit));
    const chosen = targets.filter((_, i) => i % stride === 0);

    particles = chosen.map((p, i) => {
      const seed = ((i * 9301 + 49297) % 233280) / 233280;
      const depth = 0.5 + seed * 0.7;
      const tone = Math.min(COLORS.length - 1, Math.floor((p.x / width) * COLORS.length));
      const angle = seed * TAU;
      const dist = reduced ? 0 : 110 * (0.35 + depth * 0.8);
      const sx = p.x + Math.cos(angle) * dist;
      const sy = p.y + Math.sin(angle) * dist;
      return {
        x: p.x, y: p.y, tx: p.x, ty: p.y, sx, sy,
        seed, depth, tone, delay: seed * 420,
        ox: 0, oy: 0, vx: 0, vy: 0
      };
    });

    gathering = !reduced;
    gatherStart = performance.now();
    bursting = false;
    if (reduced) particles.forEach(p => { p.x = p.tx; p.y = p.ty; });
    else particles.forEach(p => { p.x = p.sx; p.y = p.sy; });

    if (!pointer.active) {
      pointer.x = pointer.sx = width / 2;
      pointer.y = pointer.sy = height / 2;
    }
    last = 0;
    draw(performance.now());
    wake();
  }

  function queueBuild() {
    if (buildFrame) cancelAnimationFrame(buildFrame);
    buildFrame = requestAnimationFrame(() => { buildFrame = 0; build(); });
  }

  function draw(now) {
    raf = 0;
    const dt = last ? Math.min(0.05, Math.max(0, (now - last) / 1000)) : 1 / 60;
    last = now;
    const frames = Math.max(dt * 60, 0.001);
    const follow = reduced ? 1 : 1 - Math.pow(0.78, frames);
    const chase = 1 - Math.pow(0.82, frames);
    pointer.sx += (pointer.x - pointer.sx) * chase;
    pointer.sy += (pointer.y - pointer.sy) * chase;
    const repel = pointer.active && !reduced;
    const time = now * 0.001;
    for (const b of buckets) b.length = 0;

    let moving = false, stillGathering = false;

    for (const p of particles) {
      let bx = p.tx, by = p.ty, progress = 1;
      if (gathering) {
        progress = Math.min(1, Math.max(0, (now - gatherStart - p.delay) / 1500));
        const e = 1 - Math.pow(1 - progress, 3);
        bx = p.sx + (p.tx - p.sx) * e;
        by = p.sy + (p.ty - p.sy) * e;
        if (progress < 1) stillGathering = true;
      } else if (!reduced) {
        bx += Math.sin(time * 0.9 + p.seed * 10) * 0.8 * p.depth;
        by += Math.cos(time * 0.75 + p.depth * 10) * 0.65 * p.depth;
      }

      if (bursting && !reduced) {
        p.vx += (-18 * p.ox - 7.5 * p.vx) * dt;
        p.vy += (-18 * p.oy - 7.5 * p.vy) * dt;
        p.ox += p.vx * dt;
        p.oy += p.vy * dt;
        if (Math.abs(p.ox) + Math.abs(p.oy) + Math.abs(p.vx) + Math.abs(p.vy) > 0.5) moving = true;
        else { p.ox = p.oy = p.vx = p.vy = 0; }
        bx += p.ox; by += p.oy;
      }

      if (repel) {
        const dx = bx - pointer.sx, dy = by - pointer.sy;
        const d = Math.hypot(dx, dy);
        if (d > 0 && d < 100) {
          const force = Math.pow(1 - d / 100, 2) * 38;
          bx += (dx / d) * force;
          by += (dy / d) * force;
        }
      }

      const mx = (bx - p.x) * follow, my = (by - p.y) * follow;
      p.x += mx; p.y += my;
      if (Math.abs(mx) + Math.abs(my) > 0.05) moving = true;

      const heat = reduced ? p.tone : Math.min(COLORS.length - 1, p.tone + Math.floor(Math.hypot(p.x - p.tx, p.y - p.ty) / 16));
      buckets[heat].push(p);
    }

    if (gathering && !stillGathering) gathering = false;
    if (bursting && !moving) bursting = false;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    for (let i = 0; i < buckets.length; i++) {
      const group = buckets[i];
      if (!group.length) continue;
      ctx.fillStyle = COLORS[i];
      ctx.beginPath();
      for (const p of group) {
        const r = reduced ? 1.7 : 1.1 + p.depth * 0.65;
        ctx.moveTo(p.x + r, p.y);
        ctx.arc(p.x, p.y, r, 0, TAU);
      }
      ctx.fill();
    }
    return !reduced || gathering || moving || repel || bursting;
  }

  function frame(now) {
    const busy = draw(now);
    if (busy && visible) wake();
  }
  function wake() {
    if (!raf && visible) { last = 0; raf = requestAnimationFrame(frame); }
  }

  function locate(e) {
    const r = canvas.getBoundingClientRect();
    pointer.x = e.clientX - r.left;
    pointer.y = e.clientY - r.top;
  }
  canvas.addEventListener('pointermove', e => {
    locate(e);
    if (!pointer.active) { pointer.sx = pointer.x; pointer.sy = pointer.y; }
    pointer.active = true;
    wake();
  });
  canvas.addEventListener('pointerleave', () => { pointer.active = false; wake(); });
  canvas.addEventListener('pointerdown', e => {
    if (reduced) return;
    locate(e);
    for (const p of particles) {
      const dx = p.x - pointer.x, dy = p.y - pointer.y;
      const d = Math.hypot(dx, dy);
      if (d > 0 && d < 130) {
        const power = (1 - d / 130) * 700;
        const a = Math.atan2(dy, dx) + (p.seed - 0.5) * 0.7;
        p.vx += Math.cos(a) * power;
        p.vy += Math.sin(a) * power;
      }
    }
    bursting = true;
    wake();
  });

  const resizeObserver = new ResizeObserver(queueBuild);
  resizeObserver.observe(container);
  const intersectionObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) wake();
  });
  intersectionObserver.observe(container);
  motionQuery.addEventListener('change', e => { reduced = e.matches; queueBuild(); });
  const themeObserver = new MutationObserver(() => { refreshPalette(); queueBuild(); });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  build();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(queueBuild);
})();
