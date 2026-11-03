# Arun's Google L4 Interview Lab

A buildless, multi-page personal preparation website for Google L4 Googliness and leadership conversations. Open `index.html` or serve the repository root. No package installation, API key, account, or backend is required.

## Start

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`. All links are relative, so the site also works under a GitHub Pages repository subpath. To host with GitHub Pages, select the default branch and `/ (root)` in the repository's Pages settings if it is not already configured. No hosting configuration or access permissions are changed by this update.

## Pages

- `index.html`: overview, answer frameworks, and preparation progress.
- `stories.html`: nine complete story guides with 32 answered follow-ups and clearly labeled draft material.
- `ai-project.html`: the confirmed Alexa test runner, workflow, evaluation reasoning, and proposed improvements.
- `questions.html`: 62 searchable questions with complete main answers, 104 answered question follow-ups, category/format filters, bookmarks, notes, and practice links.
- `practice.html`: randomized single-question practice, six multi-question bundles, timer, revealable guidance, self-ratings, saved drafts, and attempt history.
- `plan.html`: checklist, focused preparation schedules, interviewer questions, and JSON backup import/export.
- `sources.html`: dated source links, evidence limitations, and the personal evidence ledger.
- `star_prep.html`: original Amazon STAR bank, preserved with a link to the new site.

## How to use it

1. Verify the factual notes in the story library, especially exact ownership and conflicting legacy metrics.
2. Prepare six varied examples; do not answer every question with the AI project.
3. Filter the question bank by a weak theme and save questions to revisit.
4. Practice out loud before revealing the guidance.
5. Use **Several questions at once** to rehearse mapping clauses and keeping answers complete under interruption.
6. Save notes and self-ratings, then export a backup from the prep plan.

Notes, bookmarks, progress, and attempts use browser `localStorage`. They are not sent to any service. Storage is specific to the browser and origin; use export/import when changing devices, ports, or hosting. File-URL storage behavior varies by browser, so serving over HTTP is recommended for consistent persistence. Export before clearing site data. Backups merge with existing notes/progress; matching note keys use the imported value. Practice history retains the most recent 100 attempts.

## Content and research

Research was checked on **3 November 2026**. The site distinguishes official Google guidance, individual candidate reports, original practice prompts, confirmed personal experience, and proposed design improvements. Reports are not a guaranteed question bank or an official L4 rubric. The Alexa project does not contain invented numerical impact.

The original HTML has extra claims that are not independently verified. The new guides flag inconsistent upload improvements and the difference between debounce wait and device execution latency. Hypotheticals remain explicitly hypothetical.

## Maintenance and checks

- Edit interview content in `assets/data.js`.
- Edit rendering and interactions in `assets/app.js`.
- Edit shared styling in `assets/style.css`.
- Shared HTML shells load local scripts with `defer`, so fetching content is not necessary.

```sh
node --check assets/app.js
node --check assets/data.js
python3 scripts/check_site.py
```

Browser verification covers navigation, search/filter/empty states, question expansion, bookmarks and notes surviving reload, practice links, timer controls, multi-part mode, saved attempts, checklist persistence, and backup controls. There are no external runtime libraries or fonts on the new pages. The archived page retains its original external font link.

## Complete answer coverage

Every main question has a finished rehearsal response, and every displayed question/story follow-up has an answer. Inferred examples are labeled as illustrative drafts; they are not newly verified employment events. Mock practice reveals the same complete answers as the question bank. Personal note fields remain optional and do not replace answer content.
