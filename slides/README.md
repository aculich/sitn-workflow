# SITN Workflow Documentation Exports

This directory contains tools and outputs for generating documentation in multiple formats.

## Quick Start

```bash
# Make scripts executable
chmod +x scripts/*.sh

# Generate all slide formats (HTML, PDF, PPTX)
./scripts/generate-all.sh

# Generate DOCX document
./scripts/generate-docx.sh
```

## Directory Structure

```
slides/
├── sitn-workflow-docs.md          # Marp-formatted slides (presentation)
├── sitn-workflow-docs-linear.md   # Linear markdown (for DOCX)
├── scripts/
│   ├── generate-all.sh            # Generate PDF, HTML, PPTX via Marp
│   └── generate-docx.sh           # Generate DOCX via Pandoc
├── output/                        # Generated files appear here
│   ├── sitn-workflow-docs.html
│   ├── sitn-workflow-docs.pdf
│   ├── sitn-workflow-docs.pptx
│   ├── sitn-workflow-docs.docx
│   └── slides/                    # Individual slide PNGs
└── README.md                      # This file
```

## Requirements

### For Slide Generation (Marp)

Install Marp CLI:
```bash
brew install marp-cli
# OR use via npx (no install needed)
npx @marp-team/marp-cli --version
```

### For DOCX Generation (Pandoc)

Install Pandoc:
```bash
brew install pandoc
```

## Output Formats

| Format | Tool | Use Case |
|--------|------|----------|
| **PDF** | Marp CLI | Printable slides, sharing |
| **PPTX** | Marp CLI | PowerPoint presentations |
| **HTML** | Marp CLI | Web viewing, embedding |
| **DOCX** | Pandoc | Word documents, editing |

## Source Files

### `sitn-workflow-docs.md` (Slides)

Marp-formatted markdown with:
- Slide separators (`---`)
- Theme configuration
- Background images
- Pagination

### `sitn-workflow-docs-linear.md` (Document)

Standard markdown with:
- Headings and sections
- Tables
- Image references
- No slide-specific formatting

## Customization

### Marp Themes

Available themes: `default`, `gaia`, `uncover`

Change in frontmatter:
```yaml
---
marp: true
theme: gaia
---
```

### Colors

Edit the frontmatter for custom colors:
```yaml
backgroundColor: #1e3a5f
color: #ffffff
```

## Manual Commands

```bash
# Preview slides in browser
marp sitn-workflow-docs.md --preview

# Convert to specific format
marp sitn-workflow-docs.md --pdf -o output/slides.pdf
marp sitn-workflow-docs.md --pptx -o output/slides.pptx
marp sitn-workflow-docs.md --html -o output/slides.html

# Generate individual slide images
marp sitn-workflow-docs.md --images png -o output/slides

# DOCX with table of contents
pandoc sitn-workflow-docs-linear.md -o output/docs.docx --toc
```

## Future Improvements

See `design/EXPORT-STRATEGY.md` for the long-term plan to integrate export functionality directly into the SITN Workflow application.

---

*SITN Workflow Documentation • Version 1.0 • December 2025*

