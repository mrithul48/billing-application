import './App.css'
import ReloadPrompt from './ReloadPrompt'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Billing App
        </h1>
        <p className="text-lg text-purple-300">
          Tailwind CSS is working! 🎉
        </p>
      </div>
      <ReloadPrompt />
    </div>
  )
}

export default App
