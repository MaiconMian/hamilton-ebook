import  styles  from './ReasonsSection.module.css'
import { Reason } from './Reason'
import { Button } from './Button';
import happyCouple from '../assets/happy-couple.jpg';

export function ReasonsSection(){
    return(<div>

        <div className={styles.reasons}> 
                <h1 className={styles.title}> O QUE VOCÊ VAI ENCONTRAR NESSE E-BOOK: </h1>
            <div className={styles.cards}>
                <Reason text="Como melhorar a aparência do seu imóvel com baixo custo." icon={0}/>
                <Reason text="Quais detalhes chamam mais atenção dos compradores e inquilinos." icon={1}/>
                <Reason text="Os erros mais comuns que afastam interessados." icon={2}/>
            </div>

            <div className={styles.buttonClick}>
                        <Button title="BAIXE AQUI O E-BOOK" numbercolor={1}/>
            </div>

            <div className={styles.imageAndtextArea}>
                <img src={happyCouple} className={styles.imageCouple}>
                
                </img>
                <div className={styles.subtext}>
                    <h1> E O PRINCIPAL... </h1>
                    <p> Como atrair boas propostas com tranquilidade e segurança </p>
                </div>
                
            </div>

        </div>

    </div>);
}