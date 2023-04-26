import SplitPane from "./SplitPane";
import RegisterDialog from "./RegisterDialog";
import WelcomeDialog from "./WelcomeDialog";
import Modal from "./Modal";

function App() {

  return (
    <div className="App">

      <Modal title="This is a test modal">
        <h1>Test</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, porro inventore perferendis suscipit sunt laudantium veritatis adipisci cupiditate qui labore quis, ad pariatur nisi recusandae placeat laborum ducimus voluptate, odit impedit.</p>
      </Modal>

      <SplitPane
        left={<WelcomeDialog />}
        right={<RegisterDialog />}
      />
      <SplitPane
        left={<WelcomeDialog />}
        right={<RegisterDialog />}
      />
      <SplitPane
        left={<WelcomeDialog />}
        right={<RegisterDialog />}
      />

      <Modal title="This is a test modal">
        <h1>New Test Modal</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla.</p>
      </Modal>

      <SplitPane
        left={<WelcomeDialog />}
        right={<RegisterDialog />}
      />
      <SplitPane
        left={<WelcomeDialog />}
        right={<RegisterDialog />}
      />
    </div>
  );
}

export default App;
