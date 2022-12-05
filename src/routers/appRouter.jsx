import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Layout from '../layout/layout';
import Home from '../component/home';
import Form from '../component/form/form';
import Login from '../component/form/login'

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/singup' element={<Form/>}/>
                <Route path='/login' element={<Login/>}/>
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRouter