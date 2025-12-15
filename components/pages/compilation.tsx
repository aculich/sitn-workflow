"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Check,
  X,
  Download,
  Send,
  Search,
  Filter,
  AlertTriangle,
  CheckCircle2,
  Clock,
  FileText,
  Users,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { SUBJECT_AREAS } from "@/lib/types";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

// Mock data for scout folders
const scoutFolders = [
  {
    id: "1",
    scoutName: "Maria Chen",
    subjectArea: "Housing & Transportation",
    entryCount: 3,
    submittedCount: 2,
    lastUpdated: "2h ago",
  },
  {
    id: "2",
    scoutName: "James Wilson",
    subjectArea: "Education",
    entryCount: 2,
    submittedCount: 2,
    lastUpdated: "3h ago",
  },
  {
    id: "3",
    scoutName: "Sarah Johnson",
    subjectArea: "Health & Human Services",
    entryCount: 4,
    submittedCount: 3,
    lastUpdated: "1h ago",
  },
  {
    id: "4",
    scoutName: "Michael Brown",
    subjectArea: "Labor & Workforce",
    entryCount: 2,
    submittedCount: 1,
    lastUpdated: "4h ago",
  },
  {
    id: "5",
    scoutName: "Emily Davis",
    subjectArea: "Criminal Justice",
    entryCount: 1,
    submittedCount: 1,
    lastUpdated: "5h ago",
  },
  {
    id: "6",
    scoutName: "David Lee",
    subjectArea: "State Budget & Taxes",
    entryCount: 2,
    submittedCount: 2,
    lastUpdated: "30m ago",
  },
];

const entriesForCompilation = [
  {
    id: "e1",
    title: "California Housing Affordability Crisis: A 10-Year Analysis",
    scout: "Maria Chen",
    subject: "Housing",
    headline: "CA Housing Crisis Deepens: Middle-Income Families Hit Hardest",
    qualityScore: 95,
    selected: true,
    status: "ready",
  },
  {
    id: "e2",
    title: "K-12 Education Funding Impact Study",
    scout: "James Wilson",
    subject: "Education",
    headline: "Study: Education Funding Gaps Widen in Rural Districts",
    qualityScore: 92,
    selected: true,
    status: "ready",
  },
  {
    id: "e3",
    title: "Healthcare Access in Underserved Communities",
    scout: "Sarah Johnson",
    subject: "Health",
    headline: "Healthcare Deserts Expand in Central Valley Communities",
    qualityScore: 88,
    selected: false,
    status: "review",
  },
  {
    id: "e4",
    title: "Minimum Wage Impact on Small Businesses",
    scout: "Michael Brown",
    subject: "Labor",
    headline: "Small Businesses Adapt to New Minimum Wage Requirements",
    qualityScore: 85,
    selected: false,
    status: "duplicate",
  },
  {
    id: "e5",
    title: "Criminal Justice Reform Outcomes",
    scout: "Emily Davis",
    subject: "Criminal Justice",
    headline: "Five-Year Review Shows Mixed Results for Reform Measures",
    qualityScore: 91,
    selected: true,
    status: "ready",
  },
];

export function CompilationPage() {
  const [selectedEntries, setSelectedEntries] = useState<string[]>(
    entriesForCompilation.filter(e => e.selected).map(e => e.id)
  );
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSelection = (id: string) => {
    setSelectedEntries(prev =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  const totalSubmissions = scoutFolders.reduce((acc, f) => acc + f.submittedCount, 0);
  const totalExpected = scoutFolders.reduce((acc, f) => acc + f.entryCount, 0);
  const compilationProgress = (selectedEntries.length / entriesForCompilation.length) * 100;

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      {/* Page Header */}
      <motion.div variants={item} className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg gradient-primary">
              <Layers className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Compilation Dashboard</h1>
              <p className="text-muted-foreground">Issue #247 • Guest Editor View</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export to Word
          </Button>
          <Button className="gap-2">
            <Send className="h-4 w-4" />
            Submit for Review
          </Button>
        </div>
      </motion.div>

      {/* Status Cards */}
      <motion.div variants={item} className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Submissions</p>
                <p className="text-2xl font-bold">{totalSubmissions} / {totalExpected}</p>
              </div>
              <FileText className="h-8 w-8 text-primary opacity-50" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Scouts Reporting</p>
                <p className="text-2xl font-bold">{scoutFolders.length}</p>
              </div>
              <Users className="h-8 w-8 text-accent opacity-50" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Selected for Issue</p>
                <p className="text-2xl font-bold">{selectedEntries.length}</p>
              </div>
              <CheckCircle2 className="h-8 w-8 text-success opacity-50" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Needs Review</p>
                <p className="text-2xl font-bold">2</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-warning opacity-50" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Scout Folders */}
        <motion.div variants={item} className="lg:col-span-1">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Scout Folders
              </CardTitle>
              <CardDescription>Click to view entries from each scout</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {scoutFolders.map((folder) => (
                <button
                  key={folder.id}
                  className="w-full p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all text-left"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-primary/10 text-primary text-sm">
                        {folder.scoutName.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{folder.scoutName}</p>
                      <p className="text-xs text-muted-foreground truncate">{folder.subjectArea}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={folder.submittedCount === folder.entryCount ? "success" : "warning"} className="text-xs">
                        {folder.submittedCount}/{folder.entryCount}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">{folder.lastUpdated}</p>
                    </div>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Entries for Compilation */}
        <motion.div variants={item} className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Entries for Compilation</CardTitle>
                  <CardDescription>Select entries to include in this week&apos;s issue</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="gap-1">
                  <Sparkles className="h-4 w-4" />
                  Auto-Select Best
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Search */}
              <div className="flex gap-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search entries..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>

              {/* Entries List */}
              <div className="space-y-3">
                {entriesForCompilation.map((entry) => (
                  <div
                    key={entry.id}
                    className={`p-4 rounded-lg border transition-all cursor-pointer ${
                      selectedEntries.includes(entry.id)
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-border/80"
                    } ${entry.status === "duplicate" ? "opacity-60" : ""}`}
                    onClick={() => entry.status !== "duplicate" && toggleSelection(entry.id)}
                  >
                    <div className="flex items-start gap-3">
                      {/* Selection Checkbox */}
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                          selectedEntries.includes(entry.id)
                            ? "border-primary bg-primary text-white"
                            : "border-muted-foreground/30"
                        }`}
                      >
                        {selectedEntries.includes(entry.id) && <Check className="h-3 w-3" />}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-medium">{entry.title}</p>
                            <p className="text-sm text-muted-foreground mt-0.5">
                              {entry.scout} • {entry.subject}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            {entry.status === "duplicate" ? (
                              <Badge variant="destructive" className="gap-1">
                                <X className="h-3 w-3" />
                                Duplicate
                              </Badge>
                            ) : entry.status === "review" ? (
                              <Badge variant="warning" className="gap-1">
                                <Clock className="h-3 w-3" />
                                Needs Review
                              </Badge>
                            ) : (
                              <Badge variant="success" className="gap-1">
                                <CheckCircle2 className="h-3 w-3" />
                                Ready
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="mt-2 p-2 rounded bg-muted/50">
                          <p className="text-sm font-medium">&ldquo;{entry.headline}&rdquo;</p>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-1 text-sm">
                            <div className={`w-2 h-2 rounded-full ${
                              entry.qualityScore >= 90 ? "bg-success" :
                              entry.qualityScore >= 80 ? "bg-warning" : "bg-error"
                            }`} />
                            <span className="text-muted-foreground">Quality: {entry.qualityScore}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Compilation Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Compilation Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Progress</span>
                <span className="text-sm font-medium">{selectedEntries.length} entries selected</span>
              </div>
              <Progress value={compilationProgress} className="h-2" />

              <div className="grid grid-cols-3 gap-4 pt-2">
                {SUBJECT_AREAS.slice(0, 6).map((area) => {
                  const count = entriesForCompilation.filter(
                    e => selectedEntries.includes(e.id) && e.subject.includes(area.split(" ")[0])
                  ).length;
                  return (
                    <div key={area} className="text-center p-2 rounded-lg bg-muted/30">
                      <p className="text-lg font-bold">{count}</p>
                      <p className="text-xs text-muted-foreground truncate">{area.split(" ")[0]}</p>
                    </div>
                  );
                })}
              </div>

              <Separator />

              <div className="flex gap-2">
                <Button className="flex-1 gap-2">
                  <Download className="h-4 w-4" />
                  Generate Word Document
                </Button>
                <Button variant="outline" className="flex-1 gap-2">
                  <FileText className="h-4 w-4" />
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}

