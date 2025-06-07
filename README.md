Deploy Riona AI Live - Complete Guide

Your Riona AI Instagram automation platform is ready for live deployment! Choose your preferred hosting platform below.

## **OPTION 1: VERCEL (FASTEST - RECOMMENDED)**

### **Why Vercel?**
-**Instant deployment** from GitHub
-**Automatic HTTPS** and CDN
-**Zero configuration** needed
-**Free tier** for personal projects
-**Perfect for Node.js** applications

### **Deploy Steps:**

#### **Step 1: Upload to GitHub** (if not done yet)
```bash
cd /workspace/riona-ai-production

# Upload to your GitHub (replace YOUR_TOKEN)
git remote set-url origin https://YOUR_TOKEN@github.com/Ducky2025/riona-ai-agent.git
git add vercel.json
git commit -m "ðŸš€ Add Vercel deployment config"
git push -u origin main
```

#### **Step 2: Deploy to Vercel**
1. **Go to [vercel.com](https://vercel.com)** and sign up/login
2. **Connect GitHub**: Link your GitHub account
3. **Import Repository**: 
   - Click "New Project"
   - Find `Ducky2025/riona-ai-agent`
   - Click "Import"
4. **Configure Project**:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm install`
   - **Output Directory**: Leave empty
5. **Environment Variables**: Add these in Vercel dashboard:
   ```
   NODE_ENV=production
   JWT_SECRET=your_super_secret_jwt_key_here
   DB_TYPE=file
   PORT=3003
   ```
6. **Deploy**: Click "Deploy"

#### **Step 3: Your Live URL**
- Vercel will provide a URL like: `https://riona-ai-agent-ducky2025.vercel.app`
- Your app will be live in 2-3 minutes!

---

## ðŸŒŸ **OPTION 2: RAILWAY (FULL-STACK FRIENDLY)**

### **Why Railway?**
- âœ… **Perfect for Node.js + Database** apps
- âœ… **Automatic deployments** from GitHub
- âœ… **Built-in database** options
- âœ… **Simple pricing** ($5/month after free tier)

### **Deploy Steps:**

#### **Step 1: Deploy to Railway**
1. **Go to [railway.app](https://railway.app)** and sign up
2. **New Project**: Click "New Project"
3. **Deploy from GitHub**:
   - Connect GitHub account
   - Select `Ducky2025/riona-ai-agent`
4. **Environment Variables**: Add in Railway dashboard:
   ```
   NODE_ENV=production
   JWT_SECRET=your_super_secret_jwt_key_here
   DB_TYPE=file
   PORT=$PORT
   ```
5. **Custom Start Command**: `npm start`
6. **Deploy**: Railway auto-deploys on GitHub push

#### **Step 2: Your Live URL**
- Railway provides: `https://riona-ai-agent-production.up.railway.app`

---

## ðŸŒŸ **OPTION 3: GOOGLE CLOUD RUN (ENTERPRISE GRADE)**

### **Why Google Cloud?**
- âœ… **Enterprise scalability**
- âœ… **Pay per use** (very cost effective)
- âœ… **Global CDN** and load balancing
- âœ… **You have deployment scripts ready**

### **Deploy Steps:**

#### **Step 1: Setup Google Cloud**
```bash
# Install Google Cloud CLI (if not installed)
curl https://sdk.cloud.google.com | bash
gcloud init

# Set your project
gcloud config set project YOUR_PROJECT_ID
```

#### **Step 2: Deploy Using Our Script**
```bash
cd /workspace/riona-ai-production

# Make deploy script executable
chmod +x deploy-gcp.sh

# Deploy to Google Cloud
./deploy-gcp.sh
```

#### **Step 3: Configure Environment**
```bash
# Set environment variables in Cloud Run
gcloud run services update riona-ai-production \
  --set-env-vars NODE_ENV=production,JWT_SECRET=your_secret_key,DB_TYPE=file \
  --region us-central1
```

---

## ðŸŒŸ **OPTION 4: RENDER (DEVELOPER FRIENDLY)**

### **Why Render?**
- âœ… **Simple deployment** process
- âœ… **Free tier** with automatic sleep
- âœ… **Great documentation**
- âœ… **Automatic SSL** certificates

### **Deploy Steps:**

#### **Step 1: Deploy to Render**
1. **Go to [render.com](https://render.com)** and sign up
2. **New Web Service**: Connect GitHub
3. **Select Repository**: `Ducky2025/riona-ai-agent`
4. **Configuration**:
   - **Name**: `riona-ai-production`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. **Environment Variables**:
   ```
   NODE_ENV=production
   JWT_SECRET=your_super_secret_jwt_key_here
   DB_TYPE=file
   PORT=10000
   ```
6. **Deploy**: Click "Create Web Service"

---

## ðŸ”§ **ENVIRONMENT VARIABLES FOR ALL PLATFORMS**

### **Required Variables:**
```bash
NODE_ENV=production
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters
DB_TYPE=file
PORT=3003
```

### **Optional (MongoDB):**
```bash
DB_TYPE=mongodb
MONGODB_PASSWORD=your_mongodb_password
MONGODB_USERNAME=e111ltd
MONGODB_URI=mongodb+srv://riona-ai-agent.f4cgsno.mongodb.net/riona-production
```

### **Optional (Gemini AI):**
```bash
GEMINI_API_KEY_1=AIzaSy...your_first_api_key
GEMINI_API_KEY_2=AIzaSy...your_second_api_key
# ... up to 51 keys for maximum capacity
```

---

## âš¡ **QUICK DEPLOYMENT SCRIPT**

I've created a universal deployment helper:

```bash
cd /workspace/riona-ai-production

# Quick deploy to Vercel (fastest)
npx vercel --prod

# Quick deploy to Railway
git push railway main

# Quick deploy to Google Cloud
./deploy-gcp.sh

# Quick deploy to Render
# (Just push to GitHub and connect in Render dashboard)
```

---

## ðŸŽ¯ **RECOMMENDATION: START WITH VERCEL**

For the fastest live deployment, I recommend **Vercel**:

1. **Upload to GitHub**: `git push origin main`
2. **Import to Vercel**: Connect your repository
3. **Add Environment Variables**: JWT_SECRET, NODE_ENV=production
4. **Deploy**: Your app will be live in minutes!

### **Vercel Deployment Commands:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (from your project directory)
cd /workspace/riona-ai-production
vercel --prod
```

---

## ðŸŒ **AFTER DEPLOYMENT - YOUR LIVE APP FEATURES**

Once live, your users can access:

### **ðŸ  Homepage**
- Professional landing page
- Feature showcase
- Call-to-action buttons

### **ðŸ” Authentication**
- User registration and login
- Demo credentials: `test@example.com` / `test123`
- Secure JWT session management

### **ðŸ“Š Dashboard**
- Instagram automation controls
- AI comment configuration
- Real-time analytics
- Session management

### **ðŸ¤– AI Features**
- 51 Gemini API key support
- Smart comment generation
- Context-aware responses
- Rate limiting and rotation

### **ðŸ“± Instagram Automation**
- Like automation with smart delays
- Comment automation with AI generation
- Follow/unfollow strategies
- Analytics and reporting

---

## ðŸ”— **YOUR LIVE URLs WILL BE:**

- **Vercel**: `https://riona-ai-agent-ducky2025.vercel.app`
- **Railway**: `https://riona-ai-agent-production.up.railway.app`
- **Google Cloud**: `https://riona-ai-production-[hash].a.run.app`
- **Render**: `https://riona-ai-production.onrender.com`

---

## ðŸŽ‰ **SUCCESS CHECKLIST**

After deployment, verify:
- [ ] **Homepage loads** with proper styling
- [ ] **Health check works**: `/health` endpoint responds
- [ ] **Authentication works**: Can register/login
- [ ] **Dashboard accessible**: After login
- [ ] **Environment variables set**: Check logs for any missing vars
- [ ] **HTTPS enabled**: Secure connection
- [ ] **Custom domain** (optional): Set up your domain

---

## ðŸš€ **NEXT STEPS AFTER GOING LIVE**

1. **ðŸ”— Share Your App**: Send the live URL to users
2. **ðŸ“ˆ Monitor Usage**: Check platform analytics
3. **ðŸ”§ Add Features**: MongoDB, Gemini AI keys
4. **ðŸŒ Custom Domain**: Point your domain to the app
5. **ðŸ“Š Set Up Analytics**: Google Analytics, monitoring
6. **ðŸ”’ Security**: Rate limiting, API protection
7. **ðŸ“± Mobile Optimization**: PWA features
8. **ðŸ¤– Scale AI**: Add all 51 Gemini API keys

**Which deployment platform would you like to use? I recommend starting with Vercel for the fastest results!** ðŸš€