/* МЮЗИКБОГС — интерактив, i18n и темы */
(function () {
  'use strict';

  /* ---------- Словари ---------- */
  const i18n = {
    ru: {
      'meta.title': 'МЮЗИКБОГС — Музыка богов. Эфир 24/7',
      'meta.desc': 'МЮЗИКБОГС — интернет-радиостанция. Музыка богов: миксы, лекции, пластинки, рецензии, интервью и обзоры фестивалей. Эфир 24/7.',
      'a11y.skip': 'Перейти к содержимому',
      'a11y.listen': 'Слушать эфир',
      'a11y.menuOpen': 'Открыть меню',
      'a11y.menuClose': 'Закрыть меню',
      'a11y.play': 'Воспроизвести / пауза',
      'a11y.mute': 'Выключить звук',
      'a11y.unmute': 'Включить звук',
      'a11y.themeLight': 'Включить светлую тему',
      'a11y.themeDark': 'Включить тёмную тему',
      'header.sub': 'МУЗЫКА БОГОВ · 24/7',
      'nav.air': 'Эфир', 'nav.schedule': 'Программа', 'nav.video': 'Видео',
      'nav.content': 'Контент', 'nav.about': 'О станции', 'nav.contact': 'Контакты',
      'hero.eyebrow': 'ПРЯМОЙ ЭФИР · БЕРЛИН / ИНТЕРНЕТ',
      'hero.tagline': 'МУЗЫКА <span>БОГОВ</span><br />для тех, кто слушает внимательно',
      'hero.desc': 'Неон, винил и хороший шум. Авторские миксы, разговоры о музыке и всё, что между ними — круглосуточно.',
      'hero.browse': 'СМОТРЕТЬ КОНТЕНТ',
      'hero.meta1': 'в эфире', 'hero.meta2': 'рубрик', 'hero.meta3': 'звук',
      'play.listen': 'СЛУШАТЬ', 'play.start': 'ВКЛЮЧИТЬ ЭФИР',
      'play.pause': 'ПАУЗА', 'play.card': 'СЛУШАТЬ ЭФИР',
      'live.live': 'LIVE', 'live.now': 'СЕЙЧАС ИГРАЕТ', 'live.bitrate': 'LIVE · 128 KBPS',
      'live.next': 'ДАЛЕЕ', 'live.nextValue': 'Лекторий · 11:00',
      'scroll.hint': 'ЛИСТАЙ',
      'sched.index': '01 / ЭФИР', 'sched.title': 'ПРОГРАММА <span>ДНЯ</span>',
      'sched.lead': 'Живой эфир, премьеры рубрик и повторы любимых выпусков. Выберите день — и мы покажем, что звучит в студии.',
      'sched.weekday': 'ПОНЕДЕЛЬ — ПЯТНИЦА', 'sched.weekend': 'СУББОТА — ВОСКРЕСЕНЬЕ',
      'sched.timezone': 'Время указано по Москве (GMT+3) · обновляется в момент эфира',
      'now.index': '01А / В ЭФИРЕ', 'now.title': 'ЧТО <span>ЗВУЧИТ</span>',
      'now.lead': 'Слушатель всегда должен знать: что играет сейчас, что будет дальше и что он пропустил. Поэтому мы показываем все три.',
      'now.live': 'СЕЙЧАС В ЭФИРЕ', 'now.listen': 'СЛУШАТЬ →',
      'now.next': 'ДАЛЕЕ В ПРОГРАММЕ', 'now.nextTitle': 'Лекторий',
      'now.nextDesc': 'Образовательная лекция или мастер-класс · 11:00',
      'now.next1': 'Энциклопедия · 5 пластинок', 'now.next2': 'Топ-10 любимых треков', 'now.next3': 'Ночной микс',
      'now.recent': 'НЕДАВНО ЗВУЧАЛО',
      'video.index': '01Б / ВИДЕО', 'video.title': 'ВИД <span>СТУДИИ</span>',
      'video.lead': 'Неон, ночной город и звук, от которого хочется ехать дальше. Саундтрек нашего эфира — в одном кадре.',
      'video.caption': 'Neon Lights · Dark Synthwave — royalty-free визуальный ряд для настроения МЮЗИКБОГС.',
      'video.cta': 'СМОТРЕТЬ НА YOUTUBE',
      'content.index': '02 / БИБЛИОТЕКА', 'content.title': '10 ПОВОДОВ <span>СЛУШАТЬ</span>',
      'content.lead': 'Наш контент — не просто фон. Это десять дверей в мир звука: от виниловой энциклопедии до репортажей с фестивалей.',
      'filter.all': 'ВСЁ', 'filter.audio': 'АУДИО', 'filter.text': 'ТЕКСТЫ',
      'search.placeholder': 'Поиск по рубрикам',
      'card.audio': 'АУДИО · ЭФИР', 'card.text': 'ТЕКСТ · БИБЛИОТЕКА',
      'about.index': '03 / МАНИФЕСТ',
      'about.quote': '«Мы не играем музыку.<br />Мы <em>пропускаем её через себя</em><br />и отдаём вам — в эфир».',
      'about.text': 'МЮЗИКБОГС — независимая радиостанция для тех, кто верит: музыка может быть божественной. Мы собираем редкие пластинки, разбираем культовые фильмы, говорим с теми, кто создаёт звук, и делимся находками каждую неделю.',
      'about.stat1': 'авторских рубрик', 'about.stat2': 'сигнал, который не выключается',
      'sub.index': '04 / СИГНАЛ', 'sub.title': 'НЕ ПРОПУСТИ <span>ЭФИР</span>',
      'sub.lead': 'Раз в неделю — свежие выпуски, плейлисты и приглашения в студию. Без шума.',
      'sub.label': 'ВАША ПОЧТА', 'sub.button': 'ПОДПИСАТЬСЯ',
      'sub.note': 'Нажимая кнопку, вы соглашаетесь получать нашу радиорассылку.',
      'sub.error': 'Проверьте адрес электронной почты.',
      'sub.success': 'Сигнал принят. Спасибо — вы в рассылке МЮЗИКБОГС.',
      'footer.tagline': 'Музыка богов. Круглосуточно.',
      'footer.air': 'ЭФИР', 'footer.liveLink': 'Прямой эфир', 'footer.schedule': 'Программа',
      'footer.library': 'Библиотека', 'footer.station': 'СТАНЦИЯ', 'footer.about': 'О нас',
      'footer.subscribe': 'Подписка', 'footer.contacts': 'Контакты', 'footer.contact': 'СВЯЗЬ',
      'footer.made': 'СДЕЛАНО СО ЗВУКОМ'
    },
    en: {
      'meta.title': 'MUZIKBOGS — Music of the Gods. On air 24/7',
      'meta.desc': 'MUZIKBOGS — internet radio. Music of the gods: mixes, lectures, vinyl, reviews, interviews and festival reports. On air 24/7.',
      'a11y.skip': 'Skip to content',
      'a11y.listen': 'Listen live',
      'a11y.menuOpen': 'Open menu',
      'a11y.menuClose': 'Close menu',
      'a11y.play': 'Play / pause',
      'a11y.mute': 'Mute',
      'a11y.unmute': 'Unmute',
      'a11y.themeLight': 'Switch to light theme',
      'a11y.themeDark': 'Switch to dark theme',
      'header.sub': 'MUSIC OF THE GODS · 24/7',
      'nav.air': 'Live', 'nav.schedule': 'Schedule', 'nav.video': 'Video',
      'nav.content': 'Content', 'nav.about': 'About', 'nav.contact': 'Contact',
      'hero.eyebrow': 'LIVE STREAM · BERLIN / ONLINE',
      'hero.tagline': 'MUSIC <span>OF THE GODS</span><br />for those who really listen',
      'hero.desc': 'Neon, vinyl and good noise. Original mixes, conversations about music and everything in between — around the clock.',
      'hero.browse': 'EXPLORE CONTENT',
      'hero.meta1': 'on air', 'hero.meta2': 'columns', 'hero.meta3': 'sound',
      'play.listen': 'LISTEN', 'play.start': 'START STREAM',
      'play.pause': 'PAUSE', 'play.card': 'LISTEN LIVE',
      'live.live': 'LIVE', 'live.now': 'NOW PLAYING', 'live.bitrate': 'LIVE · 128 KBPS',
      'live.next': 'UP NEXT', 'live.nextValue': 'Lecture Hall · 11:00',
      'scroll.hint': 'SCROLL',
      'sched.index': '01 / ON AIR', 'sched.title': 'TODAY’S <span>SCHEDULE</span>',
      'sched.lead': 'Live shows, column premieres and replays. Pick a day and see what is on in the studio.',
      'sched.weekday': 'MONDAY — FRIDAY', 'sched.weekend': 'SATURDAY — SUNDAY',
      'sched.timezone': 'All times Moscow (GMT+3) · updated live',
      'now.index': '01A / ON AIR', 'now.title': 'WHAT’S <span>PLAYING</span>',
      'now.lead': 'A listener should always know: what is on now, what comes next and what they missed. So we show all three.',
      'now.live': 'ON AIR NOW', 'now.listen': 'LISTEN →',
      'now.next': 'UP NEXT', 'now.nextTitle': 'Lecture Hall',
      'now.nextDesc': 'Music lecture or masterclass · 11:00',
      'now.next1': 'Encyclopedia · 5 records', 'now.next2': 'Top 10 favourite tracks', 'now.next3': 'Night Mix',
      'now.recent': 'RECENTLY PLAYED',
      'video.index': '01B / VIDEO', 'video.title': 'THE <span>STUDIO VIBE</span>',
      'video.lead': 'Neon, night city and a sound that makes you keep driving. The soundtrack of our stream — in one frame.',
      'video.caption': 'Neon Lights · Dark Synthwave — royalty-free visuals for the mood of МЮЗИКБОГС.',
      'video.cta': 'WATCH ON YOUTUBE',
      'content.index': '02 / LIBRARY', 'content.title': '10 REASONS <span>TO LISTEN</span>',
      'content.lead': 'Our content is not just background. Ten doors into the world of sound: from a vinyl encyclopedia to festival reports.',
      'filter.all': 'ALL', 'filter.audio': 'AUDIO', 'filter.text': 'ARTICLES',
      'search.placeholder': 'Search columns',
      'card.audio': 'AUDIO · ON AIR', 'card.text': 'TEXT · LIBRARY',
      'about.index': '03 / MANIFESTO',
      'about.quote': '«We don’t play music.<br />We <em>run it through ourselves</em><br />and give it back — on air».',
      'about.text': 'МЮЗИКБОГС is an independent radio station for those who believe music can be divine. We hunt rare records, dissect cult films, talk to the people who make sound, and share our findings every week.',
      'about.stat1': 'author columns', 'about.stat2': 'one signal that never stops',
      'sub.index': '04 / SIGNAL', 'sub.title': 'DON’T MISS <span>THE AIR</span>',
      'sub.lead': 'Once a week: fresh episodes, playlists and studio invitations. No noise.',
      'sub.label': 'YOUR EMAIL', 'sub.button': 'SUBSCRIBE',
      'sub.note': 'By subscribing you agree to receive the МЮЗИКБОГС newsletter.',
      'sub.error': 'Please check your email address.',
      'sub.success': 'Signal received. Thanks — you’re on the МЮЗИКБОГС list.',
      'footer.tagline': 'Music of the gods. Around the clock.',
      'footer.air': 'ON AIR', 'footer.liveLink': 'Live stream', 'footer.schedule': 'Schedule',
      'footer.library': 'Library', 'footer.station': 'STATION', 'footer.about': 'About',
      'footer.subscribe': 'Subscribe', 'footer.contacts': 'Contacts', 'footer.contact': 'GET IN TOUCH',
      'footer.made': 'MADE WITH SOUND'
    }
  };

  /* ---------- Контент ---------- */
  const content = [
    { num: '01', type: 'audio',
      ru: { title: 'Миксы', desc: 'Авторские миксы от ночного техно до утреннего соула. Каждый выпуск — история, рассказанная треками.', meta: '45 мин · выпуск в эфире' },
      en: { title: 'Mixes', desc: 'Original mixes from late-night techno to morning soul. Every episode is a story told through tracks.', meta: '45 min · on air' } },
    { num: '02', type: 'audio',
      ru: { title: 'Образовательные лекции и мастер-классы', desc: 'Разборы саунд-дизайна, истории музыки и практика для своих: от первой песни до собственного релиза.', meta: '60 мин · эфир' },
      en: { title: 'Lectures & masterclasses', desc: 'Sound design breakdowns, music history and hands-on practice: from your first song to your own release.', meta: '60 min · on air' } },
    { num: '03', type: 'text',
      ru: { title: '5 пластинок раз в две недели', desc: 'Выкладка из энциклопедии Ларса Пакоры: пять пластинок — редкие находки и обязательная классика.', meta: 'читать 6 мин · архив' },
      en: { title: '5 records every two weeks', desc: 'From the Lars Pakora encyclopedia: five records — rare finds and essential classics.', meta: '6 min read · archive' } },
    { num: '04', type: 'audio',
      ru: { title: 'Топ-10 любимых треков', desc: 'Персональная подборка ведущих: десять треков разных жанров и лет — с комментариями и контекстом.', meta: '30 мин · эфир' },
      en: { title: 'Top 10 favourite tracks', desc: 'Our hosts’ personal picks: ten tracks across genres and eras — with comments and context.', meta: '30 min · on air' } },
    { num: '05', type: 'text',
      ru: { title: 'Рецензии на культовые фильмы о музыке', desc: 'Ленты о музыке и музыкантах всех времён и народов: честный разбор без лишнего пиетета.', meta: 'читать 8 мин · архив' },
      en: { title: 'Cult music film reviews', desc: 'Films about music and musicians of all times and peoples: honest takes without needless reverence.', meta: '8 min read · archive' } },
    { num: '06', type: 'text',
      ru: { title: 'История культовых платформ', desc: 'Хроники площадок и носителей, которые меняли музыку: от винила и кассеты до стриминга.', meta: 'читать 7 мин · архив' },
      en: { title: 'History of cult platforms', desc: 'Chronicles of the venues and formats that changed music: from vinyl and cassette to streaming.', meta: '7 min read · archive' } },
    { num: '07', type: 'text',
      ru: { title: 'Музыкальная мода и стиль', desc: 'Fashion и саунд: как музыка формировала образы, а образы — звучание целых эпох.', meta: 'читать 5 мин · архив' },
      en: { title: 'Music, fashion & style', desc: 'Fashion and sound: how music shaped images — and images shaped the sound of entire eras.', meta: '5 min read · archive' } },
    { num: '08', type: 'audio',
      ru: { title: 'Интервью с гостями студии', desc: 'Разговоры с теми, кто создаёт звук. И отдельный разговор — про небольшую аудиосистему для дома.', meta: '50 мин · эфир' },
      en: { title: 'Studio guest interviews', desc: 'Conversations with people who create sound. Plus a separate talk about a small home audio system.', meta: '50 min · on air' } },
    { num: '09', type: 'audio',
      ru: { title: 'Заметки о поездках', desc: 'Дорожные истории с публичными людьми (ЗЭЛ): города, сцены, закулисье и случайные встречи.', meta: '40 мин · эфир' },
      en: { title: 'Travel notes', desc: 'Road stories with public figures (ZEL): cities, stages, backstage and chance encounters.', meta: '40 min · on air' } },
    { num: '10', type: 'text',
      ru: { title: 'Обзоры муз-фестивалей', desc: 'Где быть этим летом: репортажи, лайнапы и честные впечатления с главных сцен страны и мира.', meta: 'читать 9 мин · архив' },
      en: { title: 'Festival reports', desc: 'Where to be this summer: reports, line-ups and honest impressions from the biggest stages.', meta: '9 min read · archive' } }
  ];

  const schedule = {
    weekday: [
      { time: '08:00', pink: false, ru: { title: 'Сигнал', desc: 'Утренний микс и разогрев эфира', tag: 'LIVE' }, en: { title: 'Signal', desc: 'Morning mix and warm-up', tag: 'LIVE' } },
      { time: '11:00', pink: false, ru: { title: 'Лекторий', desc: 'Образовательная лекция или мастер-класс', tag: 'LECTURE' }, en: { title: 'Lecture Hall', desc: 'Music lecture or masterclass', tag: 'LECTURE' } },
      { time: '14:00', pink: true, ru: { title: 'Энциклопедия', desc: 'Пластинки недели: пять находок', tag: 'VINYL' }, en: { title: 'Encyclopedia', desc: 'Records of the week: five finds', tag: 'VINYL' } },
      { time: '18:00', pink: false, ru: { title: 'Топ-10', desc: 'Любимые треки разных жанров и лет', tag: 'MUSIC' }, en: { title: 'Top 10', desc: 'Favourite tracks across genres and eras', tag: 'MUSIC' } },
      { time: '21:00', pink: true, ru: { title: 'Ночной микс', desc: 'Длинный сет без пауз', tag: 'LIVE' }, en: { title: 'Night Mix', desc: 'A long set with no breaks', tag: 'LIVE' } }
    ],
    weekend: [
      { time: '09:00', pink: false, ru: { title: 'Выходные с МБ', desc: 'Медленное утро и хороший винил', tag: 'LIVE' }, en: { title: 'Weekend with MB', desc: 'Slow morning and good vinyl', tag: 'LIVE' } },
      { time: '12:00', pink: true, ru: { title: 'Кино + звук', desc: 'Рецензии на фильмы о музыке', tag: 'FILM' }, en: { title: 'Cinema + sound', desc: 'Reviews of music films', tag: 'FILM' } },
      { time: '15:00', pink: false, ru: { title: 'Гости студии', desc: 'Интервью и разговоры о звуке', tag: 'INTERVIEW' }, en: { title: 'Studio guests', desc: 'Interviews and talks about sound', tag: 'INTERVIEW' } },
      { time: '18:00', pink: true, ru: { title: 'Фестивальный обзор', desc: 'Репортажи с главных сцен', tag: 'REPORT' }, en: { title: 'Festival report', desc: 'Reports from the main stages', tag: 'REPORT' } },
      { time: '22:00', pink: false, ru: { title: 'Ночной микс', desc: 'Снова до утра', tag: 'LIVE' }, en: { title: 'Night Mix', desc: 'Again until dawn', tag: 'LIVE' } }
    ]
  };

  const tracks = [
    { ru: { title: 'Тихий неон', artist: 'МЮЗИКБОГС · Ночной микс' }, en: { title: 'Silent Neon', artist: 'МЮЗИКБОГС · Night Mix' } },
    { ru: { title: 'Стеклянный город', artist: 'МЮЗИКБОГС · Энциклопедия' }, en: { title: 'Glass City', artist: 'МЮЗИКБОГС · Encyclopedia' } },
    { ru: { title: 'После полуночи', artist: 'МЮЗИКБОГС · Топ-10' }, en: { title: 'After Midnight', artist: 'МЮЗИКБОГС · Top 10' } },
    { ru: { title: 'Сигнал из Берлина', artist: 'МЮЗИКБОГС · Прямой эфир' }, en: { title: 'Signal from Berlin', artist: 'МЮЗИКБОГС · Live' } }
  ];

  /* ---------- Состояние ---------- */
  let lang = localStorage.getItem('mb-lang') === 'en' ? 'en' : 'ru';
  let theme = localStorage.getItem('mb-theme') === 'light' ? 'light' : 'dark';
  let currentDay = 'weekday';
  let activeFilter = 'all';
  let isPlaying = false;
  let trackIndex = 0;
  let progress = 0;
  let tick = 0;
  let timer = null;

  const t = key => i18n[lang][key] || i18n.ru[key] || key;

  /* ---------- Рендер ---------- */
  const cardsGrid = document.getElementById('cards-grid');
  const scheduleList = document.getElementById('schedule-list');

  function renderCards() {
    cardsGrid.innerHTML = content.map(item => {
      const d = item[lang];
      return `
        <article class="card reveal" data-type="${item.type}">
          <div class="card-art"><span class="card-num">${item.num}</span><span class="art-ring"></span><span class="art-line"></span></div>
          <span class="card-type">${t(item.type === 'audio' ? 'card.audio' : 'card.text')}</span>
          <span class="card-meta">${d.meta}</span>
          <h3>${d.title}</h3>
          <p>${d.desc}</p>
          <span class="card-arrow" aria-hidden="true">↗</span>
        </article>`;
    }).join('');
    observeReveals();
    applyFilters();
  }

  function renderSchedule(day) {
    currentDay = day;
    scheduleList.innerHTML = schedule[day].map((row, i) => {
      const d = row[lang];
      return `
        <div class="schedule-row" style="animation-delay:${i * 60}ms">
          <span class="sr-time">${row.time}</span>
          <span class="sr-title">${d.title}</span>
          <span class="sr-desc">${d.desc}</span>
          <span class="sr-tag ${row.pink ? 'sr-tag--pink' : ''}">${d.tag}</span>
        </div>`;
    }).join('');
  }

  /* ---------- Появление при скролле ---------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  function observeReveals() {
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((el, i) => {
      if (el.classList.contains('card')) el.style.transitionDelay = `${(i % 3) * 80}ms`;
      revealObserver.observe(el);
    });
  }

  /* ---------- Локализация ---------- */
  function applyI18n() {
    document.documentElement.lang = lang;
    document.title = t('meta.title');
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = t(el.dataset.i18n);
      if (el.dataset.i18nHtml === 'true') el.innerHTML = value;
      else if (el.dataset.i18nAttr) el.setAttribute(el.dataset.i18nAttr, value);
      else el.textContent = value;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.dataset.i18nAria;
      if (key !== 'a11y.lang' && key !== 'a11y.theme') el.setAttribute('aria-label', t(key));
    });
    document.getElementById('lang-btn').setAttribute('aria-label', lang === 'ru' ? 'Switch to English' : 'Переключить на русский');
    renderCards();
    renderSchedule(currentDay);
    setTrack(trackIndex, false);
    updatePlayerLabels();
    applyTheme();
    const note = document.getElementById('form-note');
    note.textContent = t('sub.note');
    note.classList.remove('is-error', 'is-success');
  }

  /* ---------- Тема ---------- */
  function applyTheme() {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('mb-theme', theme);
    const btn = document.getElementById('theme-btn');
    btn.textContent = theme === 'dark' ? '☾' : '☀';
    btn.setAttribute('aria-label', theme === 'dark' ? t('a11y.themeLight') : t('a11y.themeDark'));
    document.querySelector('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#07050e' : '#f6f1fa');
  }

  document.getElementById('lang-btn').addEventListener('click', () => {
    lang = lang === 'ru' ? 'en' : 'ru';
    localStorage.setItem('mb-lang', lang);
    applyI18n();
  });
  document.getElementById('theme-btn').addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    applyTheme();
  });

  /* ---------- Плеер ---------- */
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

  function setTrack(index, reset = true) {
    trackIndex = index % tracks.length;
    const data = tracks[trackIndex][lang];
    nowTitle.textContent = data.title;
    nowArtist.textContent = data.artist;
    miniTitle.textContent = data.title;
    miniArtist.textContent = data.artist;
    triadTitle.textContent = data.title;
    triadArtist.textContent = data.artist;
    if (reset) progress = 0;
    updateProgress();
  }

  function updateProgress() {
    progressFill.style.width = `${progress}%`;
    const sec = Math.floor((progress / 100) * 240);
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

  function updatePlayerLabels() {
    document.body.classList.toggle('is-playing', isPlaying);
    document.querySelectorAll('.btn-label').forEach(el => { el.textContent = isPlaying ? t('play.pause') : t('play.start'); });
    document.querySelectorAll('.card-play-text').forEach(el => { el.textContent = isPlaying ? t('play.pause') : t('play.card'); });
    document.querySelector('.listen-label').textContent = isPlaying ? t('play.pause') : t('play.listen');
    document.querySelectorAll('[data-play-toggle]').forEach(btn => btn.setAttribute('aria-pressed', String(isPlaying)));
  }

  function setPlaying(value) {
    isPlaying = value;
    updatePlayerLabels();
    if (isPlaying) { if (!timer) startTimer(); }
    else { clearInterval(timer); timer = null; }
  }

  document.querySelectorAll('[data-play-toggle]').forEach(btn => btn.addEventListener('click', () => setPlaying(!isPlaying)));

  const clock = document.getElementById('live-clock');
  function updateClock() {
    const d = new Date();
    clock.textContent = [d.getHours(), d.getMinutes(), d.getSeconds()].map(n => String(n).padStart(2, '0')).join(':');
  }
  updateClock();
  setInterval(updateClock, 1000);

  const miniPlayer = document.getElementById('mini-player');
  const hero = document.querySelector('.hero');
  function onScroll() {
    miniPlayer.classList.toggle('is-visible', window.scrollY > hero.offsetHeight * 0.65);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  document.getElementById('mute-btn').addEventListener('click', (e) => {
    const muted = e.currentTarget.classList.toggle('is-muted');
    e.currentTarget.querySelector('span').textContent = muted ? '◖×' : '◖))';
    e.currentTarget.setAttribute('aria-label', muted ? t('a11y.unmute') : t('a11y.mute'));
  });

  /* ---------- Табы, фильтры, поиск ---------- */
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(x => { x.classList.remove('is-active'); x.setAttribute('aria-selected', 'false'); });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      renderSchedule(tab.dataset.day);
    });
  });

  function applyFilters() {
    const query = document.getElementById('content-search').value.trim().toLowerCase();
    document.querySelectorAll('.card').forEach(card => {
      const typeOk = activeFilter === 'all' || card.dataset.type === activeFilter;
      const queryOk = !query || card.textContent.toLowerCase().includes(query);
      card.classList.toggle('is-hidden', !(typeOk && queryOk));
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

  /* ---------- Меню, форма ---------- */
  const menuBtn = document.getElementById('menu-btn');
  const nav = document.getElementById('main-nav');
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? t('a11y.menuClose') : t('a11y.menuOpen'));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }));

  const form = document.getElementById('subscribe-form');
  const note = document.getElementById('form-note');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    note.classList.remove('is-error', 'is-success');
    if (!valid) { note.textContent = t('sub.error'); note.classList.add('is-error'); return; }
    note.textContent = t('sub.success');
    note.classList.add('is-success');
    form.reset();
  });

  /* ---------- Старт ---------- */
  applyI18n();
  observeReveals();
  onScroll();
})();
