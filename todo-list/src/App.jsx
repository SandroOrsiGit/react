import ToDoInput from './ToDoInput.jsx'
import ToDoList from './ToDoList.jsx';
import ToDoFooter from './ToDoFooter.jsx';

function App() {
  let todos=[
    {name:'iets1', done:false},
    {name:'iets2', done:false},
    {name:'iets3', done:false},
    {name:'iets4', done:false},
    {name:'iets5', done:false},
  ]
  return (
    <div>
      <ToDoInput/>
      <ToDoList todos={todos}/>
      <ToDoFooter/>
    </div>
  );
}

export default App;
