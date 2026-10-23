import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ForemanFramework } from './components/ForemanFramework'
import { FeaturedSystems } from './components/FeaturedSystems'
import { CapabilitiesMatrix } from './components/CapabilitiesMatrix'
import { ContactFooter } from './components/ContactFooter'

export function App() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-gray-950 text-gray-100 selection:bg-emerald-500/20 selection:text-emerald-300">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedSystems />
        <ForemanFramework />
        <CapabilitiesMatrix />
      </main>
      <ContactFooter />
    </div>
  )
}

export default App
