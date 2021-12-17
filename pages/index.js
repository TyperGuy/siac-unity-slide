import styles from '../styles/Home.module.css'
import Unities from '../views/unities/Unities.jsx'
import Stats from '../views/stats/Stats.jsx';

export default function Home() {
  return (
    <div className={styles.container}>
      <Stats/>
      <Unities/>
    </div>
  )
}
