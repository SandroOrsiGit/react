import Song from './Song.jsx'

function Album({album}){
    let songlist=album.songs.map(song=><Song name={song}/>)
    return(
        <div>
            <h2>{album.name}</h2>
            <p>{album.release}</p>
            <ul>{songlist}</ul>
        </div>
    )
}
export default Album