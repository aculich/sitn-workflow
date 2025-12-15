# Studies in the News Workflow - Technical Specification

**Version:** 1.0  
**Date:** December 9, 2025

---

## Table of Contents

1. [Technology Stack](#1-technology-stack)
2. [Project Structure](#2-project-structure)
3. [Component Architecture](#3-component-architecture)
4. [API Design](#4-api-design)
5. [Data Layer](#5-data-layer)
6. [Authentication & Authorization](#6-authentication--authorization)
7. [AI Integration](#7-ai-integration)
8. [External Integrations](#8-external-integrations)
9. [Performance Considerations](#9-performance-considerations)
10. [Testing Strategy](#10-testing-strategy)
11. [Deployment](#11-deployment)

---

## 1. Technology Stack

### Frontend Framework
```yaml
Framework: Next.js 16.0.4
React: 19.2.0
TypeScript: 5.3.2
Router: App Router with React Server Components
```

### UI & Styling
```yaml
CSS Framework: Tailwind CSS 4.1.17
Component Library: shadcn/ui (latest)
Animations: Framer Motion 12.23.24
Icons: Lucide React 0.554.0
Utilities: clsx, tailwind-merge
```

### Forms & Validation
```yaml
Form Management: react-hook-form 7.66.1
Schema Validation: zod 4.1.13
```

### Data Fetching
```yaml
Client: SWR 2.3.6
Firebase Client: firebase 12.6.0
```

### Backend Services
```yaml
Platform: Firebase App Hosting
Functions: Cloud Functions 2nd Gen (Node.js 20)
Database: Cloud Firestore (Native Mode)
Storage: Firebase Storage
Auth: Firebase Authentication
```

### AI Services
```yaml
Model: Gemini 3 Pro (Multimodal)
Runtime: Firebase Genkit
Evaluation: DeepEval, DSpy
Python Service: FastAPI on Cloud Run
```

### External Integrations
```yaml
MailChimp: MailChimp API v3
Microsoft Teams: Microsoft Graph API
Excel: Google Sheets API (for Excel log)
```

---

## 2. Project Structure

```
sitn-workflow/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Auth-related routes
│   │   ├── login/
│   │   └── register/
│   ├── (main)/                   # Main application routes
│   │   ├── dashboard/
│   │   ├── scout/
│   │   │   ├── entries/
│   │   │   │   ├── [id]/
│   │   │   │   └── new/
│   │   │   └── page.tsx
│   │   ├── guest-editor/
│   │   │   ├── compile/
│   │   │   └── page.tsx
│   │   ├── review/
│   │   │   ├── [issueId]/
│   │   │   └── page.tsx
│   │   ├── mailchimp/
│   │   │   └── page.tsx
│   │   └── analytics/
│   │       └── page.tsx
│   ├── api/                      # API routes
│   │   ├── entries/
│   │   ├── issues/
│   │   ├── quality-check/
│   │   ├── mailchimp/
│   │   └── excel-log/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/                       # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── form.tsx
│   │   └── ...
│   ├── layout/                   # Layout components
│   │   ├── header.tsx
│   │   ├── sidebar.tsx
│   │   ├── footer.tsx
│   │   └── nav.tsx
│   ├── features/                 # Feature components
│   │   ├── scout/
│   │   │   ├── entry-form.tsx
│   │   │   ├── content-discovery.tsx
│   │   │   └── submission-status.tsx
│   │   ├── guest-editor/
│   │   │   ├── compilation-dashboard.tsx
│   │   │   ├── entry-selector.tsx
│   │   │   └── template-populator.tsx
│   │   ├── review/
│   │   │   ├── review-interface.tsx
│   │   │   ├── comment-thread.tsx
│   │   │   └── approval-workflow.tsx
│   │   └── mailchimp/
│   │       ├── mailchimp-formatter.tsx
│   │       └── test-email.tsx
│   └── shared/                   # Shared components
│       ├── quality-indicator.tsx
│       ├── deadline-countdown.tsx
│       └── status-badge.tsx
├── lib/
│   ├── firebase/
│   │   ├── config.ts
│   │   ├── auth.ts
│   │   └── firestore.ts
│   ├── ai/
│   │   ├── quality-checks.ts
│   │   ├── bias-detection.ts
│   │   └── rubric-enforcement.ts
│   ├── integrations/
│   │   ├── mailchimp.ts
│   │   ├── teams.ts
│   │   └── excel-log.ts
│   ├── hooks/
│   │   ├── use-entries.ts
│   │   ├── use-issues.ts
│   │   └── use-quality-check.ts
│   ├── utils/
│   │   ├── cn.ts
│   │   ├── formatting.ts
│   │   └── validation.ts
│   └── types/
│       └── index.ts
├── public/
│   ├── images/
│   └── icons/
├── design/                       # Design documents
│   ├── EXECSUMMARY.md
│   ├── PRD.md
│   ├── FEATURES.md
│   ├── SPEC.md
│   ├── PLAN.md
│   ├── TECHSTACK.md
│   └── TODO.md
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 3. Component Architecture

### Entry Form Component
```typescript
// components/features/scout/entry-form.tsx
interface EntryFormProps {
  entryId?: string;
  subjectArea: string;
  onSubmit: (entry: Entry) => void;
}

export function EntryForm({ entryId, subjectArea, onSubmit }: EntryFormProps) {
  const form = useForm<EntryFormData>({
    resolver: zodResolver(entrySchema),
  });
  
  // Real-time quality checks
  const { qualityChecks, isChecking } = useQualityCheck(form.watch());
  
  return (
    <Form {...form}>
      <StudySection />
      <BlurbSection qualityChecks={qualityChecks} />
      <NewsArticleSection />
      <HeadlineSection suggestions={headlineSuggestions} />
      <QualityIndicator checks={qualityChecks} />
      <SubmitButton disabled={!isValid || isChecking} />
    </Form>
  );
}
```

### Compilation Dashboard
```typescript
// components/features/guest-editor/compilation-dashboard.tsx
interface CompilationDashboardProps {
  issueId: string;
  scoutFolders: ScoutFolder[];
}

export function CompilationDashboard({ issueId, scoutFolders }: CompilationDashboardProps) {
  const { entries, isLoading } = useEntriesByScout();
  const { duplicateCheck } = useDuplicateDetection();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {scoutFolders.map(folder => (
        <ScoutFolderCard
          key={folder.id}
          folder={folder}
          entries={entries[folder.id]}
          onSelect={handleEntrySelection}
          duplicateCheck={duplicateCheck}
        />
      ))}
      <CompilationSummary selectedEntries={selectedEntries} />
      <TemplatePopulator entries={selectedEntries} />
    </div>
  );
}
```

### Review Interface
```typescript
// components/features/review/review-interface.tsx
interface ReviewInterfaceProps {
  issueId: string;
  draft: Issue;
}

export function ReviewInterface({ issueId, draft }: ReviewInterfaceProps) {
  const { comments, addComment } = useComments(issueId);
  const { validateLinks } = useLinkValidation();
  
  return (
    <div className="flex gap-4">
      <DocumentViewer draft={draft} comments={comments} />
      <ReviewSidebar>
        <ReviewChecklist />
        <LinkValidationResults results={validateLinks(draft)} />
        <CommentThread comments={comments} onAdd={addComment} />
        <ApprovalButton issueId={issueId} />
      </ReviewSidebar>
    </div>
  );
}
```

---

## 4. API Design

### REST API Endpoints

```yaml
# Entries
GET    /api/entries              # List entries (filtered by scout, status)
GET    /api/entries/:id          # Get entry by ID
POST   /api/entries               # Create new entry
PUT    /api/entries/:id           # Update entry
DELETE /api/entries/:id          # Delete entry

# Issues
GET    /api/issues               # List issues
GET    /api/issues/:id           # Get issue by ID
POST   /api/issues               # Create new issue
PUT    /api/issues/:id           # Update issue

# Quality Checks
POST   /api/quality-check         # Run quality checks on entry
GET    /api/quality-check/:id     # Get quality check results

# MailChimp
POST   /api/mailchimp/format      # Format issue for MailChimp
POST   /api/mailchimp/test-email  # Send test email
POST   /api/mailchimp/schedule    # Schedule campaign

# Excel Log
GET    /api/excel-log             # Get log entries
POST   /api/excel-log             # Add log entry
GET    /api/excel-log/duplicates  # Check for duplicates
```

### Server Actions

```typescript
// app/actions/entries.ts
'use server'

export async function createEntry(data: EntryFormData): Promise<Entry> {
  // Validate data
  const validated = entrySchema.parse(data);
  
  // Run quality checks
  const qualityChecks = await runQualityChecks(validated);
  
  // Create entry in Firestore
  const entry = await db.collection('entries').add({
    ...validated,
    qualityChecks,
    status: 'draft',
    createdAt: serverTimestamp(),
  });
  
  return entry;
}

export async function submitEntry(entryId: string): Promise<void> {
  await db.collection('entries').doc(entryId).update({
    status: 'submitted',
    submittedAt: serverTimestamp(),
  });
}
```

---

## 5. Data Layer

### Firestore Collections

```typescript
// Collections structure
collections/
├── entries/
│   └── {entryId}/
│       ├── scoutId: string
│       ├── subjectArea: string
│       ├── status: string
│       ├── study: object
│       ├── blurb: object
│       ├── newsArticle: object
│       ├── headline: object
│       ├── qualityChecks: object
│       └── timestamps
├── issues/
│   └── {issueId}/
│       ├── issueDate: Timestamp
│       ├── status: string
│       ├── guestEditorId: string
│       ├── entries: Reference[]
│       └── timestamps
├── scouts/
│   └── {scoutId}/
│       ├── name: string
│       ├── email: string
│       ├── subjectArea: string
│       ├── role: string
│       └── schedule
├── excelLog/
│   └── {logId}/
│       ├── issueDate: Timestamp
│       ├── subjectArea: string
│       ├── studyTitle: string
│       └── entryId: string
└── qualityChecks/
    └── {checkId}/
        ├── entryId: string
        ├── results: object
        └── timestamp
```

### Hooks

```typescript
// lib/hooks/use-entries.ts
export function useEntries(filters?: EntryFilters) {
  const { data, error, isLoading } = useSWR<Entry[]>(
    ['entries', filters],
    () => fetchEntries(filters)
  );
  
  return {
    entries: data ?? [],
    isLoading,
    error,
  };
}

export function useEntry(entryId: string) {
  const { data, error, isLoading } = useSWR<Entry>(
    entryId ? ['entry', entryId] : null,
    () => fetchEntry(entryId)
  );
  
  return {
    entry: data,
    isLoading,
    error,
  };
}
```

---

## 6. Authentication & Authorization

### Firebase Auth Setup

```typescript
// lib/firebase/auth.ts
import { 
  getAuth, 
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider 
} from 'firebase/auth';

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export async function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}
```

### Role-Based Access Control

```typescript
// lib/auth/rbac.ts
export enum Role {
  SCOUT = 'scout',
  GUEST_EDITOR = 'guest-editor',
  PROOFREADER = 'proofreader',
  MANAGER = 'manager',
  COORDINATOR = 'coordinator',
}

export function hasPermission(user: User, permission: string): boolean {
  const userRole = user.role;
  const permissions = rolePermissions[userRole];
  return permissions.includes(permission);
}
```

---

## 7. AI Integration

### Quality Check Flow

```typescript
// lib/ai/quality-checks.ts
import { genkit } from 'genkit';
import { googleAI, gemini3Pro } from '@genkit-ai/googleai';

const ai = genkit({
  plugins: [googleAI()],
});

export const qualityCheckFlow = ai.defineFlow(
  {
    name: 'qualityCheck',
    inputSchema: z.object({
      entry: z.object({
        study: z.object({ title: z.string(), url: z.string() }),
        blurb: z.object({ text: z.string() }),
        headline: z.object({ text: z.string() }),
      }),
      styleGuide: z.string(),
    }),
    outputSchema: z.object({
      biasDetected: z.boolean(),
      methodologyAvailable: z.boolean(),
      rubricCompliant: z.boolean(),
      suggestions: z.array(z.string()),
    }),
  },
  async (input) => {
    const response = await ai.generate({
      model: gemini3Pro,
      prompt: `Analyze this Studies in the News entry for quality:
               
               Study: ${input.entry.study.title}
               Blurb: ${input.entry.blurb.text}
               Headline: ${input.entry.headline.text}
               
               Style Guide: ${input.styleGuide}
               
               Check for:
               1. Bias indicators
               2. Methodology availability
               3. Rubric compliance
               4. Provide improvement suggestions`,
    });
    
    return parseQualityCheckResponse(response.text);
  }
);
```

---

## 8. External Integrations

### MailChimp Integration

```typescript
// lib/integrations/mailchimp.ts
import { Mailchimp } from '@mailchimp/mailchimp_marketing';

export async function formatForMailChimp(issue: Issue): Promise<string> {
  // Convert issue entries to MailChimp HTML format
  const html = await generateMailChimpHTML(issue);
  return html;
}

export async function sendTestEmail(
  campaignId: string,
  recipients: string[]
): Promise<void> {
  await mailchimp.campaigns.sendTest(campaignId, {
    test_emails: recipients,
    send_type: 'html',
  });
}

export async function scheduleCampaign(
  campaignId: string,
  scheduleTime: Date
): Promise<void> {
  await mailchimp.campaigns.schedule(campaignId, {
    schedule_time: scheduleTime.toISOString(),
  });
}
```

### Microsoft Teams Integration

```typescript
// lib/integrations/teams.ts
import { Client } from '@microsoft/microsoft-graph-client';

export async function shareDraftForReview(
  issueId: string,
  recipients: string[]
): Promise<string> {
  // Upload draft to Teams
  const file = await uploadToTeams(issueId);
  
  // Create sharing link
  const shareLink = await createSharingLink(file.id, recipients);
  
  return shareLink;
}
```

---

## 9. Performance Considerations

### Caching Strategy

```typescript
// next.config.ts
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
};
```

### Data Fetching Optimization

```typescript
// Use SWR for client-side data fetching with caching
export function useEntries() {
  const { data, error, isLoading } = useSWR<Entry[]>(
    '/api/entries',
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 2000,
    }
  );
  
  return { entries: data ?? [], isLoading, error };
}
```

---

## 10. Testing Strategy

### Unit Tests
```typescript
// Jest + React Testing Library
describe('EntryForm', () => {
  it('validates required fields', () => {
    render(<EntryForm subjectArea="health" />);
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('Study title is required')).toBeInTheDocument();
  });
  
  it('runs quality checks on blur', async () => {
    render(<EntryForm subjectArea="health" />);
    fireEvent.change(screen.getByLabelText('Blurb'), {
      target: { value: 'test blurb' },
    });
    await waitFor(() => {
      expect(screen.getByTestId('quality-checks')).toBeInTheDocument();
    });
  });
});
```

### E2E Tests
```typescript
// Playwright
test('scout can create and submit entry', async ({ page }) => {
  await page.goto('/scout/entries/new');
  await page.fill('[name="study.title"]', 'Test Study');
  await page.fill('[name="blurb.text"]', 'Test blurb content');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/\/scout\/entries\/\d+/);
});
```

---

## 11. Deployment

### Firebase Hosting

```yaml
# firebase.json
{
  "hosting": {
    "source": ".",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "frameworksBackend": {
      "region": "us-west1"
    }
  }
}
```

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
FIREBASE_ADMIN_KEY=
GOOGLE_AI_API_KEY=
MAILCHIMP_API_KEY=
MAILCHIMP_SERVER_PREFIX=
MICROSOFT_GRAPH_CLIENT_ID=
MICROSOFT_GRAPH_CLIENT_SECRET=
```

---

*For implementation timeline, see PLAN.md. For task tracking, see TODO.md.*

