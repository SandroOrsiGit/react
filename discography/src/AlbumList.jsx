import Album from './Album.jsx'
function AlbumList({albums}){
    let albumlist = albums.map(album=><Album album={album}/>) ;
    return(
        <div>
            {albumlist}
        </div>
    )
}
export default AlbumList