import './App.css'
import Form from './components/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Ticket from './components/Ticket'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Form />}></Route>
          <Route path="/ticket" element={<Ticket />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
