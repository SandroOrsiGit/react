import Icon from "./Icon.jsx"

export default function Toolbar({onDeleteNote, onAddnote, onToggleFavorite, selectedNote}){
    return(
        <div id="toolbar">
            <Icon icon='plus' onClick={onAddnote}/>
            <Icon icon='star' onClick={onToggleFavorite} active={selectedNote ? selectedNote.favorite : false}/>
            <Icon icon='remove' onClick={onDeleteNote}/>
        </div>
    )
}