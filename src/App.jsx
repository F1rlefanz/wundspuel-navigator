import { useState, useEffect } from 'react'
import { Info, Home, Loader2 } from 'lucide-react'
import WundNavigator from './components/WundNavigator'

function App() {
  const [decisionTreeData, setDecisionTreeData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentNode, setCurrentNode] = useState('start')
  const [history, setHistory] = useState(['start'])
  const [showInfo, setShowInfo] = useState(false)

  // Fetch JSON data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/entscheidungsbaum.json')
        if (!response.ok) throw new Error('Fehler beim Laden der Daten')
        const data = await response.json()
        setDecisionTreeData(data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const currentData = decisionTreeData?.decisionTree[currentNode]

  const handleChoice = (nextNodeId) => {
    setHistory([...history, nextNodeId])
    setCurrentNode(nextNodeId)
    setShowInfo(false)
  }

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1)
      setHistory(newHistory)
      setCurrentNode(newHistory[newHistory.length - 1])
      setShowInfo(false)
    }
  }

  const handleReset = () => {
    setCurrentNode('start')
    setHistory(['start'])
    setShowInfo(false)
  }

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <div className="flex items-center gap-4">
            <Loader2 className="animate-spin text-cyan-400" size={32} />
            <span className="text-white text-lg">App wird geladen...</span>
          </div>
        </div>
      </div>
    )
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-red-500/10 backdrop-blur-md rounded-2xl p-8 border border-red-500/30 max-w-md">
          <h2 className="text-red-300 text-xl font-bold mb-4">⚠️ Fehler</h2>
          <p className="text-red-200">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-white rounded-lg transition-all"
          >
            Neu laden
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 sm:p-6">
      {/* Header */}
      <header className="max-w-4xl mx-auto mb-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🩹</span>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">Wundspül-Navigator</h1>
                <p className="text-sm text-cyan-200">Medizinischer Entscheidungsassistent</p>
              </div>
            </div>
            {history.length > 1 && (
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 
                         text-white rounded-lg transition-all duration-200 border border-white/20"
              >
                <Home size={18} />
                <span className="hidden sm:inline">Neustart</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto">
        <WundNavigator
          currentData={currentData}
          onChoice={handleChoice}
          onBack={handleBack}
          onReset={handleReset}
          canGoBack={history.length > 1}
          showInfo={showInfo}
          setShowInfo={setShowInfo}
          progress={(history.length / 21) * 100}
        />
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-8 text-center">
        <div className="bg-amber-500/10 backdrop-blur-md rounded-xl p-4 border border-amber-500/30">
          <div className="flex items-start gap-3 text-left">
            <Info className="text-amber-400 flex-shrink-0 mt-0.5" size={20} />
            <div className="text-sm text-amber-100">
              <strong className="block mb-1">⚠️ Medizinischer Hinweis</strong>
              Diese App dient ausschließlich als Unterstützung für medizinisches Fachpersonal. Sie
              ersetzt keine ärztliche Diagnose oder Behandlung. Bei Unsicherheiten immer einen Arzt
              konsultieren!
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
