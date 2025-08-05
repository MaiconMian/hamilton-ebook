import  styles  from './ReasonsSection.module.css'
import { Reason } from './Reason'
import { Button } from './Button';

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
        </div>

    </div>);
}