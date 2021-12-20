import Styles from './Partners.module.css';
import Partner from './Partner.jsx';
import IMgs from './parceiros/Exporter';
const Partners =()=>{
  return(
    <div className={Styles.partnersContainer}>
     {
      IMgs.map((partners)=>{
        return(
          <Partner/>
        )
      })
    }
    </div>
  )
}

export default Partners;