"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileEdit,
  Layers,
  CheckSquare,
  Mail,
  BarChart3,
  Settings,
  HelpCircle,
  ChevronDown,
  Newspaper,
  Users,
  Calendar,
  BookOpen,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Scout Workflow",
    icon: FileEdit,
    children: [
      { name: "My Entries", href: "/scout/entries" },
      { name: "New Entry", href: "/scout/entries/new" },
      { name: "Content Discovery", href: "/scout/discovery" },
    ],
  },
  {
    name: "Guest Editor",
    icon: Layers,
    children: [
      { name: "Compilation", href: "/guest-editor/compile" },
      { name: "Scout Folders", href: "/guest-editor/folders" },
    ],
  },
  {
    name: "Review",
    icon: CheckSquare,
    children: [
      { name: "Current Draft", href: "/review/current" },
      { name: "Approval Queue", href: "/review/approvals" },
    ],
  },
  {
    name: "MailChimp",
    href: "/mailchimp",
    icon: Mail,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
];

const secondaryNav = [
  { name: "Team", href: "/team", icon: Users },
  { name: "Schedule", href: "/schedule", icon: Calendar },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Documentation", href: "/documentation", icon: BookOpen },
  { name: "Help", href: "/help", icon: HelpCircle },
];

interface SidebarProps {
  className?: string;
  onClose?: () => void;
}

export function Sidebar({ className, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>(["Scout Workflow"]);

  const toggleExpanded = (name: string) => {
    setExpandedItems((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const isActive = (href: string) => pathname === href;
  const hasActiveChild = (children: { href: string }[]) =>
    children.some((child) => pathname.startsWith(child.href));

  return (
    <aside
      className={cn(
        "flex h-full w-64 flex-col border-r border-border bg-card",
        className
      )}
    >
      {/* Current Issue Status */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
          <Newspaper className="h-5 w-5 text-primary" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Issue #247</p>
            <p className="text-xs text-muted-foreground">Wed, Dec 11</p>
          </div>
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-warning/15 text-warning border border-warning/30">
            In Review
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {navigation.map((item) => {
          if (item.children) {
            const expanded = expandedItems.includes(item.name);
            const active = hasActiveChild(item.children);
            return (
              <div key={item.name} className="space-y-1">
                <button
                  onClick={() => toggleExpanded(item.name)}
                  className={cn(
                    "sidebar-link w-full justify-between",
                    active && "text-foreground"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      expanded && "rotate-180"
                    )}
                  />
                </button>
                {expanded && (
                  <div className="ml-8 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className={cn(
                          "sidebar-link text-sm py-2",
                          isActive(child.href) && "active"
                        )}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={cn("sidebar-link", isActive(item.href) && "active")}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Secondary Navigation */}
      <div className="border-t border-border p-3 space-y-1">
        {secondaryNav.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={onClose}
            className={cn("sidebar-link", isActive(item.href) && "active")}
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </div>
    </aside>
  );
}

