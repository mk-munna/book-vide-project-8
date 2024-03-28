import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import BookDetails from './Components/BookDetails/BookDetails';
import PageToRead from './Components/PageToRead/PageToRead';
import Contact from './Components/ContactUS/Contact';
import FamousAuthor from './Components/FamousAuthor/FamousAuthor';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('https://raw.githubusercontent.com/mk-munna/api-3/main/api.json')
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('https://raw.githubusercontent.com/mk-munna/api-3/main/api.json'),
        
      },
      {
        path: '/Pages-to-Read',
        element: <PageToRead></PageToRead>,
        loader: () => fetch('https://raw.githubusercontent.com/mk-munna/api-3/main/api.json')
      },
      {
        path: '/famous-author',
        element: <FamousAuthor></FamousAuthor>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
