import type {ReactNode } from 'react';
import Main from './Main';
import Menu from './Menu';

interface Page {
    title:string;
    path:string;
    element:ReactNode;
};

export const pages :Page[] = [
    {title:'Home',path:'/', element:<Main/>},
    {title:'Menu',path:'/Menu', element:<Menu/>},
    {title:'Drink',path:'/Drink', element:<Menu/>},
]