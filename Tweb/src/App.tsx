import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DataTable from './datatable.tsx';
import SimpleCard from './card.tsx';

function App() {

  const [count, setCount] = useState(0)

  return (
    <div>
       <p> Malanciuc Dmitri Cr-203
      </p>
    <DataTable/>
    <SimpleCard/>
    </div>
  )
}

export default App
