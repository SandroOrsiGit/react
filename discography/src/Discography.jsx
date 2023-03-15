import "./App.css";
import Header from "./Header.jsx";
import AlbumList from "./AlbumList.jsx";

function Discography() {
	let band = { name: "Parkway Drive", intro: "Aussie Heavy Metal" };
	let albums = [
		{
			name: "Horizons",
			release: "2007",
			songs: ["Begin", "The Sirens Song", "Feed Them to the Pigs", "Carrion"],
		},
	];
	return (
		<div className="app d-flex flex-column align-items-center">
			<Header band={band} />
			<img src="images/parkway_drive.jpg" alt="" className="image" />
			<h2 className="albums-title">Albums</h2>
			<AlbumList albums={albums} />
		</div>
	);
}

export default Discography;
