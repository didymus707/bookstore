import BooksList from '../containers/BooksLists';
import BooksForm from '../containers/BooksForm';
import '../App.css';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
