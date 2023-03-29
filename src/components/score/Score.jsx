import styles from './score.module.css'

import Icon from '../icon/Icon'

function Score (){
    return(
        <>
         <h4>Placar:</h4>
         <div className= {styles.score}>
            <div className= {styles.scoreContent}> 
               <Icon iconName='circle' />
               <h2>0</h2>
            </div>
            <div className= {styles.scoreContent}>
            <Icon iconName='X' />
            <h2>0</h2>
            </div>
         </div>
         </>
    )
}
  
export default Score
