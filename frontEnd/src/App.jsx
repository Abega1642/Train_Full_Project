import EmployeeList from './components/EmployeeList'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddEmployee from './components/AddEmployee'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          { /* http://localhost:3000/employees */ }
          <Route path='/employees' element = {<EmployeeList />} />
          <Route path='/add_employee' element = {<AddEmployee />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
