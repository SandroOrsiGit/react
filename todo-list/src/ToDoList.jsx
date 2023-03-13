import ToDoListItem from './ToDoListItem.jsx'

function ToDoList({todos}){
    let list = todos.map((item,index)=><ToDoListItem item={item} index = {index}/>)

    return(
        <div>
            {list}
        </div>
    )
}
export default ToDoList