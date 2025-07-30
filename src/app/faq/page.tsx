import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata = {
  title: "سوالات متداول | فارودمپ",
  description: "پاسخ به سوالات متداول درباره نقشه‌راه‌های یادگیری توسعه نرم‌افزار",
};

export default function FAQPage() {
  const faqs = [
    {
      id: "what-is-faroadmap",
      question: "فارودمپ چیست؟",
      answer: "فارودمپ یک پلتفرم آموزشی رایگان است که نقشه‌راه‌های کاملی برای یادگیری مختلف حوزه‌های توسعه نرم‌افزار ارائه می‌دهد. هدف ما کمک به توسعه‌دهندگان ایرانی برای یافتن مسیر مناسب یادگیری از مبتدی تا پیشرفته است."
    },
    {
      id: "free-platform",
      question: "آیا استفاده از فارودمپ رایگان است؟",
      answer: "بله، فارودمپ کاملاً رایگان است و همیشه هم خواهد بود. ما معتقدیم که دانش باید برای همه در دسترس باشد. شما می‌توانید به تمامی نقشه‌راه‌ها و منابع بدون پرداخت هیچ هزینه‌ای دسترسی داشته باشید."
    },
    {
      id: "beginner-friendly",
      question: "آیا این نقشه‌راه‌ها برای مبتدیان مناسب است؟",
      answer: "بله، تمامی نقشه‌راه‌ها از سطح مبتدی شروع می‌شوند. ما مسیری تدریجی طراحی کرده‌ایم که شما را قدم به قدم از مفاهیم ابتدایی به سطوح پیشرفته‌تر هدایت می‌کند. حتی اگر هیچ تجربه‌ای در برنامه‌نویسی نداشته باشید، می‌توانید از فارودمپ استفاده کنید."
    },
    {
      id: "how-updated",
      question: "نقشه‌راه‌ها چقدر به‌روز هستند؟",
      answer: "ما مرتباً نقشه‌راه‌ها را بررسی و به‌روزرسانی می‌کنیم تا مطمئن شویم که با آخرین تکنولوژی‌ها و ترندهای بازار همگام هستند. همچنین از بازخوردهای جامعه توسعه‌دهندگان برای بهبود مستمر محتوا استفاده می‌کنیم."
    },
    {
      id: "persian-content",
      question: "آیا تمام منابع به زبان فارسی هستند؟",
      answer: "تمام توضیحات و راهنمایی‌های فارودمپ به زبان فارسی هستند. با این حال، برخی از منابع ارجاع شده ممکن است به زبان انگلیسی باشند، چرا که بسیاری از بهترین منابع فنی در این زبان در دسترس هستند. ما سعی می‌کنیم حتی‌المقدور منابع فارسی معرفی کنیم."
    },
    {
      id: "track-progress",
      question: "چگونه می‌توانم پیشرفت خود را پیگیری کنم؟",
      answer: "در هر نقشه راه، شما می‌توانید وضعیت هر بخش را به عنوان 'شروع نشده'، 'در حال انجام' یا 'تکمیل شده' علامت‌گذاری کنید. این امکان به شما کمک می‌کند تا پیشرفت خود را ببینید و بدانید چه مرحله‌ای از یادگیری هستید."
    },
    {
      id: "how-long",
      question: "یادگیری هر نقشه راه چقدر زمان می‌برد؟",
      answer: "زمان مورد نیاز بستگی به سطح پیش‌زمینه شما، زمانی که روزانه اختصاص می‌دهید و سرعت یادگیری شما دارد. ما برای هر نقشه راه و هر بخش تخمینی از زمان مورد نیاز ارائه می‌دهیم، اما این زمان‌ها تنها راهنما هستند."
    },
    {
      id: "contribute",
      question: "چگونه می‌توانم در بهبود فارودمپ مشارکت کنم؟",
      answer: "ما از هر نوع مشارکتی استقبال می‌کنیم! شما می‌توانید منابع جدید پیشنهاد دهید، اشتباهات را گزارش کنید، بهبودهایی برای نقشه‌راه‌ها ارائه دهید یا حتی در توسعه تکنیکی پلتفرم مشارکت کنید. کدهای فارودمپ به صورت متن‌باز در گیت‌هاب در دسترس هستند."
    },
    {
      id: "best-roadmap",
      question: "کدام نقشه راه برای شروع مناسب است؟",
      answer: "انتخاب نقشه راه بستگی به علاقه‌مندی‌ها و اهداف شما دارد. اگر علاقه‌مند به طراحی رابط کاربری و تعامل با کاربران هستید، نقشه راه فرانت‌اند مناسب است. اگر دوست دارید روی منطق برنامه‌ها و پایگاه داده کار کنید، بک‌اند را انتخاب کنید. برای کسانی که می‌خواهند هر دو حوزه را یاد بگیرند، نقشه راه فول‌استک ایده‌آل است."
    },
    {
      id: "job-opportunities",
      question: "آیا این نقشه‌راه‌ها برای پیدا کردن شغل مفید هستند؟",
      answer: "بله، تمامی نقشه‌راه‌ها بر اساس نیازهای واقعی بازار کار طراحی شده‌اند. ما تکنولوژی‌ها و مهارت‌هایی را معرفی می‌کنیم که شرکت‌ها در حال حاضر به دنبال آن‌ها هستند. با تکمیل هر نقشه راه، شما مهارت‌های لازم برای شروع حرفه‌ای در آن حوزه را خواهید داشت."
    },
    {
      id: "mobile-friendly",
      question: "آیا می‌توانم از موبایل استفاده کنم؟",
      answer: "بله، فارودمپ کاملاً برای استفاده در موبایل و تبلت بهینه‌سازی شده است. شما می‌توانید از هر دستگاهی با مرورگر وب به راحتی از پلتفرم استفاده کنید."
    },
    {
      id: "support",
      question: "اگر سوالی داشته باشم، از کجا می‌توانم کمک بگیرم؟",
      answer: "شما می‌توانید از طریق صفحه تماس با ما سوالات خود را مطرح کنید. همچنین در کانال‌های اجتماعی فارودمپ می‌توانید با سایر کاربران و تیم ما در ارتباط باشید و سوالات خود را بپرسید."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 space-x-reverse text-sm">
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                خانه
              </Link>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">سوالات متداول</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="text-6xl mb-6">❓</div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                سوالات <span className="text-primary">متداول</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                پاسخ سوالات رایج درباره فارودمپ و نحوه استفاده از نقشه‌راه‌های یادگیری
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-right py-6 hover:no-underline hover:text-primary">
                      <span className="text-lg font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* Contact Section */}
              <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  سوال دیگری دارید؟
                </h2>
                <p className="text-muted-foreground mb-6">
                  اگر سوال شما در بالا پاسخ داده نشده، خوشحال می‌شویم که به شما کمک کنیم.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  تماس با ما
                  <ArrowRight className="mr-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}