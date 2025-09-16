import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {AppMain,AppHeader,AppFooter} from './layouts';

function App() {

  return (
    <>
      <BrowserRouter>    
        <AppHeader/>
        <AppMain/>
        <AppFooter/>
      </BrowserRouter>
    </>
  )
}

export default App
