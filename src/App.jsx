import EditorialStatement from './components/EditorialStatement.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navigation from './components/Navigation.jsx'
import Process from './components/Process.jsx'
import Services from './components/Services.jsx'
import WhoWeHelp from './components/WhoWeHelp.jsx'
import WhyUs from './components/WhyUs.jsx'

export default function App() {
  return (
    <div className="site-shell">
      <Navigation />
      <main>
        <Hero />
        <WhoWeHelp />
        <Services />
        <Process />
        <EditorialStatement />
        <WhyUs />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
