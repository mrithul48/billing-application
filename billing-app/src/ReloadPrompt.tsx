import { useRegisterSW } from 'virtual:pwa-register/react'
import './ReloadPrompt.css'

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl, r) {
      console.log(`Service Worker registered: ${swUrl}`)
      // Check for updates every hour
      if (r) {
        setInterval(() => {
          r.update()
        }, 60 * 60 * 1000)
      }
    },
    onRegisterError(error) {
      console.log('SW registration error', error)
    },
  })

  const close = () => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  return (
    <div className="reload-prompt-container">
      {(offlineReady || needRefresh) && (
        <div className="reload-prompt-toast">
          <div className="reload-prompt-message">
            {offlineReady ? (
              <span>🎉 App ready to work offline!</span>
            ) : (
              <span>🔄 New content available, click reload to update.</span>
            )}
          </div>
          <div className="reload-prompt-actions">
            {needRefresh && (
              <button
                className="reload-prompt-btn reload-prompt-btn-reload"
                onClick={() => updateServiceWorker(true)}
              >
                Reload
              </button>
            )}
            <button
              className="reload-prompt-btn reload-prompt-btn-close"
              onClick={() => close()}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReloadPrompt
