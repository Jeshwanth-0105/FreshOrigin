# Farm2Home Deployment Guide

## GitHub Repository Setup

### 1. Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: Farm2Home project"
```

### 2. Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository named `farm2home`
2. Don't initialize with README (we already have one)

### 3. Connect Local to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/farm2home.git
git branch -M main
git push -u origin main
```

## Deployment Options

### Option 1: Vercel (Recommended for Full-Stack)
1. **Frontend**: Deploy automatically from GitHub
2. **Backend**: Deploy as serverless functions

### Option 2: Netlify + Railway
1. **Frontend**: Netlify (from GitHub)
2. **Backend**: Railway (from GitHub)

### Option 3: GitHub Pages (Frontend Only)
```bash
cd frontend
npm run deploy
```

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secure_jwt_secret
NODE_ENV=production
```

### Frontend (.env)
```
REACT_APP_API_URL=https://your-backend-url.com/api
```

## Quick Deploy Commands

### Push to GitHub
```bash
git add .
git commit -m "Deploy ready"
git push origin main
```

### Deploy Frontend to GitHub Pages
```bash
cd frontend
npm run build
npm run deploy
```