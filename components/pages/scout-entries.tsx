"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  FileText,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Edit,
  Trash2,
  Eye,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Entry, EntryStatus } from "@/lib/types";

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

// Mock entries data
const mockEntries: Entry[] = [
  {
    id: "1",
    scoutId: "scout-1",
    scoutName: "Maria Chen",
    subjectArea: "Housing & Transportation",
    status: "submitted",
    study: {
      title: "California Housing Affordability Crisis: A 10-Year Analysis",
      url: "https://example.com/study1",
      author: "Dr. Sarah Martinez",
      institution: "UC Berkeley",
      publicationDate: "2025-12-01",
    },
    blurb: {
      text: "A comprehensive study from UC Berkeley finds that California's housing shortage has worsened by 23% over the past decade, with the greatest impact on middle-income families in urban areas.",
      wordCount: 156,
      source: "study",
    },
    headline: {
      text: "CA Housing Crisis Deepens: Middle-Income Families Hit Hardest",
      wordCount: 9,
      suggestions: ["Housing Shortage Worsens 23% in California", "UC Berkeley: Middle-Class Housing Crisis"],
    },
    qualityChecks: {
      biasDetected: false,
      methodologyAvailable: true,
      rubricCompliant: true,
      duplicateChecked: true,
      linksValid: true,
      score: 95,
    },
    submittedAt: "2025-12-06T10:30:00Z",
    createdAt: "2025-12-05T14:00:00Z",
    updatedAt: "2025-12-06T10:30:00Z",
  },
  {
    id: "2",
    scoutId: "scout-1",
    scoutName: "Maria Chen",
    subjectArea: "Housing & Transportation",
    status: "draft",
    study: {
      title: "Public Transit Ridership Trends Post-Pandemic",
      url: "https://example.com/study2",
      institution: "CA DOT",
    },
    blurb: {
      text: "California Department of Transportation reports that public transit ridership has recovered to 78% of pre-pandemic levels...",
      wordCount: 89,
      source: "paraphrase",
    },
    headline: {
      text: "Transit Ridership Recovers to 78% Post-COVID",
      wordCount: 7,
    },
    qualityChecks: {
      biasDetected: false,
      methodologyAvailable: true,
      rubricCompliant: false,
      duplicateChecked: false,
      linksValid: true,
      score: 72,
    },
    createdAt: "2025-12-07T09:00:00Z",
    updatedAt: "2025-12-07T11:00:00Z",
  },
  {
    id: "3",
    scoutId: "scout-1",
    scoutName: "Maria Chen",
    subjectArea: "Housing & Transportation",
    status: "in-review",
    study: {
      title: "Homelessness Prevention Programs: Effectiveness Study",
      url: "https://example.com/study3",
      author: "Research Team",
      institution: "Stanford Social Innovation Review",
      publicationDate: "2025-11-28",
    },
    blurb: {
      text: "Stanford researchers evaluate the effectiveness of California's homelessness prevention programs, finding that early intervention reduces shelter entries by 45%.",
      wordCount: 142,
      source: "news",
    },
    newsArticle: {
      source: "LA Times",
      url: "https://latimes.com/homeless-prevention",
      publicationDate: "2025-12-02",
    },
    headline: {
      text: "Early Intervention Cuts Shelter Entries by 45%",
      wordCount: 8,
    },
    qualityChecks: {
      biasDetected: true,
      methodologyAvailable: true,
      rubricCompliant: true,
      duplicateChecked: true,
      linksValid: true,
      score: 85,
    },
    submittedAt: "2025-12-05T16:00:00Z",
    createdAt: "2025-12-04T10:00:00Z",
    updatedAt: "2025-12-05T16:00:00Z",
  },
];

function getStatusIcon(status: EntryStatus) {
  switch (status) {
    case "draft":
      return <FileText className="h-4 w-4" />;
    case "submitted":
      return <Clock className="h-4 w-4" />;
    case "in-review":
      return <Eye className="h-4 w-4" />;
    case "approved":
    case "published":
      return <CheckCircle2 className="h-4 w-4" />;
    default:
      return <FileText className="h-4 w-4" />;
  }
}

function QualityScore({ score }: { score?: number }) {
  if (!score) return null;
  const color = score >= 90 ? "text-success" : score >= 70 ? "text-warning" : "text-error";
  return (
    <div className={`flex items-center gap-1 ${color}`}>
      <div className={`w-2 h-2 rounded-full ${score >= 90 ? "bg-success" : score >= 70 ? "bg-warning" : "bg-error"}`} />
      <span className="text-sm font-medium">{score}%</span>
    </div>
  );
}

export function ScoutEntriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredEntries = mockEntries.filter((entry) => {
    if (activeTab !== "all" && entry.status !== activeTab) return false;
    if (searchQuery && !entry.study.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const statusCounts = {
    all: mockEntries.length,
    draft: mockEntries.filter((e) => e.status === "draft").length,
    submitted: mockEntries.filter((e) => e.status === "submitted").length,
    "in-review": mockEntries.filter((e) => e.status === "in-review").length,
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      {/* Page Header */}
      <motion.div variants={item} className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Entries</h1>
          <p className="text-muted-foreground mt-1">
            Manage and track your SITN submissions
          </p>
        </div>
        <Button asChild className="gap-2">
          <Link href="/scout/entries/new">
            <Plus className="h-4 w-4" />
            New Entry
          </Link>
        </Button>
      </motion.div>

      {/* Deadline Banner */}
      <motion.div variants={item}>
        <div className="flex items-center gap-4 p-4 rounded-lg bg-warning/10 border border-warning/20">
          <AlertTriangle className="h-5 w-5 text-warning shrink-0" />
          <div className="flex-1">
            <p className="font-medium">Friday Noon Deadline</p>
            <p className="text-sm text-muted-foreground">
              Submit your entries by Friday, Dec 13 at 12:00 PM for Issue #247
            </p>
          </div>
          <Badge variant="warning" className="whitespace-nowrap">2 days remaining</Badge>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div variants={item} className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search entries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </motion.div>

      {/* Tabs */}
      <motion.div variants={item}>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All ({statusCounts.all})</TabsTrigger>
            <TabsTrigger value="draft">Drafts ({statusCounts.draft})</TabsTrigger>
            <TabsTrigger value="submitted">Submitted ({statusCounts.submitted})</TabsTrigger>
            <TabsTrigger value="in-review">In Review ({statusCounts["in-review"]})</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            <div className="space-y-4">
              {filteredEntries.map((entry) => (
                <motion.div key={entry.id} variants={item}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        {/* Status Icon */}
                        <div className={`p-2 rounded-lg ${
                          entry.status === "draft" ? "bg-muted text-muted-foreground" :
                          entry.status === "submitted" ? "bg-info/10 text-info" :
                          entry.status === "in-review" ? "bg-warning/10 text-warning" :
                          "bg-success/10 text-success"
                        }`}>
                          {getStatusIcon(entry.status)}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="font-semibold text-lg leading-tight">
                                {entry.study.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                {entry.study.institution}
                                {entry.study.author && ` • ${entry.study.author}`}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              <Badge variant={entry.status}>{entry.status.replace("-", " ")}</Badge>
                              <QualityScore score={entry.qualityChecks.score} />
                            </div>
                          </div>

                          {/* Headline */}
                          <div className="mt-3 p-3 rounded-lg bg-muted/50">
                            <p className="text-sm font-medium">&ldquo;{entry.headline.text}&rdquo;</p>
                            <p className="text-xs text-muted-foreground mt-1">{entry.headline.wordCount} words</p>
                          </div>

                          {/* Quality Checks */}
                          <div className="flex items-center gap-4 mt-4 text-sm">
                            <span className={entry.qualityChecks.biasDetected ? "text-error" : "text-success"}>
                              {entry.qualityChecks.biasDetected ? "⚠ Bias detected" : "✓ No bias"}
                            </span>
                            <span className={entry.qualityChecks.methodologyAvailable ? "text-success" : "text-warning"}>
                              {entry.qualityChecks.methodologyAvailable ? "✓ Methodology" : "? No methodology"}
                            </span>
                            <span className={entry.qualityChecks.linksValid ? "text-success" : "text-error"}>
                              {entry.qualityChecks.linksValid ? "✓ Links valid" : "✗ Broken links"}
                            </span>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                            <Button variant="outline" size="sm" className="gap-1" asChild>
                              <Link href={`/scout/entries/${entry.id}`}>
                                <Edit className="h-3 w-3" />
                                Edit
                              </Link>
                            </Button>
                            <Button variant="ghost" size="sm" className="gap-1" asChild>
                              <a href={entry.study.url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3" />
                                View Study
                              </a>
                            </Button>
                            {entry.status === "draft" && (
                              <Button variant="default" size="sm" className="ml-auto">
                                Submit Entry
                              </Button>
                            )}
                            <Button variant="ghost" size="sm" className="text-error hover:text-error">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {filteredEntries.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="font-semibold text-lg">No entries found</h3>
                    <p className="text-muted-foreground mt-1">
                      {searchQuery ? "Try a different search term" : "Create your first entry to get started"}
                    </p>
                    <Button asChild className="mt-4">
                      <Link href="/scout/entries/new">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Entry
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  );
}

