# SITN Workflow Documentation

**Studies in the News Production Guide**

*California Research Bureau • California State Library*

**Version 1.0 • December 2025**

---

## Overview

### Understanding the Production Pipeline

#### What is SITN?

The **Studies in the News (SITN)** newsletter is a weekly publication produced by the California Research Bureau at the California State Library. It is distributed to over **4,200 subscribers**, including state policy makers, legislative staff, and researchers, curating research studies relevant to California policy.

#### Weekly Production Timeline

| Day | Activity |
|-----|----------|
| Monday - Thursday | Scout Entries (content discovery) |
| Friday Noon | Submission Deadline |
| Monday | Review & Compilation |
| Wednesday 8 AM | Newsletter Published |

#### Key Roles in SITN Production

| Role | Responsibility |
|------|----------------|
| **Scout** | Discovers and creates entries from research studies |
| **Guest Editor** | Compiles entries and prepares weekly issue |
| **Proofreader** | Reviews for quality, grammar, and links |
| **Manager** | Final approval and headline optimization |
| **Coordinator** | Oversees entire workflow and configuration |

#### Core Capabilities

- AI-assisted quality checks (bias, methodology, rubric)
- Automated duplicate detection
- Link validation
- MailChimp integration
- Excel log automation
- Word document export

---

## Dashboard

### Your Central Hub

![Dashboard Screenshot](../public/docs/screenshots/01-dashboard.png)

#### Page Purpose

The Dashboard provides an at-a-glance view of the current week's newsletter production status. It serves as the starting point for all users, showing the production timeline, key metrics, recent entries, and issue progress.

#### Page Anatomy

| Component | Description |
|-----------|-------------|
| **Production Timeline** | Visual representation of the Friday noon to Wednesday 8 AM production cycle with day-by-day progress indicators |
| **Statistics Cards** | Shows entries submitted, items in review, published this month, and active team members |
| **Recent Entries** | Quick access to the latest submissions from scouts with status badges and scout attribution |
| **Issue Progress** | Progress bars showing scout submissions, quality checks passed, and entries compiled for current issue |

#### Related User Stories

- **PRD 5.4**: "As Sumeet, I can see overall production status and identify bottlenecks"
- **PRD 5.1**: "As a scout, I can see my submission status and feedback"

---

## Scout Entries (My Entries)

### Managing Your Submissions

![Scout Entries Screenshot](../public/docs/screenshots/02-scout-entries.png)

#### Page Purpose

This page serves as the scout's personal workspace where they can view, manage, and track all their entry submissions. Entries are organized by status (Draft, Submitted, In Review) and display quality scores and validation status.

#### Page Anatomy

| Component | Description |
|-----------|-------------|
| **Deadline Banner** | Prominent reminder of the Friday noon deadline with countdown showing days remaining |
| **Status Tabs** | Filter entries by status: All, Drafts, Submitted, In Review with counts for each category |
| **Entry Cards** | Each entry shows title, institution, headline preview, quality score percentage, and validation checks |
| **Quick Actions** | Edit, View Study, Submit Entry, and Delete buttons for managing individual entries |

#### Related User Stories

- **PRD 5.1**: "As a scout, I can see my submission status and any feedback from guest editors"
- **FR-1**: Auto-save drafts and submission tracking

---

## Create New Entry

### The Structured Entry Form

![New Entry Screenshot](../public/docs/screenshots/03-new-entry.png)

#### Page Purpose

The New Entry form guides scouts through creating complete, high-quality entries. It includes all required components (study information, blurb, headline, news article) and provides real-time AI-assisted quality checks and suggestions.

#### Page Anatomy

| Component | Description |
|-----------|-------------|
| **Study Information** | Title, URL, author(s), institution, and subject area selection. Required fields are marked with asterisks |
| **Blurb Section** | 100-200 word summary with word count indicator. AI Suggest button provides assistance with content generation |
| **Headline Section** | Headline input with AI-generated suggestions that can be clicked to auto-fill |
| **News Article (Optional)** | Source and URL fields for linking to news coverage of the study |
| **Quality Checks Panel** | Real-time validation for bias detection, methodology, rubric compliance, duplicates, and link validity |
| **Style Guide Reminders** | Contextual tips: California-centric language, avoid bias, include methodology, action-oriented headlines |

#### Related User Stories

- **PRD 5.1**: "As a scout, I can create entries using a structured form that guides me through all required components"
- **PRD 5.1**: "As a scout, I can see real-time quality feedback as I create entries"

---

## Guest Editor Compilation

### The Compilation Dashboard

![Guest Editor Compilation Screenshot](../public/docs/screenshots/05-guest-editor-compile.png)

#### Page Purpose

The Compilation Dashboard is the guest editor's primary workspace for reviewing all scout submissions, selecting entries for the current issue, and generating the Word document for review. It provides visibility into all scout folders and entry quality metrics.

#### Page Anatomy

| Component | Description |
|-----------|-------------|
| **Statistics Row** | Total submissions, scouts reporting, selected for issue, and needs review counts at a glance |
| **Scout Folders Panel** | List of all scouts with their subject areas, entry counts (submitted/expected), and last activity time |
| **Entries for Compilation** | Selectable entry list with Ready, Needs Review, and Duplicate status badges. Auto-Select Best button for efficiency |
| **Action Buttons** | Export to Word, Generate Word Document, Preview, and Submit for Review actions |

#### Related User Stories

- **PRD 5.2**: "As a guest editor, I can view all scout folders and entries in a single dashboard"
- **PRD 5.2**: "As a guest editor, I can bulk import selected entries into the Word template"
- **PRD 5.2**: "As a guest editor, I can automatically detect duplicate studies"

---

## Review Draft

### Quality Assurance Workflow

![Review Draft Screenshot](../public/docs/screenshots/06-review-current.png)

#### Page Purpose

The Review page enables proofreaders and managers to review compiled entries, run quality checks, validate links, optimize headlines, and provide feedback. It streamlines the multi-layer review process with automated assistance.

#### Page Anatomy

| Component | Description |
|-----------|-------------|
| **Draft Entries List** | All entries to review with subject badges, status icons, and comment counts for prioritization |
| **Review Checklist** | Grammar & Spelling, Formatting Consistency, Link Validation, Quote Accuracy, Headlines Optimized, Style Guide Adherence |
| **Entry Detail Panel** | Full blurb text with word count, headline optimization suggestions (current + AI alternatives), and link validation status |
| **Comments & Actions** | Comment thread for feedback, Request Revision and Approve Entry buttons, thumbs up/down voting |

#### Related User Stories

- **PRD 5.3**: "As a proofreader, I can review drafts with automated link validation and formatting checks"
- **PRD 5.3**: "As a manager, I can see headline suggestions and optimization options"

---

## MailChimp Integration

### Final Delivery Workflow

![MailChimp Integration Screenshot](../public/docs/screenshots/07-mailchimp.png)

#### Page Purpose

The MailChimp Integration page handles the final step of the production pipeline: previewing the newsletter, sending test emails to the review team, and scheduling the Wednesday 8 AM delivery to 4,200+ subscribers.

#### Page Anatomy

| Component | Description |
|-----------|-------------|
| **Newsletter Preview** | Live preview of the email as subscribers will see it, with header, entries summary, and footer |
| **Test Email Panel** | Select recipients (Guest Editor, Sumeet, Tom, MailChimp Handler) and send test emails before final scheduling |
| **Schedule Delivery** | Calendar widget showing Wednesday date, 8:00 AM Pacific Time, and subscriber count (4,200+) |
| **Export Options** | Copy HTML button for manual MailChimp paste, Export button for Word document download |

#### Related User Stories

- **FR-4**: Word document to MailChimp conversion
- **FR-4**: Test email distribution (4 recipients)
- **FR-4**: Scheduling interface (Wednesday 8 AM)

---

## Implementation Roadmap & TODOs

### Pages Requiring Implementation

The following pages currently return 404 errors and need to be implemented:

| Page | Route | Description | Priority |
|------|-------|-------------|----------|
| Content Discovery | `/scout/discovery` | Nexis Newsdesk integration for content discovery | High |
| Analytics | `/analytics` | Newsletter engagement metrics and production analytics | Medium |
| Team | `/team` | Team member profiles, roles, and subject assignments | Medium |
| Schedule | `/schedule` | Guest editor rotation calendar and deadline tracking | Medium |
| Settings | `/settings` | Style guide rules, rubric criteria, API settings | High |
| Help | `/help` | Contextual help, FAQ, and support information | Low |

### High Priority Features

1. **Firebase Authentication Integration** - Connect to Firebase Auth for role-based access control (Scout, Guest Editor, Proofreader, Manager, Coordinator)

2. **Firestore Data Layer** - Replace mock data with real Firestore collections for Entries, Issues, Scouts, and ExcelLogEntries

3. **AI Quality Checks (Genkit/ADK)** - Implement bias detection, methodology analysis, duplicate checking, and headline optimization using Gemini 3 Pro

### Medium Priority Features

1. **MailChimp API Integration** - Connect to MailChimp API v3 for campaign creation, test email sending, and scheduling

2. **Excel Log Automation** - Google Sheets API integration for auto-populating issue dates, subject areas, and study titles

3. **Word Document Export** - Implement template-based Word document generation for guest editor compilation

### Low Priority Features

1. **Microsoft Teams Integration** - Real-time collaboration via Microsoft Graph API for reviewer communication

2. **Nexis Newsdesk Integration** - Content Discovery page with Nexis Newsdesk API for research article discovery

### Minor UI Issues Identified

- Avatar images return 404 - Need to add placeholder avatars or implement Gravatar fallback
- Guest Editor submenu not expanding - Sidebar submenu navigation needs click handler implementation
- Review submenu not expanding - Similar to Guest Editor, submenu items need route implementation

---

## Resources

- **App URL**: http://localhost:3847
- **Documentation Page**: /documentation
- **Design Documents**: /design folder
- **Tech Stack**: Next.js 16, Firebase, Tailwind CSS, Shadcn/UI

*For questions, contact the CRB team.*

---

*SITN Workflow Documentation • Version 1.0 • December 2025*
*California Research Bureau • California State Library*

