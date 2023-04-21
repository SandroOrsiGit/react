import Article from "./Article"

function ArticleList({list}){
    let renderedList = list.map(({title,content})=><Article title={title} content={content}/>)
    return(
        
        <div>
            {renderedList}
        </div>
    )
}
export default ArticleList