import { Roadmap } from "@/types/roadmap";

export const roadmapsData: Roadmap[] = [
  {
    id: "frontend",
    title: "توسعه‌دهنده فرانت‌اند",
    description: "مسیر کامل یادگیری توسعه فرانت‌اند از مبتدی تا پیشرفته",
    slug: "frontend",
    icon: "🌐",
    color: "bg-blue-500",
    difficulty: "beginner",
    estimatedTime: "۶ ماه",
    lastUpdated: new Date("2024-01-15"),
    items: [
      {
        id: "basics",
        title: "مبانی وب",
        status: "not-started",
        children: [
          {
            id: "html",
            title: "HTML",
            description: "زبان نشانه‌گذاری متن فرابر",
            status: "not-started",
            difficulty: "beginner",
            estimatedTime: "۲ هفته",
            resources: [
              {
                id: "html-mdn",
                title: "مستندات HTML در MDN",
                url: "https://developer.mozilla.org/fa/docs/Web/HTML",
                type: "documentation",
                isPersian: true,
                isFree: true
              }
            ]
          },
          {
            id: "css",
            title: "CSS",
            description: "شیوه‌نامه‌های آبشاری",
            status: "not-started",
            difficulty: "beginner",
            estimatedTime: "۳ هفته",
            resources: [
              {
                id: "css-mdn",
                title: "مستندات CSS در MDN",
                url: "https://developer.mozilla.org/fa/docs/Web/CSS",
                type: "documentation",
                isPersian: true,
                isFree: true
              }
            ]
          },
          {
            id: "javascript",
            title: "JavaScript",
            description: "زبان برنامه‌نویسی جاوااسکریپت",
            status: "not-started",
            difficulty: "intermediate",
            estimatedTime: "۶ هفته",
            resources: [
              {
                id: "js-mdn",
                title: "مستندات JavaScript در MDN",
                url: "https://developer.mozilla.org/fa/docs/Web/JavaScript",
                type: "documentation",
                isPersian: true,
                isFree: true
              }
            ]
          }
        ]
      },
      {
        id: "frameworks",
        title: "فریم‌ورک‌ها",
        status: "not-started",
        children: [
          {
            id: "react",
            title: "React",
            description: "کتابخانه جاوااسکریپت برای ساخت رابط کاربری",
            status: "not-started",
            difficulty: "intermediate",
            estimatedTime: "۴ هفته"
          },
          {
            id: "nextjs",
            title: "Next.js",
            description: "فریم‌ورک React برای تولید",
            status: "not-started",
            difficulty: "intermediate",
            estimatedTime: "۳ هفته"
          }
        ]
      },
      {
        id: "tools",
        title: "ابزارها",
        status: "not-started",
        children: [
          {
            id: "git",
            title: "Git",
            description: "سیستم کنترل نسخه",
            status: "not-started",
            difficulty: "beginner",
            estimatedTime: "۱ هفته"
          },
          {
            id: "webpack",
            title: "Webpack",
            description: "بسته‌بند ماژول",
            status: "not-started",
            difficulty: "advanced",
            estimatedTime: "۲ هفته"
          }
        ]
      }
    ]
  },
  {
    id: "backend",
    title: "توسعه‌دهنده بک‌اند",
    description: "مسیر کامل یادگیری توسعه بک‌اند و سرور",
    slug: "backend",
    icon: "⚙️",
    color: "bg-green-500",
    difficulty: "intermediate",
    estimatedTime: "۸ ماه",
    lastUpdated: new Date("2024-01-10"),
    items: [
      {
        id: "languages",
        title: "زبان‌های برنامه‌نویسی",
        status: "not-started",
        children: [
          {
            id: "nodejs",
            title: "Node.js",
            description: "محیط اجرای جاوااسکریپت در سرور",
            status: "not-started",
            difficulty: "intermediate",
            estimatedTime: "۴ هفته"
          },
          {
            id: "python",
            title: "Python",
            description: "زبان برنامه‌نویسی پایتون",
            status: "not-started",
            difficulty: "beginner",
            estimatedTime: "۶ هفته"
          }
        ]
      },
      {
        id: "databases",
        title: "پایگاه داده",
        status: "not-started",
        children: [
          {
            id: "sql",
            title: "SQL",
            description: "زبان پرس‌وجوی ساختاریافته",
            status: "not-started",
            difficulty: "intermediate",
            estimatedTime: "۳ هفته"
          },
          {
            id: "mongodb",
            title: "MongoDB",
            description: "پایگاه داده NoSQL",
            status: "not-started",
            difficulty: "intermediate",
            estimatedTime: "۲ هفته"
          }
        ]
      }
    ]
  },
  {
    id: "fullstack",
    title: "توسعه‌دهنده فول‌استک",
    description: "مسیر کامل توسعه فرانت‌اند و بک‌اند",
    slug: "fullstack",
    icon: "🚀",
    color: "bg-purple-500",
    difficulty: "advanced",
    estimatedTime: "۱۲ ماه",
    lastUpdated: new Date("2024-01-20"),
    items: [
      {
        id: "frontend-skills",
        title: "مهارت‌های فرانت‌اند",
        status: "not-started",
        children: [
          {
            id: "modern-frontend",
            title: "فرانت‌اند مدرن",
            description: "تکنولوژی‌های جدید فرانت‌اند",
            status: "not-started",
            difficulty: "advanced",
            estimatedTime: "۸ هفته"
          }
        ]
      },
      {
        id: "backend-skills",
        title: "مهارت‌های بک‌اند",
        status: "not-started",
        children: [
          {
            id: "server-management",
            title: "مدیریت سرور",
            description: "مفاهیم مدیریت سرور و DevOps",
            status: "not-started",
            difficulty: "advanced",
            estimatedTime: "۶ هفته"
          }
        ]
      }
    ]
  },
  {
    id: "devops",
    title: "DevOps",
    description: "مسیر یادگیری DevOps و مدیریت زیرساخت",
    slug: "devops",
    icon: "🔧",
    color: "bg-orange-500",
    difficulty: "advanced",
    estimatedTime: "۱۰ ماه",
    lastUpdated: new Date("2024-01-05"),
    items: [
      {
        id: "containerization",
        title: "کانتینرسازی",
        status: "not-started",
        children: [
          {
            id: "docker",
            title: "Docker",
            description: "پلتفرم کانتینرسازی",
            status: "not-started",
            difficulty: "intermediate",
            estimatedTime: "۳ هفته"
          },
          {
            id: "kubernetes",
            title: "Kubernetes",
            description: "سیستم ارکستراسیون کانتینر",
            status: "not-started",
            difficulty: "advanced",
            estimatedTime: "۶ هفته"
          }
        ]
      }
    ]
  },
  {
    id: "mobile",
    title: "توسعه موبایل",
    description: "مسیر توسعه اپلیکیشن‌های موبایل",
    slug: "mobile",
    icon: "📱",
    color: "bg-pink-500",
    difficulty: "intermediate",
    estimatedTime: "۹ ماه",
    lastUpdated: new Date("2024-01-12"),
    items: [
      {
        id: "cross-platform",
        title: "توسعه کراس‌پلتفرم",
        status: "not-started",
        children: [
          {
            id: "react-native",
            title: "React Native",
            description: "فریم‌ورک توسعه موبایل",
            status: "not-started",
            difficulty: "intermediate",
            estimatedTime: "۶ هفته"
          },
          {
            id: "flutter",
            title: "Flutter",
            description: "فریم‌ورک UI گوگل",
            status: "not-started",
            difficulty: "intermediate",
            estimatedTime: "۶ هفته"
          }
        ]
      }
    ]
  },
  {
    id: "ai-ml",
    title: "هوش مصنوعی",
    description: "مسیر یادگیری هوش مصنوعی و یادگیری ماشین",
    slug: "ai-ml",
    icon: "🤖",
    color: "bg-indigo-500",
    difficulty: "advanced",
    estimatedTime: "۱۵ ماه",
    lastUpdated: new Date("2024-01-18"),
    items: [
      {
        id: "foundations",
        title: "مبانی",
        status: "not-started",
        children: [
          {
            id: "mathematics",
            title: "ریاضیات",
            description: "مبانی ریاضی هوش مصنوعی",
            status: "not-started",
            difficulty: "advanced",
            estimatedTime: "۸ هفته"
          },
          {
            id: "statistics",
            title: "آمار",
            description: "مفاهیم آماری و احتمالات",
            status: "not-started",
            difficulty: "intermediate",
            estimatedTime: "۴ هفته"
          }
        ]
      }
    ]
  }
];

export function getRoadmapBySlug(slug: string): Roadmap | undefined {
  return roadmapsData.find(roadmap => roadmap.slug === slug);
}

export function getAllRoadmapSlugs(): string[] {
  return roadmapsData.map(roadmap => roadmap.slug);
}