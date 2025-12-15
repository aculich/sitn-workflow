# Studies in the News Workflow - Executive Summary

**Project:** Studies in the News (SITN) Workflow Application  
**Version:** 1.0  
**Date:** December 9, 2025  
**Status:** Design Phase

---

## Vision Statement

The Studies in the News Workflow is an AI-assisted platform designed to streamline the weekly production of the CRB's Studies in the News newsletter, reducing manual coordination effort while maintaining quality and consistency across scouts, guest editors, and reviewers.

## The Problem

The Studies in the News newsletter production process involves multiple manual steps across fragmented systems, creating:

- **Time-consuming manual coordination** between scouts, guest editors, proofreaders, and managers
- **Inconsistent quality** due to varying interpretation of guidelines across different scouts
- **Limited scalability** with rotating roles and manual copy/paste workflows
- **Knowledge silos** with memory-dependent processes and minimal documentation
- **Reduced efficiency** with 4-5 sets of eyes on each issue, straining limited staff resources
- **No automated quality checks** for bias detection, methodology validation, or duplicate prevention

## The Solution

A Next.js-powered web application that provides:

### 🎯 Core Capabilities

1. **Scout Workflow Management** - Centralized content discovery, entry creation, and submission tracking
2. **AI-Assisted Quality Control** - Automated rubric enforcement, bias detection, and methodology checks
3. **Guest Editor Dashboard** - Streamlined compilation interface with automated duplicate detection
4. **Collaborative Review System** - Integrated editing workflow with real-time collaboration
5. **MailChimp Integration** - Automated formatting and test email distribution
6. **Analytics & Insights** - Engagement tracking, policy relevance scoring, and feedback collection

### 🎭 Primary Users

| Persona | Needs |
|---------|-------|
| **Scouts** | Efficient content discovery, clear guidelines, consistent rubric enforcement |
| **Guest Editors** | Streamlined compilation, automated duplicate checking, formatting assistance |
| **Project Coordinator (Sumeet)** | Process oversight, quality consistency, reduced manual coordination |
| **Proofreaders** | Clear review interface, link validation, formatting checks |
| **Manager (Tom)** | Final approval workflow, headline optimization, quality assurance |

### 🔧 Secondary Users

- CRB Researchers & Analysts
- Newsletter Subscribers (4,200+)
- State Policy Makers
- Legislative Staff

## Technology Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js 16 (App Router, RSC), React 19, TypeScript 5.x |
| **Styling** | Tailwind CSS v4, Shadcn/UI, Framer Motion |
| **State** | React Context, Server Actions |
| **Backend** | Firebase App Hosting, Cloud Functions, Cloud Firestore |
| **AI** | Gemini 3 Pro (Multimodal), Firebase Genkit, Google ADK (Python) |

## Success Metrics

1. **Efficiency** - Reduced time from Friday noon to Wednesday 8 AM publication
2. **Consistency** - Standardized rubric enforcement across all scouts
3. **Quality** - Automated detection of bias, methodology issues, and duplicates
4. **Staff Satisfaction** - Reduced manual coordination effort, more time for high-value work
5. **Scalability** - Support for rotating roles without process degradation

## Timeline

| Milestone | Target Date |
|-----------|-------------|
| MVP Workflow Foundation | Q1 2026 |
| AI-Assisted Quality Control | Q2 2026 |
| Full Automation Integration | Q3 2026 |

## Key Stakeholders

- **Project Owner:** CRB (Sumeet Bedi - Project Coordinator)
- **Implementation Support:** Development Team
- **End Users:** CRB Staff (Scouts, Guest Editors, Proofreaders, Managers)
- **Audience:** 4,200+ Newsletter Subscribers (State Policy Makers, Legislative Staff)

---

*This executive summary provides the strategic overview for the Studies in the News Workflow project. For detailed requirements, see PRD.md.*

