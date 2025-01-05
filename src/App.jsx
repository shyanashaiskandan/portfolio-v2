
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import Title from './components/Title/title';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';


function App() {


  return (
    <div className={styles.App}>
      <Navbar />
      <Title />
      <About />
      <Experience/>
      <Projects/>
</div>

  )
}

export default App
