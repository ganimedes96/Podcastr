import styles from './styles.module.scss'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'



export const Header = () => {

    const currentDate = format(new Date(), 'EEEEEE, d MMMM',{
        locale: ptBR,
    } )

    return(
       <header className={styles.headerContainer}>
            <div className={styles.logo}>
                <img src="/Flat.svg" alt="" />
                <h1>Podcast</h1>
            </div>
            <p>O melhor para você ouvir, sempre</p>
            <span>{currentDate}</span>
       </header> 
    )
}