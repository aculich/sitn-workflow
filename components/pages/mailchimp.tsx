"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Clock,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Users,
  Eye,
  Copy,
  Download,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

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

// Mock data
const testRecipients = [
  { name: "Guest Editor", email: "editor@crb.ca.gov", status: "pending" },
  { name: "Sumeet Bedi", email: "sumeet.bedi@crb.ca.gov", status: "pending" },
  { name: "Tom Reynolds", email: "tom.reynolds@crb.ca.gov", status: "pending" },
  { name: "MailChimp Handler", email: "newsletter@crb.ca.gov", status: "pending" },
];

const issueStats = {
  entries: 12,
  subjectAreas: 7,
  wordCount: 2450,
  links: 24,
  linksValid: 24,
};

export function MailChimpPage() {
  const [isSendingTest, setIsSendingTest] = useState(false);
  const [testSent, setTestSent] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);

  const sendTestEmail = () => {
    setIsSendingTest(true);
    setTimeout(() => {
      setIsSendingTest(false);
      setTestSent(true);
    }, 2000);
  };

  const scheduleDelivery = () => {
    setIsScheduled(true);
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      {/* Page Header */}
      <motion.div variants={item} className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-secondary/10">
              <Mail className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">MailChimp Integration</h1>
              <p className="text-muted-foreground">Issue #247 • Final Delivery</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isScheduled ? (
            <Badge variant="success" className="gap-1 px-3 py-1">
              <CheckCircle2 className="h-4 w-4" />
              Scheduled for Wed 8 AM
            </Badge>
          ) : (
            <Badge variant="warning" className="gap-1 px-3 py-1">
              <Clock className="h-4 w-4" />
              Not Scheduled
            </Badge>
          )}
        </div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Issue Preview */}
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Newsletter Preview</CardTitle>
                    <CardDescription>Issue #247 • December 11, 2025</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Copy className="h-4 w-4" />
                      Copy HTML
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Download className="h-4 w-4" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Preview Frame */}
                <div className="border border-border rounded-lg overflow-hidden bg-white">
                  {/* Email Header */}
                  <div className="bg-primary p-6 text-center">
                    <h2 className="text-xl font-bold text-white">Studies in the News</h2>
                    <p className="text-primary-foreground/80 text-sm mt-1">
                      California Research Bureau Weekly Newsletter
                    </p>
                  </div>

                  {/* Email Body Preview */}
                  <div className="p-6 space-y-6">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">December 11, 2025</p>
                      <h3 className="text-lg font-semibold">This Week&apos;s Highlights</h3>
                    </div>

                    {/* Entry Preview */}
                    <div className="border-l-4 border-primary pl-4 py-2">
                      <Badge variant="outline" className="mb-2">Housing</Badge>
                      <h4 className="font-semibold">CA Housing Crisis Deepens: Middle-Income Families Hit Hardest</h4>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                        A comprehensive study from UC Berkeley finds that California&apos;s housing shortage has worsened by 23% over the past decade, with the greatest impact on middle-income families in urban areas...
                      </p>
                      <a href="#" className="text-sm text-primary font-medium mt-2 inline-block">Read More →</a>
                    </div>

                    <div className="border-l-4 border-info pl-4 py-2">
                      <Badge variant="outline" className="mb-2">Education</Badge>
                      <h4 className="font-semibold">Study: Education Funding Gaps Widen in Rural Districts</h4>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                        New analysis from the Public Policy Institute shows that rural California school districts receive 15% less per-pupil funding than urban counterparts...
                      </p>
                      <a href="#" className="text-sm text-primary font-medium mt-2 inline-block">Read More →</a>
                    </div>

                    <p className="text-sm text-muted-foreground text-center">
                      + 10 more entries across 7 policy areas
                    </p>
                  </div>

                  {/* Email Footer */}
                  <div className="bg-muted/30 p-4 text-center text-sm text-muted-foreground">
                    <p>California Research Bureau • California State Library</p>
                    <p className="mt-1">4,200+ subscribers</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{issueStats.entries} entries</span>
                    <span>{issueStats.subjectAreas} areas</span>
                    <span>{issueStats.wordCount} words</span>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Eye className="h-4 w-4" />
                    Full Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quality Checks */}
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>Pre-Send Quality Checks</CardTitle>
                <CardDescription>Automated validation before distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-success/5 border border-success/20">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <div>
                      <p className="font-medium text-sm">All Links Valid</p>
                      <p className="text-xs text-muted-foreground">{issueStats.linksValid}/{issueStats.links} links checked</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-success/5 border border-success/20">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <div>
                      <p className="font-medium text-sm">Formatting Valid</p>
                      <p className="text-xs text-muted-foreground">HTML renders correctly</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-success/5 border border-success/20">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <div>
                      <p className="font-medium text-sm">Images Optimized</p>
                      <p className="text-xs text-muted-foreground">All images load properly</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-success/5 border border-success/20">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <div>
                      <p className="font-medium text-sm">Spam Score Low</p>
                      <p className="text-xs text-muted-foreground">Score: 0.2/10</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Test Email */}
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>Test Email</CardTitle>
                <CardDescription>Send to review team before scheduling</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {testRecipients.map((recipient, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">
                          {recipient.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{recipient.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{recipient.email}</p>
                      </div>
                      {testSent ? (
                        <CheckCircle2 className="h-4 w-4 text-success" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-muted-foreground/30" />
                      )}
                    </div>
                  ))}
                </div>

                <Button
                  onClick={sendTestEmail}
                  disabled={isSendingTest || testSent}
                  className="w-full gap-2"
                >
                  {isSendingTest ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : testSent ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Test Sent Successfully
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Test Email
                    </>
                  )}
                </Button>

                {testSent && (
                  <p className="text-xs text-center text-muted-foreground">
                    Sent to 4 recipients • Check inboxes
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Schedule */}
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>Schedule Delivery</CardTitle>
                <CardDescription>Set publication time</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/50 text-center">
                  <Calendar className="h-8 w-8 mx-auto text-primary mb-2" />
                  <p className="font-semibold">Wednesday, Dec 11</p>
                  <p className="text-2xl font-bold mt-1">8:00 AM</p>
                  <p className="text-sm text-muted-foreground mt-1">Pacific Time</p>
                </div>

                <div className="flex items-center gap-2 p-3 rounded-lg bg-info/5 border border-info/20">
                  <Users className="h-4 w-4 text-info" />
                  <span className="text-sm">4,200+ subscribers</span>
                </div>

                <Button
                  onClick={scheduleDelivery}
                  disabled={!testSent || isScheduled}
                  className="w-full gap-2"
                  variant={isScheduled ? "secondary" : "default"}
                >
                  {isScheduled ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Scheduled
                    </>
                  ) : (
                    <>
                      <Clock className="h-4 w-4" />
                      Schedule for Wed 8 AM
                    </>
                  )}
                </Button>

                {!testSent && (
                  <p className="text-xs text-center text-muted-foreground">
                    Send test email first before scheduling
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Issue Stats */}
          <motion.div variants={item}>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Issue Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Entries</span>
                    <span className="text-sm font-medium">{issueStats.entries}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Subject Areas</span>
                    <span className="text-sm font-medium">{issueStats.subjectAreas}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Word Count</span>
                    <span className="text-sm font-medium">{issueStats.wordCount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">External Links</span>
                    <span className="text-sm font-medium">{issueStats.links}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated Read Time</span>
                    <span className="text-sm font-medium">~10 min</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

