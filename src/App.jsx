import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

//import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-blue">
      <Navbar />
      <Hero />
      <Menu />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default App;