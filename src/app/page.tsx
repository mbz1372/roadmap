import Link from "next/link";
import { ArrowLeft, Clock, Users, BookOpen, Star } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { roadmapsData } from "@/data/roadmaps";
import { formatNumber } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { RoadmapItem } from "@/types/roadmap";

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case "beginner":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
    case "intermediate":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
    case "advanced":
      return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
  }
}

function getDifficultyText(difficulty: string) {
  switch (difficulty) {
    case "beginner":
      return "مبتدی";
    case "intermediate":
      return "متوسط";
    case "advanced":
      return "پیشرفته";
    default:
      return "نامشخص";
  }
}

export default function HomePage() {
  const stats = {
    totalRoadmaps: roadmapsData.length,
    totalTopics: roadmapsData.reduce((acc, roadmap) => {
      const countItems = (items: RoadmapItem[]): number => {
        return items.reduce((count, item) => {
          return count + 1 + (item.children ? countItems(item.children) : 0);
        }, 0);
      };
      return acc + countItems(roadmap.items);
    }, 0),
    activeUsers: 12500,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="text-6xl mb-4">🗺️</div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                  نقشه راه توسعه‌دهندگان{" "}
                  <span className="text-primary">ایرانی</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  مسیر کامل و ساختاریافته برای یادگیری توسعه نرم‌افزار. از مبانی تا تکنولوژی‌های
                  پیشرفته، همه چیز را در یک مکان پیدا کنید.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="#roadmaps">
                    شروع یادگیری
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link href="/about">
                    درباره پروژه
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {formatNumber(stats.totalRoadmaps)}
                  </div>
                  <div className="text-muted-foreground">نقشه راه</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {formatNumber(stats.totalTopics)}+
                  </div>
                  <div className="text-muted-foreground">موضوع آموزشی</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {formatNumber(stats.activeUsers)}+
                  </div>
                  <div className="text-muted-foreground">کاربر فعال</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmaps Section */}
        <section id="roadmaps" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                نقشه‌راه‌های یادگیری
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                مسیرهای کاملی که شما را از مبتدی به متخصص تبدیل می‌کنند
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roadmapsData.map((roadmap) => (
                <Card key={roadmap.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-3xl">{roadmap.icon}</div>
                      <span
                        className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          getDifficultyColor(roadmap.difficulty)
                        )}
                      >
                        {getDifficultyText(roadmap.difficulty)}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2">{roadmap.title}</CardTitle>
                    <CardDescription className="text-sm leading-6">
                      {roadmap.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 ml-1" />
                        {roadmap.estimatedTime}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 ml-1" />
                        {roadmap.items.length} بخش
                      </div>
                    </div>
                    
                    <Button asChild className="w-full group-hover:bg-primary/90">
                      <Link href={`/roadmap/${roadmap.slug}`}>
                        شروع یادگیری
                        <ArrowLeft className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                چرا فارودمپ؟
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">محتوای فارسی</h3>
                <p className="text-muted-foreground">
                  تمام محتوا به زبان فارسی و مناسب برای جامعه توسعه‌دهندگان ایران
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">کیفیت بالا</h3>
                <p className="text-muted-foreground">
                  منابع منتخب و به‌روز شده توسط متخصصان حوزه توسعه نرم‌افزار
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">جامعه فعال</h3>
                <p className="text-muted-foreground">
                  بخشی از جامعه بزرگ توسعه‌دهندگان ایرانی باشید و تجربیات خود را به اشتراک بگذارید
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
