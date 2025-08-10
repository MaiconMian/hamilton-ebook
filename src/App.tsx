import styles from './App.module.css'

import { HeroSection } from './components/HeroSection'
import { FeatureSection } from './components/FeatureSection'
import { DownloadSection } from './components/DownloadSection'
import { ReasonsSection } from './components/ReasonsSection'
import { Footer } from './components/Footer'

function App() {

  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <div className={styles.reasonsAndDownload}>
        <div className={styles.reasons}>
          <ReasonsSection />
        </div>
        <div className={styles.download}>
          <DownloadSection />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
