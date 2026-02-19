import style from './css/alert.module.css'
const Alert = ({msg}) =>{
    return(
        <>
       <div>
        <p className={style.para}>{msg}</p>
       </div>

        </>
    )
}
export default Alert