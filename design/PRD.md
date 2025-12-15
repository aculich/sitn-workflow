# Studies in the News Workflow - Product Requirements Document

**Version:** 1.0  
**Date:** December 9, 2025  
**Author:** Development Team  
**Status:** Design Phase

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Problem Statement](#2-problem-statement)
3. [Goals & Non-Goals](#3-goals--non-goals)
4. [User Personas](#4-user-personas)
5. [User Stories](#5-user-stories)
6. [Functional Requirements](#6-functional-requirements)
7. [Non-Functional Requirements](#7-non-functional-requirements)
8. [System Architecture](#8-system-architecture)
9. [Data Model](#9-data-model)
10. [Success Metrics](#10-success-metrics)

---

## 1. Executive Summary

The Studies in the News Workflow is an AI-assisted platform designed to streamline the weekly production of the CRB's Studies in the News newsletter. The system addresses manual coordination challenges, quality consistency issues, and scalability limitations in the current workflow while maintaining the high standards expected by 4,200+ subscribers.

**Reference:** [Studies in the News Newsletter](https://www.library.ca.gov/crb/) · [CRB Publications](https://www.library.ca.gov/crb/)

## 2. Problem Statement

### Current State
- **Manual Coordination** - Scouts, guest editors, proofreaders, and managers coordinate across multiple systems (OneDrive, Teams, MailChimp, Excel)
- **Inconsistent Quality** - Varying interpretation of guidelines across scouts leads to inconsistent entry quality
- **Limited Scalability** - Rotating roles (4-5 week guest editor blocks, weekly proofreader rotation) create process friction
- **Time Pressure** - Friday noon to Wednesday 8 AM production cycle creates tight deadlines
- **Multiple Review Layers** - 4-5 sets of eyes on each issue strains limited staff resources
- **No Automated Quality Checks** - Manual detection of bias, methodology issues, duplicates, and broken links
- **Knowledge Silos** - Memory-dependent processes with minimal documentation

### Desired State
- **Unified Workflow Platform** - Single system for all production stages
- **Consistent Quality** - AI-assisted rubric enforcement and quality checks
- **Streamlined Review** - Reduced review layers with automated assistance
- **Automated Processes** - Duplicate detection, link validation, formatting enforcement
- **Scalable Operations** - Support for rotating roles without process degradation
- **Process Documentation** - Clear workflows and guidelines embedded in system

## 3. Goals & Non-Goals

### Goals (This Phase)
- ✅ Streamline scout entry creation and submission
- ✅ Automate guest editor compilation workflow
- ✅ Reduce manual coordination between roles
- ✅ Implement AI-assisted quality checks (bias, methodology, duplicates)
- ✅ Integrate MailChimp workflow
- ✅ Automate Excel log tracking
- ✅ Establish MVP foundation by Q1 2026

### Non-Goals (This Phase)
- ❌ Replacing human judgment with AI
- ❌ Full automation of content selection
- ❌ Changing newsletter format or structure
- ❌ Replacing MailChimp as distribution platform
- ❌ Modifying subscriber experience

### Future Goals
- Advanced analytics and engagement insights
- Policy relevance scoring
- Automated feedback collection
- Integration with legislative calendar
- Enhanced relationship building with subscribers

## 4. User Personas

### Primary Users

#### 4.1 Scouts
- **Background:** CRB researchers and librarians assigned to specific policy subject areas
- **Goals:** Efficiently discover and create high-quality entries, meet Friday noon deadline
- **Pain Points:** Inconsistent guidelines interpretation, manual entry creation, unclear quality standards
- **Key Features:** Content discovery interface, entry creation tool, AI quality checks, submission tracking

#### 4.2 Guest Editors
- **Background:** Rotating role (2-month stretches, last name alphabetical), responsible for weekly compilation
- **Goals:** Efficiently compile entries from all scouts, format in Word template, coordinate review
- **Pain Points:** Manual copy/paste, duplicate checking, formatting inconsistencies, time pressure
- **Key Features:** Compilation dashboard, automated duplicate detection, template population, review coordination

#### 4.3 Proofreaders
- **Background:** Consistent role (Sumeet), quality control and formatting checks
- **Goals:** Review drafts for grammar, formatting, links, style guide adherence
- **Pain Points:** Manual link checking, formatting inconsistencies, unclear feedback mechanisms
- **Key Features:** Review interface, link validation, formatting checks, comment system

#### 4.4 Manager (Tom)
- **Background:** Final review and approval, headline optimization focus
- **Goals:** Ensure quality, optimize headlines, final approval before publication
- **Pain Points:** Multiple review layers, headline quality variation, approval workflow
- **Key Features:** Approval queue, headline optimization, final review checklist

#### 4.5 Project Coordinator (Sumeet)
- **Background:** Overall process management, MailChimp handler, proofreader
- **Goals:** Ensure process efficiency, quality consistency, reduce manual coordination
- **Pain Points:** Multiple roles, manual coordination, process inconsistencies, limited staff
- **Key Features:** Dashboard overview, process analytics, configuration management

### Secondary Users

#### 4.6 Newsletter Subscribers
- **Background:** 4,200+ state policy makers, legislative staff, researchers
- **Goals:** Receive timely, relevant, high-quality research summaries
- **Key Features:** (Indirect) Quality improvements benefit subscribers

## 5. User Stories

### Scout Workflow
```
As a scout, I can discover news articles and studies through a centralized 
interface that integrates Nexis Newsdesk and curated website lists, so I can 
efficiently find relevant content for my subject area.
Priority: High
```

```
As a scout, I can create entries using a structured form that guides me 
through all required components (study, blurb, news article, headline), so I 
can ensure consistency and completeness.
Priority: High
```

```
As a scout, I can see real-time quality feedback (bias detection, methodology 
checks, rubric enforcement) as I create entries, so I can improve quality 
before submission.
Priority: High
```

```
As a scout, I can see my submission status and any feedback from guest 
editors or reviewers, so I can learn and improve over time.
Priority: Medium
```

### Guest Editor Workflow
```
As a guest editor, I can view all scout folders and entries in a single 
dashboard, so I can efficiently compile the weekly newsletter draft.
Priority: High
```

```
As a guest editor, I can automatically detect duplicate studies against the 
Excel log, so I can prevent study reuse across issues.
Priority: High
```

```
As a guest editor, I can bulk import selected entries into the Word template 
with automatic formatting, so I can reduce manual copy/paste errors.
Priority: High
```

```
As a guest editor, I can track review status and resolve feedback from 
proofreaders and managers, so I can efficiently produce the final draft.
Priority: High
```

### Review Workflow
```
As a proofreader, I can review drafts with automated link validation and 
formatting checks, so I can focus on higher-value quality issues.
Priority: High
```

```
As a manager, I can see headline suggestions and optimization options, so I can 
improve engagement without spending time crafting alternatives.
Priority: High
```

```
As a reviewer, I can collaborate in real-time with other reviewers using 
Teams integration, so we can efficiently complete reviews without conflicts.
Priority: High
```

### Process Management
```
As Sumeet, I can see the overall production status and identify bottlenecks, so 
I can proactively address issues before they impact deadlines.
Priority: High
```

```
As Sumeet, I can configure style guide rules and rubric criteria, so the system 
can enforce consistent quality standards across all scouts.
Priority: Medium
```

## 6. Functional Requirements

### FR-1: Scout Entry Management
- Structured entry creation form with all required components
- Auto-save drafts and submission tracking
- Real-time quality checks (bias, methodology, rubric enforcement)
- Duplicate detection against Excel log
- Link validation for all URLs
- Friday noon submission deadline enforcement

### FR-2: Guest Editor Compilation
- Dashboard view of all scout folders and entries
- Bulk entry selection and import
- Automated Word template population
- Duplicate prevention before inclusion
- Formatting enforcement per style guide
- Review handoff coordination

### FR-3: Collaborative Review System
- Teams integration for multi-user editing
- Track changes and comment system
- Review checklist and status tracking
- Link validation tool
- Grammar and formatting checks
- Approval workflow

### FR-4: MailChimp Integration
- Word document to MailChimp conversion
- Test email distribution (4 recipients)
- Scheduling interface (Wednesday 8 AM)
- Send status monitoring

### FR-5: Excel Log Automation
- Auto-populate issue date, subject areas, study titles
- Duplicate prevention database
- Historical tracking and search

### FR-6: AI-Assisted Quality Control
- Bias detection in study content and blurbs
- Methodology availability and quality checks
- Rubric enforcement against style guide
- Duplicate detection across issues
- Link validation and broken link detection
- Headline and lead-as suggestions

### FR-7: Role-Based Access Control
- Scout access to assigned subject area
- Guest editor access during assigned weeks
- Proofreader and manager review access
- Coordinator full access and configuration

## 7. Non-Functional Requirements

### NFR-1: Performance
- Page load time < 2 seconds
- Real-time quality checks < 1 second
- Bulk import processing < 5 seconds for 20 entries
- MailChimp integration < 30 seconds

### NFR-2: Reliability
- 99.9% uptime during production hours (Friday-Wednesday)
- Auto-save every 30 seconds
- Data backup and recovery
- Graceful error handling

### NFR-3: Security
- Firebase Authentication
- Role-based access control
- Data encryption at rest and in transit
- Audit logging for all actions

### NFR-4: Usability
- Intuitive interface requiring minimal training
- Mobile-responsive design
- Accessibility (WCAG 2.1 AA)
- Clear error messages and guidance

### NFR-5: Scalability
- Support 20+ concurrent users
- Handle 100+ entries per week
- Scale with growing subscriber base
- Cloud-native architecture

## 8. System Architecture

```
┌────────────────────────────────────────────────────────────┐
│                     Frontend (Next.js 16)                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐   │
│  │  Scout   │ │  Guest   │ │  Review  │ │   MailChimp  │   │
│  │  Portal  │ │  Editor  │ │  System  │ │  Integration │   │
│  └──────────┘ └──────────┘ └──────────┘ └──────────────┘   │
└────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌────────────────────────────────────────────────────────────┐
│                    Backend (Firebase + Cloud Run)          │
│  ┌──────────────┐ ┌──────────────┐ ┌───────────────────┐   │
│  │ Cloud Funcs  │ │ Genkit Agent │ │ Python ADK Service│   │
│  │ (Node.js)    │ │ (AI Runtime) │ │ (Quality Checks)  │   │
│  └──────────────┘ └──────────────┘ └───────────────────┘   │
└────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌────────────────────────────────────────────────────────────┐
│                         Data Layer                         │
│  ┌──────────────┐ ┌──────────────┐ ┌───────────────────┐   │
│  │  Firestore   │ │   Storage    │ │  External APIs    │   │
│  │ (Entries,    │ │ (PDFs, Docs) │ │ (MailChimp, Teams)│   │
│  │  Issues)     │ │              │ │                   │   │
│  └──────────────┘ └──────────────┘ └───────────────────┘   │
└────────────────────────────────────────────────────────────┘
```

## 9. Data Model

### Entry
```typescript
interface Entry {
  id: string;
  scoutId: string;
  subjectArea: string;
  status: 'draft' | 'submitted' | 'in-compilation' | 'published';
  
  // Study Component
  study: {
    title: string;
    url: string;
    author?: string;
    institution?: string;
    publicationDate?: Date;
    pdfUrl?: string;
  };
  
  // Blurb Component
  blurb: {
    text: string;
    wordCount: number;
    source: 'study' | 'news' | 'paraphrase';
    originalQuote?: string;
  };
  
  // News Article Component
  newsArticle?: {
    source: string;
    url: string;
    publicationDate: Date;
  };
  
  // Headline Component
  headline: {
    text: string;
    wordCount: number;
    suggestions?: string[];
  };
  
  // Quality Checks
  qualityChecks: {
    biasDetected: boolean;
    methodologyAvailable: boolean;
    rubricCompliant: boolean;
    duplicateChecked: boolean;
    linksValid: boolean;
  };
  
  submittedAt?: Timestamp;
  publishedInIssue?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### Issue
```typescript
interface Issue {
  id: string;
  issueDate: Date; // Wednesday publication date
  status: 'draft' | 'in-review' | 'approved' | 'published';
  
  guestEditorId: string;
  proofreaderId: string;
  managerId: string;
  
  entries: EntryReference[];
  subjectAreas: string[];
  
  // MailChimp
  mailchimpCampaignId?: string;
  scheduledFor?: Timestamp;
  publishedAt?: Timestamp;
  
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### Scout
```typescript
interface Scout {
  id: string;
  name: string;
  email: string;
  subjectArea: string;
  role: 'scout' | 'guest-editor' | 'proofreader' | 'manager' | 'coordinator';
  
  // Guest Editor Schedule
  guestEditorWeeks?: Date[];
  availability?: {
    unavailable: Date[];
    preferences: Date[];
  };
  
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### ExcelLogEntry
```typescript
interface ExcelLogEntry {
  id: string;
  issueDate: Date;
  subjectArea: string;
  studyTitle: string;
  entryId: string;
  createdAt: Timestamp;
}
```

## 10. Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Time to compile draft | < 2 hours | Time tracking |
| Review cycle time | < 4 hours | Time tracking |
| Duplicate prevention | 100% detection | Audit |
| Link validation | 100% valid links | Automated check |
| Quality consistency | > 90% rubric compliance | AI scoring |
| Staff time saved | > 30% reduction | Time tracking |
| Process satisfaction | > 4.0/5.0 | Survey |

---

*For feature breakdown, see FEATURES.md. For technical specifications, see SPEC.md.*

