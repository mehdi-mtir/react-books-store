import Book from "./model/Book"
import {useEffect, useState} from 'react'
import BookList from './components/BookList'
import {Navigate, Routes, Route, useNavigate} from 'react-router-dom'
import BookAdd from './components/BookAdd'
import { saveData, loadData } from "./dal/localstorage" 

function App() {
  const [books, setBooks] = useState( [
    new Book('1', 'The Great Gatsby', 'F. Scott Fitzgerald', 7.99),
    new Book('2', 'A Farewell to Arms', 'Ernest', 9.99),
    new Book('3', 'The Catcher in the Rye', 'J.D. Salinger', 6.99),
    new Book('4', 'To Kill a Mockingbird', 'Harper Lee', 11.99),
    new Book('5', '1984', 'George Orwell', 10.99),
    new Book('6', 'Animal Farm', 'George Orwell', 8.99)
  ]);
  
  useEffect(() => {
    const books = loadData('books');
    if(books){  
      setBooks(books);
    }
  }, []);

  const navigate = useNavigate();

  const addBook = (book) => {
    book.id = getNewId();
    setBooks([...books, book]);
    saveData([...books, book]);
    navigate('/book');
  }

  const getNewId = () => {
    const lastId = +books[books.length - 1].id;
    return (lastId + 1).toString();
  }

  return (
    <div className="container">
      <Routes>
        <Route path="/" exact element={<Navigate to="/book" replace/>} />
        <Route path="/book" exact element={<BookList books={books} />} />
        <Route path="/book/add" exact element={<BookAdd addBookHandler={addBook} />} />
      </Routes>
    </div>
  )
}

export default App
