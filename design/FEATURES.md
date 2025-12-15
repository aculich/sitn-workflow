# Studies in the News Workflow - Features Document

**Version:** 1.0  
**Date:** December 9, 2025

---

## Feature Overview

This document details the features of the Studies in the News Workflow application, organized by module and priority.

---

## 🏠 Module 1: Dashboard

### F1.1 Weekly Production Dashboard
**Priority:** P0 (Critical)
**Description:** Central hub showing current week's production status and quick access to all workflow stages.

**Components:**
- Current week timeline (Friday noon → Wednesday 8 AM)
- Production status indicators (Scout submissions, Guest Editor compilation, Review status)
- Quick stats (entries submitted, entries compiled, issues pending review)
- Upcoming deadlines and reminders
- Recent activity feed

**User Stories:**
- As Sumeet, I want to see the overall production status at a glance
- As a Guest Editor, I want to know when scout submissions are due
- As a Scout, I want to see my submission status and any feedback

### F1.2 Role-Based Views
**Priority:** P0 (Critical)
**Description:** Customized dashboard views based on user role (Scout, Guest Editor, Proofreader, Manager).

**Components:**
- Scout view: My subject area, pending entries, submission deadline
- Guest Editor view: Compilation status, all scout folders, review queue
- Proofreader view: Drafts awaiting review, review history
- Manager view: Final approval queue, headline optimization suggestions

---

## 🔍 Module 2: Scout Workflow

### F2.1 Content Discovery Interface
**Priority:** P0 (Critical)
**Description:** Centralized interface for scouts to discover and track news articles and studies.

**Components:**
- Nexis Newsdesk integration feed
- Curated website list by subject area
- Search interface for policy areas
- Study/article bookmarking
- Entry draft workspace

**Sources:**
- Nexis Newsdesk weekly newsletter
- Curated research institute websites
- Curated news websites
- Manual discovery and cross-sharing

### F2.2 Entry Creation Tool
**Priority:** P0 (Critical)
**Description:** Structured form for creating SITN entries with all required components.

**Components:**
1. **Study Section**
   - Title input with auto-link detection
   - Citation fields (author, institution, publication date)
   - PDF upload/link
   - Study URL

2. **Blurb Section** (100-200 words)
   - Text editor with word count
   - Quote helper (extract from study or news article)
   - Paraphrase suggestions (AI-assisted)
   - Style guide reminders

3. **News Article Section**
   - News source name
   - Article URL
   - Publication date
   - Link validation

4. **Headline Section** (8-12 words)
   - Headline input
   - AI suggestions for engagement
   - Character count indicator

**Features:**
- Auto-save drafts
- Template-based entry creation
- Subject area assignment
- Submission deadline reminders

### F2.3 AI-Assisted Quality Checks
**Priority:** P1 (High)
**Description:** Real-time quality validation during entry creation.

**Features:**
- **Bias Detection** - Flag loaded language, obvious bias indicators
- **Methodology Check** - Verify methodology availability and quality
- **Rubric Enforcement** - Check against SITN style guide and criteria
- **Duplicate Detection** - Cross-check against Excel log of past entries
- **Link Validation** - Verify all URLs are accessible
- **Style Consistency** - Check formatting against style guide

### F2.4 Submission Management
**Priority:** P0 (Critical)
**Description:** Track and manage entry submissions to scout folders.

**Components:**
- Submission status (draft, submitted, in compilation, published)
- Friday noon deadline countdown
- Submission history
- Feedback from guest editors/reviewers

---

## 📝 Module 3: Guest Editor Workflow

### F3.1 Compilation Dashboard
**Priority:** P0 (Critical)
**Description:** Central interface for guest editors to compile weekly newsletter drafts.

**Components:**
- All scout folders overview
- Entry count per subject area
- Compilation status indicators
- Template selection (Word document templates)
- One-click entry selection and copy

**Workflow:**
1. View all scout folders (Friday noon deadline)
2. Review entries per subject area
3. Select entries for inclusion
4. Copy to Word template
5. Initial formatting and proofreading
6. Submit for review (Monday morning)

### F3.2 Automated Compilation Assistance
**Priority:** P1 (High)
**Description:** AI-assisted compilation to reduce manual copy/paste errors.

**Features:**
- **Bulk Entry Import** - Select multiple entries and auto-format
- **Template Population** - Auto-fill Word template from selected entries
- **Formatting Enforcement** - Apply style guide formatting automatically
- **Duplicate Prevention** - Cross-check against Excel log before inclusion
- **Subject Area Organization** - Auto-organize entries by policy area

### F3.3 Review Integration
**Priority:** P0 (Critical)
**Description:** Seamless handoff to proofreader and manager review.

**Components:**
- Share draft via Teams integration
- Track review status
- View comments and edits
- Resolve feedback and produce final draft

---

## ✏️ Module 4: Review & Editing

### F4.1 Collaborative Review Interface
**Priority:** P0 (Critical)
**Description:** Real-time collaborative editing for proofreaders and managers.

**Components:**
- Microsoft Teams integration for multi-user editing
- Track changes support
- Comment threads
- Review checklist
- Link validation tool
- Grammar and formatting checks

**Review Focus Areas:**
- Grammar and spelling
- Formatting consistency
- Hyperlink validation
- Quote accuracy
- Headline quality (Manager focus)
- Style guide adherence

### F4.2 AI-Assisted Review Tools
**Priority:** P1 (High)
**Description:** Automated review assistance to reduce manual effort.

**Features:**
- **Link Validation** - Automatic URL checking and broken link detection
- **Headline Suggestions** - AI-generated headline alternatives for engagement
- **Lead-as Suggestions** - Better opening lines for blurbs
- **Grammar Check** - Advanced grammar and style checking
- **Consistency Check** - Cross-entry formatting and style consistency

### F4.3 Approval Workflow
**Priority:** P0 (Critical)
**Description:** Manager approval process with final quality checks.

**Components:**
- Approval queue
- Final review checklist
- Headline optimization interface
- Approval/rejection with feedback
- Final draft generation

---

## 📧 Module 5: MailChimp Integration

### F5.1 MailChimp Formatting
**Priority:** P0 (Critical)
**Description:** Automated formatting and transfer to MailChimp.

**Components:**
- Word document to MailChimp conversion
- Formatting preservation
- Test email generation
- Distribution list management
- Scheduling interface (Wednesday 8 AM)

**Workflow:**
1. Receive final draft from guest editor (Tuesday 10 AM)
2. Copy/paste to MailChimp
3. Format and verify
4. Send test email to team (4 recipients)
5. Schedule for Wednesday 8 AM
6. Monitor send status

### F5.2 Test Email Distribution
**Priority:** P0 (Critical)
**Description:** Automated test email to review team.

**Recipients:**
- Guest Editor
- Proofreader (Sumeet)
- Manager (Tom)
- MailChimp handler

**Features:**
- One-click test send
- Feedback collection interface
- Final approval before scheduling

---

## 📊 Module 6: Analytics & Tracking

### F6.1 Excel Log Integration
**Priority:** P0 (Critical)
**Description:** Automated logging of published issues to Excel tracking document.

**Components:**
- Auto-populate issue date
- Subject areas included
- Study titles logged
- Duplicate prevention database
- Historical tracking

**Data Points:**
- Issue date (Wednesday)
- Subject areas in issue
- Study titles per subject area
- Publication status

### F6.2 Engagement Analytics
**Priority:** P2 (Medium)
**Description:** MailChimp statistics integration and analysis.

**Components:**
- Open rates by issue
- Click-through rates
- Policy area engagement
- Subscriber feedback collection
- Policy relevance scoring

### F6.3 Process Analytics
**Priority:** P2 (Medium)
**Description:** Workflow efficiency metrics and insights.

**Components:**
- Time-to-compilation metrics
- Review cycle time
- Submission rates by scout
- Quality metrics (AI-detected issues)
- Process bottlenecks identification

---

## 🔍 Module 7: Search & Discovery

### F7.1 Entry Search
**Priority:** P1 (High)
**Description:** Search across all entries, drafts, and published issues.

**Features:**
- Search by study title, author, institution
- Filter by subject area, date range, status
- Search within blurbs and headlines
- Cross-reference with Excel log

### F7.2 Duplicate Detection
**Priority:** P0 (Critical)
**Description:** Prevent study reuse across issues.

**Components:**
- Real-time duplicate checking
- Excel log integration
- Study title matching
- Similarity detection (AI-assisted)
- Alert system for potential duplicates

---

## ⚙️ Module 8: Configuration & Settings

### F8.1 Style Guide Management
**Priority:** P1 (High)
**Description:** Centralized style guide and rubric configuration.

**Components:**
- Style guide document viewer
- Rubric criteria configuration
- Bias detection rules
- Methodology check criteria
- Formatting templates

### F8.2 Role Assignment
**Priority:** P1 (High)
**Description:** Manage rotating roles and assignments.

**Components:**
- Guest editor schedule (2-month stretches, last name alphabetical)
- Proofreader assignment (Sumeet - consistent)
- Scout subject area assignments
- Availability/unavailability tracking
- Role rotation automation

### F8.3 Workflow Configuration
**Priority:** P2 (Medium)
**Description:** Customize workflow deadlines and processes.

**Options:**
- Friday noon submission deadline
- Monday morning review deadline
- Tuesday 10 AM final draft deadline
- Wednesday 8 AM publication time
- Notification preferences

---

## Feature Matrix by User Type

| Feature | Scout | Guest Editor | Proofreader | Manager | Coordinator |
|---------|-------|--------------|-------------|---------|-------------|
| Content Discovery | ✓ | — | — | — | ✓ |
| Entry Creation | ✓ | — | — | — | — |
| Compilation Dashboard | — | ✓ | — | — | ✓ |
| Review Interface | — | ✓ | ✓ | ✓ | ✓ |
| MailChimp Integration | — | — | — | — | ✓ |
| Analytics | Limited | Limited | — | ✓ | ✓ |
| Configuration | — | — | — | — | ✓ |

---

## Priority Legend

| Priority | Label | Description |
|----------|-------|-------------|
| P0 | Critical | Must have for MVP launch |
| P1 | High | Important for initial release |
| P2 | Medium | Nice to have, can defer |
| P3 | Future | Post-MVP consideration |

---

*For technical implementation details, see SPEC.md. For implementation timeline, see PLAN.md.*

