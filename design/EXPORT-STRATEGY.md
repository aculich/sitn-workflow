# SITN Workflow Export Strategy

## Executive Summary

This document outlines the strategy for exporting SITN Workflow documentation and content to multiple formats (DOCX, PDF, PPTX, HTML) both manually via scripts and as an integrated feature within the application.

## Current State (Quick Implementation)

### Directory Structure

```
sitn-workflow/
├── slides/
│   ├── sitn-workflow-docs.md          # Marp-formatted slides
│   ├── sitn-workflow-docs-linear.md   # Linear markdown for DOCX
│   ├── scripts/
│   │   ├── generate-all.sh            # Generate PDF, HTML, PPTX
│   │   └── generate-docx.sh           # Generate DOCX via Pandoc
│   ├── output/                        # Generated files
│   └── templates/                     # Reference templates
├── public/docs/screenshots/           # Page screenshots
└── design/
    └── EXPORT-STRATEGY.md             # This document
```

### Tools Used

| Tool | Purpose | Installation |
|------|---------|--------------|
| **Marp CLI** | Markdown → PDF/PPTX/HTML slides | `brew install marp-cli` or `npx @marp-team/marp-cli` |
| **Pandoc** | Markdown → DOCX with formatting | `brew install pandoc` |
| **Puppeteer** | Screenshot capture (optional) | `npm install puppeteer` |

### Quick Generation Commands

```bash
# Generate all slide formats (HTML, PDF, PPTX)
cd sitn-workflow/slides
./scripts/generate-all.sh

# Generate DOCX document
./scripts/generate-docx.sh
```

## Long-Term Integration Plan

### Phase 1: API Endpoint for Export (Week 1-2)

Create a Next.js API route that generates exports on-demand:

```typescript
// app/api/export/[format]/route.ts
export async function GET(
  request: Request,
  { params }: { params: { format: string } }
) {
  const format = params.format; // 'pdf' | 'docx' | 'pptx' | 'html'
  
  // Generate document based on format
  // Return file as download
}
```

### Phase 2: In-App Export Button (Week 2-3)

Add export functionality to the documentation page:

```tsx
// components/pages/documentation.tsx
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">
      <Download className="w-4 h-4 mr-2" />
      Export Documentation
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem onClick={() => exportAs('pdf')}>
      Export as PDF
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => exportAs('docx')}>
      Export as Word
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => exportAs('pptx')}>
      Export as PowerPoint
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### Phase 3: Automated Screenshot Capture (Week 3-4)

Implement automatic screenshot capture for documentation:

```typescript
// lib/screenshot.ts
import puppeteer from 'puppeteer';

export async function capturePageScreenshots(pages: string[]) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  for (const pagePath of pages) {
    await page.goto(`http://localhost:3000${pagePath}`);
    await page.screenshot({ 
      path: `public/docs/screenshots/${pagePath.replace('/', '-')}.png`,
      fullPage: true 
    });
  }
  
  await browser.close();
}
```

### Phase 4: Template Customization (Week 4-5)

Allow customization of export templates:

- Custom DOCX reference templates (branding, fonts)
- Marp theme customization (colors, logos)
- PDF header/footer customization

## Technical Architecture

### Server-Side Export Flow

```
┌─────────────┐     ┌──────────────┐     ┌────────────┐
│ User clicks │ ──► │ API Route    │ ──► │ Generate   │
│ Export      │     │ /api/export/ │     │ Document   │
└─────────────┘     └──────────────┘     └────────────┘
                           │                    │
                           ▼                    ▼
                    ┌──────────────┐     ┌────────────┐
                    │ Content from │     │ Return     │
                    │ Database/MD  │     │ Download   │
                    └──────────────┘     └────────────┘
```

### Dependencies to Add

```json
// package.json additions
{
  "dependencies": {
    "puppeteer": "^21.0.0",        // Screenshot capture
    "docx": "^8.0.0",              // DOCX generation
    "pdfkit": "^0.14.0",           // PDF generation (alternative)
    "@marp-team/marp-core": "^3.9.0" // Marp integration
  }
}
```

## Document Templates

### DOCX Template Features

- CRB letterhead and branding
- Table of Contents generation
- Page numbers
- Section breaks for printing
- Consistent heading styles

### Slide Template Features

- CRB color scheme (#1e3a5f primary)
- Logo placement
- Consistent typography
- Slide numbers
- Notes section for presenters

## Success Metrics

| Metric | Target |
|--------|--------|
| Export generation time | < 10 seconds |
| Supported formats | 4 (PDF, DOCX, PPTX, HTML) |
| User satisfaction | 90%+ find exports useful |
| Template accuracy | 100% brand compliance |

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Large file sizes | Compress images, lazy-load content |
| Server timeout | Async generation with polling |
| Browser dependencies | Server-side puppeteer with fallbacks |
| Template maintenance | Version-controlled templates |

## Timeline

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| Phase 1 | 1-2 weeks | API endpoint for exports |
| Phase 2 | 1 week | In-app export button |
| Phase 3 | 1 week | Automated screenshots |
| Phase 4 | 1 week | Template customization |

## References

- [Marp CLI Documentation](https://github.com/marp-team/marp-cli)
- [Pandoc User Guide](https://pandoc.org/MANUAL.html)
- [DOCX.js Documentation](https://docx.js.org/)
- [Puppeteer API](https://pptr.dev/)

---

*Last Updated: December 2025*
*Author: SITN Development Team*

