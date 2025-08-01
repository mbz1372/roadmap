import Link from "next/link";
import { ArrowRight, Heart, Users, Target, Lightbulb } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "درباره فارودمپ | نقشه راه توسعه‌دهندگان ایرانی",
  description: "آشنایی با فارودمپ و اهداف این پروژه برای جامعه توسعه‌دهندگان ایران",
};

export default function AboutPage() {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "هدفمند",
      description: "هر نقشه راه به صورت دقیق و هدفمند طراحی شده تا شما را به مقصد برساند"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "جامعه‌محور",
      description: "توسط جامعه و برای جامعه توسعه‌دهندگان ایرانی ساخته شده است"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "به‌روز",
      description: "محتوا مطابق با آخرین تکنولوژی‌ها و استانداردهای روز دنیا"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "رایگان",
      description: "همیشه رایگان و در دسترس همه علاقه‌مندان به برنامه‌نویسی"
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
              <span className="font-medium">درباره ما</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="text-6xl mb-6">🚀</div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                درباره <span className="text-primary">فارودمپ</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                فارودمپ یک پلتفرم آموزشی رایگان است که با هدف کمک به توسعه‌دهندگان ایرانی
                برای یادگیری مسیرهای مختلف برنامه‌نویسی و توسعه نرم‌افزار طراحی شده است.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  ماموریت ما
                </h2>
                <p className="text-xl text-muted-foreground">
                  هدف ما ارائه مسیری روشن و ساختاریافته برای یادگیری توسعه نرم‌افزار است
                </p>
              </div>

              <div className="prose prose-lg max-w-none text-right">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  در دنیای امروز، توسعه نرم‌افزار یکی از مهم‌ترین و پرطرفدارترین حوزه‌های شغلی محسوب می‌شود.
                  با این حال، بسیاری از علاقه‌مندان در ابتدای مسیر با چالش‌هایی مواجه می‌شوند:
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>نبود مسیر مشخص و ساختاریافته برای یادگیری</li>
                  <li>پراکندگی منابع آموزشی و عدم دسترسی آسان</li>
                  <li>کمبود محتوای کیفی به زبان فارسی</li>
                  <li>عدم اطمینان از صحت و به‌روزبودن منابع</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  فارودمپ با هدف حل این مشکلات طراحی شده است. ما معتقدیم که هر شخصی با انگیزه و تلاش کافی
                  می‌تواند به یک توسعه‌دهنده موفق تبدیل شود. تنها چیزی که نیاز است، دسترسی به منابع مناسب
                  و مسیری روشن برای پیشرفت است.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  هر نقشه راه در فارودمپ با دقت و بر اساس تجربیات متخصصان حوزه توسعه نرم‌افزار تدوین شده است.
                  محتوای ما شامل آخرین تکنولوژی‌ها، بهترین شیوه‌ها و منابع معتبر است که به صورت مرحله به مرحله
                  شما را از مبتدی به متخصص تبدیل می‌کند.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                ویژگی‌های فارودمپ
              </h2>
              <p className="text-xl text-muted-foreground">
                چرا فارودمپ بهترین انتخاب برای شروع مسیر یادگیری شما است؟
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  ارزش‌های ما
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">کیفیت بالا</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      ما متعهد به ارائه محتوای با کیفیت، دقیق و به‌روز هستیم. هر منبعی که
                      معرفی می‌کنیم، از طرف متخصصان بررسی و تأیید شده است.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">دسترسی آزاد</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      ما معتقدیم دانش باید برای همه در دسترس باشد. فارودمپ همیشه رایگان
                      بوده و خواهد بود تا همه بتوانند از آن استفاده کنند.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">جامعه‌محوری</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      این پروژه متعلق به جامعه توسعه‌دهندگان ایران است. ما از نظرات و
                      پیشنهادات شما استقبال می‌کنیم و آن‌ها را در بهبود پلتفرم لحاظ می‌کنیم.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">شفافیت</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      تمامی کدهای فارودمپ به صورت متن‌باز در دسترس است و هر کسی می‌تواند
                      در توسعه آن مشارکت کند یا از آن استفاده کند.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                آماده شروع هستید؟
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                هم‌اکنون مسیر یادگیری خود را انتخاب کنید و اولین قدم را به سوی آینده‌ای
                بهتر بردارید.
              </p>
              <Link
                href="/#roadmaps"
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                مشاهده نقشه‌راه‌ها
                <ArrowRight className="mr-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}