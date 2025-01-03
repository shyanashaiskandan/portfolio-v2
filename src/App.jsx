
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import Title from './components/Title/title';
import About from './components/About/About';


function App() {


  return (
    <div className={styles.App}>
      <Navbar />
      <Title />
      <About />
</div>

  )
}

export default App
