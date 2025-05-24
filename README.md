
# Docwave

DocWave is a collaborative, real-time document editor built with Next.js, Convex, and Tiptap. It offers a modern, feature-rich editing experience with support for templates, comments, formatting, and export options.

## Visit Docwave :-  [Docwave](https://doc-wave-one.vercel.app/)


## Features

- **Real-time Collaboration:**  Multiple users can edit documents simultaneously.
- **Rich Text Editing:** Supports bold, italic, underline, strikethrough, lists, tables, images, links, highlighting, and more.
- **Document Templates:** Start quickly with built-in templates (e.g., Resume, Cover Letter, Business Letter, Proposals).
- **Export Options:** Download documents as JSON, HTML, PDF, or plain text.
- **Export Options:** Download documents as JSON, HTML, PDF, or plain text.
- **Commenting & Threads:** Add comments and manage discussion threads within documents.
- **Task Lists:** Create and manage checklists inside documents.
- **User Authentication & Organizations:** Secure access and organization management (via Clerk).
- **Responsive UI:** Built with Tailwind CSS and shadcn/ui for a modern, accessible interface.


## Installation

Install my-project with npm
- Clone the repository:
```bash
  git clone <your-repo-url>
  cd docs-app
```
- Install dependencies:
```bash
   npm install --legacy-peer-deps
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
```  
- Set up environment variables:
   - Copy .env.example to .env.local and fill in required values (Convex, Clerk, etc.).

- Run the development server:
```bash
  npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
```  
- Open http://localhost:3000 in your browser.
## Project Structure


| Path | Description                |
| :-------- | :------------------------- |
| `src/app/` | Main Next.js app, including routes for documents, authentication, and home. |
| `src/components/` | Reusable UI components (buttons, dialogs, toolbars, etc.). |
| `src/constants/templates.ts` | Built-in document templates. |
| `src/extensions/` | Custom Tiptap editor extensions (e.g., font size, line height). |
| `src/store/` | Zustand store for editor state management. |
| `src/lib/` | Utility functions and font management. |
| `convex/` | Convex backend functions and schema. |




## Tech Stack

**Next.js :**  React framework for SSR and routing.

**Convex :**  Real-time backend for data and collaboration.

**Tiptap :**  Headless rich-text editor.

**Tailwind CSS :**  Utility-first CSS framework.

**shadcn/ui :**  Accessible, customizable UI components.

**Clerk :**  Authentication and organization management.

