# Wedding Invitation

Complete React 19, Vite 8, and Tailwind CSS 4 wedding invitation project, including the animated envelope entrance, countdown, celebration details, calendar and map links, scratch card, music, media assets, and local owner editor.

This import preserves the source project's Shristi and Harsh content and metadata. The repository name does not automatically personalize the invitation for Jitesh and Twinkle.

## Run locally

Use Node.js 22.18 or newer.

```sh
npm ci
npm run dev
```

## Owner editor

```sh
npm run editor
```

Open http://127.0.0.1:8444/owner-editor.html. The editor supports invitation details, functions, venues, uploaded artwork and music, local drafts, preview, and customer JSON import/export. It is intended for local use.

See [the customer editor guide](docs/customer-editor.md) for the full workflow and instructions to create a separate personalized invitation build.

## Validate and build

```sh
npm test
npm run typecheck
npm run build
npm run preview
```

The production invitation is generated in `dist/`. The owner editor has its own local server and is intentionally excluded from the public build. `vercel.json` provides the existing Vite deployment settings; importing the repository does not deploy it.

All shared images, audio, and video are committed directly so a fresh checkout contains the media. Dependencies, generated builds, private customer records, and operating system metadata are excluded from this import.
