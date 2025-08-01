"use client";

import { useState } from "react";
import { ChevronDown, ChevronLeft, Clock, ExternalLink, CheckCircle, Circle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RoadmapItem, Resource } from "@/types/roadmap";
import { cn } from "@/lib/utils";

interface RoadmapTreeProps {
  items: RoadmapItem[];
  onStatusChange?: (itemId: string, status: RoadmapItem['status']) => void;
}

function getStatusIcon(status: RoadmapItem['status']) {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case "in-progress":
      return <AlertCircle className="h-5 w-5 text-yellow-500" />;
    default:
      return <Circle className="h-5 w-5 text-gray-400" />;
  }
}

function getDifficultyColor(difficulty?: string) {
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

function getDifficultyText(difficulty?: string) {
  switch (difficulty) {
    case "beginner":
      return "مبتدی";
    case "intermediate":
      return "متوسط";
    case "advanced":
      return "پیشرفته";
    default:
      return "";
  }
}

function ResourceList({ resources }: { resources: Resource[] }) {
  const getResourceTypeText = (type: Resource['type']) => {
    switch (type) {
      case "article":
        return "مقاله";
      case "video":
        return "ویدیو";
      case "course":
        return "دوره";
      case "documentation":
        return "مستندات";
      case "book":
        return "کتاب";
      case "tool":
        return "ابزار";
      default:
        return "منبع";
    }
  };

  const getResourceTypeColor = (type: Resource['type']) => {
    switch (type) {
      case "article":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "video":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
      case "course":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400";
      case "documentation":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
      case "book":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "tool":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  if (!resources || resources.length === 0) return null;

  return (
    <div className="mt-4 space-y-2">
      <h4 className="font-medium text-sm text-foreground">منابع یادگیری:</h4>
      <div className="space-y-2">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-sm">{resource.title}</span>
                {resource.isPersian && (
                  <span className="px-1.5 py-0.5 bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 text-xs rounded">
                    فارسی
                  </span>
                )}
                {resource.isFree && (
                  <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 text-xs rounded">
                    رایگان
                  </span>
                )}
              </div>
              <span
                className={cn(
                  "px-2 py-1 rounded text-xs font-medium",
                  getResourceTypeColor(resource.type)
                )}
              >
                {getResourceTypeText(resource.type)}
              </span>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">باز کردن منبع</span>
              </a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

function RoadmapTreeItem({ 
  item, 
  level = 0, 
  onStatusChange 
}: { 
  item: RoadmapItem; 
  level?: number; 
  onStatusChange?: (itemId: string, status: RoadmapItem['status']) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(level === 0);
  const hasChildren = item.children && item.children.length > 0;

  const handleStatusChange = (newStatus: RoadmapItem['status']) => {
    onStatusChange?.(item.id, newStatus);
  };

  return (
    <div className="space-y-2">
      <Card className={cn("transition-all duration-200", level === 0 ? "shadow-md" : "shadow-sm")}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {hasChildren && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 h-8 w-8"
                >
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronLeft className="h-4 w-4" />
                  )}
                </Button>
              )}
              <div className="flex items-center gap-2">
                {getStatusIcon(item.status)}
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {item.difficulty && (
                <span
                  className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    getDifficultyColor(item.difficulty)
                  )}
                >
                  {getDifficultyText(item.difficulty)}
                </span>
              )}
              {item.estimatedTime && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 ml-1" />
                  {item.estimatedTime}
                </div>
              )}
            </div>
          </div>
          
          {item.description && (
            <CardDescription className="mt-2">{item.description}</CardDescription>
          )}
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-muted-foreground">وضعیت:</span>
            <select
              value={item.status}
              onChange={(e) => handleStatusChange(e.target.value as RoadmapItem['status'])}
              className="px-2 py-1 text-sm border rounded bg-background"
            >
              <option value="not-started">شروع نشده</option>
              <option value="in-progress">در حال انجام</option>
              <option value="completed">تکمیل شده</option>
            </select>
          </div>
          
          <ResourceList resources={item.resources || []} />
        </CardContent>
      </Card>

      {hasChildren && isExpanded && (
        <div className={cn("space-y-3", level === 0 ? "mr-4" : "mr-6")}>
          {item.children!.map((child) => (
            <RoadmapTreeItem
              key={child.id}
              item={child}
              level={level + 1}
              onStatusChange={onStatusChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function RoadmapTree({ items, onStatusChange }: RoadmapTreeProps) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <RoadmapTreeItem
          key={item.id}
          item={item}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}