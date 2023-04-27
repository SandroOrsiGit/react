import FancyBorder from "./FancyBorder";
import SplitPane from "./SplitPane";
import WelcomeDialog from "./WelcomeDialog";
import Modal from "./Modal";
import RegisterDialog from "./registerDialog";

function App() {
	const left = <FancyBorder color="red">Dit is een test!</FancyBorder>;
	const right = <FancyBorder color="green">Dit is nog een test!</FancyBorder>;

	return (
		<div className="App">
			<Modal title="Dit is een test modal">
				<h1>Test</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa error voluptate nisi assumenda ipsum.
					Quas quae vero corporis ipsa adipisci perferendis itaque quam error! Temporibus deleniti hic saepe
					assumenda itaque!
				</p>
			</Modal>
			<Modal title="Dit is nog een test modal">
				<h1>Test 2</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa error voluptate nisi assumenda ipsum.
					Quas quae vero corporis ipsa adipisci perferendis itaque quam error! Temporibus deleniti hic saepe
					assumenda itaque!
				</p>
			</Modal>
			<SplitPane left={<WelcomeDialog />} right={<RegisterDialog />}></SplitPane>
			<SplitPane left={<WelcomeDialog />} right={<RegisterDialog />}></SplitPane>
			<SplitPane left={<WelcomeDialog />} right={<RegisterDialog />}></SplitPane>
			<SplitPane left={<WelcomeDialog />} right={<RegisterDialog />}></SplitPane>
			<SplitPane left={<WelcomeDialog />} right={<RegisterDialog />}></SplitPane>
			<SplitPane left={<WelcomeDialog />} right={<RegisterDialog />}></SplitPane>
			<SplitPane left={<WelcomeDialog />} right={<RegisterDialog />}></SplitPane>
			<SplitPane left={<WelcomeDialog />} right={<RegisterDialog />}></SplitPane>
		</div>
	);
}

export default App;
