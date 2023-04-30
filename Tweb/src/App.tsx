import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DataTable from './datatable';
import MenuComponent from './Menu';
import ContentComponent from './content';
import MyForm from './forma';



function App() {

  const [count, setCount] = useState(0)


  return (

    <div>

      <p> Malanciuc Dmitri Cr-203
      </p>
      <h1>Выбор страницы</h1>
         <MenuComponent />
       <DataTable/>
       <ContentComponent/>
    </div>
  )
}

export default App