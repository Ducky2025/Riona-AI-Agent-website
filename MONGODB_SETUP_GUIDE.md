# 🗄️ MongoDB Setup Guide for Riona AI Agent

## ✅ Option 1: MongoDB Atlas (Cloud Database - Recommended)

MongoDB Atlas provides a free cloud database that's perfect for the Riona AI Agent.

### Step-by-Step Setup:

#### 1. Create MongoDB Atlas Account
- Go to: https://www.mongodb.com/atlas
- Click "Try Free" 
- Sign up with email/Google/GitHub

#### 2. Create a Free Cluster
- Choose "Build a Database"
- Select "M0 Sandbox" (FREE forever)
- Choose your preferred cloud provider and region
- Click "Create Cluster"

#### 3. Set Up Database Access
- Go to "Database Access" in left sidebar
- Click "Add New Database User"
- Choose "Password" authentication
- Username: `riona-admin`
- Password: Generate a secure password (save it!)
- Database User Privileges: "Atlas admin"
- Click "Add User"

#### 4. Configure Network Access
- Go to "Network Access" in left sidebar
- Click "Add IP Address"
- Choose "Allow Access from Anywhere" (for development)
- Or add your specific IP address
- Click "Confirm"

#### 5. Get Connection String
- Go back to "Database" 
- Click "Connect" on your cluster
- Choose "Connect your application"
- Copy the connection string (looks like):
```
mongodb+srv://riona-admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```
- Replace `<password>` with your actual password

#### 6. Configure Riona AI Agent
Edit `/workspace/Riona-AI-Agent/.env`:
```env
MONGODB_URI=mongodb+srv://riona-admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/riona-ai-agent?retryWrites=true&w=majority
```

---

## 🖥️ Option 2: Local MongoDB Installation (If you have admin access)

### For Ubuntu/Debian:
```bash
# Import MongoDB public GPG key
curl -fsSL https://pgp.mongodb.com/server-7.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor

# Add MongoDB repository
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Update package database
sudo apt-get update

# Install MongoDB
sudo apt-get install -y mongodb-org

# Start MongoDB service
sudo systemctl start mongod
sudo systemctl enable mongod
```

### Connection String for Local:
```env
MONGODB_URI=mongodb://localhost:27017/riona-ai-agent
```

---

## 🐳 Option 3: Docker MongoDB (If Docker is available)

```bash
# Pull and run MongoDB container
docker run -d \
  --name mongodb-riona \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=password123 \
  -v mongodb_data:/data/db \
  mongo:latest

# Connection string:
MONGODB_URI=mongodb://admin:password123@localhost:27017/riona-ai-agent?authSource=admin
```

---

## 🧪 Testing Your MongoDB Connection

Create a test script to verify your connection:

```javascript
// test-mongodb.js
const mongoose = require('mongoose');
require('dotenv').config();

async function testConnection() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected successfully!');
    
    // Test creating a document
    const testSchema = new mongoose.Schema({
      name: String,
      timestamp: { type: Date, default: Date.now }
    });
    
    const TestModel = mongoose.model('Test', testSchema);
    const testDoc = new TestModel({ name: 'Riona AI Test' });
    await testDoc.save();
    
    console.log('✅ Test document created successfully!');
    console.log('📊 Database is ready for Riona AI Agent');
    
    await mongoose.disconnect();
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
  }
}

testConnection();
```

Run the test:
```bash
cd /workspace/Riona-AI-Agent
node test-mongodb.js
```

---

## 🔧 Configuring Riona AI Agent

### 1. Update Environment Variables
Edit `/workspace/Riona-AI-Agent/.env`:
```env
# MongoDB Configuration
MONGODB_URI=your_mongodb_connection_string_here

# Instagram credentials (for real automation)
IGusername=your_instagram_username
IGpassword=your_instagram_password

# Gemini AI keys are already configured
```

### 2. Install Dependencies (if not done)
```bash
cd /workspace/Riona-AI-Agent
npm install
```

### 3. Start the Application
```bash
npm start
```

---

## 📊 What MongoDB Does for Riona AI Agent

- **User Data Storage**: Stores Instagram account information
- **Automation Logs**: Keeps track of all automation activities
- **AI Training Data**: Stores training data and model configurations
- **Analytics**: Tracks performance metrics and statistics
- **Content History**: Maintains history of posts, comments, and interactions

---

## 🆘 Troubleshooting

### Common Issues:

1. **Connection String Error**:
   - Ensure password doesn't contain special characters or URL-encode them
   - Check that IP address is whitelisted in Atlas

2. **Authentication Failed**:
   - Verify username and password are correct
   - Check database user has proper permissions

3. **Network Timeout**:
   - Check firewall settings
   - Verify network access is configured in Atlas

4. **Database Name Issues**:
   - Ensure database name is specified in connection string
   - Use lowercase letters and hyphens only

### Support Resources:
- MongoDB Atlas Documentation: https://docs.atlas.mongodb.com/
- Connection String Guide: https://docs.mongodb.com/manual/reference/connection-string/
- Troubleshooting: https://docs.atlas.mongodb.com/troubleshoot-connection/

---

## ✅ Success Checklist

- [ ] MongoDB database created and accessible
- [ ] Connection string configured in .env file
- [ ] Test connection successful
- [ ] Riona AI Agent starts without database errors
- [ ] Can see data being stored during automation

**🎉 Once complete, your Riona AI Agent will have full data persistence!**
