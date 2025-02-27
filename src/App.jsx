//import Book from "./model/Book"
import {useEffect, useState} from 'react'
import BookList from './components/BookList'
import {Navigate, Routes, Route, useNavigate} from 'react-router-dom'
import BookAdd from './components/BookAdd'
//import { saveData } from "./dal/localstorage" 
import BookEdit from "./components/BookEdit"
import axios from 'axios'

const baseURL = "http://localhost:3000/books"

function App() {
  const [books, setBooks] = useState( []);

  useEffect(() => {
    async function loadData(){
      //const response = await fetch(baseURL);
      const response = await axios.get(baseURL);
      console.log(response);
      //if(response.ok){
          //const books = await ;
          setBooks(response.data);
      //}
    }
    loadData();
  }, []);

  const navigate = useNavigate();
  
  /*Gestion des promises avec .then()
  const addBook = (book) => {
    const requestOptions = {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    };
    fetch(baseURL, requestOptions).then(response => {
      if(response.ok){
        response.json().then(book => {
          setBooks([...books, book]);
          navigate('/book');
        });
      }
    });*/

    const addBook = async (book) => {
      /*const requestOptions = {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
      };

      const response = await fetch(baseURL, requestOptions);*/
      const response = await axios.post(baseURL, book);
      setBooks([...books, response.data]);
      navigate('/book');
      

        
    //book.id = getNewId();
    //Tâche 1 : Lancer une requête POST pour ajouter le livre
    //Tâches 2 : Attendre la réponse pour récupérer le livre avec son id
    //Tâche 3 : Ajouter le livre à la liste des livres avec setBooks
    //setBooks([...books, book]);
    //saveData([...books, book]);
    
  }

  const deleteBook = (id) => {
    /*const requestOptions = {  
      method: 'DELETE'
    }*/
    if(window.confirm('Are you sure you want to delete this book?')){
      axios.delete(baseURL + '/' + id).then(response => {
      //fetch(baseURL + '/' + id, requestOptions).then(response => {
      const newBooks = books.filter(book => book.id !== id);
      setBooks(newBooks);        

      });
    }
  }

  const editBook = (book) => {
    /*const requestOptions = {  
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    };

    fetch(baseURL + '/' + book.id, requestOptions).then(response => {*/
    axios.put(baseURL + '/' + book.id, book).then(response => {
        const newBooks = books.map(b => b.id === book.id ? book : b);
        setBooks(newBooks);
        navigate('/book');
    });
  }

  const getBookById = (id) => {
    return books.find(book => book.id === id);
  }

  /*const getNewId = () => {
    let lastId = (books.length !== 0) ? +books[books.length - 1].id : 0;
    return (lastId + 1).toString();
  }*/

  return (
    <div className="container">
      <Routes>
        <Route path="/" exact element={<Navigate to="/book" replace/>} />
        <Route path="/book" exact element={<BookList books={books} deleteBookHandler={deleteBook} />} />
        <Route path="/book/add" exact element={<BookAdd addBookHandler={addBook} />} />
        <Route path="/book/edit/:id" element={<BookEdit getBookByIdHandler={getBookById} editBookHandler={editBook}/> }/> 
      </Routes>
    </div>
  )
}

export default App
