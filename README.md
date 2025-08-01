# فارودمپ | FaRoadmap

نقشه راه کامل توسعه‌دهندگان ایرانی - A comprehensive roadmap platform for Iranian developers

## 📖 درباره پروژه | About

فارودمپ یک پلتفرم آموزشی رایگان و متن‌باز است که نقشه‌راه‌های کاملی برای یادگیری مختلف حوزه‌های توسعه نرم‌افزار ارائه می‌دهد. این پروژه ویژه برای جامعه توسعه‌دهندگان ایرانی طراحی شده و تمامی محتوا به زبان فارسی و با رابط کاربری راست به چپ (RTL) ارائه می‌شود.

FaRoadmap is a free and open-source educational platform that provides comprehensive roadmaps for learning various software development fields. This project is specifically designed for the Iranian developer community and offers all content in Persian with right-to-left (RTL) user interface.

## ✨ ویژگی‌ها | Features

- 🗺️ **نقشه‌راه‌های کامل**: مسیرهای یادگیری ساختاریافته از مبتدی تا پیشرفته
- 🌙 **پشتیبانی از حالت تاریک**: تجربه کاربری بهینه در هر زمانی از شبانه‌روز
- 📱 **طراحی ریسپانسیو**: بهینه‌سازی شده برای تمامی دستگاه‌ها
- 🎯 **پیگیری پیشرفت**: امکان علامت‌گذاری و پیگیری وضعیت یادگیری
- 🔗 **منابع کیفی**: لینک به بهترین منابع آموزشی هر حوزه
- ⚡ **عملکرد بالا**: ساخته شده با Next.js 14 و بهینه‌سازی‌های مدرن

## 🚀 شروع سریع | Quick Start

### نیازمندی‌ها | Requirements

- Node.js 18+ 
- npm or yarn

### نصب | Installation

```bash
# کلون کردن پروژه
git clone https://github.com/your-username/faroadmap.git
cd faroadmap

# نصب وابستگی‌ها
npm install

# اجرای سرور توسعه
npm run dev
```

پروژه روی آدرس `http://localhost:3000` در دسترس خواهد بود.

### ساخت برای پروداکشن | Production Build

```bash
# ساخت برای پروداکشن
npm run build

# شروع سرور پروداکشن
npm start
```

## 🛠️ تکنولوژی‌های استفاده شده | Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Font**: Vazirmatn (Persian font)
- **Theme**: next-themes (Dark mode support)
- **Deployment**: Vercel

## 📁 ساختار پروژه | Project Structure

```
faroadmap/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── (main)/            # Main layout group
│   │   ├── roadmap/           # Dynamic roadmap pages
│   │   ├── about/             # About page
│   │   ├── faq/               # FAQ page
│   │   ├── contact/           # Contact page
│   │   └── not-found.tsx      # 404 page
│   ├── components/            # Reusable components
│   │   ├── ui/                # shadcn/ui components
│   │   ├── header.tsx         # Header component
│   │   ├── footer.tsx         # Footer component
│   │   └── roadmap-tree.tsx   # Interactive roadmap tree
│   ├── data/                  # Static data
│   │   └── roadmaps.ts        # Roadmap data
│   ├── types/                 # TypeScript types
│   │   └── roadmap.ts         # Roadmap type definitions
│   └── lib/                   # Utility functions
│       └── utils.ts           # Helper functions
├── public/                    # Static assets
└── docs/                      # Documentation
```

## 🎨 طراحی و UI/UX | Design & UI/UX

- **فونت**: Vazirmatn برای پشتیبانی کامل از زبان فارسی
- **جهت‌یابی**: راست به چپ (RTL) برای تجربه بهینه فارسی
- **رنگ‌بندی**: سیستم رنگ‌بندی انطباقی با حالت روشن و تاریک
- **ریسپانسیو**: طراحی Mobile-first با بریک‌پوینت‌های مدرن

## 🗺️ نقشه‌راه‌های موجود | Available Roadmaps

1. **توسعه فرانت‌اند** - Frontend Development
2. **توسعه بک‌اند** - Backend Development  
3. **توسعه فول‌استک** - Full Stack Development
4. **DevOps** - DevOps Engineering
5. **توسعه موبایل** - Mobile Development
6. **هوش مصنوعی** - AI/ML Development

## 🤝 مشارکت | Contributing

ما از هر نوع مشارکتی استقبال می‌کنیم! از گزارش باگ تا اضافه کردن ویژگی‌های جدید.

### نحوه مشارکت:

1. Fork کردن پروژه
2. ایجاد branch جدید (`git checkout -b feature/amazing-feature`)
3. Commit کردن تغییرات (`git commit -m 'Add some amazing feature'`)
4. Push کردن به branch (`git push origin feature/amazing-feature`)
5. باز کردن Pull Request

## 📄 لایسنس | License

این پروژه تحت لایسنس MIT منتشر شده است. برای اطلاعات بیشتر فایل [LICENSE](LICENSE) را مطالعه کنید.

## 🙏 تشکر | Acknowledgments

- [roadmap.sh](https://roadmap.sh) برای الهام
- جامعه توسعه‌دهندگان ایران
- تمامی مشارکت‌کنندگان در پروژه

## 📞 تماس | Contact

- **وب‌سایت**: [faroadmap.ir](https://faroadmap.ir)
- **ایمیل**: contact@faroadmap.ir
- **تلگرام**: [@faroadmap](https://t.me/faroadmap)
- **گیت‌هاب**: [github.com/faroadmap](https://github.com/faroadmap)

---

**ساخته شده با ❤️ برای جامعه توسعه‌دهندگان ایران**

*Made with ❤️ for Iranian Developer Community*