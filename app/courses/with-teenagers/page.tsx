import Image from "next/image";

const concerns = [
  "Я хочу зрозуміти свою дитину. Але іноді мені здається, що ми говоримо різними мовами.",
  "Я боюся втратити контакт.",
  "Я не знаю, коли потрібно відпустити, а коли — наполягти.",
  "Я хочу, щоб моя дитина приходила до мене зі своїми переживаннями.",
  "Я хвилююся через телефон, соціальні мережі, друзів, закоханість…",
  "Я хочу підтримати її. Але сама дуже втомилася.",
];

const experts = [
  ["Лідія Кондратик", "психолог, травмотерапевт, мама 7", "Бути батьками підлітка: виклик, кара чи привілей?"],
  ["Владика Максим Рябуха", "екзарх Донецький, салезіянин", "Віра підлітків: як не втратити дитину у вірі в цьому віці й не перетворитися на моралізатора"],
  ["Ірина Баранова", "психологиня, тренерка з ефективної комунікації", "Як збільшити шанси на зв’язок з дитиною і подбати про себе? Тренінг з ненасильницького спілкування."],
  ["Людмила Гридковець", "психолог, психотерапевт, травмотерапевт, голова Асоціації християнських психологів України", "Статеве дозрівання підлітка і як не збожеволіти батькам"],
  ["с. Антонія Шелепило, МНІ", "духівниця Хабу «Діяти», консультантка у методі КПТ", "Бути матір’ю: радість і біль материнства в історіях біблійних жінок"],
  ["Юлія Завійська", "дієтолог-нутріціолог", "Як підтримати фізичний і психологічний стан підлітка: харчування, режим, ризики порушень"],
  ["Галина Дацко", "гінеколог-ендокринолог", "Дорослішання без тривоги: гінеколог про підліткові зміни"],
  ["Христина Комісар-Цар", "уролог-сексопатолог", "Розмова про тілесність, здоров’я та делікатні питання підліткового віку"],
  ["Наталя Сиротич", "дитячий психолог, доктор філософії, арт-терапевт", "Психологічні особливості підліткового віку, які полегшують життя і батькам, і дітям"],
  ["о. Михайло Станчишин", "єзуїт, Школа духовного проводу «Єлеазар»", "Через вуха до серця: любляче слухання — засади здорового виховання"],
];

const outcomes = [
  "краще розумітимете, що відбувається з дитиною в підлітковому віці",
  "зможете краще чути дитину, навіть коли вона говорить мало",
  "матимете більше впевненості у складних розмовах про тіло, стосунки, віру, друзів і соціальні мережі",
  "краще розумітимете, де відпустити, а де залишатися поруч і встановлювати межі",
  "навчитеся дбати не лише про дитину, а й про себе",
  "побачите, що підлітковий вік — не лише криза, а час дорослішання й нової близькості",
];

const videos = [
  ["Сестра Антонія", "Фрагмент зустрічі про радість і біль материнства", "/videos/course-with-teenagers-sister-antonia-web.mp4"],
  ["Юлія Завійська", "Фрагмент зустрічі про підтримку здоров’я підлітка", "/videos/course-with-teenagers-yuliia-zaviiska-web.mp4"],
  ["Христина Комісар-Цар", "Фрагмент зустрічі з урологом-сексопатологом", "/videos/course-with-teenagers-khrystyna-komisar-tsar-web.mp4"],
  ["Людмила Гридковець", "Фрагмент зустрічі про статеве дозрівання підлітка", "/videos/course-with-teenagers-liudmyla-hrydkovets-web.mp4"],
];

const reviewScreens = [
  "/images/with-teenagers-review-01.png",
  "/images/with-teenagers-review-02.png",
  "/images/with-teenagers-review-03.png",
  "/images/with-teenagers-review-04.png",
  "/images/with-teenagers-review-05.png",
  "/images/with-teenagers-review-06.png",
];

function SectionTitle({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <h2 className={`mx-auto max-w-4xl text-center text-3xl font-light leading-tight md:text-5xl ${light ? "text-white" : "text-black"}`}>{children}</h2>;
}

function PayButton({ children = "Долучитися до курсу" }: { children?: string }) {
  return <a href="https://secure.wayforpay.com/button/b8103a670a2f5" target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-[#16195a] px-7 py-4 text-base font-medium text-white shadow-[0_16px_38px_rgba(22,25,90,0.24)] transition hover:-translate-y-0.5 hover:bg-[#272b82]">{children}</a>;
}

export default function WithTeenagersPage() {
  return <main className="bg-[#fbf9f7] text-[#171717]">
    <section className="relative overflow-hidden bg-[#f1eee8]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,25,90,0.11),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(203,162,91,0.17),transparent_31%)]" /><div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-2"><div className="text-center lg:text-left"><p className="text-xl font-semibold uppercase tracking-[0.08em] text-black md:text-3xl">Онлайн-курс для батьків та підлітків</p><h1 className="mt-6 text-5xl font-light leading-[1.04] text-black md:text-7xl">Я з Тобою.<br />Поруч.</h1><p className="mt-7 text-xl leading-8 text-black md:text-2xl">Для батьків, які хочуть зберегти найцінніше — довіру своєї дитини.</p><p className="mt-5 text-base leading-7 text-black md:text-lg">Підлітковий вік — не кінець близькості. Він може стати початком нових, більш зрілих стосунків.</p><div className="mt-9"><PayButton>Хочу пройти цей шлях разом зі своєю дитиною</PayButton></div></div><Image src="/images/with-teenagers-hero.jpg" alt="Батько розмовляє з сином-підлітком" width={1200} height={630} priority className="h-auto w-full rounded-[34px] shadow-[0_24px_70px_rgba(12,18,48,0.15)]" /></div></section>

    <section className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-24"><SectionTitle>Знайомі такі думки?</SectionTitle><div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">{concerns.map((concern) => <div key={concern} className="rounded-[24px] border border-[#16195a]/10 bg-white p-6 text-lg leading-8 text-black shadow-[0_12px_34px_rgba(12,18,48,0.05)]">«{concern}»</div>)}</div><p className="mx-auto mt-9 max-w-3xl text-center text-lg leading-8 text-black">Якщо Ви впізнали себе хоча б у кількох із цих думок — цей курс для Вас.</p></section>

    <section className="bg-white/70"><div className="mx-auto max-w-4xl px-6 py-20 text-center md:px-10 md:py-24"><SectionTitle>Бути батьками підлітка непросто. І це нормально.</SectionTitle><p className="mt-10 text-lg leading-8 text-black md:text-xl">Підлітковий вік змінює не лише дітей — він змінює всю сім’ю. Батькам доводиться заново вчитися слухати, довіряти, відпускати, говорити про складне й залишатися поруч навіть тоді, коли здається, що дитина цього не потребує.</p><p className="mt-5 text-lg leading-8 text-black md:text-xl">Підтримка потрібна не лише підліткам. Вона потрібна і нам, дорослим.</p></div></section>

    <section className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-2"><Image src="/images/with-teenagers-imagine.jpg" alt="Батько уважно слухає доньку-підлітка" width={1200} height={630} className="h-auto w-full rounded-[32px] shadow-[0_18px_60px_rgba(12,18,48,0.1)]" /><div><SectionTitle>Уявіть…</SectionTitle><p className="mt-8 text-lg leading-8 text-black md:text-xl">Ваш син повертається після складного дня й замість того, щоб замкнутися у кімнаті, сідає поруч. Донька переживає перше розчарування і приходить саме до Вас — не тому, що мусить, а тому, що знає: тут мене не засудять.</p><p className="mt-5 text-lg leading-8 text-black md:text-xl">Саме такі стосунки ми хочемо допомогти будувати.</p></div></section>

    <section className="bg-[#16195a] text-white"><div className="mx-auto max-w-4xl px-6 py-20 text-center md:px-10 md:py-24"><SectionTitle light>Цей курс — не лише про підлітків. Він і про батьків.</SectionTitle><p className="mt-10 text-lg leading-8 text-white/85 md:text-xl">На курсі Ви не просто слухатимете лекції: виконуватимете практичні завдання, навчитеся краще розуміти себе, побачите підлітковий світ очима своєї дитини й відкриєте, що навіть у найнепростішому віці можна залишатися близькими.</p><p className="mt-7 text-base leading-7 text-white/75">Курс створено командою фахівців, яких об’єднують знання, мудрість, людяність і християнські цінності.</p></div></section>

    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24"><SectionTitle>10 фахівців поруч із батьками підлітків</SectionTitle><p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-8 text-black">Коли я задумала цей курс, я зрозуміла: жодна людина не може одна відповісти на всі питання, які виникають у батьків підлітків. Саме тому я запросила фахівців, яких дуже поважаю не лише за їхні знання, а й за мудрість, людяність і християнські цінності. Разом ми створили курс, який, сподіваюся, стане для Вас місцем підтримки, нових відкриттів і надії.</p><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{experts.map(([name, role, topic], index) => <article key={name} className="rounded-[28px] border border-[#16195a]/10 bg-white p-7 shadow-[0_14px_40px_rgba(12,18,48,0.06)]"><div className="text-sm tracking-[0.2em] text-black">{String(index + 1).padStart(2, "0")}</div><h3 className="mt-4 text-2xl font-light text-black">{name}</h3><p className="mt-2 text-sm leading-6 text-black">{role}</p><p className="mt-5 text-base leading-7 text-black">«{topic}»</p></article>)}</div></section>

    <section className="bg-[#f1eee8]"><div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.75fr_1.25fr]"><Image src="/images/sexual-education-iryna.jpg" alt="Ірина Табака" width={900} height={1200} className="h-auto w-full rounded-[32px] shadow-[0_18px_60px_rgba(12,18,48,0.1)]" /><div><SectionTitle>Авторка курсу — Ірина Табака</SectionTitle><p className="mt-8 text-lg leading-8 text-black">Вчитель симпто-термального методу розпізнавання плідності з 8-річним досвідом викладання та міжнародною сертифікацією (NFPTA). Тренер зі статевої та сексуальної грамотності, викладач, катехит, дружина священика та мама трьох підлітків.</p><p className="mt-5 text-lg leading-8 text-black">Ірина створила цей курс, щоб батьки мали простір підтримки й мудрі орієнтири для розмов, які допомагають берегти довіру в родині.</p></div></div></section>

    <section className="bg-white/70"><div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24"><SectionTitle>Фрагменти зустрічей</SectionTitle><p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-black">Короткі фрагменти розмов із запрошеними фахівцями. Відео можна подивитися на сторінці або відкрити окремо.</p><div className="mt-12 grid gap-7 lg:grid-cols-2">{videos.map(([name, description, src]) => <article key={src} className="overflow-hidden rounded-[30px] border border-[#16195a]/10 bg-white shadow-[0_16px_48px_rgba(12,18,48,0.08)]"><video controls playsInline preload="metadata" className="aspect-video w-full bg-[#16195a]" aria-label={`${name}: ${description}`}><source src={src} type="video/mp4" />Ваш браузер не підтримує відтворення відео.</video><div className="p-6"><h3 className="text-2xl font-light text-black">{name}</h3><p className="mt-2 leading-7 text-black">{description}</p><a href={src} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-medium text-[#16195a] underline underline-offset-4">Відкрити відео окремо</a></div></article>)}</div></div></section>

    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24"><SectionTitle>Відгуки учасників</SectionTitle><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{reviewScreens.map((src, index) => <figure key={src} className="overflow-hidden rounded-[28px] border border-[#16195a]/10 bg-white p-3 shadow-[0_14px_40px_rgba(12,18,48,0.06)]"><Image src={src} alt={`Скріншот відгуку учасниці курсу ${index + 1}`} width={1179} height={1277} className="h-auto w-full rounded-[18px]" /></figure>)}</div></section>

    <section className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-24"><SectionTitle>Що зміниться для Вас після курсу?</SectionTitle><p className="mx-auto mt-7 max-w-4xl text-center text-lg leading-8 text-black">Ви не отримаєте чарівної інструкції, як виховати ідеального підлітка. Але отримаєте дещо значно цінніше — більше розуміння, більше опори і більше способів залишатися поруч.</p><div className="mt-12 grid gap-4 md:grid-cols-2">{outcomes.map((outcome) => <div key={outcome} className="rounded-[24px] border border-[#16195a]/10 bg-white p-6 text-lg leading-8 text-black shadow-[0_12px_34px_rgba(12,18,48,0.05)]">→ {outcome}</div>)}</div><p className="mx-auto mt-10 max-w-4xl text-center text-lg leading-8 text-black">І, можливо, найважливіше: Ви не будете самі. Поруч будуть фахівці, інші батьки й простір, у якому можна запитувати, сумніватися й шукати свої відповіді.</p></section>

    <section className="bg-[#f1eee8]"><div className="mx-auto max-w-4xl px-6 py-20 text-center md:px-10 md:py-24"><SectionTitle>Курс у християнському контексті</SectionTitle><p className="mt-9 text-lg leading-8 text-black md:text-xl">Ми не хочемо виховати дітей, які просто «правильно поводяться». Ми хочемо допомогти їм вирости людьми, які знають свою гідність, уміють любити, відповідально приймають рішення й мають внутрішню опору.</p><p className="mt-5 text-lg leading-8 text-black md:text-xl">Тому говоримо не лише про психологію, тіло, стосунки та безпеку, а й про віру — без моралізаторства, без залякування і без втрати близькості.</p></div></section>

    <section className="mx-auto max-w-[1100px] px-6 py-20 text-center md:px-10 md:py-24"><SectionTitle>Можливо, саме зараз Вам потрібна така підтримка</SectionTitle><p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-black md:text-xl">Не потрібно чекати першого великого конфлікту чи моменту, коли дитина зовсім перестане ділитися життям. Можна почати раніше — не щоб контролювати підлітка, а щоб краще його розуміти й поступово будувати новий етап ваших стосунків.</p><div className="mx-auto mt-12 max-w-2xl rounded-[32px] bg-[#16195a] p-8 text-white shadow-[0_20px_60px_rgba(22,25,90,0.23)]"><p className="text-3xl font-light">Участь у курсі — 2 600 грн</p><ul className="mt-7 space-y-3 text-left text-base leading-7 text-white"><li>✓ 10 записів зустрічей із фахівцями</li><li>✓ практичні завдання та вправи</li><li>✓ можливість навчатися у власному темпі</li><li>✓ досвід фахівців різних напрямків</li><li>✓ християнський контекст курсу</li></ul><div className="mt-8"><a href="https://secure.wayforpay.com/button/b8103a670a2f5" target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-white px-7 py-4 text-base font-medium text-[#16195a] transition hover:-translate-y-0.5">Хочу бути поруч</a></div></div></section>

    <section className="bg-[#f1eee8]"><div className="mx-auto max-w-[1100px] px-6 py-16 md:px-10 md:py-20"><Image src="/images/with-teenagers-footer.jpg" alt="Мама розмовляє з донькою-підлітком" width={1200} height={630} className="h-auto w-full rounded-[32px] shadow-[0_18px_60px_rgba(12,18,48,0.1)]" /></div></section>

    <section className="bg-[#16195a] text-white"><div className="mx-auto max-w-3xl px-6 py-20 text-center md:px-10 md:py-24"><h2 className="text-3xl font-light md:text-5xl">Залишились питання?</h2><p className="mt-7 text-lg text-white">Пишіть</p><div className="mt-10 space-y-3 text-lg"><a className="block hover:opacity-80" href="tel:+380974083750">+38 (097) 408 37 50</a><a className="block hover:opacity-80" href="mailto:iryna.tabaka@gmail.com">iryna.tabaka@gmail.com</a></div></div></section>
  </main>;
}
