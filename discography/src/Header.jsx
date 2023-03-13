function Header({band}){
    return(
        <div>
            <h1>{band.name}</h1>
            <p>{band.intro}</p>
        </div>
    )
}
export default Header