"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  FileText,
  Users,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  TrendingUp,
  Send,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// Mock data
const weeklyTimeline = [
  { day: "Mon", label: "Scout Entries", status: "complete" },
  { day: "Tue", label: "Scout Entries", status: "complete" },
  { day: "Wed", label: "Scout Entries", status: "complete" },
  { day: "Thu", label: "Scout Entries", status: "complete" },
  { day: "Fri", label: "Deadline Noon", status: "current" },
  { day: "Mon", label: "Review", status: "upcoming" },
  { day: "Wed", label: "Publish", status: "upcoming" },
];

const recentEntries = [
  { id: 1, title: "CA Housing Study Shows Decline", scout: "Maria Chen", subject: "Housing", status: "submitted" },
  { id: 2, title: "Education Funding Analysis", scout: "James Wilson", subject: "Education", status: "draft" },
  { id: 3, title: "Healthcare Access Report", scout: "Sarah Johnson", subject: "Health", status: "submitted" },
  { id: 4, title: "Labor Market Trends Q4", scout: "Michael Brown", subject: "Labor", status: "in-review" },
];

const quickStats = [
  { label: "Entries Submitted", value: 12, change: "+3 from last week", icon: FileText, color: "text-primary" },
  { label: "In Review", value: 4, change: "2 pending approval", icon: Clock, color: "text-warning" },
  { label: "Published This Month", value: 48, change: "+12% vs last month", icon: Send, color: "text-success" },
  { label: "Team Members Active", value: 8, change: "All scouts reporting", icon: Users, color: "text-accent" },
];

export function DashboardPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {/* Page Header */}
      <motion.div variants={item} className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Weekly Production Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Issue #247 • Week of December 9-11, 2025
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            View Schedule
          </Button>
          <Button className="gap-2">
            <FileText className="h-4 w-4" />
            New Entry
          </Button>
        </div>
      </motion.div>

      {/* Timeline Card */}
      <motion.div variants={item}>
        <Card className="overflow-hidden">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Production Timeline</CardTitle>
                <CardDescription>Friday noon → Wednesday 8 AM publication</CardDescription>
              </div>
              <Badge variant="warning" className="gap-1">
                <Clock className="h-3 w-3" />
                Scout Deadline in 2 days
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="flex justify-between items-start">
                {weeklyTimeline.map((step, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 relative z-10">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        step.status === "complete"
                          ? "bg-success text-white"
                          : step.status === "current"
                          ? "bg-primary text-white ring-4 ring-primary/20"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step.status === "complete" ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <span className="text-sm font-medium">{index + 1}</span>
                      )}
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium">{step.day}</p>
                      <p className="text-xs text-muted-foreground max-w-[80px]">{step.label}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Progress Line */}
              <div className="absolute top-5 left-5 right-5 h-0.5 bg-muted -z-0">
                <div className="h-full bg-success" style={{ width: "57%" }} />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Stats */}
      <motion.div variants={item} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {quickStats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold mt-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-success" />
                    {stat.change}
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Two Column Layout */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Entries */}
        <motion.div variants={item}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Entries</CardTitle>
                <CardDescription>Latest submissions from scouts</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="gap-1">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentEntries.map((entry) => (
                  <div
                    key={entry.id}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary text-sm">
                        {entry.scout.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{entry.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {entry.scout} • {entry.subject}
                      </p>
                    </div>
                    <Badge variant={entry.status as "draft" | "submitted" | "in-review"}>
                      {entry.status.replace("-", " ")}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Issue Progress */}
        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <CardTitle>Issue #247 Progress</CardTitle>
              <CardDescription>Current week completion status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Scout Submissions</span>
                  <span className="font-medium">12 / 18</span>
                </div>
                <Progress value={67} className="h-2" />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Quality Checks Passed</span>
                  <span className="font-medium">10 / 12</span>
                </div>
                <Progress value={83} className="h-2" />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Entries Compiled</span>
                  <span className="font-medium">8 / 12</span>
                </div>
                <Progress value={67} className="h-2" />
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-warning/10 border border-warning/20">
                  <AlertCircle className="h-5 w-5 text-warning shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Action Required</p>
                    <p className="text-xs text-muted-foreground">
                      2 entries need quality check review before compilation
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Subject Areas Grid */}
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <CardTitle>Entries by Subject Area</CardTitle>
            <CardDescription>Distribution across policy categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: "Health", count: 3, color: "bg-red-500" },
                { name: "Education", count: 2, color: "bg-blue-500" },
                { name: "Housing", count: 2, color: "bg-amber-500" },
                { name: "Labor", count: 2, color: "bg-green-500" },
                { name: "Criminal Justice", count: 1, color: "bg-purple-500" },
                { name: "Budget", count: 1, color: "bg-cyan-500" },
                { name: "Environment", count: 1, color: "bg-emerald-500" },
                { name: "Government", count: 0, color: "bg-slate-400" },
                { name: "Business", count: 0, color: "bg-slate-400" },
                { name: "Transport", count: 0, color: "bg-slate-400" },
              ].map((area) => (
                <div
                  key={area.name}
                  className={`p-4 rounded-lg border border-border transition-all hover:shadow-md cursor-pointer ${
                    area.count > 0 ? "bg-card" : "bg-muted/30 opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full ${area.color}`} />
                    <span className="text-sm font-medium truncate">{area.name}</span>
                  </div>
                  <p className="text-2xl font-bold">{area.count}</p>
                  <p className="text-xs text-muted-foreground">
                    {area.count === 1 ? "entry" : "entries"}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

