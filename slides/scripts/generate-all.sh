#!/bin/bash
# SITN Workflow Documentation Export Script
# Generates PDF, HTML, and PPTX from Marp markdown

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SLIDES_DIR="$(dirname "$SCRIPT_DIR")"
OUTPUT_DIR="$SLIDES_DIR/output"
SOURCE_FILE="$SLIDES_DIR/sitn-workflow-docs.md"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}SITN Workflow Documentation Generator${NC}"
echo -e "${GREEN}========================================${NC}"

# Check for marp-cli
if ! command -v marp &> /dev/null; then
    echo -e "${YELLOW}marp-cli not found. Installing via npx...${NC}"
    NPM_EXEC="npx @marp-team/marp-cli"
else
    NPM_EXEC="marp"
fi

# Create output directory
mkdir -p "$OUTPUT_DIR"

echo ""
echo -e "${YELLOW}Source:${NC} $SOURCE_FILE"
echo -e "${YELLOW}Output:${NC} $OUTPUT_DIR"
echo ""

# Generate HTML
echo -e "${GREEN}[1/4] Generating HTML...${NC}"
$NPM_EXEC "$SOURCE_FILE" -o "$OUTPUT_DIR/sitn-workflow-docs.html"
echo -e "  ✅ Created: sitn-workflow-docs.html"

# Generate PDF
echo -e "${GREEN}[2/4] Generating PDF...${NC}"
$NPM_EXEC "$SOURCE_FILE" --pdf -o "$OUTPUT_DIR/sitn-workflow-docs.pdf"
echo -e "  ✅ Created: sitn-workflow-docs.pdf"

# Generate PPTX
echo -e "${GREEN}[3/4] Generating PPTX...${NC}"
$NPM_EXEC "$SOURCE_FILE" --pptx -o "$OUTPUT_DIR/sitn-workflow-docs.pptx"
echo -e "  ✅ Created: sitn-workflow-docs.pptx"

# Generate PNG images for each slide
echo -e "${GREEN}[4/4] Generating PNG images...${NC}"
$NPM_EXEC "$SOURCE_FILE" --images png -o "$OUTPUT_DIR/slides"
echo -e "  ✅ Created: slides/*.png"

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}All formats generated successfully!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "Output files:"
ls -la "$OUTPUT_DIR"

