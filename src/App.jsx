
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import Title from './components/Title/title';


function App() {


  return (
    <div className={styles.App}>
      <Navbar />
      <Title />
</div>

  )
}

export default App
