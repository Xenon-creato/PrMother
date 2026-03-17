const painPoints = [
  {
    number: "01",
    title: "Уникаєте інтимних стосунків через страх непланованої вагітності",
    text: "Страх виникає там, де немає знань. Коли жінка не розуміє свої цикли, не знає, коли може завагітніти, а коли точно ні, вона боїться...",
  },
  {
    number: "02",
    title:
      "Мрієте про якісні інтимні стосунки без презервативів, переривань та інших втручань",
    text: "Вивчивши метод розпізнавання плідності, можна жити без контрацепції! І при цьому - не боятися, не псувати своє здоров'я та отримувати задоволення!",
  },
  {
    number: "03",
    title: "Не можете завагітніти",
    text: "Здійснення спостережень допоможе розібратися, чи відбувається овуляція і коли саме, яка тривалість лютеїнової фази, чи є високоплідний слиз. Також дасть відповідь, коли найсприятливіший час для статевих стосунків",
  },
  {
    number: "04",
    title: "Турбуєтесь про своє здоров'я",
    text: "Можливість не пропустити перші ознаки проблем зі здоров'ям і гормональним фоном дають нам карти спостережень! На них у режимі реального часу, тобто щодня, ми бачимо, що відбувається з циклом: чи є в ньому овуляція, яка тривалість лютеїнової фази. Маємо можливість побачити перші ознаки відхилень і вчасно зреагувати",
  },
  {
    number: "05",
    title: "Вивчали метод самостійно, але отримали небажаний результат",
    text: "Є багато нюансів, які не описані у книгах та не викладені в інтернеті. Якщо їх не врахувати, то виникають помилки. Тому так важливо на перших етапах мати супровід вчителя методу.",
  },
  {
    number: "06",
    title: "Якщо для Вас як віруючих людей, важливо жити без контрацепції",
    text: "Зокрема, вчення Католицької Церкви чітко говорить про незастосування засобів контрацепції.",
  },
  {
    number: "07",
    title: "Готуєтесь до шлюбу",
    text: 'Це найкращий подарунок, який можете собі зробити! Ви зможете від самого початку жити "як Бог цього хоче"',
  },
];

const sexualityTopics = [
  "Фізіологія статевого стосунку: що, як і чому відбувається?",
  "Індивідуальна і парна норма, діапазон прийнятності сексуальних практик в парі: як говорити і домовлятися",
  "Фізіологія сексуальності",
  "Окрема розмова про клітор",
  "Ерогенні зони",
  "Оргазм",
  "Статева конституція",
  "Сексуальні розлади",
  "Психосексуальний розвиток дитини і типові помилки дорослих – де можуть ховатися причини деяких сьогоднішніх проблем",
  "Зниження статевого потягу і що з цим робити?",
  "І що потрібно для гармонії?!",
];

const actionSteps = [
  "Обговорити це все в парі",
  "Прийняти відповідальне рішення",
  "Виділити час та гроші",
  'І зареєструватися на тренінг, який розділить Ваше життя на «До» та «Після»',
];

const testimonials = [
  {
    author: "Артем Семенець",
    text: [
      'Курс "Формула любові» є, на мою думку, дуже корисним, інформативним і збалансованим. Все викладається чітко, послідовно. Приємно дивує наявність посилань на наукові джерела, та системний підхід до аналізу статевого співжиття подружжя і здоров\'я жінки загалом. Скажу відверто, що до проходження курсу мав лише дуже загальне уявлення про процеси, які відбуваються в організмі жінки. Зараз, після проходження курсу, розумію все, що каже моя дружина на цю тему',
    ],
    link: "https://www.facebook.com",
  },
  {
    author: "Тетяна Кузьма",
    text: [
      "Щаслива, що познайомилась з пані Іриною та її курсом, адже знання, які отримала це щось безцінне, щось, що допомагає відчути життя у повні, допомагає дивитись на свою плідність як на друга, а не ворога та жити без страху)) Звісно, метод вимагає дисципліни, адже знання без практики нічого не варті. Що більше, насправді, окрім програми курсу здобувається значно більше - це підтримка, це додаткові знання на теми, які мене цікавили.",
      "Курс також про відкритість, це те місце, де можна запитати і отримати відповідь про все, що стосується статевості і нашого жіночого репродуктивного здоров'я",
    ],
    link: "https://www.facebook.com",
  },
  {
    author: "Яна Лонська",
    text: [
      "Я дуже щаслива, що, ще будучи не заміжньою, вивчила цей метод разом з коханим - і тепер не переживаю, як буде виглядати моє статеве життя в подружжі, що не треба хвилюватися, мати стрес від незапланованої вагітності, від гормональних таблеток, які руйнують здоров'я жінки. Так, цей метод вимагає відповідальності перед своїми рішеннями. Але плоди його солодкі - так сміло кажу, бо довіряю жінкам, які мене цьому навчили і самі так живуть.",
      "Раджу кожній дівчині, жінці ( разом з коханими) пройти цей курс - і ви зробите великий вклад у ваше статеве життя.",
    ],
    link: "https://www.facebook.com",
  },
  {
    author: "Esfir Pikulia",
    text: [
      "Amazing course! As a young lady, I was not very knowledgeable in this area, so I thought that it would be essential for me to learn as much as possible while I'm still not married. The reason why this course was so helpful to me, is because it wasn't just a ton of theory that I had to learn, but instead we learned by watching short and informative videos with language that was easy to understand.",
      "To make sure that her students understand the material, Iryna is always available for a chat, and will answer any questions and guide you through the process of getting used to keeping up with your personal fertility maps. There also will be some hoework that will help you to understand how to fill in those maps, and once again Iryna will guide you through them. If you are looking to learn more about your body and how it functions, I would absolutely recommend going to Iryna!",
    ],
    link: "https://www.facebook.com",
  },
  {
    author: "Роман Гридковець",
    text: ["Допомагає жити по-християнськи у сім'ї) Дякую за курс)) Рекомендую"],
    link: "https://www.facebook.com",
  },
];

const trainingFeatures = [
  {
    title: "Теорія у форматі записаних відеоуроків",
    text: "Ви дивитесь їх протягом дня у зручний для Вас час",
  },
  {
    title: "Тести",
    text: "Таким чином ми бачимо, чи все Вам зрозуміло",
  },
  {
    title: "Щотижневий супровід по особистих картах протягом 3 місяців",
    text: "",
  },
  {
    title: "Особиста діагностична сесія з керівником проекту на початку курсу",
    text: "Для ознайомлення з Вашою особистою ситуацією",
  },
  {
    title:
      "Довірлива атмосфера, спілкуваня з однодумцями, можливість поділитися та задати свої питання",
    text: "",
  },
  {
    title: "Групові зустрічі",
    text: "Ми обговоримо всі незрозумілі моменти",
  },
];

const howItWorks = [
  "В день старту курсу Ви отримуєте доступ до навчальної платформи",
  "Куратор перевіряє кожне завдання та дає зворотний зв'язок",
  "Наприкінці першого тижня навчання Ви отримуєте всю необхідну інформацію, щоб починати самоспостереження та свої карти",
  "Щопонеділка Ви надсилаєте свою карту та отримуєте зворотний зв'язок у письмовій формі",
  "Доступ до матеріалів курсу залишається у Вас назавжди",
  "В результаті Ви стаєте самостійним користувачем методу",
];

const programBlocks = [
  {
    number: "1",
    title: "Блок 1. Анатомія та фізіологія репродуктивної системи",
    text: "Зачаття. Зміни в жіночому організмі протягом менструального циклу. Гормональний фон.",
  },
  {
    number: "2",
    title: "Блок 2. Показники плідності",
    text: "Базальна температура тіла. Слиз шийки матки. Положення шийки матки.",
  },
  {
    number: "3",
    title: "Блок 3. Інтерпретація карт спостережень",
    text: "Правила. Навчальні приклади.",
  },
  {
    number: "4",
    title: "Блок 4. Морально-етичні аспекти",
    text: "",
  },
  {
    number: "5",
    title: "Блок 5. Три місяці особистих самоспостережень у супроводі вчителя",
    text: "Ваш щотижневий звіт (особиста карта спостережень). Наш зворотний зв'язок у письмовій формі.",
  },
  {
    number: "6",
    title: "Блок 6. Психофізіологія сексуальності",
    text: "",
  },
];

const results = [
  "Навчитесь визначати плідний та неплідний період",
  "Зможете насолоджуватись якісними інтимноми стосунками без переривань та інших втручань",
  "Зможете моніторити стан свого репродуктивного здоров'я",
  "Зробите перші кроки в життя без контрацепції (якщо раніше вона була)",
  "Позбудетесь страху перед непланованою вагітністю",
  "Почнете набагато краще розуміти одне одного",
  "Перестанете сприймати секс як обов'язок і тягар",
  "Наважитесь обговорювати те, що відбувається в ліжку",
];

const pricingIncludes = [
  "Теоретичний матеріал у форматі відеоуроків",
  "Зворотній зв'язок по домашніх завданнях з вивчення теорії",
  "Щотижневий супровід по особистих картах протягом 3 місяців",
  "Особиста діагностична сесія з керівником проекту на початку курсу",
  "Групові зустрічі кожного тижня",
  "Особиста зустріч після першого місяця спостережень та наприкінці курсу",
  "Необхідні навчальні матеріали",
  "Записи 10 дуже цінних вебінарів",
  "Участь у чатах, спілкування з однодумцями, можливість поділитися та задати свої питання",
  "Особиста консультація психолога",
  "Духовна розмова при потребі",
  "Доступ до всіх відеоуроків назавжди",
];

const specialOffers = [
  {
    title: "Для дружин військових - 15% знижка",
    text: "(зазначте це при заповненні реєстраційної форми)",
  },
  {
    title: "Для тих, хто вже проходив навчання раніше, знижка 15%",
    text: "(зазначте це при заповненні реєстраційної форми)",
  },
  {
    title: "Для багатодітних родин, знижка 15%",
    text: "(зазначте це при заповненні реєстраційної форми)",
  },
];

const authorBullets = [
  "вчитель симпто-термального методу розпізнавання плідності",
  "тренер зі статевої та сексуальної грамотності",
  "член Української Асоціації Християнської Психології",
  "член Асоціації сексологів та сексотерапевтів України",
  "катехит",
  "щаслива дружина і мама 3 діток",
];

const faqs = [
  {
    question: "У мене нерегулярні цикли, чи підійде мені метод?",
    answer:
      "У такому випадку метод ще й допоможе зрозуміти, в чому причини цієї нерегулярності і яким чином можна організму допомогти. Дивлячись на свою карту, жінка розуміє, чому в цьому циклі місячні почнуться пізніше, ніж зазвичай, не переживаючи про неплановану вагітність (якщо не було стосунків в плідний період).",
  },
  {
    question: "Якщо я не зможу бути присутньою на уроці?",
    answer:
      "Весь навчальний матеріал записаний у форматі відеоуроків. Кожного дня протягом 4 тижнів навчання Ви отримуєте доступ до уроку, який треба подивитися протягом доби у зручний для Вас час. Присутнім треба бути лише на групових зустрічах (6 зустрічей протягом навчального періоду)",
  },
  {
    question:
      "Якщо я тільки готуюсь до одруження і не живу статевим життям, чи є сенс починати навчання?",
    answer:
      "Однозначно! Ідеальний час опанувати метод і розпочати здійснювати спостереження – за півроку до шлюбу. Тоді подружнє життя від самого початку можна організувати з врахуванням усіх цих знань.",
  },
  {
    question: "Як здійснюється особистий супровід?",
    answer:
      "Протягом трьох циклів кожного тижня Ви надсилаєте свою карту спостережень, вчитель методу коментує її і дає зворотній зв'язок",
  },
  {
    question: "Як швидко я зможу користуватися методом?",
    answer:
      "Якщо у першому циклі відбудеться овуляція, то можна буде закрити плідний період за правилами методу і вже в другій половині цього циклу мати статеві стосунки (якщо зачаття дитинки на даному етапі відкладається). Якщо овуляції не буде, то будемо її чекати в наступних циклах (тільки після овуляції можна закрити плідний період)",
  },
  {
    question: "Якщо чоловік не підтримує мене?",
    answer:
      "Здійснення самоспостережень дуже корисне і для моніторингу стану свого репродуктивного здоров'я (жінка чітко знає, чи відбувається овуляція, яка тривалість лютеїнової фази, чи є ознаки недостатності прогестерону чи зниження функції щитовидної залози).",
  },
  {
    question: "Я зараз вагітна. Коли краще проходити навчання?",
    answer:
      "Зараз. Бо після народження дитини знайти на це час набагато важче. Доступ до відеоуроків у вас залишиться і Ви при потребі зможете відновити інформацію.",
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <div className="mx-auto mb-6 h-px w-20 bg-[#16195a]/20" />
      <h2 className="text-3xl font-normal uppercase tracking-[0.08em] text-[#111] md:text-5xl">
        {children}
      </h2>
    </div>
  );
}

function PhotoPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[32px] border border-[#16195a]/10 bg-gradient-to-br from-white to-[#f4f1ea] shadow-[0_20px_70px_rgba(0,0,0,0.08)] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,25,90,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(196,167,106,0.18),transparent_35%)]" />
      <div className="absolute inset-6 rounded-[24px] border border-dashed border-[#16195a]/15" />
    </div>
  );
}

function NumberCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <article className="group rounded-[28px] border border-black/5 bg-white/90 p-8 text-center shadow-[0_14px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.1)]">
      <p className="text-sm tracking-[0.35em] text-[#16195a]/60">{number}</p>
      <h3 className="mt-4 text-2xl font-medium leading-snug text-[#111]">
        {title}
      </h3>
      <p className="mt-5 text-base leading-8 text-black/75 md:text-lg">{text}</p>
    </article>
  );
}

export default function FormuleLovePage() {
  return (
    <main className="bg-[#f8f6f2] text-black">
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#16195a]/6 blur-3xl" />
        <div className="absolute right-0 top-24 h-[320px] w-[320px] rounded-full bg-[#c4a76a]/15 blur-3xl" />

        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.35em] text-[#16195a]/60">
              Онлайн-школа
            </p>

            <h1 className="mt-6 text-4xl font-normal uppercase leading-[1.12] tracking-[0.06em] text-[#111] md:text-6xl">
              "Формула любові - 2.0"
            </h1>

            <div className="mx-auto mt-8 h-px w-24 bg-[#16195a]/20 lg:mx-0" />

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-black/80 md:text-xl lg:mx-0">
              за 4 місяці допоможе Вам усунути перешкоди на шляху до якісних
              інтимних стосунків у подружжі!
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-black/80 md:text-xl lg:mx-0">
              А також буде дуже корисним для пар, які мають труднощі із зачаттям
            </p>
          </div>

          <PhotoPlaceholder className="min-h-[420px] w-full" />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <SectionTitle>Займайте собі місце, якщо:</SectionTitle>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {painPoints.map((item) => (
            <NumberCard
              key={item.number}
              number={item.number}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </section>

      <section className="bg-white/70">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <PhotoPlaceholder className="order-2 min-h-[360px] lg:order-1" />

          <div className="order-1 text-center lg:order-2">
            <SectionTitle>
              Вирішити ці проблеми можна, опанувавши метод розпізнавання
              плідності!
            </SectionTitle>

            <p className="mx-auto mt-10 max-w-4xl text-lg leading-8 text-black/80 md:text-xl">
              Це науковий метод, розроблений у 1977 році, при Королівській
              клініці акушерства та гінекології у місті Бірмінгем (Англія)
            </p>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-black/80 md:text-xl">
              Суть у тому, що здійснюючи щоденні спостереження (за базальною
              температурою тіла, слизом шийки матки та самої шийкою матки) та
              заносячи їх у спеціальні карти спостережень, жінка чітко визначає,
              коли відбулася овуляція. А значить – і плідний та неплідний
              період.
            </p>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-black/80 md:text-xl">
              Маючи такі знання, пара може відповідно "організовувати" своє
              інтимне життя. Якщо зачаття дитини відкладається, для статевих
              стосунків вибирається період, коли завагітніти неможливо.
            </p>

            <p className="mt-8 text-xl font-medium leading-8 text-[#16195a] md:text-2xl">
              <strong>Ефективність методу з метою відкладення зачаття за даними ВООЗ
              становить 99,6%!</strong>
            </p>

            <p className="mt-6 text-xxl font-medium text-[#111] md:text-4xl">
              <strong>Досконале вивчення цього методу лежить в основі тренінгу!</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <SectionTitle>
          А крім цього – уся необхідна інформація про психофізіологію
          сексуальності:
        </SectionTitle>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sexualityTopics.map((item) => (
            <div
              key={item}
              className="rounded-[26px] border border-[#16195a]/8 bg-white p-7 text-center shadow-[0_12px_34px_rgba(0,0,0,0.05)] transition-transform duration-500 hover:-translate-y-1"
            >
              <p className="text-lg leading-8 text-[#111] md:text-xl">{item}</p>
            </div>
          ))}
        </div>
      </section>
        <section className="bg-[#e7e3d7]">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="text-center lg:text-left">
            <p className="text-[34px] font-normal leading-[1.7] text-black md:text-[48px] md:leading-[1.55] lg:max-w-[700px]">
                Також ми будемо
                <br />
                вчитися дбати
                <br />
                про себе та
                <br />
                стосунки в парі.
                <br />
                Бо інтимна сфера
                <br />
                не покращиться,
                <br />
                якщо в парі немає
                <br />
                діалогу, жінка
                <br />
                вкрай виснажена
                <br />
                чи нездорова.
            </p>
            </div>

            <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px]">

                <div className="relative overflow-hidden rounded-[30px] border border-[#16195a]/10 bg-transparent p-6">
                <img
                    src="/images/formule-love-care.png"
                    alt="Ілюстрація"
                    className="mx-auto w-full max-w-[420px] object-contain"
                />
                </div>
            </div>
            </div>
        </div>
        </section>
      <section className="bg-[#16195a] text-white">

        <div className="mx-auto max-w-[1200px] px-6 py-20 text-center md:px-10 md:py-24">
          <h2 className="text-3xl font-normal uppercase tracking-[0.08em] md:text-5xl">
            Ви можете закрити цю сторінку і залишити все, як є. Або почати
            діяти!
          </h2>

          <div className="mx-auto mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {actionSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/10"
              >
                <p className="text-sm tracking-[0.35em] text-white/60">
                  {index + 1}
                </p>
                <p className="mt-4 text-xl leading-8">{step}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-5xl text-base leading-8 text-white/75 md:text-lg">
            (розумію, що це дуже складно, адже ми звикли, що «все
            краще-дітям», забуваючи, що для них найбільше цінність – це щасливі
            батьки! А як вони можуть бути щасливі з проблемами у статевій сфері)
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <SectionTitle>
          Ось кілька відгуків тих, хто проходив цей курс раніше: (а їх більше
          двох сотень)
        </SectionTitle>

        <div className="mt-14 grid gap-6 xl:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote
              key={item.author}
              className="rounded-[28px] border border-black/5 bg-white p-8 text-center shadow-[0_14px_36px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="space-y-5">
                {item.text.map((paragraph, index) => (
                  <p
                    key={`${item.author}-${index}`}
                    className="text-base leading-8 text-black/80 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mx-auto mt-8 h-px w-16 bg-[#16195a]/15" />

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block text-sm uppercase tracking-[0.25em] text-[#16195a]"
              >
                {item.author}
              </a>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="bg-white/70">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
          <SectionTitle>що чекає вас на тренінгу?</SectionTitle>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {trainingFeatures.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-[#16195a]/8 bg-[#f8f6f2] p-8 text-center shadow-[0_14px_36px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1"
              >
                <h3 className="text-2xl font-medium leading-snug text-[#111]">
                  {item.title}
                </h3>
                {item.text ? (
                  <p className="mt-5 text-base leading-8 text-black/75 md:text-lg">
                    {item.text}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    <section className="bg-[#e7e3d7]">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="text-center lg:text-left">
            <p className="text-[34px] font-normal leading-[1.7] text-black md:text-[48px] md:leading-[1.55] lg:max-w-[700px]">
                Це не боляче і не 
                <br />
                страшно :). Навіть
                <br />
                мами з 6 дітьми
                <br />
                успішно проходили 
                <br />
                навчання. Головне
                <br />
                – мати бажання і
                <br />
                мотивацію! А Ви ж її
                <br />
                маєте, правда?
                <br />
            </p>
            </div>

            <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px]">

                <div className="relative overflow-hidden rounded-[30px] border border-[#16195a]/10 bg-transparent p-6">
                <img
                    src="/images/formule-love-care.png"
                    alt="Ілюстрація"
                    className="mx-auto w-full max-w-[420px] object-contain"
                />
                </div>
            </div>
            </div>
        </div>
    </section>
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <SectionTitle>Як все відбувається</SectionTitle>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {howItWorks.map((item, index) => (
            <NumberCard
              key={item}
              number={`0${index + 1}`}
              title={item}
              text={
                index === 3
                  ? "Такий супровід триває протягом 4 місяців з дня старту курсу"
                  : ""
              }
            />
          ))}
        </div>
      </section>

      <section className="bg-[#f1ede5]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
          <SectionTitle>Програма тренінгу</SectionTitle>

          <p className="mx-auto mt-8 max-w-5xl text-center text-lg leading-8 text-black/80 md:text-xl">
            Тренінг триває 4 місяці: 4 тижні теорії та 3 місяці особистих
            самоспостережень у супроводі вчителя
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programBlocks.map((item) => (
              <NumberCard
                key={item.number}
                number={item.number}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <PhotoPlaceholder className="min-h-[420px]" />

        <div className="text-center">
          <SectionTitle>
            Опанування методу - під дбайливим керівництвом Лесі Фігас
          </SectionTitle>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            <p className="text-lg leading-8 text-black/80 md:text-xl">
              вчитель симпто-термального методу
            </p>
            <p className="text-lg leading-8 text-black/80 md:text-xl">
              навчалася в Українському католицькому університеті та в Академії
              св. Альфонса при Папському Латеранському університеті у Римі,
            </p>
            <p className="text-lg leading-8 text-black/80 md:text-xl">
              тричі мама
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white/70">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
          <SectionTitle>В результаті Ви:</SectionTitle>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {results.map((item) => (
              <div
                key={item}
                className="rounded-[26px] border border-[#16195a]/8 bg-white p-7 text-center shadow-[0_12px_34px_rgba(0,0,0,0.05)] transition-transform duration-500 hover:-translate-y-1"
              >
                <p className="text-lg leading-8 text-[#111] md:text-xl">{item}</p>
              </div>
            ))}
          </div>

        <section className="bg-[#e7e3d7]">
            <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="text-center lg:text-left">
                <p className="text-[34px] font-normal leading-[1.7] text-black md:text-[48px] md:leading-[1.55] lg:max-w-[700px]">
                    А якщо коротко - місце страху займе
                    <br />
                    впевненість, спокій та радість!
                    <br />
                </p>
                </div>

                <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[520px]">

                    <div className="relative overflow-hidden rounded-[30px] border border-[#16195a]/10 bg-transparent p-6">
                    <img
                        src="/images/formule-love-care.png"
                        alt="Ілюстрація"
                        className="mx-auto w-full max-w-[420px] object-contain"
                    />
                    </div>
                </div>
                </div>
            </div>
        </section>
          <div className="mx-auto mt-16 max-w-5xl rounded-[32px] border border-[#16195a]/8 bg-[#16195a] px-8 py-10 text-center text-white shadow-[0_20px_60px_rgba(22,25,90,0.2)]">
            <p className="text-2xl font-medium leading-9">
              Протягом тренінгу з Вами буде поряд священик та психолог!
            </p>
            <p className="mt-5 text-lg leading-8 text-white/85">
              У кожного учасника є можливість отримати особисту консультацію
              психолога Яніни Лютою-Животовської та духовну розмову зі
              священиком о.Орестом Демком.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <SectionTitle>Для максимальної зручності надсилаємо Навчальний посібник</SectionTitle>

        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-[760px] rounded-[28px] border border-black/5 bg-white p-8 text-center shadow-[0_14px_36px_rgba(0,0,0,0.06)]">
            <p className="text-2xl font-medium leading-snug text-[#111]">
              Навчальний посібник
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f1ede5]">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="text-center lg:text-left">
            <SectionTitle>
              краще зрозуміти одне одного допоможе наш бонус!
            </SectionTitle>

            <h3 className="mx-auto mt-10 max-w-4xl text-2xl font-medium leading-snug text-[#111] lg:mx-0">
              Аудіо-запис міні-тренінгу "Для тих, хто хоче побудувати міцні
              романтичні стосунки" з психологом Лідією Кондратик!
            </h3>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-black/80 md:text-xl lg:mx-0">
              Вже з перших хвилин після реєстрації Ви отримаєте чудову можливість
              дізнатися більше про відмінності між чоловіками та жінками, краще
              зрозуміти потреби своєї "половинки"
            </p>
          </div>

          <PhotoPlaceholder className="min-h-[360px]" />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[980px] rounded-[36px] border border-[#16195a]/10 bg-white p-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.08)] md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#16195a]/60">
            Участь
          </p>

          <p className="mt-6 text-4xl font-normal text-[#111] md:text-6xl">
            22000₴
          </p>

          <p className="mt-4 text-2xl font-medium leading-8 text-[#16195a] md:text-3xl">
            Вартість участі 505 $
          </p>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 text-center">
            {pricingIncludes.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-black/5 bg-[#f8f6f2] px-5 py-4 text-base leading-7 text-black/80 transition-transform duration-300 hover:-translate-y-0.5"
              >
                {item}
              </div>
            ))}
          </div>

          <a
            href="https://forms.gle"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex rounded-full bg-[#16195a] px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#202575]"
          >
            ЗАРЕЄСТРУВАТИСЬ
          </a>

          <p className="mt-8 text-lg leading-8 text-black/80">
            Можна оформити банківську розстрочку
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-black/70 md:text-lg">
            Ви сплачуєте банку перший платіж, а далі кожного місяця залежно від
            того, на скільки місяців Ви розділили оплату. Комісія банку для Вас
            становить 1,9% від загальної суми за кожен місяць.
          </p>
        </div>
      </section>

      <section className="bg-[#16195a] text-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 text-center md:px-10 md:py-24">
          <SectionTitle>!!! При сплаті 25% ви одразу долучаєтесь до Переднавчання !!!</SectionTitle>

          <div className="mx-auto mt-12 max-w-4xl rounded-[28px] border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-sm">
            <p className="text-2xl font-medium leading-9">
              Ви отримуєте усю необхідну інформацію щоб розпочати спостереження.
            </p>
            <p className="mt-5 text-lg leading-8 text-white/85">
              І в такий спосіб маєте більше відстежених карт і почнете швидше з
              них користати!
            </p>
            <p className="mt-6 text-lg leading-8 text-white/85">
              Можна замовити комусь участь у тренінгу "Фориула любові" як
              подарунок на весілля
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <SectionTitle>Особливі пропозиції</SectionTitle>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {specialOffers.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-black/5 bg-white p-8 text-center shadow-[0_14px_36px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-medium leading-snug text-[#111]">
                {item.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-black/75 md:text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/70">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <PhotoPlaceholder className="min-h-[380px] order-2 lg:order-1" />

          <div className="order-1 text-center lg:order-2">
            <SectionTitle>автор і керівник тренінгу - ірина табака</SectionTitle>

            <div className="mx-auto mt-10 max-w-3xl space-y-4">
              {authorBullets.map((item) => (
                <p
                  key={item}
                  className="text-lg leading-8 text-black/80 md:text-xl"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <SectionTitle>Часті запитання</SectionTitle>

        <div className="mx-auto mt-14 grid max-w-[1100px] gap-6">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-[28px] border border-black/5 bg-white p-8 text-center shadow-[0_14px_36px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-medium leading-snug text-[#111]">
                {item.question}
              </h3>
              <p className="mt-5 text-base leading-8 text-black/75 md:text-lg">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#16195a] text-white">
        <div className="mx-auto max-w-[1100px] px-6 py-20 text-center md:px-10 md:py-24">
          <h2 className="text-3xl font-normal uppercase tracking-[0.08em] md:text-5xl">
            є питання?
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/90 md:text-xl">
            Залишились питання? Пишіть!
          </p>

          <p className="mt-3 text-lg leading-8 text-white/75 md:text-xl">
            При потребі можемо зустрітися на 20-хвилинній безкоштовній
            консультації
          </p>

          <div className="mx-auto mt-10 h-px w-20 bg-white/15" />

          <div className="mt-10 flex flex-col items-center gap-4 text-lg md:text-xl">
            <a
              href="tel:+3800974083750"
              className="transition-opacity hover:opacity-80"
            >
              +380-0974083750
            </a>
            <a
              href="mailto:iryna.tabaka@gmail.com"
              className="transition-opacity hover:opacity-80"
            >
              iryna.tabaka@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}