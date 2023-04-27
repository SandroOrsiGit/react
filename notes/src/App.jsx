import { useState } from "react";
import Toolbar from "./Toolbar";
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";

export const filters = {
  ALL: 'all',
  FAVORITES : 'favorites'
}

function App() {

  const defaultNotes = [
    {text: 'dit is een eerste note', favorite:false},
    {text: 'dit is een tweede note', favorite:true},
    {text: 'dit is een derde note', favorite:true},
    {text: 'dit is een vierde note', favorite:false},
  ];

  const [notes,setNotes]=useState(defaultNotes);
  const [selectedNote, setSelectedNote]= useState(0);
  const [filter,setFilter] = useState(filters.ALL)

  const handleDeleteNote = () => setNotes(notes.filter((note,index) => index !== selectedNote))

  const handleAddNote = () => setNotes([{favorite: false, text:''},...notes])

  const handleToggleFavorite = () => {
    setNotes(notes.map((note,index)=>{
      if(index== selectedNote) {
        return {...note,favorite: !note.favorite}
      }
      return note
    }))
  }
  const handleNoteEdit = (text) => {
    setNotes(notes.map((note,index)=>{
      if(index== selectedNote) {
        return {...note,text}
      }
      return note
    }))
  }
  

  return (
    <div id="app">
      <Toolbar onDeleteNote={handleDeleteNote} onAddnote={handleAddNote} onToggleFavorite={handleToggleFavorite} selectedNote={notes[selectedNote]}/>
      <NoteList notes = {notes} onSelectItem={setSelectedNote} selectedNote={selectedNote} filter={filter} onChangeFilter = {setFilter}/>
      <NoteEditor onNoteEdit={handleNoteEdit} note={notes[selectedNote]}/>    
    </div>
  );
}

export default App;
