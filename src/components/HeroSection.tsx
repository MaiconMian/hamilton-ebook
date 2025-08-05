import logoImage from '../assets/logo.png';
import happyFamily from '../assets/happy-family.png';
import { Button } from './Button';
import styles from './HeroSection.module.css'

export function HeroSection(){

    return(<div>
        <div className={styles.principal}>

            <div className={styles.infoImageWrapper}>

                <div className={styles.informations}>
                    <img src={logoImage} alt="Logo Hamilton Imoveis" className={styles.logoImage} />
                    <h1>Quer <strong>Vender ou Alugar o seu Imóvel</strong> com mais facilidade e por um valor justo?</h1>
                    <span>
                        Baixe o <strong>E-BOOK</strong> e descubra 7 dicas práticas e eficazes para valorizar o seu imóvel e atrair mais interessados, sem precisar gastar muito.
                    </span>
                    <div className={styles.buttonClick}>
                        <Button title="TOQUE PARA RECEBER O E-BOOK" numbercolor={0}/>
                    </div>
                </div>

                <div className={styles.imageFamily}>
                    <img src={happyFamily} alt="Família Feliz" />
                </div>
                
            </div>

           

        </div>

    </div>);
}