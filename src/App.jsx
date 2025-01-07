import Book from "./model/Book"
function App() {
  //Créer un tableau de books (id[string], title[string], author[string], price[number])
  //Tâche 1 : déclarer le tableau books comme variable d'état
  var books = [
    new Book('1', 'The Great Gatsby', 'F. Scott Fitzgerald', 7.99),
    new Book('2', 'A Farewell to Arms', 'Ernest', 9.99),
    new Book('3', 'The Catcher in the Rye', 'J.D. Salinger', 6.99),
    new Book('4', 'To Kill a Mockingbird', 'Harper Lee', 11.99),
    new Book('5', '1984', 'George Orwell', 10.99),
    new Book('6', 'Animal Farm', 'George Orwell', 8.99)
  ]

  return (
    <>
      {/* Tâche 2 : afficher le composant BookList */}
    </>
  )
}

export default App
