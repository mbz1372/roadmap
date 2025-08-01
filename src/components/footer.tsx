import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    roadmaps: [
      { name: "توسعه فرانت‌اند", href: "/roadmap/frontend" },
      { name: "توسعه بک‌اند", href: "/roadmap/backend" },
      { name: "توسعه فول‌استک", href: "/roadmap/fullstack" },
      { name: "DevOps", href: "/roadmap/devops" },
    ],
    resources: [
      { name: "درباره ما", href: "/about" },
      { name: "سوالات متداول", href: "/faq" },
      { name: "تماس با ما", href: "/contact" },
      { name: "قوانین استفاده", href: "/terms" },
    ],
    community: [
      { name: "گیت‌هاب", href: "https://github.com" },
      { name: "تلگرام", href: "https://t.me" },
      { name: "توییتر", href: "https://twitter.com" },
      { name: "لینکدین", href: "https://linkedin.com" },
    ],
  };

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 space-x-reverse mb-4">
              <div className="text-2xl font-bold text-primary">🗺️</div>
              <span className="text-xl font-bold">فارودمپ</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-6">
              نقشه راه کامل و جامع برای یادگیری توسعه نرم‌افزار. از مبتدی تا پیشرفته،
              همراه شما هستیم.
            </p>
          </div>

          {/* Roadmaps */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">نقشه‌راه‌ها</h3>
            <ul className="space-y-2">
              {footerLinks.roadmaps.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">منابع</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">جامعه</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} فارودمپ. تمامی حقوق محفوظ است.
          </p>
          <p className="text-muted-foreground text-sm mt-2 sm:mt-0">
            ساخته شده با ❤️ برای جامعه توسعه‌دهندگان ایران
          </p>
        </div>
      </div>
    </footer>
  );
}