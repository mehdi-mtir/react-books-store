function BookList({books}){
    //Récupérer le tableau de books et afficher les livres
    return <>
    <h1>Book List</h1>
    <button className="btn btn-primary">Add Book</button>
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
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
}

export default BookList;