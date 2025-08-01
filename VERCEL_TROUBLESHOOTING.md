# 🔧 راهنمای حل مشکل Vercel | Vercel Troubleshooting Guide

## مشکل: تغییرات در Vercel نمایش داده نمی‌شود

### ✅ راه‌حل‌های انجام شده:

1. **Cache Busting Headers اضافه شد**
2. **generateBuildId در next.config.ts**
3. **تنظیمات vercel.json بهبود یافت**
4. **Deployment trigger file ایجاد شد**

---

## 🚀 مراحل حل مشکل (مرتب شده):

### 1. **پاک کردن کش مرورگر**
```bash
# در مرورگر:
- Chrome/Edge: Ctrl + Shift + R (Windows) یا Cmd + Shift + R (Mac)
- Firefox: Ctrl + F5 (Windows) یا Cmd + Shift + R (Mac)
- Safari: Cmd + Option + R

# یا استفاده از DevTools:
F12 → Network tab → Disable cache ✓ → Reload
```

### 2. **بررسی Vercel Dashboard**
- به https://vercel.com برید
- پروژه خود را انتخاب کنید
- در تب **"Deployments"** آخرین deployment را بررسی کنید
- اگر deployment موفق بوده اما تغییرات نمایش داده نمی‌شود، مرحله بعد

### 3. **Force کردن Deployment جدید**

#### روش A: از Vercel Dashboard
```bash
1. Vercel Dashboard → Your Project
2. تب "Deployments" 
3. "Redeploy" روی آخرین deployment
4. "Use existing Build Cache" را غیرفعال کنید
5. "Redeploy" کلیک کنید
```

#### روش B: تغییر کوچک در کد
```bash
# تغییر فایل trigger:
echo "# Force deploy $(date)" >> DEPLOYMENT_TRIGGER.md
git add .
git commit -m "Force deploy: $(date)"
git push
```

### 4. **بررسی تنظیمات پروژه**

#### Domain Settings:
- مطمئن شوید که دامنه‌تان درست تنظیم شده
- DNS records را بررسی کنید

#### Environment Variables:
- اگر متغیر محیطی جدیدی اضافه کرده‌اید، در Vercel تنظیم کنید

### 5. **حل مشکلات خاص**

#### مشکل A: صفحه 404 می‌دهد
```bash
# بررسی کنید که routes درست تعریف شده‌اند
# در next.config.ts:
async redirects() {
  return [
    {
      source: '/roadmaps',
      destination: '/#roadmaps',
      permanent: true,
    },
  ];
}
```

#### مشکل B: CSS لود نمی‌شود
```bash
# اطمینان از import صحیح globals.css
# در app/layout.tsx:
import './globals.css'
```

#### مشکل C: فونت فارسی نمایش داده نمی‌شود
```css
/* در globals.css */
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap');

html {
  direction: rtl;
  font-family: 'Vazirmatn', sans-serif;
}
```

#### مشکل D: خطای SSL یا HTTPS
اگر پس از اتصال دامنه در هنگام دسترسی به سایت با HTTPS با خطا مواجه می‌شوید، مراحل زیر را دنبال کنید:

- در **Vercel Dashboard** به تب **Domains** بروید و از وضعیت **Valid** بودن دامنه مطمئن شوید.
- با ابزارهایی مثل `dig` یا `nslookup` رکوردهای DNS (A/CNAME) را چک کنید تا به آدرس‌های Vercel اشاره داشته باشند.
- دستور `openssl s_client -connect yourdomain.com:443` را اجرا کنید تا زنجیره گواهی و تطابق نام دامنه بررسی شود.
- در صورت مشاهده پیام‌های **untrusted** یا **certificate mismatch** کمی صبر کنید تا DNS به‌روز شود یا دامنه را دوباره در Vercel اضافه کنید.
- پاک کردن کش مرورگر یا استفاده از مرورگر دیگر نیز می‌تواند مفید باشد.

#### مشکل E: خطای "ENOENT: no such file or directory, open package.json"
اگر در لاگ‌های Build با این خطا روبه‌رو شدید، احتمالاً ریشه پروژه به درستی تنظیم نشده است. در فایل `vercel.json` مقدار `rootDirectory` را برابر با `faroadmap` قرار دهید یا در Vercel Dashboard بخش **Build & Output Settings** مسیر را مشخص کنید.


برای آشنایی با بهترین شیوه‌های امنیت و مدیریت SSL، بخش DevOps در [roadmap.sh](https://roadmap.sh/devops) را مطالعه کنید.

---

## 🔍 دیاگنوز مشکل:

### 1. بررسی Build Logs
```bash
# در Vercel Dashboard:
Project → Deployments → کلیک روی deployment → View Build Logs
```

### 2. بررسی Runtime Logs  
```bash
# در Vercel Dashboard:
Project → Functions → Runtime Logs
```

### 3. تست Local Build
```bash
npm run build
npm start
# آیا در localhost:3000 درست کار می‌کند؟
```

---

## ⚡ راه‌حل‌های سریع:

### 1. **کش Browser**
```javascript
// اضافه کردن timestamp به URLs
const cacheBuster = `?v=${Date.now()}`;
```

### 2. **Hard Refresh**
```bash
# در مرورگر:
Ctrl + Shift + Del → Clear browsing data → All time
```

### 3. **Check Different Browser**
```bash
# تست در مرورگر دیگر یا حالت incognito
```

### 4. **DNS Flush**
```bash
# Windows:
ipconfig /flushdns

# Mac:
sudo dscacheutil -flushcache

# Linux:
sudo systemctl restart systemd-resolved
```

---

## 🆘 اگر همچنان مشکل دارید:

### 1. **Delete & Redeploy**
```bash
# در Vercel Dashboard:
Settings → Advanced → Delete Project
# سپس دوباره import کنید
```

### 2. **Change Framework Preset**
```bash
# در Vercel Dashboard:
Settings → Framework Preset → Next.js
```

### 3. **تماس با پشتیبانی**
- GitHub Issues: [Project Issues](https://github.com/your-repo/issues)
- Vercel Community: https://github.com/vercel/vercel/discussions

---

## ✅ Check List نهایی:

- [ ] Cache مرورگر پاک شده؟
- [ ] آخرین commit در GitHub موجود است؟
- [ ] Vercel deployment موفق بوده؟
- [ ] Domain settings درست است؟
- [ ] در incognito/مرورگر دیگر تست شده؟
- [ ] Build locally موفق است؟

---

**نکته مهم:** بعد از هر تغییر، ۲-۳ دقیقه صبر کنید تا Vercel CDN به‌روز شود.

## 📞 پشتیبانی

اگر مشکل همچنان ادامه دارد:
- تلگرام: [@faroadmap](https://t.me/faroadmap)  
- ایمیل: contact@faroadmap.ir
- GitHub: [Issues](https://github.com/faroadmap/faroadmap/issues)

---
**تاریخ آپدیت:** 2025-08-03
