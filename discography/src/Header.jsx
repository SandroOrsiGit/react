function Header({ band }) {
	return (
		<div className="header">
			<h1>{band.name}</h1>
			<p className="text-center">{band.intro}</p>
		</div>
	);
}
export default Header;
