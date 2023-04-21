import Button from "./Button"
import { filters } from "./App"

export default function NoteListHeader({filter, onChangeFilter}){

    const handleClickAll = ()=> {
        onChangeFilter(filters.ALL)
    }
    const handleClickFavorites = ()=> {
        onChangeFilter(filters.FAVORITES)
    }

    return(
        <div id="list-header">
            <h2>Notes</h2>
            <div className="btn-group btn-group-justified">
                <Button active={filter===filters.ALL} onClick={handleClickAll}>All</Button>
                <Button active={filter===filters.FAVORITES} onClick={handleClickFavorites}>Favorites</Button>
            </div>
        </div>
    )
}