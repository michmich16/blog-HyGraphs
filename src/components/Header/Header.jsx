import s from './Header.module.scss'

export const Header = () =>{

    return(
        <div className={s.headerStyle}>
            <h1>Aalborg Times</h1>
            <h5>Read what you want to read</h5>
        </div>

    )
}