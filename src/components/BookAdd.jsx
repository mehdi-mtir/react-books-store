import { useState } from 'react';
function BookAdd(){
    const [book, setBook] = useState({title : '', author : '', price : 0});

    const onChangeHandler = ({target}) => {
        //console.log(event)
        setBook({...book, [target.name]: target.value});
    }

    return (
        <>
            <h1>Book Add</h1>
            <form>  
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

export default BookAdd;