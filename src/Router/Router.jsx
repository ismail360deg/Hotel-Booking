import React from 'react';

import { createBrowserRouter} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import HotelDetails from '../Pages/Home/HotelDetails';
import HotelListing from '../Pages/Home/HotelListing';
import Main from '../Pages/Main/Main';
import SearchResult from '../Pages/SearchBar/SearchResult';


export const router = createBrowserRouter([
    
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/hotel-listing',
                element: <HotelListing></HotelListing>
            },
            {
                path: '/category/:id',
                element: <HotelDetails></HotelDetails>,
                loader: async ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/category/search',
                element: <SearchResult></SearchResult>
            }
            

        ]
    },
   
    
])

