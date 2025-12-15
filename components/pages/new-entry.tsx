"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Send,
  Link2,
  FileText,
  Newspaper,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Loader2,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SUBJECT_AREAS } from "@/lib/types";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function NewEntryPage() {
  const [studyTitle, setStudyTitle] = useState("");
  const [studyUrl, setStudyUrl] = useState("");
  const [author, setAuthor] = useState("");
  const [institution, setInstitution] = useState("");
  const [blurb, setBlurb] = useState("");
  const [headline, setHeadline] = useState("");
  const [newsSource, setNewsSource] = useState("");
  const [newsUrl, setNewsUrl] = useState("");
  const [subjectArea, setSubjectArea] = useState("");
  const [isCheckingQuality, setIsCheckingQuality] = useState(false);
  const [qualityChecks, setQualityChecks] = useState({
    biasDetected: false,
    methodologyAvailable: true,
    rubricCompliant: true,
    duplicateChecked: true,
    linksValid: true,
  });

  const wordCount = blurb.split(/\s+/).filter(Boolean).length;
  const headlineWordCount = headline.split(/\s+/).filter(Boolean).length;
  const isBlurbValid = wordCount >= 100 && wordCount <= 200;
  const isHeadlineValid = headlineWordCount >= 8 && headlineWordCount <= 12;

  const runQualityCheck = () => {
    setIsCheckingQuality(true);
    // Simulate AI quality check
    setTimeout(() => {
      setQualityChecks({
        biasDetected: blurb.toLowerCase().includes("clearly") || blurb.toLowerCase().includes("obviously"),
        methodologyAvailable: true,
        rubricCompliant: isBlurbValid && isHeadlineValid,
        duplicateChecked: true,
        linksValid: studyUrl.startsWith("http"),
      });
      setIsCheckingQuality(false);
    }, 1500);
  };

  const completionScore = [
    studyTitle,
    studyUrl,
    institution,
    blurb.length >= 100,
    headline,
    subjectArea,
  ].filter(Boolean).length / 6 * 100;

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      {/* Page Header */}
      <motion.div variants={item} className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/scout/entries">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold tracking-tight">Create New Entry</h1>
          <p className="text-muted-foreground">Add a study to this week&apos;s SITN issue</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Save className="h-4 w-4" />
            Save Draft
          </Button>
          <Button className="gap-2">
            <Send className="h-4 w-4" />
            Submit
          </Button>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div variants={item}>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Entry Completion</span>
              <span className="text-sm text-muted-foreground">{Math.round(completionScore)}%</span>
            </div>
            <Progress value={completionScore} className="h-2" />
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Study Section */}
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <CardTitle>Study Information</CardTitle>
                </div>
                <CardDescription>Enter details about the research study</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Study Title *</Label>
                  <Input
                    id="title"
                    placeholder="Enter the full study title"
                    value={studyTitle}
                    onChange={(e) => setStudyTitle(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="url">Study URL *</Label>
                  <div className="relative">
                    <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="url"
                      type="url"
                      placeholder="https://..."
                      className="pl-10"
                      value={studyUrl}
                      onChange={(e) => setStudyUrl(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="author">Author(s)</Label>
                    <Input
                      id="author"
                      placeholder="Dr. Jane Smith"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution *</Label>
                    <Input
                      id="institution"
                      placeholder="UC Berkeley"
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject Area *</Label>
                  <select
                    id="subject"
                    value={subjectArea}
                    onChange={(e) => setSubjectArea(e.target.value)}
                    className="flex h-10 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
                  >
                    <option value="">Select a subject area</option>
                    {SUBJECT_AREAS.map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Blurb Section */}
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-accent" />
                    <CardTitle>Blurb</CardTitle>
                  </div>
                  <Badge variant={isBlurbValid ? "success" : wordCount > 0 ? "warning" : "outline"}>
                    {wordCount} / 100-200 words
                  </Badge>
                </div>
                <CardDescription>Write a summary of the study findings (100-200 words)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Summarize the key findings of the study. You can quote directly from the study or paraphrase. Focus on California relevance and policy implications..."
                  className="min-h-[200px]"
                  value={blurb}
                  onChange={(e) => setBlurb(e.target.value)}
                />
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Sparkles className="h-3 w-3" />
                    AI Suggest
                  </Button>
                  <span>Get AI-assisted paraphrase suggestions</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Headline Section */}
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Headline</CardTitle>
                  <Badge variant={isHeadlineValid ? "success" : headlineWordCount > 0 ? "warning" : "outline"}>
                    {headlineWordCount} / 8-12 words
                  </Badge>
                </div>
                <CardDescription>Create an engaging headline (8-12 words)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Write a compelling headline..."
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                />
                
                <div className="p-3 rounded-lg bg-muted/50 space-y-2">
                  <p className="text-sm font-medium">AI Headline Suggestions:</p>
                  <div className="space-y-1">
                    {["Study: California Policy Impact Significant for Middle Class",
                      "New Research Reveals Key Findings on State Programs",
                      "Data Shows Promising Results for California Initiative"].map((suggestion, i) => (
                      <button
                        key={i}
                        className="w-full text-left text-sm p-2 rounded hover:bg-muted transition-colors"
                        onClick={() => setHeadline(suggestion)}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* News Article Section (Optional) */}
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Newspaper className="h-5 w-5 text-secondary" />
                  <CardTitle>News Article (Optional)</CardTitle>
                </div>
                <CardDescription>Link to a news article covering this study</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="newsSource">News Source</Label>
                    <Input
                      id="newsSource"
                      placeholder="LA Times, SF Chronicle..."
                      value={newsSource}
                      onChange={(e) => setNewsSource(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newsUrl">Article URL</Label>
                    <Input
                      id="newsUrl"
                      type="url"
                      placeholder="https://..."
                      value={newsUrl}
                      onChange={(e) => setNewsUrl(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quality Check Sidebar */}
        <motion.div variants={item} className="space-y-6">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Quality Checks</CardTitle>
              <CardDescription>AI-assisted validation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={runQualityCheck}
                disabled={isCheckingQuality || !studyTitle}
                className="w-full gap-2"
                variant="outline"
              >
                {isCheckingQuality ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Checking...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Run Quality Check
                  </>
                )}
              </Button>

              <Separator />

              <div className="space-y-3">
                <QualityCheckItem
                  label="Bias Detection"
                  passed={!qualityChecks.biasDetected}
                  description={qualityChecks.biasDetected ? "Potential bias detected" : "No obvious bias"}
                />
                <QualityCheckItem
                  label="Methodology Available"
                  passed={qualityChecks.methodologyAvailable}
                  description={qualityChecks.methodologyAvailable ? "Study includes methodology" : "No methodology found"}
                />
                <QualityCheckItem
                  label="Rubric Compliance"
                  passed={qualityChecks.rubricCompliant}
                  description={qualityChecks.rubricCompliant ? "Meets style guide" : "Review required"}
                />
                <QualityCheckItem
                  label="Duplicate Check"
                  passed={qualityChecks.duplicateChecked}
                  description="Not previously published"
                />
                <QualityCheckItem
                  label="Links Valid"
                  passed={qualityChecks.linksValid}
                  description={qualityChecks.linksValid ? "All URLs accessible" : "Check URLs"}
                />
              </div>

              <Separator />

              <div className="p-3 rounded-lg bg-muted/50">
                <p className="text-sm font-medium mb-2">Style Guide Reminders</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Use California-centric language</li>
                  <li>• Avoid loaded or biased terms</li>
                  <li>• Include methodology if available</li>
                  <li>• Keep headlines action-oriented</li>
                </ul>
              </div>

              {studyUrl && (
                <Button variant="ghost" size="sm" className="w-full gap-1" asChild>
                  <a href={studyUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3" />
                    View Original Study
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}

function QualityCheckItem({
  label,
  passed,
  description,
}: {
  label: string;
  passed: boolean;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">
      {passed ? (
        <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
      ) : (
        <AlertCircle className="h-5 w-5 text-warning shrink-0" />
      )}
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

