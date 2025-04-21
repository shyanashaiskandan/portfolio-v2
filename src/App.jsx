
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import Title from './components/Title/Title';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { Analytics } from "@vercel/analytics/react"

function App() {


  return (
    <div className={styles.App}>
      <Analytics />
      <Navbar />
      <Title />
      <About />
      <Experience/>
      <Projects/>
      <Contact />
</div>

  )
}

export default App
