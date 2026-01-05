PROMPT.md

# Meta-Prompt
First, create a better version of this prompt ramble below, turning it into a better prompt with clear intent and outcomes, then generate a full plan to create the cli tool that will generate pixel-perfect slide deck reconstructions given a PDF or PPTX (or even images) input.

# Ramble
I want to be able to do a pixel-perfect reconstruction of these PDFs into a fully working PowerPoint slide deck. So, let's start by finding a way to slice and dice each of these PDF files and each of the pages in the PDFs into their own self-contained pages.

/Users/me/projects/peeq-crb-nexus/sitn-workflow/design/slides
-rw-r--r--@ 1 me  staff    12M Dec 30 16:49 AI_Workflow_Transformation.pdf
-rw-r--r--@ 1 me  staff   6.4M Jan  4 09:21 Transforming_CRB_Research_Workflow_Updates.pdf


Where first we want to explode each of the pages into its component parts. There will be different layers:
1. The text outline
2. The text content on each page
3. The text arrangement on each of the pages
4. The styling of each of the pages
5. All the graphics on each of the pages

Using various tools to slice and dice these PDFs and using things like the most advanced image of vision LLM. We can also use the `gcloud`command with project `default-1234` to use any Google Cloud services like the image recognition service there. Or we can feed this to Gemini Nano Banana Pro using the GEMINI_API_KEY in the shell environment (and we have other LLM API_KEY env vars so we can use any LLMs we have access to)

What I want to do is first deconstruct each of these PDF slide decks into their component parts and then reconstruct each of them as a fully working PowerPoint. We can also use "marp" and there are some other PDF-related things and slide deck-related things in these other directories that I'll give you paths to.

You should do a search on open source tools on GitHub and elsewhere and NPM and Python and figure out what tools there are for:
- Deconstructing PDFs and PowerPoint slide decks into their component parts
- Turning individual pages into images
- Basically doing a complete tear down and rebuild 


Look at all the code and projects and repo in these directories and their subdirs:
/Users/me/tools/markdown-slides
/Users/me/projects/fspp-ai-retsina/slideflow

You can use repomix to help or anything else that would be a useful tool to deconstruct, analyze, reconstruct as close to pixel-perfect reconstruction as possible.

# Prompt
