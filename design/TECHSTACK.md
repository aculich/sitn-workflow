# Technology Stack for CRB Nexus Workflow

## Core Google Ecosystem
*   **Generative AI Model**: **Gemini 3 Pro** (Multimodal, Long Context, Audio/Video Native)
*   **Image Generation**: **Nano Banana Pro** (Gemini 3 Image / Imagen 3 variant)
*   **Development Environment**: **Google AI Studio** (Build Mode)
*   **Agent Strategy**: **Hybrid Genkit + ADK**
    *   **Runtime (Node.js)**: Firebase Genkit for fast, synchronous tool execution.
    *   **Intelligence (Python)**: Google ADK (Python) on Cloud Run for complex reasoning, prompt optimization (DSpy), and evaluation (DeepEval).

## Application Stack (Frontend & BFF)
*   **Frontend**: Next.js 16 (App Router, React Server Components)
*   **Language**: TypeScript 5.x
*   **Styling**: Tailwind CSS v4, Shadcn/UI
*   **Real-time**: WebSockets (Native Live API connection)
*   **State Management**: React Context / Server Actions

## Backend & Infrastructure (Firebase + Cloud Run)
*   **App Platform**: Firebase App Hosting
*   **Serverless Compute**: Cloud Functions 2nd Gen (Node.js 20) - *Fast I/O, CRUD*
*   **Container Compute**: Google Cloud Run (Python 3.11) - *Heavy AI Processing*
*   **Database**: Cloud Firestore (Native Mode)
*   **Storage**: Firebase Storage
*   **Auth**: Firebase Authentication

## AI & Evaluation (The Python Service)
*   **Service**: "Lavender Intelligence API" (FastAPI on Cloud Run)
*   **Frameworks**:
    *   **Google AgentKit (Python)**: For advanced agentic workflows.
    *   **DSpy**: For prompt optimization and "compiling" prompts.
    *   **DeepEval**: For running unit tests on LLM outputs.
*   **Monitoring**: Vertex AI Monitoring / Genkit Developer UI

## Key Libraries & Versions (Verified Nov 24, 2025)

| Package | Version | Purpose |
| :--- | :--- | :--- |
| **Frontend Frameworks** | | |
| `next` | `16.0.4` | Core React Framework (App Router) |
| `react` | `19.2.0` | UI Library |
| `react-dom` | `19.2.0` | DOM Rendering |
| `typescript` | `5.3.2` | Language Support |
| **UI & Styling** | | |
| `tailwindcss` | `4.1.17` | Styling Engine |
| `framer-motion` | `12.23.24` | Animation Library |
| `lucide-react` | `0.554.0` | Icons |
| `shadcn-ui` | `latest` | Component Primitives (CLI) |
| `clsx` / `tailwind-merge` | `latest` | Class Utility |
| **Forms & Data** | | |
| `react-hook-form` | `7.66.1` | Form State Management |
| `zod` | `4.1.13` | Schema Validation |
| `swr` | `2.3.6` | Data Fetching (Hooks) |
| `firebase` | `12.6.0` | Client SDK |
| **Backend (Node.js / Genkit)** | | |
| `@genkit-ai/firebase` | `latest` | Agent Runtime (Functions) |
| `@genkit-ai/googleai` | `latest` | Gemini Plugin for Genkit |
| `firebase-admin` | `13.0.0` | Server SDK |
| **AI Service (Python / ADK)** | | |
| `agentkit` | `latest` | **Google ADK Python SDK** |
| `fastapi` | `0.109.0` | Python API Framework |
| `dspy-ai` | `latest` | Prompt Optimization |
| `deepeval` | `latest` | Evaluation Framework |
| `google-cloud-aiplatform`| `latest` | Vertex AI SDK |
| **Dev Tools** | | |
| `eslint` | `9.x` | Linting |
| `prettier` | `3.x` | Formatting |

## Hybrid Strategy: "Best of Both Worlds"
1.  **Genkit (Node.js)**: Handles the "Hot Path". When the user speaks, Genkit handles the immediate tool calls (database lookups, image generation triggers) because it has 0-cold-start integration with Firebase.
2.  **ADK (Python)**: Handles the "Deep Path".
    *   **Evaluation**: Runs asynchronously to grade the conversation.
    *   **Optimization**: Uses DSpy to rewrite the System Instructions used by the Node app.
    *   **Complex Logic**: If an agent needs to run a Python-specific library (e.g., Pandas for data analysis), Genkit calls the Cloud Run service.
