import snackList from "./data.js";
import Category from "./Category.jsx";

export default function SnackList() {
	console.log(snackList);
	return (
		<div>
			{snackList.categories.map((category, index) => (
				<Category category={category} key={index} />
			))}
		</div>
	);
}
