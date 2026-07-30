import type { ReactNode } from "react";
import Image from "next/image";

const audienceItems = [
  `Уже в періоді пременопаузи, погано себе почуваєте і не знаєте, до якого лікаря звернутися`,
  `Не розумієте, таке самопочуття – це норма чи все ж так не має бути?`,
  `Дивитесь на свою маму, яка страждає від приливів, безсоння, втрати пам’яті і не хочете колись так мучитись`,
  `Є користувачем методу розпізнавання плідності і не знаєте, як інтерпретувати карти в період пременопаузи`,
];

const topics = [
  `Класифікація, симптоми, ризики менопаузи`,
  `Захворювання жіночих статевих органів, що діагностуються по УЗД`,
  `Практичні поради: харчування, корекція дефіцитів`,
  `Інтимна гімнастика`,
  `Особливості психологічного здоров’я в цей період`,
  `Дратівливість, тривожність та депресія у період пременопаузи та власне менопаузи`,
  `«Туман у голові» або симптом який часом настає раніше ніж власне менопауза.`,
  `Рання менопауза - відчуття, що «в тебе щось вкрали»`,
  `Як дбати про себе та своє психологічне здоровʼя, щоб менопауза не стала кошмаром?`,
  `Як інтерпретувати карти спостережень в період пременопаузи`,
  `Гормонозамісна терапія: покази та протипокази`,
];

const teamMembers = [
  {
    name: `Галина Дацко`,
    role: `гінеколог-ендокринолог`,
    image: `/images/menopause-galyna-datsko.jpg`,
  },
  {
    name: `Лідія Кондратик`,
    role: `психолог`,
    image: `/images/menopause-lidiia-kondratyk.jpg`,
  },
  {
    name: `Юлія Завійська`,
    role: `дієтолог-нутріціолог`,
    image: `/images/menopause-yuliia-zaviiska.jpg`,
  },
  {
    name: `Леся Фігас`,
    role: `вчитель методу розпізнавання плідності`,
    image: `/images/menopause-lesia-fihas.jpg`,
  },
  {
    name: `Ірина Табака`,
    role: `керівник онлайн-школи «Формула любові»`,
    image: `/images/menopause-iryna-tabaka.jpg`,
  },
];

const reviews = [
  {
    name: `Валентина Івахненко`,
    text: `Велика вдячність за ці чудові чотири вечори в компанії чудових фахівців! Особисто мені нелегко проживати і приймати цей період свого життя, але тепер я розумію , як організувати і перебудувати своє життя, звички , щоб жити повноціннім життям і продовжувати якомога довше залишатись здоровою і щасливою жінкою!`,
  },
  {
    name: `Ірина Бондаренко-Лапчевська`,
    text: `Щиро дякую за комплексний підхід і розкриття такої важливої теми в житті жінки. Цей курс показав наскільки ми унікальні створіння Божі і як можна собі допомогти пережити цей етап життя. Щиро дякую всім фахівцям і організатору Ірині Табака`,
  },
  {
    name: `Галина Печара`,
    text: `Безмежно вдячна за можливість бути на інтенсиві! Він потужний,як і всі: організатор та лектори!!! Надзвичайно цікава, корисна інформація на дуже важливу для жінки, і не тільки для жінки, тему менопаузи! Надзвичайно цінно, що задіяні різні аспекти, які торкаються менопаузи( здоров',я, правильне харчування та спосіб життя, психологічні , гінекологічні), і дуже важливо для мене, що все це в гармонії з наукою Церкви і життям християнина.
Хай Бог благословляє усю потужну команду,яка дууууууже сильно і віддано готувалася і викладалися на цьому інтенсиві!!!`,
  },
  {
    name: `Hanna Depko`,
    text: `Щиро вдячна за цей інтенсив! Записалась на нього з цікавості і тому, що дуже полюбила всі ваші попередні курси (це вже 4-ий!). Скажу, що інформація актуальна навіть тим, кому ще здається далеко до періоду менопаузи, і може не думати про це зараз. Вся інформація іде на випередження і підготування свого ресурсу (стану здоров'я, стилю життя та звичок). Підготовка фахівців, як завжди на вищому рівні.
А особливо вражає професійність, підготовка матеріалу та його подача від нутриціолога-дієтолога (п.Юлії Завійської). Дуже люблю вашу команду і бажаю подальших успіхів!!!`,
  },
  {
    name: `Oksana`,
    text: `Дякую щиро, пані Ірино і усім фахівцям за таку мегацінну інформацію! Все дуже гарно структуровано, подано легко і лаконічно! Планую ще раз переслухати, занотувати і тримати курс на здоровʼя своє та своєї сімʼї.`,
  },
  {
    name: `Мар'яна Лесько`,
    text: `Щиро дякую за такий чудовий інтенсив "Про мено паузу з любов'ю". Чудові лектори, які охопили всі аспекти такого нелегкого періоду у житті жінки. Стільки корисного і цінного я винесла з цих лекцій. Почула багато про сон, харчування, ендокринологію та гінекологію. Підготувалась психологічно і практично. Вдячна п.Ірині за курс та за те, що зібрала такий прекрасний колектив лекторів! Дякую`,
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
      <span className="rounded-full border border-[#16195a]/10 bg-white/80 px-4 py-2 text-sm tracking-[0.22em] text-[#16195a]/70 shadow-sm backdrop-blur">
        All
      </span>
    </div>
  );
}

function MediaPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-[30px] border border-[#16195a]/10 bg-[linear-gradient(135deg,rgba(22,25,90,0.05),rgba(255,255,255,0.92),rgba(214,180,120,0.16))] shadow-[0_18px_60px_rgba(12,18,48,0.08)] ${className}`}
    >
      <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(22,25,90,0.07),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.45),rgba(22,25,90,0.02))]" />
    </div>
  );
}

function SplitMediaBlock({
  reverse = false,
  children,
  mediaSrc,
  mediaAlt,
}: {
  reverse?: boolean;
  children: ReactNode;
  mediaSrc: string;
  mediaAlt: string;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div className={reverse ? "lg:order-2" : ""}>
        <MediaImage
          src={mediaSrc}
          alt={mediaAlt}
          sizes="(min-width: 1024px) 46vw, 100vw"
          className="aspect-[4/5] min-h-[340px] w-full rounded-[30px] border border-[#16195a]/10 bg-white shadow-[0_18px_60px_rgba(12,18,48,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(12,18,48,0.14)] md:min-h-[460px]"
        />
      </div>
      <div className={reverse ? "lg:order-1" : ""}>{children}</div>
    </div>
  );
}

export default function MenopauseWithLove() {
  return (
    <main className="bg-[#fbf9f7] text-[#161616]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(22,25,90,0.08),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(203,162,91,0.12),transparent_28%)]" />
        <div className="relative mx-auto max-w-[1440px] px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-36">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div className="text-center lg:text-left">
              <p className="text-xl font-semibold uppercase tracking-[0.2em] text-[#16195a] md:text-2xl">
                Запис інтенсиву
              </p>

              <h1 className="mt-6 text-5xl font-light leading-[1.03] text-[#16195a] md:text-7xl">
                ПРО МЕНОПАУЗУ З ЛЮБОВ&apos;Ю:
                <br />
                Як підготуватися і як пережити
              </h1>

              <p className="mx-auto mt-8 max-w-[760px] text-xl font-light leading-9 text-[#1b1b1b]/90 md:text-3xl md:leading-[1.5] lg:mx-0">
                Корисна практична інформація про те, що робити сьогодні, щоб не
                страждати потім (для усіх жінок 20+), і як допомогти собі зараз
                тим, хто вже в цьому періоді.
              </p>
            </div>

            <MediaImage
              src="/images/menopause-hero-woman.jpg"
              alt="Жінка на інтенсиві про менопаузу"
              priority
              sizes="(min-width: 1024px) 32vw, 75vw"
              className="mx-auto aspect-[3/4] w-full max-w-[330px] rounded-[34px] border border-white/90 bg-white shadow-[0_22px_70px_rgba(12,18,48,0.14)]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
        <SectionTitle>Цей курс для Вас, якщо Ви:</SectionTitle>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {audienceItems.map((item, index) => (
            <article
              key={item}
              className="rounded-[30px] border border-[#16195a]/8 bg-white/90 p-7 text-center shadow-[0_16px_45px_rgba(12,18,48,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(12,18,48,0.11)]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#16195a]/10 bg-[#f6f4ef] text-lg font-medium text-[#16195a]">
                {index + 1}
              </div>
              <h3 className="mt-6 text-xl font-light leading-8 text-[#16195a] md:text-2xl">
                {item}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white/70">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
          <SectionTitle>Команда фахівців:</SectionTitle>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-[28px] border border-[#16195a]/8 bg-white/90 p-4 shadow-[0_16px_45px_rgba(12,18,48,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(12,18,48,0.11)]"
              >
                <MediaImage
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  sizes="(min-width: 1280px) 18vw, (min-width: 1024px) 30vw, 50vw"
                  className="aspect-[4/5] min-h-[250px] w-full rounded-[20px] bg-[#f7f5f1]"
                />
                <div className="mt-5 text-center">
                  <h3 className="text-xl font-medium leading-tight text-[#16195a]">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#16195a]/75">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
        <SectionTitle>Коротко про теми:</SectionTitle>

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

          <div className="mx-auto max-w-[780px]">
            <article className="rounded-[30px] border border-white/10 bg-white/8 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur transition duration-500 hover:-translate-y-1">
              <MediaImage
                src="/images/menopause-check-up.jpg"
                alt="Лабораторне дослідження для check-up"
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="aspect-[16/10] min-h-[260px] w-full rounded-[22px] border border-white/10"
              />
              <h3 className="mt-6 text-center text-2xl font-light leading-tight">
                Check-up для королеви: які аналізи включити в список
                обов’язкових обстежень, щоб спати спокійно?
              </h3>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
        <SectionTitle>Відгуки учасниць інтенсиву</SectionTitle>
        <SectionTag />

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
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

              <p className="mt-5 whitespace-pre-line text-base leading-8 text-[#1f1f1f]/85">
                {review.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white/70">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
          <SplitMediaBlock
            reverse
            mediaSrc="/images/menopause-price-side.jpg"
            mediaAlt="Жінка у білому халаті поруч із лабораторним обладнанням"
          >
            <div className="rounded-[34px] border border-[#16195a]/8 bg-white/90 p-8 text-center shadow-[0_18px_55px_rgba(12,18,48,0.08)] md:p-12">
              <h2 className="text-4xl font-light leading-tight text-[#16195a] md:text-6xl">
                Потурбуйтеся про себе вже сьогодні! І допоможіть найдорожчим!
              </h2>

              <div className="mt-8 text-6xl font-light text-[#16195a] md:text-7xl">
                1500₴
              </div>

              <p className="mt-5 text-2xl font-light leading-9 text-[#16195a] md:text-3xl">
                Вартість запису інтенсиву (більше 10 год мегакорисної практичної
                інформації)
              </p>

              <a
                href="https://secure.wayforpay.com/button/bb91a25e45bad"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#16195a] px-9 py-4 text-base tracking-[0.2em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#222770]"
              >
                Оплатити
              </a>

              <p className="mt-10 text-3xl font-light leading-tight text-[#16195a] md:text-4xl">
                &quot;Як постелиш - так і виспишся!&quot;
              </p>

              <p className="mx-auto mt-5 max-w-[720px] text-lg leading-8 text-[#1f1f1f]/85 md:text-xl md:leading-9">
                Давайте вже зараз почнемо стелити так, як треба :) Щоб наша
                менопауза була часом радості, здоров&apos;я та активної
                діяльності!
              </p>
            </div>
          </SplitMediaBlock>
        </div>
      </section>
      <section className="mx-auto max-w-[1100px] px-6 py-20 text-center md:px-10 md:py-24">
        <SectionTitle>Залишились питання?</SectionTitle>

        <p className="mx-auto mt-8 max-w-[700px] text-xl leading-relaxed text-[#111] md:text-2xl">
          Пишіть
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

function MediaImage({
  src,
  alt,
  className,
  sizes,
  priority = false,
  fit = "cover",
}: {
  src: string;
  alt: string;
  className: string;
  sizes: string;
  priority?: boolean;
  fit?: "cover" | "contain";
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`transition-transform duration-700 hover:scale-[1.03] ${
          fit === "contain" ? "object-contain p-2" : "object-cover"
        }`}
      />
    </div>
  );
}
