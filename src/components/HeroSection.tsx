import logoImage from '../assets/logo.png';
import happyFamily from '../assets/happy-family.png';
import { Button } from './Button';
import styles from './HeroSection.module.css';
import happyFamilySmall from "../assets/happy-family-small.png";

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export function HeroSection(){

    useEffect(() => {
            AOS.init({
                duration: 1000,
                once: false,
                offset: 100,
            });
    
            AOS.refresh();
    }, []);

    return(<div>
        <div className={styles.principal}>

            <div className={styles.infoImageWrapper}>

                <div className={styles.informations} >
                    <img src={logoImage} alt="Logo Hamilton Imoveis" className={styles.logoImage} data-aos="fade-right"/>
                    <h1 data-aos="fade-right">Quer <strong>Vender ou Alugar o seu Imóvel</strong> com mais facilidade e por um valor justo?</h1>
                    <span data-aos="fade-right" >
                        Baixe o <strong>E-BOOK</strong> e descubra 7 dicas práticas e eficazes para valorizar o seu imóvel e atrair mais interessados, sem precisar gastar muito.
                    </span>
                    <div className={styles.buttonClick} data-aos="fade">
                        <Button title="TOQUE PARA RECEBER O E-BOOK" numbercolor={0}/>
                    </div>
                </div>

                <div className={styles.imageFamily} data-aos="fade-left">
                <picture>
                    <source srcSet={happyFamilySmall} media="(max-width: 1150px)" />
                    <img src={happyFamily} alt="Família Feliz" />
                </picture>
                </div>
                
            </div>

        </div>

    </div>);
}