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
  ["Сестра Антонія", "Фрагмент зустрічі про радість і біль материнства", "/videos/course-with-teenagers-sister-antonia.mp4"],
  ["Юлія Завійська", "Фрагмент зустрічі про підтримку здоров’я підлітка", "/videos/course-with-teenagers-yuliia-zaviiska.mp4"],
  ["Христина Комісар-Цар", "Фрагмент зустрічі з урологом-сексопатологом", "/videos/course-with-teenagers-khrystyna-komisar-tsar.mp4"],
  ["Людмила Гридковець", "Фрагмент зустрічі про статеве дозрівання підлітка", "/videos/course-with-teenagers-liudmyla-hrydkovets.mp4"],
];

function SectionTitle({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <h2 className={`mx-auto max-w-4xl text-center text-3xl font-light leading-tight md:text-5xl ${light ? "text-white" : "text-[#16195a]"}`}>{children}</h2>;
}

function PayButton({ children = "Долучитися до курсу" }: { children?: string }) {
  return <a href="https://secure.wayforpay.com/button/b8103a670a2f5" target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-[#16195a] px-7 py-4 text-base font-medium text-white shadow-[0_16px_38px_rgba(22,25,90,0.24)] transition hover:-translate-y-0.5 hover:bg-[#272b82]">{children}</a>;
}

export default function WithTeenagersPage() {
  return <main className="bg-[#fbf9f7] text-[#171717]">
    <section className="relative overflow-hidden bg-[#f1eee8]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,25,90,0.11),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(203,162,91,0.17),transparent_31%)]" /><div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-2"><div className="text-center lg:text-left"><p className="text-sm uppercase tracking-[0.24em] text-[#16195a]/65">Онлайн-курс для батьків підлітків</p><h1 className="mt-6 text-5xl font-light leading-[1.04] text-[#16195a] md:text-7xl">Я з Тобою.<br />Поруч.</h1><p className="mt-7 text-xl leading-8 text-[#1f1f1f]/85 md:text-2xl">Для батьків, які хочуть зберегти найцінніше — довіру своєї дитини.</p><p className="mt-5 text-base leading-7 text-[#1f1f1f]/75 md:text-lg">Підлітковий вік — не кінець близькості. Він може стати початком нових, більш зрілих стосунків.</p><div className="mt-9"><PayButton>Хочу пройти цей шлях разом зі своєю дитиною</PayButton></div></div><Image src="/images/sexual-education-hero.jpg" alt="Сім’я разом" width={1600} height={1067} priority className="h-auto w-full rounded-[34px] shadow-[0_24px_70px_rgba(12,18,48,0.15)]" /></div></section>

    <section className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-24"><SectionTitle>Знайомі такі думки?</SectionTitle><div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">{concerns.map((concern) => <div key={concern} className="rounded-[24px] border border-[#16195a]/10 bg-white p-6 text-lg leading-8 text-[#1f1f1f]/85 shadow-[0_12px_34px_rgba(12,18,48,0.05)]">«{concern}»</div>)}</div><p className="mx-auto mt-9 max-w-3xl text-center text-lg leading-8 text-[#1f1f1f]/80">Якщо Ви впізнали себе хоча б у кількох із цих думок — цей курс для Вас.</p></section>

    <section className="bg-white/70"><div className="mx-auto max-w-4xl px-6 py-20 text-center md:px-10 md:py-24"><SectionTitle>Бути батьками підлітка непросто. І це нормально.</SectionTitle><p className="mt-10 text-lg leading-8 text-[#1f1f1f]/85 md:text-xl">Підлітковий вік змінює не лише дітей — він змінює всю сім’ю. Батькам доводиться заново вчитися слухати, довіряти, відпускати, говорити про складне й залишатися поруч навіть тоді, коли здається, що дитина цього не потребує.</p><p className="mt-5 text-lg leading-8 text-[#1f1f1f]/85 md:text-xl">Підтримка потрібна не лише підліткам. Вона потрібна і нам, дорослим.</p></div></section>

    <section className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-2"><Image src="/images/sexual-education-workshop-table.jpg" alt="Довіра у розмові" width={1440} height={1080} className="h-auto w-full rounded-[32px] shadow-[0_18px_60px_rgba(12,18,48,0.1)]" /><div><SectionTitle>Уявіть…</SectionTitle><p className="mt-8 text-lg leading-8 text-[#1f1f1f]/85 md:text-xl">Ваш син повертається після складного дня й замість того, щоб замкнутися у кімнаті, сідає поруч. Донька переживає перше розчарування і приходить саме до Вас — не тому, що мусить, а тому, що знає: тут мене не засудять.</p><p className="mt-5 text-lg leading-8 text-[#1f1f1f]/85 md:text-xl">Саме такі стосунки ми хочемо допомогти будувати.</p></div></section>

    <section className="bg-[#16195a] text-white"><div className="mx-auto max-w-4xl px-6 py-20 text-center md:px-10 md:py-24"><SectionTitle light>Цей курс — не лише про підлітків. Він і про батьків.</SectionTitle><p className="mt-10 text-lg leading-8 text-white/85 md:text-xl">На курсі Ви не просто слухатимете лекції: виконуватимете практичні завдання, навчитеся краще розуміти себе, побачите підлітковий світ очима своєї дитини й відкриєте, що навіть у найнепростішому віці можна залишатися близькими.</p><p className="mt-7 text-base leading-7 text-white/75">Курс створено командою фахівців, яких об’єднують знання, мудрість, людяність і християнські цінності.</p></div></section>

    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24"><SectionTitle>10 фахівців поруч із батьками підлітків</SectionTitle><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{experts.map(([name, role, topic], index) => <article key={name} className="rounded-[28px] border border-[#16195a]/10 bg-white p-7 shadow-[0_14px_40px_rgba(12,18,48,0.06)]"><div className="text-sm tracking-[0.2em] text-[#16195a]/55">{String(index + 1).padStart(2, "0")}</div><h3 className="mt-4 text-2xl font-light text-[#16195a]">{name}</h3><p className="mt-2 text-sm leading-6 text-[#16195a]/70">{role}</p><p className="mt-5 text-base leading-7 text-[#1f1f1f]/80">«{topic}»</p></article>)}</div></section>

    <section className="bg-white/70"><div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24"><SectionTitle>Фрагменти зустрічей</SectionTitle><p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-[#1f1f1f]/75">Короткі фрагменти розмов із запрошеними фахівцями. Дивіться безпосередньо на сторінці.</p><div className="mt-12 grid gap-7 lg:grid-cols-2">{videos.map(([name, description, src]) => <article key={src} className="overflow-hidden rounded-[30px] border border-[#16195a]/10 bg-white shadow-[0_16px_48px_rgba(12,18,48,0.08)]"><video controls preload="metadata" className="aspect-video w-full bg-[#16195a]" aria-label={`${name}: ${description}`}><source src={src} type="video/mp4" />Ваш браузер не підтримує відтворення відео.</video><div className="p-6"><h3 className="text-2xl font-light text-[#16195a]">{name}</h3><p className="mt-2 leading-7 text-[#1f1f1f]/75">{description}</p></div></article>)}</div></div></section>

    <section className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-24"><SectionTitle>Що зміниться для Вас після курсу?</SectionTitle><p className="mx-auto mt-7 max-w-4xl text-center text-lg leading-8 text-[#1f1f1f]/82">Ви не отримаєте чарівної інструкції, як виховати ідеального підлітка. Але отримаєте дещо значно цінніше — більше розуміння, більше опори і більше способів залишатися поруч.</p><div className="mt-12 grid gap-4 md:grid-cols-2">{outcomes.map((outcome) => <div key={outcome} className="rounded-[24px] border border-[#16195a]/10 bg-white p-6 text-lg leading-8 shadow-[0_12px_34px_rgba(12,18,48,0.05)]">→ {outcome}</div>)}</div><p className="mx-auto mt-10 max-w-4xl text-center text-lg leading-8 text-[#1f1f1f]/80">І, можливо, найважливіше: Ви не будете самі. Поруч будуть фахівці, інші батьки й простір, у якому можна запитувати, сумніватися й шукати свої відповіді.</p></section>

    <section className="bg-[#f1eee8]"><div className="mx-auto max-w-4xl px-6 py-20 text-center md:px-10 md:py-24"><SectionTitle>Курс у християнському контексті</SectionTitle><p className="mt-9 text-lg leading-8 text-[#1f1f1f]/85 md:text-xl">Ми не хочемо виховати дітей, які просто «правильно поводяться». Ми хочемо допомогти їм вирости людьми, які знають свою гідність, уміють любити, відповідально приймають рішення й мають внутрішню опору.</p><p className="mt-5 text-lg leading-8 text-[#1f1f1f]/85 md:text-xl">Тому говоримо не лише про психологію, тіло, стосунки та безпеку, а й про віру — без моралізаторства, без залякування і без втрати близькості.</p></div></section>

    <section className="mx-auto max-w-[1100px] px-6 py-20 text-center md:px-10 md:py-24"><SectionTitle>Можливо, саме зараз Вам потрібна така підтримка</SectionTitle><p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-[#1f1f1f]/85 md:text-xl">Не потрібно чекати першого великого конфлікту чи моменту, коли дитина зовсім перестане ділитися життям. Можна почати раніше — не щоб контролювати підлітка, а щоб краще його розуміти й поступово будувати новий етап ваших стосунків.</p><div className="mx-auto mt-12 max-w-2xl rounded-[32px] bg-[#16195a] p-8 text-white shadow-[0_20px_60px_rgba(22,25,90,0.23)]"><p className="text-3xl font-light">Участь у курсі — 2 600 грн</p><ul className="mt-7 space-y-3 text-left text-base leading-7 text-white/85"><li>✓ 10 онлайн-зустрічей із фахівцями</li><li>✓ практичні завдання та вправи</li><li>✓ записи зустрічей — навчання у власному темпі</li><li>✓ досвід фахівців різних напрямків</li><li>✓ християнський контекст курсу</li></ul><div className="mt-8"><a href="https://secure.wayforpay.com/button/b8103a670a2f5" target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-white px-7 py-4 text-base font-medium text-[#16195a] transition hover:-translate-y-0.5">Хочу бути поруч</a></div></div></section>

    <section className="bg-[#16195a] text-white"><div className="mx-auto max-w-3xl px-6 py-20 text-center md:px-10 md:py-24"><h2 className="text-3xl font-light md:text-5xl">Залишились питання?</h2><p className="mt-7 text-lg text-white/85">Пишіть</p><div className="mt-10 space-y-3 text-lg"><a className="block hover:opacity-80" href="tel:+380974083750">+38 (097) 408 37 50</a><a className="block hover:opacity-80" href="mailto:iryna.tabaka@gmail.com">iryna.tabaka@gmail.com</a></div></div></section>
  </main>;
}
