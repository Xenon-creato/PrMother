const problems = [
  {
    number: "01",
    title: "Секс став рідкісним явищем у Вашому подружжі",
    text: "Відчуження зростає Невдоволення накопичується і думка про те, щоб все було, як колись видається просто утопією",
  },
  {
    number: "02",
    title:
      "Ваші очікування зазнали краху і статеві стосунки ніяк не вдається нормально побудувати",
    text: "До шлюбу Ви мріяли про яскраве інтимне життя, проте реальність приносить болючі розчарування",
  },
  {
    number: "03",
    title: "Вам зовсім ніяково говорити про такі речі",
    text: "В результаті не можете ділитися своїми переживаннями, потребами і не розумієте того, хто з Вами",
  },
];

const steps = [
  { number: "1", text: "Обговорити це все в парі" },
  { number: "2", text: "Прийняти відповідальне рішення" },
  { number: "3", text: "Виділити час та гроші" },
  {
    number: "4",
    text: "І зареєструватися на тренінг, який допоможе розібратися і зробити практичні кроки",
  },
];

const topics = [
  { number: "01", text: "Божий задум щодо інтимної сфери у шлюбі" },
  { number: "02", text: "Причини небажання мати статеві стосунки" },
  { number: "03", text: "Важливі психологічні аспекти" },
  { number: "04", text: "Оргазм і все, що стосується тіла" },
  { number: "05", text: "Стосунки в принципі" },
  {
    number: "06",
    text: "Прийняття свого тіла, вміння розслабитись і т.п.",
  },
  {
    number: "07",
    text: "Те, як навчитися говорити і як домовлятися",
  },
  {
    number: "08",
    text: "Психосексуальний розвиток дитини – де можуть ховатися причини деяких сьогоднішніх проблем",
  },
];

const trainingIncludes = [
  "Теорія у форматі записаних відеоуроків",
  "Завдання для обговорення в парі",
  "Дієві практики",
  "Зворотній зв'язок від Ірини Табаки",
];

const results = [
  "Наважитесь обговорювати те, що відбувається в ліжку",
  "Перестанете сприймати секс як обов'язок і тягар",
  "Почнете набагато краще розуміти одне одного",
];

const authorPoints = [
  "тренер зі статевої та сексуальної грамотності з християнськими цінностями",
  "вчитель симпто-термального методу розпізнавання плідності",
  "член Української Асоціації Християнської Психології",
  "катехит",
  "щаслива дружина і мама 3 підлітків",
];

const paymentLinks = {
  self: "https://secure.wayforpay.com/button/b0b07999feeb4",
  feedback: "https://secure.wayforpay.com/button/b72250a73d158",
};

function SectionTitle({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={`text-center text-3xl font-normal uppercase tracking-[0.08em] md:text-5xl ${
        light ? "text-white" : "text-[#16195a]"
      }`}
    >
      {children}
    </h2>
  );
}

export default function FallInLoveAgainPage() {
  return (
    <main className="overflow-hidden bg-[#f7f4ee] text-[#16195a]">
      <section className="relative isolate">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(22,25,90,0.10),transparent_45%),linear-gradient(180deg,#f7f4ee_0%,#f2ede5_100%)]" />
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[#d4c1a3]/20 blur-3xl" />
        <div className="absolute right-[-100px] top-10 h-80 w-80 rounded-full bg-[#16195a]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-16 md:px-10 md:py-24 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="mx-auto max-w-[780px] text-center">
            <h1 className="text-4xl font-normal uppercase leading-tight tracking-[0.08em] text-[#16195a] md:text-6xl">
              ТРЕНІНГ &quot;ЗАКОХАТИСЯ ЗНОВУ!&quot;
            </h1>

            <div className="mx-auto mt-8 max-w-[720px] space-y-3">
              <p className="text-xl leading-relaxed text-[#111] md:text-2xl">
                як відновити інтимну подружню близькість тим, у кого вона згасає
              </p>
              <p className="text-xl leading-relaxed text-[#111] md:text-2xl">
                і як її побудувати тим, хто її ще не здобув
              </p>
            </div>

            <p className="mt-8 text-sm uppercase tracking-[0.3em] text-[#16195a]/70 md:text-base">
              ( В КОНТЕКСТІ ХРИСТИЯНСЬКОГО СВІТОГЛЯДУ)
            </p>
          </div>

          <div className="mx-auto w-full max-w-[540px]">
            <div className="overflow-hidden rounded-[38px] border border-[#c9a36d]/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(238,226,209,0.92),rgba(255,255,255,0.98))] p-3 shadow-[0_26px_85px_rgba(22,25,90,0.16)]">
              <img
                src="/images/жку.png"
                alt='ТРЕНІНГ "ЗАКОХАТИСЯ ЗНОВУ!"'
                className="aspect-[4/5] w-full rounded-[30px] border border-white/90 object-cover shadow-[inset_0_0_0_1px_rgba(22,25,90,0.08)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <SectionTitle>Займайте собі місце, якщо:</SectionTitle>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {problems.map((item) => (
            <div
              key={item.number}
              className="rounded-[28px] border border-[#16195a]/10 bg-white px-6 py-8 text-center shadow-[0_16px_50px_rgba(17,17,17,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_70px_rgba(22,25,90,0.12)]"
            >
              <p className="text-sm tracking-[0.35em] text-[#b08b57]">
                {item.number}
              </p>
              <h3 className="mt-4 text-[21px] leading-snug text-[#16195a] md:text-[26px]">
                {item.title}
              </h3>
              <p className="mx-auto mt-4 max-w-[300px] text-[17px] leading-8 text-[#222] md:text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-[1100px]">
          <div className="grid items-center gap-8 rounded-[34px] border border-white/70 bg-white/70 p-6 shadow-[0_24px_80px_rgba(22,25,90,0.08)] backdrop-blur md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <img
                src="/images/жку (1).png"
                alt="Стрес в житті, виснаження на роботі, народження дітей, ситуація в країні - допомагає інтимній сфері згасати"
                className="aspect-[4/5] w-full rounded-[26px] object-cover"
              />
            </div>

            <div className="text-center">
              <p className="text-3xl leading-[1.35] text-[#111] md:text-4xl">
                Стрес в житті, виснаження на роботі, народження дітей, ситуація в
                країні - допомагає інтимній сфері згасати
              </p>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-[950px] text-center text-2xl leading-relaxed text-[#111] md:text-3xl">
          І якщо вчасно не схаменутися - станемо просто сусідами по кімнаті,
          яким приходиться ділити одне ліжко
        </p>
      </section>

      <section className="bg-[#16195a] text-white">
        <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-24">
          <SectionTitle light>
            Ви можете закрити цю сторінку і залишити все, як є. Або почати
            діяти!
          </SectionTitle>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((item) => (
              <div
                key={item.number}
                className="rounded-[28px] border border-white/15 bg-white/10 px-6 py-8 text-center backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/14"
              >
                <p className="text-sm tracking-[0.35em] text-[#d4c1a3]">
                  {item.number}
                </p>
                <p className="mt-4 text-lg leading-8 text-white md:text-xl">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <SectionTitle>поговоримо про:</SectionTitle>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {topics.map((item) => (
            <div
              key={item.number}
              className="rounded-[28px] border border-[#16195a]/10 bg-white px-6 py-8 text-center shadow-[0_16px_50px_rgba(17,17,17,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_70px_rgba(22,25,90,0.12)]"
            >
              <p className="text-sm tracking-[0.35em] text-[#b08b57]">
                {item.number}
              </p>
              <p className="mt-4 text-lg leading-8 text-[#111] md:text-xl">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#efe8dc_0%,#f7f4ee_100%)]">
        <div className="mx-auto max-w-[1350px] px-6 py-20 md:px-10 md:py-24">
          <SectionTitle>що чекає вас на тренінгу?</SectionTitle>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-2">
            {trainingIncludes.map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-[#16195a]/10 bg-white px-6 py-8 text-center shadow-[0_14px_44px_rgba(17,17,17,0.05)] transition-all duration-500 hover:-translate-y-1.5"
              >
                <p className="text-xl leading-8 text-[#111] md:text-2xl">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-24">
        <SectionTitle>В результаті Ви:</SectionTitle>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {results.map((item) => (
            <div
              key={item}
              className="rounded-[28px] border border-[#16195a]/10 bg-white px-6 py-8 text-center shadow-[0_16px_50px_rgba(17,17,17,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_70px_rgba(22,25,90,0.12)]"
            >
              <p className="text-lg leading-8 text-[#111] md:text-xl">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-6 md:px-10 md:pb-10">
        <div className="overflow-hidden rounded-[34px] border border-white/70 bg-white/70 p-4 shadow-[0_24px_80px_rgba(22,25,90,0.08)] backdrop-blur">
          <img
            src="/images/жку3.png"
            alt='ТРЕНІНГ "ЗАКОХАТИСЯ ЗНОВУ!"'
            className="aspect-[16/7] w-full rounded-[26px] object-cover"
          />
          <p className="mt-4 text-center text-lg leading-8 text-[#111] md:text-xl">
            ТРЕНІНГ &quot;ЗАКОХАТИСЯ ЗНОВУ!&quot;
          </p>
        </div>
      </section>

      <section className="bg-[#efefef]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
          <div className="space-y-24">
            <div>
              <p className="text-center text-3xl font-normal uppercase tracking-tight text-black md:text-5xl">
                ВАРТІСТЬ УЧАСТІ
              </p>
              <h2 className="mt-4 text-center text-3xl font-normal uppercase tracking-tight text-black md:text-5xl">
                ПАКЕТ &quot;САМОСТІЙНИЙ&quot;
              </h2>

              <div className="mt-12 rounded-[28px] bg-[#f5f5f5] px-8 py-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:px-12">
                <div className="grid items-center gap-10 xl:grid-cols-[260px_40px_1fr_220px]">
                  <div className="text-center">
                    <h3 className="text-[26px] font-semibold leading-tight text-black">
                      Пакет
                      <br />
                      &quot;Самостійний&quot;
                    </h3>

                    <div className="mt-8 flex items-end justify-center gap-2">
                      <span className="text-[22px] leading-none text-black">
                        ₴
                      </span>
                      <span className="text-[64px] font-light leading-none text-black">
                        1800
                      </span>
                    </div>
                  </div>

                  <div className="hidden h-full items-center justify-center xl:flex">
                    <div className="flex h-full flex-col items-center justify-between py-2 text-[28px] leading-none text-black">
                      <span>•</span>
                      <span>•</span>
                      <span>•</span>
                    </div>
                  </div>

                  <div className="space-y-8 text-center">
                    <p className="text-[22px] leading-relaxed text-[#3d3d3d]">
                      Теоретичний матеріал у форматі відеоуроків
                    </p>
                    <p className="text-[22px] leading-relaxed text-[#3d3d3d]">
                      Завдання для обговорення в парі
                    </p>
                    <p className="text-[22px] leading-relaxed text-[#3d3d3d]">
                      Доступ до всіх відеоуроків на 3 місяці
                    </p>
                  </div>

                  <div className="flex justify-center xl:justify-end">
                    {paymentLinks.self ? (
                      <a
                        href="https://secure.wayforpay.com/button/b0b07999feeb4"
                        className="inline-flex min-w-[150px] items-center justify-center rounded-full bg-[#960018] px-8 py-5 text-xl font-semibold text-white transition duration-300 hover:opacity-90"
                      >
                        Оплатити
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex min-w-[150px] items-center justify-center rounded-full bg-[#960018] px-8 py-5 text-xl font-semibold text-white transition duration-300 hover:opacity-90"
                      >
                        Оплатити
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-center text-3xl font-normal uppercase tracking-tight text-black md:text-5xl">
                ВАРТІСТЬ УЧАСТІ
              </p>
              <h2 className="mt-4 text-center text-3xl font-normal uppercase tracking-tight text-black md:text-5xl">
                ПАКЕТ &quot;ЗІ ЗВОРОТНІМ ЗВ&apos;ЯЗКОМ&quot;
              </h2>

              <div className="mt-12 rounded-[28px] bg-[#f5f5f5] px-8 py-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:px-12">
                <div className="grid items-center gap-10 xl:grid-cols-[260px_40px_1fr_220px]">
                  <div className="text-center">
                    <h3 className="text-[26px] font-semibold leading-tight text-black">
                      Пакет &quot;Зі
                      <br />
                      зворотнім
                      <br />
                      зв&apos;язком&quot;
                    </h3>

                    <div className="mt-8 flex items-end justify-center gap-2">
                      <span className="text-[22px] leading-none text-black">
                        ₴
                      </span>
                      <span className="text-[64px] font-light leading-none text-black">
                        4200
                      </span>
                    </div>
                  </div>

                  <div className="hidden h-full items-center justify-center xl:flex">
                    <div className="flex h-full flex-col items-center justify-between py-2 text-[28px] leading-none text-black">
                      <span>•</span>
                      <span>•</span>
                      <span>•</span>
                      <span>•</span>
                    </div>
                  </div>

                  <div className="space-y-8 text-center">
                    <p className="text-[22px] leading-relaxed text-[#3d3d3d]">
                      Теоретичний матеріал у форматі відеоуроків
                    </p>
                    <p className="text-[22px] leading-relaxed text-[#3d3d3d]">
                      Завдання для обговорення в парі
                    </p>
                    <p className="text-[22px] leading-relaxed text-[#3d3d3d]">
                      Зворотній зв&apos;язок від Ірини Табаки
                    </p>
                    <p className="text-[22px] leading-relaxed text-[#3d3d3d]">
                      Доступ до всіх відеоуроків на 6 місяців
                    </p>
                  </div>

                  <div className="flex justify-center xl:justify-end">
                    {paymentLinks.feedback ? (
                      <a
                        href="https://secure.wayforpay.com/button/b72250a73d158"
                        className="inline-flex min-w-[150px] items-center justify-center rounded-full bg-[#960018] px-8 py-5 text-xl font-semibold text-white transition duration-300 hover:opacity-90"
                      >
                        Оплатити
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex min-w-[150px] items-center justify-center rounded-full bg-[#960018] px-8 py-5 text-xl font-semibold text-white transition duration-300 hover:opacity-90"
                      >
                        Оплатити
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#16195a] text-white">
        <div className="mx-auto grid max-w-[1350px] items-center gap-10 px-6 py-20 md:px-10 md:py-24 xl:grid-cols-[0.85fr_1.15fr]">
          <div className="mx-auto w-full max-w-[460px]">
            <div className="rounded-[34px] border border-white/15 bg-white/10 p-4 backdrop-blur">
              <img
                src="/images/yaa.jpg"
                alt="Ірина Табака"
                className="aspect-[4/5] w-full rounded-[26px] object-cover"
              />
              <p className="mt-4 text-center text-lg leading-8 text-white md:text-xl">
                Ірина Табака
              </p>
            </div>
          </div>

          <div className="text-center xl:text-left">
            <SectionTitle light>Автор тренінгу - Ірина Табака</SectionTitle>

            <div className="mx-auto mt-10 grid max-w-[760px] gap-4 xl:mx-0">
              {authorPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-white/10 bg-white/10 px-5 py-4 text-center transition-all duration-500 hover:bg-white/14 xl:text-left"
                >
                  <p className="text-base leading-8 text-white md:text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-20 text-center md:px-10 md:py-24">
        <SectionTitle>Є питання?</SectionTitle>

        <p className="mx-auto mt-8 max-w-[700px] text-xl leading-relaxed text-[#111] md:text-2xl">
          Залишились питання? Пишіть!
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="tel:+3800974083750"
            className="text-lg leading-8 text-[#16195a] transition-opacity duration-300 hover:opacity-70 md:text-xl"
          >
            +38 (097) 408 37 50
          </a>

          <a
            href="mailto:iryna.tabaka@gmail.com"
            className="text-lg leading-8 text-[#16195a] transition-opacity duration-300 hover:opacity-70 md:text-xl"
          >
            iryna.tabaka@gmail.com
          </a>
        </div>

        <div className="mt-14 border-t border-[#16195a]/10 pt-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[#16195a]/60">
            Онлайн-школа
          </p>
          <p className="mt-4 text-sm text-[#16195a]/70">
            Авторське право © 2026 Всі права захищено
          </p>
        </div>
      </section>
    </main>
  );
}
