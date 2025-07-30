"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, BarChart3, Share2 } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RoadmapTree } from "@/components/roadmap-tree";
import { getRoadmapBySlug } from "@/data/roadmaps";
import { Roadmap, RoadmapItem } from "@/types/roadmap";
import { formatDate, cn } from "@/lib/utils";

interface RoadmapPageProps {
  params: {
    slug: string;
  };
}

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

function calculateProgress(items: RoadmapItem[]): { completed: number; total: number } {
  let completed = 0;
  let total = 0;

  const countItems = (itemList: RoadmapItem[]) => {
    itemList.forEach(item => {
      total++;
      if (item.status === 'completed') {
        completed++;
      }
      if (item.children) {
        countItems(item.children);
      }
    });
  };

  countItems(items);
  return { completed, total };
}

export default function RoadmapPage({ params }: RoadmapPageProps) {
  const roadmap = getRoadmapBySlug(params.slug);
  const [roadmapData, setRoadmapData] = useState<Roadmap | null>(roadmap || null);

  if (!roadmap) {
    notFound();
  }

  useEffect(() => {
    setRoadmapData(roadmap);
  }, [roadmap]);

  const handleStatusChange = (itemId: string, status: RoadmapItem['status']) => {
    if (!roadmapData) return;

    const updateItemStatus = (items: RoadmapItem[]): RoadmapItem[] => {
      return items.map(item => {
        if (item.id === itemId) {
          return { ...item, status };
        }
        if (item.children) {
          return { ...item, children: updateItemStatus(item.children) };
        }
        return item;
      });
    };

    setRoadmapData({
      ...roadmapData,
      items: updateItemStatus(roadmapData.items)
    });
  };

  const progress = roadmapData ? calculateProgress(roadmapData.items) : { completed: 0, total: 0 };
  const progressPercentage = progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0;

  if (!roadmapData) return null;

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
              <span className="font-medium">{roadmapData.title}</span>
            </nav>
          </div>
        </div>

        {/* Header Section */}
        <section className="py-8 lg:py-12 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{roadmapData.icon}</div>
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    {roadmapData.title}
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    {roadmapData.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">سطح</div>
                        <div
                          className={cn(
                            "px-2 py-1 rounded text-xs font-medium inline-block",
                            getDifficultyColor(roadmapData.difficulty)
                          )}
                        >
                          {getDifficultyText(roadmapData.difficulty)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">مدت زمان</div>
                        <div className="font-medium">{roadmapData.estimatedTime}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">بروزرسانی</div>
                        <div className="font-medium">{formatDate(roadmapData.lastUpdated)}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">پیشرفت</div>
                        <div className="font-medium">{progressPercentage}%</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">پیشرفت کلی</span>
                  <span className="text-sm text-muted-foreground">
                    {progress.completed} از {progress.total} تکمیل شده
                  </span>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="outline">
                  <Share2 className="h-4 w-4 ml-2" />
                  اشتراک‌گذاری
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                محتوای نقشه راه
              </h2>
              
              <RoadmapTree 
                items={roadmapData.items} 
                onStatusChange={handleStatusChange}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}