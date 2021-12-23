import Styles from './Partners.module.css';
import Partner from './Partner.jsx';
import IMgs from './parceiros/Exporter';
const Partners =()=>{
  return(
    <div className={Styles.partnersContainer}>
     {
      IMgs.map((partner)=>{
        return(
          <Partner img={partner}/>
        )
      })
    }
    </div>
  )
}

export default Partners;