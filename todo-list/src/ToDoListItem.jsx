import DeleteButton from "./DeleteButton";
function TodoListItem({item, index}){
    return(
        <div>
            <input type="checkbox" value={index+1}/>
            <p>{item.name}</p>
            <DeleteButton/>
        </div>
    )

}
export default TodoListItem