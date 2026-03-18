import type { ReactNode } from "react";
import ExpressButton from "@/components/Express-button";
import Image from "next/image";

const audienceItems = [
  {
    number: "1",
    title: `Чули про метод, але не розумієте, як це працює`,
    text: `Ми розкладемо все по поличках, щоб ви отримали цілісну картину без плутанини та здогадок`,
  },
  {
    number: "2",
    title: `Шукаєте екологічних способів контролювати народження діток`,
    text: `Дізнайтеся про чудові можливості, які дають методи розпізнавання плідності`,
  },
  {
    number: "3",
    title: `Сумніваєтесь в ефективності методу`,
    text: `Знайдете тут наукові дані та надійну статистичну інформацію`,
  },
  {
    number: "4",
    title: `Вагаєтесь, чи підійде Вам метод`,
    text: `Зорієнтується, які дії треба виконувати та чи реалістично це у Вашій конкретній ситуації`,
  },
  {
    number: "5",
    title: `Хочете знайти "свого" вчителя`,
    text: `Прослухані відео допоможуть зрозуміти, чи підходить Вам стиль подачі інформації та підхід Ірини Табаки`,
  },
  {
    number: "6",
    title: `Не маєте підтримки чоловіка`,
    text: `Побачите, скільки користі Ви можете взяти для себе та свого здоров'я`,
  },
];

const authorPoints = [
  `вчитель симпто-термального методу розпізнавання плідності`,
  `тренер зі статевої та сексуальної грамотності з християнськими цінностями`,
  `член Української Асоціації Християнської Психології`,
  `катехит`,
  `щаслива дружина і мама 3 підлітків`,
];

const topics = [
  `Страх перед непланованою вагітністю. Світло в кінці тунелю`,
  `Як визначити овуляцію та плідний період?`,
  `Чи є метод розпізнавання плідності "чарівною таблеткою"?`,
  `А може, вистачить тестів на овуляцію чи мобільних додатків?`,
  `А що ж чоловік?`,
  `Хто ж повірить без відгуків?`,
  `Що буде на тренінгу і як це все відбувається?`,
];

const bonuses = [
  `1. Деякі причини послаблення чи відсутності статевого бажання:`,
  `2. Засоби контрацепції: за і проти`,
];

const learningSteps = [
  `Після оплати Ви отримаєте запрошення перейти в Телеграм-канал, де на Вас уже чекає весь матеріал`,
  `Ви переглядаєте відео у зручний для Вас час самостійно, а ще краще - парою`,
  `Задаєте усі питання, що виникають`,
  `Після цього є можливість зустрітися з автором на 20-хвилинній безкоштовній консультації`,
];

const reviews = [
  {
    name: `Ірина Б.`,
    text: `Пані Ірино, дякую за чудовий ознайомчий курс. Я нарешті все дослухала і розумію, що справді хочу продовження. Ви чудова, світла і дуже щира жінка, лекторка, вчитель Маю певні страхи, побоювання чи зможу все правильно опанувати і трохи бракує розуміння і підтримки чоловіка, але я знаю, що Господь може все перемінити, бачачи щирі прагнення і намірення. Розкажіть, будь ласка, як відбувається наступний етап? Яка вартість навчання та як відбувається наша комунікація?`,
  },
  {
    name: `Якубів Наталія`,
    text: `Хто шукає, той знаходить. От і ми знайшли для себе тренінг Ірини Табаки "Формула любові", який навчає методу розпізнавання плідності і вбачаємо для себе унікальну можливість навчатися цьому і освоїти його, щоб краще розуміти себе саму і своє тіло, процеси, які у ньому відбуваються, а також свого чоловіка, і наші стосунки, розкрити сповна потенціал наших відносин і жити вільно, насолоджуючись подружнім життям. Щиро дякуємо п. Ірині ТАБАЦІ та її команді за віддану працю у цій сфері. Це нелегка, але така потрібна і благородна справа. Дякуємо, що відкриваєте нам таємниці справжнього подружнього щастя. Дякуємо, за ваш дорогоцінний час, натхнення, розуміння, зусилля , які ви вкладаєте, щоб вести подружжя до повноти Божого задуму та радості життя`,
  },
  {
    name: `Tetiana Bura`,
    text: `Щаслива, що познайомилась з пані Іриною та її курсом, адже знання, які отримала це щось безцінне, щось, що допомагає відчути життя у повні, допомагає дивитись на свою плідність як на друга, а не ворога та жити без страху))`,
  },
];

const faqItems = [
  {
    question: `Я не маю багато часу. Чи варто проходити цей курс, якщо я дуже зайнята?`,
    answer: `Курс складається з 7 коротких змістовний відеоуроків, які можна переглядати в будь-який зручний для вас час. Ви зможете навчатися у своєму темпі, і це дозволить вам адаптувати навчання під ваш розклад, навіть якщо у вас обмежений час.`,
  },
  {
    question: `Чи підходить цей метод для людей з нерегулярним циклом?`,
    answer: `Не лише підходить, а й допомагає краще розібратися з причинами цієї нерегулярності`,
  },
  {
    question: `Чи гарантує цей курс успішне застосування методу?`,
    answer: `Ні, курс не дає можливості опанувати метод. Він дає всі підстави прийняти обгрунтоване рішення, чи хочете Ви йти далі і проходити грунтовне навчання методу розпізнавання плідності`,
  },
  {
    question: `Я чула, що природне планування сім'ї — це складно. Чи не буде цей курс надто важким для мене?`,
    answer: `На цьому курсі ми говоримо про складні речі дуже простими словами. Ви отримаєте чітке, структуроване та доступне пояснення основних аспектів методу, переваг та труднощів.`,
  },
  {
    question: `Я сумніваюся, чи варто платити за курс. Що я отримаю за ці гроші?`,
    answer: `За 300 грн ви отримаєте доступ до 7 відеоуроків та двох бонусів. Це не тільки навчання, а й конкретні поради, які допоможуть вам зберегти енергію і зменшити стрес, пов'язаний з плануванням сім'ї. Крім того, ви отримаєте відповіді на свої запитання під час зустрічі з експертом, що зробить ваш шлях до прийняття рішення ще більш впевненим.`,
  },
];

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[980px] text-center">
      <div className="mb-5 flex items-center justify-center gap-4">
        <span className="h-px w-14 bg-[#16195a]/20" />
        <span className="h-2 w-2 rounded-full bg-[#16195a]" />
        <span className="h-px w-14 bg-[#16195a]/20" />
      </div>
      <h2 className="text-3xl font-light leading-tight text-[#16195a] md:text-5xl">
        {children}
      </h2>
    </div>
  );
}

function SectionTag() {
  return (
    <div className="mb-10 flex justify-center">
      <span className="rounded-full border border-[#16195a]/10 bg-white/70 px-4 py-2 text-sm tracking-[0.2em] text-[#16195a]/70 shadow-sm backdrop-blur">
      </span>
    </div>
  );
}

function MediaPlaceholder({
  className = "",
}: {
  className?: string;
}) {
  return (
              <div className="relative min-h-[500px] overflow-hidden rounded-[30px]">
                <Image
                  src="/images/yaa.jpg"
                  alt="Ірина Табака"
                  fill
                  className="object-cover"
                />
      <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(22,25,90,0.08),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(22,25,90,0.03))]" />
    </div>
  );
}
function MediaPlaceholder1({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-[30px]">
                <Image
                  src="/images/bfbd.png"
                  alt="Ірина Табака"
                  fill
                  className="object-cover"
                />
                <Image
                  src="/images/pils.png"
                  alt="Ірина Табака"
                  fill
                  className="object-cover"
                />
    </div>
    
  );
}
function SideMediaSection({
  reverse = false,
  children,
}: {
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div className={reverse ? "lg:order-2" : ""}>
        <MediaPlaceholder className="aspect-[4/5] min-h-[340px] w-full transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(12,18,48,0.14)] md:min-h-[460px]" />
      </div>
      <div className={reverse ? "lg:order-1" : ""}>{children}</div>
    </div>
  );
}

export default function FormulaLoveDemoPage() {
  return (
    <main className="bg-[#fbf9f7] text-[#161616]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(22,25,90,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(203,162,91,0.12),transparent_28%)]" />
        <div className="relative mx-auto max-w-[1440px] px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-36">
          <div className="mx-auto max-w-[1050px] text-center">
            <div className="inline-flex rounded-full border border-[#16195a]/10 bg-white/80 px-5 py-2 text-sm tracking-[0.18em] text-[#16195a]/70 shadow-sm backdrop-blur">
              Уже сьогодні
            </div>

            <h1 className="mt-8 text-4xl font-light leading-[1.1] text-[#16195a] md:text-6xl">
              Експрес-курс
              <br />
              з природного планування сім&apos;ї
            </h1>

            <p className="mx-auto mt-8 max-w-[980px] text-lg leading-8 text-[#202020]/85 md:text-2xl md:leading-10">
              7 уроків та 1 зустріч, які допоможуть Вам зрозуміти, як позбутися
              страху непланованої вагітності за допомогою методу розпізнавання
              плідності і розібратися, чи підходить це Вам.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
        <SectionTitle>Цей курс для Вас, якщо:</SectionTitle>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {audienceItems.map((item) => (
            <article
              key={item.number}
              className="rounded-[30px] border border-[#16195a]/8 bg-white/90 p-7 text-center shadow-[0_16px_45px_rgba(12,18,48,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(12,18,48,0.11)]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#16195a]/10 bg-[#f6f4ef] text-lg font-medium text-[#16195a]">
                {item.number}
              </div>
              <h3 className="mt-6 text-2xl font-light leading-tight text-[#16195a]">
                {item.title}
              </h3>
              <p className="mx-auto mt-4 max-w-[360px] text-base leading-7 text-[#1f1f1f]/80 md:text-lg">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white/70">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
          <SectionTitle>Автор курсу - Ірина Табака</SectionTitle>

          <div className="mt-16">
            <SideMediaSection>
              <div className="rounded-[30px] border border-[#16195a]/8 bg-white/85 p-8 shadow-[0_16px_45px_rgba(12,18,48,0.06)] backdrop-blur md:p-10">

                <ul className="space-y-4 text-left text-lg leading-8 text-[#161616]">
                  {authorPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-4 transition duration-500 hover:translate-x-1"
                    >
                      <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-[#16195a]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SideMediaSection>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
        <SectionTitle>Теми курсу:</SectionTitle>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {topics.map((topic, index) => (
            <article
              key={topic}
              className="rounded-[30px] border border-[#16195a]/8 bg-white p-7 text-center shadow-[0_16px_45px_rgba(12,18,48,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(12,18,48,0.11)]"
            >
              <div className="text-sm tracking-[0.22em] text-[#16195a]/55">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-2xl font-light leading-tight text-[#16195a]">
                {topic}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#16195a] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-[980px] text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <span className="h-px w-14 bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white" />
              <span className="h-px w-14 bg-white/20" />
            </div>
            <h2 className="text-3xl font-light leading-tight md:text-5xl">
              Бонуси:
            </h2>
          </div>

          <SectionTag />

          <div className="grid gap-6 md:grid-cols-2">
            {bonuses.map((bonus) => (
              <article
                key={bonus}
                className="rounded-[30px] border border-white/10 bg-white/8 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur transition duration-500 hover:-translate-y-1"
              >
                <MediaPlaceholder1/>
                <h3 className="mt-6 text-center text-2xl font-light leading-tight">
                  {bonus}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
        <SectionTitle>Як відбувається навчання?</SectionTitle>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {learningSteps.map((step, index) => (
            <article
              key={step}
              className="rounded-[28px] border border-[#16195a]/8 bg-white p-6 text-center shadow-[0_16px_45px_rgba(12,18,48,0.06)] transition duration-500 hover:-translate-y-1"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#16195a]/10 bg-[#f6f4ef] text-lg font-medium text-[#16195a]">
                {index + 1}
              </div>
              <h3 className="mt-5 text-xl font-light leading-8 text-[#16195a]">
                {step}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white/70">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
          <SectionTitle>Відгуки</SectionTitle>
          <SectionTag />

          <div className="grid gap-6 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-[30px] border border-[#16195a]/8 bg-white p-7 text-center shadow-[0_16px_45px_rgba(12,18,48,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(12,18,48,0.11)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#16195a]/10 bg-[#f6f4ef] text-lg font-medium text-[#16195a]">
                  {review.name.charAt(0)}
                </div>
                <h3 className="mt-5 text-2xl font-light text-[#16195a]">
                  {review.name}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#1f1f1f]/85">
                  {review.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-[1080px] rounded-[34px] border border-[#16195a]/8 bg-[#16195a] px-8 py-10 text-center text-white shadow-[0_20px_70px_rgba(12,18,48,0.14)] md:px-12">
            <p className="text-xl font-light leading-tight md:text-4xl">
              Цей курс дасть Вам чітку картинку і складе все в один пазл, який
              допоможе зрозуміти – потрібно це Вам чи ні. Бо всі ті
              думки/сумніви/вагання, що живуть в голові, просто забирають і без
              того обмежену енергію.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-24">
        <div className="rounded-[36px] border border-[#16195a]/8 bg-white p-8 text-center shadow-[0_18px_55px_rgba(12,18,48,0.08)] md:p-12">
          <h2 className="text-3xl font-light leading-tight text-[#16195a] md:text-5xl">
            Допоможіть собі! І вирішіть для себе це питання!
          </h2>

          <div className="mt-10 text-5xl font-light text-[#16195a] md:text-6xl">
            300₴  <s>850</s>   
          </div>

          <p className="mt-4 text-xl font-light text-[#16195a] md:text-2xl">
            Вартість участі
          </p>

            <div className="mt-10 flex justify-center">
              <ExpressButton />
            </div>

          <div className="mx-auto mt-10 max-w-[900px] rounded-[28px] border border-[#16195a]/8 bg-[#f7f5f1] p-6 md:p-8">
            <p className="text-2xl tracking-[0.22em] text-[#16195a]/60">
              <strong>ГАРАНТІЇ</strong>
            </p>
            <p className="mt-4 text-base leading-8 text-[#1f1f1f]/85 md:text-lg">
              Якщо Ви переглянете всі уроки та візьмете участь в зустрічі, і при
              цьому не зрозумієте, в чому суть методу і чи підійде він Вам - ми
              повернемо Вашу оплату.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white/70">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
          <SectionTitle>Найпоширеніші запитання</SectionTitle>
          <SectionTag />

          <div className="mx-auto grid max-w-[1080px] gap-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[26px] border border-[#16195a]/8 bg-white p-6 shadow-[0_12px_35px_rgba(12,18,48,0.05)] transition duration-300 open:shadow-[0_18px_50px_rgba(12,18,48,0.1)]"
              >
                <summary className="cursor-pointer list-none text-center text-xl font-light leading-8 text-[#16195a] marker:content-none">
                  {item.question}
                </summary>
                <p className="mx-auto mt-5 max-w-[900px] text-center text-base leading-8 text-[#1f1f1f]/85 md:text-lg">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1100px] px-6 py-20 text-center md:px-10 md:py-24">
        <SectionTitle>Є питання? </SectionTitle>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="tel:+3800974083750"
            className="text-lg leading-8 text-[#16195a] transition-opacity duration-300 hover:opacity-70 md:text-xl"
          >
            +380-097-408-37-50
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