import DataContext from "../data/DataContext"
import { useContext } from "react"
import './ReportComponent.css'


const ReportComponent=()=>{
    const {income, expense} = useContext(DataContext);
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    
    return (
        <div>
           <h4 className="amount"> Total amount </h4>
           <h1 className="amount"> A$ {formatNumber((income-expense).toFixed(2))}</h1>
           <div className="report-container">
               <div>
                    <h4> Income</h4>
                    <p className="report plus">A$ {formatNumber(income)}</p>
               </div>
               <div>
                    <h4> Expense</h4>
                    <p className="report minus">A$ {formatNumber(expense)}</p>
               </div>
           </div>
            {/* <DataContext.Consumer>
                {context=> <p>income: {context.income} expense: {context.expense}</p>}
            </DataContext.Consumer> */}
        </div>
    )
}

export default ReportComponent
