# Studies in the News Workflow - Development TODO

**Last Updated:** December 9, 2025

---

## 🚀 Current Sprint: Design & Planning

### ✅ Completed
- [x] Create design documentation (EXECSUMMARY, PRD, FEATURES, SPEC, PLAN)
- [x] Analyze existing workflow from transcripts and diagrams
- [x] Define user personas and requirements
- [x] Outline technical architecture

### 🔄 In Progress
- [ ] Finalize design documents review
- [ ] Stakeholder feedback collection
- [ ] Technical feasibility review

### 📋 Backlog

#### Phase 1: Foundation (Weeks 1-2)
- [ ] Initialize Next.js 16 project
- [ ] Configure TypeScript and Tailwind CSS v4
- [ ] Setup shadcn/ui components
- [ ] Create project structure
- [ ] Build main layout (header, sidebar, footer)
- [ ] Implement navigation
- [ ] Setup Firebase Authentication
- [ ] Role-based access control
- [ ] User profile management

#### Phase 2: Core Workflow Features (Weeks 3-6)
- [ ] Scout content discovery interface
- [ ] Entry creation form (study, blurb, news article, headline)
- [ ] Draft management and auto-save
- [ ] Submission tracking
- [ ] Guest editor compilation dashboard
- [ ] Scout folder overview
- [ ] Entry selection interface
- [ ] Word template integration
- [ ] Bulk import functionality
- [ ] Review handoff system
- [ ] Collaborative review interface
- [ ] Teams integration
- [ ] Comment and track changes
- [ ] Approval workflow
- [ ] MailChimp API integration
- [ ] Word to MailChimp conversion
- [ ] Test email distribution
- [ ] Scheduling interface

#### Phase 3: AI Integration (Weeks 7-10)
- [ ] Firebase Genkit configuration
- [ ] Gemini API integration
- [ ] Bias detection model
- [ ] Methodology check automation
- [ ] Rubric enforcement system
- [ ] Duplicate detection (Excel log integration)
- [ ] Link validation automation
- [ ] Headline and lead-as suggestions
- [ ] Cloud Run service setup (Python ADK)
- [ ] Advanced quality analysis
- [ ] Prompt optimization (DSpy)
- [ ] Evaluation framework (DeepEval)

#### Phase 4: Excel Log & Analytics (Weeks 11-12)
- [ ] Firestore to Excel sync
- [ ] Auto-populate issue data
- [ ] Duplicate prevention database
- [ ] Historical tracking
- [ ] Process metrics dashboard
- [ ] Quality metrics dashboard
- [ ] MailChimp statistics integration

#### Phase 5: Enhancement & Optimization (Weeks 13-16)
- [ ] Role assignment automation
- [ ] Availability tracking
- [ ] Workflow configuration UI
- [ ] Style guide management
- [ ] Notification system
- [ ] Performance optimization
- [ ] Caching strategy
- [ ] Unit test coverage
- [ ] E2E test suite
- [ ] Accessibility audit
- [ ] User acceptance testing

---

## 📁 File Checklist

### Config Files
- [ ] `package.json`
- [ ] `tsconfig.json`
- [ ] `tailwind.config.ts`
- [ ] `next.config.ts`
- [ ] `firebase.json`
- [ ] `components.json` (shadcn)

### Layout Components
- [ ] `app/layout.tsx`
- [ ] `components/layout/header.tsx`
- [ ] `components/layout/sidebar.tsx`
- [ ] `components/layout/footer.tsx`
- [ ] `components/layout/nav.tsx`

### Scout Workflow Pages
- [ ] `app/(main)/scout/entries/page.tsx`
- [ ] `app/(main)/scout/entries/new/page.tsx`
- [ ] `app/(main)/scout/entries/[id]/page.tsx`
- [ ] `components/features/scout/entry-form.tsx`
- [ ] `components/features/scout/content-discovery.tsx`
- [ ] `components/features/scout/submission-status.tsx`

### Guest Editor Pages
- [ ] `app/(main)/guest-editor/compile/page.tsx`
- [ ] `components/features/guest-editor/compilation-dashboard.tsx`
- [ ] `components/features/guest-editor/entry-selector.tsx`
- [ ] `components/features/guest-editor/template-populator.tsx`

### Review Pages
- [ ] `app/(main)/review/[issueId]/page.tsx`
- [ ] `components/features/review/review-interface.tsx`
- [ ] `components/features/review/comment-thread.tsx`
- [ ] `components/features/review/approval-workflow.tsx`

### MailChimp Pages
- [ ] `app/(main)/mailchimp/page.tsx`
- [ ] `components/features/mailchimp/mailchimp-formatter.tsx`
- [ ] `components/features/mailchimp/test-email.tsx`

### UI Components (shadcn)
- [ ] Button
- [ ] Card
- [ ] Input
- [ ] Form
- [ ] Badge
- [ ] Avatar
- [ ] Tabs
- [ ] Separator
- [ ] Dialog
- [ ] Dropdown Menu

### Shared Components
- [ ] `components/shared/quality-indicator.tsx`
- [ ] `components/shared/deadline-countdown.tsx`
- [ ] `components/shared/status-badge.tsx`

### API Routes
- [ ] `app/api/entries/route.ts`
- [ ] `app/api/issues/route.ts`
- [ ] `app/api/quality-check/route.ts`
- [ ] `app/api/mailchimp/route.ts`
- [ ] `app/api/excel-log/route.ts`

### Library Functions
- [ ] `lib/firebase/config.ts`
- [ ] `lib/firebase/auth.ts`
- [ ] `lib/firebase/firestore.ts`
- [ ] `lib/ai/quality-checks.ts`
- [ ] `lib/ai/bias-detection.ts`
- [ ] `lib/ai/rubric-enforcement.ts`
- [ ] `lib/integrations/mailchimp.ts`
- [ ] `lib/integrations/teams.ts`
- [ ] `lib/integrations/excel-log.ts`
- [ ] `lib/hooks/use-entries.ts`
- [ ] `lib/hooks/use-issues.ts`
- [ ] `lib/hooks/use-quality-check.ts`

---

## 🐛 Known Issues

| Issue | Severity | Status |
|-------|----------|--------|
| None currently | - | - |

---

## 📝 Notes

### Design Decisions
1. Using App Router for better RSC support and server actions
2. shadcn/ui for consistent, customizable components
3. Tailwind v4 for latest CSS features
4. Firebase for backend (consistent with nexus-workflow)
5. Genkit + Python ADK hybrid for AI features
6. MailChimp API for distribution (existing platform)
7. Teams integration for collaborative editing

### Key Workflow Considerations
1. Friday noon deadline is critical - need clear reminders
2. Rotating guest editor role (2-month stretches) requires scheduling system
3. Consistent proofreader (Sumeet) simplifies workflow
4. Multiple review layers being reduced - AI can help
5. Excel log duplicate checking is essential
6. MailChimp integration must preserve formatting

### Dependencies to Track
- Next.js 16.0.4
- React 19.2.0
- Tailwind CSS 4.1.17
- shadcn/ui (latest)
- Firebase 12.6.0
- Genkit (latest)
- MailChimp API v3
- Microsoft Graph API

---

## 🔗 Quick Links

- [EXECSUMMARY.md](./EXECSUMMARY.md)
- [PRD.md](./PRD.md)
- [FEATURES.md](./FEATURES.md)
- [SPEC.md](./SPEC.md)
- [PLAN.md](./PLAN.md)
- [TECHSTACK.md](./TECHSTACK.md)

---

*Updated automatically during development*

