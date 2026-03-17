import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Консультації | Інтимність без напруги",
  description:
    "Онлайн консультація для жінок про близькість у шлюбі, напругу в інтимному житті та м’який план змін.",
};

const painPoints = [
  "часто відмовляєте і потім відчуваєте провину",
  "погоджуєтесь через силу, щоб не образити",
  "близькість стала напруженою або рутинною",
  "будь-які розмови про це закінчуються образами або мовчанням",
];

const barriers = [
  "сором",
  "напруга",
  "відчуття «так треба»",
  "нерозуміння свого тіла",
  "відсутність права на власні потреби",
];

const consultationIncludes = [
  "спокійно дивимося на ситуацію збоку",
  "шукаємо головну причину, через яку близькість у шлюбі почала згасати",
  "пробуємо розібратися з власними потребами",
  "складаємо м’який план змін",
];

const results = [
  "прояснення Вашої ситуації — фаховий погляд збоку",
  "розуміння реальної причини проблеми, а не здогадок",
  "рекомендації, з чого почати",
  "розуміння, чи можна відновити близькість",
];

const forWhom = [
  "Ви уникаєте інтимних стосунків",
  "між Вами накопичилась напруга через секс",
  "Ви відчуваєте себе самотньо у шлюбі",
  "боїтесь, що дистанція буде тільки зростати",
  "не хочете доводити ситуацію до кризи",
];

const feedback = [
  "Виявляється, йому не лише одного треба",
  "Я нарешті змогла виговоритись, бо нікому не можу про таке розказати",
  "Я зовсім забила на себе і навіть цього не помітила",
  "З’явилась надія, що ще не все втрачено",
];

function SectionHeading({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <h2
      className={`text-3xl font-bold leading-tight tracking-tight text-[#1f2d68] md:text-4xl ${
        center ? "text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}

function Paragraph({
  children,
  className = "",
  center = false,
}: {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <p
      className={`text-[20px] leading-[1.9] text-neutral-900 md:text-[22px] ${
        center ? "text-center" : ""
      } ${className}`}
    >
      {children}
    </p>
  );
}

export default function ConsultPage() {
  return (
    <main className="bg-[#f5f5f5] text-neutral-900">
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20">
        <div className="mx-auto max-w-4xl">
            <h1 className="text-center text-2xl font-bold leading-snug tracking-tight text-[#1f2d68] md:text-4xl">
              Як повернути близькість у шлюбі, якщо Ви постійно втомлені,
              уникаєте інтимності і боїтеся, що з Вами щось не так
            </h1>

          <div className="mt-16 space-y-8 text-[20px] leading-[1.9] md:text-[22px]">
            <p>
              Ви <strong>любите</strong> чоловіка… але ввечері мрієте тільки про
              те, щоб <strong>Вас ніхто не чіпав</strong>?
            </p>

            <p>А разом з тим:</p>

            <ul className="list-disc space-y-2 pl-8">
              <li>часто відмовляєте і потім відчуваєте провину</li>
              <li>погоджуєтесь через силу, щоб не образити</li>
              <li>близькість стала напруженою або рутинною</li>
              <li>
                будь-які розмови про це закінчуються образами або мовчанням
              </li>
            </ul>
            <div className="flex justify-center py-6 md:py-10">
              <div className="w-full max-w-[320px]">
                <Image
                  src="/images/consult-woman.png"
                  alt=""
                  width={320}
                  height={320}
                  className="h-auto w-full"
                />
              </div>
            </div>
            <div className="py-4">{/* фото додаси тут */}</div>

            <p>Вам здається, що Ви живете як хороша сім’я, але не як пара.</p>

            <p>
              Ви чекали, що стане легше, коли дитина підросте. Коли виспитеся.
              Коли зникне стрес.
            </p>

            <p>Але проходять роки — і нічого не міняється.</p>

            <p>
              Насправді, є <strong>причини</strong>, через які бажання зникає. І
              їх важливо зрозуміти.
            </p>
          </div>
        </div>
      </section> 
      <section className="mx-auto max-w-5xl px-6 py-10 md:px-10 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-[#1f2d68] md:text-4xl">
            Реальна історія
          </h2>

          <div className="mt-10 space-y-8 text-[20px] leading-[1.9] md:text-[22px]">
            <p>
              Одна жінка, назвемо її Світланою, прийшла до мене маючи на плечима
              25 років шлюбу.
            </p>

            <p>
              Вона казала: <strong>“Секс для мене — це просто обов’язок, який потрібно
              виконати.”</strong>
            </p>

            <p>
              Вона майже не отримувала задоволення. Про свої інтимні потреби
              ніколи не говорила — ця тема була табу в їхній сім&apos;ї усі ці
              роки.
            </p>

            <p>Всередині було багато невидимих <strong>бар’єрів:</strong></p>

            <ul className="list-disc space-y-2 pl-8">
              <li>сором</li>
              <li>напруга</li>
              <li>відчуття “так треба”</li>
              <li>нерозуміння свого тіла</li>
              <li>відсутність права на власні потреби</li>
            </ul>

            <p>
              У процесі роботи почали змінюватися не тільки дії — змінилося
              сприйняття себе. Настільки, що Світлана залишила такий відгук
              (цитую дослівно):
            </p>
            <div className="flex justify-center py-4 md:py-6">
              <div className="w-full max-w-[340px]">
                <Image
                  src="/images/pr3.jpg"
                  alt=""
                  width={340}
                  height={340}
                  className="h-auto w-full"
                />
              </div>
            </div>

            <div className="flex justify-center py-4 md:py-6">
              <div className="w-full max-w-[340px]">
                <Image
                  src="/images/pr2.jpg"
                  alt=""
                  width={340}
                  height={340}
                  className="h-auto w-full"
                />
              </div>
            </div>

            <div className="flex justify-center py-4 md:py-6">
              <div className="w-full max-w-[340px]">
                <Image
                  src="/images/pr1.jpg"
                  alt=""
                  width={340}
                  height={340}
                  className="h-auto w-full"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10 md:px-10 md:py-16">
        <div className="mx-auto max-w-4xl">

          <div className="space-y-8 text-[20px] leading-[1.9] md:text-[22px]">
            <p>
              <strong>Інтимність у шлюбі</strong> — це не окрема тема “сама по собі”. Вона дуже
              точно <strong>відображає те, що взагалі відбувається у стосунках</strong> між
              чоловіком і дружиною, і <strong>стан жінки</strong> також.
            </p>

            <p>
              Часто проблема не там, де її шукають.І самостійно побачити це
              буває складно, бо ми звикаємо до власних слів, реакцій і
              сценаріїв.
            </p>

            <p>
              Тому я створила консультацію для жінок “Інтимність без напруги”,
              де ми:
            </p>

            <ul className="list-disc space-y-2 pl-8">
              <li>спокійно дивимося на ситуацію збоку</li>
              <li>
                шукаємо головну причину, через яку близькість у шлюбі почала
                згасати
              </li>
              <li>пробуємо розібратися з власними потребами</li>
              <li>складаємо м’який план змін</li>
            </ul>
              <div className="flex justify-center py-4 md:py-6">
                <div className="w-full max-w-[640px]">
                  <Image
                    src="/images/Д2.png"
                    alt=""
                    width={640}
                    height={640}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            <div className="py-4">{/* фото додаси тут */}</div>
            <p>
              І все це <strong>заради того, щоб інтимна близькість знову стала місцем
              тепла, а не стресу</strong>.
            </p>

            <p>Ось трохи зворотнього зв&apos;язку після консультації:</p>

            <div className="space-y-4">
              <blockquote className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-sm">
                “Виявляється, йому не лише одного треба”
              </blockquote>

              <blockquote className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-sm">
                "Я нарешті змогла виговоритись, бо нікому не можу про таке
                розказати"
              </blockquote>

              <blockquote className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-sm">
                “Я зовсім забила на себе і навіть цього не помітила”
              </blockquote>

              <blockquote className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-sm">
                “З’явилась надія, що ще не все втрачено.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10 md:px-10 md:py-16">
        <div className="mx-auto max-w-4xl space-y-8 text-[20px] leading-[1.9] md:text-[22px]">
          <h2 className="text-center text-3xl font-bold text-[#1f2d68] md:text-4xl">
            <strong>Якщо потрібні глибші зміни</strong>
          </h2>

          <p>
            Після консультації Ви можете отримати запрошення у тренінг
            “Закохатися знову” або "Формула любові" - це тренінги, у якому
            покроковий план відновлення близькості у шлюбі. Але це не
            обов’язково. Іноді вже однієї зустрічі достатньо, щоб зрушити
            ситуацію з мертвої точки.
          </p>
          <p>Отож, Вам <strong>варто прийти на консультацію,</strong> якщо:</p>

          <ul className="list-disc space-y-2 pl-8">
            <li>Ви уникаєте інтимних стосунків</li>
            <li>між Вами накопичилась напруга через секс</li>
            <li>Ви відчуваєте себе самотньо у шлюбі</li>
            <li>боїтесь, що дистанція буде тільки зростати</li>
            <li>не хочете доводити ситуацію до кризи</li>
          </ul>

          <p>
            Консультація проводиться <strong>онлайн. Конфіденційно </strong> і делікатно. <strong>Вартість </strong> 
            650 грн., <strong>тривалість</strong> 45 хв.
          </p>
              <div className="flex justify-center py-4 md:py-6">
                <div className="w-full max-w-[320]">
                  <Image
                    src="/images/Д3.png"
                    alt=""
                    width={320}
                    height={320}
                    className="h-auto w-full"
                  />
                </div>
              </div>
          <p>Пропозиція діє <strong>до кінця березня.</strong></p>

          <p>Ви <strong>отримаєте:</strong></p>

          <ul className="space-y-2 pl-0">
            <li>✔ прояснення Вашої ситуації (фаховий погляд збоку)</li>
            <li>✔ причини проблеми (а не здогадки)</li>
            <li>✔ рекомендації, з чого почати</li>
            <li>✔ розуміння, чи можна відновити близькість</li>
          </ul>

          <p>Якщо відгукується - натисніть на кнопочку нижче!</p>
            <div className="mt-10 flex justify-center">
              <Link
                href="https://t.me/iryna_tabaka?text=Хочу%20замовити%20консультацію"
                onClick={() => {
                  // @ts-ignore
                  window.fbq?.("track", "Lead");
                }}
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-12 py-8 text-xl font-semibold text-white transition hover:bg-red-700"
              >
                ЗАРЕЄСТРУВАТИСЯ
              </Link>
            </div>
        </div>
      </section>

      <section
        id="booking"
        className="mt-8 bg-[#f5f5f5] text-neutral-900"
      >
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="space-y-6 text-[20px] leading-[1.9] md:text-[22px]">
              <p>
                <strong>Гарантія:</strong>якщо після зустрічі не з’явиться розуміння причини та
                плану дій — оплата повертається.
              </p>

              <p>Іноді одна розмова змінює вектор руху.</p>
              <div className="flex justify-center py-4 md:py-6">
                <div className="w-full max-w-[320px]">
                  <Image
                    src="/images/Д.png"
                    alt=""
                    width={320}
                    height={320}
                    className="h-auto w-full"
                  />
                </div>
              </div>
              <p>Наважтеся, поки мовчання не стало звичкою!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-[22px] font-bold leading-[1.8] text-[#1f2d68] md:text-[26px]">
            <strong>Я, Ірина Табака, тренер зі статевої та сексуальної грамотності,
            вболіваю за Вас ❤</strong>
          </p>
        </div>
      </section>
    </main>
  );
}