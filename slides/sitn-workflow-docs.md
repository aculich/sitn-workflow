---
marp: true
theme: uncover
title: SITN Workflow Documentation
subtitle: Studies in the News Production Guide
author: California Research Bureau
description: Comprehensive guide to the SITN weekly newsletter production workflow
class: lead
paginate: true
backgroundColor: #1e3a5f
color: #ffffff
---

<!-- _class: lead -->
<!-- _backgroundColor: #1e3a5f -->

# SITN Workflow Documentation

## Studies in the News Production Guide

*California Research Bureau • California State Library*

**Version 1.0 • December 2025**

---

<!-- _class: lead -->
<!-- _backgroundColor: #2563eb -->

# Overview

## Understanding the Production Pipeline

---

## What is SITN?

### Studies in the News Newsletter

- Weekly newsletter produced by the **California Research Bureau**
- Distributed to **4,200+ subscribers**
- Includes state policy makers, legislative staff, and researchers
- Curates research studies relevant to California policy

---

## Weekly Production Timeline

| Day | Activity |
|-----|----------|
| **Mon - Thu** | Scout Entries (content discovery) |
| **Friday Noon** | Submission Deadline |
| **Monday** | Review & Compilation |
| **Wednesday 8 AM** | Newsletter Published |

---

## Key Roles in SITN Production

| Role | Responsibility |
|------|----------------|
| **Scout** | Discovers and creates entries from research studies |
| **Guest Editor** | Compiles entries and prepares weekly issue |
| **Proofreader** | Reviews for quality, grammar, and links |
| **Manager** | Final approval and headline optimization |
| **Coordinator** | Oversees entire workflow and configuration |

---

## Core Capabilities

- ✅ AI-assisted quality checks (bias, methodology, rubric)
- ✅ Automated duplicate detection
- ✅ Link validation
- ✅ MailChimp integration
- ✅ Excel log automation
- ✅ Word document export

---

<!-- _class: lead -->
<!-- _backgroundColor: #059669 -->

# Dashboard

## Your Central Hub

---

## Dashboard Purpose

The Dashboard provides an **at-a-glance view** of the current week's newsletter production status.

### It serves as:
- Starting point for all users
- Production timeline monitor
- Key metrics display
- Quick access to recent entries

---

![bg contain](../public/docs/screenshots/01-dashboard.png)

---

## Dashboard Anatomy

| Component | Description |
|-----------|-------------|
| **Production Timeline** | Friday noon → Wednesday 8 AM cycle |
| **Statistics Cards** | Entries submitted, in review, published |
| **Recent Entries** | Latest scout submissions with status |
| **Issue Progress** | Progress bars for current issue |

---

## Related User Stories (Dashboard)

- **PRD 5.4**: "As Sumeet, I can see overall production status and identify bottlenecks"
- **PRD 5.1**: "As a scout, I can see my submission status and feedback"

---

<!-- _class: lead -->
<!-- _backgroundColor: #7c3aed -->

# Scout Entries

## Managing Your Submissions

---

## Scout Entries Purpose

The **My Entries** page is the scout's personal workspace for:

- Viewing all entry submissions
- Managing draft and submitted entries
- Tracking review status
- Seeing quality scores and validation

---

![bg contain](../public/docs/screenshots/02-scout-entries.png)

---

## Scout Entries Anatomy

| Component | Description |
|-----------|-------------|
| **Deadline Banner** | Friday noon countdown |
| **Status Tabs** | All, Drafts, Submitted, In Review |
| **Entry Cards** | Title, institution, headline, quality score |
| **Quick Actions** | Edit, View Study, Submit, Delete |

---

## Related User Stories (Scout Entries)

- **PRD 5.1**: "As a scout, I can see my submission status and any feedback from guest editors"
- **FR-1**: Auto-save drafts and submission tracking

---

<!-- _class: lead -->
<!-- _backgroundColor: #dc2626 -->

# New Entry

## Creating Quality Content

---

## New Entry Purpose

The New Entry form **guides scouts** through creating complete, high-quality entries with:

- All required components
- Real-time AI quality checks
- Headline suggestions
- Style guide reminders

---

![bg contain](../public/docs/screenshots/03-new-entry.png)

---

## New Entry Form Components

| Section | Description |
|---------|-------------|
| **Study Information** | Title, URL, authors, institution, subject |
| **Blurb** | 100-200 word summary with AI suggestions |
| **Headline** | AI-generated headline options |
| **News Article** | Optional news coverage link |
| **Quality Checks** | Real-time validation panel |

---

## Quality Checks Panel

- ✅ Bias Detection
- ✅ Methodology Analysis
- ✅ Rubric Compliance
- ✅ Duplicate Check
- ✅ Link Validation

---

## Related User Stories (New Entry)

- **PRD 5.1**: "As a scout, I can create entries using a structured form that guides me through all required components"
- **PRD 5.1**: "As a scout, I can see real-time quality feedback as I create entries"

---

<!-- _class: lead -->
<!-- _backgroundColor: #9333ea -->

# Guest Editor

## Compilation Dashboard

---

## Guest Editor Purpose

The Compilation Dashboard is for **reviewing all scout submissions**, selecting entries, and generating the Word document.

### Key Functions:
- View all scout folders
- Select entries for issue
- Detect duplicates
- Export to Word

---

![bg contain](../public/docs/screenshots/05-guest-editor-compile.png)

---

## Compilation Anatomy

| Component | Description |
|-----------|-------------|
| **Statistics Row** | Submissions, scouts, selected, needs review |
| **Scout Folders** | All scouts with entry counts |
| **Entries List** | Selectable with status badges |
| **Actions** | Export, Generate, Preview, Submit |

---

## Related User Stories (Guest Editor)

- **PRD 5.2**: "As a guest editor, I can view all scout folders and entries in a single dashboard"
- **PRD 5.2**: "As a guest editor, I can bulk import selected entries into the Word template"
- **PRD 5.2**: "As a guest editor, I can automatically detect duplicate studies"

---

<!-- _class: lead -->
<!-- _backgroundColor: #0891b2 -->

# Review Draft

## Quality Assurance

---

## Review Purpose

The Review page enables **proofreaders and managers** to:

- Review compiled entries
- Run quality checks
- Validate links
- Optimize headlines
- Provide feedback

---

![bg contain](../public/docs/screenshots/06-review-current.png)

---

## Review Anatomy

| Component | Description |
|-----------|-------------|
| **Draft Entries** | All entries with status icons |
| **Review Checklist** | Grammar, formatting, links, quotes |
| **Entry Detail** | Full blurb, headline suggestions |
| **Comments** | Feedback thread, approve/revise actions |

---

## Related User Stories (Review)

- **PRD 5.3**: "As a proofreader, I can review drafts with automated link validation and formatting checks"
- **PRD 5.3**: "As a manager, I can see headline suggestions and optimization options"

---

<!-- _class: lead -->
<!-- _backgroundColor: #ea580c -->

# MailChimp

## Newsletter Distribution

---

## MailChimp Purpose

The final step: **previewing, testing, and scheduling** the newsletter.

### Key Functions:
- Preview email as subscribers see it
- Send test emails
- Schedule Wednesday 8 AM delivery
- Export HTML for manual paste

---

![bg contain](../public/docs/screenshots/07-mailchimp.png)

---

## MailChimp Anatomy

| Component | Description |
|-----------|-------------|
| **Newsletter Preview** | Live preview as subscribers see it |
| **Test Email Panel** | Select recipients, send tests |
| **Schedule Delivery** | Wednesday 8 AM calendar |
| **Export Options** | Copy HTML, Export Word |

---

## Related User Stories (MailChimp)

- **FR-4**: Word document to MailChimp conversion
- **FR-4**: Test email distribution (4 recipients)
- **FR-4**: Scheduling interface (Wednesday 8 AM)

---

<!-- _class: lead -->
<!-- _backgroundColor: #b45309 -->

# Roadmap & TODOs

## Implementation Status

---

## Pages Requiring Implementation

| Page | Route | Priority |
|------|-------|----------|
| Content Discovery | `/scout/discovery` | High |
| Analytics | `/analytics` | Medium |
| Team | `/team` | Medium |
| Schedule | `/schedule` | Medium |
| Settings | `/settings` | High |
| Help | `/help` | Low |

---

## High Priority Features

1. **Firebase Authentication** - Role-based access control
2. **Firestore Data Layer** - Replace mock data
3. **AI Quality Checks** - Gemini 3 Pro integration

---

## Medium Priority Features

1. **MailChimp API Integration** - Campaign automation
2. **Excel Log Automation** - Google Sheets API
3. **Word Document Export** - Template-based generation

---

## Low Priority Features

1. **Microsoft Teams Integration** - Real-time collaboration
2. **Nexis Newsdesk Integration** - Content discovery

---

## Minor UI Issues

- Avatar images return 404
- Guest Editor submenu not expanding
- Review submenu not expanding

---

<!-- _class: lead -->
<!-- _backgroundColor: #1e3a5f -->

# Thank You

## SITN Workflow Documentation

*California Research Bureau • California State Library*

**Version 1.0 • December 2025**

---

## Resources

- **App URL**: http://localhost:3847
- **Documentation**: /documentation
- **Design Docs**: /design folder
- **Tech Stack**: Next.js 16, Firebase, Tailwind CSS

*For questions, contact the CRB team.*

