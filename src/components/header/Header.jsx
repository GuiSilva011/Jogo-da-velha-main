import styles from './Header.module.css'
import Icon from  '../icon/Icon'
import Title from '../title/Title'
import Subtitle from '../subtitle/Subtitle'

function Header(){
    return(
     <div className={styles.header}>
        <Title> Jogo da Velha</Title>
        <Subtitle> Criado por Guilherme Alexandre </Subtitle> 
        <div className={styles.iconContent}>
            <Icon iconName="github" size='30px' link='https://github.com/GuiSilva011'/>
        </div>
     </div>
    )

}
export default Header