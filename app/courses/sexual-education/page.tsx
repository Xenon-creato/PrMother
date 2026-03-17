import Link from "next/link";

const topics = [
  `Наше тіло та важливість турботи про нього (сон, харчування, спорт і т.д.)`,
  `Прийняття свого тіла «Моє тіло – повністю достатнє для того, аби я був у ньому щасливий»`,
  `Жіноча та чоловіча статева система`,
  `Зміни, відбуваються з тілом в період статевого дозрівання (окрема розмова про місячні та полюції), питання гігієни`,
  `Сексуальна безпека`,
  `Закоханість, любов, шлюб`,
  `Суть та значення статевих стосунків`,
  `Зачаття, вагітність, пологи`,
  `Порнографія, мастурбація, контрацепція`,
  `Розвінчуємо найпоширеніші підліткові міфи`,
];

const formatItems = [
  `Увесь матеріал – у відеозаписах`,
  `До кожної теми є завдання: зробити тест або відповісти на питання. Я відстежую і коментую`,
  `Є можливість письмово задавати свої питання`,
  `Уся інформація - у відеозаписах онлайн-курсу, які можете переглядати у зручний для Вас час. Доступ до матеріалів курсу -БЕЗСТРОКОВИЙ!`,
];

const ageGroups = [`10-11 РОКІВ`, `12-13 РОКІВ`, `14-15 РОКІВ`, `БАТЬКИ`];

const benefits = [
  `Сформувати в дитини здорові погляди у сфері статевості`,
  `Легалізувати інтимні теми для обговорення`,
];

const reviews = [
  {
    name: `Назарій Мацелюх`,
    text: [
      `Курс брав для своїх двох старших хлопців (10 рі 13р). Відео дивились спільно, після кожного проводили обговорення котрі часом тривали доволі довго. Діти ділились вже почутою від однолітків інформацією, часто вони розуміють підсвідомо її некоректність, але не маючи альтернативної робити вибір важко. Часом в процесі обговорень в них виникали додаткові запитання і я радий що завдяки курсу маю можливість вільно з ними про це говорити.`,
      `По підсумку діти отримали комплексну інформацію, а між нами ніби впала невидима стіна. Тому курс надзвичайно раджу, раджу проходити його спільно з дітьми і тоді є шанс, що отримана інформація дозволить їм зробити правильний вибір або ж вони будуть пам'ятати що на будь-які теми можна поговорити з батьками. Дякую п. Ірино за вашу працю.`,
    ],
  },
  {
    name: `Ярина Лукомська`,
    text: [
      `Це є мега важливо для всіх батьків і дітей! Навіть для тих батьків, які думають що знають багато. Це важлива інформація, яка полегшує життя батькам і дітям!!! Дякую вам п.Ірино!`,
    ],
  },
  {
    name: `Оксана Бойко`,
    text: [
      `Дуже важливий і корисний курс! Дякую пані Ірині за такий коректний виклад такої інтимної теми. Донька проходила двічі: в молодшому віці і в підлітковому цього року. З сином 10 р. дивилися разом та обговорювали. Курс змістовний і наповнений, цікава подача. Знайдуть відповіді та пояснення і діти, і батьки.`,
    ],
  },
  {
    name: `Альона Попова`,
    text: [
      `НЕЙМОВІРНОГЛИБОКИЙ! Це якщо одним словом! Вважаю потрібний всім! Щаслива, що діти мали можливість пройти твій курс, бо таку складну тему ти подаєш і просто і глибоко одночасно. І що курс не про секс, він про турботу про себе, кордони та кохання. Дякую ❤️`,
    ],
  },
  {
    name: `Галина Панахид-Печара`,
    text: [
      `Дуже важливий ,потрібний курс,особливо тим,хто хоче ,щоб діти мали знання з християнською позицією!!! Дякую Вам, Ірино, ,за таке мегаважливе служіння ❤️❤️❤️`,
    ],
  },
  {
    name: `Тетяна Яременко`,
    text: [
      `Стосовно ЛЕГАЛІЗАЦІЇ розмов, на цю таку не просту тему, повністю підтримую! Ви це так точно підмітили) У нас так і є) я після курсу можу вільно говорити з дитиною про все) Дякую ♥️`,
    ],
  },
];

const authorItems = [
  `тренер зі статевої та сексуальної грамотності (сертифікат Школи Статевого виховання Національного інституту сексології та сексуального здоров'я)`,
  `сімейний консультант`,
  `вчитель симпто-термального методу розпізнавання плідності`,
  `автор курсу з природного планування сім'ї "Формула любові"`,
  `дружина священика`,
  `мама 3 діток`,
  `катехит`,
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-light uppercase tracking-[0.18em] text-[#2a211c] md:text-4xl">
        {children}
      </h2>
      <div className="mx-auto mt-5 h-px w-32 bg-gradient-to-r from-transparent via-[#b78b62] to-transparent" />
    </div>
  );
}

export default function SexualEducationPage() {
  return (
    <main className="relative overflow-hidden bg-[#f7f1eb] text-[#2a211c]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-[#d6b08a]/25 blur-3xl" />
        <div className="absolute right-[-6rem] top-[28rem] h-80 w-80 rounded-full bg-[#f0d8c1]/40 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#c89b73]/20 blur-3xl" />
      </div>

      <section className="relative border-b border-[#d8c3b0]/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="fade-up flex flex-col items-center justify-center text-center">
            <span className="mb-5 inline-flex items-center rounded-full border border-[#c9a37f]/70 bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#7a5b43] backdrop-blur">
              Онлайн-школа
            </span>

            <h1 className="max-w-4xl text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
              Курс "Статеве виховання" – для підлітків та їх батьків
            </h1>

            <div className="mx-auto mt-7 h-px w-40 bg-gradient-to-r from-transparent via-[#b78b62] to-transparent" />

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#5b4839] md:text-lg">
              Курс для спільного проходження батьків з підлітками або для
              самостійного проходження підлітками
            </p>
          </div>

          <div className="fade-up stagger-1">
            <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/55 p-4 shadow-[0_20px_80px_-32px_rgba(42,33,28,0.35)] backdrop-blur">
              <div className="photo-frame aspect-[4/5] w-full rounded-[1.5rem] border border-dashed border-[#d0b49b] bg-gradient-to-br from-[#fbf7f2] via-[#f2e8df] to-[#e9d8c8]" />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="photo-frame aspect-[4/3] rounded-[1.35rem] border border-dashed border-[#d0b49b] bg-white/60 backdrop-blur" />
              <div className="photo-frame aspect-[4/3] rounded-[1.35rem] border border-dashed border-[#d0b49b] bg-white/60 backdrop-blur" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="fade-up rounded-[2rem] border border-white/70 bg-white/65 p-8 text-center shadow-[0_20px_80px_-36px_rgba(42,33,28,0.4)] backdrop-blur md:p-12">
            <p className="mx-auto max-w-5xl text-lg font-light leading-9 text-[#3b2f27] md:text-2xl md:leading-[1.9]">
              Статеве виховання допомагає не лише розуміти фізіологію, але й
              вчить будувати здорові стосунки на основі поваги, відкритості та
              спілкування, а також знання етапів психосексуального розвитку
              дитини
            </p>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
          <SectionTitle>ТЕМИ КУРСУ:</SectionTitle>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {topics.map((topic, index) => (
              <article
                key={topic}
                className={`fade-up stagger-${(index % 3) + 1} rounded-[1.75rem] border border-white/70 bg-white/60 p-6 text-center shadow-[0_18px_60px_-36px_rgba(42,33,28,0.35)] backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_-34px_rgba(42,33,28,0.45)] md:p-7`}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#ccb095] bg-[#f8f1ea] text-lg font-medium text-[#7a5b43]">
                  {index + 1}
                </div>
                <p className="mt-5 text-base leading-8 text-[#43362c]">
                  {topic}
                </p>
              </article>
            ))}
          </div>

          <div className="fade-up mt-8 rounded-[1.75rem] border border-[#d7b899]/60 bg-gradient-to-r from-[#fffaf4] via-[#f8efe6] to-[#fffaf4] p-7 text-center shadow-[0_20px_70px_-40px_rgba(42,33,28,0.35)] md:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] leading-8 text-[#6b4d38] md:text-base">
              ПОДАЧА МАТЕРІАЛУ - В КОНТЕКСТІ ХРИСТИЯНСЬКОГО СВІТОГЛЯДУ, ЧЕРЕЗ
              РОЗУМІННЯ СВОЄЇ АНАТОМІЇ, ФІЗІОЛОГІЇ, А ТАКОЖ ПСИХОЛОГІЇ
            </p>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <SectionTitle>ФОРМАТ КУРСУ</SectionTitle>

          <div className="grid gap-5 md:grid-cols-2">
            {formatItems.map((item, index) => (
              <article
                key={item}
                className={`fade-up stagger-${(index % 3) + 1} rounded-[1.75rem] border border-white/70 bg-white/60 p-6 text-center shadow-[0_18px_60px_-36px_rgba(42,33,28,0.35)] backdrop-blur transition duration-500 hover:-translate-y-1 md:p-8`}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#ccb095] bg-[#f8f1ea] text-sm font-semibold tracking-[0.16em] text-[#7a5b43]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="mt-5 text-base leading-8 text-[#43362c]">
                  {item}
                </p>
              </article>
            ))}
          </div>

          <div className="fade-up mt-10 rounded-[2rem] border border-white/70 bg-white/60 p-8 text-center shadow-[0_20px_70px_-40px_rgba(42,33,28,0.35)] backdrop-blur">
            <h3 className="text-xl font-light uppercase tracking-[0.18em] text-[#2a211c]">
              ВІКОВІ КАТЕГОРІЇ:
            </h3>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {ageGroups.map((group, index) => (
                <span
                  key={group}
                  className={`fade-up stagger-${(index % 3) + 1} inline-flex rounded-full border border-[#d5b79a] bg-[#fbf7f2] px-5 py-3 text-sm uppercase tracking-[0.18em] text-[#6e533f]`}
                >
                  {group}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <SectionTitle>ЦЕЙ КУРС ДОПОМОЖЕ ВАМ:</SectionTitle>

          <div className="grid gap-5 md:grid-cols-2">
            {benefits.map((item, index) => (
              <article
                key={item}
                className={`fade-up stagger-${index + 1} rounded-[1.75rem] border border-white/70 bg-white/60 p-6 text-center shadow-[0_18px_60px_-36px_rgba(42,33,28,0.35)] backdrop-blur transition duration-500 hover:-translate-y-1 md:p-8`}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#ccb095] bg-[#f8f1ea] text-sm font-semibold tracking-[0.16em] text-[#7a5b43]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="mt-5 text-base leading-8 text-[#43362c]">
                  {item}
                </p>
              </article>
            ))}
          </div>

          <div className="fade-up mt-6 rounded-[1.75rem] border border-[#d7b899]/60 bg-gradient-to-r from-[#fffaf4] via-[#f8efe6] to-[#fffaf4] p-7 text-center shadow-[0_20px_70px_-40px_rgba(42,33,28,0.35)] md:p-9">
            <p className="text-base leading-8 text-[#43362c] md:text-lg">
              Уся інформація - у відеозаписах онлайн-курсу, які можете
              переглядати у зручний для Вас час Доступ до матеріалів курсу -
              БЕЗСТРОКОВИЙ!
            </p>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <SectionTitle>ВІДГУКИ</SectionTitle>

          <div className="grid gap-5 lg:grid-cols-2">
            {reviews.map((review, index) => (
              <article
                key={review.name}
                className={`fade-up stagger-${(index % 3) + 1} rounded-[1.75rem] border border-white/70 bg-white/65 p-6 text-center shadow-[0_20px_70px_-40px_rgba(42,33,28,0.38)] backdrop-blur transition duration-500 hover:-translate-y-1 md:p-8`}
              >
                <div className="mx-auto mb-5 h-px w-20 bg-gradient-to-r from-transparent via-[#b78b62] to-transparent" />
                <div className="space-y-4">
                  {review.text.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[15px] leading-8 text-[#43362c] md:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[#7a5b43]">
                  {review.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
        <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="fade-up rounded-[2rem] border border-white/70 bg-white/65 p-8 text-center shadow-[0_20px_80px_-36px_rgba(42,33,28,0.4)] backdrop-blur md:p-12">
            <h2 className="text-3xl font-light uppercase tracking-[0.08em] text-[#2a211c] md:text-5xl">
                ВАРТІСТЬ КУРСУ для однієї вікової категорії - 1400 ГРН.
            </h2>

            <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-[#b78b62] to-transparent" />

            <p className="mx-auto mt-8 max-w-4xl text-lg font-semibold leading-8 text-[#3b2f27] md:text-[22px]">
                Після оплати адміністратор протягом доби сконтактує з Вами і надішле доступ.
            </p>

            <a
                href="https://secure.wayforpay.com/button/b259cd947764e"
                className="mt-8 inline-flex items-center justify-center rounded-full border border-[#b78b62] bg-[#2a211c] px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#3b2f27]"
            >
                ПЕРЕЙТИ
            </a>
            </div>

            <div className="fade-up stagger-1 mt-8 rounded-[2rem] border border-white/70 bg-white/60 p-8 text-center shadow-[0_20px_80px_-36px_rgba(42,33,28,0.35)] backdrop-blur md:p-12">
            <h2 className="text-3xl font-light uppercase tracking-[0.08em] text-[#2a211c] md:text-5xl">
                ВАРТІСТЬ КУРСУ для батьків - 1400 ГРН.
            </h2>

            <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-[#b78b62] to-transparent" />

            <p className="mx-auto mt-8 max-w-5xl text-base leading-8 text-[#43362c] md:text-[22px] md:leading-[1.9]">
                Якщо Ви купуєте курс для дитини, відкриваємо доступ до цього курсу і батькам. Якщо у Вас кілька дітей одного віку, за вартістю одного відкриваємо доступ усім дітям. Якщо у Вас ще діти інших вікових категорій – вартість курсу для них 50%. Всі незрозумілі питання, задавайте в приват або в коментарях.
            </p>
            </div>
        </div>
        </section>
      <section className="relative pb-20 pt-12 md:pb-24 md:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>АВТОР КУРСУ - ІРИНА ТАБАКА</SectionTitle>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="fade-up">
              <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/55 p-4 shadow-[0_20px_80px_-32px_rgba(42,33,28,0.35)] backdrop-blur">
                <div className="photo-frame aspect-[4/5] w-full rounded-[1.5rem] border border-dashed border-[#d0b49b] bg-gradient-to-br from-[#fbf7f2] via-[#f2e8df] to-[#e9d8c8]" />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="photo-frame aspect-[4/3] rounded-[1.35rem] border border-dashed border-[#d0b49b] bg-white/60 backdrop-blur" />
                <div className="photo-frame aspect-[4/3] rounded-[1.35rem] border border-dashed border-[#d0b49b] bg-white/60 backdrop-blur" />
              </div>
            </div>

            <div className="fade-up stagger-1 rounded-[2rem] border border-white/70 bg-white/65 p-6 shadow-[0_20px_80px_-36px_rgba(42,33,28,0.4)] backdrop-blur md:p-8">
              <ul className="space-y-4 text-center">
                {authorItems.map((item, index) => (
                  <li
                    key={item}
                    className={`fade-up stagger-${(index % 3) + 1} rounded-[1.25rem] border border-[#eee1d5] bg-[#fcf8f4] px-5 py-4 text-base leading-8 text-[#43362c]`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}