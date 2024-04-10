import React, { Component } from 'react';
import AppNav from './AppNav';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import { Table,Container,Input,Button,Label, FormGroup, Form} from 'reactstrap';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

class Expense extends Component {
  state = {}
  render(){
    return (
    <div>
      <AppNav></AppNav>
      <h2>Expenses</h2>
    </div>
  )
  }
}
 
export default Expense;