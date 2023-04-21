import Song from "./Song.jsx";

function Album({ album }) {
	let songlist = album.songs.map((song) => <Song name={song} />);
	return (
		<>
			<div className="d-flex">
				<div className="album-image">
					<img src="images/horizons.jpg" alt="" />
				</div>
				<div>
					<h3>{album.name}</h3>
					<p>{album.release}</p>
					<ul className="songlist">{songlist}</ul>
				</div>
			</div>
			<hr />
		</>
	);
}
export default Album;
