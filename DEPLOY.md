# Deploy to lokendra0905.github.io

This project is set up to deploy as a **user site** at **https://lokendra0905.github.io/**.

## Repo name

Your repo must be named **exactly**:

```text
lokendra0905.github.io
```

That matches your GitHub username (**lokendra0905**), so the site URL is **https://lokendra0905.github.io/**.

## If you already have the repo

If **lokendra0905.github.io** already exists and has another site (or an old portfolio):

1. **Clone it** (or add this project as the new content):

   ```bash
   git clone https://github.com/lokendra0905/lokendra0905.github.io.git
   cd lokendra0905.github.io
   ```

2. **Replace its contents** with this Verel-portfolio project (copy all files from Verel-portfolio into the repo, or push from the Verel-portfolio folder with that remote).

3. **Use the `main` branch** and push:

   ```bash
   git add .
   git commit -m "Deploy portfolio with Next.js"
   git push -u origin main
   ```

4. **Use GitHub Actions for Pages:**
   - Repo → **Settings** → **Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**

5. The **Deploy to GitHub Pages** workflow will run on push. After it finishes, **https://lokendra0905.github.io/** will show this portfolio (replacing the previous site).

## If you're creating the repo from this project

1. On GitHub, create a new repo named **`lokendra0905.github.io`** (no README/license needed).

2. From your Verel-portfolio folder:

   ```bash
   git remote add origin https://github.com/lokendra0905/lokendra0905.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. **Settings** → **Pages** → **Source** → **GitHub Actions**.

Your site will be at **https://lokendra0905.github.io/**.

## Local build (optional)

```bash
NEXT_PUBLIC_BASE_PATH="" npm run build
```

Output is in the **`out`** folder.

## Troubleshooting

- **404 or blank page:** In **Settings → Pages**, set **Source** to **GitHub Actions**.
- **Wrong or old site:** Clear browser cache or wait a few minutes after the workflow completes.
- **Build fails:** Check the **Actions** tab and fix the error in the failed step.
