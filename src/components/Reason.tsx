import { Home, ListCollapse, Ban } from 'lucide-react';
import styles from './Reason.module.css'

const iconList = [
  <Home size={56} color="#fff" /> ,
  <ListCollapse size={56} color="#fff" /> ,
  <Ban size={56} color="#fff" /> 
];


export function Reason ({ text, icon }: { text: string ; icon: number}){
    return (<div>

        <div className={styles.object}>
            <div className={styles.icon}>
                {iconList[icon] || null}
            </div>
            <p className={styles.text}>
                {text}
            </p>
        </div>

    </div>);
}