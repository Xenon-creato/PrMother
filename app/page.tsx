export default function Home() {
  const directions = [
    {
      title: "Відеокурс про статеве виховання дітей",
      text: "Допомагає батькам делікатно, спокійно й з повагою говорити з дитиною про статевість, близькість і межі.",
    },
    {
      title: '"Формула любові" — онлайн-курс з природного планування сім’ї',
      text: "Курс для жінок і подружніх пар, які хочуть позбутися страху перед непланованою вагітністю та краще зрозуміти свій цикл.",
    },
    {
      title: "Статеве виховання для підлітків",
      text: "Формат для спільного проходження батьків з підлітками або для самостійного проходження підлітком.",
    },
    {
      title: "Курс для пар, що зустрічаються",
      text: "Про стосунки, пізнання одне одного, зрілість у близькості та правильний старт майбутнього подружнього життя.",
    },
  ];

  const trustItems = [
    "Тренер зі статевої та сексуальної грамотності",
    "Сімейний консультант",
    "Вчитель симпто-термального методу розпізнавання плідності",
    'Автор курсу з природного планування сім’ї "Формула любові"',
    "Дійсний член Асоціації сексологів та сексотерапевтів України",
    "Дійсний член Української Асоціації Християнської Психології",
  ];

  const experience = [
    {
      year: "2017",
      text: "Отримала сертифікат консультанта з природного планування сім’ї.",
    },
    {
      year: "2019",
      text: "Здобула диплом вчителя методу розпізнавання плідності.",
    },
    {
      year: "2020",
      text: "Пройшла навчання для викладачів симпто-термального методу розпізнавання плідності.",
    },
    {
      year: "З 2017",
      text: "Досвід навчання жінок методу — курс уже пройшли понад 200 жінок і пар.",
    },
    {
      year: "19 років",
      text: "Власний практичний досвід користування методом.",
    },
    {
      year: "2022",
      text: "Здобула кваліфікацію тренера зі статевої та сексуальної грамотності.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8f3ee] text-[#3c2b25]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(171,123,99,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(92,64,54,0.07),transparent_28%)]" />
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#ead8ce]/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[340px] w-[340px] rounded-full bg-[#dbc2b5]/35 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-24 md:px-10 md:pb-32 md:pt-32 lg:px-16 lg:pb-36 lg:pt-36">
          <div className="grid items-center gap-14 md:grid-cols-[1.08fr_0.92fr] md:gap-16 lg:gap-24">
            <div className="max-w-3xl">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#e4d3ca] bg-white/75 px-5 py-3 text-[11px] uppercase tracking-[0.28em] text-[#9a6d5b] shadow-[0_10px_25px_rgba(90,60,50,0.05)]">
                <span>Онлайн-школа</span>
                <span className="h-1 w-1 rounded-full bg-[#b68472]" />
                <span>Формула любові</span>
              </div>

              <h1 className="text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Простір знань,
                <span className="mt-2 block text-[#8a5d4f]">
                  довіри і зрілих стосунків
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-[#6a544c] md:text-xl md:leading-10">
                Онлайн-школа Ірини Табаки допомагає жінкам, подружнім парам,
                батькам і підліткам краще розуміти себе, свою тілесність,
                взаємини та важливі теми близькості — спокійно, делікатно і
                професійно.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-9 text-[#6a544c] md:text-xl md:leading-10">
                Тут зібрані курси й навчальні програми для тих, хто хоче
                будувати щасливі міцні стосунки, приймати зрілі рішення та
                передавати ці знання своїм дітям з любов’ю і повагою.
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#directions"
                  className="inline-flex h-13 items-center justify-center rounded-full bg-[#8a5d4f] px-8 py-4 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-[#774c40]"
                >
                  Переглянути напрямки
                </a>

                <a
                  href="#about"
                  className="inline-flex h-13 items-center justify-center rounded-full border border-[#ccb2a7] bg-white/75 px-8 py-4 text-sm font-medium text-[#4c3731] transition hover:bg-white"
                >
                  Дізнатися більше
                </a>
              </div>
            </div>

            <div className="flex justify-start md:justify-end">
              <div className="w-full max-w-md rounded-[36px] border border-[#e5d6cf] bg-white/80 p-7 shadow-[0_25px_80px_rgba(90,60,50,0.10)] backdrop-blur md:p-8">
                <div className="rounded-[30px] bg-[linear-gradient(160deg,#efe2d8_0%,#f8f3ee_48%,#dcc1b4_100%)] p-8 md:p-10">
                  <div className="rounded-[24px] border border-white/70 bg-white/55 p-7 md:p-8">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#9a6d5b]">
                      Любов • повага • ясність
                    </p>

                    <h2 className="mt-5 text-2xl font-semibold leading-tight text-[#3c2b25] md:text-3xl">
                      Делікатна подача
                      <span className="block">справді важливих тем</span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-[#6a544c]">
                      Тут згодом можна поставити головне фото Ірини Табакі або
                      красивий фірмовий візуал головної сторінки.
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-[24px] bg-[#f5ece6] px-6 py-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#9a6d5b]">
                    Основна ідея
                  </p>
                  <p className="mt-3 text-base leading-8 text-[#5c4640]">
                    Допомогти кожному, хто хоче краще розуміти себе, осіб
                    протилежної статі, власні стосунки та виховання дітей.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-32"
      >
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9a6d5b]">
            Про школу
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Онлайн-школа, створена для міцних і щасливих стосунків
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#6a544c] md:text-xl md:leading-10">
            Головна ідея школи — допомогти людям краще розуміти себе, свою
            тілесність, стосунки, відмінності між чоловіком і жінкою, а також
            передавати ці знання дітям у здоровий, спокійний і бережний спосіб.
          </p>

          <p className="mt-6 text-lg leading-9 text-[#6a544c] md:text-xl md:leading-10">
            Це не просто окремі курси, а цілісний простір, де складні теми
            пояснюються людяно, делікатно і без відчуття перевантаження.
          </p>
        </div>
      </section>

      <section
        id="directions"
        className="mx-auto w-full max-w-7xl px-6 py-4 md:px-10 lg:px-16"
      >
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9a6d5b]">
            Напрямки
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Основні програми та курси онлайн-школи
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {directions.map((item) => (
            <div
              key={item.title}
              className="rounded-[32px] border border-[#e6d8d0] bg-white/80 p-8 shadow-[0_14px_40px_rgba(90,60,50,0.05)] md:p-10"
            >
              <p className="text-xl font-semibold leading-tight text-[#3c2b25] md:text-2xl">
                {item.title}
              </p>
              <p className="mt-5 text-base leading-8 text-[#6a544c] md:text-lg md:leading-9">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="author"
        className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-32"
      >
        <div className="grid items-center gap-10 rounded-[40px] border border-[#e6d8d0] bg-[#fffaf7] p-8 shadow-[0_18px_60px_rgba(90,60,50,0.06)] md:grid-cols-[0.9fr_1.1fr] md:p-12 lg:gap-14">
          <div className="rounded-[30px] bg-[linear-gradient(160deg,#ead7cb_0%,#f8f3ee_100%)] p-6 md:p-8">
            <div className="flex h-[360px] items-center justify-center rounded-[24px] border border-white/60 bg-white/40 text-base text-[#8e7266]">
              Місце для фото Ірини Табаки
            </div>
          </div>

          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#9a6d5b]">
              Засновник і керівник
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Ірина Табака
            </h2>

            <p className="mt-8 text-lg leading-9 text-[#6a544c] md:text-xl md:leading-10">
              Засновниця онлайн-школи “Формула любові”, тренер зі статевої та
              сексуальної грамотності, сімейний консультант і вчитель
              симпто-термального методу розпізнавання плідності.
            </p>

            <p className="mt-6 text-lg leading-9 text-[#6a544c] md:text-xl md:leading-10">
              Її діяльність поєднує професійність, практичний досвід і дуже
              делікатну подачу тем, які для багатьох людей залишаються складними
              або незручними. :contentReference[oaicite:1]
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-4 md:px-10 lg:px-16">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9a6d5b]">
            Чому можна довіряти
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Досвід, навчання і реальна практика
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {trustItems.map((item) => (
            <div
              key={item}
              className="rounded-[28px] border border-[#ecdfd8] bg-[#fffaf7] px-6 py-6 text-base leading-8 text-[#5d4740] shadow-[0_10px_30px_rgba(90,60,50,0.04)] md:px-8 md:py-7 md:text-lg"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {experience.map((item) => (
            <div
              key={item.year + item.text}
              className="rounded-[32px] border border-[#e6d8d0] bg-white/80 p-8 shadow-[0_14px_40px_rgba(90,60,50,0.05)] md:p-10"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-[#9a6d5b]">
                {item.year}
              </p>
              <p className="mt-4 text-base leading-8 text-[#6a544c] md:text-lg md:leading-9">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="reviews"
        className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-32"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-[#9a6d5b]">
          Відгуки
        </p>

        <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Довіра, яка будується на реальному досвіді
        </h2>

        <div className="mt-12 space-y-5">
          {[
            "Відгук про курс природного планування сім’ї",
            "Відгук про курс статевого виховання дітей",
            "Ще один відгук про курс статевого виховання дітей",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[28px] border border-[#ecdfd8] bg-[#fffaf7] p-6 shadow-[0_10px_30px_rgba(90,60,50,0.04)] md:p-8"
            >
              <p className="text-lg font-semibold md:text-xl">{item}</p>
              <p className="mt-4 text-base leading-8 text-[#6a544c] md:text-lg md:leading-9">
                Тут пізніше можна буде поставити справжні відгуки, скріншоти або
                відео-відгуки в більш красивому форматі.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-32"
      >
        <div className="rounded-[40px] bg-[#8a5d4f] px-8 py-12 text-white shadow-[0_20px_70px_rgba(90,60,50,0.18)] md:px-12 md:py-16">
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">
            Контакти
          </p>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Якщо хочете дізнатися більше — зв’яжіться з нами
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/65">
                Телефон
              </p>
              <p className="mt-3 text-xl font-medium">+38 (097) 408 37 50</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/65">
                Email
              </p>
              <p className="mt-3 text-xl font-medium">iryna.tabaka@gmail.com</p>
            </div>
          </div>

          <p className="mt-10 max-w-2xl text-lg leading-9 text-white/80">
            Соцмережі й окремі сторінки курсів ми потім підв’яжемо через header
            та окремі внутрішні сторінки сайту. :contentReference[oaicite:2]
          </p>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 md:pb-24 lg:px-16">
        <div className="rounded-[36px] border border-[#e6d8d0] bg-[#fffaf8] px-8 py-10 shadow-[0_16px_50px_rgba(90,60,50,0.05)] md:px-10 md:py-12">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#9a6d5b]">
            Онлайн-школа
          </p>

          <p className="mt-4 text-2xl font-semibold text-[#3c2b25]">
            Формула любові
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#6a544c] md:text-lg md:leading-9">
            Простір для тих, хто хоче будувати щасливі стосунки, краще розуміти
            себе та передавати ці знання своїм дітям з любов’ю і повагою. :contentReference[oaicite:3]
          </p>
        </div>
      </footer>
    </main>
  );
}
