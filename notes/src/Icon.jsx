import classNames from "classnames"
export default function Icon({icon, active, onClick}) {

    const classname = classNames({
        glyphicon: true,
        ['glyphicon-'+icon]:true,
        starred:active
    })

    return(
        <i className={classname} onClick={onClick}></i>
    )
}