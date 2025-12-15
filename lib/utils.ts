import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(d);
}

export function formatDateShort(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(d);
}

export function getDeadlineStatus(deadline: Date): "upcoming" | "due" | "overdue" {
  const now = new Date();
  const diff = deadline.getTime() - now.getTime();
  const hours = diff / (1000 * 60 * 60);
  
  if (hours < 0) return "overdue";
  if (hours < 24) return "due";
  return "upcoming";
}

export function getTimeUntilDeadline(deadline: Date): string {
  const now = new Date();
  const diff = deadline.getTime() - now.getTime();
  
  if (diff < 0) {
    const hours = Math.abs(diff) / (1000 * 60 * 60);
    if (hours < 24) return `${Math.floor(hours)}h overdue`;
    return `${Math.floor(hours / 24)}d overdue`;
  }
  
  const hours = diff / (1000 * 60 * 60);
  if (hours < 1) return `${Math.floor(diff / (1000 * 60))}m remaining`;
  if (hours < 24) return `${Math.floor(hours)}h remaining`;
  return `${Math.floor(hours / 24)}d remaining`;
}

