# Hamza Turhan – Interview Portfolio

Next.js 14 + TypeScript + Tailwind CSS ile hazırlanmış portföy ve mülakat cevapları sitesi.

## Geliştirme

- Node.js 18+ gereklidir
- Kurulum: `npm install`
- Geliştirme: `npm run dev` (http://localhost:3000)
- Build: `npm run build` ve `npm start`

## SEO

- `app/robots.ts` ve `app/sitemap.ts` ile dinamik robots/sitemap servis edilir.
- Canonical sayfa: `/` (tek sayfa uygulaması). Bölüm anchor’ları (`#projects`, vb.) sitemap’e eklenmez.

## Dağıtım (Vercel)

- Vercel otomatik olarak `npm run build` çalıştırır.
- `vercel.json` güvenlik header’larını ve cache ayarlarını içerir.

## Notlar

- `index_fixed.html` ve `temp_index.html` önceki statik prototiplerdir; üretimde kullanılmaz.
- `robots.txt` ve `sitemap.xml` kökte bulunuyor fakat Next.js tarafından dağıtılmaz; yerlerine `app/robots.ts` ve `app/sitemap.ts` kullanılır.
- Veriler `src/data/*` altında, bileşenler `src/components/*` altındadır.

