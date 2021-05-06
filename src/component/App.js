import BooksList from '../containers/BooksLists';
import BooksForm from '../containers/BooksForm';
import Header from './Header';
import '../App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
