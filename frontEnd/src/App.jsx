import EmployeeList from './components/EmployeeList'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddEmployee from './components/AddEmployee'
import Login from './components/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Login />} />
          <Route path='/employees' element = {<EmployeeList />} />
          <Route path='/add_employee' element = {<AddEmployee />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
