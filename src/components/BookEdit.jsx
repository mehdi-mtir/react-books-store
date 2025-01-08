import { useState } from 'react';
import { useParams } from 'react-router-dom';

function BookEdit(props){
    const {id} = useParams();
    const [book, setBook] = useState(props.getBookByIdHandler(id));

    const onChangeHandler = ({target}) => {
        setBook({...book, [target.name]: target.value});
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.editBookHandler(book);
    }

    return (
        <>
            <h1>Book Edit</h1>
            <form onSubmit={onSubmitHandler}>  
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={book.title} onChange={(event)=>onChangeHandler(event)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input type="text" className="form-control" id="author" name="author" value={book.author} onChange={(event)=>onChangeHandler(event)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" name="price" value={book.price} onChange={(event)=>onChangeHandler(event)}  />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default BookEdit;