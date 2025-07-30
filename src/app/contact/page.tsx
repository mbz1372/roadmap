"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Mail, MessageSquare, Github, Send } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert("پیام شما ارسال شد! در اسرع وقت با شما تماس خواهیم گرفت.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              <span className="font-medium">تماس با ما</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="text-6xl mb-6">📞</div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                تماس با <span className="text-primary">ما</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                سوال، پیشنهاد یا انتقادی دارید؟ خوشحال می‌شویم که از شما بشنویم و در بهبود فارودمپ کمک کنید.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    پیام خود را ارسال کنید
                  </h2>
                  
                  <Card>
                    <CardContent className="p-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            نام و نام خانوادگی
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                            placeholder="نام خود را وارد کنید"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            ایمیل
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                            placeholder="example@email.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                            موضوع
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                            placeholder="موضوع پیام خود را وارد کنید"
                          />
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                            پیام
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
                            placeholder="پیام خود را اینجا بنویسید..."
                          />
                        </div>

                        <Button type="submit" className="w-full">
                          <Send className="h-4 w-4 ml-2" />
                          ارسال پیام
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    راه‌های ارتباطی
                  </h2>
                  
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <Mail className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">ایمیل</CardTitle>
                            <CardDescription>برای سوالات عمومی و پشتیبانی</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <a href="mailto:contact@faroadmap.ir" className="text-primary hover:underline">
                          contact@faroadmap.ir
                        </a>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <Github className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">گیت‌هاب</CardTitle>
                            <CardDescription>مشارکت در توسعه پروژه</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <a 
                          href="https://github.com/faroadmap" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          github.com/faroadmap
                        </a>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <MessageSquare className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">تلگرام</CardTitle>
                            <CardDescription>عضویت در کانال و گروه</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <a 
                          href="https://t.me/faroadmap" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          @faroadmap
                        </a>
                      </CardContent>
                    </Card>
                  </div>

                  {/* FAQ Link */}
                  <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      پیش از تماس
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      شاید پاسخ سوال شما در بخش سوالات متداول موجود باشد.
                    </p>
                    <Link
                      href="/faq"
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      مشاهده سوالات متداول
                      <ArrowRight className="mr-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                عضو جامعه شوید
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                با پیوستن به جامعه فارودمپ، از آخرین اخبار باخبر شوید و تجربیات خود را با سایرین به اشتراک بگذارید.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild>
                  <a href="https://t.me/faroadmap" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-4 w-4 ml-2" />
                    تلگرام
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/faroadmap" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 ml-2" />
                    گیت‌هاب
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}