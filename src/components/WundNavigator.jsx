import {
  Info,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Clock,
  Droplets,
  AlertTriangle,
} from 'lucide-react'

function WundNavigator({
  currentData,
  onChoice,
  onBack,
  canGoBack,
  showInfo,
  setShowInfo,
  progress,
}) {
  if (!currentData) {
    return (
      <div className="bg-red-500/10 backdrop-blur-md rounded-2xl p-8 border border-red-500/30">
        <p className="text-red-300 text-center">⚠️ Fehler: Knotenpunkt nicht gefunden</p>
      </div>
    )
  }

  const isQuestion = currentData.type !== 'solution'
  const isSolution = currentData.type === 'solution'

  return (
    <div className="space-y-4">
      {/* Progress Bar */}
      {progress > 0 && (
        <div className="bg-white/10 backdrop-blur-md rounded-full h-2 overflow-hidden border border-white/20">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Question/Solution Card */}
      <div
        className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border shadow-2xl ${
          isSolution ? 'border-green-400/40' : 'border-white/20'
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {isSolution ? (
                <CheckCircle2 className="text-green-400" size={24} />
              ) : (
                <AlertCircle className="text-cyan-400" size={24} />
              )}
              <span
                className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  isSolution ? 'bg-green-500/20 text-green-300' : 'bg-cyan-500/20 text-cyan-300'
                }`}
              >
                {isSolution
                  ? 'Empfehlung'
                  : currentData.type === 'assessment'
                    ? 'Start'
                    : 'Bedingung'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              {currentData.question}
            </h2>
          </div>

          {currentData.info && (
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="ml-4 p-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 
                       rounded-lg transition-all duration-200 flex-shrink-0"
              title="Zusatzinformation"
            >
              <Info size={20} />
            </button>
          )}
        </div>

        {/* Info Box */}
        {showInfo && currentData.info && (
          <div className="mb-6 bg-blue-500/10 border border-blue-400/30 rounded-xl p-4">
            <p className="text-blue-100 text-sm leading-relaxed">{currentData.info}</p>
          </div>
        )}

        {/* Options (for questions) */}
        {isQuestion && currentData.options && (
          <div className="space-y-3">
            {currentData.options.map((option, index) => (
              <button
                key={index}
                onClick={() => onChoice(option.next)}
                className={`w-full bg-gradient-to-r ${option.color} p-5 rounded-xl 
                          hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 
                          shadow-lg hover:shadow-xl text-left group`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:translate-x-1 transition-transform">
                      {option.label}
                    </h3>
                    <p className="text-sm text-white/80">{option.sublabel}</p>
                  </div>
                  <svg
                    className="w-6 h-6 text-white/60 group-hover:translate-x-1 group-hover:text-white transition-all flex-shrink-0 ml-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Solution Display */}
        {isSolution && currentData.result && (
          <div className="space-y-4">
            {/* Primary Recommendation */}
            <div className="bg-green-500/20 border border-green-400/40 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="text-green-400" size={20} />
                <h3 className="text-lg font-bold text-green-300">Primäre Empfehlung</h3>
              </div>
              <p className="text-2xl font-bold text-white mb-2">{currentData.result.primary}</p>
              <p className="text-green-100 text-sm leading-relaxed">{currentData.result.reason}</p>
            </div>

            {/* Application Instructions */}
            <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Droplets className="text-blue-400" size={20} />
                <h3 className="font-bold text-blue-300">Anwendung</h3>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                {currentData.result.application}
              </p>
            </div>

            {/* Duration & Frequency */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-purple-500/10 border border-purple-400/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-purple-400" size={18} />
                  <h4 className="font-bold text-purple-300 text-sm">Dauer</h4>
                </div>
                <p className="text-purple-100 text-sm">{currentData.result.duration}</p>
              </div>
              <div className="bg-purple-500/10 border border-purple-400/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-purple-400" size={18} />
                  <h4 className="font-bold text-purple-300 text-sm">Frequenz</h4>
                </div>
                <p className="text-purple-100 text-sm">{currentData.result.frequency}</p>
              </div>
            </div>

            {/* Alternative */}
            {currentData.result.alternative && (
              <div className="bg-amber-500/10 border border-amber-400/30 rounded-xl p-4">
                <h4 className="font-bold text-amber-300 text-sm mb-2">Alternative</h4>
                <p className="text-amber-100 text-sm">{currentData.result.alternative}</p>
              </div>
            )}

            {/* Contraindications */}
            {currentData.result.contraindications && (
              <div className="bg-red-500/10 border border-red-400/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="text-red-400" size={20} />
                  <h4 className="font-bold text-red-300">Kontraindikationen / Wichtige Hinweise</h4>
                </div>
                <ul className="space-y-2">
                  {currentData.result.contraindications.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-red-100 text-sm">
                      <span className="text-red-400 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      {canGoBack && (
        <button
          onClick={onBack}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 
                   bg-white/10 hover:bg-white/20 text-white rounded-xl 
                   transition-all duration-200 border border-white/20"
        >
          <ArrowLeft size={20} />
          <span>Zurück zur vorherigen Frage</span>
        </button>
      )}
    </div>
  )
}

export default WundNavigator
