
import Styles from './Stats.module.css';
import StatsFile from './Stats.json';
import Information from './Information.jsx';

const Stats = (props) =>{

  return(
    <div className={Styles.statsContainer}>
      <div className={Styles.statsInnerContainer}>
        <div className={Styles.titleContainer}><h2>{StatsFile.title}</h2></div>
        <div className={Styles.statsInfContainer}>
          <Information/>
        </div>
      </div>
    </div>
  )
}


export default  Stats;