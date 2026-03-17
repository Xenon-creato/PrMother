import Link from "next/link";

const ifYouItems = [
  "Боїтесь щось пропустити у статевому вихованні",
  "Не можете зважитись на розмови про інтимне",
  "Сумніваєтесь, чи то не зарано",
  "Не знаєте, які слова підібрати і про що взагалі говорити",
  "Маєте страх, дискомфорт, сором і т.п.",
];

const theoryItems = [
  {
    number: "01",
    title:
      "Що є нормою психосексуального розвитку для різного віку, а де тривожні ознаки?",
    text: "(на основі матеріалів Школи статевого виховання Національного Інституту сексології та сексуального здоров'я)",
  },
  {
    number: "02",
    title:
      "Що слід знати дорослим про статеву систему, щоб цікаво й авторитетно говорити про це з дитиною?",
  },
  {
    number: "03",
    title: "Як говорити про інтимне?",
    text: "Варіанти відповідей на дитячі питання",
  },
  {
    number: "04",
    title: "Які теми потрібно обов'язково обговорити з дитиною?",
  },
  {
    number: "05",
    title:
      "Чого потребує хлопчик в процесі виховання від тата і мами, щоб стати справжнім Чоловіком?",
  },
  {
    number: "06",
    title: "Чого потребує дівчинка?",
  },
];

const helpItems = [
  "Зрозуміти, як говорити з дітьми про статеві відмінності та дітонародження;",
  "Подолати сором і страх перед такими розмовами;",
  "Говорити з любов'ю, впевнено і спокійно",
];

const reviews = [
  `“Чудовий курс, який дає прості відповіді на складні запитання. Бо іноді батькам дуже важко знайти сміливість і слова, щоб поговорити з дитиною про інтимні речі. І щоб запитання дітей не застали вас не підготовленими, раджу пройти курс Ірини Табаки «Статеве виховання наших дітей». Інформація подається в дуже простій, зрозумілій формі з повагою до батьків та дітей. ”`,
  `“Курс є надзвичайно інформативний і дуже важливий для батьків які хочуть виховати психологічно здорову дитину у сучасному світі, адже зараз так багато пропаганд і спокус, яким дитина сама не зможе протистояти якщо не буде мати цієї інформативної подушки, на яку вона зможе опиратися під час перехідного віку, і загалом протягом цілого життя. Не треба надіятись, що дитину в школі вчитель біології навчить або просто купити їй книжку про статеве виховання і дитина таким чином все потрібне буде знати.

Ми собі маємо купити книжки і вивчати літературу, щоб якісно донести це до дитини, а ще краще, пройти курс "Поговоримо про статеве виховання наших дітей" адже там зібрана вся необхідна інформація, про яку дитина має дізнатися саме від нас, батьків - це дуже важливо! Якщо ми батьки не будемо першими, хто їм про це розкаже, то перша буде вулиця , але це буде не так як би нам того хотілося...

Я дуже рада, що мала можливість повчитися у пані Ірини , Вона надзвичайна жінка, дуже лагідно, мудро і доступно подає інформацію. ЩИРО ДЯКУЮ❤ ”`,
  `“Курс п.Ірини Табаки про статеве виховання дітей був наповнений дуже цінною і корисною інформацією. Я отримала відповіді майже на всі запитання, з якими йшла на ці лекції, зокрема, як і якими словами дитині починати розповідати про статеві відмінності і особливості. Дуже сподобався метод вкидів інформації, також важливим було побачити питання, які може ставити дитина і як батькам на них відповідати.

Також для мене цінною була інформація про фізіологію і психологію чоловіків і жінок, ознаки того, що ви добре виховали сина чи доньку. В межах курсу нам було надіслано багато додаткових матеріалів (відео, тексти), які можна переглядати разом з дитиною. Чоловікові теж було цікаво, прослухав усі лекції, тож будемо творити простір довіри з нашими дітьми вже від маленького віку. Дуже радію, що потрапила на цей курс, дякую за зусилля, старання і час, приділений учасникам курсу! ❤ ”`,
];

const authorItems = [
  "тренер зі статевої та сексуальної грамотності (сертифікат Школи Статевого виховання Національного інституту сексології та сексуального здоров'я)",
  "сімейний консультант",
  "вчитель симпто-термального методу розпізнавання плідності",
  `автор курсу з природного планування сім'ї "Формула любові"`,
  "дружина священика",
  "мама 3 діток",
  "катехит",
];

function PhotoPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden rounded-[32px] border border-[#eadbd2] bg-white/70 shadow-[0_30px_80px_rgba(90,60,50,0.08)] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),rgba(248,243,238,0.88)_45%,rgba(232,214,203,0.7)_100%)]" />
      <div className="absolute -left-10 top-6 h-28 w-28 rounded-full bg-white/70 blur-2xl" />
      <div className="absolute -bottom-6 right-4 h-36 w-36 rounded-full bg-[#eadbd2]/60 blur-3xl" />
      <div className="absolute inset-[14px] rounded-[24px] border border-white/60" />
    </div>
  );
}

export default function VideoCoursePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f3ee] text-[#3c2b25]">
      <div className="pointer-events-none absolute left-0 top-0 h-[28rem] w-[28rem] rounded-full bg-white/60 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-[32rem] h-[32rem] w-[32rem] rounded-full bg-[#eadbd2]/55 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-white/40 blur-3xl" />

      <section className="relative px-6 pb-14 pt-12 md:px-10 lg:px-16 lg:pb-20 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.02em] md:text-5xl lg:text-[4.1rem]">
                Ваша дитина дізнається, звідки беруться діти. Питання лише — з
                любов’ю від вас чи з жорсткого відео
              </h1>

              <div className="mt-8 h-px w-24 bg-[#d9c8bf]" />

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6d544b] md:text-xl">
                Допоможе Вам подолати власний сором, страх та незнання, а дітям
                - зростати гармонійними особистостями
              </p>
            </div>

            <div className="group relative">
              <PhotoPlaceholder className="aspect-[0.9/1.06] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_40px_100px_rgba(90,60,50,0.14)]" />
              <div className="pointer-events-none absolute -bottom-4 left-6 right-6 h-10 rounded-full bg-[#d7c0b4]/30 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-12 md:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h2 className="text-3xl text-center font-semibold tracking-[-0.02em] md:text-4xl">
              Якщо Ви:
            </h2>
            <div className="mt-5 h-px w-24 bg-[#d9c8bf]" />
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {ifYouItems.map((item, index) => (
              <article
                key={item}
                className="group rounded-[30px] border border-[#eadbd2] bg-white/78 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(90,60,50,0.12)]"
              >
                <p className="text-xs font-semibold tracking-[0.35em] text-[#9a6d5b]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-xl font-semibold leading-8 transition duration-300 group-hover:text-[#7f5648]">
                  {item}
                </h3>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[34px] border border-[#eadbd2] bg-white/80 p-7 shadow-[0_24px_70px_rgba(90,60,50,0.08)] md:p-10">
              <p className="text-lg  text-center leading-8 text-[#6d544b]">
                Ви не винні, бо цьому нас, батьків, ніхто не вчив.
              </p>
              <p className="mt-3 text-lg text-center leading-8 text-[#6d544b]">
                Але є хороша новина - з усім цим можна справитись!
              </p>

              <h3 className="mt-7 text-2xl text-center font-semibold tracking-[-0.02em] md:text-3xl">
                І ЦЕЙ ВІДЕОКУРС ВАМ ДОПОМОЖЕ!
              </h3>


            </div>

            <div className="group">
              <p className="mt-6 text-base leading-8 text-[#6d544b]">
                Мене звати Ірина Табака. Восьмий рік я допомагаю жінкам та
                подружнім парам налагодити інтимну сферу свого подружнього
                життя, розумію проблеми і бачу наслідки того, що було упущено у
                статевому вихованні в дитячі та юнацькі роки.
              </p>

              <p className="mt-4 text-base leading-8 text-[#6d544b]">
                Як тренер зі статевої та сексуальної грамотності з
                християнськими цінностями я кілька років вела курс "Статеве
                виховання" для дітей та їх батьків.
              </p>

              <p className="mt-4 text-base leading-8 text-[#6d544b]">
                Цей відеокурс сформований на основі реальних зустрічей з
                батьками, їх запитів, сумнівів та страхів.
              </p>
              <PhotoPlaceholder className="aspect-[1/1.08] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_40px_100px_rgba(90,60,50,0.14)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-12 md:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h2 className="max-w-4xl text-3xl text-center font-semibold tracking-[-0.02em] md:text-4xl">
              Ми розглянемо важливу теорію та конкретні практичні поради:
            </h2>
            <div className="mt-5 h-px w-24 bg-[#d9c8bf] mx-auto" />
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {theoryItems.map((item) => (
              <article
                key={item.number + item.title}
                className="group rounded-[30px] border border-[#eadbd2] bg-white/80 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(90,60,50,0.12)] md:p-7"
              >
                <p className="text-xs font-semibold tracking-[0.35em] text-[#9a6d5b]">
                  {item.number}
                </p>

                <h3 className="mt-5 text-xl font-semibold leading-8 transition duration-300 group-hover:text-[#7f5648]">
                  {item.title}
                </h3>

                {item.text ? (
                  <p className="mt-4 text-base leading-7 text-[#6d544b]">
                    {item.text}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-12 md:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[38px] border border-[#eadbd2] bg-white/82 p-7 shadow-[0_28px_90px_rgba(90,60,50,0.09)] md:p-10 lg:p-12">
            <h2 className="text-3xl text-center font-semibold tracking-[-0.02em] md:text-4xl">
              ФАХІВЦІ СТВЕРДЖУЮТЬ:
            </h2>

            <div className="mt-5 h-px w-24 bg-[#d9c8bf]" />

            <div className="mt-10 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="group order-2 lg:order-1">
                <PhotoPlaceholder className="aspect-[1/1] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_40px_100px_rgba(90,60,50,0.14)]" />
              </div>

              <div className="order-1 rounded-[30px] bg-[#fcf8f5] p-7 lg:order-2 lg:p-9">
                <p className="text-2xl font-semibold leading-[1.35] tracking-[-0.02em] md:text-3xl">
                  До 7 років дитина повинна дізнатися, звідки беруться діти. Від
                  своїх батьків, а не випадкових відеоматеріалів з Youtube.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-12 md:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
              АЛЕ Ж !
            </h2>
            <div className="mt-5 h-px w-24 bg-[#d9c8bf]" />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-[30px] border border-[#eadbd2] bg-white/80 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(90,60,50,0.12)]">
              <h3 className="text-2xl font-semibold leading-9 tracking-[-0.02em]">
                "З нами ніхто про це не говорив, і якось виросли"
              </h3>
              <p className="mt-5 text-lg leading-8 text-[#6d544b]">
                "Так, але ми не мали телефонів, інтернету та Youtube"
              </p>
            </article>

            <article className="rounded-[30px] border border-[#eadbd2] bg-white/80 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(90,60,50,0.12)]">
              <h3 className="text-2xl font-semibold leading-9 tracking-[-0.02em]">
                "На телефоні дитини стоїть батьківський контроль"
              </h3>
              <p className="mt-5 text-lg leading-8 text-[#6d544b]">
                "Але його може не бути на телефоні однокласників, які захочуть
                поділитися знайденими відео на перерві"
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-[30px] border border-[#eadbd2] bg-[#fcf8f5] p-7 shadow-[0_20px_50px_rgba(90,60,50,0.06)]">
            <p className="text-base text-center leading-8 text-[#6d544b]">
              Вибір за нами - зробимо це самі з повагою та любов'ю чи дозволимо
              зробити це комусь замість нас.
            </p>
            <p className="mt-5 text-2xl text-center font-semibold tracking-[-0.02em]">
              ВАЖЛИВО ДІЯТИ ВЧАСНО!
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-12 md:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-center tracking-[-0.02em] md:text-4xl">
              ЦЕЙ КУРС ДОПОМОЖЕ ВАМ:
            </h2>
            <div className="mt-5 h-px w-24 bg-[#d9c8bf]" />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {helpItems.map((item, index) => (
              <article
                key={item}
                className="group rounded-[30px] border border-[#eadbd2] bg-white/80 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(90,60,50,0.12)]"
              >
                <p className="text-xs font-semibold tracking-[0.35em] text-[#9a6d5b]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-xl font-semibold leading-8 transition duration-300 group-hover:text-[#7f5648]">
                  {item}
                </h3>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-[30px] border border-[#eadbd2] bg-[#fcf8f5] p-7 shadow-[0_20px_50px_rgba(90,60,50,0.06)]">
            <p className="text-lg text-center font-semibold leading-8 tracking-[-0.01em]">
              Уся інформація - у відеозаписах онлайн-курсу, які можете
              переглядати у зручний для Вас час Доступ до матеріалів курсу -
              БЕЗСТРОКОВИЙ!
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-12 md:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
              ВІДГУКИ
            </h2>
            <div className="mt-5 h-px w-24 bg-[#d9c8bf]" />
          </div>

          <div className="space-y-5">
            {reviews.map((review, index) => (
              <blockquote
                key={index}
                className="rounded-[30px] border border-[#eadbd2] bg-white/82 p-7 text-base leading-8 text-[#6d544b] shadow-[0_22px_60px_rgba(90,60,50,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(90,60,50,0.12)] md:p-8 whitespace-pre-line"
              >
                {review}
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-12 md:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[38px] border border-[#eadbd2] bg-white/82 p-7 shadow-[0_28px_90px_rgba(90,60,50,0.09)] md:p-10 lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="group order-2 lg:order-1">
                <PhotoPlaceholder className="aspect-[1/0.9] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_40px_100px_rgba(90,60,50,0.14)]" />
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
                  ВАРТІСТЬ КУРСУ символічна - 850 ГРН. (як одна закупка в
                  магазині)
                </h2>

                <div className="mt-5 h-px w-24 bg-[#d9c8bf]" />

                <p className="mt-7 text-lg leading-8 text-[#6d544b]">
                  Для оплати перейдіть, будь ласка, за посиланням
                </p>

                <a
                  href="https://secure.wayforpay.com/payment/s55e3ea8725fd"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#8a5d4f] px-8 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#774c40] hover:shadow-[0_18px_40px_rgba(138,93,79,0.35)]"
                >
                  ПЕРЕЙТИ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-16 pt-12 md:px-10 lg:px-16 lg:pb-24 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[40px] border border-[#eadbd2] bg-white/84 p-7 shadow-[0_30px_100px_rgba(90,60,50,0.10)] md:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12">
              <div className="group">
                <PhotoPlaceholder className="aspect-[0.95/1.18] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_40px_100px_rgba(90,60,50,0.14)]" />
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
                  АВТОР КУРСУ - ІРИНА ТАБАКА
                </h2>

                <div className="mt-5 h-px w-24 bg-[#d9c8bf]" />

                <ul className="mt-8 space-y-4">
                  {authorItems.map((item) => (
                    <li
                      key={item}
                      className="rounded-[24px] border border-[#eadbd2] bg-[#fcf8f5] px-5 py-4 text-base leading-7 text-[#6d544b] transition duration-300 hover:translate-x-1 hover:shadow-[0_16px_40px_rgba(90,60,50,0.08)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-8 text-2xl font-semibold tracking-[-0.02em]">
                  ДІЄМО?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}