'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  LayoutDashboard,
  FileEdit,
  PlusCircle,
  Layers,
  CheckSquare,
  Mail,
  BarChart3,
  Users,
  Calendar,
  Settings,
  HelpCircle,
  Search,
  AlertTriangle,
  CheckCircle2,
  Clock,
  BookOpen,
  Target,
  Workflow,
  AlertCircle,
} from 'lucide-react';

export function DocumentationPage() {
  return (
    <div className="space-y-8 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-8 h-8" />
          <h1 className="text-3xl font-bold">SITN Workflow Documentation</h1>
        </div>
        <p className="text-blue-100 text-lg max-w-3xl">
          A comprehensive guide to the Studies in the News (SITN) weekly newsletter production workflow. 
          This documentation covers all pages, features, and workflows within the application.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
            Version 1.0
          </Badge>
          <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
            Last Updated: December 2025
          </Badge>
        </div>
      </div>

      {/* Table of Contents */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            Quick Navigation
          </CardTitle>
          <CardDescription>Jump to any section of the documentation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { href: '#overview', label: 'Overview', icon: BookOpen },
              { href: '#dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { href: '#scout-entries', label: 'Scout Entries', icon: FileEdit },
              { href: '#new-entry', label: 'New Entry', icon: PlusCircle },
              { href: '#guest-editor', label: 'Guest Editor', icon: Layers },
              { href: '#review', label: 'Review', icon: CheckSquare },
              { href: '#mailchimp', label: 'MailChimp', icon: Mail },
              { href: '#roadmap', label: 'Roadmap & TODOs', icon: AlertTriangle },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 p-3 rounded-lg border hover:bg-gray-50 hover:border-blue-300 transition-colors"
              >
                <item.icon className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-sm">{item.label}</span>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Overview Section */}
      <section id="overview" className="scroll-mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Workflow className="w-6 h-6 text-blue-600" />
              Production Pipeline Overview
            </CardTitle>
            <CardDescription>
              Understanding the weekly SITN newsletter workflow from start to finish
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-700">
              The SITN Workflow application streamlines the production of the California Research Bureau&apos;s 
              weekly &quot;Studies in the News&quot; newsletter, distributed to over 4,200 subscribers including 
              state policy makers, legislative staff, and researchers.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                Weekly Timeline
              </h3>
              <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Mon', 'Wed'].map((day, i) => (
                  <div key={i} className={`p-3 rounded-lg ${i < 4 ? 'bg-green-100' : i === 4 ? 'bg-orange-100' : i === 5 ? 'bg-blue-100' : 'bg-emerald-100'}`}>
                    <div className="font-semibold">{day}</div>
                    <div className="text-xs text-gray-600 mt-1">
                      {i < 4 ? 'Scout Entries' : i === 4 ? 'Deadline (Noon)' : i === 5 ? 'Review' : 'Publish (8 AM)'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Key Roles</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge className="whitespace-nowrap bg-blue-600 text-white">Scout</Badge>
                    <span className="text-sm text-gray-600">Discovers and creates entries from research studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="whitespace-nowrap bg-purple-600 text-white">Guest Editor</Badge>
                    <span className="text-sm text-gray-600">Compiles entries and prepares weekly issue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="whitespace-nowrap bg-green-600 text-white">Proofreader</Badge>
                    <span className="text-sm text-gray-600">Reviews for quality, grammar, and links</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="whitespace-nowrap bg-orange-600 text-white">Manager</Badge>
                    <span className="text-sm text-gray-600">Final approval and headline optimization</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Core Capabilities</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    AI-assisted quality checks (bias, methodology, rubric)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Automated duplicate detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Link validation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    MailChimp integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Excel log automation
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Dashboard Section */}
      <section id="dashboard" className="scroll-mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <LayoutDashboard className="w-6 h-6 text-blue-600" />
              Dashboard
            </CardTitle>
            <CardDescription>
              Your central hub for monitoring weekly production progress
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative rounded-lg overflow-hidden border shadow-sm">
              <Image
                src="/docs/screenshots/01-dashboard.png"
                alt="Dashboard page screenshot"
                width={1400}
                height={900}
                className="w-full h-auto"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Page Purpose
                </h3>
                <p className="text-gray-700 text-sm">
                  The Dashboard provides an at-a-glance view of the current week&apos;s newsletter 
                  production status. It serves as the starting point for all users, showing the 
                  production timeline, key metrics, recent entries, and issue progress.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  Related User Stories
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Badge className="text-xs whitespace-nowrap bg-indigo-600 text-white hover:bg-indigo-700">PRD 5.4</Badge>
                    <span>&quot;As Sumeet, I can see overall production status and identify bottlenecks&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="text-xs whitespace-nowrap bg-indigo-600 text-white hover:bg-indigo-700">PRD 5.1</Badge>
                    <span>&quot;As a scout, I can see my submission status and feedback&quot;</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Page Anatomy</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Production Timeline</h4>
                  <p className="text-xs text-gray-600">Visual representation of the Friday noon to Wednesday 8 AM production cycle with day-by-day progress indicators.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Statistics Cards</h4>
                  <p className="text-xs text-gray-600">Shows entries submitted, items in review, published this month, and active team members.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Recent Entries</h4>
                  <p className="text-xs text-gray-600">Quick access to the latest submissions from scouts with status badges and scout attribution.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Issue Progress</h4>
                  <p className="text-xs text-gray-600">Progress bars showing scout submissions, quality checks passed, and entries compiled for current issue.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Scout Entries Section */}
      <section id="scout-entries" className="scroll-mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <FileEdit className="w-6 h-6 text-blue-600" />
              Scout Entries (My Entries)
            </CardTitle>
            <CardDescription>
              Manage and track your SITN entry submissions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative rounded-lg overflow-hidden border shadow-sm">
              <Image
                src="/docs/screenshots/02-scout-entries.png"
                alt="Scout Entries page screenshot"
                width={1400}
                height={900}
                className="w-full h-auto"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Page Purpose
                </h3>
                <p className="text-gray-700 text-sm">
                  This page serves as the scout&apos;s personal workspace where they can view, manage, 
                  and track all their entry submissions. Entries are organized by status (Draft, 
                  Submitted, In Review) and display quality scores and validation status.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  Related User Stories
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Badge className="text-xs whitespace-nowrap bg-indigo-600 text-white hover:bg-indigo-700">PRD 5.1</Badge>
                    <span>&quot;As a scout, I can see my submission status and any feedback from guest editors&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="text-xs whitespace-nowrap bg-indigo-600 text-white hover:bg-indigo-700">FR-1</Badge>
                    <span>Auto-save drafts and submission tracking</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Page Anatomy</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Deadline Banner</h4>
                  <p className="text-xs text-gray-600">Prominent reminder of the Friday noon deadline with countdown showing days remaining.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Status Tabs</h4>
                  <p className="text-xs text-gray-600">Filter entries by status: All, Drafts, Submitted, In Review with counts for each category.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Entry Cards</h4>
                  <p className="text-xs text-gray-600">Each entry shows title, institution, headline preview, quality score percentage, and validation checks.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Quick Actions</h4>
                  <p className="text-xs text-gray-600">Edit, View Study, Submit Entry, and Delete buttons for managing individual entries.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* New Entry Section */}
      <section id="new-entry" className="scroll-mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <PlusCircle className="w-6 h-6 text-blue-600" />
              Create New Entry
            </CardTitle>
            <CardDescription>
              The structured form for creating high-quality newsletter entries
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative rounded-lg overflow-hidden border shadow-sm">
              <Image
                src="/docs/screenshots/03-new-entry.png"
                alt="New Entry page screenshot"
                width={1400}
                height={900}
                className="w-full h-auto"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Page Purpose
                </h3>
                <p className="text-gray-700 text-sm">
                  The New Entry form guides scouts through creating complete, high-quality entries. 
                  It includes all required components (study information, blurb, headline, news article) 
                  and provides real-time AI-assisted quality checks and suggestions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  Related User Stories
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Badge className="text-xs whitespace-nowrap bg-indigo-600 text-white hover:bg-indigo-700">PRD 5.1</Badge>
                    <span>&quot;As a scout, I can create entries using a structured form that guides me through all required components&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="text-xs whitespace-nowrap bg-indigo-600 text-white hover:bg-indigo-700">PRD 5.1</Badge>
                    <span>&quot;As a scout, I can see real-time quality feedback as I create entries&quot;</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Page Anatomy</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Study Information</h4>
                  <p className="text-xs text-gray-600">Title, URL, author(s), institution, and subject area selection. Required fields are marked with asterisks.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Blurb Section</h4>
                  <p className="text-xs text-gray-600">100-200 word summary with word count indicator. AI Suggest button provides assistance with content generation.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Headline Section</h4>
                  <p className="text-xs text-gray-600">Headline input with AI-generated suggestions that can be clicked to auto-fill.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">News Article (Optional)</h4>
                  <p className="text-xs text-gray-600">Source and URL fields for linking to news coverage of the study.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Quality Checks Panel</h4>
                  <p className="text-xs text-gray-600">Real-time validation for bias detection, methodology, rubric compliance, duplicates, and link validity.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Style Guide Reminders</h4>
                  <p className="text-xs text-gray-600">Contextual tips: California-centric language, avoid bias, include methodology, action-oriented headlines.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Guest Editor Section */}
      <section id="guest-editor" className="scroll-mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Layers className="w-6 h-6 text-blue-600" />
              Guest Editor Compilation
            </CardTitle>
            <CardDescription>
              Compile scout entries into the weekly newsletter issue
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative rounded-lg overflow-hidden border shadow-sm">
              <Image
                src="/docs/screenshots/05-guest-editor-compile.png"
                alt="Guest Editor Compilation page screenshot"
                width={1400}
                height={900}
                className="w-full h-auto"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Page Purpose
                </h3>
                <p className="text-gray-700 text-sm">
                  The Compilation Dashboard is the guest editor&apos;s primary workspace for reviewing 
                  all scout submissions, selecting entries for the current issue, and generating 
                  the Word document for review. It provides visibility into all scout folders and 
                  entry quality metrics.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  Related User Stories
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Badge className="text-xs whitespace-nowrap bg-indigo-600 text-white hover:bg-indigo-700">PRD 5.2</Badge>
                    <span>&quot;As a guest editor, I can view all scout folders and entries in a single dashboard&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="text-xs whitespace-nowrap bg-indigo-600 text-white hover:bg-indigo-700">PRD 5.2</Badge>
                    <span>&quot;As a guest editor, I can bulk import selected entries into the Word template&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="text-xs whitespace-nowrap bg-indigo-600 text-white hover:bg-indigo-700">PRD 5.2</Badge>
                    <span>&quot;As a guest editor, I can automatically detect duplicate studies&quot;</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Page Anatomy</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Statistics Row</h4>
                  <p className="text-xs text-gray-600">Total submissions, scouts reporting, selected for issue, and needs review counts at a glance.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Scout Folders Panel</h4>
                  <p className="text-xs text-gray-600">List of all scouts with their subject areas, entry counts (submitted/expected), and last activity time.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Entries for Compilation</h4>
                  <p className="text-xs text-gray-600">Selectable entry list with Ready, Needs Review, and Duplicate status badges. Auto-Select Best button for efficiency.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Action Buttons</h4>
                  <p className="text-xs text-gray-600">Export to Word, Generate Word Document, Preview, and Submit for Review actions.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Review Section */}
      <section id="review" className="scroll-mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <CheckSquare className="w-6 h-6 text-blue-600" />
              Review Draft
            </CardTitle>
            <CardDescription>
              Proofreader and manager review workflow for quality assurance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative rounded-lg overflow-hidden border shadow-sm">
              <Image
                src="/docs/screenshots/06-review-current.png"
                alt="Review Draft page screenshot"
                width={1400}
                height={900}
                className="w-full h-auto"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Page Purpose
                </h3>
                <p className="text-gray-700 text-sm">
                  The Review page enables proofreaders and managers to review compiled entries, 
                  run quality checks, validate links, optimize headlines, and provide feedback. 
                  It streamlines the multi-layer review process with automated assistance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  Related User Stories
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Badge className="text-xs whitespace-nowrap bg-indigo-600 text-white hover:bg-indigo-700">PRD 5.3</Badge>
                    <span>&quot;As a proofreader, I can review drafts with automated link validation and formatting checks&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="text-xs whitespace-nowrap bg-indigo-600 text-white hover:bg-indigo-700">PRD 5.3</Badge>
                    <span>&quot;As a manager, I can see headline suggestions and optimization options&quot;</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Page Anatomy</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Draft Entries List</h4>
                  <p className="text-xs text-gray-600">All entries to review with subject badges, status icons, and comment counts for prioritization.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Review Checklist</h4>
                  <p className="text-xs text-gray-600">Grammar & Spelling, Formatting Consistency, Link Validation, Quote Accuracy, Headlines Optimized, Style Guide Adherence.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Entry Detail Panel</h4>
                  <p className="text-xs text-gray-600">Full blurb text with word count, headline optimization suggestions (current + AI alternatives), and link validation status.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Comments & Actions</h4>
                  <p className="text-xs text-gray-600">Comment thread for feedback, Request Revision and Approve Entry buttons, thumbs up/down voting.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* MailChimp Section */}
      <section id="mailchimp" className="scroll-mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Mail className="w-6 h-6 text-blue-600" />
              MailChimp Integration
            </CardTitle>
            <CardDescription>
              Final delivery and newsletter distribution workflow
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative rounded-lg overflow-hidden border shadow-sm">
              <Image
                src="/docs/screenshots/07-mailchimp.png"
                alt="MailChimp Integration page screenshot"
                width={1400}
                height={900}
                className="w-full h-auto"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Page Purpose
                </h3>
                <p className="text-gray-700 text-sm">
                  The MailChimp Integration page handles the final step of the production pipeline: 
                  previewing the newsletter, sending test emails to the review team, and scheduling 
                  the Wednesday 8 AM delivery to 4,200+ subscribers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  Related User Stories
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Badge className="text-xs whitespace-nowrap bg-indigo-600 text-white hover:bg-indigo-700">FR-4</Badge>
                    <span>Word document to MailChimp conversion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="text-xs whitespace-nowrap bg-indigo-600 text-white hover:bg-indigo-700">FR-4</Badge>
                    <span>Test email distribution (4 recipients)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="text-xs whitespace-nowrap bg-indigo-600 text-white hover:bg-indigo-700">FR-4</Badge>
                    <span>Scheduling interface (Wednesday 8 AM)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Page Anatomy</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Newsletter Preview</h4>
                  <p className="text-xs text-gray-600">Live preview of the email as subscribers will see it, with header, entries summary, and footer.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Test Email Panel</h4>
                  <p className="text-xs text-gray-600">Select recipients (Guest Editor, Sumeet, Tom, MailChimp Handler) and send test emails before final scheduling.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Schedule Delivery</h4>
                  <p className="text-xs text-gray-600">Calendar widget showing Wednesday date, 8:00 AM Pacific Time, and subscriber count (4,200+).</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Export Options</h4>
                  <p className="text-xs text-gray-600">Copy HTML button for manual MailChimp paste, Export button for Word document download.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Roadmap & TODOs Section */}
      <section id="roadmap" className="scroll-mt-4">
        <Card className="border-orange-200 bg-orange-50/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-orange-700">
              <AlertTriangle className="w-6 h-6" />
              Implementation Roadmap & TODOs
            </CardTitle>
            <CardDescription>
              Pages requiring implementation and identified issues from UI testing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-700">
              The following sections document pages that return 404 errors or have incomplete functionality. 
              These items should be prioritized for the next development sprint.
            </p>

            {/* 404 Pages */}
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-red-600">
                <AlertCircle className="w-5 h-5" />
                Pages Returning 404 (Not Implemented)
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border border-red-200 rounded-lg bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Search className="w-4 h-4 text-red-500" />
                    <span className="font-medium">Content Discovery</span>
                    <Badge variant="destructive" className="text-xs">404</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Route: <code className="bg-gray-100 px-1 rounded">/scout/discovery</code>
                  </p>
                  <p className="text-xs text-gray-500">
                    Should integrate Nexis Newsdesk and curated website lists for content discovery.
                    Related to PRD User Story: &quot;As a scout, I can discover news articles and studies through a centralized interface.&quot;
                  </p>
                </div>
                <div className="p-4 border border-red-200 rounded-lg bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-red-500" />
                    <span className="font-medium">Analytics</span>
                    <Badge variant="destructive" className="text-xs">404</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Route: <code className="bg-gray-100 px-1 rounded">/analytics</code>
                  </p>
                  <p className="text-xs text-gray-500">
                    Should display newsletter engagement metrics, Excel log tracking, and production analytics.
                    Future goal per PRD: &quot;Advanced analytics and engagement insights.&quot;
                  </p>
                </div>
                <div className="p-4 border border-red-200 rounded-lg bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-red-500" />
                    <span className="font-medium">Team</span>
                    <Badge variant="destructive" className="text-xs">404</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Route: <code className="bg-gray-100 px-1 rounded">/team</code>
                  </p>
                  <p className="text-xs text-gray-500">
                    Should display team member profiles, roles, subject area assignments, and availability.
                    Related to Scout data model and role-based access control.
                  </p>
                </div>
                <div className="p-4 border border-red-200 rounded-lg bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-red-500" />
                    <span className="font-medium">Schedule</span>
                    <Badge variant="destructive" className="text-xs">404</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Route: <code className="bg-gray-100 px-1 rounded">/schedule</code>
                  </p>
                  <p className="text-xs text-gray-500">
                    Should show guest editor rotation calendar (2-month blocks, alphabetical), proofreader assignments, and upcoming deadlines.
                  </p>
                </div>
                <div className="p-4 border border-red-200 rounded-lg bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="w-4 h-4 text-red-500" />
                    <span className="font-medium">Settings</span>
                    <Badge variant="destructive" className="text-xs">404</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Route: <code className="bg-gray-100 px-1 rounded">/settings</code>
                  </p>
                  <p className="text-xs text-gray-500">
                    Should include style guide rules configuration, rubric criteria, notification preferences, and MailChimp API settings.
                    Related to PRD: &quot;As Sumeet, I can configure style guide rules and rubric criteria.&quot;
                  </p>
                </div>
                <div className="p-4 border border-red-200 rounded-lg bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <HelpCircle className="w-4 h-4 text-red-500" />
                    <span className="font-medium">Help</span>
                    <Badge variant="destructive" className="text-xs">404</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Route: <code className="bg-gray-100 px-1 rounded">/help</code>
                  </p>
                  <p className="text-xs text-gray-500">
                    Should provide contextual help, FAQ, style guide reference, and support contact information.
                    This documentation page will be accessible at /documentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature TODOs */}
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-amber-600">
                <Clock className="w-5 h-5" />
                Features Requiring Implementation
              </h3>
              <div className="space-y-3">
                <div className="p-3 border border-amber-200 rounded-lg bg-white flex items-start gap-3">
                  <Badge className="whitespace-nowrap bg-red-600 text-white hover:bg-red-700">High</Badge>
                  <div>
                    <span className="font-medium text-sm">Firebase Authentication Integration</span>
                    <p className="text-xs text-gray-500 mt-1">Connect to Firebase Auth for role-based access control (Scout, Guest Editor, Proofreader, Manager, Coordinator)</p>
                  </div>
                </div>
                <div className="p-3 border border-amber-200 rounded-lg bg-white flex items-start gap-3">
                  <Badge className="whitespace-nowrap bg-red-600 text-white hover:bg-red-700">High</Badge>
                  <div>
                    <span className="font-medium text-sm">Firestore Data Layer</span>
                    <p className="text-xs text-gray-500 mt-1">Replace mock data with real Firestore collections for Entries, Issues, Scouts, and ExcelLogEntries</p>
                  </div>
                </div>
                <div className="p-3 border border-amber-200 rounded-lg bg-white flex items-start gap-3">
                  <Badge className="whitespace-nowrap bg-red-600 text-white hover:bg-red-700">High</Badge>
                  <div>
                    <span className="font-medium text-sm">AI Quality Checks (Genkit/ADK)</span>
                    <p className="text-xs text-gray-500 mt-1">Implement bias detection, methodology analysis, duplicate checking, and headline optimization using Gemini 3 Pro</p>
                  </div>
                </div>
                <div className="p-3 border border-amber-200 rounded-lg bg-white flex items-start gap-3">
                  <Badge className="whitespace-nowrap bg-amber-500 text-white hover:bg-amber-600">Medium</Badge>
                  <div>
                    <span className="font-medium text-sm">MailChimp API Integration</span>
                    <p className="text-xs text-gray-500 mt-1">Connect to MailChimp API v3 for campaign creation, test email sending, and scheduling</p>
                  </div>
                </div>
                <div className="p-3 border border-amber-200 rounded-lg bg-white flex items-start gap-3">
                  <Badge className="whitespace-nowrap bg-amber-500 text-white hover:bg-amber-600">Medium</Badge>
                  <div>
                    <span className="font-medium text-sm">Excel Log Automation</span>
                    <p className="text-xs text-gray-500 mt-1">Google Sheets API integration for auto-populating issue dates, subject areas, and study titles</p>
                  </div>
                </div>
                <div className="p-3 border border-amber-200 rounded-lg bg-white flex items-start gap-3">
                  <Badge className="whitespace-nowrap bg-amber-500 text-white hover:bg-amber-600">Medium</Badge>
                  <div>
                    <span className="font-medium text-sm">Word Document Export</span>
                    <p className="text-xs text-gray-500 mt-1">Implement template-based Word document generation for guest editor compilation</p>
                  </div>
                </div>
                <div className="p-3 border border-amber-200 rounded-lg bg-white flex items-start gap-3">
                  <Badge className="whitespace-nowrap bg-emerald-600 text-white hover:bg-emerald-700">Low</Badge>
                  <div>
                    <span className="font-medium text-sm">Microsoft Teams Integration</span>
                    <p className="text-xs text-gray-500 mt-1">Real-time collaboration via Microsoft Graph API for reviewer communication</p>
                  </div>
                </div>
                <div className="p-3 border border-amber-200 rounded-lg bg-white flex items-start gap-3">
                  <Badge className="whitespace-nowrap bg-emerald-600 text-white hover:bg-emerald-700">Low</Badge>
                  <div>
                    <span className="font-medium text-sm">Nexis Newsdesk Integration</span>
                    <p className="text-xs text-gray-500 mt-1">Content Discovery page with Nexis Newsdesk API for research article discovery</p>
                  </div>
                </div>
              </div>
            </div>

            {/* UI Issues */}
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-blue-600">
                <AlertCircle className="w-5 h-5" />
                Minor UI Issues Identified
              </h3>
              <div className="space-y-2">
                <div className="p-3 border rounded-lg bg-white flex items-start gap-3">
                  <Badge className="whitespace-nowrap bg-slate-600 text-white hover:bg-slate-700">UI</Badge>
                  <div>
                    <span className="text-sm">Avatar images return 404</span>
                    <p className="text-xs text-gray-500 mt-1">Path: /avatars/sumeet.jpg - Need to add placeholder avatars or implement Gravatar fallback</p>
                  </div>
                </div>
                <div className="p-3 border rounded-lg bg-white flex items-start gap-3">
                  <Badge className="whitespace-nowrap bg-slate-600 text-white hover:bg-slate-700">UI</Badge>
                  <div>
                    <span className="text-sm">Guest Editor submenu not expanding</span>
                    <p className="text-xs text-gray-500 mt-1">Sidebar submenu navigation needs click handler implementation</p>
                  </div>
                </div>
                <div className="p-3 border rounded-lg bg-white flex items-start gap-3">
                  <Badge className="whitespace-nowrap bg-slate-600 text-white hover:bg-slate-700">UI</Badge>
                  <div>
                    <span className="text-sm">Review submenu not expanding</span>
                    <p className="text-xs text-gray-500 mt-1">Similar to Guest Editor - submenu items need route implementation</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 pt-8">
        <p>
          SITN Workflow Documentation • Version 1.0 • December 2025
        </p>
        <p className="mt-1">
          California Research Bureau • California State Library
        </p>
      </div>
    </div>
  );
}

