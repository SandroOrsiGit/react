import NoteListHeader from "./NoteListHeader"
import NoteListItem from "./NoteListItem"
import { filters } from "./App"

export default function NoteList({notes, onSelectItem, selectedNote, filter, onChangeFilter}){


    const noteList = notes.filter(note=>{
        if(filter===filters.FAVORITES){
            return note.favorite}
            return true
    }).map((note,index)=>(
        <NoteListItem 
            note={note} 
            key={index} 
            index = {index}
            active={index===selectedNote} 
            onSelectItem = {onSelectItem}
            />
            
    ))

    return(
        <div id="notes-list">
            <NoteListHeader filter ={filter} onChangeFilter={onChangeFilter}/>
            <div className="container">
                <div className="list-group">
                    {noteList}
                </div>
            </div>
        </div>
    )

    
}