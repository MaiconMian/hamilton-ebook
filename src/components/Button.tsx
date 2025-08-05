import styles from './Button.module.css'

const color = [
  styles.whitebutton,
  styles.yellowbutton
];

export function Button ({ title, numbercolor}: { title: string; numbercolor: number}){

    function handleClick() {
        window.location.href = "";
    }

    return(
        <div >
            <button onClick={handleClick} className={color[numbercolor]}>{title}</button>
        </div>
    );

}