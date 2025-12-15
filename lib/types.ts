// User and Role Types
export type UserRole = 
  | "scout" 
  | "guest-editor" 
  | "proofreader" 
  | "manager" 
  | "coordinator";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  subjectArea?: string;
  avatarUrl?: string;
}

// Entry Types
export type EntryStatus = 
  | "draft" 
  | "submitted" 
  | "in-compilation" 
  | "in-review" 
  | "approved" 
  | "published";

export interface Study {
  title: string;
  url: string;
  author?: string;
  institution?: string;
  publicationDate?: string;
  pdfUrl?: string;
}

export interface Blurb {
  text: string;
  wordCount: number;
  source: "study" | "news" | "paraphrase";
  originalQuote?: string;
}

export interface NewsArticle {
  source: string;
  url: string;
  publicationDate: string;
}

export interface Headline {
  text: string;
  wordCount: number;
  suggestions?: string[];
}

export interface QualityChecks {
  biasDetected: boolean;
  methodologyAvailable: boolean;
  rubricCompliant: boolean;
  duplicateChecked: boolean;
  linksValid: boolean;
  score?: number;
}

export interface Entry {
  id: string;
  scoutId: string;
  scoutName: string;
  subjectArea: string;
  status: EntryStatus;
  study: Study;
  blurb: Blurb;
  newsArticle?: NewsArticle;
  headline: Headline;
  qualityChecks: QualityChecks;
  submittedAt?: string;
  publishedInIssue?: string;
  createdAt: string;
  updatedAt: string;
}

// Issue Types
export type IssueStatus = 
  | "draft" 
  | "in-review" 
  | "approved" 
  | "published";

export interface Issue {
  id: string;
  issueDate: string;
  status: IssueStatus;
  guestEditorId: string;
  guestEditorName: string;
  proofreaderId: string;
  managerId: string;
  entries: Entry[];
  subjectAreas: string[];
  mailchimpCampaignId?: string;
  scheduledFor?: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

// Subject Areas
export const SUBJECT_AREAS = [
  "Agriculture & Environment",
  "Business & Economy",
  "Criminal Justice",
  "Education",
  "Government & Elections",
  "Health & Human Services",
  "Housing & Transportation",
  "Labor & Workforce",
  "State Budget & Taxes",
] as const;

export type SubjectArea = typeof SUBJECT_AREAS[number];

// Workflow Timeline
export interface WorkflowTimeline {
  scoutDeadline: Date; // Friday noon
  compilationDeadline: Date; // Friday afternoon
  reviewStart: Date; // Monday morning
  finalDraftDeadline: Date; // Tuesday 10 AM
  mailchimpDeadline: Date; // Tuesday PM
  publicationDate: Date; // Wednesday 8 AM
}

