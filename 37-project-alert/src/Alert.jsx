import style from './css/alert.module.css'
const Alert = ({ msg, type }) => {

    
    return (
        <>
        {/* className={styles.alert + " " + styles[type]} */}
            <div className={`${style.alert} ${style[type]}`}>
                <span>{msg}</span>
                <span className={style.closeBtn}>×</span>
            </div>


        </>
    )
}
export default Alert