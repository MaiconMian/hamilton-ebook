import { Frown, Book } from 'lucide-react';
import { Button } from './Button';
import tabletebook from '../assets/tablet-ebook.png';
import styles from './DownloadSection.module.css'

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export function DownloadSection(){

    useEffect(() => {
                AOS.init({
                    duration: 1000,
                    once: false,
                    offset: 100,
                });
        
                AOS.refresh();
        }, []);


    return(<div>
       <div className={styles.main}>
           <div className={styles.image}>

                <img src={tabletebook} className={styles.imageTablet} data-aos="fade-right"></img>
                <div className={styles.buttonImage} data-aos="fade">
                    <Button title="QUERO O MEU E-BOOK" numbercolor={0}/>
                </div>
                
            </div>
            
            <div className={styles.informations} data-aos="fade-left">

                <div className={styles.title}>
                        <h1 className={styles.titlePrincipal} >Por que Baixar</h1>
                        <h1 className={styles.titleSecond}> AGORA? </h1>
                </div>

                <div className={styles.motives} >
                    <div className={styles.motive}>
                        <p> Porque cada dia com o <strong>imóvel parado</strong> pode significar dinheiro perdido. </p>
                        <Frown size={40} color="#173353" /> 
                    </div>

                    <div className={styles.motive}>
                        <p> E porque com as <strong>informações certas</strong>, você negocia melhor, com mais confiança. </p>
                        <Book size={40} color="#173353" /> 
                    </div>
                </div>
            </div>
        </div> 
    </div>);
}