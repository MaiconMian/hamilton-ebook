import styles from './Footer.module.css'
import logo from '../assets/logo.png';
import { SocialIcon } from 'react-social-icons';

export function Footer(){
    return(<div className={styles.main}>

        <div className={styles.logoAndWeb}>

            <div className={styles.logo}>
                <img src={logo} alt="Family" />
            </div>

            <div className={styles.web}>

                <div className={styles.buttonWeb}>
                    <SocialIcon 
                        url="https://www.instagram.com/hamiltonimoveis/" 
                        bgColor="#fff" 
                        fgColor="#000" 
                        target="_blank"       
                        rel="noopener noreferrer"
                    />
                </div>
                <div className={styles.buttonWeb}>
                    <SocialIcon 
                        url="https://www.instagram.com/hamiltonimoveis/" 
                        bgColor="#fff" 
                        fgColor="#000" 
                        target="_blank"       
                        rel="noopener noreferrer"
                    />
                </div>
                <div className={styles.buttonWeb}>
                    <SocialIcon 
                        url="https://www.linkedin.com/company/grupo-hamilton-im-veis/about/?viewAsMember=true" 
                        bgColor="#fff" 
                        fgColor="#000" 
                        target="_blank"       
                        rel="noopener noreferrer"
                    />
                </div>

            </div>
        </div>
        
        <div className={styles.contate}>
            <h2>Contato</h2>

            <article>
                <h3>Machado</h3>
                <p>Praça Antônio Cândido, 14 - Centro, Machado/MG</p>
                <p>Atendimento: (35) 3295-2799</p>
                <p>Seg à Sex, 08:00-18:00</p>
            </article>

            <article>
                <h3>Alfenas</h3>
                <p>Avenida São José, 1025 - Centro, Alfenas/MG</p>
                <p>Atendimento: (35) 3291-2175</p>
                <p>Seg à Sex, 08:00–18:00</p>
            </article>
        </div>

        <div className={styles.dev}>
            
            <span>Desenvolvido por Maicon Mian</span>

            <div className={styles.buttonsDev}> 
                <div className={styles.buttonWeb}>
                        <SocialIcon 
                            url="https://github.com/MaiconMian" 
                            bgColor="#fff" 
                            fgColor="#000" 
                            target="_blank"       
                            rel="noopener noreferrer"
                        />
                </div>
                <div className={styles.buttonWeb}>
                        <SocialIcon 
                            url="https://www.linkedin.com/in/maiconmian/" 
                            bgColor="#fff" 
                            fgColor="#000" 
                            target="_blank"       
                            rel="noopener noreferrer"
                        />
                </div>
            </div>
            
        </div>

    </div>);
}