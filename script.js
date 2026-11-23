/* МЮЗИКБОГС — интерактив сайта */
(function () {
  'use strict';

  /* ---------- Контент: 10 рубрик из письма редакции ---------- */
  const content = [
    {
      num: '01', type: 'audio', title: 'Миксы',
      desc: 'Авторские миксы от ночного техно до утреннего соула. Каждый выпуск — история, рассказанная треками.'
    },
    {
      num: '02', type: 'audio', title: 'Образовательные лекции и мастер-классы',
      desc: 'Разборы саунд-дизайна, истории музыки и практика для своих: от первой песни до собственного релиза.'
    },
    {
      num: '03', type: 'text', title: '5 пластинок раз в две недели',
      desc: 'Выкладка из энциклопедии Ларса Пакоры: пять пластинок — редкие находки и обязательная классика.'
    },
    {
      num: '04', type: 'audio', title: 'Топ-10 любимых треков',
      desc: 'Персональная подборка ведущих: десять треков разных жанров и лет — с комментариями и контекстом.'
    },
    {
      num: '05', type: 'text', title: 'Рецензии на культовые фильмы о музыке',
      desc: 'Ленты о музыке и музыкантах всех времён и народов: честный разбор без лишнего пиетета.'
    },
    {
      num: '06', type: 'text', title: 'История культовых платформ',
      desc: 'Хроники площадок и носителей, которые меняли музыку: от винила и кассеты до стриминга.'
    },
    {
      num: '07', type: 'text', title: 'Музыкальная мода и стиль',
      desc: 'Fashion и саунд: как музыка формировала образы, а образы — звучание целых эпох.'
    },
    {
      num: '08', type: 'audio', title: 'Интервью с гостями студии',
      desc: 'Разговоры с теми, кто создаёт звук. И отдельный разговор — про небольшую аудиосистему для дома.'
    },
    {
      num: '09', type: 'audio', title: 'Заметки о поездках',
      desc: 'Дорожные истории с публичными людьми (ЗЭЛ): города, сцены, закулисье и случайные встречи.'
    },
    {
      num: '10', type: 'text', title: 'Обзоры муз-фестивалей',
      desc: 'Где быть этим летом: репортажи, лайнапы и честные впечатления с главных сцен страны и мира.'
    }
  ];

  const schedule = {
    weekday: [
      { time: '08:00', title: 'Сигнал', desc: 'Утренний микс и разогрев эфира', tag: 'LIVE' },
      { time: '11:00', title: 'Лекторий', desc: 'Образовательная лекция или мастер-класс', tag: 'ОБУЧЕНИЕ' },
      { time: '14:00', title: 'Энциклопедия', desc: 'Пластинки недели: пять находок', tag: 'ВИНИЛ', pink: true },
      { time: '18:00', title: 'Топ-10', desc: 'Любимые треки разных жанров и лет', tag: 'МУЗЫКА' },
      { time: '21:00', title: 'Ночной микс', desc: 'Длинный сет без пауз', tag: 'LIVE', pink: true }
    ],
    weekend: [
      { time: '09:00', title: 'Выходные с МБ', desc: 'Медленное утро и хороший винил', tag: 'LIVE' },
      { time: '12:00', title: 'Кино + звук', desc: 'Рецензии на фильмы о музыке', tag: 'КИНО', pink: true },
      { time: '15:00', title: 'Гости студии', desc: 'Интервью и разговоры о звуке', tag: 'ИНТЕРВЬЮ' },
      { time: '18:00', title: 'Фестивальный обзор', desc: 'Репортажи с главных сцен', tag: 'РЕПОРТАЖ', pink: true },
      { time: '22:00', title: 'Ночной микс', desc: 'Снова до утра', tag: 'LIVE' }
    ]
  };

  const tracks = [
    { title: 'Тихий неон', artist: 'МЮЗИКБОГС · Ночной микс' },
    { title: 'Стеклянный город', artist: 'МЮЗИКБОГС · Энциклопедия' },
    { title: 'После полуночи', artist: 'МЮЗИКБОГС · Топ-10' },
    { title: 'Сигнал из Берлина', artist: 'МЮЗИКБОГС · Прямой эфир' }
  ];

  /* ---------- Рендер блоков ---------- */
  const cardsGrid = document.getElementById('cards-grid');
  cardsGrid.innerHTML = content.map(item => `
    <article class="card reveal" data-type="${item.type}">
      <span class="card-num">${item.num}</span>
      <span class="card-type">${item.type === 'audio' ? 'АУДИО · ЭФИР' : 'ТЕКСТ · БИБЛИОТЕКА'}</span>
      <span class="card-meta">${item.type === 'audio' ? '45 мин · выпуск в эфире' : 'читать 6 мин · архив'}</span>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <span class="card-arrow" aria-hidden="true">↗</span>
    </article>
  `).join('');

  const scheduleList = document.getElementById('schedule-list');
  function renderSchedule(day) {
    scheduleList.innerHTML = schedule[day].map((row, i) => `
      <div class="schedule-row" style="animation-delay:${i * 60}ms">
        <span class="sr-time">${row.time}</span>
        <span class="sr-title">${row.title}</span>
        <span class="sr-desc">${row.desc}</span>
        <span class="sr-tag ${row.pink ? 'sr-tag--pink' : ''}">${row.tag}</span>
      </div>
    `).join('');
  }
  renderSchedule('weekday');

  /* ---------- Появление при скролле ---------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    if (el.classList.contains('card')) el.style.transitionDelay = `${(i % 3) * 90}ms`;
    revealObserver.observe(el);
  });

  /* ---------- Плеер ---------- */
  let isPlaying = false;
  let trackIndex = 0;
  let progress = 0;
  let tick = 0;
  let timer = null;

  const progressFill = document.getElementById('progress-fill');
  const nowTime = document.getElementById('now-time');
  const nowTitle = document.getElementById('now-title');
  const nowArtist = document.getElementById('now-artist');
  const miniTitle = document.getElementById('mini-title');
  const miniArtist = document.getElementById('mini-artist');
  const triadTitle = document.getElementById('triad-title');
  const triadArtist = document.getElementById('triad-artist');
  const triadProgress = document.getElementById('triad-progress');
  const triadTime = document.getElementById('triad-time');

  function setTrack(index) {
    trackIndex = index % tracks.length;
    const t = tracks[trackIndex];
    nowTitle.textContent = t.title;
    nowArtist.textContent = t.artist;
    miniTitle.textContent = t.title;
    miniArtist.textContent = t.artist;
    triadTitle.textContent = t.title;
    triadArtist.textContent = t.artist;
    progress = 0;
    updateProgress();
  }

  function updateProgress() {
    progressFill.style.width = `${progress}%`;
    const total = 240;
    const sec = Math.floor((progress / 100) * total);
    const formatted = `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}`;
    nowTime.textContent = formatted;
    triadProgress.style.width = `${progress}%`;
    triadTime.textContent = `${formatted} / LIVE`;
  }

  function startTimer() {
    timer = setInterval(() => {
      progress += 0.45;
      tick++;
      if (progress >= 100) { setTrack(trackIndex + 1); return; }
      if (tick % 26 === 0) setTrack(trackIndex + 1);
      updateProgress();
    }, 1000);
  }

  function setPlaying(value) {
    isPlaying = value;
    document.body.classList.toggle('is-playing', isPlaying);
    document.querySelectorAll('.btn-label').forEach(el => {
      el.textContent = isPlaying ? 'ПАУЗА' : 'ВКЛЮЧИТЬ ЭФИР';
    });
    document.querySelectorAll('.card-play-text').forEach(el => {
      el.textContent = isPlaying ? 'ПАУЗА' : 'СЛУШАТЬ ЭФИР';
    });
    document.querySelectorAll('[data-play-toggle]').forEach(btn => {
      btn.setAttribute('aria-pressed', String(isPlaying));
    });
    if (isPlaying) {
      if (!timer) startTimer();
    } else {
      clearInterval(timer);
      timer = null;
    }
  }

  document.querySelectorAll('[data-play-toggle]').forEach(btn => {
    btn.addEventListener('click', () => setPlaying(!isPlaying));
  });
  setTrack(0);

  /* Часы эфира */
  const clock = document.getElementById('live-clock');
  function updateClock() {
    const d = new Date();
    clock.textContent = [d.getHours(), d.getMinutes(), d.getSeconds()]
      .map(n => String(n).padStart(2, '0')).join(':');
  }
  updateClock();
  setInterval(updateClock, 1000);

  /* Мини-плеер при скролле */
  const miniPlayer = document.getElementById('mini-player');
  const hero = document.querySelector('.hero');
  function onScroll() {
    const limit = hero.offsetHeight * 0.65;
    miniPlayer.classList.toggle('is-visible', window.scrollY > limit);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Кнопка mute (визуальная) */
  document.getElementById('mute-btn').addEventListener('click', (e) => {
    const muted = e.currentTarget.classList.toggle('is-muted');
    e.currentTarget.querySelector('span').textContent = muted ? '◖×' : '◖))';
    e.currentTarget.setAttribute('aria-label', muted ? 'Включить звук' : 'Выключить звук');
  });

  /* ---------- Табы расписания ---------- */
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      renderSchedule(tab.dataset.day);
    });
  });

  /* ---------- Фильтр + поиск по контенту ---------- */
  let activeFilter = 'all';
  function applyFilters() {
    const query = document.getElementById('content-search').value.trim().toLowerCase();
    document.querySelectorAll('.card').forEach(card => {
      const matchesType = activeFilter === 'all' || card.dataset.type === activeFilter;
      const matchesQuery = !query || card.textContent.toLowerCase().includes(query);
      card.classList.toggle('is-hidden', !(matchesType && matchesQuery));
    });
  }
  document.querySelectorAll('.filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(f => f.classList.remove('is-active'));
      btn.classList.add('is-active');
      activeFilter = btn.dataset.filter;
      applyFilters();
    });
  });
  document.getElementById('content-search').addEventListener('input', applyFilters);

  /* ---------- Мобильное меню ---------- */
  const menuBtn = document.getElementById('menu-btn');
  const nav = document.getElementById('main-nav');
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }));

  /* ---------- Подписка ---------- */
  const form = document.getElementById('subscribe-form');
  const note = document.getElementById('form-note');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    note.classList.remove('is-error', 'is-success');
    if (!valid) {
      note.textContent = 'Проверьте адрес электронной почты.';
      note.classList.add('is-error');
      return;
    }
    note.textContent = 'Сигнал принят. Спасибо — вы в рассылке МЮЗИКБОГС.';
    note.classList.add('is-success');
    form.reset();
  });
})();
