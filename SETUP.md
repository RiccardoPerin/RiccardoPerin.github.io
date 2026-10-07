# Publishing riccardoperin.github.io

## 1. Create the repository
1. On GitHub, create a **new public repository** named exactly `RiccardoPerin.github.io` (empty: no README, no license).
2. Unzip this folder and push it:
   ```bash
   cd RiccardoPerin.github.io
   git init -b main
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/RiccardoPerin/RiccardoPerin.github.io.git
   git push -u origin main
   ```
3. Repository **Settings → Actions → General → Workflow permissions → Read and write**, then save.
   Re-run the "Deploy site" workflow from the Actions tab if the first run failed for lack of permissions.
4. When the workflow is green, go to **Settings → Pages → Build and deployment → Source: Deploy from a branch → `gh-pages` / root**.
5. After a minute the site is live at https://riccardoperin.github.io (English) and https://riccardoperin.github.io/it/ (Italian).

Every later `git push` to `main` rebuilds the site automatically.

## 2. Things only you can fill in (search the repo for `TODO` and `# check`)
| What | Where |
|---|---|
| Your photo (square, ≥ 600 px) | replace `assets/img/prof_pic.jpg` |
| Start years for MSc, BSc, DIANA, tutoring | `_data/en-us/cv.yml`, `_data/it/cv.yml` (lines marked `# check`) |
| Dates of the news items | `_news/en-us/*.md`, `_news/it/*.md` (same date in both languages) |
| Exact titles of the MRI report and BSc thesis, thesis year | `_bibliography/papers.bib` |
| LinkedIn, ORCID, CV PDF | `_data/socials.yml` |
| CV PDFs (English and Italian) | `assets/pdf/en-us/CV_Riccardo_Perin.pdf`, `assets/pdf/it/CV_Riccardo_Perin.pdf`, then uncomment `cv_pdf` in `_pages/*/cv.md` and `_data/socials.yml` |
| Repo links for NICU and ZeroStress | `_projects/*/nicu.md`, `_projects/*/zerostress.md` (commented `Code:` lines) and `_data/repositories.yml` |
| What DIANA allows you to share | `_projects/*/diana.md` |

## 3. How the two languages work
- English is the default (`/`), Italian lives under `/it/`. The switch is in the navbar.
- Every page exists twice: `_pages/en-us/` and `_pages/it/`, `_projects/en-us/` and `_projects/it/`, `_news/en-us/` and `_news/it/`, `_data/en-us/` and `_data/it/`.
- Keep the **same file name and `page_id`** in both languages so the switch jumps to the matching page.
- If an Italian version is missing, the English one is shown instead, so nothing breaks.
- `_bibliography/papers.bib`, `_data/socials.yml` and `assets/` are shared by both languages.

## 4. Adding a project
Copy an existing file in `_projects/en-us/`, change the text, set `category` to `research`, `ml` or `software`,
and create the Italian twin in `_projects/it/` with the same file name.
`importance` controls the order inside a category (1 = first).
A hidden draft for a pharmacometrics project is in `_projects/en-us/pkpd-draft.md` (`published: false`).

## 5. Preview locally (optional)
With Docker Desktop installed: `docker compose pull && docker compose up`, then open http://localhost:8080.
