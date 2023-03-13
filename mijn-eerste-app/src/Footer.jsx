function Footer(){

    let year = new Date().getFullYear();

    return(
        <footer>
            copyright {year}
        </footer>
    )
}
export default Footer