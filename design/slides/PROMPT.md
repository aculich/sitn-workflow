# Pixel-Perfect Slide Deck Reconstructor

## Intent

Create a CLI tool that can **reconstruct pixel-perfect PowerPoint slide decks** from input files (PDF, PPTX, or images). The tool should deconstruct slides into their fundamental layers, analyze each component, and then rebuild them as fully functional `.pptx` files.

## Outcomes

1. **Input**: PDF, PPTX, or image files (PNG, JPG)
2. **Output**: Reconstructed `.pptx` PowerPoint presentation
3. **Fidelity Goal**: Near-pixel-perfect reconstruction maintaining:
   - Text content, fonts, sizes, colors, and positioning
   - Graphics, images, and shapes with accurate placement
   - Layout structure and slide dimensions
   - Styling consistency across slides

---

## Sample Input Files

```
/Users/me/projects/peeq-crb-nexus/sitn-workflow/design/slides
-rw-r--r--@ 1 me  staff    12M Dec 30 16:49 AI_Workflow_Transformation.pdf
-rw-r--r--@ 1 me  staff   6.4M Jan  4 09:21 Transforming_CRB_Research_Workflow_Updates.pdf
```

---

## Deconstruction Layers

Each slide should be exploded into these component layers:

| Layer | Description |
|-------|-------------|
| **1. Text Outline** | Hierarchical structure of text (titles, headings, bullets) |
| **2. Text Content** | All text strings extracted verbatim |
| **3. Text Arrangement** | X/Y coordinates, width/height, alignment, z-order |
| **4. Styling** | Fonts, sizes, colors, backgrounds, borders, effects |
| **5. Graphics** | Images, shapes, charts, icons with positioning data |

---

## Available Resources

### API Keys & Services
- `GEMINI_API_KEY` - For Gemini Nano/Pro vision analysis
- `gcloud` CLI with project `default-1234` - Google Cloud Vision API
- Other LLM API keys available in shell environment

### Reference Codebases
- `/Users/me/tools/markdown-slides` - Marp ecosystem tools, md2googleslides
- `/Users/me/projects/fspp-ai-retsina/slideflow` - SlideFlow PPTX analysis/generation tools

### Key Libraries (from slideflow)
- `pptx-automizer` - Template-based PPTX manipulation
- `pptxgenjs` - Programmatic PowerPoint generation
- `@marp-team/marp-core` - Markdown-to-slides rendering
- `pizzip` + `fast-xml-parser` - Direct PPTX XML manipulation

---

## CLI Tool Requirements

```bash
# Example usage
slide-reconstruct input.pdf --output reconstructed.pptx
slide-reconstruct *.png --output deck-from-images.pptx
slide-reconstruct existing.pptx --analyze --output report.json
```

### Commands
- `reconstruct` - Convert input to PPTX (default)
- `analyze` - Output layer analysis as JSON
- `compare` - Compare original vs. reconstructed fidelity

### Options
- `--output, -o` - Output file path
- `--format` - Output format (pptx, json, markdown)
- `--vision-model` - LLM for image analysis (gemini, gcloud-vision, openai)
- `--quality` - Reconstruction quality (fast, balanced, pixel-perfect)
- `--verbose` - Detailed logging

---

## Technical Approach

### Phase 1: Input Processing
1. Detect input type (PDF, PPTX, images)
2. Convert to normalized page/slide images
3. Extract any embedded metadata

### Phase 2: Layer Extraction
1. **Vision LLM Analysis** - Use Gemini/GPT-4V to identify layout structure
2. **OCR + Text Detection** - Extract text with position data
3. **Shape Detection** - Identify geometric elements
4. **Image Extraction** - Isolate raster graphics
5. **Style Analysis** - Determine colors, fonts, spacing

### Phase 3: PPTX Reconstruction
1. Create presentation with correct dimensions
2. Add slides with proper layouts
3. Place text boxes with extracted content
4. Position images and shapes
5. Apply styling (fonts, colors, effects)
6. Export as `.pptx`

### Phase 4: Validation
1. Generate comparison thumbnails
2. Calculate pixel-diff score
3. Report accuracy metrics

---

## Success Criteria

- [ ] CLI tool runs on provided PDF examples
- [ ] Reconstructed PPTX opens correctly in PowerPoint/Keynote
- [ ] Text content matches original 100%
- [ ] Layout positioning accurate within 5% tolerance
- [ ] Visual similarity score > 90%
