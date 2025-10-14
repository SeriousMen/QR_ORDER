import type {ReactNode } from 'react';
import Main from './Main';
import Dish from './Dish';
import Drink from './Drink';

interface Page {
    title:string;
    path:string;
    element:ReactNode;
};

export const pages :Page[] = [
    {title:'인삿말',path:'/', element:<Main/>},
    {title:'메뉴',path:'/Dish', element:<Dish/>},
    {title:'주류/음료',path:'/Drink', element:<Drink/>},

]