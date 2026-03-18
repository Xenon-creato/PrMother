export default function ExpressCoursePage() {
  const heroPoints = [
    "Ефективність методу за даними ВООЗ - 99,6%",
    "Цей курс може назавжди змінити Ваше життя",
  ];

  const reasons = [
    {
      title:
        "Боїтесь чи уникаєте інтимних стосунків через страх непланованої вагітності",
      description:
        "Страх виникає там, де немає знань. Коли жінка не розуміє свої цикли, не знає, коли може завагітніти, а коли точно ні, вона боїться...",
    },
    {
      title:
        "Мрієте про якісні інтимні стосунки без презервативів, переривань та інших втручань",
      description:
        "Вивчивши метод розпізнавання плідності, можна жити без контрацепції! І при цьому - не боятися, не псувати своє здоров'я та отримувати задоволення!",
    },
    {
      title:
        'Хочете бути впевненою у своїх діях, а не "гадати на кавовій гущі"',
      description:
        "Ви чули про «природні методи», але не розумієте, як вони працюють і чи справді це можливо на них покладатися",
    },
    {
      title:
        "Якщо для Вас як віруючих людей, важливо жити без контрацепції",
      description:
        "Зокрема, вчення Католицької Церкви чітко говорить про незастосування засобів контрацепції.",
    },
    {
      title: "Вагаєтесь, чи підійде Вам цей метод",
      description:
        "Зорієнтується, які дії треба виконувати та чи реалістично це у Вашій конкретній ситуації",
    },
    {
      title: 'Хочете знайти "свого" вчителя',
      description:
        "Прослухані відео допоможуть зрозуміти, чи підходить Вам стиль подачі інформації та підхід Ірини Табаки",
    },
    {
      title: "Чоловік не підтримує Вас в цьому питанні",
      description:
        "Він вважає, що лише контрацепція дає гарантії, і ви не знаєте, як пояснити йому інший підхід.",
    },
  ];

  const scienceParagraphs = [
    "Це науковий метод, розроблений у 1977 році, при Королівській клініці акушерства та гінекології у місті Бірмінгем (Англія)",
    "Суть у тому, що здійснюючи щоденні спостереження (за базальною температурою тіла, слизом шийки матки та самої шийкою матки) та заносячи їх у спеціальні карти спостережень, жінка чітко визначає, коли відбулася овуляція. А значить – і плідний та неплідний період.",
    'Маючи такі знання, пара може відповідно "організовувати" своє інтимне життя. Якщо зачаття дитини відкладається, для статевих стосунків вибирається період, коли завагітніти неможливо.',
    "Ефективність методу з метою відкладення зачаття за даними ВООЗ становить 99,6%!",
    "Цей експрес-курс допоможе Вам у ньому розібратися!",
  ];

  const authorParagraphs = [
    "Мене звати Ірина Табака.",
    "Уже 8 років я допомагаю жінкам та подружнім парам опанувати метод розпізнавання плідності — і бачу, як це змінює їхнє життя. Вони більше не бояться непланованої вагітності, бо точно знають, коли вона можлива, а коли — ні.",
    "На місце страху приходить спокій, радість та свобода. Поліпшується взаєморозуміння та атмосфера в парі.",
    "Також я викладаю природне планування сім’ї у двох вузах для студентів спеціальностей «Сімейне консультування» та «Катехитика».",
    "Мій власний досвід застосування цього методу у подружжі триває вже 18 років.",
    "А ще я — дружина священника та мама трьох підлітків .",
  ];

  const themes = [
    "Страх перед непланованою вагітністю. Світло в кінці тунелю",
    "Як визначити овуляцію та плідний період?",
    'Чи є метод розпізнавання плідності "чарівною таблеткою"?',
    "А може, вистачить тестів на овуляцію чи мобільних додатків?",
    "А що ж чоловік?",
    "Хто ж повірить без відгуків?",
    "Що буде на тренінгу і як це все відбувається?",
  ];

  const learningSteps = [
    "Ви переглядаєте відео у зручний для Вас час самостійно, а ще краще - парою",
    "Після цього є можливість зустрітися з автором на 20-хвилинній безкоштовній консультації",
  ];

  const testimonials = [
    {
      name: "Ірина Баран",
      text: [
        "“Пані Ірино, дякую за чудовий ознайомчий курс. Я нарешті все дослухала і розумію, що справді хочу продовження. Ви чудова, світла і дуже щира жінка, лекторка, вчитель Маю певні страхи, побоювання чи зможу все правильно опанувати і трохи бракує розуміння і підтримки чоловіка, але я знаю, що Господь може все перемінити, бачачи щирі прагнення і намірення. Розкажіть, будь ласка, як відбувається наступний етап? Яка вартість навчання та як відбувається наша комунікація?”",
      ],
    },
    {
      name: "Якубів Наталя",
      text: [
        '“Хто шукає, той знаходить. От і ми знайшли для себе тренінг Ірини Табаки "Формула любові", який навчає методу розпізнавання плідності і вбачаємо для себе унікальну можливість навчатися цьому і освоїти його, щоб краще розуміти себе саму і своє тіло, процеси, які у ньому відбуваються, а також свого чоловіка, і наші стосунки, розкрити сповна потенціал наших відносин і жити вільно, насолоджуючись подружнім життям. Щиро дякуємо п. Ірині ТАБАЦІ та її команді за віддану працю у цій сфері.',
        "Це нелегка, але така потрібна і благородна справа. Дякуємо, що відкриваєте нам таємниці справжнього подружнього щастя. Дякуємо, за ваш дорогоцінний час, натхнення, розуміння, зусилля , які ви вкладаєте, щоб вести подружжя до повноти Божого задуму та радості життя .”",
      ],
    },
    {
      name: "Tetiana Bura",
      text: [
        '“Щаслива, що познайомилась з пані Іриною та її курсом, адже знання, які отримала це щось безцінне, щось, що допомагає відчути життя у повні, допомагає дивитись на свою плідність як на друга, а не ворога та жити без страху))”',
      ],
    },
  ];

  const faqs = [
    {
      question:
        "Я не маю багато часу. Чи варто проходити цей курс, якщо я дуже зайнята?",
      answer:
        "Курс складається з 7 коротких змістовний відеоуроків, які можна переглядати в будь-який зручний для вас час. Ви зможете навчатися у своєму темпі, і це дозволить вам адаптувати навчання під ваш розклад, навіть якщо у вас обмежений час.",
    },
    {
      question:
        "Я чула, що природне планування сім'ї — це складно. Чи не буде цей курс надто важким для мене?",
      answer:
        "На цьому курсі ми говоримо про складні речі дуже простими словами. Ви отримаєте чітке, структуроване та доступне пояснення основних аспектів методу, переваг та труднощів.",
    },
    {
      question: "Чи підходить цей метод для людей з нерегулярним циклом?",
      answer:
        "Не лише підходить, а й допомагає краще розібратися з причинами цієї нерегулярності",
    },
    {
      question: "Чи гарантує цей курс успішне застосування методу?",
      answer:
        "Ні, курс не дає можливості опанувати метод. Він дає всі підстави прийняти обгрунтоване рішення, чи хочете Ви йти далі і проходити грунтовне навчання методу розпізнавання плідності",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#f8f5f1] text-[#16195a]">
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(22,25,90,0.14),transparent_34%),linear-gradient(180deg,#fcfaf7_0%,#f8f5f1_52%,#f3eee8_100%)]" />
        <div className="absolute left-1/2 top-24 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#d9c2a4]/20 blur-3xl" />

        <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-10 md:px-10 md:pb-28 md:pt-16">
          <div className="mx-auto max-w-[920px] text-center">
            <p className="text-[12px] font-medium uppercase tracking-[0.35em] text-[#16195a]/60 md:text-[13px]">
              Онлайн-школа Ірини Табаки
            </p>

            <div className="mt-6 inline-flex items-center rounded-full border border-[#16195a]/10 bg-white/80 px-4 py-2 text-sm text-[#16195a]/70 shadow-[0_10px_30px_rgba(22,25,90,0.06)] backdrop-blur">
              "Що жінка має знати про свій цикл, щоб не боятися несподіваної
              вагітності?"
            </div>

            <h1 className="mx-auto mt-8 max-w-[900px] text-4xl font-normal uppercase leading-[1.05] tracking-[-0.03em] text-[#16195a] md:text-6xl xl:text-[76px]">
              Зрозумій свій цикл – живи без тривоги
            </h1>

            <p className="mx-auto mt-6 max-w-[820px] text-xl font-light uppercase tracking-[0.18em] text-[#16195a]/80 md:text-2xl">
              Експрес-курс з методу розпізнавання плідності
            </p>

            <p className="mx-auto mt-6 max-w-[720px] text-lg leading-8 text-[#16195a]/76 md:text-[22px]">
              Можливість розібратися, як це працює і прийняти своє рішення
            </p>
          </div>

          <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            {/* 
              ВЕЛИКЕ ФОТО:
              висота фото-блоку міняється тут -> min-h-[320px] md:min-h-[560px]
              якщо хочете зробити блок ще більшим/меншим, міняйте саме ці класи
            */}
            <div className="group relative overflow-hidden rounded-[34px] border border-white/70 bg-white/70 p-3 shadow-[0_30px_90px_rgba(22,25,90,0.10)] backdrop-blur transition duration-700 hover:-translate-y-1">
              <div className="relative flex min-h-[320px] items-center justify-center rounded-[28px] border border-dashed border-[#16195a]/18 bg-[linear-gradient(135deg,rgba(22,25,90,0.06),rgba(217,194,164,0.18))] px-6 text-center md:min-h-[560px]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#16195a]/45">
                    Фото
                  </p>
                  <p className="mt-3 text-lg text-[#16195a]/70 md:text-2xl">
                    Місце для головного фото курсу
                  </p>
                </div>
              </div>
            </div>

            {/* 
              ТЕКСТ БІЛЯ ФОТО:
              ось це і є блок, де текст стоїть збоку від фото.
              якщо захочете поміняти сторони місцями:
              - фото блоку дайте className="lg:order-2"
              - цьому текстовому блоку дайте className="lg:order-1"
            */}
            <div className="rounded-[34px] border border-[#16195a]/10 bg-white p-8 shadow-[0_24px_70px_rgba(22,25,90,0.08)] transition duration-500 hover:-translate-y-1 md:p-10">
              <div className="mx-auto max-w-[520px] text-center lg:text-left">
                <p className="text-xs uppercase tracking-[0.35em] text-[#16195a]/48">
                  Основне
                </p>

                <h2 className="mt-4 text-3xl font-normal leading-tight text-[#16195a] md:text-4xl">
                  Зрозумій свій цикл – живи без тривоги
                </h2>

                <p className="mt-5 text-lg leading-8 text-[#16195a]/74">
                  Експрес-курс з методу розпізнавання плідності
                </p>

                <div className="mt-8 grid gap-4">
                  {heroPoints.map((item) => (
                    <div
                      key={item}
                      className="rounded-[24px] border border-[#16195a]/8 bg-[#f8f5f1] px-5 py-4 transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_35px_rgba(22,25,90,0.08)]"
                    >
                      <p className="text-base leading-7 text-[#16195a]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-18 md:px-10 md:py-24">
          <div className="mx-auto max-w-[900px] text-center">
            <h2 className="text-3xl font-normal uppercase tracking-[-0.03em] text-[#16195a] md:text-5xl">
              "Це неможливо!" - скажете Ви :)
            </h2>
            <p className="mt-5 text-xl font-medium text-[#16195a]/90">Вірю</p>
            <p className="mx-auto mt-5 max-w-[820px] text-lg leading-8 text-[#16195a]/72 md:text-[22px]">
              Вивчити метод справді в такий спосіб неможливо, але остаточно в
              ньому розібратися і зрозуміти, чи Вам це підходить – цілком
              реально!
            </p>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[980px] text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#16195a]/45">
              Для кого
            </p>
            <h2 className="mt-5 text-3xl font-normal uppercase tracking-[-0.03em] text-[#16195a] md:text-5xl">
              Отож, цей курс - для Вас, якщо Ви:
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {reasons.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[30px] border border-[#16195a]/8 bg-[#f8f5f1] p-7 text-center shadow-[0_16px_45px_rgba(22,25,90,0.05)] transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_22px_55px_rgba(22,25,90,0.09)] ${
                    index === 6 ? "xl:col-start-2" : ""
                }`}
              >
                <div className="mx-auto h-10 w-10 rounded-full border border-[#16195a]/12 bg-[#f8f5f1]" />
                <h3 className="mt-6 text-xl font-medium leading-8 text-[#16195a]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#16195a]/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#16195a] text-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 text-center md:px-10 md:py-24">
          <p className="text-xs uppercase tracking-[0.35em] text-white/55">
            Рішення
          </p>
          <h2 className="mx-auto mt-5 max-w-[900px] text-3xl font-normal uppercase tracking-[-0.03em] text-white md:text-5xl">
            Вирішити ці проблеми за допомогою методу розпізнавання плідності!
          </h2>

          <div className="mx-auto mt-10 max-w-[980px] space-y-6">
            {scienceParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-lg leading-8 text-white/82 md:text-[21px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#f3eee8]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-8 lg:grid-cols-[0.94fr_1.06fr]">
            {/* 
              ЩОБ ТЕКСТ БУВ БІЛЯ ФОТО:
              цей контейнер має grid + 2 колонки.
              фото ліворуч, текст праворуч.
              якщо треба навпаки, поміняйте order як написано вище.
            */}
            <div className="group relative overflow-hidden rounded-[34px] border border-white/70 bg-white/70 p-3 shadow-[0_28px_80px_rgba(22,25,90,0.10)] transition duration-700 hover:-translate-y-1">
              <div className="flex min-h-[320px] items-center justify-center rounded-[28px] border border-dashed border-[#16195a]/16 bg-[linear-gradient(145deg,rgba(22,25,90,0.08),rgba(255,255,255,0.92))] px-6 text-center md:min-h-[620px]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#16195a]/45">
                    Фото
                  </p>
                  <p className="mt-3 text-lg text-[#16195a]/70 md:text-2xl">
                    Місце для фото автора
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[34px] border border-[#16195a]/8 bg-white p-8 shadow-[0_24px_70px_rgba(22,25,90,0.08)] md:p-10">
              <div className="mx-auto max-w-[620px] text-center lg:text-left">
                <p className="text-xs uppercase tracking-[0.35em] text-[#16195a]/45">
                  Про автора
                </p>
                <h2 className="mt-4 text-3xl font-normal uppercase tracking-[-0.03em] text-[#16195a] md:text-5xl">
                  Про автора
                </h2>

                <div className="mt-8 space-y-5">
                  {authorParagraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-lg leading-8 text-[#16195a]/74"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1350px] px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[900px] text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#16195a]/45">
              Наповнення
            </p>
            <h2 className="mt-5 text-3xl font-normal uppercase tracking-[-0.03em] text-[#16195a] md:text-5xl">
              Теми курсу:
            </h2>
          </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {themes.map((item, index) => (
                <div
                key={item}
                className={`rounded-[28px] border border-[#16195a]/8 bg-[#f8f5f1] p-7 text-center shadow-[0_16px_45px_rgba(22,25,90,0.05)] transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_22px_55px_rgba(22,25,90,0.09)] ${
                    index === 6 ? "xl:col-start-2" : ""
                }`}
                >
                <p className="text-lg leading-8 text-[#16195a] md:text-xl">
                    {item}
                </p>
                </div>
            ))}
            </div>
        </div>
      </section>
        <section className="relative overflow-hidden bg-[#f8f5f1] py-20 md:py-24">
        <div className="mx-auto max-w-[1150px] px-6 md:px-10">
            <div className="flex items-center justify-center gap-5 md:gap-8">
            <div className="h-px flex-1 max-w-[320px] bg-[#16195a]/14" />

            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#16195a]/10 bg-white shadow-[0_18px_40px_rgba(22,25,90,0.08)]">
                <svg
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#2e3272]"
                >
                <path
                    d="M12 7C12 5.34315 13.3431 4 15 4C16.6569 4 18 5.34315 18 7C18 8.65685 16.6569 10 15 10H12V7Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                />
                <path
                    d="M12 7C12 5.34315 10.6569 4 9 4C7.34315 4 6 5.34315 6 7C6 8.65685 7.34315 10 9 10H12V7Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                />
                <path d="M5 10H19V13H5V10Z" fill="currentColor" />
                <path d="M6 13H11V20H6V13Z" fill="currentColor" />
                <path d="M13 13H18V20H13V13Z" fill="currentColor" />
                <path d="M12 10V20" stroke="white" strokeWidth="1.6" />
                </svg>
            </div>

            <div className="h-px flex-1 max-w-[320px] bg-[#16195a]/14" />
            </div>

            <div className="mx-auto mt-12 max-w-[920px] space-y-6">
            <div className="rounded-[30px] border border-[#16195a]/8 bg-white px-8 py-8 text-center shadow-[0_20px_60px_rgba(22,25,90,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(22,25,90,0.10)] md:px-12 md:py-10">
                <p className="text-2xl leading-[1.5] text-[#2e3272] md:text-[34px]">
                Бонус 1. Основні причини послаблення чи відсутності статевого бажання
                </p>
            </div>

            <div className="rounded-[30px] border border-[#16195a]/8 bg-white px-8 py-8 text-center shadow-[0_20px_60px_rgba(22,25,90,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(22,25,90,0.10)] md:px-12 md:py-10">
                <p className="text-2xl leading-[1.5] text-[#2e3272] md:text-[34px]">
                Бонус 2. Засоби контрацепції: За і Проти (в контексті християнського
                світогляду)
                </p>
            </div>
            </div>
        </div>
        </section>
      <section className="relative bg-[#16195a] text-white">
        <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-[900px] text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-white/55">
              Формат
            </p>
            <h2 className="mt-5 text-3xl font-normal uppercase tracking-[-0.03em] text-white md:text-5xl">
              Як відбувається навчання?
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {learningSteps.map((item, index) => (
              <div
                key={item}
                className="rounded-[30px] border border-white/10 bg-white/8 p-8 text-center backdrop-blur transition duration-500 hover:-translate-y-1 hover:bg-white/10 md:p-10"
              >
                <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">
                  {`0${index + 1}`}
                </p>
                <p className="mt-5 text-xl leading-8 text-white/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5f1]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[900px] text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#16195a]/45">
              Відгуки
            </p>
            <h2 className="mt-5 text-3xl font-normal uppercase tracking-[-0.03em] text-[#16195a] md:text-5xl">
              Відгуки
            </h2>
          </div>

          <div className="mt-14 grid gap-6 xl:grid-cols-3">
            {testimonials.map((item, index) => (
              <article
                key={item.name}
                className="rounded-[30px] border border-[#16195a]/8 bg-white p-6 text-center shadow-[0_18px_55px_rgba(22,25,90,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(22,25,90,0.10)] md:p-8"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-[#16195a]/15 bg-[linear-gradient(135deg,rgba(22,25,90,0.05),rgba(217,194,164,0.18))] text-center">
                  <span className="text-[10px] uppercase tracking-[0.35em] text-[#16195a]/45">
                    Фото
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-medium text-[#16195a]">
                  {item.name}
                </h3>

                <div className="mt-5 space-y-4">
                  {item.text.map((paragraph) => (
                    <p
                      key={`${item.name}-${paragraph.slice(0, 24)}-${index}`}
                      className="text-base leading-8 text-[#16195a]/72"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[900px] text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#16195a]/45">
              FAQ
            </p>
            <h2 className="mt-5 text-3xl font-normal uppercase tracking-[-0.03em] text-[#16195a] md:text-5xl">
              Найпоширеніші запитання
            </h2>
          </div>

          <div className="mt-14 space-y-5">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-[28px] border border-[#16195a]/8 bg-[#f8f5f1] p-6 text-center shadow-[0_12px_35px_rgba(22,25,90,0.05)] transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_48px_rgba(22,25,90,0.08)] md:p-8"
              >
                <h3 className="text-xl font-medium leading-8 text-[#16195a] md:text-2xl">
                  {item.question}
                </h3>
                <p className="mx-auto mt-4 max-w-[920px] text-base leading-8 text-[#16195a]/72 md:text-lg">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}