import classNames from "classnames"
export default function NoteListItem({index, note, active, onSelectItem}){
    const classname = classNames({
        'list-group-item':true,
        active: active
    })

    let noteText = note.text
    if(noteText.length>35){
        noteText = noteText.substring(0,35) + "..."
    }else if(noteText.length==0){
        noteText= "New Note"
    }

    const handleClick = () => onSelectItem(index)
    return(
        <button onClick={handleClick} className={classname}>
            <h4 className="list-group-item-heading">
                {noteText}
            </h4>
        </button>
    )
}