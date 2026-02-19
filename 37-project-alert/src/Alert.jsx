import style from './css/alert.module.css'
const Alert = ({ msg, type }) => {

    return (
        <>
            <div>
                <p className={`${style.alert} ${style[type]}`}>
                    {msg}
                </p>
            </div>

        </>
    )
}
export default Alert