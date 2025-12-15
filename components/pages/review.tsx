"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckSquare,
  CheckCircle2,
  XCircle,
  MessageSquare,
  Link2,
  AlertTriangle,
  Send,
  Eye,
  FileText,
  Sparkles,
  ThumbsUp,
  ThumbsDown,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

// Mock review data
const draftEntries = [
  {
    id: "1",
    headline: "CA Housing Crisis Deepens: Middle-Income Families Hit Hardest",
    blurb: "A comprehensive study from UC Berkeley finds that California's housing shortage has worsened by 23% over the past decade, with the greatest impact on middle-income families in urban areas. The research analyzed housing data from all 58 counties and found that median home prices have outpaced income growth by a factor of 3.5.",
    scout: "Maria Chen",
    subject: "Housing",
    status: "pending",
    comments: [],
    links: [
      { url: "https://berkeley.edu/study", valid: true },
      { url: "https://latimes.com/housing", valid: true },
    ],
  },
  {
    id: "2",
    headline: "Study: Education Funding Gaps Widen in Rural Districts",
    blurb: "New analysis from the Public Policy Institute shows that rural California school districts receive 15% less per-pupil funding than urban counterparts. The disparity has grown since 2019 and disproportionately affects districts in the Central Valley and mountain regions.",
    scout: "James Wilson",
    subject: "Education",
    status: "approved",
    comments: [
      { author: "Tom", text: "Great headline!", timestamp: "2h ago" },
    ],
    links: [
      { url: "https://ppic.org/education", valid: true },
    ],
  },
  {
    id: "3",
    headline: "Healthcare Deserts Expand in Central Valley Communities",
    blurb: "Healthcare access in California's Central Valley has declined sharply, with 12 rural hospitals closing since 2020. A new state report shows that residents in some areas must travel over 50 miles for emergency care.",
    scout: "Sarah Johnson",
    subject: "Health",
    status: "needs-revision",
    comments: [
      { author: "Sumeet", text: "Please check the hospital count - I think it's 11, not 12.", timestamp: "1h ago" },
    ],
    links: [
      { url: "https://chhs.ca.gov/report", valid: false },
    ],
  },
];

const reviewChecklist = [
  { id: "grammar", label: "Grammar & Spelling", checked: true },
  { id: "formatting", label: "Formatting Consistency", checked: true },
  { id: "links", label: "All Links Valid", checked: false },
  { id: "quotes", label: "Quote Accuracy", checked: true },
  { id: "headlines", label: "Headlines Optimized", checked: false },
  { id: "style", label: "Style Guide Adherence", checked: true },
];

export function ReviewPage() {
  const [selectedEntry, setSelectedEntry] = useState(draftEntries[0]);
  const [comment, setComment] = useState("");
  const [checklist, setChecklist] = useState(reviewChecklist);

  const toggleCheck = (id: string) => {
    setChecklist(prev =>
      prev.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const checklistProgress = (checklist.filter(c => c.checked).length / checklist.length) * 100;

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      {/* Page Header */}
      <motion.div variants={item} className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <CheckSquare className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Review Draft</h1>
              <p className="text-muted-foreground">Issue #247 • Proofreader & Manager Review</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="warning" className="gap-1">
            <AlertTriangle className="h-3 w-3" />
            1 entry needs revision
          </Badge>
          <Button variant="outline" className="gap-2">
            <MessageSquare className="h-4 w-4" />
            Request Changes
          </Button>
          <Button variant="success" className="gap-2">
            <CheckCircle2 className="h-4 w-4" />
            Approve All
          </Button>
        </div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Entry List */}
        <motion.div variants={item} className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Draft Entries</CardTitle>
              <CardDescription>{draftEntries.length} entries to review</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {draftEntries.map((entry) => (
                <button
                  key={entry.id}
                  onClick={() => setSelectedEntry(entry)}
                  className={`w-full p-3 rounded-lg border text-left transition-all ${
                    selectedEntry.id === entry.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-border/80 hover:bg-muted/30"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-1.5 rounded-full shrink-0 ${
                      entry.status === "approved" ? "bg-success/10 text-success" :
                      entry.status === "needs-revision" ? "bg-error/10 text-error" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {entry.status === "approved" ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : entry.status === "needs-revision" ? (
                        <XCircle className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm line-clamp-2">{entry.headline}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">{entry.subject}</Badge>
                        {entry.comments.length > 0 && (
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            {entry.comments.length}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Review Checklist */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Review Checklist</CardTitle>
              <div className="flex items-center gap-2 mt-2">
                <Progress value={checklistProgress} className="h-2 flex-1" />
                <span className="text-sm text-muted-foreground">{Math.round(checklistProgress)}%</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {checklist.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      item.checked
                        ? "border-success bg-success text-white"
                        : "border-muted-foreground/30"
                    }`}>
                      {item.checked && <CheckCircle2 className="h-3 w-3" />}
                    </div>
                    <span className={`text-sm ${item.checked ? "line-through text-muted-foreground" : ""}`}>
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Entry Detail */}
        <motion.div variants={item} className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={
                      selectedEntry.status === "approved" ? "success" :
                      selectedEntry.status === "needs-revision" ? "destructive" :
                      "warning"
                    }>
                      {selectedEntry.status.replace("-", " ")}
                    </Badge>
                    <Badge variant="outline">{selectedEntry.subject}</Badge>
                  </div>
                  <CardTitle className="text-xl">{selectedEntry.headline}</CardTitle>
                  <CardDescription className="mt-1">by {selectedEntry.scout}</CardDescription>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon">
                    <ThumbsUp className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ThumbsDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Blurb */}
              <div>
                <h4 className="font-medium mb-2">Blurb</h4>
                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <p className="text-sm leading-relaxed">{selectedEntry.blurb}</p>
                </div>
                <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                  <span>{selectedEntry.blurb.split(/\s+/).length} words</span>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Sparkles className="h-3 w-3" />
                    Suggest Edits
                  </Button>
                </div>
              </div>

              {/* Headline Suggestions */}
              <div>
                <h4 className="font-medium mb-2">Headline Optimization</h4>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="font-medium text-sm">{selectedEntry.headline}</p>
                    <p className="text-xs text-muted-foreground mt-1">Current headline</p>
                  </div>
                  <div className="p-3 rounded-lg border border-border hover:border-primary/50 cursor-pointer transition-colors">
                    <p className="text-sm">Housing Shortage Worsens 23% Over Past Decade: Study</p>
                    <p className="text-xs text-muted-foreground mt-1">AI suggestion • More specific</p>
                  </div>
                  <div className="p-3 rounded-lg border border-border hover:border-primary/50 cursor-pointer transition-colors">
                    <p className="text-sm">UC Berkeley: Middle-Class Families Bear Brunt of Housing Crisis</p>
                    <p className="text-xs text-muted-foreground mt-1">AI suggestion • Source emphasis</p>
                  </div>
                </div>
              </div>

              {/* Link Validation */}
              <div>
                <h4 className="font-medium mb-2">Link Validation</h4>
                <div className="space-y-2">
                  {selectedEntry.links.map((link, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                      {link.valid ? (
                        <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                      ) : (
                        <XCircle className="h-4 w-4 text-error shrink-0" />
                      )}
                      <span className="text-sm truncate flex-1">{link.url}</span>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Comments */}
              <div>
                <h4 className="font-medium mb-3">Comments</h4>
                {selectedEntry.comments.length > 0 ? (
                  <div className="space-y-3 mb-4">
                    {selectedEntry.comments.map((c, i) => (
                      <div key={i} className="flex gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs">{c.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{c.author}</span>
                            <span className="text-xs text-muted-foreground">{c.timestamp}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{c.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground mb-4">No comments yet</p>
                )}
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Add a comment..."
                    className="min-h-[80px]"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
                <div className="flex justify-end gap-2 mt-2">
                  <Button variant="outline" size="sm">Cancel</Button>
                  <Button size="sm" className="gap-1">
                    <Send className="h-3 w-3" />
                    Send
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t border-border">
                <Button variant="outline" className="flex-1 gap-2">
                  <XCircle className="h-4 w-4" />
                  Request Revision
                </Button>
                <Button variant="success" className="flex-1 gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Approve Entry
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}

