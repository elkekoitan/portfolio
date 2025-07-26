'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Brain, Zap, TrendingUp, Eye, Target, Cpu, Sparkles, CheckCircle, Activity, BarChart3 } from 'lucide-react'
import GlassCard from './GlassCard'

interface PatternData {
  id: string
  name: string
  type: 'bullish' | 'bearish' | 'neutral'
  confidence: number
  prediction: number
  probability: number
  timeframe: string
  detected_at: Date
}

interface AIModel {
  name: string
  accuracy: number
  isLoaded: boolean
  lastPrediction: number
  confidence: number
}

interface ChartData {
  time: string
  value: number
  volume: number
}

export default function QuantumDashboard() {
  const [patterns, setPatterns] = useState<PatternData[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [selectedTimeframe, setSelectedTimeframe] = useState("M15")
  const [data, setData] = useState<ChartData[]>([])
  const [aiModels, setAiModels] = useState<AIModel[]>([
    { name: "LSTM Neural Network", accuracy: 87.5, isLoaded: false, lastPrediction: 0, confidence: 0 },
    { name: "Transformer Model", accuracy: 92.3, isLoaded: false, lastPrediction: 0, confidence: 0 },
    { name: "GRU Predictor", accuracy: 85.2, isLoaded: false, lastPrediction: 0, confidence: 0 },
    { name: "Ensemble Model", accuracy: 94.1, isLoaded: false, lastPrediction: 0, confidence: 0 }
  ])

  // Initialize AI models and data
  useEffect(() => {
    const initializeModels = async () => {
      try {
        setTimeout(() => {
          setAiModels(prev => prev.map(model => ({
            ...model,
            isLoaded: true,
            lastPrediction: Math.random() * 100,
            confidence: Math.random() * 100
          })))
        }, 2000)
        
        startRealTimeAnalysis()
        generateChartData()
        
      } catch (error) {
        console.error("Error initializing AI models:", error)
      }
    }

    initializeModels()
  }, [])

  // Generate realistic market data
  const generateChartData = () => {
    const points = 50
    const baseValue = 1.16952
    let currentValue = baseValue
    const newData: ChartData[] = []

    for (let i = 0; i < points; i++) {
      const volatility = 0.002
      const change = (Math.random() - 0.5) * volatility
      currentValue += change
      
      newData.push({
        time: new Date(Date.now() - (points - i) * 60000).toISOString(),
        value: currentValue,
        volume: Math.random() * 1000 + 500
      })
    }
    
    setData(newData)
  }

  // Real-time pattern analysis
  const startRealTimeAnalysis = () => {
    const interval = setInterval(async () => {
      try {
        setIsAnalyzing(true)
        
        // Simulate pattern detection
        const detectedPatterns = await analyzePatterns()
        setPatterns(detectedPatterns)
        
      } catch (error) {
        console.error("Error in real-time analysis:", error)
      } finally {
        setIsAnalyzing(false)
      }
    }, 5000)

    return () => clearInterval(interval)
  }

  // Simulate pattern analysis
  const analyzePatterns = async (): Promise<PatternData[]> => {
    const detectedPatterns: PatternData[] = []
    
    if (Math.random() > 0.7) {
      const patterns = [
        "Head and Shoulders", "Double Top", "Double Bottom", 
        "Ascending Triangle", "Descending Triangle", "Bull Flag", "Bear Flag"
      ]
      
      const pattern = patterns[Math.floor(Math.random() * patterns.length)]
      const isBullish = pattern.includes("Bull") || pattern.includes("Bottom") || pattern.includes("Ascending")
      
      detectedPatterns.push({
        id: Math.random().toString(36).substr(2, 9),
        name: pattern,
        type: isBullish ? 'bullish' : 'bearish',
        confidence: Math.random() * 30 + 70,
        prediction: Math.random() * 100,
        probability: Math.random() * 20 + 80,
        timeframe: selectedTimeframe,
        detected_at: new Date()
      })
    }
    
    return detectedPatterns
  }

  const currentPrice = data.length > 0 ? data[data.length - 1].value : 0
  const priceChange = data.length > 1 ? currentPrice - data[data.length - 2].value : 0
  const priceChangePercent = data.length > 1 ? (priceChange / data[data.length - 2].value) * 100 : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Quantum AI Trading Dashboard
          </h1>
          <p className="text-gray-300 text-lg">
            Advanced AI-powered pattern recognition and market analysis
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          
          {/* AI Models Status */}
          <GlassCard variant="neon" glow className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Brain className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">AI Models</h3>
              </div>
              
              <div className="space-y-3">
                {aiModels.map((model, index) => (
                  <motion.div
                    key={model.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5"
                  >
                    <div className="flex items-center space-x-2">
                      <Cpu className={`w-4 h-4 ${model.isLoaded ? 'text-green-400' : 'text-yellow-400'}`} />
                      <span className="text-sm text-gray-300">{model.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">{model.accuracy.toFixed(1)}%</div>
                      <div className="text-xs text-cyan-400">{model.confidence.toFixed(1)}% conf</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* Pattern Recognition */}
          <GlassCard variant="hologram" className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Eye className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Pattern Recognition</h3>
                {isAnalyzing && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Activity className="w-4 h-4 text-cyan-400" />
                  </motion.div>
                )}
              </div>
              
              <div className="space-y-3">
                {patterns.length > 0 ? (
                  patterns.map((pattern, index) => (
                    <motion.div
                      key={pattern.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`p-3 rounded-lg ${
                        pattern.type === 'bullish' ? 'bg-green-500/10 border border-green-500/30' :
                        pattern.type === 'bearish' ? 'bg-red-500/10 border border-red-500/30' :
                        'bg-blue-500/10 border border-blue-500/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-white">{pattern.name}</span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          pattern.type === 'bullish' ? 'bg-green-500/20 text-green-400' :
                          pattern.type === 'bearish' ? 'bg-red-500/20 text-red-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {pattern.type}
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-gray-400">
                        Confidence: {pattern.confidence.toFixed(1)}% | Probability: {pattern.probability.toFixed(1)}%
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center text-gray-400 py-8">
                    <Target className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p>No patterns detected</p>
                  </div>
                )}
              </div>
            </div>
          </GlassCard>

          {/* Market Overview */}
          <GlassCard variant="default" className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-6 h-6 text-pink-400" />
                <h3 className="text-xl font-semibold text-white">Market Overview</h3>
              </div>
              
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{currentPrice.toFixed(5)}</div>
                  <div className={`text-sm ${priceChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(5)} ({priceChangePercent.toFixed(2)}%)
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-xs text-gray-400">Volume</div>
                    <div className="text-sm font-medium text-white">
                      {data.length > 0 ? data[data.length - 1].volume.toFixed(0) : '0'}
                    </div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-xs text-gray-400">Timeframe</div>
                    <div className="text-sm font-medium text-white">{selectedTimeframe}</div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Performance Metrics */}
          <GlassCard variant="neon" className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-white">Performance</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-sm text-gray-300">Win Rate</span>
                  <span className="text-sm font-medium text-green-400">87.5%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-sm text-gray-300">Profit Factor</span>
                  <span className="text-sm font-medium text-cyan-400">2.34</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-sm text-gray-300">Max Drawdown</span>
                  <span className="text-sm font-medium text-red-400">-8.2%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-sm text-gray-300">Sharpe Ratio</span>
                  <span className="text-sm font-medium text-purple-400">1.85</span>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Real-time Analysis */}
          <GlassCard variant="hologram" glow className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Zap className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">Real-time Analysis</h3>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">Market Sentiment</span>
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Bullish (75%)</div>
                </div>
                
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">Volatility</span>
                    <Activity className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '45%' }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Medium (45%)</div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* System Status */}
          <GlassCard variant="default" className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-white">System Status</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <span className="text-sm text-gray-300">AI Engine</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-green-400">Online</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <span className="text-sm text-gray-300">Data Feed</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-green-400">Connected</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <span className="text-sm text-gray-300">Trading Engine</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-green-400">Active</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <span className="text-sm text-gray-300">Risk Management</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-green-400">Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
} 