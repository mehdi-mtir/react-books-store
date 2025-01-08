import { Link } from "react-router-dom";

function BookList({books, deleteBookHandler}) {
    //Récupérer le tableau de books et afficher les livres
    return <>
    <h1>Book List</h1>
    <Link to="/book/add" className="btn btn-primary">Add Book</Link>
    <table className="table table-striped">
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {books.map(book => (
                <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.price}</td>
                    <td>
                        <Link className="btn btn-primary" to={"/book/edit/"+book.id} >Edit</Link>
                        <button className="btn btn-danger" onClick={()=>deleteBookHandler(book.id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
}

export default BookList;