import styles from './Button.module.css'

export function Button ({ title }: { title: string }){

    function handleClick() {
        window.location.href = "";
    }


    return(
        <div className={styles.buttonClick}>
            <button onClick={handleClick}>{title}</button>
        </div>
    );

}