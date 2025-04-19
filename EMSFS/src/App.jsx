
import './App.css'
import AddEmployee from './components/AddEmployee'
import Footer from './components/Footer'
import Header from './components/Header'
import ListEmployee from './components/ListEmployee'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
     {/* //http://localhost:300*/}
      <Route path='/' element ={<ListEmployee/>}></Route>
    {/*  //http://localhost:300/employees*/}
      <Route path='/employees' element = {<ListEmployee/>}></Route>
    {/* // http://localhost:300/add-employee*/}
      <Route path='/add-employee' element = {<AddEmployee/>}></Route>
      {/* // http://localhost:300/update-employee/1 */}
      <Route path='/update-employee/:id' element={<AddEmployee/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
