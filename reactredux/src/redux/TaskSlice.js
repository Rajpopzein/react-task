import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  ],
};

export const booksSlice = createSlice({
  name: 'booksData',
  initialState,
  reducers: {
    addBook: (state, action) => {
   

      state.books.push(action.payload);
    },
    removeBook: (state, action) => {

        
        state.books = state?.books?.filter(book => book.id !== action.payload);
    },
    updateBook: (state, action) => {


      const { id, title, author } = action.payload;
      const existingBook = state.books.find(book => book.id === id);
      if (existingBook) {
        existingBook.title = title;
        existingBook.author = author;
      }
    },
  },
});

// Export actions

export const { addBook, removeBook, updateBook } = booksSlice.actions;

// Export reducer

export default booksSlice.reducer;
