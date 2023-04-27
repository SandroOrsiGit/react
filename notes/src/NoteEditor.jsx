export default function NoteEditor({onNoteEdit, note}){

    const handleChange = (e)=>{
        onNoteEdit(e.target.value)
    }

    if(!note) return null
    return(
        <div id="note-editor">
            <textarea value={note.text} className='form-control' onChange={handleChange}></textarea>
        </div>
    )
}