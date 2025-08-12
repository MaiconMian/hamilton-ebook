import { Home, ListCollapse, Ban } from 'lucide-react';
import styles from './Reason.module.css';
import 'animate.css';

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const iconList = [
  <Home size={56} color="#fff" /> ,
  <ListCollapse size={56} color="#fff" /> ,
  <Ban size={56} color="#fff" /> 
];


export function Reason ({ text, icon }: { text: string ; icon: number}){

    useEffect(() => {
        AOS.init({
        duration: 600, 
        once: false, 
        offset: 100 
        });
    }, []);


    return (<div className={styles.container}>

        <div className={styles.object} data-aos="fade-down">
            <div className={styles.icon}>
                {iconList[icon] || null}
            </div>
            <p className={styles.text}>
                {text}
            </p>
        </div>

    </div>);
}