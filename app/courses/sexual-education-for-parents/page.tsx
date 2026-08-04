import Image from "next/image";
import Link from "next/link";

const values = [
  "любили Бога",
  "поважали себе",
  "берегли гідність свого тіла",
  "не дозволяли використовувати себе",
  "навчилися будувати здорові стосунки",
  "одного дня створили міцну і щасливу сім'ю",
];

const outcomes = [
  "зрозумієте закономірності психосексуального розвитку дітей від раннього дитинства до повноліття",
  "будете знати, що, коли і як говорити дитині у різному віці",
  "перестанете боятися незручних запитань та навчитеся відповідати чесно, спокійно і без ніяковіння",
  "допоможете дитині сформувати здорову повагу до власного тіла",
  "знатимете, як говорити про менструацію, полюції, закоханість, сексуальність, чистоту та шлюб",
  "навчитеся захищати дітей від викликів сучасної культури без страху, але з мудрістю",
  "сформуєте цілісне християнське бачення людської любові та сексуальності",
  "станете для своєї дитини безпечним місцем, куди вона захоче приходити зі своїми запитаннями",
];

const lessons = [
  ["Божий задум про людину, тіло і любов", "З чого починається статеве виховання? Не з розмови про секс, а з відкриття того, ким є людина у Божому задумі, чому тіло є даром і як допомогти дитині ще змалку відчути власну гідність і цінність."],
  ["Батьки можуть усе. Ну майже.", "Поговоримо про те, як подолати власний страх, ніяковіння чи невпевненість і стати для дитини тим дорослим, до якого вона захоче прийти з будь-яким питанням."],
  ["Що, коли і як говорити дітям", "Ви отримаєте чітку дорожню карту розвитку дитини від 3 до 18 років і зрозумієте, які теми варто відкривати на кожному віковому етапі."],
  ["Мова тіла, особисті межі та безпека", "Практичні інструменти для формування здорових особистих меж і культури безпеки — без залякування."],
  ["Зміни тіла без страху і сорому", "Менструація, полюції, гормональні зміни та перепади настрою: як зробити ці розмови природними, спокійними й підтримувальними."],
  ["Чистота — це не про заборони", "Що таке сором, чому він існує і як пояснювати дітям чесноту чистоти так, щоб вона відкривала красу справжньої любові."],
  ["Як допомогти дитині не загубитися у цифровому світі", "Соціальні мережі, порнографія та сексуалізований контент: як навчити дитину мислити, розпізнавати маніпуляції та берегти власне серце."],
  ["Закоханість, кохання і покликання до подружжя", "Як допомогти дитині відрізнити сильні емоції від справжньої любові й власним прикладом показати красу зрілих стосунків та шлюбу."],
  ["Відповіді на найскладніші запитання дітей", "Конкретні приклади відповідей на запитання про появу дітей, секс і цінність очікування до шлюбу — відповідно до віку дитини."],
  ["Як створити вдома культуру любові", "Фінальна зустріч — початок: як зробити віру, любов і повагу щоденним досвідом дітей у вашій сім'ї."],
];

const faqs = [
  ["А якщо моїй дитині лише 3–4 роки?", "Саме зараз найкращий час почати. Статеве виховання починається з формування здорового ставлення до тіла, людської гідності, любові та довіри."],
  ["А якщо моя дитина вже підліток?", "Ніколи не пізно. Підлітки потребують батьків, які готові слухати, підтримувати і чесно говорити про важливе."],
  ["А якщо мені дуже ніяково говорити про такі теми?", "Саме для цього існує курс: крок за кроком ви побачите, що про тіло, любов і статевість можна говорити спокійно, природно й без сорому."],
  ["Чи підійде курс, якщо я виховую дитину сама?", "Так. Ви знайдете підтримку, практичні поради і надію незалежно від життєвої ситуації вашої родини."],
  ["Чи потрібно дивитися всі заняття одразу?", "Ні. Проходьте курс у власному темпі та повертайтеся до тем, коли вони ставатимуть актуальними для вашої сім'ї."],
];

const reviewScreens = [
  "/images/sexual-education-parents-review-01.png",
  "/images/sexual-education-parents-review-02.png",
  "/images/sexual-education-parents-review-03.png",
  "/images/sexual-education-parents-review-04.png",
  "/images/sexual-education-parents-review-05.png",
  "/images/sexual-education-parents-review-06.png",
  "/images/sexual-education-parents-review-07.png",
];

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="mx-auto max-w-4xl text-center text-3xl font-light leading-tight text-[#16195a] md:text-5xl">{children}</h2>;
}

function CTA({ children = "Обрати пакет участі" }: { children?: string }) {
  return <a href="#participation" className="inline-flex rounded-full bg-[#16195a] px-7 py-4 text-base font-medium text-white shadow-[0_16px_35px_rgba(22,25,90,0.22)] transition hover:-translate-y-0.5 hover:bg-[#272b82]">{children}</a>;
}

export default function SexualEducationForParents() {
  return <main className="bg-[#fbf9f7] text-[#171717]">
    <section className="relative overflow-hidden bg-[#f3eee7]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,25,90,0.11),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(203,162,91,0.19),transparent_33%)]" />
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-2">
        <div className="text-center lg:text-left"><p className="text-sm uppercase tracking-[0.24em] text-[#16195a]/65">Онлайн-курс для батьків</p><h1 className="mt-6 text-4xl font-light leading-[1.08] text-[#16195a] md:text-6xl">Статеве виховання дітей у світлі Божого задуму</h1><p className="mt-7 text-lg leading-8 text-[#1f1f1f]/85 md:text-xl">Для батьків, які хочуть закласти у серце дитини такий фундамент, щоб серед шуму сучасного світу вона не загубила правду про любов, людську гідність і Божий задум про людину.</p><p className="mt-5 text-base leading-7 text-[#1f1f1f]/75">Справжня мета статевого виховання — не налякати, не контролювати й не лише передати знання, а допомогти дитині стати людиною, яка вміє любити.</p><div className="mt-9"><CTA /></div></div>
        <Image src="/images/sexual-education-parents-hero.jpg" alt="Підлітки разом" width={1200} height={630} priority className="h-auto w-full rounded-[34px] shadow-[0_24px_70px_rgba(12,18,48,0.16)]" />
      </div>
    </section>

    <section className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-24"><Title>Кожен люблячий тато й мама носить у серці схожі переживання</Title><div className="mt-12 grid gap-10 lg:grid-cols-2"><div className="rounded-[30px] bg-white p-8 shadow-[0_16px_45px_rgba(12,18,48,0.07)]"><p className="text-xl leading-8 text-[#16195a]">Ми хочемо, щоб наші діти…</p><ul className="mt-6 space-y-4 text-lg leading-7">{values.map((value) => <li key={value}>♥ {value};</li>)}</ul></div><div className="rounded-[30px] border border-[#16195a]/10 bg-[#16195a] p-8 text-white"><p className="text-xl leading-8">Сучасний світ часто пропонує інші відповіді. Тому природно хвилюватися: коли починати розмови, як відповісти правильно, як не дозволити інтернету стати єдиним джерелом знань?</p><p className="mt-6 text-lg leading-8 text-white/80">Знайте: ви не самі. І вже робите дуже важливий крок.</p></div></div><div className="mt-10 text-center"><CTA>Хочу виховувати дитину з любов&apos;ю і мудрістю</CTA></div></section>

    <section className="bg-white/70"><div className="mx-auto max-w-[1100px] px-6 py-20 text-center md:px-10 md:py-24"><Title>Найважливіше — не ідеальні слова</Title><p className="mx-auto mt-10 max-w-4xl text-lg leading-8 text-[#1f1f1f]/85 md:text-xl">Діти найбільше навчаються не з наших лекцій, а з атмосфери, у якій живуть: з того, як мама говорить про себе, як тато ставиться до дружини, як у сім&apos;ї переживають конфлікти, проявляють ніжність і говорять про людське тіло. Саме тому цей курс — не лише про відповіді на складні запитання, а й про внутрішню формацію батьків.</p><p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-[#1f1f1f]/85 md:text-xl">Лише те, чим живемо самі, ми можемо природно передати своїм дітям.</p></div></section>

    <section className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-2"><Image src="/images/sexual-education-parents-imagine.jpg" alt="Дорослий уважно слухає підлітка" width={1200} height={630} className="h-auto w-full rounded-[32px] shadow-[0_18px_60px_rgba(12,18,48,0.1)]" /><div><Title>Уявіть…</Title><p className="mt-8 text-lg leading-8 text-[#1f1f1f]/85 md:text-xl">Одного вечора донька сідає поруч і починає говорити про те, що її хвилює. Син запитує про закоханість — і замість розгубленості ви відчуваєте спокій. Ваші діти не бояться ставити запитання й не шукають відповіді лише в інтернеті, бо знають: у нашому домі мене зрозуміють, вислухають і допоможуть знайти правду.</p><p className="mt-6 text-lg leading-8 text-[#1f1f1f]/85 md:text-xl">Так народжується довіра — один із найкращих захистів для дитини.</p></div></section>

    <section className="bg-[#16195a] text-white"><div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-24"><Title>Після курсу Ви…</Title><div className="mt-12 grid gap-4 md:grid-cols-2">{outcomes.map((outcome) => <div key={outcome} className="rounded-2xl border border-white/15 bg-white/5 p-5 text-base leading-7 md:text-lg">✓ {outcome}</div>)}</div></div></section>

    <section className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.8fr_1.2fr]"><Image src="/images/sexual-education-iryna.jpg" alt="Ірина Табака" width={900} height={1200} className="h-auto w-full rounded-[32px] shadow-[0_18px_60px_rgba(12,18,48,0.1)]" /><div><Title>Чому ця тема стала для мене справою серця?</Title><p className="mt-8 text-lg leading-8 text-[#1f1f1f]/85">Працюючи з подружніми парами, я знову й знову бачила, що багато труднощів в інтимній сфері мають коріння у дитинстві: у мовчанні, соромі, неправильному розумінні власного тіла та відсутності чесних розмов.</p><p className="mt-5 text-lg leading-8 text-[#1f1f1f]/85">Я щиро вірю: коли дитина зростає в атмосфері любові, поваги до власного тіла й розуміння Божого задуму, вона отримує міцний фундамент для майбутнього. Саме тому я створила цей курс.</p></div></section>

    <section className="bg-white/70"><div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-24"><Title>Про автора</Title><div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"><div><Image src="/images/sexual-education-certificate.jpg" alt="Сертифікат Ірини Табаки" width={1280} height={960} className="h-auto w-full rounded-[28px] border border-[#16195a]/10" /></div><div className="rounded-[30px] bg-white p-8 shadow-[0_16px_45px_rgba(12,18,48,0.07)]"><h3 className="text-3xl font-light text-[#16195a]">Ірина Табака</h3><ul className="mt-6 space-y-3 text-base leading-7 text-[#1f1f1f]/85 md:text-lg"><li>• тренер зі статевої та сексуальної грамотності (сертифікат Школи статевого виховання Національного інституту сексології та сексуального здоров&apos;я);</li><li>• у 2020 р. вела заняття зі статевого виховання з дітьми віком від 7 до 14 років у Школі життєвих навиків «Приспособленец» у м. Люботині Харківської обл.;</li><li>• з 2021 р. — онлайн-заняття зі статевого виховання з дітьми та батьками;</li><li>• мама трьох підлітків;</li><li>• катехит.</li></ul></div></div><p className="mx-auto mt-12 max-w-4xl text-center text-lg leading-8 text-[#1f1f1f]/85">Найкраще виховання народжується там, де батьки самі відкривають красу любові, людської гідності та Божого задуму. Цей курс допомагає змінити атмосферу у сім&apos;ї.</p></div></section>

    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24"><Title>Відгуки учасників</Title><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{reviewScreens.map((src, index) => <figure key={src} className="overflow-hidden rounded-[28px] border border-[#16195a]/10 bg-white p-3 shadow-[0_14px_40px_rgba(12,18,48,0.06)]"><Image src={src} alt={`Скріншот відгуку учасниці курсу ${index + 1}`} width={1179} height={1277} className="h-auto w-full rounded-[18px]" /></figure>)}</div></section>

    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24"><Title>Програма курсу</Title><p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-[#1f1f1f]/75">10 зустрічей, які допоможуть із впевненістю говорити з дитиною про тіло, любов, стосунки та Божий задум про людину.</p><div className="mt-12 grid gap-5 md:grid-cols-2">{lessons.map(([title, text], index) => <article key={title} className="rounded-[28px] border border-[#16195a]/10 bg-white p-7 shadow-[0_14px_40px_rgba(12,18,48,0.06)]"><div className="text-sm tracking-[0.2em] text-[#16195a]/55">ЗУСТРІЧ {index + 1}</div><h3 className="mt-4 text-2xl font-light text-[#16195a]">{title}</h3><p className="mt-4 text-base leading-7 text-[#1f1f1f]/80">{text}</p></article>)}</div><div className="mt-12 text-center"><CTA>Я хочу пройти цей курс</CTA></div></section>

    <section className="bg-[#f3eee7]"><div className="mx-auto max-w-[1100px] px-6 py-20 md:px-10 md:py-24"><Title>Курс, до якого можна повертатися знову і знову</Title><div className="mx-auto mt-10 max-w-4xl rounded-[30px] bg-white p-8 shadow-[0_16px_45px_rgba(12,18,48,0.07)]"><p className="text-lg leading-8 text-[#1f1f1f]/85">Діти ростуть — і разом із ними виникають нові запитання. Після оплати ви отримуєте 10 повних записів занять, структуровану програму, практичні приклади діалогів і особисту формацію, яка змінює не лише знання, а й атмосферу у вашій сім&apos;ї.</p></div><div className="mt-12 grid gap-5">{faqs.map(([question, answer]) => <article key={question} className="rounded-[24px] border border-[#16195a]/10 bg-white p-6"><h3 className="text-xl font-medium text-[#16195a]">{question}</h3><p className="mt-3 text-base leading-7 text-[#1f1f1f]/80">{answer}</p></article>)}</div></div></section>

    <section id="participation" className="mx-auto max-w-[1200px] px-6 py-20 text-center md:px-10 md:py-24"><Title>Оберіть формат участі</Title><p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#1f1f1f]/75">Два варіанти участі, щоб кожна сім&apos;я могла обрати рівень підтримки, який найбільше відповідає її потребам.</p><div className="mt-12 grid gap-6 md:grid-cols-2"><article className="rounded-[30px] border border-[#16195a]/10 bg-white p-8 text-left shadow-[0_16px_45px_rgba(12,18,48,0.07)]"><h3 className="text-2xl font-light text-[#16195a]">Пакет «Груповий»</h3><p className="mt-4 text-4xl font-light text-[#16195a]">2 600 грн</p><p className="mt-5 leading-7 text-[#1f1f1f]/80">10 онлайн-занять у записі, доступ до всіх матеріалів та бонус — запис тренінгу Ірини Баранової про зв&apos;язок із дитиною й турботу про себе.</p><div className="mt-7"><CTA>Обрати пакет «Груповий»</CTA></div></article><article className="rounded-[30px] bg-[#16195a] p-8 text-left text-white shadow-[0_18px_55px_rgba(22,25,90,0.24)]"><h3 className="text-2xl font-light">Пакет «Поглиблений»</h3><p className="mt-4 text-4xl font-light">4 600 грн</p><p className="mt-5 leading-7 text-white/85">Усе з пакета «Груповий» плюс повний курс «Я з Тобою. Поруч» для батьків підлітків із 10 запрошеними фахівцями.</p><div className="mt-7"><a href="#participation" className="inline-flex rounded-full bg-white px-7 py-4 text-base font-medium text-[#16195a] transition hover:-translate-y-0.5">Обрати пакет «Поглиблений»</a></div></article></div><p className="mx-auto mt-12 max-w-4xl text-lg leading-8 text-[#1f1f1f]/80">Дорослішання не чекає. Найцінніше, що ми можемо залишити дітям, — досвід любові, почуття власної гідності та здатність робити вибір навіть тоді, коли поруч немає батьків.</p></section>

    <section className="bg-[#16195a] text-center text-white"><div className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-24"><h2 className="text-3xl font-light md:text-5xl">Залишились питання?</h2><p className="mt-7 text-lg text-white/85">Пишіть!</p><div className="mt-10 space-y-3 text-lg"><a className="block hover:opacity-80" href="tel:+380974083750">+38 (097) 408 37 50</a><a className="block hover:opacity-80" href="mailto:iryna.tabaka@gmail.com">iryna.tabaka@gmail.com</a></div><Link href="/courses" className="mt-10 inline-block text-sm uppercase tracking-[0.18em] text-white/75 hover:text-white">Усі курси</Link></div></section>
  </main>;
}
