import classNames from "classnames";

export default function Button({children, active, onClick}){

    const className = classNames({
        btn:true,
        'btn-default':true,
        active:active
    })
    return(
    <div className="btn-group">
        <button type="button" className={className} onClick={onClick}>
            {children}
        </button>
    </div>
    )
}