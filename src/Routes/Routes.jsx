import React from 'react';

import { createBrowserRouter } from 'react-router'
import Root from '../Pages/Root/Root';
import Error from '../Pages/ErrorPage/Error';
import Home from '../Pages/Home/Home';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ListedBook from '../Pages/ListedBook/ListedBook';
import PagesToRead from '../Pages/PagesToRead/PagesToRead';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: '/',
        loader: () => fetch('booksData.json'),
        Component: Home
      },
      {
        path: '/listedBook',
        loader: ()=> fetch('booksData.json'),
        Component: ListedBook
      },
      {
        path: '/pagesToRead',
        loader: ()=> fetch('booksData.json'),
        Component: PagesToRead
      },
      {
        path: '/bookDetails/:id',
        loader: () => fetch('booksData.json'),
        Component: BookDetails
      }
    ]
  }
])