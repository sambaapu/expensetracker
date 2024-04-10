import React, { Component } from 'react';
import { Route, BrowserRouter as Router,Routes} from 'react-router-dom'
import Category from './Category';
import Home from './Home';
import Expense from './Expense';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <Routes>
                     <Route path='/' exact={true} element={<Home/>}/>
                     <Route path='/home' exact={true} element={<Home/>}/>
                     <Route path='/categories' exact={true} element={<Category/>}/>
                     <Route path='/expenses' exact={true} element={<Expense/>}/>
                </Routes>
             </Router>
        );
    }
}
 
export default App;