import Link from "next/link";

const courses = [
  {
    title: "ВІДЕОКУРС",
    href: "/courses/video-course",
  },
  {
    title: "СТАТЕВЕ ВИХОВАННЯ",
    href: "/courses/sexual-education",
  },
  {
    title: '"ФОРМУЛА ЛЮБОВІ"',
    href: "/courses/formula-love",
  },
  {
    title: 'ТРЕНІНГ "ЗАКОХАТИСЯ ЗНОВУ"',
    href: "/courses/fall-in-love-again",
  },
  {
    title: 'ДЕМО-ВЕРСІЯ "ФОРМУЛИ ЛЮБОВІ"',
    href: "/courses/formula-love-demo",
  },
  {
    title: "ПРО МЕНОПАУЗУ З ЛЮБОВ'Ю. ЯК ПІДГОТУВАТИСЯ І ЯК ПЕРЕЖИТИ.",
    href: "/courses/menopause-with-love",
  },
  {
    title: "КУРС ДЛЯ ПАР, ЩО ЗУСТРІЧАЮТЬСЯ",
    href: "/courses/couples-course",
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ee] px-6 py-12 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#9a6d5b]">
            Курси
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[0.04em] text-[#3c2b25] md:text-5xl">
            Оберіть курс
          </h1>
          <p className="mt-4 text-base leading-7 text-[#6d544b] md:text-lg">
            Перейдіть до потрібного курсу, щоб переглянути детальну інформацію.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.href}
              href={course.href}
              className="group flex min-h-[180px] rounded-[28px] border border-[#e7d7cf] bg-white/85 p-6 shadow-[0_18px_45px_rgba(90,60,50,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#d9b9aa] hover:shadow-[0_24px_60px_rgba(90,60,50,0.12)]"
            >
              <div className="flex h-full w-full flex-col justify-between">
                <h2 className="text-xl font-semibold leading-8 text-[#3c2b25]">
                  {course.title}
                </h2>

                <div className="mt-8 inline-flex items-center text-sm font-semibold uppercase tracking-[0.2em] text-[#8a5d4f]">
                  Перейти
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}