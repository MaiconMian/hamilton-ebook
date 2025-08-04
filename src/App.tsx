
import './App.css'

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
      <DownloadSection />
      <ReasonsSection />
      <Footer />
    </div>
  )
}

export default App
