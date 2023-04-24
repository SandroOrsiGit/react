import Snack from "./Snack";

export default function Category({ category }) {
	const categoryStlye = {
		margin: "20px",
		textAlign: "center",
	};
	return (
		<div style={categoryStlye}>
			<h1>{category.name}</h1>
			{category.products.map((product, index) => (
				<Snack snack={product} key={index} />
			))}
		</div>
	);
}
