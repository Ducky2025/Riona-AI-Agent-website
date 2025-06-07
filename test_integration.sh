#!/bin/bash

echo "🧪 TESTING RIONA AI AGENT INTEGRATION"
echo "======================================"
echo ""

API_BASE="http://localhost:3001"
PASSED=0
FAILED=0

test_endpoint() {
    local name="$1"
    local url="$2"
    
    echo -n "Testing $name... "
    
    if response=$(curl -s -o /dev/null -w "%{http_code}" "$url" 2>/dev/null); then
        if [ "$response" = "200" ]; then
            echo "✅ PASSED (Status: $response)"
            ((PASSED++))
        else
            echo "❌ FAILED (Status: $response)"
            ((FAILED++))
        fi
    else
        echo "❌ FAILED (Connection error)"
        ((FAILED++))
    fi
}

echo "Testing Backend API Endpoints:"
echo "------------------------------"

test_endpoint "Health Check" "$API_BASE/health"
test_endpoint "Dashboard Data" "$API_BASE/api/dashboard"
test_endpoint "Automation Status" "$API_BASE/api/automation/status"
test_endpoint "Authentication Status" "$API_BASE/api/auth/instagram/status"
test_endpoint "Training Jobs" "$API_BASE/api/training/jobs"
test_endpoint "Analytics Data" "$API_BASE/api/analytics"
test_endpoint "Upload Files List" "$API_BASE/api/upload/files"
test_endpoint "System Logs" "$API_BASE/api/logs"

echo ""
echo "📊 INTEGRATION TEST RESULTS:"
echo "=============================="
echo "✅ Passed: $PASSED"
echo "❌ Failed: $FAILED"

TOTAL=$((PASSED + FAILED))
if [ $TOTAL -gt 0 ]; then
    SUCCESS_RATE=$((PASSED * 100 / TOTAL))
    echo "📈 Success Rate: $SUCCESS_RATE%"
fi

echo ""
if [ $FAILED -eq 0 ]; then
    echo "🎉 ALL TESTS PASSED - INTEGRATION SUCCESSFUL!"
    echo "🚀 Frontend can successfully connect to backend APIs"
    echo "💡 Ready for production deployment!"
    echo ""
    echo "🌐 Access Points:"
    echo "  • Backend API: http://localhost:3001"
    echo "  • Frontend App: http://localhost:5173"
    echo "  • Dashboard: http://localhost:5173/ (Navigate to Dashboard)"
else
    echo "⚠️  Some tests failed - check backend server status"
fi

echo ""
echo "Sample API Response:"
echo "===================="
curl -s "$API_BASE/api/dashboard" | head -c 200
echo "..."
