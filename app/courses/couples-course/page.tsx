import type { ReactNode } from "react";

const forYouItems = [
  {
    title: "Ви кохаєте одне одного, але постійно виникають непорозуміння",
    text: "Завдяки порадам психолога ви навчитесь вирішувати конфліктні ситуації та попереджати їх.",
  },
  {
    title: "Для вас важливо будувати стосунки у згоді з духовними принципами",
    text: "о. Роман надасть вам практичні поради як будувати стосунки у згоді з Богом, пояснить важливість дотримання дошлюбної чистоти стосунків",
  },
  {
    title: "Ви хочете зрозуміти чи створені одне для одного",
    text: "Наш курс дасть вам розуміння спільних цінностей, спільних інтересів, розглянемо, що таке справжня любов, чи вимагає вона жертовності та відмови від свої принципів, що допоможе вам зрозуміти чи це справді ваша половинка.",
  },
  {
    title: "Ви перебуваєте у стосунках і мрієте про щасливе спільне майбутнє",
    text: "Навчаючись разом, ви цікаво проведете час, отримаєте дієві поради фахівців",
  },
];

const whatYouGet = [
  "дієві інструменти для пізнання себе й одне одного",
  "розуміння своїх бажань, потреб та потреб своєї половинки",
  "розуміння, як долати непорозуміння та вирішувати конфліктні ситуації у стосунках",
  "чітке розуміння як будувати стосунки у згоді з духовними принципами",
  "зможете зміцнити свої стосунки одне з одним і з Богом",
];

const trainingFlow = [
  {
    title: "1 місяць",
    text: "8 тем та 8 практичних завдань",
    desc: "Відеоуроки є в запису, можливість ознайомитись з матеріалами у зручний для Вас час. Після кожної лекції - практичні завдання",
  },
  {
    title: "Група в Telegram",
    text: "",
    desc: "Долучившись до телеграм - групи, зможете вести бесіди, ділитись досвідом та обговорювати теми з іншими учасниками курсу",
  },
];

const team = [
  {
    name: "Ірина Табака",
    desc: "тренер зі статевої та сексуальної грамотності, сімейний консультант, вчитель симпто-термального методу розпізнавання плідності, дружина священика, мама 3 діток, катехит",
  },
  {
    name: "Лідія Кондратик",
    desc: 'християнський психолог, психотерапевт, кандидат соціологічних наук, викладач, сімейний консультант, автор книги "Він та вона.Щастя бути справжніми" і "Він, вона та їхні діти", щаслива дружина, мама 7 дітей',
  },
  {
    name: "О.Роман Стойко",
    desc: "священик, який працює з молоддю, капелан жіночої консультації м. Стрия,. щасливий чоловік, татусь",
  },
];

const topics = [
  "Чоловіки – жінки: чому ми такі різні?",
  "Конфлікти, як їх вирішувати",
  "Як зрозуміти, що це твоя половинка",
  "Духовні принципи, чи поступатися",
  "Питання дошлюбної чистоти, практичні поради",
  "Міфи про статевість",
  "Інтимна подружня близькість: що зробити зараз, щоб не жаліти потім?",
];

const faqItems = [
  {
    q: "Навіщо щось вивчати, якщо ми закохані і у нас все добре",
    a: "Багато закоханих пар розходяться через непорозуміння, яке виникає через небажання розуміти потреби та бажання одне одного.",
  },
  {
    q: "Навіщо ваш курс, якщо інформацію можна знайти в інтернеті (соцмережі, блоги, ютуб)",
    a: "У нашому курсі ви отримаєте дієві поради психолога і священника, зможете задати питання, які вас цікавлять отримати обгрунтовану відповідь,  обговорити їх.",
  },
  {
    q: "Чи не рано починати курс, якщо ми ще не вирішили одружуватись",
    a: "Цей курс допоможе вам краще зрозуміти природу та перспективи ваших стосунків. Допоможе Вам прийняти правильне рішення.",
  },
  {
    q: "А якщо ми розійдемося після цього тренінгу?",
    a: 'Якщо після всього прослуханого та проаналізовано матеріалу Ви зрозумієте, що поряд з Вами "не та людина", це вбереже Вас від подальших неправильних кроків та  розчарувань',
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

function TagAll() {
  return (
    <div className="mb-10 flex justify-center">
      <span className="rounded-full border border-[#16195a]/10 bg-white/80 px-4 py-2 text-sm tracking-[0.22em] text-[#16195a]/70 shadow-sm backdrop-blur">
        All
      </span>
    </div>
  );
}

function MediaPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-[32px] border border-[#16195a]/10 bg-[linear-gradient(135deg,rgba(22,25,90,0.05),rgba(255,255,255,0.92),rgba(201,168,106,0.12))] shadow-[0_20px_70px_rgba(12,18,48,0.08)] ${className}`}
    >
      <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(22,25,90,0.08),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(22,25,90,0.03))]" />
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
<MediaPlaceholder className="aspect-[3/2] min-h-[220px] w-full transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(12,18,48,0.14)] md:min-h-[280px]" />      </div>
      <div className={reverse ? "lg:order-1" : ""}>{children}</div>
    </div>
  );
}

export default function CouplesCoursePage() {
  return (
    <main className="bg-[#fbf9f7] text-[#161616]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(22,25,90,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(203,162,91,0.12),transparent_28%)]" />
        <div className="relative mx-auto max-w-[1440px] px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-36">
          <div className="mx-auto max-w-[1120px] text-center">
            <div className="mb-6 flex justify-center">
              <span className="rounded-full border border-[#16195a]/10 bg-white/80 px-5 py-2 text-sm tracking-[0.18em] text-[#16195a]/70 shadow-sm backdrop-blur">
                All
              </span>
            </div>

            <h1 className="text-4xl font-light uppercase leading-[1.1] text-[#16195a] md:text-6xl">
              "ПЕРШ, НІЖ ВИ СКАЖЕТЕ "ТАК" - ТРЕНІНГ ДЛЯ ПАР, ЩО ЗУСТРІЧАЮТЬСЯ
            </h1>

            <p className="mx-auto mt-8 max-w-[1020px] text-lg leading-8 text-[#202020]/85 md:text-2xl md:leading-10">
              ЯК БУДУВАТИ СТОСУНКИ, ВИКОРИСТОВУЮЧИ НАУКОВИЙ ПІДХІД ТА ВЧЕННЯ ЦЕРКВИ
              (психологія + духовність + статевість)
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
        <SectionTitle><strong>ЦЕЙ КУРС ДЛЯ ВАС, ЯКЩО:</strong></SectionTitle>
        <TagAll />

        <div className="grid gap-8">
          {forYouItems.map((item, index) => (
            <div key={item.title}>
              <SideMediaSection reverse={index % 2 === 1}>
                <div className="rounded-[30px] border border-[#16195a]/8 bg-white/90 p-8 text-center shadow-[0_16px_45px_rgba(12,18,48,0.06)] backdrop-blur md:p-10">
                  <h3 className="text-2xl font-light leading-tight text-[#16195a] md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-5 max-w-[620px] text-base leading-8 text-[#1f1f1f]/85 md:text-lg">
                    {item.text}
                  </p>
                </div>
              </SideMediaSection>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/70">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
          <SectionTitle>навіщо це все?</SectionTitle>

          <div className="mx-auto mt-14 max-w-[1100px] rounded-[34px] border border-[#16195a]/8 bg-white px-8 py-10 text-center shadow-[0_18px_55px_rgba(12,18,48,0.07)] md:px-12">
            <p className="text-lg leading-9 text-[#1f1f1f]/90 md:text-xl">
              Статистика твердить, що кожного року в Україні близько 70% одружених пар розлучаються. І половина з них – протягом першого року подружнього життя. Найчастіше через невміння говорити про свої емоції, потреби, чути одне одного, йти на компроміс та спільно вирішувати проблеми.
            </p>
            <p className="mt-6 text-lg leading-9 text-[#1f1f1f]/90 md:text-xl">
              І якщо Ви хочете опинитися в числі тих 30%, які пронесуть свою любов через усе життя, взаємо підтримуючи та помагаючи одне одному, цінуючи особистість одне одного і вміючи бачити потреби,запрошуємо Вас отримати необхідні знання та опанувати важливі навики.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
        <SectionTitle>що ви отримаєте на&nbsp; курсі</SectionTitle>
        <TagAll />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {whatYouGet.map((item) => (
            <article
              key={item}
              className="rounded-[30px] border border-[#16195a]/8 bg-white p-7 text-center shadow-[0_16px_45px_rgba(12,18,48,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(12,18,48,0.11)]"
            >
              <h3 className="text-2xl font-light leading-tight text-[#16195a]">
                {item}
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
              як ПРОХОДИТЬ ТРЕНІНГ ?
            </h2>
          </div>

          <TagAll />

          <div className="grid gap-6 md:grid-cols-2">
            {trainingFlow.map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] border border-white/10 bg-white/8 p-6 text-center shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur transition duration-500 hover:-translate-y-1"
              >
                <MediaPlaceholder className="aspect-[16/10] min-h-[220px] w-full border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.18),rgba(255,255,255,0.05))]" />
                <h3 className="mt-6 text-3xl font-light leading-tight">
                  {item.title}
                </h3>
                {item.text ? (
                  <p className="mt-3 text-xl leading-8 text-white/90">
                    {item.text}
                  </p>
                ) : null}
                <p className="mx-auto mt-5 max-w-[580px] text-base leading-8 text-white/80 md:text-lg">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
        <SectionTitle>наша Команда</SectionTitle>
        <TagAll />

        <div className="grid gap-8">
          {team.map((member, index) => (
            <div key={member.name}>
              <SideMediaSection reverse={index % 2 === 1}>
                <div className="rounded-[30px] border border-[#16195a]/8 bg-white/90 p-8 text-center shadow-[0_16px_45px_rgba(12,18,48,0.06)] backdrop-blur md:p-10">
                  <h3 className="text-3xl font-light leading-tight text-[#16195a] md:text-4xl">
                    {member.name}
                  </h3>
                  <p className="mx-auto mt-5 max-w-[640px] text-base leading-8 text-[#1f1f1f]/85 md:text-lg">
                    {member.desc}
                  </p>
                </div>
              </SideMediaSection>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/70">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
          <SectionTitle>ТЕМИ:</SectionTitle>

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

          <div className="mx-auto mt-12 max-w-[1080px] rounded-[34px] border border-[#16195a]/8 bg-[#16195a] px-8 py-10 text-center text-white shadow-[0_20px_70px_rgba(12,18,48,0.14)] md:px-12">
            <p className="text-2xl font-light leading-tight md:text-4xl">
              У побудові стосунків варто скористатися порадами досвічених фахівців!
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-24">
        <div className="rounded-[36px] border border-[#16195a]/8 bg-white p-8 text-center shadow-[0_18px_55px_rgba(12,18,48,0.08)] md:p-12">
          <h2 className="text-3xl font-light leading-tight text-[#16195a] md:text-5xl">
            Вартість участі в тренінгу лише 1 400 грн.з пари. Фактично за ціною 1 консультації психолога
          </h2>

          <a
            href="https://secure.wayforpay.com/button/bc4ffb8c1f447"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#16195a] px-8 py-4 text-sm tracking-[0.2em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#222770]"
          >
            Оплатити
          </a>
        </div>
      </section>

      <section className="bg-white/70">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
          <SectionTitle><strong>ПИТАННЯ</strong></SectionTitle>
          <TagAll />

          <div className="mx-auto grid max-w-[1080px] gap-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-[26px] border border-[#16195a]/8 bg-white p-6 shadow-[0_12px_35px_rgba(12,18,48,0.05)] transition duration-300 open:shadow-[0_18px_50px_rgba(12,18,48,0.1)]"
              >
                <summary className="cursor-pointer list-none text-center text-xl font-light leading-8 text-[#16195a] marker:content-none">
                  {item.q}
                </summary>
                <p className="mx-auto mt-5 max-w-[900px] text-center text-base leading-8 text-[#1f1f1f]/85 md:text-lg">
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-[980px] rounded-[30px] border border-[#16195a]/8 bg-white px-8 py-10 text-center shadow-[0_16px_45px_rgba(12,18,48,0.06)]">
            <h3 className="text-2xl font-light leading-tight text-[#16195a] md:text-4xl">
              ЗАЛИШИЛИСЬ ПИТАННЯ? ЗАДАВАЙТЕ!
            </h3>
            <p className="mt-6 text-lg leading-8 text-[#1f1f1f]/85">
              тел.: 097-408-37-50
            </p>
            <a
              href="https://t.me/iryna_tabaka"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-lg leading-8 text-[#16195a] underline underline-offset-4"
            >
              https://t.me/iryna_tabaka
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}