# 🔑 Riona AI Agent - Complete API Setup Guide

## Overview
Your Riona AI Agent requires several API keys to function fully. Here's a step-by-step guide to configure everything properly.

## 📁 Configuration File Location
Edit this file: `/workspace/Riona-AI-Agent/.env`

---

## 🤖 1. Google Gemini AI API Keys (✅ ALREADY CONFIGURED)

**Status**: ✅ **50 working API keys already provided**
**Used for**: AI content generation, comment generation, smart automation

```env
# These are already set up and working!
GEMINI_API_KEY_1=
# ... 49 more keys already configured
```

**Note**: The system automatically rotates between 50 API keys, giving you 75,000 requests per day!

---

## 📱 2. Instagram Credentials (REQUIRED for real automation)

### Option A: Demo Mode (Recommended for testing)
✅ **No setup needed** - just use the demo login on the website:
- Username: `demo`
- Password: `demo`

### Option B: Real Instagram Account
**⚠️ Use a test/secondary Instagram account, not your main account**

```env
# Add your Instagram credentials
IGusername=your_instagram_username
IGpassword=your_instagram_password
```

**How to get**:
1. Create a new Instagram account or use an existing secondary account
2. Use standard Instagram username/password
3. **Warning**: Instagram may detect automation - use test accounts only

---

## 🗄️ 3. MongoDB Database (Optional - for data persistence)

### Option A: Local MongoDB (Simple setup)
```env
MONGODB_URI=mongodb://localhost:27017/riona-ai-agent
```

**Setup steps**:
```bash
# Using Docker (recommended)
docker run -d -p 27017:27017 --name riona-mongodb mongo

# Or install MongoDB locally
# Visit: https://www.mongodb.com/docs/manual/installation/
```

### Option B: MongoDB Atlas (Cloud - recommended for production)
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/riona-ai-agent
```

**How to get**:
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create free account
3. Create new cluster
4. Go to "Connect" → "Connect your application"
5. Copy the connection string

---

## 🐦 4. Twitter/X API Keys (Optional - for Twitter automation)

```env
# Twitter credentials (for future Twitter features)
Xusername=your_twitter_username
Xpassword=your_twitter_password

# Twitter API v2 credentials
TWITTER_API_KEY=your_api_key
TWITTER_API_SECRET=your_api_secret
TWITTER_ACCESS_TOKEN=your_access_token
TWITTER_ACCESS_SECRET=your_access_secret
TWITTER_BEARER_TOKEN=your_bearer_token
```

**How to get**:
1. Go to [Twitter Developer Portal](https://developer.twitter.com/)
2. Apply for developer account
3. Create new app
4. Generate API keys and tokens

---

## 🚀 Quick Start Configuration

### Minimal Setup (for testing):
```env
NODE_ENV=development

# Use demo mode - no real credentials needed
IGusername=demo
IGpassword=demo

# Optional: Add MongoDB for data persistence
MONGODB_URI=mongodb://localhost:27017/riona-ai-agent

# Gemini AI keys are already configured!
```

### Production Setup:
```env
NODE_ENV=production

# Real Instagram account (use test account!)
IGusername=your_test_instagram_username
IGpassword=your_test_instagram_password

# Cloud database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/riona-ai-agent

# Optional: Twitter integration
TWITTER_API_KEY=your_twitter_api_key
# ... other Twitter keys
```

---

## 🔧 How to Apply Configuration

### 1. Edit the .env file:
```bash
cd /workspace/Riona-AI-Agent
nano .env  # or use any text editor
```

### 2. Add your API keys using the format above

### 3. Restart the backend server:
```bash
npm run build
npm start
```

### 4. Test the configuration:
- Go to your website dashboard
- Try logging in with your configured credentials
- Check that AI features work (they should with the provided Gemini keys)

---

## 🛡️ Security Best Practices

### ⚠️ Important Security Notes:
1. **Never share your .env file publicly**
2. **Use test Instagram accounts, not your main account**
3. **Add .env to .gitignore** (already done)
4. **Rotate API keys regularly**
5. **Monitor API usage and costs**

### 🔒 Instagram Account Safety:
- Use a dedicated test account
- Enable 2FA if required
- Monitor for any unusual activity
- Instagram may limit or suspend accounts using automation

---

## 📊 Feature Availability by Configuration

| Feature | Demo Mode | Real Instagram | With MongoDB |
|---------|-----------|----------------|--------------|
| UI Testing | ✅ Full | ✅ Full | ✅ Full |
| AI Content Generation | ✅ Full | ✅ Full | ✅ Full |
| Instagram Login | ✅ Demo | ✅ Real | ✅ Enhanced |
| Automation Controls | ✅ Simulated | ✅ Real | ✅ Real |
| Data Persistence | ❌ None | ❌ None | ✅ Full |
| Analytics History | ❌ Mock | ❌ Mock | ✅ Real |

---

## 🆘 Troubleshooting

### Common Issues:

1. **"Invalid credentials" error**:
   - Double-check username/password spelling
   - Try demo mode first (demo/demo)
   - Ensure Instagram account isn't locked

2. **"Database connection failed"**:
   - Check MongoDB URI format
   - Ensure MongoDB service is running
   - Try local connection first

3. **"AI features not working"**:
   - Gemini keys should work out of the box
   - Check internet connection
   - Look for rate limiting messages

4. **"Server won't start"**:
   - Check for syntax errors in .env file
   - Ensure all required dependencies installed
   - Check port 3002 isn't in use

### Getting Help:
- Check server logs: `npm start` and look for error messages
- Test individual API endpoints
- Use demo mode to isolate issues

---

## ✅ Verification Checklist

- [ ] .env file configured with your API keys
- [ ] Backend server starts without errors
- [ ] Can log in using your configured credentials
- [ ] AI features generate content (Gemini AI working)
- [ ] Database connects (if MongoDB configured)
- [ ] No console errors in browser
- [ ] All dashboard features functional

**🎉 Once complete, your Riona AI Agent will be fully operational!**
