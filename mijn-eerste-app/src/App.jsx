import './App.css';
import Header from './Header';
import Footer from './Footer';
import Article from './Article';
import ArticleList from './ArticleList';

function App() {

  let articles = [
    {title: "Article 1", content: 'Dit is artikel 1'},
    {title: "Article 2", content: 'Dit is artikel 2'},
    {title: "Article 3", content: 'Dit is artikel 3'}
  ]

  return (
    <div>
      <Header/>
      <div className="content">
        <ArticleList list={articles}/>
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
