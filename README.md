# AMRITA ACADEMY — Академия Амрита

Одностраничный сайт духовной платформы **Академия Амрита** — пространства внутреннего
развития, исцеления и раскрытия потенциала человека.

Светлый, «дышащий» дизайн в фирменной бело-золотой палитре, взятой напрямую из логотипа
(сакральная геометрия золотом по белому).

## Технологии

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — дизайн-токены из логотипа
- **Framer Motion** — появление секций при скролле, анимация логотипа
- **GSAP ScrollTrigger** — параллакс
- Статический экспорт (`output: "export"`) → **GitHub Pages**

## Структура

| Раздел | Компонент | Якорь |
| --- | --- | --- |
| Шапка | `components/Header.tsx` | — |
| Hero (видео) | `components/Hero.tsx` | `#hero` |
| Об Академии | `components/About.tsx` | `#about` |
| Направления (9) | `components/Directions.tsx` | `#directions` |
| Программы | `components/Programs.tsx` | `#programs` |
| События | `components/Events.tsx` | `#events` |
| Основатель | `components/Founder.tsx` | `#founder` |
| Философия | `components/Philosophy.tsx` | `#philosophy` |
| Контакты | `components/Contact.tsx` | `#contact` |
| Подвал | `components/Footer.tsx` | — |

Весь текст и данные — в `lib/content.ts`. Дизайн-токены — в `tailwind.config.ts` и `app/globals.css`.
Ассеты (логотип, видео, фото основателя) — в `public/assets/`.

## Разработка

```bash
npm install
npm run dev      # http://localhost:3000
```

## Сборка и деплой

```bash
npm run build    # статический экспорт в ./out
```

Сайт публикуется на GitHub Pages по адресу
**https://193t1mes.github.io/amrita-academy/** (`basePath: /amrita-academy`).
Содержимое `./out` пушится в ветку `gh-pages`; источник Pages = `gh-pages` `/`.
