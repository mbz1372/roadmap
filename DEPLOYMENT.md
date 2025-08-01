# راهنمای استقرار | Deployment Guide

## استقرار در Vercel | Deploying to Vercel

### روش اول: استقرار خودکار از GitHub | Method 1: Automatic deployment from GitHub

1. **آپلود پروژه به GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Persian roadmap platform"
   git branch -M main
   git remote add origin https://github.com/your-username/faroadmap.git
   git push -u origin main
   ```

2. **اتصال به Vercel**:
   - به [vercel.com](https://vercel.com) مراجعه کنید
   - با اکانت GitHub خود وارد شوید
   - روی "New Project" کلیک کنید
   - مخزن `faroadmap` را انتخاب کنید
   - روی "Deploy" کلیک کنید

### روش دوم: استقرار مستقیم | Method 2: Direct deployment

```bash
# نصب Vercel CLI
npm install -g vercel

# ورود به اکانت
vercel login

# استقرار پروژه
vercel

# برای استقرار در پروداکشن
vercel --prod
```

## تنظیمات محیط | Environment Variables

در Vercel Dashboard، متغیرهای زیر را اضافه کنید:

```env
# اختیاری - برای Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-vercel-analytics-id
```

## تنظیمات دامنه سفارشی | Custom Domain Setup

1. در Vercel Dashboard به تب "Domains" بروید
2. دامنه مورد نظر را اضافه کنید (مثل `faroadmap.ir`)
3. رکوردهای DNS را طبق راهنمای Vercel تنظیم کنید:
   ```
   Type: A
   Name: @
   Value: 76.76.19.61
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

## بهینه‌سازی عملکرد | Performance Optimization

پروژه شامل تنظیمات زیر برای بهینه‌سازی است:

- ✅ **Image Optimization**: بهینه‌سازی خودکار تصاویر
- ✅ **Bundle Optimization**: کاهش حجم فایل‌های JavaScript
- ✅ **Static Generation**: تولید صفحات استاتیک
- ✅ **Font Optimization**: بهینه‌سازی فونت‌های وب
- ✅ **Caching Headers**: تنظیم مناسب Cache-Control
- ✅ **Compression**: فشرده‌سازی فایل‌ها

## مانیتورینگ و Analytics | Monitoring & Analytics

### Vercel Analytics
```bash
npm install @vercel/analytics
```

سپس در `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Google Analytics (اختیاری)
متغیر `NEXT_PUBLIC_GA_ID` را در تنظیمات Vercel اضافه کنید.

## SSL و امنیت | SSL & Security

Vercel به طور خودکار:
- گواهی SSL رایگان ارائه می‌دهد
- HTTPS را فعال می‌کند
- Security headers را تنظیم می‌کند

## مانیتورینگ خطاها | Error Monitoring

برای مانیتورینگ خطاها می‌توانید از Sentry استفاده کنید:

```bash
npm install @sentry/nextjs
```

## بکاپ و بازیابی | Backup & Recovery

- کدهای پروژه در GitHub محفوظ هستند
- Vercel به طور خودکار deployment history نگه می‌دارد
- امکان rollback سریع به نسخه‌های قبلی وجود دارد

## نکات مهم | Important Notes

1. **RTL Support**: اطمینان حاصل کنید که تنظیمات RTL در تمام صفحات درست کار می‌کند
2. **Persian Font**: فونت Vazirmatn از Google Fonts بارگذاری می‌شود
3. **SEO**: Meta tags برای بهینه‌سازی موتور جستجو تنظیم شده‌اند
4. **Responsive**: طراحی برای تمام اندازه صفحه‌ها بهینه است

## عیب‌یابی | Troubleshooting

### مشکلات رایج:

1. **خطای Build**:
   ```bash
   npm run build
   npm run lint
   ```

2. **مشکل Font Loading**:
   - بررسی اتصال اینترنت
   - کنترل loading fonts در Network tab

3. **مشکل RTL**:
   - بررسی `dir="rtl"` در HTML tag
   - کنترل CSS direction properties

## پشتیبانی | Support

در صورت بروز مشکل:
- Issues در GitHub: [github.com/faroadmap/faroadmap/issues](https://github.com/faroadmap/faroadmap/issues)
- تلگرام: [@faroadmap](https://t.me/faroadmap)
- ایمیل: contact@faroadmap.ir

---

**موفق باشید! 🚀**