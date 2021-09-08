import Transaction from "./components/Transaction";
import './App.css'
import FormComponent from "./components/FormComponent.js";
import React, { useState, useEffect } from 'react';
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


// const design = {color:"black", textAlign:"cente", fontSize:"1.5rem"}
// const Title = () => <h1 style={design}> Savify | save your account updating</h1>
// const Desc = () => <p style={{textAlign:"center"}}> Record data for income - expense daily </p>

function App() {
  // const initData = [
  //   {id:1, title: "Gas", amount: 100},
  //   {id:2, title: "Water", amount: 200},
  //   {id:3, title: "Internet", amount: 300},
  // ]

  // const [items, setItems] = useState(initData); //initial data

  //initial value in state
  const initState = [
    {id:1, title: "Rent", amount: -500},
    {id:2, title: "Salary", amount: 2000},
    {id:3, title: "Bill", amount: -300},
    {id:4, title: "Commission", amount: 1000},
  ]


  const [items, setItems] = useState(initState); 
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  const onAddNewItem = (newItem)=>{
    //connect new data to previous data
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    })
    //console.log("data send from Formcomponent: ",newItem);
  };
  
  useEffect(()=>{
    const amounts = items.map(items=>items.amount);
    //console.log(amounts);
    const income = amounts.filter(element=>element>0).reduce((total, element)=>total+=element, 0);
    const expense = (amounts.filter(element=>element<0).reduce((total, element)=>total+=element, 0))*-1
    //*1 not need - minus symbol
    
    setReportIncome(income);
    setReportExpense(expense);

    //use Reduce() to sum total
  }, [items, reportIncome, reportExpense]); //Add state

  //reduce state
//   const [showReport, setShowReport] = useState(false);
//   const reducer = (state, action)=>{
//     switch(action.type){
//       case "SHOW":
//         return setShowReport(true);
//       case "HIDE" :
//         return setShowReport(false);
//     }
//   }
// const [result, dispatch] = useReducer(reducer, showReport); //action + state | dispatch call action | result = effect that haapen

  return (
   <DataContext.Provider value= {{income : reportIncome,expense : reportExpense}}>
      <div className="container">
       <h1 className="title"> Savify | Account updating</h1>
       <Router>
       <div>
        <ul className= "horizontal-menu gradient-Showbutton-1">
          <li>
            <a href="/"> Account information</a>
          </li>
          <li>
            <a href="/insert"> Add transaction </a>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact>
            <ReportComponent/>
          </Route>
          <Route path="/insert">
            <FormComponent onAddItem={onAddNewItem}/> 
            <Transaction items = {items}/>
          </Route>
        </Switch>
       </div>
      </Router>
    </div>
    
   </DataContext.Provider>
  
  );
};

// call  <FormComponent onAddItem={onAddNewItem}/> >> ComponentName PropName={function}

export default App;


