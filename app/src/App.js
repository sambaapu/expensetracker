import React, { Component } from 'react';
import { Route, BrowserRouter as Router,Routes} from 'react-router-dom'
import Category from './Category';
import Home from './Home';
import Expense from './Expense';
import Users from './Users';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Register from './Login';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <Routes>
                     <Route path='/' exact={true} element={<Home/>}/>
                     <Route path='/login' exact={true} element={<Login/>}/>
                     <Route path='/register' exact={true} element={<Register/>}/>
                     <Route path='/home' exact={true} element={<Home/>}/>
                     <Route path='/categories' exact={true} element={<Category/>}/>
                     <Route exact path='/expenses' element={<ProtectedRoute/>}>
                        <Route exact path='/expenses' element={<Expense/>}/>
                    </Route>
                </Routes>
             </Router>
        );
    }
}
 
export default App;