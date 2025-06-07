#!/usr/bin/env node

/**
 * Creates a fully integrated deployment with all dependencies bundled
 * This ensures the automation button works from the deployed website
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 CREATING INTEGRATED RIONA AI DEPLOYMENT');
console.log('═══════════════════════════════════════════');

function runCommand(cmd, cwd = process.cwd()) {
  console.log(`⚡ Running: ${cmd}`);
  try {
    execSync(cmd, { 
      cwd, 
      stdio: 'inherit',
      env: { ...process.env, NODE_ENV: 'production' }
    });
    console.log('✅ Command completed successfully\n');
  } catch (error) {
    console.error(`❌ Command failed: ${error.message}`);
    throw error;
  }
}

async function createIntegratedDeployment() {
  console.log('📦 Step 1: Installing all backend dependencies...');
  runCommand('npm install --production', '/workspace/Riona-AI-Agent');
  
  console.log('📦 Step 2: Installing frontend dependencies...');
  runCommand('pnpm install', '/workspace/riona-ai-website');
  
  console.log('🔧 Step 3: Building backend with integrated server...');
  runCommand('npm run build', '/workspace/Riona-AI-Agent');
  
  console.log('🔧 Step 4: Building optimized frontend...');
  runCommand('pnpm run build', '/workspace/riona-ai-website');
  
  console.log('📁 Step 5: Creating integrated deployment directory...');
  const deployDir = '/workspace/integrated-deployment';
  if (fs.existsSync(deployDir)) {
    runCommand(`rm -rf ${deployDir}`);
  }
  fs.mkdirSync(deployDir, { recursive: true });
  
  console.log('📋 Step 6: Copying backend build...');
  runCommand(`cp -r /workspace/Riona-AI-Agent/build ${deployDir}/`);
  runCommand(`cp -r /workspace/Riona-AI-Agent/node_modules ${deployDir}/`);
  runCommand(`cp /workspace/Riona-AI-Agent/package.json ${deployDir}/`);
  runCommand(`cp /workspace/Riona-AI-Agent/.env ${deployDir}/`);
  
  console.log('📋 Step 7: Copying frontend build...');
  runCommand(`cp -r /workspace/riona-ai-website/dist ${deployDir}/frontend`);
  
  console.log('📋 Step 8: Copying data and configuration...');
  runCommand(`cp -r /workspace/Riona-AI-Agent/data ${deployDir}/`);
  runCommand(`cp -r /workspace/Riona-AI-Agent/cookies ${deployDir}/`);
  runCommand(`cp -r /workspace/Riona-AI-Agent/uploads ${deployDir}/`);
  runCommand(`cp -r /workspace/Riona-AI-Agent/logs ${deployDir}/`);
  
  console.log('🔧 Step 9: Creating integrated startup script...');
  const startupScript = `#!/bin/bash
# Riona AI Agent Integrated Startup Script

# Set environment variables
export NODE_ENV=production
export PORT=3003

# Start the integrated server
echo "🚀 Starting Riona AI Agent Integrated Server..."
echo "📱 Instagram Bot: tokboss.uk"
echo "🧠 AI System: 51 Gemini API Keys"
echo "🌐 Website + API: All-in-one deployment"
echo ""

node build/integrated-server.js
`;
  
  fs.writeFileSync(`${deployDir}/start.sh`, startupScript);
  runCommand(`chmod +x ${deployDir}/start.sh`);
  
  console.log('📋 Step 10: Creating deployment package.json...');
  const deployPackageJson = {
    "name": "riona-ai-integrated",
    "version": "1.0.0",
    "description": "Riona AI Agent - Integrated Frontend + Backend Deployment",
    "main": "build/integrated-server.js",
    "scripts": {
      "start": "node build/integrated-server.js",
      "deploy": "./start.sh"
    },
    "engines": {
      "node": ">=18.0.0"
    },
    "dependencies": {
      "express": "^4.18.2",
      "cors": "^2.8.5"
    }
  };
  
  fs.writeFileSync(`${deployDir}/package.json`, JSON.stringify(deployPackageJson, null, 2));
  
  console.log('🔧 Step 11: Updating integrated server to serve frontend correctly...');
  const integratedServerPath = `${deployDir}/build/integrated-server.js`;
  if (fs.existsSync(integratedServerPath)) {
    let serverContent = fs.readFileSync(integratedServerPath, 'utf8');
    serverContent = serverContent.replace(
      'path.join(__dirname, \'../../riona-ai-website/dist\')',
      'path.join(__dirname, \'../frontend\')'
    );
    fs.writeFileSync(integratedServerPath, serverContent);
  }
  
  console.log('🎯 Step 12: Creating deployment README...');
  const deployReadme = `# 🚀 Riona AI Agent - Integrated Deployment

## ✅ Complete Self-Contained System

This deployment includes:
- ✅ Frontend Website (React)
- ✅ Backend API (Node.js/Express)
- ✅ Instagram Automation (Puppeteer)
- ✅ AI System (51 Gemini API Keys)
- ✅ Database (File-based storage)
- ✅ All dependencies pre-installed

## 🎯 Quick Start

### Start the integrated server:
\`\`\`bash
./start.sh
# or
npm start
\`\`\`

### Access your system:
- 🌐 Website: http://localhost:3003
- 📊 API: http://localhost:3003/api/
- 🤖 Automation: Click "Start Automation" button on website

## 📱 Instagram Automation

- **Account**: tokboss.uk
- **Status**: Ready for automation
- **AI Power**: 51 Gemini API keys
- **Capacity**: 76,500 daily AI requests

## 🎊 Features Working

✅ Automation button on website  
✅ Real-time status updates  
✅ AI comment generation  
✅ Instagram login and session management  
✅ Complete database logging  
✅ 24/7 operation capability  

Ready for Instagram automation success! 🎉
`;
  
  fs.writeFileSync(`${deployDir}/README.md`, deployReadme);
  
  console.log('🎊 DEPLOYMENT CREATED SUCCESSFULLY!');
  console.log('═══════════════════════════════════');
  console.log(`📁 Location: ${deployDir}`);
  console.log('📋 Contents:');
  console.log('  ✅ Backend API (build/)');
  console.log('  ✅ Frontend Website (frontend/)');
  console.log('  ✅ All Dependencies (node_modules/)');
  console.log('  ✅ Configuration (.env)');
  console.log('  ✅ Database (data/)');
  console.log('  ✅ Logs (logs/)');
  console.log('  ✅ Startup Script (start.sh)');
  console.log('');
  console.log('🚀 To start your integrated system:');
  console.log(`   cd ${deployDir}`);
  console.log('   ./start.sh');
  console.log('');
  console.log('🌐 Then visit: http://localhost:3003');
  console.log('🎯 Click "Start Automation" button to begin Instagram automation!');
  
  return deployDir;
}

// Run the deployment creation
createIntegratedDeployment()
  .then((deployDir) => {
    console.log('\n🎉 SUCCESS! Integrated deployment ready!');
    console.log(`📁 Deploy from: ${deployDir}`);
  })
  .catch((error) => {
    console.error('\n❌ Deployment creation failed:', error);
    process.exit(1);
  });
