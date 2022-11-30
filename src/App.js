import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Layout/NavBar';
import Home from './FrontEnd/Home';
import AdminLogin from './FrontEnd/AdminLogin';
import EmpRegistration from './FrontEnd/EmpRegistration';
import Dashboard from './FrontEnd/Dashboard';
import EmployeeInfo from './FrontEnd/EmployeeInfo';
import UpdateEmployee from './FrontEnd/UpdateEmployee';
import EmployeeList from './FrontEnd/EmployeeList';

function App() {
  return (
    <div className="App">
<Router>
      <NavBar />
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/admin' element={<AdminLogin/>}></Route>
      <Route exact path='/admin/:id' element={<AdminLogin/>}></Route>
      <Route exact path='/registration' element={<EmpRegistration/>}></Route>
      <Route exact path='/dashboard/:id' element={<Dashboard/>}></Route>
      <Route exact path='/employee/info/:id' element={<EmployeeInfo/>}></Route>
      <Route exact path='/employee/update/:id' element={<UpdateEmployee/>}></Route>
      <Route exact path='/employee/list/:id' element={<EmployeeList/>}></Route>
      </Routes>
</Router>
      
    </div>
  );
}

export default App;
