# 🚀 Farm2Home Deployment Instructions

## Quick GitHub Push

### Option 1: Use the Batch Script (Windows)
```bash
# Run the deployment script
deploy-to-github.bat
```

### Option 2: Manual Commands
```bash
# 1. Create repository on GitHub named 'farm2home'
# 2. Run these commands:

git remote add origin https://github.com/YOUR_USERNAME/farm2home.git
git branch -M main
git push -u origin main
```

## 🌐 Deployment Platforms

### Frontend Deployment Options

#### 1. Vercel (Recommended)
- Connect GitHub repository
- Auto-deploy on push
- Free tier available

#### 2. Netlify
- Drag & drop build folder
- GitHub integration
- Free tier available

#### 3. GitHub Pages
```bash
cd frontend
npm run build
npm run deploy
```

### Backend Deployment Options

#### 1. Railway
- Connect GitHub repository
- Auto-deploy on push
- MongoDB Atlas integration

#### 2. Render
- Free tier available
- Easy MongoDB connection
- Auto-deploy from GitHub

#### 3. Heroku
```bash
# Install Heroku CLI
heroku create farm2home-backend
git subtree push --prefix backend heroku main
```

## 📋 Pre-Deployment Checklist

- [ ] MongoDB Atlas database created
- [ ] Environment variables configured
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Frontend build tested locally
- [ ] Backend API endpoints tested

## 🔧 Environment Setup

### 1. MongoDB Atlas
1. Create account at [MongoDB Atlas](https://cloud.mongodb.com)
2. Create cluster
3. Get connection string
4. Add to backend `.env`

### 2. Environment Variables

**Backend (.env):**
```
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/farm2home
JWT_SECRET=your_secure_jwt_secret_minimum_32_characters
NODE_ENV=production
```

**Frontend (.env):**
```
REACT_APP_API_URL=https://your-backend-url.com/api
```

## 🎯 Quick Deploy Steps

1. **Push to GitHub** ✅ (Already done)
2. **Deploy Backend** → Railway/Render
3. **Deploy Frontend** → Vercel/Netlify
4. **Update Frontend API URL**
5. **Test Live Application**

## 📞 Support

If you encounter issues:
1. Check environment variables
2. Verify MongoDB connection
3. Check CORS settings
4. Review deployment logs

---
**Status**: Ready for deployment 🚀