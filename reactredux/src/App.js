import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  addBook,
  removeBook,
  updateBook,
} from "./redux/TaskSlice";

function App() {
  const books = useSelector((state) => state?.booksData?.books);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [idToUpdate, setIdToUpdate] = useState(null);

  const handleAddBook = () => {
    dispatch(addBook({ id: Date.now(), title, author }));
    setTitle("");
    setAuthor("");
  };

  const handleUpdateBook = () => {
    dispatch(updateBook({ id: idToUpdate, title, author }));
    setIdToUpdate(null);
    setTitle("");
    setAuthor("");
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>Book List</h1>
      <ul>
        {books?.map((book) => (
          <li
          style={{marginTop:'10px'}}
          key={book.id}>
            {book.title} by {book.author}
            <button
            style={{marginLeft:'20px'}}
            onClick={() => dispatch(removeBook(book.id))}>
              Remove
            </button>
            <button
            style={{marginLeft:'20px'}}
              onClick={() => {
                setIdToUpdate(book.id);
                setTitle(book.title);
                setAuthor(book.author);
              }}
            >
              Update
            </button>
          </li>
        ))}
      </ul>

      <h2>{idToUpdate ? "Update Book" : "Add Book"}</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={ (e) => setAuthor(e.target.value)}
      />

      <button onClick={idToUpdate ? handleUpdateBook : handleAddBook}>
        {idToUpdate ? "Update Book" : "Add Book"}
      </button>

      <br/>
     
    </div>
  );
}

export default App;
