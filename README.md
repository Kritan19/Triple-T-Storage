
# Triple T Storage Website

Professional, responsive website for Triple T Storage in Orofino, ID.

## How to Host on GitHub Pages

Follow these steps to get your site live:

### 1. Create a GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository named `triplet-storage`.
2. Do **not** initialize it with a README (one is already provided here).

### 2. Prepare the Project
Open your terminal in this project folder and run:
```bash
npm install
```

### 3. Initialize Git and Push
Run these commands in order (replace `USERNAME` with your GitHub username):
```bash
git init
git add .
git commit -m "Initial commit of Triple T Storage website"
git branch -M main
git remote add origin https://github.com/USERNAME/triplet-storage.git
git push -u origin main
```

### 4. Deploy to GitHub Pages
Simply run:
```bash
npm run deploy
```
This script will build your project and push it to a special `gh-pages` branch.

### 5. Finalize in GitHub Settings
1. Go to your repository on GitHub.
2. Click **Settings** > **Pages**.
3. Under **Build and deployment** > **Branch**, ensure it is set to `gh-pages` and folder `/ (root)`.
4. Your site will be live at `https://USERNAME.github.io/triplet-storage/` within a few minutes!

## Tech Stack
- React 19
- TypeScript
- Tailwind CSS
- Lucide Icons
- Vite (Build Tool)
