import React, { Component } from 'react';
import AppNav from './AppNavUser';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import { Table,Container,Input,Button,Label, FormGroup, Form} from 'reactstrap';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

class Users extends Component {

  //{"expenseid":100,"amount":20.5,"date":"2019-06-16T00:00:00Z","category":{"categoryid":10,"name":"Travel"}}
  emptyexpense = {
    expenseid:'100',
    amount: '1',
    date: new Date(),
    category:{ categoryid:'10',name:'Travel'},
    description:''
  }

  constructor(props){
    super(props)
    this.state = {
      date: new Date(),
      isLoading: true,
      expenses: [],
      categories: [],
      expense: this.emptyexpense
    }

    this.handleSubmit= this.handleSubmit.bind(this);
    this.handleChange= this.handleChange.bind(this);
    this.handleDate= this.handleDate.bind(this);
  }

  async handleSubmit(event){
     
    const expense = this.state.expense;
  

    await fetch(`/api/expense`, {
      method : 'POST',
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(expense),
    });
    
    event.preventDefault();
    this.props.history.push("/expenses");
  }

  handleChange(event){
    const target= event.target;
    const value= target.value;
    const name = target.name;
    let expense={...this.state.expense};
    expense[name] = value;
    this.setState({expense});
    console.log(expense);
  }

  handleDate(date){
    let expense={...this.state.expense};
    expense.date= date;
    this.setState({expense});
  
  }

  async remove(id){
    await fetch(`/api/expense/${id}` , {
      method: 'DELETE' ,
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      }

    }).then(() => {
      let updatedExpenses = [...this.state.expenses].filter(i => i.expenseid !== id);
      this.setState({expenses : updatedExpenses});
    });

}

  async componentDidMount(){
    const response= await fetch('/api/categories');
    const body= await response.json();
    this.setState({categories : body , isLoading :false});


    const responseExp= await fetch('/api/expenses');
    const bodyExp = await responseExp.json();
    this.setState({expenses : bodyExp , isLoading :false});
    console.log(bodyExp)
  }

  render(){
    const title = <h3>Add Expense</h3>
    const {categories} = this.state;
    const {expenses,isLoading} = this.state;

    if (isLoading) return (<div>Loading ....</div>);

    let categorylist = categories.map( category =>
      <option id={category.categoryid}>
          {category.name}
      </option>
    )

    let rows = expenses.map( expense =>
              <tr key={expense.expenseid}>
                <td>{expense.description || 'No Description'}</td>
                <td>{expense.amount.toFixed(2)}</td>
                <td><Moment date={expense.expensedate} format="YYYY/MM/DD"/></td>
                <td>{expense.category.name}</td>
                <td><Button size="sm" color="danger" onClick={() => this.remove(expense.expenseid)}>Delete</Button></td>

              </tr>


            );

    return (
    <div>
      <AppNav></AppNav>
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
              <Label htmlFor="description">Title</Label>
              <Input type="description" name="description" id="description" 
                  onChange={this.handleChange} autoComplete="name"/>
          
          </FormGroup>

          <FormGroup>
            <label htmlFor="category">Category</label>
            <select onChange={this.handleChange}>{categorylist}</select>
          </FormGroup>          
          <FormGroup>
            <label htmlFor="Date">Expense Date</label>
            <DatePicker selected={this.state.date} onChange={this.handleDate}/>
          </FormGroup>
          <div className="row">
          <FormGroup className='col-md-4 mb-3'>
            <label htmlFor="amount">Amount</label>
            <input type="text" name="amount" id="amount" onChange={this.handleChange}/>
          </FormGroup>
          </div>
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
      {''}
      <Container>
        <h3>Expense List</h3>
        <Table className="mt-4">
        <thead>
          <tr>
            <th width="30%">Description</th>
            <th width="10%">Amount</th>
            <th> Date</th>
            <th> Category</th>
            <th width="10%">Action</th>
          </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>

        </Table>
      </Container>
    </div>
  )
  }
}
 
export default Users;