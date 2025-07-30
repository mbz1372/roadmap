import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "فارودمپ | نقشه راه توسعه‌دهندگان ایرانی",
  description: "مسیرهای یادگیری کامل برای توسعه‌دهندگان نرم‌افزار - از مبتدی تا پیشرفته",
  keywords: ["roadmap", "نقشه راه", "برنامه‌نویسی", "توسعه نرم‌افزار", "فارسی"],
  authors: [{ name: "فارودمپ" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "فارودمپ | نقشه راه توسعه‌دهندگان ایرانی",
    description: "مسیرهای یادگیری کامل برای توسعه‌دهندگان نرم‌افزار",
    type: "website",
    locale: "fa_IR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="font-vazir">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}