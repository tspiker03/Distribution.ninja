# Cline Development Rules for distributions.ninja

This document outlines essential rules and guidelines for Cline to follow during the development of the `distributions.ninja` project. Adhering to these rules ensures efficiency, consistency in our codebase, and alignment with the chosen technology stack.

## General Principles

* **Follow Documentation:** Adhere closely to the project's Product Requirements Document (PRD) and Architecture guidelines.
* **Code Quality:** Write clean, readable, maintainable, and well-commented code.
* **Version Control:**
    * Use Git for all code changes.
    * Commit frequently with clear, descriptive messages.
    * Follow the standard GitHub workflow (Fork -> Branch -> Code -> Commit -> Push -> Pull Request -> Review -> Merge).
* **Communication:** Ask questions early if requirements are unclear or if you encounter blockers. Report progress regularly.
* **Testing:** Write unit and integration tests where appropriate to ensure functionality and prevent regressions.

## Development Environment

* **Terminal:** **IMPORTANT:** Your VS Code integrated terminal uses PowerShell. **Always use PowerShell-compatible commands** when working in the terminal. Be mindful of differences between PowerShell cmdlets (e.g., `Remove-Item`, `Get-ChildItem`) and common Unix/bash commands, although many aliases exist.
* **Tooling:** Ensure you have the correct versions of Node.js, Python, Git, and any specified SDKs installed.
* **Linting/Formatting:** Use the project's configured linters and formatters (e.g., ESLint, Prettier for frontend; Black, Flake8 for Python backend code if applicable) and ensure code passes checks before committing.

## Technology Stack (`distributions.ninja`)

* **Frontend Framework:** **Next.js** (React) is the primary framework for the user interface and integrating all components.
* **Content Source:** All distribution page content (text, formulas, code examples, graph metadata) originates from **Markdown files** with YAML frontmatter stored in the designated GitHub repository.
* **Database:** **Firebase** (Firestore or Realtime Database) is the designated database for storing application data such as user information, comments, or other dynamic state. (*Note: Vector storage for the RAG agent may require a separate solution or specific Firebase extension if not suitable*).
* **Hosting Engine:** **Vercel** is the exclusive platform for hosting and deployment. All deployments and previews should be managed through Vercel, connected to the main GitHub repository.
* **Backend Logic:** Backend functionality required for calculations, RAG, etc., will be integrated within or called by the Next.js application, potentially using Vercel functions or a separate API as defined in the architecture.

## Specific Feature Implementation

* **Graphing Functionality:**
    * Must be implemented as interactive components within the **Next.js** application.
    * Components should read configuration metadata from the Markdown frontmatter.
    * Slider interactivity and plot rendering (using Plotly.js or the chosen library) are handled by Next.js.
    * Data calculations will likely involve calls to backend logic/API.
* **RAG Chat Agent:**
    * Develop the agent's core logic using the **designated AI Development Kit (ADK) / Framework** (*Clarification may be needed on the specific ADK/SDK intended - e.g., LangChain, LlamaIndex, Azure AI SDK?*).
    * The agent's knowledge base MUST be restricted to the content of the specific distribution page it is on.
    * Integrate with **Firebase** if needed for conversation history or state.
    * The frontend chat interface must be built as a **Next.js** component.

## Code Style & Consistency

* Adhere to the coding style guides established for the project (JavaScript/TypeScript/React for Next.js, Python style if contributing to backend API logic).
* Use consistent naming conventions for variables, functions, components, and files.
* Keep implementations focused and avoid unnecessary complexity.

---

Following these rules will help us build `distributions.ninja` efficiently and maintain a high-quality, consistent codebase. Thanks, Cline!
