#!/bin/bash
# SITN Workflow Documentation - DOCX Generator
# Uses Pandoc to convert Markdown to DOCX with proper formatting

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SLIDES_DIR="$(dirname "$SCRIPT_DIR")"
OUTPUT_DIR="$SLIDES_DIR/output"
SOURCE_FILE="$SLIDES_DIR/sitn-workflow-docs-linear.md"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}SITN Workflow DOCX Generator${NC}"
echo -e "${GREEN}========================================${NC}"

# Check for pandoc
if ! command -v pandoc &> /dev/null; then
    echo -e "${RED}Error: pandoc is not installed${NC}"
    echo "Install with: brew install pandoc"
    exit 1
fi

# Create output directory
mkdir -p "$OUTPUT_DIR"

echo ""
echo -e "${YELLOW}Source:${NC} $SOURCE_FILE"
echo -e "${YELLOW}Output:${NC} $OUTPUT_DIR/sitn-workflow-docs.docx"
echo ""

# Generate DOCX with proper formatting
echo -e "${GREEN}Generating DOCX...${NC}"
pandoc "$SOURCE_FILE" \
    -o "$OUTPUT_DIR/sitn-workflow-docs.docx" \
    --toc \
    --toc-depth=2 \
    --metadata title="SITN Workflow Documentation" \
    --metadata author="California Research Bureau" \
    --metadata date="December 2025" \
    --reference-doc="$SLIDES_DIR/templates/reference.docx" 2>/dev/null || \
pandoc "$SOURCE_FILE" \
    -o "$OUTPUT_DIR/sitn-workflow-docs.docx" \
    --toc \
    --toc-depth=2 \
    --metadata title="SITN Workflow Documentation" \
    --metadata author="California Research Bureau" \
    --metadata date="December 2025"

echo -e "  ✅ Created: sitn-workflow-docs.docx"
echo ""
echo -e "${GREEN}DOCX generated successfully!${NC}"

