# Deploying to Vercel

This project is ready for Vercel. The build already targets Vercel's Build Output API
(`nitro.preset: "vercel"` in `vite.config.ts`), and `vercel.json` points Vercel at it.

## Steps

1. Push the project to a Git repository (GitHub/GitLab/Bitbucket).
2. In Vercel, click **Add New → Project** and import that repository.
3. Leave the build settings as detected (they come from `vercel.json`).
4. Add these Environment Variables (Production + Preview), copying the values from
   this project's `.env` file:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_PROJECT_ID`
   - `SUPABASE_URL`
   - `SUPABASE_PUBLISHABLE_KEY`
   - `SUPABASE_PROJECT_ID`
5. Click **Deploy**.

## Notes

- Server-side code runs as Vercel Functions; no extra configuration is needed.
- Add your custom domain in Vercel under **Project → Settings → Domains**.
- Publishing from Lovable still works independently of Vercel.
