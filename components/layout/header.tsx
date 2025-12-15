"use client";

import { Bell, Search, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center gap-4 px-4 lg:px-6">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
            <span className="text-lg font-bold text-white">S</span>
          </div>
          <div className="hidden md:block">
            <h1 className="text-lg font-semibold tracking-tight">SITN Workflow</h1>
            <p className="text-xs text-muted-foreground">Studies in the News</p>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md mx-auto hidden sm:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search entries, issues..."
              className="pl-10 bg-muted/50 border-transparent focus:bg-background focus:border-border"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 ml-auto">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-error" />
            <span className="sr-only">Notifications</span>
          </Button>

          <div className="flex items-center gap-3 pl-2 border-l border-border">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium">Sumeet Bedi</p>
              <p className="text-xs text-muted-foreground">Coordinator</p>
            </div>
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/sumeet.jpg" alt="Sumeet Bedi" />
              <AvatarFallback className="bg-primary/10 text-primary">SB</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}

