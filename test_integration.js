#!/usr/bin/env node

const axios = require('axios');

const API_BASE = 'http://localhost:3001';

async function testIntegration() {
    console.log('🧪 TESTING RIONA AI AGENT INTEGRATION\n');
    
    const tests = [
        {
            name: 'Health Check',
            url: `${API_BASE}/health`,
            method: 'GET'
        },
        {
            name: 'Dashboard Data',
            url: `${API_BASE}/api/dashboard`,
            method: 'GET'
        },
        {
            name: 'Automation Status',
            url: `${API_BASE}/api/automation/status`,
            method: 'GET'
        },
        {
            name: 'Authentication Status',
            url: `${API_BASE}/api/auth/instagram/status`,
            method: 'GET'
        },
        {
            name: 'Training Jobs',
            url: `${API_BASE}/api/training/jobs`,
            method: 'GET'
        },
        {
            name: 'Analytics Data',
            url: `${API_BASE}/api/analytics`,
            method: 'GET'
        },
        {
            name: 'Upload Files List',
            url: `${API_BASE}/api/upload/files`,
            method: 'GET'
        },
        {
            name: 'System Logs',
            url: `${API_BASE}/api/logs`,
            method: 'GET'
        }
    ];

    let passed = 0;
    let failed = 0;

    for (const test of tests) {
        try {
            const response = await axios({
                method: test.method,
                url: test.url,
                timeout: 5000
            });
            
            console.log(`✅ ${test.name}: Status ${response.status}`);
            console.log(`   Data: ${JSON.stringify(response.data).substring(0, 100)}...`);
            passed++;
        } catch (error) {
            console.log(`❌ ${test.name}: Failed`);
            console.log(`   Error: ${error.message}`);
            failed++;
        }
        console.log('');
    }

    console.log('📊 INTEGRATION TEST RESULTS:');
    console.log(`✅ Passed: ${passed}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`📈 Success Rate: ${Math.round((passed / (passed + failed)) * 100)}%`);
    
    if (failed === 0) {
        console.log('\n🎉 ALL TESTS PASSED - INTEGRATION SUCCESSFUL!');
        console.log('🚀 Frontend can successfully connect to backend APIs');
        console.log('💡 Ready for production deployment!');
    } else {
        console.log('\n⚠️  Some tests failed - check backend server status');
    }
}

testIntegration().catch(console.error);
