import type {ReactNode } from 'react';
import Main from './Main';
import Dish from './Dish';

interface Page {
    title:string;
    path:string;
    element:ReactNode;
};

export const pages :Page[] = [
    {title:'Home',path:'/', element:<Main/>},
    {title:'Dish',path:'/Dish', element:<Dish/>},
    {title:'Drink',path:'/Drink', element:<Dish/>},
]