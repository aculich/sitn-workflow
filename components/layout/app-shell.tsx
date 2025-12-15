"use client";

import { useState } from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      
      <div className="flex">
        {/* Desktop Sidebar */}
        <Sidebar className="hidden lg:flex fixed inset-y-0 top-16 z-30" />
        
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <Sidebar
              className="fixed inset-y-0 left-0 z-50 lg:hidden"
              onClose={() => setSidebarOpen(false)}
            />
          </>
        )}

        {/* Main Content */}
        <main className={cn("flex-1 lg:ml-64 min-h-[calc(100vh-4rem)]")}>
          <div className="container max-w-7xl mx-auto p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

