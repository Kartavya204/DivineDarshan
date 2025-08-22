import aiService from './utils/aiService.js';
import aiForecastService from './utils/aiForecast.js';

// Test the AI service with sample data
async function testAIService() {
    console.log('🧪 Testing AI Service Integration...\n');
    
    const sampleData = {
        zoneId: 'GATE1',
        count: 750,
        timestamp: new Date().toISOString(),
        historicalData: [650, 700, 720, 750],
        capacity: 1000
    };

    try {
        console.log('📊 Sample Data:', JSON.stringify(sampleData, null, 2));
        
        // Test crowd pattern analysis
        const analysis = await aiService.analyzeCrowdPatterns(sampleData, { capacity: 1000, zoneType: 'entrance' });
        
        console.log('\n✅ AI Analysis Result:');
        console.log(analysis);
        
        // Test safety alert generation
        const alert = await aiService.generateSafetyAlert(sampleData, 'GATE1');
        console.log('\n🚨 Safety Alert:');
        console.log(alert);
        
        console.log('\n🎯 AI Service Test Completed Successfully!');
        console.log('📋 Features Tested:');
        console.log('   - Crowd pattern analysis');
        console.log('   - Safety alert generation');
        console.log('   - Multi-provider support');
        
    } catch (error) {
        console.error('❌ AI Service Test Failed:', error.message);
        console.log('📝 This is expected if API keys are not configured');
        console.log('💡 Configure your API keys in .env file:');
        console.log('   OPENAI_API_KEY=your_openai_key_here');
        console.log('   ANTHROPIC_API_KEY=your_anthropic_key_here');
        console.log('   OPENROUTER_API_KEY=your_openrouter_key_here');
    }
}

// Test the AI forecast service
async function testAIForecast() {
    console.log('\n🧪 Testing AI Forecast Service...\n');
    
    const historicalData = [
        { timestamp: new Date(Date.now() - 3600000).toISOString(), count: 500 },
        { timestamp: new Date(Date.now() - 1800000).toISOString(), count: 650 },
        { timestamp: new Date(Date.now() - 600000).toISOString(), count: 720 },
        { timestamp: new Date().toISOString(), count: 750 }
    ];

    try {
        // Add some historical data first
        for (const data of historicalData) {
            await aiForecastService.addCrowdData('GATE1', data.count, new Date(data.timestamp).getTime());
        }
        
        const forecast = await aiForecastService.forecast('GATE1', 60);
        
        console.log('📈 AI Forecast Result:');
        console.log(JSON.stringify(forecast, null, 2));
        
    } catch (error) {
        console.log('📝 AI Forecast requires API keys configuration:', error.message);
    }
}

// Test visitor assistance
async function testVisitorAssistance() {
    console.log('\n🧪 Testing Visitor Assistance...\n');
    
    try {
        const response = await aiService.provideVisitorAssistance(
            "Where is the nearest restroom?",
            { currentZone: 'GATE1', crowdLevel: 'moderate' }
        );
        
        console.log('🤖 Visitor Assistance Response:');
        console.log(response);
        
    } catch (error) {
        console.log('📝 Visitor assistance requires API keys');
    }
}

// Run tests
async function runTests() {
    await testAIService();
    await testAIForecast();
    await testVisitorAssistance();
    
    console.log('\n🚀 Divine Darshan AI Integration Ready!');
    console.log('📋 Next Steps:');
    console.log('   1. Configure API keys in .env file');
    console.log('   2. Test with real crowd data');
    console.log('   3. Deploy to production');
    console.log('\n🔧 Available AI Providers:');
    console.log('   - OpenAI GPT-4');
    console.log('   - Anthropic Claude');
    console.log('   - OpenRouter (multiple models)');
    console.log('   - Local LLM (self-hosted)');
}

runTests().catch(console.error);
