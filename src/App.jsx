
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import Title from './components/Title/title';
import About from './components/About/About';
import Experience from './components/Experience/Experience';


function App() {


  return (
    <div className={styles.App}>
      <Navbar />
      <Title />
      <About />
      <Experience/>
</div>

  )
}

export default App
