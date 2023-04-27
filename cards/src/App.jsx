import Card from "./Card";
import ImageCard from "./ImageCard";
import LinkCard from "./LinkCard";

function App() {
	return (
		<div className="App">
			<Card>Dit is de content van een card</Card>
			<Card>Dit is nog een andere</Card>
			<Card>Anotha one</Card>
			<ImageCard title="Test" image="https://picsum.photos/200/100" alt="random image">
				Een image card
			</ImageCard>
			<LinkCard url="https://www.google.com">Visit Google</LinkCard>
		</div>
	);
}

export default App;
