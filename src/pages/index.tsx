import type {ReactNode } from 'react';
import Main from './Main';

interface Page {
    path:string;
    element:ReactNode;
};

export const pages :Page[] = [
    {path:'/', element:<Main/>}
]