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
      'a11y.volume': 'Громкость',
      'a11y.eq': 'Открыть эквалайзер',
      'a11y.eqClose': 'Закрыть эквалайзер',
      'stream.idle': 'ОРИГИНАЛЬНЫЙ ДЕМО-СИГНАЛ · НАЖМИТЕ «СЛУШАТЬ»',
      'stream.connecting': 'ПОДГОТОВКА ЗВУКА…',
      'stream.buffering': 'БУФЕРИЗАЦИЯ…',
      'stream.live': 'ЭФИР · ОРИГИНАЛЬНЫЙ ДЕМО-СИГНАЛ',
      'stream.error': 'ЗВУК НЕДОСТУПЕН · ПОВТОРИТЕ',
      'eq.open': 'ОТКРЫТЬ ЭКВАЛАЙЗЕР · 10 ПОЛОС',
      'eq.title': 'ЭКВАЛАЙЗЕР',
      'eq.preset': 'ПРЕСЕТ',
      'eq.custom': 'CUSTOM', 'eq.flat': 'FLAT', 'eq.rock': 'РОК', 'eq.jazz': 'ДЖАЗ',
      'eq.vocal': 'ВОКАЛ', 'eq.night': 'НОЧЬ', 'eq.bass': 'БАС',
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
      'video.caption': 'Neon Lights · Dark Synthwave — <a href="https://www.youtube.com/@WoolScapes" target="_blank" rel="noopener noreferrer">WoolScapes</a>, royalty-free. Видео подключено без автозапуска.',
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
      'sub.note': 'Подписка на рассылку МЮЗИКБОГС. Без спама.',
      'sub.consent': 'Я согласен(на) на <a href="privacy.html" target="_blank" rel="noopener noreferrer">обработку персональных данных</a> и получение рассылки',
      'sub.error': 'Проверьте адрес электронной почты.',
      'sub.consentError': 'Подтвердите согласие на обработку персональных данных.',
      'sub.success': 'Сигнал принят. Спасибо — вы в рассылке МЮЗИКБОГС.',
      'footer.tagline': 'Музыка богов. Круглосуточно.',
      'footer.air': 'ЭФИР', 'footer.liveLink': 'Прямой эфир', 'footer.schedule': 'Программа',
      'footer.library': 'Библиотека', 'footer.station': 'СТАНЦИЯ', 'footer.about': 'О нас',
      'footer.subscribe': 'Подписка', 'footer.contacts': 'Контакты', 'footer.contact': 'СВЯЗЬ',
      'footer.made': 'СДЕЛАНО СО ЗВУКОМ',
      'footer.privacy': 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ'
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
      'a11y.volume': 'Volume',
      'a11y.eq': 'Open equalizer',
      'a11y.eqClose': 'Close equalizer',
      'stream.idle': 'ORIGINAL DEMO SIGNAL · PRESS “LISTEN”',
      'stream.connecting': 'PREPARING AUDIO…',
      'stream.buffering': 'BUFFERING…',
      'stream.live': 'ON AIR · ORIGINAL DEMO SIGNAL',
      'stream.error': 'AUDIO UNAVAILABLE · TRY AGAIN',
      'eq.open': 'OPEN EQUALIZER · 10 BANDS',
      'eq.title': 'EQUALIZER',
      'eq.preset': 'PRESET',
      'eq.custom': 'CUSTOM', 'eq.flat': 'FLAT', 'eq.rock': 'ROCK', 'eq.jazz': 'JAZZ',
      'eq.vocal': 'VOCAL', 'eq.night': 'NIGHT', 'eq.bass': 'BASS',
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
      'video.caption': 'Neon Lights · Dark Synthwave — <a href="https://www.youtube.com/@WoolScapes" target="_blank" rel="noopener noreferrer">WoolScapes</a>, royalty-free. Video does not autoplay.',
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
      'sub.note': 'Subscribe to the МЮЗИКБОГС newsletter. No spam.',
      'sub.consent': 'I agree to the <a href="privacy.html" target="_blank" rel="noopener noreferrer">processing of personal data</a> and to receiving the newsletter',
      'sub.error': 'Please check your email address.',
      'sub.consentError': 'Please confirm consent to personal data processing.',
      'sub.success': 'Signal received. Thanks — you’re on the МЮЗИКБОГС list.',
      'footer.tagline': 'Music of the gods. Around the clock.',
      'footer.air': 'ON AIR', 'footer.liveLink': 'Live stream', 'footer.schedule': 'Schedule',
      'footer.library': 'Library', 'footer.station': 'STATION', 'footer.about': 'About',
      'footer.subscribe': 'Subscribe', 'footer.contacts': 'Contacts', 'footer.contact': 'GET IN TOUCH',
      'footer.made': 'MADE WITH SOUND',
      'footer.privacy': 'PRIVACY POLICY'
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
  let listenSeconds = 0;
  let timer = null;
  let metaTimer = null;
  let lastSongKey = '';

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
    if (ctx && !eqPanel.hidden) { const prev = eqPreset.value; buildPresetOptions(); eqPreset.value = prev || 'flat'; }
    setMuted(muted);
    setStatus(isPlaying ? 'live' : (streamState === 'error' ? 'error' : 'idle'));
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

  /* ---------- Плеер: оригинальный демо-сигнал + Web Audio EQ ---------- */
  const AUDIO_SRC = 'assets/muzikbogs-air.wav';
  const audio = document.getElementById('stream-audio');
  audio.src = AUDIO_SRC;
  audio.loop = true;
  audio.volume = 1;

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
  const statusEl = document.getElementById('stream-status');
  const volumeMini = document.getElementById('volume');
  const volumeHero = document.getElementById('hero-volume');
  const muteBtn = document.getElementById('mute-btn');
  let streamState = 'idle';
  let muted = false;

  function setStatus(state) {
    streamState = state;
    statusEl.textContent = t(`stream.${state}`);
    statusEl.classList.toggle('is-live', state === 'live');
    statusEl.classList.toggle('is-error', state === 'error');
  }

  function displaySong(title, artist) {
    nowTitle.textContent = title;
    nowArtist.textContent = artist;
    miniTitle.textContent = title;
    miniArtist.textContent = artist;
    triadTitle.textContent = title;
    triadArtist.textContent = artist;
  }

  function setTrack(index, reset = true) {
    trackIndex = index % tracks.length;
    const data = tracks[trackIndex][lang];
    displaySong(data.title, data.artist);
    if (reset) listenSeconds = 0;
    updateProgress();
  }

  const fmt = s => `${String(Math.floor((s || 0) / 60)).padStart(2, '0')}:${String(Math.floor((s || 0) % 60)).padStart(2, '0')}`;
  function updateProgress() {
    const duration = audio.duration || 40;
    const ratio = audio.currentTime ? Math.min(100, (audio.currentTime / duration) * 100) : 0;
    nowTime.textContent = fmt(audio.currentTime);
    triadTime.textContent = `${fmt(audio.currentTime)} / ${fmt(duration)}`;
    progressFill.style.width = isPlaying ? `${ratio}%` : '0%';
    triadProgress.style.width = isPlaying ? `${ratio}%` : '0%';
  }
  audio.addEventListener('timeupdate', updateProgress);
  audio.addEventListener('loadedmetadata', updateProgress);

  function updatePlayerLabels() {
    document.body.classList.toggle('is-playing', isPlaying);
    document.querySelectorAll('.btn-label').forEach(el => { el.textContent = isPlaying ? t('play.pause') : t('play.start'); });
    document.querySelectorAll('.card-play-text').forEach(el => { el.textContent = isPlaying ? t('play.pause') : t('play.card'); });
    document.querySelector('.listen-label').textContent = isPlaying ? t('play.pause') : t('play.listen');
    document.querySelectorAll('[data-play-toggle]').forEach(btn => btn.setAttribute('aria-pressed', String(isPlaying)));
    updateProgress();
  }

  /* --- Web Audio: 10-полосный EQ + спектроанализатор --- */
  const EQ_FREQS = [31, 62, 125, 250, 500, 1000, 2000, 4000, 8000, 16000];
  const PRESETS = {
    flat:  [0,0,0,0,0,0,0,0,0,0],
    rock:  [5,3,0,-2,-1,1,3,4,4,3],
    jazz:  [3,2,1,0,0,1,2,3,3,2],
    vocal: [-2,-1,0,2,4,5,4,2,1,0],
    night: [4,3,2,1,0,-1,-2,-2,-1,0],
    bass:  [7,6,4,2,0,-1,-2,-2,-2,-2]
  };
  let ctx = null, gainNode = null, analyser = null, filters = [];
  let rafId = null, freqData = null;

  function initAudioGraph() {
    if (ctx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    ctx = new AudioCtx();
    const source = ctx.createMediaElementSource(audio);
    gainNode = ctx.createGain();
    gainNode.gain.value = muted ? 0 : parseFloat(volumeMini.value);
    filters = EQ_FREQS.map((f, i) => {
      const b = ctx.createBiquadFilter();
      b.type = i === 0 ? 'lowshelf' : (i === EQ_FREQS.length - 1 ? 'highshelf' : 'peaking');
      b.frequency.value = f;
      b.Q.value = 1.1;
      b.gain.value = 0;
      return b;
    });
    analyser = ctx.createAnalyser();
    analyser.fftSize = 2048;
    analyser.smoothingTimeConstant = 0.8;
    freqData = new Uint8Array(analyser.frequencyBinCount);
    let node = source;
    node.connect(gainNode); node = gainNode;
    filters.forEach(f => { node.connect(f); node = f; });
    node.connect(analyser);
    analyser.connect(ctx.destination);
    buildEqUI();
  }

  function setVolume(value) {
    const v = parseFloat(value);
    volumeMini.value = volumeHero.value = String(v);
    if (gainNode) gainNode.gain.setTargetAtTime(muted ? 0 : v, ctx.currentTime, 0.02);
    audio.volume = 1;
  }

  function setMuted(value) {
    muted = value;
    if (gainNode) gainNode.gain.setTargetAtTime(muted ? 0 : parseFloat(volumeMini.value), ctx.currentTime, 0.02);
    muteBtn.querySelector('span').textContent = muted ? '◖×' : '◖))';
    muteBtn.setAttribute('aria-label', muted ? t('a11y.unmute') : t('a11y.mute'));
  }

  const eqPanel = document.getElementById('eq-panel');
  const eqCanvas = document.getElementById('eq-canvas');
  const eqBands = document.getElementById('eq-bands');
  const eqPreset = document.getElementById('eq-preset');
  const eqReadout = document.getElementById('eq-readout');

  function buildPresetOptions() {
    eqPreset.innerHTML = `<option value="custom">${t('eq.custom')}</option>` +
      Object.keys(PRESETS).map(k => `<option value="${k}">${t(`eq.${k}`)}</option>`).join('');
  }

  function setBand(index, value) {
    const db = parseFloat(value);
    if (filters[index]) filters[index].gain.setTargetAtTime(db, ctx.currentTime, 0.02);
    const label = eqBands.querySelector(`[data-db="${index}"]`);
    if (label) label.textContent = `${db > 0 ? '+' : ''}${db}`;
    eqReadout.textContent = `${EQ_FREQS[index] >= 1000 ? (EQ_FREQS[index] / 1000) + 'k' : EQ_FREQS[index]}Hz · ${db > 0 ? '+' : ''}${db} dB`;
  }

  function buildEqUI() {
    eqBands.innerHTML = EQ_FREQS.map((f, i) => `
      <div class="eq-band">
        <span class="eq-band-db" data-db="${i}">0</span>
        <input type="range" class="eq-slider" min="-12" max="12" step="1" value="0"
               data-band="${i}" aria-label="${f >= 1000 ? f / 1000 + 'k' : f} Hz" />
        <span class="eq-band-hz">${f >= 1000 ? (f / 1000) + 'k' : f}</span>
      </div>`).join('');
    eqBands.querySelectorAll('.eq-slider').forEach(slider => {
      slider.addEventListener('input', e => {
        eqPreset.value = 'custom';
        setBand(parseInt(e.target.dataset.band, 10), e.target.value);
      });
    });
  }

  function applyPreset(name) {
    const values = PRESETS[name];
    if (!values) return;
    values.forEach((db, i) => {
      const slider = eqBands.querySelector(`[data-band="${i}"]`);
      if (slider) { slider.value = String(db); setBand(i, db); }
    });
    eqPreset.value = name;
    eqReadout.textContent = `${t('eq.preset')}: ${t(`eq.${name}`)}`;
  }

  function drawSpectrum() {
    rafId = requestAnimationFrame(drawSpectrum);
    if (eqPanel.hidden || !analyser) return;
    const g = eqCanvas.getContext('2d');
    const w = eqCanvas.width, h = eqCanvas.height;
    g.clearRect(0, 0, w, h);
    g.fillStyle = 'rgba(6,4,12,.86)';
    g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(255,255,255,.06)';
    g.lineWidth = 1;
    for (let i = 1; i < 5; i++) { const y = (h / 5) * i; g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); }
    analyser.getByteFrequencyData(freqData);
    const bars = 64;
    const bw = w / bars;
    const grad = g.createLinearGradient(0, h, 0, 0);
    grad.addColorStop(0, '#ff2ea6');
    grad.addColorStop(0.55, '#ff7ad9');
    grad.addColorStop(1, '#5ceaff');
    for (let i = 0; i < bars; i++) {
      const bin = Math.floor(Math.pow((i + 1) / bars, 1.7) * (freqData.length * 0.65));
      const val = freqData[bin] / 255;
      const bh = Math.max(2, val * (h - 16));
      const x = i * bw + 1;
      g.fillStyle = grad;
      g.fillRect(x, h - bh, bw - 2, bh);
      g.fillStyle = 'rgba(255,255,255,.35)';
      g.fillRect(x, h - bh, bw - 2, 2);
    }
  }

  function openEq() {
    initAudioGraph();
    const previous = eqPreset.value;
    buildPresetOptions();
    if (previous && PRESETS[previous]) applyPreset(previous);
    else if (previous === 'custom') eqPreset.value = 'custom';
    else applyPreset('flat');
    eqPanel.hidden = false;
    if (!rafId) drawSpectrum();
    document.getElementById('eq-close').focus();
  }
  function closeEq() { eqPanel.hidden = true; document.getElementById('eq-open').focus(); }
  document.getElementById('eq-open').addEventListener('click', openEq);
  document.getElementById('eq-open-mini').addEventListener('click', openEq);
  document.getElementById('eq-close').addEventListener('click', closeEq);
  document.getElementById('eq-reset').addEventListener('click', () => applyPreset('flat'));
  eqPreset.addEventListener('change', e => applyPreset(e.target.value));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !eqPanel.hidden) closeEq(); });

  async function setPlaying(value) {
    if (value === isPlaying) return;
    if (!value) {
      audio.pause();
      audio.currentTime = 0;
      isPlaying = false;
      if (ctx && ctx.state === 'running') ctx.suspend();
      clearInterval(timer); timer = null;
      setStatus('idle');
      updatePlayerLabels();
      return;
    }
    try {
      initAudioGraph();
      if (ctx && ctx.state === 'suspended') await ctx.resume();
      await audio.play();
      isPlaying = true;
      setStatus('live');
      updatePlayerLabels();
    } catch (_) {
      isPlaying = false;
      setStatus('error');
      updatePlayerLabels();
    }
  }

  document.querySelectorAll('[data-play-toggle]').forEach(btn => btn.addEventListener('click', () => setPlaying(!isPlaying)));
  audio.addEventListener('error', () => { if (isPlaying) { setPlaying(false); setStatus('error'); } });

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

  muteBtn.addEventListener('click', () => setMuted(!muted));
  [volumeMini, volumeHero].forEach(slider => slider.addEventListener('input', e => { setMuted(false); setVolume(e.target.value); }));

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
    const consent = document.getElementById('consent').checked;
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    note.classList.remove('is-error', 'is-success');
    if (!valid) { note.textContent = t('sub.error'); note.classList.add('is-error'); return; }
    if (!consent) { note.textContent = t('sub.consentError'); note.classList.add('is-error'); return; }
    note.textContent = t('sub.success');
    note.classList.add('is-success');
    form.reset();
  });

  /* ---------- Старт ---------- */
  applyI18n();
  observeReveals();
  onScroll();
})();
