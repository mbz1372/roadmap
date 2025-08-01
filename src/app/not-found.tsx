import Link from "next/link";
import { ArrowRight, Home, Search } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            {/* 404 Graphic */}
            <div className="mb-8">
              <div className="text-8xl mb-4">🗺️</div>
              <div className="text-6xl font-bold text-primary mb-4">۴۰۴</div>
            </div>

            {/* Error Message */}
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              صفحه مورد نظر پیدا نشد!
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              متأسفانه صفحه‌ای که به دنبال آن می‌گردید وجود ندارد یا ممکن است آدرس آن تغییر کرده باشد.
              نگران نباشید، می‌توانید از طریق لینک‌های زیر به مسیر درست بازگردید.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg">
                <Link href="/">
                  <Home className="h-5 w-5 ml-2" />
                  بازگشت به خانه
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link href="/#roadmaps">
                  <Search className="h-5 w-5 ml-2" />
                  مشاهده نقشه‌راه‌ها
                </Link>
              </Button>
            </div>

            {/* Popular Links */}
            <div className="border-t pt-8">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                صفحات پربازدید
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <Link 
                  href="/roadmap/frontend"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  نقشه راه فرانت‌اند
                </Link>
                
                <Link 
                  href="/roadmap/backend"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  نقشه راه بک‌اند
                </Link>
                
                <Link 
                  href="/roadmap/fullstack"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  نقشه راه فول‌استک
                </Link>
                
                <Link 
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  درباره فارودمپ
                </Link>
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                همچنان کمک نیاز دارید؟
              </h3>
              <p className="text-muted-foreground mb-4">
                اگر فکر می‌کنید این خطا اشتباه است، لطفاً با ما تماس بگیرید.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-primary hover:underline"
              >
                تماس با پشتیبانی
                <ArrowRight className="mr-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}