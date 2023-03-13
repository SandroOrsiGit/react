
import Header from './Header.jsx';
import AlbumList from './AlbumList.jsx'

function Discography() {
  let band={name:'Parkway Drive',intro:'Aussie Heavy Metal'}
  let albums=[{
    name:'Horizons', release:'2007', songs:['Begin','The Sirens Song','Feed Them to the Pigs','Carrion']
  }]
  return (
    <div>
      <Header band={band}/>
      <AlbumList albums={albums}/>
    </div>
  );
}

export default Discography;
