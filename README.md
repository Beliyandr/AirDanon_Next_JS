# AirDanon Landing

Лендинг AirDanon на Next.js, React, TypeScript и Tailwind CSS.

## Локальный запуск

В PowerShell используйте `npm.cmd`, потому что системная политика Windows может блокировать `npm.ps1`:

```powershell
npm.cmd install
npm.cmd run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

Проверка production-сборки:

```powershell
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
npm.cmd run start
```

После `build` команда `start` показывает статическую папку `out`.

## Структура

```text
app/                 Next.js App Router и глобальные стили
components/layout/   Header и Footer
components/sections/ Секции лендинга
components/ui/       Переиспользуемые UI-элементы
data/                 Контент каталога и преимуществ
types/                TypeScript-типы
public/images/        Локальные изображения
```

## Публикация на GitHub Pages

1. Создайте пустой репозиторий на GitHub.
2. Отправьте проект в ветку `main`.
3. В репозитории откройте **Settings → Pages**.
4. В поле **Source** выберите **GitHub Actions**.
5. Workflow `.github/workflows/deploy-pages.yml` автоматически проверит типы, линтинг, соберет сайт и опубликует папку `out`.

Команды для первого push:

```powershell
git init
git add .
git commit -m "Initial AirDanon landing"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

## Другие варианты публикации

### Vercel

Самый простой вариант для Next.js: импортируйте GitHub-репозиторий на Vercel и нажмите Deploy. Конфигурация определяется автоматически.

### Cloudflare Pages

- Build command: `npm run build`
- Output directory: `out`
- Node.js: `22`

### Обычный хостинг

После `npm run build` загрузите содержимое папки `out` на любой статический хостинг или CDN.

## Перед публикацией

Замените временные ссылки Telegram, Instagram и TikTok в `components/sections/Contact.tsx`, а временный знак бренда в `components/ui/Brand.tsx`.
